/**
 * Showcase Environments — Unique canvas backgrounds for each project.
 * Each environment creates a distinct visual identity:
 * 
 * 1. Manhwa Studio Pro  → "matrix"    — Digital rain / code cascade
 * 2. Fleet Tracking      → "orbital"   — Orbital rings with satellite dots
 * 3. TG Pay              → "hexgrid"   — Hexagonal mesh pulse network
 * 4. SIAGA               → "smoke"     — Floating organic gas particles
 * 5. MindSpace           → "aurora"    — Calm aurora borealis waves
 */

const environments = {
    matrix: initMatrix,
    orbital: initOrbital,
    hexgrid: initHexGrid,
    smoke: initSmoke,
    aurora: initAurora,
};

let activeCleanup = null;

export function startEnvironment(canvas, envType) {
    stopEnvironment();
    const init = environments[envType];
    if (init && canvas) {
        activeCleanup = init(canvas);
    }
}

export function stopEnvironment() {
    if (activeCleanup) {
        activeCleanup();
        activeCleanup = null;
    }
}

// ─────────────────────────────────────────────
// 1. MATRIX — Digital Code Rain
// ─────────────────────────────────────────────
function initMatrix(canvas) {
    const ctx = canvas.getContext('2d');
    let w, h, columns, drops;
    let animId;

    const chars = 'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン01234567890ABCDEF</>{}[];'.split('');

    function resize() {
        w = canvas.width = canvas.parentElement.offsetWidth;
        h = canvas.height = canvas.parentElement.offsetHeight;
        const fontSize = 14;
        columns = Math.floor(w / fontSize);
        drops = new Array(columns).fill(1).map(() => Math.random() * -100);
    }

    resize();
    window.addEventListener('resize', resize);

    function draw() {
        ctx.fillStyle = 'rgba(5, 5, 16, 0.06)';
        ctx.fillRect(0, 0, w, h);

        ctx.font = '14px monospace';

        for (let i = 0; i < drops.length; i++) {
            const char = chars[Math.floor(Math.random() * chars.length)];
            const x = i * 14;
            const y = drops[i] * 14;

            // Gradient color — cyan at head, purple trail
            const brightness = Math.max(0, 1 - (drops[i] * 14) / h);
            if (Math.random() > 0.97) {
                ctx.fillStyle = `rgba(255, 255, 255, ${0.9 * brightness})`;
            } else if (drops[i] * 14 > h * 0.3) {
                ctx.fillStyle = `rgba(176, 38, 255, ${0.5 * brightness})`;
            } else {
                ctx.fillStyle = `rgba(0, 229, 255, ${0.8 * brightness})`;
            }

            ctx.fillText(char, x, y);

            if (y > h && Math.random() > 0.975) {
                drops[i] = 0;
            }
            drops[i] += 0.5 + Math.random() * 0.5;
        }

        animId = requestAnimationFrame(draw);
    }

    // Initial fill
    ctx.fillStyle = 'rgba(5, 5, 16, 1)';
    ctx.fillRect(0, 0, w, h);
    draw();

    return () => {
        cancelAnimationFrame(animId);
        window.removeEventListener('resize', resize);
    };
}

