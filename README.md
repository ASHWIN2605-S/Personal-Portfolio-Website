# Ashwin — Developer Portfolio

A modern, fully responsive developer portfolio built with React (Vite), Tailwind CSS, and Framer Motion.

## Stack

- **React 18** + **Vite 5**
- **Tailwind CSS 3** (dark mode via `class` strategy)
- **Framer Motion 11** (animations & transitions)
- **React Icons 5** (icon library)
- **Google Fonts** — Playfair Display + JetBrains Mono + DM Sans

## Design

- Ink & Ember color palette (near-black + warm orange)
- Editorial/refined aesthetic with glassmorphism cards
- Dark/light mode toggle
- Subtle grid background + ambient glow orbs
- Animated progress bars, hover effects, scroll reveals
- Fully mobile responsive with hamburger menu

## Quick Start

```bash
npm install
npm run dev
```

Open http://localhost:5173

## Build

```bash
npm run build
npm run preview
```

## Customization

### Personal Info
- Update your name, bio, and email in each component
- Replace `public/resume.pdf` with your actual resume
- Update social links in `Hero.jsx`, `Contact.jsx`, and `Footer.jsx`

### Projects
Edit `src/data/projects.js` to add/remove/modify projects.

### Skills
Edit the `skillCategories` array in `src/components/Skills.jsx`.

### Colors
The color palette is defined in `tailwind.config.js`:
- `ember` — primary accent (orange)
- `ink` — neutral scale (near-black to light)

## File Structure

```
my-portfolio/
├── public/
│   ├── favicon.svg
│   ├── profile.png     ← add your photo
│   └── resume.pdf      ← add your resume
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── ProjectCard.jsx
│   │   ├── CurrentlyBuilding.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   └── ThemeToggle.jsx
│   ├── data/
│   │   └── projects.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── tailwind.config.js
├── postcss.config.js
└── vite.config.js
```

## Deploy

Recommended: **Vercel** (drag-and-drop the `dist/` folder or connect your GitHub repo)

```bash
npm run build
# Upload dist/ to Vercel, Netlify, or GitHub Pages
```
