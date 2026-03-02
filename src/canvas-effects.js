/**
 * Canvas Effects — Hero waveform, Footer ECG, and Project card backgrounds.
 * Optimized: only animates when visible via IntersectionObserver.
 */

export function setupCanvasEffects() {
    initHeroWaves();
    initFooterECG();
    initProjectCanvases();
}

// ─── Hero Synth Waves ───
function initHeroWaves() {
    const canvas = document.getElementById('hero-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let w, h, time = 0, animId;
    let mouseY = 0;

    function resize() {
        w = canvas.width = canvas.parentElement.offsetWidth;
        h = canvas.height = canvas.parentElement.offsetHeight;
    }

    window.addEventListener('resize', resize);
    resize();

    document.addEventListener('mousemove', (e) => mouseY = e.clientY);

    function draw() {
        ctx.clearRect(0, 0, w, h);
        time += 0.02;

        const cy = h / 2;
        const mInfluence = ((mouseY / innerHeight) - 0.5) * 60;

        // Wave 1 — cyan
        ctx.beginPath();
        ctx.strokeStyle = 'rgba(0, 229, 255, 0.25)';
        ctx.lineWidth = 2;
        for (let x = 0; x < w; x += 4) {
            const y = cy + mInfluence + Math.sin(x * 0.006 + time) * 50 * Math.sin(x * 0.002 - time * 0.4);
            x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
        }
        ctx.stroke();

        // Wave 2 — purple
        ctx.beginPath();
        ctx.strokeStyle = 'rgba(176, 38, 255, 0.2)';
        ctx.lineWidth = 2;
        for (let x = 0; x < w; x += 4) {
            const y = cy - mInfluence + Math.sin(x * 0.01 - time * 1.1) * 70 * Math.cos(x * 0.0015 + time * 0.6);
            x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
        }
        ctx.stroke();

        // Wave 3 — subtle white
        ctx.beginPath();
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.04)';
        ctx.lineWidth = 1;
        for (let x = 0; x < w; x += 4) {
            const y = cy + Math.sin(x * 0.004 + time * 0.8) * 30 * Math.cos(x * 0.003 - time * 0.3);
            x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
        }
        ctx.stroke();

        animId = requestAnimationFrame(draw);
    }

    // Only animate when hero is visible
    const observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
            draw();
        } else {
            cancelAnimationFrame(animId);
        }
    }, { threshold: 0.1 });

    observer.observe(canvas.parentElement);
}

// ─── Footer ECG Pulse ───
function initFooterECG() {
    const canvas = document.getElementById('footer-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let w, h, time = 0, animId;

    function resize() {
        w = canvas.width = canvas.parentElement.offsetWidth;
        h = canvas.height = canvas.parentElement.offsetHeight * 0.5;
    }

    window.addEventListener('resize', resize);
    resize();

    function draw() {
        ctx.clearRect(0, 0, w, h);
        time += 0.04;

        const cy = h * 0.6;

        // Main pulse line
        ctx.beginPath();
        ctx.strokeStyle = 'rgba(0, 229, 255, 0.5)';
        ctx.lineWidth = 2;
        ctx.shadowBlur = 12;
        ctx.shadowColor = 'rgba(0, 229, 255, 0.3)';

        for (let x = 0; x < w; x += 3) {
            let y = cy;

            // Main heartbeat spike
            const pulsePos = (time * 120) % w;
            const pulse = Math.exp(-Math.pow((x - pulsePos) / 30, 2));
            y -= pulse * 60;

            // Secondary bump
            const pulse2 = Math.exp(-Math.pow((x - pulsePos + 50) / 18, 2));
            y += pulse2 * 25;

            // Diminish towards edges
            const edgeFade = Math.sin((x / w) * Math.PI);
            y = cy + (y - cy) * edgeFade;

            x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
        }
        ctx.stroke();
        ctx.shadowBlur = 0;

        // Scanline glow at pulse position
        const pulseX = (time * 120) % w;
        const gradient = ctx.createLinearGradient(pulseX - 40, 0, pulseX + 40, 0);
        gradient.addColorStop(0, 'transparent');
        gradient.addColorStop(0.5, 'rgba(0, 229, 255, 0.08)');
        gradient.addColorStop(1, 'transparent');
        ctx.fillStyle = gradient;
        ctx.fillRect(pulseX - 40, 0, 80, h);

        animId = requestAnimationFrame(draw);
    }

    const observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
            draw();
        } else {
            cancelAnimationFrame(animId);
        }
    }, { threshold: 0.1 });

    observer.observe(canvas.parentElement);
}