// ─────────────────────────────────────────────
// 2. ORBITAL — Planet with Satellite Rings
// ─────────────────────────────────────────────
function initOrbital(canvas) {
    const ctx = canvas.getContext('2d');
    let w, h, time = 0, animId;

    function resize() {
        w = canvas.width = canvas.parentElement.offsetWidth;
        h = canvas.height = canvas.parentElement.offsetHeight;
    }

    resize();
    window.addEventListener('resize', resize);

    // Generate stars
    const stars = Array.from({ length: 150 }, () => ({
        x: Math.random(),
        y: Math.random(),
        size: Math.random() * 1.5 + 0.3,
        twinkle: Math.random() * Math.PI * 2,
    }));

    // Satellites on each ring
    const satellites = [
        { ring: 0, angle: 0, speed: 0.008 },
        { ring: 0, angle: Math.PI, speed: 0.008 },
        { ring: 1, angle: Math.PI / 3, speed: -0.005 },
        { ring: 2, angle: Math.PI / 2, speed: 0.012 },
        { ring: 2, angle: Math.PI * 1.5, speed: 0.012 },
    ];

    function draw() {
        ctx.clearRect(0, 0, w, h);
        time += 0.01;

        const cx = w * 0.5;
        const cy = h * 0.5;

        // Stars
        stars.forEach(s => {
            const alpha = 0.3 + Math.sin(time * 2 + s.twinkle) * 0.3;
            ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
            ctx.beginPath();
            ctx.arc(s.x * w, s.y * h, s.size, 0, Math.PI * 2);
            ctx.fill();
        });

        // Planet glow
        const glow = ctx.createRadialGradient(cx, cy, 30, cx, cy, 120);
        glow.addColorStop(0, 'rgba(0, 229, 255, 0.15)');
        glow.addColorStop(0.5, 'rgba(0, 100, 180, 0.05)');
        glow.addColorStop(1, 'transparent');
        ctx.fillStyle = glow;
        ctx.beginPath();
        ctx.arc(cx, cy, 120, 0, Math.PI * 2);
        ctx.fill();

        // Planet core
        const planetGrad = ctx.createRadialGradient(cx - 15, cy - 15, 5, cx, cy, 50);
        planetGrad.addColorStop(0, 'rgba(30, 80, 120, 0.8)');
        planetGrad.addColorStop(1, 'rgba(10, 20, 40, 0.9)');
        ctx.fillStyle = planetGrad;
        ctx.beginPath();
        ctx.arc(cx, cy, 50, 0, Math.PI * 2);
        ctx.fill();

        // Orbital rings (ellipses)
        const rings = [
            { rx: 160, ry: 50, tilt: -0.3, color: 'rgba(0, 229, 255, 0.2)' },
            { rx: 220, ry: 70, tilt: 0.15, color: 'rgba(176, 38, 255, 0.15)' },
            { rx: 300, ry: 90, tilt: -0.1, color: 'rgba(0, 229, 255, 0.1)' },
        ];

        rings.forEach((ring, ri) => {
            ctx.save();
            ctx.translate(cx, cy);
            ctx.rotate(ring.tilt);
            ctx.strokeStyle = ring.color;
            ctx.lineWidth = 1;
            ctx.setLineDash([4, 6]);
            ctx.beginPath();
            ctx.ellipse(0, 0, ring.rx, ring.ry, 0, 0, Math.PI * 2);
            ctx.stroke();
            ctx.setLineDash([]);
            ctx.restore();
        });

        // Satellites
        satellites.forEach(sat => {
            sat.angle += sat.speed;
            const ring = rings[sat.ring];
            const sx = cx + Math.cos(sat.angle) * ring.rx * Math.cos(ring.tilt) - Math.sin(sat.angle) * ring.ry * Math.sin(ring.tilt);
            const sy = cy + Math.cos(sat.angle) * ring.rx * Math.sin(ring.tilt) + Math.sin(sat.angle) * ring.ry * Math.cos(ring.tilt);

            // Trail
            ctx.fillStyle = 'rgba(0, 229, 255, 0.08)';
            ctx.beginPath();
            ctx.arc(sx, sy, 8, 0, Math.PI * 2);
            ctx.fill();

            // Dot
            ctx.fillStyle = 'rgba(0, 229, 255, 0.9)';
            ctx.shadowBlur = 8;
            ctx.shadowColor = '#00e5ff';
            ctx.beginPath();
            ctx.arc(sx, sy, 3, 0, Math.PI * 2);
            ctx.fill();
            ctx.shadowBlur = 0;
        });

        animId = requestAnimationFrame(draw);
    }

    draw();

    return () => {
        cancelAnimationFrame(animId);
        window.removeEventListener('resize', resize);
    };
}

