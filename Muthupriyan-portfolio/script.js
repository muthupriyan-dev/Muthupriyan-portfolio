/**
 * ============================================================================
 * MUTHUPRIYAN PORTFOLIO — EDITABLE DATA & INTERACTIVE ENGINE
 * ============================================================================
 * Edit project descriptions, technologies, liveUrl, or repoUrl in PROJECTS below.
 * Buttons ("View Project" / "View Code") appear automatically when a real URL is set.
 */

const PERSONAL_INFO = {
  name: 'Muthupriyan',
  title: 'Full Stack Developer | Freelancer',
  heroBio:
    'Building modern web experiences across frontend, backend, AI and cybersecurity.',
  aboutBio:
    "I'm Muthupriyan, a Full Stack Developer and Freelancer focused on building modern, responsive and interactive web experiences. I work across frontend, backend, AI integrations and cybersecurity, turning ideas into practical digital products with clean design and useful functionality.",
  email: 'smuthupriyan020108@gmail.com',
  phone: '+91 8122510871',
  github: 'https://github.com/muthupriyan-dev',
  linkedin: 'https://www.linkedin.com/in/muthupriyan-s-b76698377',
};

const AREAS_OF_WORK = [
  {
    title: 'Full Stack Development',
    summary: 'End-to-end web architecture from responsive interfaces to scalable server logic.',
    icon: 'layers',
  },
  {
    title: 'Frontend Development',
    summary: 'Interactive, accessible, and responsive client-side experiences built with modern web standards.',
    icon: 'layout',
  },
  {
    title: 'Backend Development',
    summary: 'Reliable server applications, real-time communication, and structured database integration.',
    icon: 'server',
  },
  {
    title: 'AI Integration',
    summary: 'Connecting modern LLM providers and intelligent workflows into practical web applications.',
    icon: 'sparkles',
  },
  {
    title: 'API Integration',
    summary: 'Seamless third-party service orchestration, bots, media feeds, and real-time data pipelines.',
    icon: 'webhook',
  },
  {
    title: 'Cybersecurity',
    summary: 'Security-aware development, reconnaissance tooling, vulnerability testing, and breach checks.',
    icon: 'shieldCheck',
  },
  {
    title: 'Automation',
    summary: 'Streamlining repetitive workflows, bot systems, and smart utility tools.',
    icon: 'workflow',
  },
];

const SKILL_GROUPS = [
  {
    category: 'Cybersecurity',
    id: 'cybersecurity',
    icon: 'shield',
    skills: ['Kali Linux', 'Linux', 'Nmap', 'Metasploit', 'Burp Suite', 'HIBP API'],
  },
  {
    category: 'Frontend',
    id: 'frontend',
    icon: 'code',
    skills: ['HTML5', 'CSS3', 'JavaScript', 'Chart.js'],
  },
  {
    category: 'Backend & Database',
    id: 'backend',
    icon: 'database',
    skills: ['Node.js', 'Express', 'Python', 'Firebase', 'Socket.IO'],
  },
  {
    category: 'AI & APIs',
    id: 'ai-apis',
    icon: 'cpu',
    skills: [
      'Gemini API',
      'Groq',
      'OpenRouter',
      'Hugging Face',
      'Telegram Bot API',
      'TMDB API',
      'Tavily API',
    ],
  },
  {
    category: 'Tools & Deploy',
    id: 'tools-deploy',
    icon: 'wrench',
    skills: ['Git', 'GitHub', 'Render', 'Netlify', 'VS Code', 'Termux'],
  },
];