// ─── Project Card Canvas Backgrounds ───
function initProjectCanvases() {
    document.querySelectorAll('.project-canvas').forEach(canvas => {
        const ctx = canvas.getContext('2d');
        const type = canvas.dataset.type;
        let w, h, animId;

        function resize() {
            const rect = canvas.parentElement.getBoundingClientRect();
            w = canvas.width = rect.width;
            h = canvas.height = rect.height;
        }

        const ro = new ResizeObserver(resize);
        ro.observe(canvas.parentElement);
        resize();

        // Node particles
        let particles = [];
        if (type === 'nodes') {
            for (let i = 0; i < 25; i++) {
                particles.push({
                    x: Math.random() * (w || 300),
                    y: Math.random() * (h || 300),
                    vx: (Math.random() - 0.5) * 0.5,
                    vy: (Math.random() - 0.5) * 0.5,
                    size: Math.random() * 1.5 + 0.5,
                });
            }
        }

        let radarAngle = 0;

        function draw() {
            ctx.clearRect(0, 0, w, h);

            if (type === 'nodes') {
                ctx.fillStyle = 'rgba(0, 229, 255, 0.5)';
                ctx.strokeStyle = 'rgba(0, 229, 255, 0.08)';
                ctx.lineWidth = 0.5;

                particles.forEach((p, i) => {
                    p.x += p.vx;
                    p.y += p.vy;
                    if (p.x < 0 || p.x > w) p.vx *= -1;
                    if (p.y < 0 || p.y > h) p.vy *= -1;

                    ctx.beginPath();
                    ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                    ctx.fill();

                    for (let j = i + 1; j < particles.length; j++) {
                        const p2 = particles[j];
                        const dist = Math.hypot(p.x - p2.x, p.y - p2.y);
                        if (dist < 80) {
                            ctx.globalAlpha = 1 - dist / 80;
                            ctx.beginPath();
                            ctx.moveTo(p.x, p.y);
                            ctx.lineTo(p2.x, p2.y);
                            ctx.stroke();
                            ctx.globalAlpha = 1;
                        }
                    }
                });
            } else if (type === 'radar') {
                radarAngle += 0.02;
                const cx = w / 2, cy = h / 2;
                const r = Math.min(cx, cy) - 20;

                ctx.strokeStyle = 'rgba(176, 38, 255, 0.15)';
                ctx.lineWidth = 1;
                [1, 0.65, 0.3].forEach(s => {
                    ctx.beginPath();
                    ctx.arc(cx, cy, r * s, 0, Math.PI * 2);
                    ctx.stroke();
                });

                // Crosshair
                ctx.strokeStyle = 'rgba(176, 38, 255, 0.06)';
                ctx.beginPath();
                ctx.moveTo(cx - r, cy); ctx.lineTo(cx + r, cy);
                ctx.moveTo(cx, cy - r); ctx.lineTo(cx, cy + r);
                ctx.stroke();

                // Sweep
                const grad = ctx.createConicGradient(radarAngle, cx, cy);
                grad.addColorStop(0, 'rgba(176, 38, 255, 0.12)');
                grad.addColorStop(0.15, 'transparent');
                grad.addColorStop(1, 'transparent');
                ctx.fillStyle = grad;
                ctx.beginPath();
                ctx.arc(cx, cy, r, 0, Math.PI * 2);
                ctx.fill();

                // Blip
                const blipX = cx + Math.cos(radarAngle - 0.3) * r * 0.6;
                const blipY = cy + Math.sin(radarAngle - 0.3) * r * 0.6;
                ctx.fillStyle = 'rgba(0, 229, 255, 0.9)';
                ctx.shadowBlur = 10;
                ctx.shadowColor = '#00e5ff';
                ctx.beginPath();
                ctx.arc(blipX, blipY, 3, 0, Math.PI * 2);
                ctx.fill();
                ctx.shadowBlur = 0;
            }

            animId = requestAnimationFrame(draw);
        }

        // Only animate when card is visible
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                draw();
            } else {
                cancelAnimationFrame(animId);
            }
        }, { threshold: 0.05 });

        observer.observe(canvas.parentElement);
    });
}
