# 🚀 Firaas Raihansyah Rizqullah — Developer Portfolio

[![Live Site](https://img.shields.io/badge/Live-firaasdev.my.id-00e5ff?style=for-the-badge&logo=vercel&logoColor=white)](https://firaasdev.my.id)
[![GitHub Pages](https://img.shields.io/badge/Deployed_on-GitHub_Pages-222?style=for-the-badge&logo=github&logoColor=white)](https://firaasdev.my.id)

An immersive, aviation-themed developer portfolio featuring WebGL particle systems, cinematic scroll animations, and interactive project showcases — built entirely with vanilla JavaScript and Vite.

---

## ✨ Features

- **Cinematic Splash Screen** — Typewriter boot sequence with WebGL particle background
- **WebGL Star Field** — Persistent Three.js canvas with parallax depth scrolling
- **GSAP + SplitType Animations** — Character-by-character text reveals and scroll-triggered entrances
- **Lenis Smooth Scrolling** — Physics-based buttery smooth scroll with GSAP ScrollTrigger integration
- **Magnetic Custom Cursor** — Desktop-only cursor with hover states and smooth interpolation
- **Interactive Skill Cards** — Audio equalizer-style animated bars with flashlight hover effect
- **Project Showcase System** — Full-viewport overlay with:
  - Warp-speed star streak transitions
  - 5 unique canvas environments (Matrix rain, Orbital rings, Hex grid, Smoke particles, Aurora borealis)
  - Screenshot carousel with navigation
- **Fully Responsive** — Adapts seamlessly from ultrawide to mobile

---

## 🛠 Tech Stack

| Layer | Technology |
|-------|-----------|
| Bundler | [Vite](https://vitejs.dev) |
| 3D / WebGL | [Three.js](https://threejs.org) |
| Animation | [GSAP](https://gsap.com) + [ScrollTrigger](https://gsap.com/docs/v3/Plugins/ScrollTrigger/) |
| Text Effects | [SplitType](https://github.com/lukePeavey/SplitType) |
| Smooth Scroll | [Lenis](https://lenis.darkroom.engineering/) |
| Styling | Vanilla CSS with custom properties |
| Fonts | Inter, JetBrains Mono, Orbitron (Google Fonts) |

---

## 📂 Project Structure

```
├── public/
│   ├── CNAME                    # Custom domain config
│   └── projects_asset/          # Project screenshots
│       ├── manhwa/
│       ├── fleet/
│       ├── transgo/
│       ├── siaga/
│       └── mindspace/
├── src/
│   ├── main.js                  # App entry — navigation, projects, showcase, animations
│   ├── style.css                # Complete design system and responsive styles
│   ├── canvas-effects.js        # 2D canvas effects for project cards and footer
│   ├── webgl.js                 # Three.js star field with parallax
│   └── showcase-environments.js # 5 unique canvas backgrounds for project showcases
├── index.html                   # Single-page markup
├── vite.config.js               # Vite configuration
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org) 18+
- npm

### Installation

```bash
git clone https://github.com/castreld/firaasdev.git
cd firaasdev
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

### Production Build

```bash
npm run build
npm run preview
```

---

## 🌐 Deployment

This site is deployed on **GitHub Pages** with a custom domain.

```bash
npm run build
npx gh-pages -d dist
```

DNS is configured with A records pointing to GitHub's servers:

```
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

---

## 📋 Featured Projects

| Project | Type | Showcase Environment |
|---------|------|---------------------|
| **Manhwa Studio Pro** | Desktop App | Matrix — Digital code rain |
| **Fleet Tracking** | Web App | Orbital — Satellite ring system |
| **Transgo App** | Mobile App | Hexgrid — Pulsing hex network |
| **SIAGA** | IoT Platform | Smoke — Organic gas particles |
| **MindSpace** | Full-Stack | Aurora — Borealis waves |

---

## 📄 License

© 2026 Firaas Raihansyah Rizqullah. All rights reserved.

---

<p align="center">
  Designed & built by <strong>Firaas Raihansyah Rizqullah</strong>
</p>