const PROJECTS = [
  {
    id: 'moi-note',
    index: '01',
    name: 'moi-note',
    category: null,
    description: 'Project details coming soon.',
    technologies: [],
    liveUrl: 'https://moi-note.netlify.app/',
    repoUrl: null,
  },
  {
    id: 'connectx',
    index: '02',
    name: 'ConnectX',
    category: null,
    description: 'Project details coming soon.',
    technologies: [],
    liveUrl: 'https://atti-app.onrender.com/',
    repoUrl: null,
  },
  {
    id: 'cinepick-ai',
    index: '03',
    name: 'CinePick AI',
    category: null,
    description: 'Project details coming soon.',
    technologies: [],
    liveUrl: 'https://cinepickai.netlify.app/',
    repoUrl: null,
  },
  {
    id: 'telegram-ai-bot',
    index: '04',
    name: 'Telegram AI Bot',
    category: null,
    description: 'Project details coming soon.',
    technologies: [],
    liveUrl: 'https://t.me/muthu_helper_bot',
    repoUrl: null,
  },
  {
    id: 'cvastra-ai',
    index: '05',
    name: 'CVAstra AI',
    category: null,
    description: 'Project details coming soon.',
    technologies: [],
    liveUrl: 'https://poetic-bonbon-f18691.netlify.app/',
    repoUrl: null,
  },
  {
    id: 'smart-attendance',
    index: '06',
    name: 'Smart Attendance',
    category: null,
    description: 'Project details coming soon.',
    technologies: [],
    liveUrl: 'https://muthupriyan-dev.github.io/smart-attendance/attendance-system.html',
    repoUrl: null,
  },
  {
    id: 'passguard-ultimate',
    index: '07',
    name: 'PassGuard Ultimate',
    category: null,
    description: 'Project details coming soon.',
    technologies: [],
    liveUrl: 'https://muthupriyan-dev.github.io/passguard_ultimate/',
    repoUrl: null,
  },
  {
    id: 'phishguard',
    index: '08',
    name: 'PhishGuard',
    category: null,
    description: 'Project details coming soon.',
    technologies: [],
    liveUrl: 'https://muthupriyan-dev.github.io/phishguard/Phishguard-AI-Pro.html',
    repoUrl: null,
  },
  {
    id: 'flames',
    index: '09',
    name: 'FLAMES',
    category: null,
    description: 'Project details coming soon.',
    technologies: [],
    liveUrl: 'https://muthupriyan-dev.github.io/flames/flames.html',
    repoUrl: null,
  },
  {
    id: 'calculator',
    index: '10',
    name: 'Calculator',
    category: null,
    description: 'Project details coming soon.',
    technologies: [],
    liveUrl: 'https://muthupriyan-dev.github.io/calculator/calculator.html',
    repoUrl: null,
  },
  {
    id: 'tic-tac-toe',
    index: '11',
    name: 'Tic-Tac-Toe',
    category: null,
    description: 'Project details coming soon.',
    technologies: [],
    liveUrl: 'https://muthupriyan-dev.github.io/tic-tac-toe/tic-tac-toe.html',
    repoUrl: null,
  },
  {
    id: 'kilimind',
    index: '12',
    name: 'Kilimind',
    category: null,
    description: 'Project details coming soon.',
    technologies: [],
    liveUrl: 'https://muthupriyan-dev.github.io/Kilimind/kilimind.html',
    repoUrl: null,
  },
  {
    id: 'disciplinex',
    index: '13',
    name: 'DisciplineX',
    category: null,
    description: 'Project details coming soon.',
    technologies: [],
    liveUrl: 'https://disciplinex-web.netlify.app/',
    repoUrl: null,
  },
];

const ICONS = {
  folderGit: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v5"/><circle cx="13" cy="12" r="2"/><path d="M18 19c-2.8 0-5-2.2-5-5v8"/><circle cx="20" cy="19" r="2"/></svg>`,
  externalLink: `<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>`,
  github: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>`,
  layers: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"/><path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65"/><path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65"/></svg>`,
  layout: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/></svg>`,
  server: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="8" x="2" y="2" rx="2" ry="2"/><rect width="20" height="8" x="2" y="14" rx="2" ry="2"/><line x1="6" x2="6.01" y1="6" y2="6"/><line x1="6" x2="6.01" y1="18" y2="18"/></svg>`,
  sparkles: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/></svg>`,
  webhook: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 16.98h-5.99c-1.1 0-1.95.94-2.48 1.9A4 4 0 0 1 2 17c.01-.7.2-1.4.57-2"/><path d="m6 17 3.13-5.78c.53-.97.1-2.18-.5-3.1a4 4 0 1 1 6.89-4.06"/><path d="m12 6 3.13 5.73C15.66 12.7 16.9 13 18 13a4 4 0 0 1 0 8"/></svg>`,
  shieldCheck: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/></svg>`,
  workflow: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="8" height="8" x="3" y="3" rx="2"/><path d="M7 11v4a2 2 0 0 0 2 2h4"/><rect width="8" height="8" x="13" y="13" rx="2"/></svg>`,
  shield: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/></svg>`,
  code: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m18 16 4-4-4-4"/><path d="m6 8-4 4 4 4"/><path d="m14.5 4-5 16"/></svg>`,
  database: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5V19A9 3 0 0 0 21 19V5"/><path d="M3 12A9 3 0 0 0 21 12"/></svg>`,
  cpu: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="16" height="16" x="4" y="4" rx="2"/><rect width="6" height="6" x="9" y="9" rx="1"/><path d="M15 2v2"/><path d="M15 20v2"/><path d="M2 15h2"/><path d="M2 9h2"/><path d="M20 15h2"/><path d="M20 9h2"/><path d="M9 2v2"/><path d="M9 20v2"/></svg>`,
  wrench: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>`,
};

