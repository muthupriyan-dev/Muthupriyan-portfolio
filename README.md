# Muthupriyan — Developer Portfolio

A modern, responsive personal portfolio for **Muthupriyan**, Full Stack Developer & Freelancer. The hero features an interactive character whose gaze follows your cursor, built with a 64-frame sprite sheet rendered on an HTML canvas.

🔗 **Live Demo:** [https://muthupriyan-portfolio.vercel.app](https://muthupriyan-portfolio.vercel.app/)

---

## ✨ Features

- **Cursor-tracking 3D character**: a 64-frame sprite sheet (8 × 8 grid) drawn on `<canvas>`. The character looks toward your mouse or touch position, with angle smoothing and hysteresis to avoid flicker.
- **Custom magnetic cursor**: a glowing dot and aura that react to links and buttons (auto-disabled on touch devices).
- **Floating glass navigation pill**: blurred, translucent navbar with scroll-aware active links and a mobile menu.
- **Data-driven sections**: Projects, Areas of Work and Skills are rendered from plain JavaScript arrays, so content is easy to edit.
- **Fully responsive**: desktop, tablet and mobile layouts.
- **Accessible**: skip-to-content link, ARIA labels, keyboard support (`Esc` closes the mobile menu) and `prefers-reduced-motion` support.
- **Zero dependencies**: pure HTML, CSS and vanilla JavaScript. No build step.

---

## 🛠️ Tech Stack

| Layer      | Tools                                        |
| ---------- | -------------------------------------------- |
| Markup     | HTML5                                        |
| Styling    | CSS3 (custom properties, grid, flexbox)      |
| Logic      | Vanilla JavaScript, Canvas 2D API            |
| Fonts      | Inter, Syne, JetBrains Mono (Google Fonts)   |
| Deployment | Vercel                                       |

---

## 📁 Project Structure

```
.
├── index.html      # Page markup
├── style.css       # All styles and responsive rules
├── script.js       # Data (projects/skills) + canvas character + cursor + navbar
├── center.webp     # Default (front-facing) character frame
├── sheet.webp      # 64-frame sprite sheet (8 × 8 grid)
└── vercel.json     # Vercel config (cleanUrls)
```

---

## 🚀 Run Locally

No installation needed. Any static server works:

```bash
# Option 1: Python
python -m http.server 5500

# Option 2: Node
npx serve .
```

Then open `http://localhost:5500`.

> Opening `index.html` directly with `file://` may block the sprite sheet from loading in some browsers, so use a local server.

---

## ✏️ Customize

Open `script.js` and edit the data at the top:

- `PERSONAL_INFO`: name, title, bio, email, social links
- `AREAS_OF_WORK`: cards in the About section
- `SKILL_GROUPS`: categories and skill badges
- `PROJECTS`: your project list

To add a project, fill in its entry. The **View Project** and **View Code** buttons appear automatically when a URL is set:

```js
{
  id: 'my-project',
  index: '01',
  name: 'My Project',
  category: 'Web App',
  description: 'Short description of what it does.',
  technologies: ['Node.js', 'Express', 'Firebase'],
  liveUrl: 'https://my-project.vercel.app',
  repoUrl: 'https://github.com/muthupriyan-dev/my-project',
}
```

---

## ☁️ Deployment (Vercel)

This is a static site, so no build is required.

1. Push all files to the **root** of a GitHub repository.
2. Import the repo in [Vercel](https://vercel.com/new).
3. Set **Framework Preset** to `Other` and leave Build Command and Output Directory empty.
4. Deploy.

`vercel.json` enables `cleanUrls`, so pages resolve without the `.html` extension.

---

## 📬 Contact

- **Email:** smuthupriyan020108@gmail.com
- **GitHub:** [github.com/muthupriyan-dev](https://github.com/muthupriyan-dev)
- **LinkedIn:** [linkedin.com/in/muthupriyan-s-b76698377](https://www.linkedin.com/in/muthupriyan-s-b76698377)

---

&copy; 2026 Muthupriyan. All rights reserved.
