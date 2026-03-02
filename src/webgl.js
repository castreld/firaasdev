/**
 * WebGL — Three.js particle systems.
 * 1. Splash screen: Icosahedron wireframe with explosion
 * 2. Global background: Depth-layered star field with mouse parallax
 */

import * as THREE from 'three';
import gsap from 'gsap';

export function setupWebGL() {
    initSplashGeometry();
    initStarField();
}

// ─── Splash Screen — Rotating Wireframe ───
function initSplashGeometry() {
    const canvas = document.getElementById('splash-webgl-canvas');
    if (!canvas) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, innerWidth / innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    renderer.setSize(innerWidth, innerHeight);
    renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
    camera.position.z = 4;

    // Icosahedron wireframe
    const geo = new THREE.IcosahedronGeometry(1.5, 1);
    const mat = new THREE.MeshBasicMaterial({
        color: 0x00e5ff,
        wireframe: true,
        transparent: true,
        opacity: 0.6,
    });
    const mesh = new THREE.Mesh(geo, mat);
    scene.add(mesh);

    // Outer ring
    const ringGeo = new THREE.RingGeometry(2.2, 2.25, 64);
    const ringMat = new THREE.MeshBasicMaterial({
        color: 0xb026ff,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.3,
    });
    const ring = new THREE.Mesh(ringGeo, ringMat);
    scene.add(ring);

    // Scattered points
    const pointCount = 200;
    const pointGeo = new THREE.BufferGeometry();
    const pointPos = new Float32Array(pointCount * 3);
    for (let i = 0; i < pointCount * 3; i += 3) {
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos(2 * Math.random() - 1);
        const r = 2 + Math.random() * 2;
        pointPos[i] = r * Math.sin(phi) * Math.cos(theta);
        pointPos[i + 1] = r * Math.sin(phi) * Math.sin(theta);
        pointPos[i + 2] = r * Math.cos(phi);
    }
    pointGeo.setAttribute('position', new THREE.BufferAttribute(pointPos, 3));
    const pointMat = new THREE.PointsMaterial({
        color: 0x00e5ff,
        size: 0.02,
        transparent: true,
        opacity: 0.5,
        blending: THREE.AdditiveBlending,
    });
    const points = new THREE.Points(pointGeo, pointMat);
    scene.add(points);

    let running = true;

    function animate() {
        if (!running) return;
        requestAnimationFrame(animate);
        mesh.rotation.x += 0.005;
        mesh.rotation.y += 0.008;
        ring.rotation.z -= 0.003;
        points.rotation.y += 0.002;
        renderer.render(scene, camera);
    }
    animate();

    // Resize
    window.addEventListener('resize', () => {
        renderer.setSize(innerWidth, innerHeight);
        camera.aspect = innerWidth / innerHeight;
        camera.updateProjectionMatrix();
    });

    // Explosion trigger — called before splash dismiss
    window.triggerSplashExplosion = () => {
        gsap.to(mat, { opacity: 0, duration: 0.8 });
        gsap.to(ringMat, { opacity: 0, duration: 0.8 });
        gsap.to(pointMat, { opacity: 0, duration: 0.8 });
        gsap.to(mesh.scale, { x: 3, y: 3, z: 3, duration: 0.8, ease: 'power2.out' });
        gsap.to(points.scale, { x: 2, y: 2, z: 2, duration: 0.8, ease: 'power2.out' });
        setTimeout(() => {
            running = false;
            renderer.dispose();
        }, 1000);
    };
}

// ─── Global Star Field Background ───
function initStarField() {
    const canvas = document.getElementById('global-webgl-canvas');
    if (!canvas) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, innerWidth / innerHeight, 0.1, 3000);
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: false });
    renderer.setSize(innerWidth, innerHeight);
    renderer.setPixelRatio(Math.min(devicePixelRatio, 1.5));
    camera.position.z = 600;

    // Create layered particles at different depths
    const layers = [
        { count: 800, spread: 2500, depth: 1200, size: 2.5, speed: 0.08, color1: 0x00e5ff, color2: 0xb026ff },
        { count: 600, spread: 2000, depth: 800, size: 1.8, speed: 0.12, color1: 0x4488ff, color2: 0x00e5ff },
        { count: 400, spread: 1500, depth: 500, size: 1.2, speed: 0.18, color1: 0xffffff, color2: 0x8844ff },
    ];

    const particleSystems = [];

    layers.forEach(layer => {
        const geo = new THREE.BufferGeometry();
        const positions = new Float32Array(layer.count * 3);
        const colors = new Float32Array(layer.count * 3);
        const c1 = new THREE.Color(layer.color1);
        const c2 = new THREE.Color(layer.color2);

        for (let i = 0; i < layer.count * 3; i += 3) {
            positions[i] = (Math.random() - 0.5) * layer.spread;
            positions[i + 1] = (Math.random() - 0.5) * layer.spread;
            positions[i + 2] = (Math.random() - 0.5) * layer.depth;

            const mixed = c1.clone().lerp(c2, Math.random());
            colors[i] = mixed.r;
            colors[i + 1] = mixed.g;
            colors[i + 2] = mixed.b;
        }

        geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));

        const mat = new THREE.PointsMaterial({
            size: layer.size,
            vertexColors: true,
            transparent: true,
            opacity: 0.5,
            blending: THREE.AdditiveBlending,
            depthWrite: false,
        });

        const particles = new THREE.Points(geo, mat);
        scene.add(particles);
        particleSystems.push({ particles, speed: layer.speed });
    });

    // Mouse interaction
    let mouseX = 0, mouseY = 0;
    document.addEventListener('mousemove', (e) => {
        mouseX = (e.clientX - innerWidth / 2) * 0.5;
        mouseY = (e.clientY - innerHeight / 2) * 0.5;
    });

    // Scroll-based depth
    let scrollY = 0;
    window.addEventListener('scroll', () => { scrollY = window.scrollY; }, { passive: true });

    let time = 0;
    function animate() {
        requestAnimationFrame(animate);
        time += 0.003;

        // Camera follows mouse smoothly
        camera.position.x += (mouseX * 0.08 - camera.position.x) * 0.03;
        camera.position.y += (-mouseY * 0.08 - camera.position.y) * 0.03;
        camera.lookAt(0, 0, 0);

        // Rotate particle layers at different speeds
        particleSystems.forEach(({ particles, speed }, i) => {
            particles.rotation.y = time * speed;
            particles.rotation.x = time * speed * 0.3;
            // Scroll parallax per layer
            particles.position.y = -scrollY * 0.05 * (i + 1) * 0.3;
        });

        renderer.render(scene, camera);
    }
    animate();

    // Resize
    window.addEventListener('resize', () => {
        renderer.setSize(innerWidth, innerHeight);
        camera.aspect = innerWidth / innerHeight;
        camera.updateProjectionMatrix();
    });
}