/* ============================================================================
   1. RENDER DYNAMIC SECTIONS (PROJECTS, ABOUT, SKILLS)
   ============================================================================ */
function renderPortfolioSections() {
  const projectsGrid = document.getElementById('projects-grid');
  if (projectsGrid) {
    projectsGrid.innerHTML = PROJECTS.map((project) => {
      const hasLiveUrl = Boolean(project.liveUrl);
      const hasRepoUrl = Boolean(project.repoUrl);
      const hasTech = Array.isArray(project.technologies) && project.technologies.length > 0;

      const categoryHtml = project.category
        ? `<span class="project-card__category">${project.category}</span>`
        : '';

      const techHtml = hasTech
        ? `<ul class="project-card__tech-list" aria-label="${project.name} technologies">
            ${project.technologies.map((t) => `<li class="project-card__tech-tag">${t}</li>`).join('')}
          </ul>`
        : '';

      const actionsHtml =
        hasLiveUrl || hasRepoUrl
          ? `<div class="project-card__actions">
              ${
                hasLiveUrl
                  ? `<a href="${project.liveUrl}" target="_blank" rel="noopener noreferrer" class="project-card__btn project-card__btn--primary">
                      <span>View Project</span>
                      ${ICONS.externalLink}
                    </a>`
                  : ''
              }
              ${
                hasRepoUrl
                  ? `<a href="${project.repoUrl}" target="_blank" rel="noopener noreferrer" class="project-card__btn project-card__btn--secondary">
                      ${ICONS.github}
                      <span>View Code</span>
                    </a>`
                  : ''
              }
            </div>`
          : '';

      return `
        <article class="project-card${hasLiveUrl ? ' project-card--clickable' : ''}">
          <div class="project-card__top">
            <span class="project-card__index" aria-hidden="true">${project.index}</span>
            <div class="project-card__icon-wrap" aria-hidden="true">${ICONS.folderGit}</div>
          </div>
          <div class="project-card__content">
            ${categoryHtml}
            <h3 class="project-card__title">${
              hasLiveUrl
                ? `<a href="${project.liveUrl}" target="_blank" rel="noopener noreferrer" class="project-card__link" aria-label="Open ${project.name} live project">${project.name}</a>`
                : project.name
            }</h3>
            <p class="project-card__description">${project.description}</p>
          </div>
          ${techHtml}
          ${actionsHtml}
        </article>
      `;
    }).join('');
  }

  const areasGrid = document.getElementById('about-areas-grid');
  if (areasGrid) {
    areasGrid.innerHTML = AREAS_OF_WORK.map(
      (area) => `
      <article class="area-card">
        <div class="area-card__icon" aria-hidden="true">${ICONS[area.icon] || ICONS.layers}</div>
        <div class="area-card__body">
          <h4 class="area-card__title">${area.title}</h4>
          <p class="area-card__summary">${area.summary}</p>
        </div>
      </article>
    `
    ).join('');
  }

  const skillsGrid = document.getElementById('skills-groups-grid');
  if (skillsGrid) {
    skillsGrid.innerHTML = SKILL_GROUPS.map(
      (group) => `
      <article class="skill-group-card">
        <div class="skill-group-header">
          <span class="skill-group-icon" aria-hidden="true">${ICONS[group.icon] || ICONS.code}</span>
          <h3 class="skill-group-title">${group.category}</h3>
          <span class="skill-group-count">${group.skills.length}</span>
        </div>
        <ul class="skill-badges-list" aria-label="${group.category} skills">
          ${group.skills
            .map(
              (skill) => `
            <li class="skill-badge">
              <span class="skill-badge__dot" aria-hidden="true"></span>
              <span class="skill-badge__name">${skill}</span>
            </li>
          `
            )
            .join('')}
        </ul>
      </article>
    `
    ).join('');
  }
}

