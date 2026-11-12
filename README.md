# Muthupriyan — Developer Portfolio

A modern, responsive personal portfolio for **Muthupriyan**, Full Stack Developer & Freelancer. The hero features an interactive character whose gaze follows your cursor, built with 64 pre-rendered frames drawn on an HTML canvas.

🔗 **Live Demo:** [https://muthupriyan-portfolio.vercel.app](https://muthupriyan-portfolio.vercel.app/)

---

## ✨ Features

- **Cursor-tracking 3D character**: 64 pre-rendered frames (desktop `frames/`, lighter `frames-m/` for phones) drawn on `<canvas>`. The character looks toward your mouse or touch position, with angle smoothing and hysteresis to avoid flicker.
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

The site lives in the `Muthupriyan-portfolio/` folder of this repo.

```
.
├── README.md
└── Muthupriyan-portfolio/
    ├── index.html      # Page markup + SEO / share-preview meta tags
    ├── style.css       # All styles and responsive rules
    ├── script.js       # Data (projects/skills) + canvas character + cursor + navbar
    ├── center.webp     # Default (front-facing) character frame
    ├── center-m.webp   # Lighter default frame for phones
    ├── og-image.jpg    # 1200×630 image used for WhatsApp / LinkedIn / X link previews
    ├── frames/         # 64 character frames (desktop)
    ├── frames-m/       # 64 character frames (mobile)
    └── vercel.json     # Vercel config (cleanUrls, caching)
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

> Opening `index.html` directly with `file://` may block the character frames from loading in some browsers, so use a local server.

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

1. Import the repo in [Vercel](https://vercel.com/new).
2. Set **Root Directory** to `Muthupriyan-portfolio` (the site lives in that folder).
3. Set **Framework Preset** to `Other` and leave Build Command and Output Directory empty.
4. Deploy.

`vercel.json` enables `cleanUrls`, so pages resolve without the `.html` extension.

---

## 🚀 Featured Projects

| Project | What it is | Stack |
| ------- | ---------- | ----- |
| CVastra AI | Resume analyzer with Gemini-based scoring across 7 dimensions | Node.js, Express, Gemini API |
| Telegram AI Bot | Replies on my behalf when I am away, with memory, live search and 7-provider fallback | Node.js, Gemini, Groq, Firestore |
| DisciplineX | Android app that keeps the phone locked until a camera-counted workout is done | Kotlin, Jetpack Compose, ML Kit |
| ConnectX | Anonymous real-time video chat | WebRTC, Socket.IO |
| CinePick AI | Movie picks by language, genre and mood, with a watchlist | JavaScript, TMDb API |
| Gemini Forms Assistant | Chrome extension that suggests Google Forms answers, never auto-submits | Chrome MV3, Express, Gemini |
| Moi Note | Tamil-friendly PWA to record Moi (gift) contributions | Firebase Auth, Firestore |
| SmartAttend | Attendance system with student portal and teacher dashboard | Firebase |
| PassGuard Ultimate | Password generator and breach checker (HIBP k-anonymity) | JavaScript |
| PhishGuard | Browser-based URL analysis to build phishing awareness | JavaScript |
| KiliMind | Tamil parrot fortune-telling web app | JavaScript |

---

## 📬 Contact

- **Email:** smuthupriyan020108@gmail.com
- **GitHub:** [github.com/muthupriyan-dev](https://github.com/muthupriyan-dev)
- **LinkedIn:** [linkedin.com/in/muthupriyan-s-b76698377](https://www.linkedin.com/in/muthupriyan-s-b76698377)

---

&copy; 2026 Muthupriyan. All rights reserved.