// ─────────────────────────────────────────────
// 3. HEXGRID — Pulsing Hexagonal Network
// ─────────────────────────────────────────────
function initHexGrid(canvas) {
    const ctx = canvas.getContext('2d');
    let w, h, time = 0, animId;

    function resize() {
        w = canvas.width = canvas.parentElement.offsetWidth;
        h = canvas.height = canvas.parentElement.offsetHeight;
    }

    resize();
    window.addEventListener('resize', resize);

    const hexSize = 40;
    const sqrt3 = Math.sqrt(3);

    function drawHex(cx, cy, size, alpha, pulsePhase) {
        const pulse = 0.3 + Math.sin(time * 2 + pulsePhase) * 0.3;
        ctx.strokeStyle = `rgba(0, 229, 255, ${alpha * pulse})`;
        ctx.lineWidth = 0.8;
        ctx.beginPath();
        for (let i = 0; i < 6; i++) {
            const angle = (Math.PI / 3) * i - Math.PI / 6;
            const x = cx + size * Math.cos(angle);
            const y = cy + size * Math.sin(angle);
            i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
        }
        ctx.closePath();
        ctx.stroke();

        // Center dot on some
        if (pulse > 0.5 && Math.random() > 0.98) {
            ctx.fillStyle = `rgba(176, 38, 255, ${pulse})`;
            ctx.beginPath();
            ctx.arc(cx, cy, 2, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    // Pulse wave origin
    let pulseOriginX = 0, pulseOriginY = 0;
    canvas.parentElement.addEventListener('mousemove', (e) => {
        const rect = canvas.parentElement.getBoundingClientRect();
        pulseOriginX = e.clientX - rect.left;
        pulseOriginY = e.clientY - rect.top;
    });

    function draw() {
        ctx.clearRect(0, 0, w, h);
        time += 0.02;

        const rowH = hexSize * sqrt3;
        const colW = hexSize * 1.5;

        for (let row = -1; row < h / rowH + 1; row++) {
            for (let col = -1; col < w / colW + 1; col++) {
                const cx = col * colW;
                const cy = row * rowH + (col % 2 === 0 ? 0 : rowH / 2);

                const dist = Math.hypot(cx - pulseOriginX, cy - pulseOriginY);
                const maxDist = Math.hypot(w, h);

                // Ripple wave from mouse
                const wave = Math.sin(time * 3 - dist * 0.01);
                const alpha = Math.max(0.05, 0.3 - dist / maxDist * 0.3 + wave * 0.15);

                drawHex(cx, cy, hexSize * 0.9, alpha, dist * 0.015);
            }
        }

        // Connection lines from active hexes
        const activeCx = Math.round(pulseOriginX / colW) * colW;
        const activeCy = Math.round(pulseOriginY / rowH) * rowH;

        ctx.strokeStyle = 'rgba(176, 38, 255, 0.2)';
        ctx.lineWidth = 0.5;
        for (let i = 0; i < 6; i++) {
            const angle = (Math.PI / 3) * i;
            const nx = activeCx + Math.cos(angle) * hexSize * 2;
            const ny = activeCy + Math.sin(angle) * hexSize * 2;
            ctx.beginPath();
            ctx.moveTo(activeCx, activeCy);
            ctx.lineTo(nx, ny);
            ctx.stroke();
        }

        animId = requestAnimationFrame(draw);
    }

    draw();

    return () => {
        cancelAnimationFrame(animId);
        window.removeEventListener('resize', resize);
    };
}

// ─────────────────────────────────────────────
// 4. SMOKE — Organic Floating Gas Particles
// ─────────────────────────────────────────────
function initSmoke(canvas) {
    const ctx = canvas.getContext('2d');
    let w, h, time = 0, animId;

    function resize() {
        w = canvas.width = canvas.parentElement.offsetWidth;
        h = canvas.height = canvas.parentElement.offsetHeight;
    }

    resize();
    window.addEventListener('resize', resize);

    // Smoke particles
    const particles = Array.from({ length: 60 }, () => ({
        x: Math.random() * (w || 800),
        y: Math.random() * (h || 600),
        size: Math.random() * 80 + 40,
        vx: (Math.random() - 0.5) * 0.3,
        vy: -Math.random() * 0.5 - 0.1,
        opacity: Math.random() * 0.06 + 0.02,
        hue: Math.random() > 0.5 ? 186 : 275, // cyan or purple
        phase: Math.random() * Math.PI * 2,
    }));

    // Sensor dots
    const sensors = Array.from({ length: 8 }, () => ({
        x: Math.random() * (w || 800),
        y: Math.random() * (h || 600),
        pulse: Math.random() * Math.PI * 2,
    }));

    function draw() {
        ctx.clearRect(0, 0, w, h);
        time += 0.01;

        // Smoke blobs
        particles.forEach(p => {
            p.x += p.vx + Math.sin(time + p.phase) * 0.3;
            p.y += p.vy;

            // Wrap around
            if (p.y < -p.size) { p.y = h + p.size; p.x = Math.random() * w; }
            if (p.x < -p.size) p.x = w + p.size;
            if (p.x > w + p.size) p.x = -p.size;

            const sizePulse = p.size + Math.sin(time * 2 + p.phase) * 10;
            const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, sizePulse);

            if (p.hue === 186) {
                gradient.addColorStop(0, `rgba(0, 229, 255, ${p.opacity * 1.5})`);
                gradient.addColorStop(0.5, `rgba(0, 150, 200, ${p.opacity * 0.7})`);
            } else {
                gradient.addColorStop(0, `rgba(176, 38, 255, ${p.opacity * 1.5})`);
                gradient.addColorStop(0.5, `rgba(100, 20, 180, ${p.opacity * 0.7})`);
            }
            gradient.addColorStop(1, 'transparent');

            ctx.fillStyle = gradient;
            ctx.beginPath();
            ctx.arc(p.x, p.y, sizePulse, 0, Math.PI * 2);
            ctx.fill();
        });

        // Sensor indicators
        sensors.forEach(s => {
            s.pulse += 0.03;
            const pulseSize = 4 + Math.sin(s.pulse) * 2;

            ctx.fillStyle = 'rgba(0, 255, 136, 0.6)';
            ctx.shadowBlur = 8;
            ctx.shadowColor = 'rgba(0, 255, 136, 0.4)';
            ctx.beginPath();
            ctx.arc(s.x, s.y, pulseSize, 0, Math.PI * 2);
            ctx.fill();
            ctx.shadowBlur = 0;

            // Ring pulse
            const ringSize = 10 + Math.sin(s.pulse) * 8;
            ctx.strokeStyle = `rgba(0, 255, 136, ${0.3 - Math.sin(s.pulse) * 0.15})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.arc(s.x, s.y, ringSize, 0, Math.PI * 2);
            ctx.stroke();
        });

        // Danger zone indicator (subtle)
        const dangerPulse = 0.3 + Math.sin(time * 4) * 0.15;
        ctx.strokeStyle = `rgba(255, 60, 60, ${dangerPulse * 0.15})`;
        ctx.lineWidth = 2;
        ctx.setLineDash([8, 12]);
        ctx.beginPath();
        ctx.arc(w * 0.7, h * 0.3, 60 + Math.sin(time * 2) * 10, 0, Math.PI * 2);
        ctx.stroke();
        ctx.setLineDash([]);

        animId = requestAnimationFrame(draw);
    }

    draw();

    return () => {
        cancelAnimationFrame(animId);
        window.removeEventListener('resize', resize);
    };
}

// ─────────────────────────────────────────────
// 5. AURORA — Calm Borealis Waves
// ─────────────────────────────────────────────
function initAurora(canvas) {
    const ctx = canvas.getContext('2d');
    let w, h, time = 0, animId;

    function resize() {
        w = canvas.width = canvas.parentElement.offsetWidth;
        h = canvas.height = canvas.parentElement.offsetHeight;
    }

    resize();
    window.addEventListener('resize', resize);

    // Stars
    const stars = Array.from({ length: 100 }, () => ({
        x: Math.random(),
        y: Math.random() * 0.6,
        size: Math.random() * 1.2 + 0.3,
        twinkle: Math.random() * Math.PI * 2,
    }));

    // Floating particles (fireflies)
    const fireflies = Array.from({ length: 20 }, () => ({
        x: Math.random() * (w || 800),
        y: Math.random() * (h || 600),
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        phase: Math.random() * Math.PI * 2,
        size: Math.random() * 3 + 1,
    }));

    function draw() {
        ctx.clearRect(0, 0, w, h);
        time += 0.008;

        // Stars
        stars.forEach(s => {
            const alpha = 0.2 + Math.sin(time * 3 + s.twinkle) * 0.2;
            ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
            ctx.beginPath();
            ctx.arc(s.x * w, s.y * h, s.size, 0, Math.PI * 2);
            ctx.fill();
        });

        // Aurora bands
        const bands = [
            { yOffset: 0.35, amplitude: 60, color1: [0, 229, 255], color2: [100, 255, 200], speed: 1 },
            { yOffset: 0.4, amplitude: 80, color1: [176, 38, 255], color2: [0, 200, 255], speed: 0.7 },
            { yOffset: 0.45, amplitude: 50, color1: [80, 200, 255], color2: [176, 80, 255], speed: 1.3 },
        ];

        bands.forEach(band => {
            const baseY = h * band.yOffset;

            for (let pass = 0; pass < 3; pass++) {
                ctx.beginPath();
                ctx.moveTo(0, h);

                for (let x = 0; x <= w; x += 4) {
                    const wave1 = Math.sin(x * 0.003 + time * band.speed) * band.amplitude;
                    const wave2 = Math.sin(x * 0.007 - time * band.speed * 0.5) * band.amplitude * 0.4;
                    const wave3 = Math.sin(x * 0.001 + time * 0.3) * band.amplitude * 0.6;
                    const y = baseY + wave1 + wave2 + wave3 + pass * 20;
                    ctx.lineTo(x, y);
                }

                ctx.lineTo(w, h);
                ctx.closePath();

                const [r1, g1, b1] = band.color1;
                const [r2, g2, b2] = band.color2;
                const mix = (Math.sin(time * 0.5) + 1) / 2;
                const r = Math.round(r1 + (r2 - r1) * mix);
                const g = Math.round(g1 + (g2 - g1) * mix);
                const b = Math.round(b1 + (b2 - b1) * mix);

                const opacity = 0.03 - pass * 0.008;
                ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${Math.max(0.005, opacity)})`;
                ctx.fill();
            }
        });

        // Fireflies
        fireflies.forEach(f => {
            f.x += f.vx + Math.sin(time * 2 + f.phase) * 0.2;
            f.y += f.vy + Math.cos(time * 1.5 + f.phase) * 0.2;
            if (f.x < 0) f.x = w;
            if (f.x > w) f.x = 0;
            if (f.y < 0) f.y = h;
            if (f.y > h) f.y = 0;

            const alpha = 0.3 + Math.sin(time * 3 + f.phase) * 0.3;
            ctx.fillStyle = `rgba(200, 255, 230, ${alpha})`;
            ctx.shadowBlur = 12;
            ctx.shadowColor = `rgba(200, 255, 230, ${alpha * 0.5})`;
            ctx.beginPath();
            ctx.arc(f.x, f.y, f.size, 0, Math.PI * 2);
            ctx.fill();
            ctx.shadowBlur = 0;
        });

        animId = requestAnimationFrame(draw);
    }

    draw();

    return () => {
        cancelAnimationFrame(animId);
        window.removeEventListener('resize', resize);
    };
}