/* ============================================================================
   2. 64-FRAME SPRITE SHEET CURSOR-TRACKING CANVAS RENDERER
   ============================================================================ */
function initCursorCharacter() {
  const canvas = document.getElementById('character-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d', { alpha: false });
  const TOTAL_FRAMES = 64;
  const SHEET_COLS = 8;
  const SHEET_ROWS = 8;
  const CANVAS_W = 1920;
  const CANVAS_H = 1082;
  canvas.width = CANVAS_W;
  canvas.height = CANVAS_H;
  ctx.imageSmoothingEnabled = true;
  ctx.imageSmoothingQuality = 'high';

  const RESPONSE_FACTOR = 0.26;
  const FACE_CENTER_REL_X = 0.50;
  const FACE_CENTER_REL_Y = 0.40;

  let centerImg = null;
  let centerBitmap = null;
  let sheetImg = null;
  const frameBitmaps = new Array(TOTAL_FRAMES).fill(null);
  let lastDrawnKey = null;

  function drawCenter() {
    const source = centerBitmap || centerImg;
    if (!source || lastDrawnKey === 'center') return;
    ctx.globalAlpha = 1.0;
    ctx.globalCompositeOperation = 'source-over';
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = 'high';
    ctx.drawImage(source, 0, 0, CANVAS_W, CANVAS_H);
    lastDrawnKey = 'center';
  }

  function drawSheetFrame(frameIndex) {
    const key = `frame_${frameIndex}`;
    if (lastDrawnKey === key) return;

    const bmp = frameBitmaps[frameIndex];
    if (bmp) {
      ctx.globalAlpha = 1.0;
      ctx.globalCompositeOperation = 'source-over';
      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = 'high';
      ctx.drawImage(bmp, 0, 0, CANVAS_W, CANVAS_H);
      lastDrawnKey = key;
      return;
    }

    if (!sheetImg) {
      drawCenter();
      return;
    }

    const tileW = sheetImg.naturalWidth / SHEET_COLS;
    const tileH = sheetImg.naturalHeight / SHEET_ROWS;
    const col = frameIndex % SHEET_COLS;
    const row = Math.floor(frameIndex / SHEET_COLS);
    const sx = col * tileW;
    const sy = row * tileH;
    ctx.globalAlpha = 1.0;
    ctx.globalCompositeOperation = 'source-over';
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = 'high';
    ctx.drawImage(sheetImg, sx, sy, tileW, tileH, 0, 0, CANVAS_W, CANVAS_H);
    lastDrawnKey = key;
  }

  function loadImageCandidates(candidates, onSuccess) {
    let idx = 0;
    function tryNext() {
      if (idx >= candidates.length) return;
      const img = new Image();
      img.decoding = 'async';
      img.onload = () => onSuccess(img);
      img.onerror = () => {
        idx += 1;
        tryNext();
      };
      img.src = candidates[idx];
    }
    tryNext();
  }

  loadImageCandidates(
    ['./center.webp', './public/frames/center.webp', './frames/center.webp'],
    (img) => {
      centerImg = img;
      canvas.classList.add('character-canvas--ready');
      drawCenter();
      if (typeof window.createImageBitmap === 'function') {
        window.createImageBitmap(img).then((bmp) => {
          centerBitmap = bmp;
        }).catch(() => {});
      }
    }
  );

  loadImageCandidates(
    ['./sheet.webp', './public/frames/sheet.webp', './frames/sheet.webp'],
    (img) => {
      sheetImg = img;
      // Pre-slice all 64 directional tiles into GPU-backed ImageBitmaps for zero-latency 60fps drawing
      if (typeof window.createImageBitmap === 'function') {
        const tileW = img.naturalWidth / SHEET_COLS;
        const tileH = img.naturalHeight / SHEET_ROWS;
        for (let i = 0; i < TOTAL_FRAMES; i++) {
          const col = i % SHEET_COLS;
          const row = Math.floor(i / SHEET_COLS);
          window
            .createImageBitmap(img, col * tileW, row * tileH, tileW, tileH)
            .then((bmp) => {
              frameBitmaps[i] = bmp;
            })
            .catch(() => {});
        }
      }
    }
  );

  function shortestAngleDiff(target, current) {
    let diff = target - current;
    while (diff > Math.PI) diff -= Math.PI * 2;
    while (diff < -Math.PI) diff += Math.PI * 2;
    return diff;
  }

  function normalizeAngle(angle) {
    const twoPi = Math.PI * 2;
    return ((angle % twoPi) + twoPi) % twoPi;
  }

  function circularFrameDist(a, b) {
    let d = Math.abs(a - b) % TOTAL_FRAMES;
    return d > TOTAL_FRAMES / 2 ? TOTAL_FRAMES - d : d;
  }

  const state = {
    hasPointerMoved: false,
    pointerX: 0,
    pointerY: 0,
    filteredX: 0,
    filteredY: 0,
    pointerInitialized: false,
    smoothedAngle: 0,
    angleInitialized: false,
    inDeadzone: true,
    stableFrameIndex: -1,
    reducedMotion: window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  };

  function handlePointerMove(clientX, clientY) {
    if (state.reducedMotion) return;
    state.pointerX = clientX;
    state.pointerY = clientY;
    if (!state.pointerInitialized) {
      state.filteredX = clientX;
      state.filteredY = clientY;
      state.pointerInitialized = true;
    }
    state.hasPointerMoved = true;
  }

  window.addEventListener(
    'mousemove',
    (e) => handlePointerMove(e.clientX, e.clientY),
    { passive: true }
  );

  window.addEventListener(
    'touchstart',
    (e) => {
      if (e.touches && e.touches.length > 0) {
        handlePointerMove(e.touches[0].clientX, e.touches[0].clientY);
      }
    },
    { passive: true }
  );

  window.addEventListener(
    'touchmove',
    (e) => {
      if (e.touches && e.touches.length > 0) {
        handlePointerMove(e.touches[0].clientX, e.touches[0].clientY);
      }
    },
    { passive: true }
  );

  document.addEventListener('mouseleave', () => {
    state.hasPointerMoved = false;
    state.inDeadzone = true;
    state.angleInitialized = false;
  });

  function tick() {
    if (!state.hasPointerMoved || state.reducedMotion) {
      drawCenter();
      window.requestAnimationFrame(tick);
      return;
    }

    // Smooth micro-tremors in pointer coordinates
    state.filteredX += (state.pointerX - state.filteredX) * 0.45;
    state.filteredY += (state.pointerY - state.filteredY) * 0.45;

    const rect = canvas.getBoundingClientRect();
    if (rect.width > 0 && rect.height > 0) {
      const faceCenterX = rect.left + rect.width * FACE_CENTER_REL_X;
      const faceCenterY = rect.top + rect.height * FACE_CENTER_REL_Y;

      const dx = state.filteredX - faceCenterX;
      const dy = state.filteredY - faceCenterY;
      const distance = Math.hypot(dx, dy);

      // Deadzone hysteresis: enter at innerRadius, exit at outerRadius to prevent boundary flicker
      const innerRadius = Math.max(46, Math.min(92, rect.width * 0.095));
      const outerRadius = innerRadius * 1.24;
      const threshold = state.inDeadzone ? outerRadius : innerRadius;

      if (distance <= threshold) {
        state.inDeadzone = true;
        state.angleInitialized = false;
        state.stableFrameIndex = -1;
        drawCenter();
      } else {
        state.inDeadzone = false;
        const targetAngle = Math.atan2(dy, dx);

        if (!state.angleInitialized) {
          state.smoothedAngle = normalizeAngle(targetAngle);
          state.angleInitialized = true;
        } else {
          const diff = shortestAngleDiff(targetAngle, state.smoothedAngle);
          state.smoothedAngle = normalizeAngle(
            state.smoothedAngle + diff * RESPONSE_FACTOR
          );
        }

        const normalized = normalizeAngle(state.smoothedAngle);
        const exactFrame = (normalized / (Math.PI * 2)) * TOTAL_FRAMES;
        const nearestFrame = Math.round(exactFrame) % TOTAL_FRAMES;

        // Frame-boundary hysteresis: prevents rapid N <-> N+1 oscillation when mouse is stationary
        if (
          state.stableFrameIndex === -1 ||
          circularFrameDist(exactFrame, state.stableFrameIndex) >= 0.64
        ) {
          state.stableFrameIndex = nearestFrame;
        }

        drawSheetFrame(state.stableFrameIndex);
      }
    }

    window.requestAnimationFrame(tick);
  }

  window.requestAnimationFrame(tick);
}

