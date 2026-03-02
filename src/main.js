import './style.css';
import { setupCanvasEffects } from './canvas-effects.js';
import { setupWebGL } from './webgl.js';
import { startEnvironment, stopEnvironment } from './showcase-environments.js';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import SplitType from 'split-type';

gsap.registerPlugin(ScrollTrigger);

document.addEventListener('DOMContentLoaded', () => {
  // ─── Lenis Smooth Scroll ───
  const lenis = new Lenis({
    lerp: 0.08,
    smoothWheel: true,
    wheelMultiplier: 0.8,
  });

  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((time) => lenis.raf(time * 1000));
  gsap.ticker.lagSmoothing(0);

  // ─── Custom Cursor (desktop only) ───
  const cursor = document.getElementById('custom-cursor');
  const isTouch = matchMedia('(hover: none)').matches;

  if (!isTouch && cursor) {
    let mx = innerWidth / 2, my = innerHeight / 2;
    let cx = mx, cy = my;

    function renderCursor() {
      cx += (mx - cx) * 0.12;
      cy += (my - cy) * 0.12;
      cursor.style.transform = `translate(${cx - 20}px, ${cy - 20}px)`;
      requestAnimationFrame(renderCursor);
    }
    requestAnimationFrame(renderCursor);

    document.addEventListener('mousemove', (e) => {
      mx = e.clientX;
      my = e.clientY;
    });

    // Hover states — delegate for dynamically created elements
    document.addEventListener('mouseover', (e) => {
      if (e.target.closest('a, button, .skill-card, .project-card, .stat-card, .contact-line')) {
        cursor.classList.add('hovering');
      }
    });
    document.addEventListener('mouseout', (e) => {
      if (e.target.closest('a, button, .skill-card, .project-card, .stat-card, .contact-line')) {
        cursor.classList.remove('hovering');
      }
    });
  }

  // ─── Scroll Progress ───
  const progressBar = document.getElementById('scroll-progress');
  window.addEventListener('scroll', () => {
    const h = document.documentElement.scrollHeight - innerHeight;
    const pct = (window.scrollY / h) * 100;
    progressBar.style.width = `${pct}%`;
  }, { passive: true });

  // ─── Navigation Active Section ───
  const nav = document.getElementById('main-nav');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('.section');

  // Scrolled state for nav
  const scrollObserver = () => {
    if (window.scrollY > 50) nav.classList.add('scrolled');
    else nav.classList.remove('scrolled');
  };
  window.addEventListener('scroll', scrollObserver, { passive: true });

  // Intersection Observer for active nav link
  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(l => l.classList.remove('active'));
        const active = document.querySelector(`.nav-link[data-section="${entry.target.id}"]`);
        if (active) active.classList.add('active');
      }
    });
  }, { rootMargin: '-30% 0px -60% 0px' });

  sections.forEach(s => {
    if (s.id !== 'hero') sectionObserver.observe(s);
  });

  // Smooth scroll on nav click
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute('href'));
      if (target) lenis.scrollTo(target, { offset: -60 });
    });
  });

  // Hero buttons smooth scroll
  document.querySelectorAll('.btn').forEach(btn => {
    const href = btn.getAttribute('href');
    if (href && href.startsWith('#')) {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) lenis.scrollTo(target, { offset: -60 });
      });
    }
  });

  // ─── WebGL Init ───
  setupWebGL();

  // ─── Splash Screen ───
  const splashLines = [
    'INITIALIZING SYSTEM OVERRIDE...',
    'LOADING KERNEL MODULES...',
    'WELCOME, SIR.'
  ];
  const splashTarget = document.getElementById('splash-typewriter');
  const splashProgressBar = document.querySelector('.splash-progress-bar');
  let lineIdx = 0, charIdx = 0;
  const totalChars = splashLines.join('').length;
  let typedTotal = 0;

  function typeSplash() {
    if (lineIdx < splashLines.length) {
      if (charIdx < splashLines[lineIdx].length) {
        splashTarget.textContent += splashLines[lineIdx][charIdx];
        charIdx++;
        typedTotal++;
        splashProgressBar.style.width = `${(typedTotal / totalChars) * 100}%`;
        setTimeout(typeSplash, 25);
      } else {
        lineIdx++;
        charIdx = 0;
        if (lineIdx < splashLines.length) {
          splashTarget.textContent = '';
          setTimeout(typeSplash, 300);
        } else {
          splashProgressBar.style.width = '100%';
          setTimeout(dismissSplash, 800);
        }
      }
    }
  }

  function dismissSplash() {
    const splash = document.getElementById('splash-screen');
    splash.classList.add('splash-exit');
    setTimeout(() => {
      splash.style.display = 'none';
      initMainAnimations();
    }, 800);
  }

  setTimeout(typeSplash, 600);

  // ─── Populate Skills ───
  const skills = [
    { name: 'Flutter', level: 90 },
    { name: 'React 19', level: 85 },
    { name: 'Electron', level: 80 },
    { name: 'Laravel', level: 75 },
    { name: 'Vite', level: 90 },
    { name: 'DevOps', level: 85 },
    { name: 'Arch Linux', level: 95 },
  ];

  const skillsGrid = document.getElementById('skills-grid');
  const eqAnimData = [];

  skills.forEach((skill, sIdx) => {
    const card = document.createElement('div');
    card.className = 'skill-card reveal-up';

    let eqHTML = '';
    const bars = [];
    for (let j = 0; j < 12; j++) {
      eqHTML += `<div class="eq-bar" id="eq-${sIdx}-${j}"></div>`;
      bars.push({ id: `eq-${sIdx}-${j}`, offset: Math.random() * 100, h: 20, target: 20 });
    }
    eqAnimData.push({ bars, hovered: false });

    card.innerHTML = `
      <div class="skill-card-header">
        <span class="skill-name">${skill.name}</span>
        <span class="skill-level-text">${skill.level}%</span>
      </div>
      <div class="skill-bar-track">
        <div class="skill-bar-fill" data-level="${skill.level}"></div>
      </div>
      <div class="skill-eq">${eqHTML}</div>
    `;
    skillsGrid.appendChild(card);

    card.addEventListener('mouseenter', () => eqAnimData[sIdx].hovered = true);
    card.addEventListener('mouseleave', () => eqAnimData[sIdx].hovered = false);

    // Local mouse tracking for flashlight effect
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      card.style.setProperty('--local-x', `${e.clientX - rect.left}px`);
      card.style.setProperty('--local-y', `${e.clientY - rect.top}px`);
    });
  });

  // Equalizer animation loop
  let eqTime = 0;
  function animateEQ() {
    eqTime += 0.04;
    eqAnimData.forEach(card => {
      card.bars.forEach((bar, i) => {
        const el = document.getElementById(bar.id);
        if (!el) return;
        bar.target = card.hovered
          ? 85 + Math.sin(eqTime * 3 + i * 0.5) * 15
          : 15 + Math.sin(eqTime + bar.offset) * 12 + Math.cos(eqTime * 0.7 + i) * 8;
        bar.h += (bar.target - bar.h) * 0.15;
        el.style.height = `${bar.h}%`;
      });
    });
    requestAnimationFrame(animateEQ);
  }
  requestAnimationFrame(animateEQ);

  // ─── Populate Projects ───
  const projects = [
    {
      name: 'Manhwa Studio Pro',
      desc: 'All-in-One Desktop Application automating recap video creation with deep AI integration — Gemini 2.5 Flash, Imagen 4, and multi-engine TTS.',
      techs: ['React 19', 'TypeScript', 'Electron', 'Vite', 'Python', 'AI/ML'],
      type: 'nodes',
      tag: 'Desktop App',
      env: 'matrix',
      fullDesc: 'A comprehensive desktop application that automates the entire manhwa recap video creation pipeline. From parsing raw panel images and generating AI-powered scripts with Gemini 2.5 Flash, to producing studio-quality voiceovers via multi-engine TTS (ElevenLabs, Edge, Gemini) and compositing final videos with FFmpeg — all orchestrated through a sleek React 19 interface running on Electron 40.',
      highlights: [
        'AI script generation using Gemini 2.5 Flash with context-aware prompts',
        'Multi-engine TTS synthesis with automatic fallback and rate-limit handling',
        'Thumbnail generation via Imagen 4 with style-matched prompts',
        'Real-time video preview with frame-by-frame timeline editor',
        'Automatic panel detection, cleaning, and sequencing pipeline',
      ],
      screenshots: [
        '/projects_asset/manhwa/1.png',
        '/projects_asset/manhwa/2.png',
        '/projects_asset/manhwa/3.png',
        '/projects_asset/manhwa/4.png',
        '/projects_asset/manhwa/5.png',
        '/projects_asset/manhwa/6.png',
        '/projects_asset/manhwa/7.png',
      ],
    },
    {
      name: 'Fleet Tracking',
      desc: 'Professional mobile application utilizing IOPGPS APIs for real-time fleet telemetry and global asset monitoring.',
      techs: ['Next.JS', 'NestJS', 'IOPGPS API', 'Real-time', 'Maps'],
      type: 'radar',
      tag: 'Web App',
      env: 'orbital',
      fullDesc: 'A comprehensive fleet management solution providing real-time GPS tracking, vehicle telemetry, and remote command capabilities. Built with Flutter for cross-platform deployment, it integrates directly with IOPGPS hardware APIs to deliver live location updates, fuel monitoring, engine diagnostics, and geofence alerts — all rendered on interactive map layers with historical route playback.',
      highlights: [
        'Real-time GPS tracking with sub-second location updates',
        'Remote engine start/stop commands via IOPGPS relay API',
        'Live fuel level monitoring with consumption analytics',
        'Geofence zone management with instant breach alerts',
        'Historical route playback with speed and stop analysis',
      ],
      screenshots: [
        '/projects_asset/fleet/1.jpeg',
        '/projects_asset/fleet/2.jpeg',
      ],
    },
    {
      name: 'Transgo App',
      desc: 'Flutter mobile app for vehicle rental in Jakarta — browse fleets, book cars & motorcycles, pay with TgPay, and track orders in real-time.',
      techs: ['Flutter', 'GetX', 'Firebase', 'REST API', 'Maps', 'Dart'],
      type: 'nodes',
      tag: 'Mobile App',
      env: 'hexgrid',
      fullDesc: 'A full-featured Flutter mobile application for Transgo — Indonesia\'s modern vehicle rental platform serving Jakarta and surrounding areas. Users can browse available car and motorcycle fleets, apply filters and seasonal promotions, complete bookings with detailed pickup terms and pricing, and pay seamlessly via the integrated TgPay digital wallet. The app features Google Sign-In, Firebase Cloud Messaging for push notifications, background location tracking for the dashboard map, an in-app chatbot for support, fleet ranking leaderboards, and Transgo Rewards loyalty tiers — all built with GetX state management and connected to the transgo.id REST API.',
      highlights: [
        'Fleet browsing with filters, flash sales, and seasonal charges',
        'TgPay integrated wallet for seamless in-app payments',
        'Background location tracking with interactive map dashboard',
        'Firebase Cloud Messaging push notifications and in-app alerts',
        'Transgo Rewards loyalty program with tier progression',
        '28K+ installs and 5K+ active devices on Google Play',
      ],
      screenshots: [
        '/projects_asset/transgo/1.jpeg',
        '/projects_asset/transgo/2.jpeg',
        '/projects_asset/transgo/3.jpeg',
        '/projects_asset/transgo/4.jpeg',
        '/projects_asset/transgo/5.jpeg',
        '/projects_asset/transgo/6.jpeg',
      ],
    },
    {
      name: 'SIAGA',
      desc: 'Life-saving IoT Gas & Air Quality monitor with real-time data streaming via MQTT, live charting, and NodeMCU WiFi configuration.',
      techs: ['Java', 'Gradle', 'MQTT', 'IoT', 'HiveMQ', 'NodeMCU', 'C++'],
      type: 'radar',
      tag: 'IoT Platform - Mobile App',
      env: 'smoke',
      fullDesc: 'An IoT-powered environmental monitoring system that detects dangerous gas concentrations and air quality degradation in real-time. The Flutter mobile app connects to NodeMCU-based sensor arrays over MQTT (HiveMQ Cloud), displaying live data streams on interactive charts with configurable danger thresholds and push notification alerts — potentially saving lives by providing early warnings of hazardous conditions.',
      highlights: [
        'Real-time MQTT data streaming from NodeMCU sensor arrays',
        'Live interactive charts with configurable danger thresholds',
        'Push notification system for hazardous gas level alerts',
        'WiFi provisioning interface for NodeMCU configuration',
        'Historical data logging with trend analysis dashboard',
      ],
      screenshots: [
        '/projects_asset/siaga/1.jpg',
        '/projects_asset/siaga/2.jpeg',
        '/projects_asset/siaga/3.jpeg',
        '/projects_asset/siaga/4.jpg',
        '/projects_asset/siaga/5.jpg',
        '/projects_asset/siaga/6.jpeg',
        '/projects_asset/siaga/7.jpg',
        '/projects_asset/siaga/8.jpg',
        '/projects_asset/siaga/9.jpg',
      ],
      hudCallouts: {
        slideIndex: 7, // image 8.jpg (0-indexed)
        people: [
          { name: 'Arkan', role: 'Electronics Engineer', linkedin: 'https://www.linkedin.com/in/arkan-ardiansyah-5a849b395/', x: 39, y: 28, direction: 'down' },
          { name: 'Kitna', role: 'Initiator', linkedin: 'https://www.linkedin.com/in/kitna-mahardika-favian-77801729b/', x: 50, y: 34, direction: 'up' },
          { name: 'Vriza', role: 'Network Engineer', linkedin: 'https://www.linkedin.com/in/vriza-hexandria-saputra-181544356/', x: 66, y: 34, direction: 'down' },
        ],
      },
    },
    {
      name: 'MindSpace',
      desc: 'Accessible mental health platform connecting clients with therapists, featuring secure chat and dynamic profiles.',
      techs: ['Flutter', 'Laravel', 'WebSocket', 'REST API', 'MySQL', 'DevOps', 'Crossplatform'],
      type: 'nodes',
      tag: 'Full-Stack',
      env: 'aurora',
      fullDesc: 'A compassionate digital platform bridging the gap between mental health professionals and those seeking support. Built with a Flutter frontend and Laravel backend, MindSpace offers real-time encrypted chat, therapist matching based on specialization and availability, session scheduling, progress tracking journals, and dynamic profile management — all designed with accessibility and emotional safety as core principles.',
      highlights: [
        'Real-time encrypted chat via WebSocket with message persistence',
        'Intelligent therapist matching by specialization and availability',
        'Session scheduling with calendar integration and reminders',
        'Personal journaling with mood tracking and progress visualization',
        'Dynamic profiles with verification badges for licensed therapists',
      ],
      screenshots: [
        '/projects_asset/mindspace/1.png',
        '/projects_asset/mindspace/2.png',
        '/projects_asset/mindspace/3.png',
        '/projects_asset/mindspace/4.png',
        '/projects_asset/mindspace/5.png',
        '/projects_asset/mindspace/6.png',
        '/projects_asset/mindspace/7.png',
        '/projects_asset/mindspace/8.png',
        '/projects_asset/mindspace/9.png',
      ],
    },
  ];

  const projectsGrid = document.getElementById('projects-grid');
  projects.forEach((p, idx) => {
    const card = document.createElement('div');
    card.className = 'project-card reveal-up';

    const techsHTML = p.techs.map(t => `<span class="tech-pill">${t}</span>`).join('');

    card.innerHTML = `
      <canvas class="project-canvas" id="pcanvas-${idx}" data-type="${p.type}"></canvas>
      <span class="project-tag">${p.tag}</span>
      <h3 class="project-name">${p.name}</h3>
      <p class="project-desc">${p.desc}</p>
      <div class="project-techs">${techsHTML}</div>
    `;
    projectsGrid.appendChild(card);

    // Local mouse tracking for flashlight
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      card.style.setProperty('--local-x', `${e.clientX - rect.left}px`);
      card.style.setProperty('--local-y', `${e.clientY - rect.top}px`);
    });

    // Click to open showcase
    card.addEventListener('click', () => openShowcase(idx));
  });

  // ─── Warp Transition + Showcase System ───
  const warpOverlay = document.getElementById('warp-overlay');
  const warpCanvas = document.getElementById('warp-canvas');
  const showcase = document.getElementById('showcase');
  const showcaseEnvCanvas = document.getElementById('showcase-env-canvas');
  let warpAnimId = null;

  function runWarpTransition(direction) {
    return new Promise((resolve) => {
      const ctx = warpCanvas.getContext('2d');
      const w = warpCanvas.width = innerWidth;
      const h = warpCanvas.height = innerHeight;
      const cx = w / 2, cy = h / 2;

      // Generate star streaks
      const streaks = Array.from({ length: 300 }, () => {
        const angle = Math.random() * Math.PI * 2;
        const dist = Math.random() * 50 + 20;
        return {
          angle,
          dist,
          speed: Math.random() * 8 + 4,
          length: Math.random() * 80 + 30,
          width: Math.random() * 1.5 + 0.5,
          hue: Math.random() > 0.6 ? 186 : 270, // cyan or purple
        };
      });

      let elapsed = 0;
      const duration = direction === 'in' ? 1200 : 900;

      warpOverlay.classList.add('active');
      warpOverlay.style.opacity = '1';

      function animateWarp() {
        elapsed += 16;
        const progress = Math.min(elapsed / duration, 1);
        const eased = direction === 'in'
          ? progress * progress * progress // cubic ease in
          : 1 - Math.pow(1 - progress, 3); // cubic ease out

        ctx.fillStyle = `rgba(5, 5, 16, ${direction === 'in' ? 0.15 : 0.25})`;
        ctx.fillRect(0, 0, w, h);

        const speedMultiplier = direction === 'in'
          ? 1 + eased * 25
          : 26 - eased * 25;

        streaks.forEach(s => {
          s.dist += s.speed * speedMultiplier * 0.3;

          const x1 = cx + Math.cos(s.angle) * s.dist;
          const y1 = cy + Math.sin(s.angle) * s.dist;
          const trailLen = s.length * speedMultiplier * 0.15;
          const x2 = cx + Math.cos(s.angle) * (s.dist - trailLen);
          const y2 = cy + Math.sin(s.angle) * (s.dist - trailLen);

          const alpha = Math.min(1, speedMultiplier * 0.04);

          ctx.strokeStyle = s.hue === 186
            ? `rgba(0, 229, 255, ${alpha})`
            : `rgba(176, 38, 255, ${alpha})`;
          ctx.lineWidth = s.width;
          ctx.beginPath();
          ctx.moveTo(x1, y1);
          ctx.lineTo(x2, y2);
          ctx.stroke();

          // Reset if too far
          if (s.dist > Math.max(w, h)) {
            s.dist = Math.random() * 30 + 10;
            s.angle = Math.random() * Math.PI * 2;
          }
        });

        // Center glow
        const glowSize = 50 + speedMultiplier * 8;
        const glow = ctx.createRadialGradient(cx, cy, 0, cx, cy, glowSize);
        glow.addColorStop(0, `rgba(255, 255, 255, ${0.1 * speedMultiplier * 0.04})`);
        glow.addColorStop(1, 'transparent');
        ctx.fillStyle = glow;
        ctx.beginPath();
        ctx.arc(cx, cy, glowSize, 0, Math.PI * 2);
        ctx.fill();

        if (progress < 1) {
          warpAnimId = requestAnimationFrame(animateWarp);
        } else {
          // Clean up
          if (direction === 'out') {
            warpOverlay.classList.remove('active');
            warpOverlay.style.opacity = '0';
          }
          resolve();
        }
      }

      // Initial black fill
      ctx.fillStyle = 'rgba(5, 5, 16, 1)';
      ctx.fillRect(0, 0, w, h);
      warpAnimId = requestAnimationFrame(animateWarp);
    });
  }

  function populateShowcase(project) {
    document.getElementById('showcase-tag').textContent = project.tag;
    document.getElementById('showcase-title').textContent = project.name;
    document.getElementById('showcase-desc').textContent = project.fullDesc;

    const techsContainer = document.getElementById('showcase-techs');
    techsContainer.innerHTML = project.techs.map(t =>
      `<span class="showcase-tech-pill">${t}</span>`
    ).join('');

    const highlightsContainer = document.getElementById('showcase-highlights');
    highlightsContainer.innerHTML = project.highlights.map(h =>
      `<li>${h}</li>`
    ).join('');

    // Carousel
    const track = document.getElementById('carousel-track');
    const dotsContainer = document.getElementById('carousel-dots');
    const screenshots = project.screenshots || [];

    if (screenshots.length === 0) {
      track.innerHTML = `
        <div class="carousel-placeholder">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1">
            <rect x="2" y="2" width="20" height="20" rx="2"/>
            <circle cx="8.5" cy="8.5" r="1.5"/>
            <path d="m21 15-5-5L5 21"/>
          </svg>
          <span>SCREENSHOTS COMING SOON</span>
        </div>`;
      dotsContainer.innerHTML = '';
      currentSlide = 0;
      return;
    }

    track.innerHTML = screenshots.map((src, i) => {
      // Check if this slide has HUD callouts
      if (project.hudCallouts && project.hudCallouts.slideIndex === i) {
        const calloutsHTML = project.hudCallouts.people.map((person, pi) => `
          <div class="hud-callout" style="--hud-x: ${person.x}%; --hud-y: ${person.y}%;" data-delay="${pi}" data-direction="${person.direction || 'down'}">
            <div class="hud-anchor"></div>
            <div class="hud-connector"></div>
            <div class="hud-label">
              <div class="hud-label-header">
                <span class="hud-scan-icon">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                    <circle cx="12" cy="7" r="4"/>
                  </svg>
                </span>
                <span class="hud-name">${person.name}</span>
              </div>
              <span class="hud-role">${person.role}</span>
              <a href="${person.linkedin}" target="_blank" rel="noopener" class="hud-linkedin">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                LinkedIn
              </a>
            </div>
          </div>
        `).join('');
        return `<div class="carousel-slide carousel-slide-hud" data-slide-idx="${i}">
          <img src="${src}" alt="Screenshot" loading="lazy"/>
          <button class="hud-toggle" aria-label="Toggle HUD" title="Toggle HUD">
            <svg class="hud-toggle-on" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z"/><circle cx="12" cy="12" r="3"/>
            </svg>
            <svg class="hud-toggle-off" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display:none">
              <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"/>
              <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/>
              <line x1="1" y1="1" x2="23" y2="23"/>
            </svg>
            <span>HUD</span>
          </button>
          <div class="hud-overlay">${calloutsHTML}</div>
        </div>`;
      }
      return `<div class="carousel-slide" data-slide-idx="${i}"><img src="${src}" alt="Screenshot" loading="lazy"/></div>`;
    }).join('');

    dotsContainer.innerHTML = screenshots.map((_, i) =>
      `<div class="carousel-dot${i === 0 ? ' active' : ''}" data-idx="${i}"></div>`
    ).join('');

    currentSlide = 0;
    track.style.transform = 'translateX(0)';
  }

  // Carousel navigation
  let currentSlide = 0;

  function goToSlide(idx) {
    const track = document.getElementById('carousel-track');
    const dots = document.querySelectorAll('.carousel-dot');
    const total = dots.length;
    if (total === 0) return;

    currentSlide = ((idx % total) + total) % total;
    track.style.transform = `translateX(-${currentSlide * 100}%)`;

    dots.forEach((d, i) => d.classList.toggle('active', i === currentSlide));

    // Toggle HUD callout animation on active slide
    document.querySelectorAll('.carousel-slide-hud').forEach(slide => {
      const slideIdx = Number(slide.dataset.slideIdx);
      if (slideIdx === currentSlide) {
        // Re-trigger animation by removing then adding class
        slide.classList.remove('hud-active');
        void slide.offsetWidth; // force reflow
        slide.classList.add('hud-active');
      } else {
        slide.classList.remove('hud-active');
      }
    });
  }

  document.getElementById('carousel-prev').addEventListener('click', () => goToSlide(currentSlide - 1));
  document.getElementById('carousel-next').addEventListener('click', () => goToSlide(currentSlide + 1));
  document.getElementById('carousel-dots').addEventListener('click', (e) => {
    const dot = e.target.closest('.carousel-dot');
    if (dot) goToSlide(Number(dot.dataset.idx));
  });

  // HUD toggle button
  document.getElementById('carousel-track').addEventListener('click', (e) => {
    const toggleBtn = e.target.closest('.hud-toggle');
    if (!toggleBtn) return;
    const slide = toggleBtn.closest('.carousel-slide-hud');
    if (!slide) return;
    slide.classList.toggle('hud-hidden');
    const isHidden = slide.classList.contains('hud-hidden');
    toggleBtn.querySelector('.hud-toggle-on').style.display = isHidden ? 'none' : 'block';
    toggleBtn.querySelector('.hud-toggle-off').style.display = isHidden ? 'block' : 'none';
  });

  let savedScrollY = 0;

  async function openShowcase(projectIdx) {
    const project = projects[projectIdx];
    populateShowcase(project);

    // Freeze main page
    savedScrollY = window.scrollY;
    lenis.stop();

    // Warp in
    await runWarpTransition('in');

    // Show showcase
    showcase.classList.remove('showcase-hidden');
    document.body.classList.add('showcase-open');

    // Start environment
    startEnvironment(showcaseEnvCanvas, project.env);

    // Hide warp overlay
    warpOverlay.classList.remove('active');
    warpOverlay.style.opacity = '0';

    // Trigger entrance animations
    requestAnimationFrame(() => {
      showcase.classList.add('showcase-visible');
    });
  }

  async function closeShowcase() {
    showcase.classList.remove('showcase-visible');
    stopEnvironment();

    // Warp out
    await runWarpTransition('out');

    showcase.classList.add('showcase-hidden');
    document.body.classList.remove('showcase-open');

    // Resume main page
    window.scrollTo(0, savedScrollY);
    lenis.start();
  }

  // Back button
  document.getElementById('showcase-back').addEventListener('click', closeShowcase);

  // Stat cards mouse tracking
  document.querySelectorAll('.stat-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      card.style.setProperty('--local-x', `${e.clientX - rect.left}px`);
      card.style.setProperty('--local-y', `${e.clientY - rect.top}px`);
    });
  });

  // Init canvas effects after DOM is populated
  setupCanvasEffects();

  // Current year
  const yearEl = document.getElementById('current-year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // ─── Main Animations (after splash) ───
  function initMainAnimations() {
    // SplitType reveal for split-text elements
    const splitEls = document.querySelectorAll('.split-text');
    splitEls.forEach(el => {
      const split = new SplitType(el, { types: 'chars, words' });
      gsap.set(split.chars, { y: 80, rotationZ: 8, opacity: 0 });

      ScrollTrigger.create({
        trigger: el,
        start: 'top 88%',
        once: true,
        onEnter: () => {
          gsap.to(split.chars, {
            y: 0, rotationZ: 0, opacity: 1,
            stagger: 0.02, duration: 0.7,
            ease: 'back.out(1.4)',
          });
        }
      });
    });

    // Reveal-up elements
    const reveals = document.querySelectorAll('.reveal-up');
    reveals.forEach((el, i) => {
      ScrollTrigger.create({
        trigger: el,
        start: 'top 90%',
        once: true,
        onEnter: () => {
          setTimeout(() => el.classList.add('revealed'), i * 60);
        }
      });
    });

    // Skill bar fill animation
    document.querySelectorAll('.skill-bar-fill').forEach(bar => {
      ScrollTrigger.create({
        trigger: bar,
        start: 'top 90%',
        once: true,
        onEnter: () => {
          setTimeout(() => {
            bar.style.width = bar.dataset.level + '%';
          }, 200);
        }
      });
    });

    // Stat counter animation
    document.querySelectorAll('.stat-number').forEach(el => {
      ScrollTrigger.create({
        trigger: el,
        start: 'top 85%',
        once: true,
        onEnter: () => {
          const target = parseInt(el.dataset.count);
          gsap.to({ val: 0 }, {
            val: target,
            duration: 2,
            ease: 'power2.out',
            onUpdate: function () {
              el.textContent = Math.round(this.targets()[0].val);
            }
          });
        }
      });
    });

    // Hero typewriter
    const typeText = "Engineering robust, cross-platform digital ecosystems across Windows, Linux, macOS, Android, and iOS.";
    const typeTarget = document.getElementById('typewriter');
    let ti = 0;

    function typeWriter() {
      if (ti < typeText.length) {
        typeTarget.textContent += typeText[ti];
        ti++;
        setTimeout(typeWriter, 25);
      }
    }
    setTimeout(typeWriter, 500);

    // Hero elements entrance
    gsap.from('.hero-content', {
      y: 40, opacity: 0, duration: 1, delay: 0.1, ease: 'power2.out'
    });
  }
});
