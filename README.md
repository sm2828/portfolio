# Sean Neville — Portfolio

A sleek, modern developer portfolio built with React + TypeScript + Vite + Framer Motion.

## Features
- Custom cursor with smooth spring physics
- Animated particle background with mouse interaction
- Scroll progress indicator
- Loading screen with progress bar
- 3D tilt effect on project cards
- Typewriter effect in hero section
- Scroll-triggered animations throughout
- Glassmorphism UI elements
- Fully responsive (mobile, tablet, desktop)
- CRT scan-line effect

## Stack
- **React 18** + **TypeScript**
- **Vite** — lightning fast dev server
- **Framer Motion** — all animations
- **TailwindCSS** — styling
- **Lucide React** — icons

## Run Locally

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Open http://localhost:5173
```

## Build for Production

```bash
npm run build
npm run preview
```

## Deploy to Vercel

### Option 1: Vercel CLI
```bash
npm install -g vercel
vercel
```

### Option 2: GitHub + Vercel Dashboard
1. Push this project to a GitHub repo
2. Go to [vercel.com](https://vercel.com) → New Project
3. Import your GitHub repo
4. Vercel auto-detects Vite — click Deploy
5. Done! 🚀

## Project Structure

```
src/
├── components/
│   ├── AnimatedBackground.tsx  # Canvas particle system
│   ├── CustomCursor.tsx        # Custom cursor with ring
│   ├── Nav.tsx                 # Sticky navigation
│   ├── Hero.tsx                # Hero with typewriter
│   ├── Projects.tsx            # Projects grid
│   ├── ProjectCard.tsx         # 3D tilt card
│   ├── Skills.tsx              # Skill bars + floating tags
│   ├── About.tsx               # About + terminal card
│   ├── Contact.tsx             # Contact section
│   └── ScrollProgress.tsx      # Top progress bar
├── data/
│   └── projects.ts             # Project + skill data
├── App.tsx                     # Main app + loading screen
├── main.tsx
└── index.css                   # Global styles + utilities
```