/* ============================================================================
   3. CUSTOM MAGNETIC CURSOR
   ============================================================================ */
function initCustomCursor() {
  const isCoarse = window.matchMedia('(pointer: coarse)').matches;
  const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const cursorLayer = document.getElementById('custom-cursor-layer');
  const dot = document.getElementById('cursor-dot');
  const aura = document.getElementById('cursor-aura');

  if (isCoarse || isReducedMotion || !cursorLayer || !dot || !aura) {
    if (cursorLayer) cursorLayer.style.display = 'none';
    return;
  }

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let auraX = mouseX;
  let auraY = mouseY;
  let isHovering = false;
  let isVisible = false;

  window.addEventListener(
    'mousemove',
    (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (!isVisible) {
        isVisible = true;
        auraX = mouseX;
        auraY = mouseY;
        dot.style.opacity = '1';
        aura.style.opacity = '1';
      }
      const target = e.target;
      const interactive =
        target &&
        target.closest &&
        target.closest('a, button, [role="button"], input, textarea, select, [data-cursor-interactive]');
      isHovering = Boolean(interactive);
    },
    { passive: true }
  );

  document.addEventListener('mouseleave', () => {
    isVisible = false;
    dot.style.opacity = '0';
    aura.style.opacity = '0';
  });

  function renderCursor() {
    auraX += (mouseX - auraX) * 0.18;
    auraY += (mouseY - auraY) * 0.18;

    const dotScale = isHovering ? 1.45 : 1;
    dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%) scale(${dotScale})`;

    const auraScale = isHovering ? 1.55 : 1;
    aura.style.transform = `translate3d(${auraX}px, ${auraY}px, 0) translate(-50%, -50%) scale(${auraScale})`;
    aura.classList.toggle('cursor-aura--active', isHovering);

    window.requestAnimationFrame(renderCursor);
  }

  window.requestAnimationFrame(renderCursor);
}

/* ============================================================================
   4. FLOATING GLASS NAVIGATION & SMOOTH SCROLL
   ============================================================================ */
function initNavbar() {
  const wrapper = document.getElementById('navbar-wrapper');
  const toggleBtn = document.getElementById('navbar-mobile-toggle');
  const mobileMenu = document.getElementById('mobile-nav-menu');
  const menuIcon = document.getElementById('navbar-menu-icon');
  const closeIcon = document.getElementById('navbar-close-icon');
  const navLinks = document.querySelectorAll('[data-scroll-link]');

  let menuOpen = false;

  function setMenuOpen(open) {
    menuOpen = open;
    if (!toggleBtn || !mobileMenu) return;
    toggleBtn.setAttribute('aria-expanded', String(open));
    toggleBtn.setAttribute('aria-label', open ? 'Close navigation menu' : 'Open navigation menu');
    if (open) {
      mobileMenu.removeAttribute('hidden');
      if (menuIcon) menuIcon.style.display = 'none';
      if (closeIcon) closeIcon.style.display = 'block';
    } else {
      mobileMenu.setAttribute('hidden', '');
      if (menuIcon) menuIcon.style.display = 'block';
      if (closeIcon) closeIcon.style.display = 'none';
    }
  }

  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => setMenuOpen(!menuOpen));
  }

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && menuOpen) {
      setMenuOpen(false);
    }
  });

  navLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (href && href.startsWith('#')) {
        e.preventDefault();
        setMenuOpen(false);
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    });
  });

  const sections = ['work', 'about', 'skills', 'contact'];
  function handleScroll() {
    if (wrapper) {
      wrapper.classList.toggle('navbar-wrapper--scrolled', window.scrollY > 40);
    }

    const scrollPos = window.scrollY + window.innerHeight * 0.35;
    let activeHref = '';
    for (const id of sections) {
      const el = document.getElementById(id);
      if (el) {
        const top = el.offsetTop;
        const height = el.offsetHeight;
        if (scrollPos >= top && scrollPos < top + height) {
          activeHref = `#${id}`;
        }
      }
    }

    document.querySelectorAll('.navbar-link').forEach((link) => {
      link.classList.toggle('navbar-link--active', link.getAttribute('href') === activeHref);
    });
    document.querySelectorAll('.navbar-mobile-link').forEach((link) => {
      link.classList.toggle('navbar-mobile-link--active', link.getAttribute('href') === activeHref);
    });
  }

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();
}

document.addEventListener('DOMContentLoaded', () => {
  renderPortfolioSections();
  initCursorCharacter();
  initCustomCursor();
  initNavbar();
});
