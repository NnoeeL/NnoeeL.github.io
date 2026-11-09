/**
 * ==========================================================================
 * MUHAMMAD FARREL (NOEL) - 潮風のポートフォリオ
 * File: script.js
 * Deskripsi:
 *  1. Data Keahlian (Skills) & Proyek (Projects) dinamis
 *  2. Simulasi Ombak Pesisir Realistis (Gerstner Waves & Busa Pasir)
 *  3. Efek Partikel Angin Pesisir & Kelopak Sakura (Wind & Sakura Canvas)
 *  4. Synthesizer Audio Ombak Pantai Relaksasi (Web Audio API)
 *  5. Pengalih Suasana Waktu (Daylight / Sunset / Night)
 *  6. Efek Ketik (Typewriter) dengan Initial Seeded HTML
 *  7. Salin Email 1-Klik, Scrollspy Navigasi, & Menu Mobile
 * ==========================================================================
 */

(function () {
  "use strict";

  // ==========================================================================
  // 1. DATA KEAHLIAN (SKILLS)
  // ==========================================================================
  const skillCategories = [
    {
      titleMain: "Bahasa & Kode",
      icon: "fa-solid fa-code",
      skills: [
        { name: "JavaScript (ESNext)", icon: "fa-brands fa-js" },
        { name: "TypeScript", icon: "fa-solid fa-code" },
        { name: "HTML5 Semantic", icon: "fa-brands fa-html5" },
        { name: "CSS3 / Modern CSS", icon: "fa-brands fa-css3-alt" },
        { name: "Python", icon: "fa-brands fa-python" },
      ],
    },
    {
      titleMain: "Platform & Runtime",
      icon: "fa-solid fa-cubes",
      skills: [
        { name: "Node.js", icon: "fa-brands fa-node-js" },
        { name: "Electron Desktop", icon: "fa-solid fa-desktop" },
        { name: "Android WebView Bridge", icon: "fa-brands fa-android" },
        { name: "Git & GitHub", icon: "fa-brands fa-github" },
        { name: "VS Code & Bash", icon: "fa-solid fa-terminal" },
      ],
    },
    {
      titleMain: "Arsitektur & Konsep",
      icon: "fa-solid fa-layer-group",
      skills: [
        { name: "REST API & Webhooks", icon: "fa-solid fa-network-wired" },
        { name: "Baileys (WhatsApp Bot)", icon: "fa-solid fa-comments" },
        { name: "Offline-First PWA", icon: "fa-solid fa-shield-halved" },
        { name: "Mobile Responsive Layout", icon: "fa-solid fa-mobile-screen" },
      ],
    },
  ];

  // ==========================================================================
  // 2. DATA PROYEK (PROJECTS)
  // ==========================================================================
  const projectsData = [
    {
      id: "proyek-1",
      category: "Aplikasi Kampus Terintegrasi",
      title: "Sahabat Mahasiswa",
      previewImg: "assets/project-sahabat.png",
      description:
        "Ekosistem pendamping mahasiswa untuk mencari kosan di sekitar kampus UNSIL (radius 10 km Tasikmalaya), menghitung target IPK, dan mencatat jadwal kuliah. Dibangun dengan dukungan akses offline lintas Web PWA, Android APK, dan Windows Electron.",
      challenge:
        "Menjaga sinkronisasi data offline-first dan alur autentikasi fallback agar berjalan konsisten di Web, Android WebView (tanpa alert bawaan), dan Electron IPC.",
      tags: ["PWA", "JavaScript", "Electron", "Android WebView", "Offline-First"],
      icon: "fa-solid fa-graduation-cap",
      demoUrl: "https://sahabatmahasiswa.site",
      demoText: "Kunjungi Web",
      repoUrl: "https://github.com/NnoeeL",
    },
    {
      id: "proyek-2",
      category: "Perencana Arsitektur & PRD",
      title: "BikinPlan",
      previewImg: "assets/project-bikinplan.png",
      description:
        "Platform perencana arsitektur perangkat lunak untuk mengonversi ide fitur menjadi dokumen spesifikasi terstruktur (PRD), rekomendasi stack modern, skema DDL PostgreSQL, serta checklist task pengembangan.",
      challenge:
        "Merancang generator terstruktur yang memecah ide aplikasi menjadi skema DDL PostgreSQL, kontrak REST API, dan 24 task checklist yang konsisten untuk AI coding agent tanpa halusinasi sintaks.",
      tags: ["JavaScript", "PRD Generator", "PostgreSQL DDL", "REST API Contract", "AI Architecture"],
      icon: "fa-solid fa-diagram-project",
      demoUrl: "https://nnoeel.github.io/BikinPlan/",
      demoText: "Buka BikinPlan",
      repoUrl: "https://github.com/NnoeeL",
    },
    {
      id: "proyek-3",
      category: "Platform Belajar Mandiri AI",
      title: "ArsipBelajar",
      previewImg: "assets/project-arsipbelajar.png",
      description:
        "Aplikasi belajar mandiri berbasis web yang mengonversi catatan kuliah, dokumen (PDF/DOCX/TXT), dan tautan video YouTube menjadi ringkasan materi, flashcard dengan metode pengulangan terjadwal (Leitner System), serta kuis latihan interaktif.",
      challenge:
        "Mengintegrasikan ekstraksi materi multi-format (dokumen dan transkrip YouTube) dengan generator AI (Gemini/Groq) untuk menghasilkan kuis dan flashcard sistem Leitner yang tersimpan offline di browser sekaligus tersinkronisasi ke Firebase.",
      tags: ["PWA", "JavaScript", "Firebase", "Gemini & Groq AI", "Leitner System"],
      icon: "fa-solid fa-book-open",
      demoUrl: "https://arsipbelajar.pages.dev/",
      demoText: "Buka ArsipBelajar",
      repoUrl: "https://github.com/NnoeeL/ArsipBelajar",
    },
  ];

  // ==========================================================================
  // 3. RENDER SKILLS & PROJECTS
  // ==========================================================================
  function renderSkills() {
    const container = document.getElementById("skills-container");
    if (!container) return;

    container.innerHTML = skillCategories
      .map(
        (cat) => `
      <div class="skill-category-card">
        <div class="category-header">
          <div class="category-icon-bubble">
            <i class="${cat.icon}"></i>
          </div>
          <div class="category-titles">
            <span class="category-title-main">${cat.titleMain}</span>
          </div>
        </div>
        <div class="skill-chips-list">
          ${cat.skills
            .map(
              (s) => `
            <div class="skill-chip">
              <i class="${s.icon}"></i>
              <span>${s.name}</span>
            </div>
          `
            )
            .join("")}
        </div>
      </div>
    `
      )
      .join("");
  }

  function renderProjects() {
    const container = document.getElementById("projects-container");
    if (!container) return;

    container.innerHTML = projectsData
      .map(
        (p) => `
      <article class="project-card" id="${p.id}">
        <div class="project-top-row">
          <span class="project-category-badge">
            <i class="fa-solid fa-sparkles"></i> ${p.category}
          </span>
          <div class="project-icon-box">
            <i class="${p.icon}"></i>
          </div>
        </div>

        <div class="project-preview-frame">
          <img src="${p.previewImg}" alt="Pratinjau antarmuka ${p.title}" class="project-preview-img">
        </div>

        <h3 class="project-title">${p.title}</h3>
        <p class="project-description">${p.description}</p>

        <div class="project-challenge-box">
          <span class="challenge-label"><i class="fa-solid fa-wrench"></i> Tantangan Teknis Utama:</span>
          <span class="challenge-text">${p.challenge}</span>
        </div>

        <div class="project-tags-row">
          ${p.tags.map((t) => `<span class="project-tag">${t}</span>`).join("")}
        </div>

        <div class="project-actions">
          <a href="${p.demoUrl}" target="_blank" rel="noopener noreferrer" class="project-btn project-btn-primary">
            <i class="fa-solid fa-arrow-up-right-from-square"></i>
            <span>${p.demoText || "Lihat Proyek"}</span>
          </a>
          <a href="${p.repoUrl}" target="_blank" rel="noopener noreferrer" class="project-btn project-btn-outline">
            <i class="fa-brands fa-github"></i>
            <span>GitHub</span>
          </a>
        </div>
      </article>
    `
      )
      .join("");
  }

  // ==========================================================================
  // 4. SIMULASI OMBAK PANTAI REALISTIS (GERSTNER WAVES & FOAM SHORELINE)
  // ==========================================================================
  class OceanWaveSimulation {
    constructor(canvasId) {
      this.canvas = document.getElementById(canvasId);
      if (!this.canvas) return;
      this.ctx = this.canvas.getContext("2d");
      this.width = 0;
      this.height = 0;
      this.time = 0;
      this.isRunning = true;
      this.ripples = [];
      this.lastFrameTime = performance.now();
      this.fpsCounterEl = document.getElementById("wave-fps-counter");
      this.fpsUpdateTimer = 0;
      this.frameCount = 0;

      // Color palet untuk ombak berdasarkan tema aktif
      this.palettes = {
        day: {
          deep: "rgba(14, 165, 233, 0.45)",
          mid: "rgba(56, 189, 248, 0.55)",
          crest: "rgba(186, 230, 253, 0.75)",
          surf: "rgba(255, 255, 255, 0.95)",
          sandDry: "#fef6e9",
          sandWet: "#eddcc6",
          sunGlint: "rgba(255, 255, 255, 0.9)",
        },
        sunset: {
          deep: "rgba(244, 63, 94, 0.42)",
          mid: "rgba(251, 146, 60, 0.52)",
          crest: "rgba(254, 205, 211, 0.75)",
          surf: "rgba(255, 245, 245, 0.95)",
          sandDry: "#fae8e0",
          sandWet: "#e8c5ba",
          sunGlint: "rgba(254, 240, 138, 0.9)",
        },
        night: {
          deep: "rgba(15, 23, 42, 0.75)",
          mid: "rgba(30, 58, 102, 0.65)",
          crest: "rgba(45, 212, 191, 0.55)",
          surf: "rgba(204, 251, 241, 0.88)",
          sandDry: "#0f172a",
          sandWet: "#09101d",
          sunGlint: "rgba(94, 234, 212, 0.9)",
        },
      };

      this.init();
    }

    init() {
      this.handleResize();
      window.addEventListener("resize", () => this.handleResize());

      // Interaktivitas: Mouse & Touch Ripples
      const addRipple = (e) => {
        const rect = this.canvas.getBoundingClientRect();
        const clientX = e.touches ? e.touches[0].clientX : e.clientX;
        const clientY = e.touches ? e.touches[0].clientY : e.clientY;
        const x = clientX - rect.left;
        const y = clientY - rect.top;

        this.ripples.push({
          x: x * (this.width / rect.width),
          y: y * (this.height / rect.height),
          radius: 4,
          strength: 1.0,
          speed: 2.5,
        });

        if (this.ripples.length > 8) this.ripples.shift();
      };

      this.canvas.addEventListener("mousemove", (e) => {
        if (Math.random() < 0.2) addRipple(e);
      });
      this.canvas.addEventListener("click", addRipple);
      this.canvas.addEventListener("touchstart", addRipple, { passive: true });
      this.canvas.addEventListener("touchmove", (e) => {
        if (Math.random() < 0.25) addRipple(e);
      }, { passive: true });

      // Page Visibility API untuk menghemat baterai saat tab tidak aktif
      document.addEventListener("visibilitychange", () => {
        this.isRunning = !document.hidden;
        if (this.isRunning) {
          this.lastFrameTime = performance.now();
          this.animate();
        }
      });

      this.animate();
    }

    handleResize() {
      const rect = this.canvas.parentElement.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      this.width = rect.width;
      this.height = rect.height;
      this.canvas.width = this.width * dpr;
      this.canvas.height = this.height * dpr;
      this.ctx.resetTransform();
      this.ctx.scale(dpr, dpr);
    }

    getCurrentTheme() {
      return document.documentElement.getAttribute("data-theme") || "day";
    }

    // Fisika Gerstner Wave: Non-linear displacement menghasilkan puncak tajam dan lembah lebar
    calculateGerstner(x, baseHeight, amplitude, wavelength, speed, steepness, t) {
      const k = (2 * Math.PI) / wavelength;
      const omega = k * speed;
      const phase = k * x - omega * t;

      // Gerstner trochoidal coordinate displacement
      const dispX = x - steepness * amplitude * Math.sin(phase);
      const dispY = baseHeight + amplitude * Math.cos(phase);

      // Pertimbangan interaksi ripple
      let rippleDisplacement = 0;
      for (const r of this.ripples) {
        const dist = Math.abs(x - r.x);
        if (dist < r.radius) {
          const factor = Math.cos((dist / r.radius) * Math.PI * 0.5);
          rippleDisplacement += Math.sin(dist * 0.1 - t * 5) * r.strength * factor * 8;
        }
      }

      return { x: dispX, y: dispY + rippleDisplacement };
    }

    animate() {
      if (!this.isRunning) return;

      const now = performance.now();
      const delta = (now - this.lastFrameTime) / 1000;
      this.lastFrameTime = now;
      this.time += delta;

      // FPS tracking
      this.frameCount++;
      this.fpsUpdateTimer += delta;
      if (this.fpsUpdateTimer >= 0.5) {
        const fps = Math.round(this.frameCount / this.fpsUpdateTimer);
        if (this.fpsCounterEl) {
          this.fpsCounterEl.textContent = `${fps} FPS`;
        }
        this.frameCount = 0;
        this.fpsUpdateTimer = 0;
      }

      // Update ripples
      for (let i = this.ripples.length - 1; i >= 0; i--) {
        const r = this.ripples[i];
        r.radius += r.speed;
        r.strength *= 0.96;
        if (r.strength < 0.05 || r.radius > 250) {
          this.ripples.splice(i, 1);
        }
      }

      this.render();
      requestAnimationFrame(() => this.animate());
    }

    render() {
      const ctx = this.ctx;
      const w = this.width;
      const h = this.height;
      const theme = this.getCurrentTheme();
      const palette = this.palettes[theme] || this.palettes.day;

      ctx.clearRect(0, 0, w, h);

      // --- 1. Shoreline Sand Base ---
      const sandGradient = ctx.createLinearGradient(0, h * 0.45, 0, h);
      sandGradient.addColorStop(0, palette.sandDry);
      sandGradient.addColorStop(0.7, palette.sandWet);
      sandGradient.addColorStop(1, palette.sandDry);
      ctx.fillStyle = sandGradient;
      ctx.fillRect(0, 0, w, h);

      // --- 2. Wet Sand Sheen Zone (Tide Wash) ---
      const tideCycle = (Math.sin(this.time * 0.45) + 1) * 0.5; // 0 to 1
      const tideReach = h * 0.35 + tideCycle * (h * 0.28);

      ctx.fillStyle = palette.sandWet;
      ctx.beginPath();
      ctx.moveTo(0, h);
      ctx.lineTo(0, tideReach);
      for (let x = 0; x <= w; x += 30) {
        const wetNoise = Math.sin(x * 0.02 + this.time * 0.2) * 8;
        ctx.lineTo(x, tideReach + wetNoise);
      }
      ctx.lineTo(w, h);
      ctx.closePath();
      ctx.fill();

      // --- 3. Deep Ocean Layer 1 (Horizon Swells) ---
      this.drawWaveLayer(
        h * 0.22, // baseHeight
        14, // amplitude
        240, // wavelength
        28, // speed
        0.35, // steepness
        palette.deep,
        0.0
      );

      // --- 4. Midground Roller Layer 2 ---
      this.drawWaveLayer(
        h * 0.36,
        18,
        180,
        34,
        0.45,
        palette.mid,
        0.5
      );

      // --- 5. Breaking Wave & Crest Lip Layer 3 ---
      const breakingWaveY = this.drawWaveLayer(
        h * 0.48 + tideCycle * 25,
        24,
        140,
        42,
        0.65,
        palette.crest,
        1.2
      );

      // --- 6. Dynamic Foamy Surf & Bubbles (Yadorigi Pattern) ---
      this.drawSurfFoam(breakingWaveY, tideReach, palette);

      // --- 7. Sun Glint Caustics (Kilau Cahaya Matahari) ---
      this.drawSunGlints(palette.sunGlint);
    }

    drawWaveLayer(baseY, amp, len, speed, steepness, color, timeOffset) {
      const ctx = this.ctx;
      const w = this.width;
      const h = this.height;
      const t = this.time + timeOffset;

      ctx.fillStyle = color;
      ctx.beginPath();
      ctx.moveTo(0, h);

      const step = 6;
      let crestPoints = [];

      for (let x = 0; x <= w + step; x += step) {
        const pt = this.calculateGerstner(x, baseY, amp, len, speed, steepness, t);
        ctx.lineTo(pt.x, pt.y);
        if (Math.abs(pt.y - (baseY - amp)) < amp * 0.3) {
          crestPoints.push(pt);
        }
      }

      ctx.lineTo(w, h);
      ctx.closePath();
      ctx.fill();

      return crestPoints;
    }

    drawSurfFoam(crestPoints, tideReach, palette) {
      const ctx = this.ctx;
      const w = this.width;
      const h = this.height;

      // Foam Front Path
      ctx.strokeStyle = palette.surf;
      ctx.lineWidth = 3.5;
      ctx.lineCap = "round";

      ctx.beginPath();
      const foamWaveY = tideReach - 15;
      for (let x = 0; x <= w; x += 15) {
        const foamNoise =
          Math.sin(x * 0.04 + this.time * 1.5) * 6 +
          Math.cos(x * 0.08 - this.time * 2.2) * 3;
        const fy = foamWaveY + foamNoise;
        if (x === 0) ctx.moveTo(x, fy);
        else ctx.lineTo(x, fy);
      }
      ctx.stroke();

      // Foam Lace Bubbles trailing behind
      ctx.fillStyle = palette.surf;
      for (let i = 0; i < 28; i++) {
        const bx = ((i * 47 + this.time * 25) % w);
        const by = foamWaveY + 10 + (Math.sin(i * 12) * 18);
        const radius = 1.5 + (Math.sin(i + this.time) + 1) * 1.8;
        if (by > 0 && by < h) {
          ctx.beginPath();
          ctx.arc(bx, by, radius, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    }

    drawSunGlints(glintColor) {
      const ctx = this.ctx;
      const w = this.width;
      const h = this.height;

      ctx.fillStyle = glintColor;
      for (let i = 0; i < 16; i++) {
        const gx = ((i * 83 + this.time * 40) % (w - 40)) + 20;
        const gy = h * 0.25 + (Math.sin(i * 4 + this.time * 2) * h * 0.15);
        const size = Math.abs(Math.sin(this.time * 3 + i)) * 3 + 1;

        ctx.beginPath();
        ctx.arc(gx, gy, size, 0, Math.PI * 2);
        ctx.fill();
      }
    }
  }

  // ==========================================================================
  // 5. FLOATING SAKURA PETALS & SEA BREEZE SPARKLES
  // ==========================================================================
  class PetalBreezeSimulation {
    constructor(canvasId) {
      this.canvas = document.getElementById(canvasId);
      if (!this.canvas) return;
      this.ctx = this.canvas.getContext("2d");
      this.petals = [];
      this.maxPetals = 22;
      this.width = window.innerWidth;
      this.height = window.innerHeight;

      this.init();
    }

    init() {
      this.resize();
      window.addEventListener("resize", () => this.resize());

      for (let i = 0; i < this.maxPetals; i++) {
        this.petals.push(this.createPetal(true));
      }

      this.animate();
    }

    resize() {
      this.width = window.innerWidth;
      this.height = window.innerHeight;
      this.canvas.width = this.width;
      this.canvas.height = this.height;
    }

    createPetal(randomY = false) {
      return {
        x: Math.random() * this.width,
        y: randomY ? Math.random() * this.height : -20,
        size: 7 + Math.random() * 8,
        speedX: 1.2 + Math.random() * 1.8,
        speedY: 0.6 + Math.random() * 1.2,
        rotation: Math.random() * Math.PI * 2,
        rotSpeed: (Math.random() - 0.5) * 0.04,
        oscillation: Math.random() * Math.PI * 2,
        oscSpeed: 0.02 + Math.random() * 0.03,
        opacity: 0.45 + Math.random() * 0.4,
      };
    }

    animate() {
      const ctx = this.ctx;
      ctx.clearRect(0, 0, this.width, this.height);

      for (let i = 0; i < this.petals.length; i++) {
        const p = this.petals[i];
        p.oscillation += p.oscSpeed;
        p.x += p.speedX + Math.sin(p.oscillation) * 0.8;
        p.y += p.speedY;
        p.rotation += p.rotSpeed;

        if (p.x > this.width + 30 || p.y > this.height + 30) {
          this.petals[i] = this.createPetal(false);
        }

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotation);
        ctx.globalAlpha = p.opacity;

        // Sakura Petal Shape
        ctx.fillStyle = "#fbcfe8";
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.bezierCurveTo(-p.size * 0.6, -p.size * 0.5, -p.size * 0.6, p.size * 0.7, 0, p.size);
        ctx.bezierCurveTo(p.size * 0.6, p.size * 0.7, p.size * 0.6, -p.size * 0.5, 0, 0);
        ctx.closePath();
        ctx.fill();

        ctx.restore();
      }

      requestAnimationFrame(() => this.animate());
    }
  }

  // ==========================================================================
  // 6. SYNTHESIZER SUARA OMBAK PANTAI ALAMI (WEB AUDIO API)
  // ==========================================================================
  class CoastalAudioSynthesizer {
    constructor(buttonId) {
      this.button = document.getElementById(buttonId);
      this.audioCtx = null;
      this.isPlaying = false;
      this.intervalId = null;

      if (this.button) {
        this.button.addEventListener("click", () => this.toggle());
      }
    }

    initAudioContext() {
      if (!this.audioCtx) {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        this.audioCtx = new AudioContext();
      }
      if (this.audioCtx.state === "suspended") {
        this.audioCtx.resume();
      }
    }

    toggle() {
      if (this.isPlaying) {
        this.stop();
      } else {
        this.start();
      }
    }

    start() {
      this.initAudioContext();
      this.isPlaying = true;
      this.button.classList.add("playing");
      this.button.setAttribute("aria-label", "Matikan Suara Ombak");

      // Mulai siklus ombak alami (setiap 6.5 detik mengalun)
      this.triggerWaveSwell();
      this.intervalId = setInterval(() => {
        if (this.isPlaying) this.triggerWaveSwell();
      }, 6500);
    }

    stop() {
      this.isPlaying = false;
      this.button.classList.remove("playing");
      this.button.setAttribute("aria-label", "Putar Suara Ombak");
      if (this.intervalId) {
        clearInterval(this.intervalId);
        this.intervalId = null;
      }
    }

    // Menghasilkan satu deburan ombak naik dan turun menggunakan Pink Noise + Swept Bandpass Filter
    triggerWaveSwell() {
      if (!this.audioCtx || this.audioCtx.state === "closed") return;

      const duration = 6.2;
      const bufferSize = this.audioCtx.sampleRate * duration;
      const noiseBuffer = this.audioCtx.createBuffer(1, bufferSize, this.audioCtx.sampleRate);
      const output = noiseBuffer.getChannelData(0);

      // Pink Noise Generation Algorithm (Paul Kellet's filter)
      let b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0;
      for (let i = 0; i < bufferSize; i++) {
        const white = Math.random() * 2 - 1;
        b0 = 0.99886 * b0 + white * 0.0555179;
        b1 = 0.99332 * b1 + white * 0.0750759;
        b2 = 0.96900 * b2 + white * 0.1538520;
        b3 = 0.86650 * b3 + white * 0.3104856;
        b4 = 0.55000 * b4 + white * 0.5329522;
        b5 = -0.7616 * b5 - white * 0.0168980;
        output[i] = b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362;
        output[i] *= 0.11; // Normalize gain
        b6 = white * 0.115926;
      }

      const noiseSource = this.audioCtx.createBufferSource();
      noiseSource.buffer = noiseBuffer;

      // Resonant Lowpass Filter to mimic ocean water body
      const filter = this.audioCtx.createBiquadFilter();
      filter.type = "lowpass";
      filter.Q.value = 3.5;

      // Gain Envelope
      const gainNode = this.audioCtx.createGain();

      const startTime = this.audioCtx.currentTime;
      const peakTime = startTime + 2.8;
      const endTime = startTime + duration;

      // Filter sweep: 220Hz -> 850Hz -> 180Hz (Wave building up, cresting, receding)
      filter.frequency.setValueAtTime(220, startTime);
      filter.frequency.exponentialRampToValueAtTime(850, peakTime);
      filter.frequency.exponentialRampToValueAtTime(180, endTime);

      // Volume envelope: 0.001 -> 0.42 -> 0.001
      gainNode.gain.setValueAtTime(0.001, startTime);
      gainNode.gain.exponentialRampToValueAtTime(0.42, peakTime);
      gainNode.gain.exponentialRampToValueAtTime(0.001, endTime);

      noiseSource.connect(filter);
      filter.connect(gainNode);
      gainNode.connect(this.audioCtx.destination);

      noiseSource.start(startTime);
      noiseSource.stop(endTime);
    }
  }

  // ==========================================================================
  // 7. PENGALIH SUASANA WAKTU (DAY / SUNSET / NIGHT)
  // ==========================================================================
  function initAtmosphereTheme() {
    const atmoButtons = document.querySelectorAll(".atmo-btn");
    const savedTheme = localStorage.getItem("farrel_portfolio_theme") || "day";

    const setTheme = (theme) => {
      document.documentElement.setAttribute("data-theme", theme);
      localStorage.setItem("farrel_portfolio_theme", theme);
      atmoButtons.forEach((btn) => {
        btn.classList.toggle("active", btn.getAttribute("data-atmo") === theme);
      });
    };

    setTheme(savedTheme);

    atmoButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        const theme = btn.getAttribute("data-atmo");
        setTheme(theme);
      });
    });
  }

  // ==========================================================================
  // 8. EFEK KETIK (TYPEWRITER) DENGAN SEEDED HTML FALLBACK
  // ==========================================================================
  function initTypewriter() {
    const typingSpan = document.getElementById("typing-text");
    if (!typingSpan) return;

    const phrases = [
      "Mahasiswa S1 Teknik Informatika (UNSIL)",
      "Pengembang Web & Aplikasi Praktis",
      "Automasi Bot WhatsApp & Scripting",
      "Kreator Sahabat Mahasiswa & ArsipBelajar",
    ];

    let phraseIdx = 0;
    let charIdx = phrases[0].length;
    let isDeleting = true; // Mulai dengan menghapus kalimat pertama setelah jeda awal

    function typeLoop() {
      const current = phrases[phraseIdx];

      if (isDeleting) {
        charIdx--;
        typingSpan.textContent = current.substring(0, charIdx);

        if (charIdx === 0) {
          isDeleting = false;
          phraseIdx = (phraseIdx + 1) % phrases.length;
          setTimeout(typeLoop, 400);
          return;
        }
        setTimeout(typeLoop, 45);
      } else {
        charIdx++;
        typingSpan.textContent = current.substring(0, charIdx);

        if (charIdx === current.length) {
          isDeleting = true;
          setTimeout(typeLoop, 2400); // Tahan kalimat selama 2.4 detik
          return;
        }
        setTimeout(typeLoop, 75);
      }
    }

    // Jeda awal 2200ms sebelum mulai menghapus kata awal yang sudah di-seed di HTML
    setTimeout(typeLoop, 2200);
  }

  // ==========================================================================
  // 9. SALIN EMAIL 1-KLIK & TOAST NOTIFIKASI
  // ==========================================================================
  function initEmailCopy() {
    const copyBtn = document.getElementById("copy-email-btn");
    const emailText = document.getElementById("email-text");
    const toast = document.getElementById("toast");
    const copyBtnText = document.getElementById("copy-btn-text");

    if (!copyBtn || !emailText) return;

    copyBtn.addEventListener("click", async () => {
      const email = emailText.textContent.trim();
      try {
        await navigator.clipboard.writeText(email);
        if (copyBtnText) copyBtnText.textContent = "Tersalin!";
        if (toast) {
          toast.classList.add("show");
          setTimeout(() => {
            toast.classList.remove("show");
            if (copyBtnText) copyBtnText.textContent = "Salin Email";
          }, 2500);
        }
      } catch (err) {
        // Fallback jika navigator.clipboard diblokir
        const textarea = document.createElement("textarea");
        textarea.value = email;
        textarea.style.position = "fixed";
        textarea.style.opacity = "0";
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand("copy");
        document.body.removeChild(textarea);

        if (toast) {
          toast.classList.add("show");
          setTimeout(() => toast.classList.remove("show"), 2500);
        }
      }
    });
  }

  // ==========================================================================
  // 10. NAVIGASI MOBILE, SCROLLSPY & BACK TO TOP
  // ==========================================================================
  function initNavigation() {
    const navbar = document.getElementById("navbar");
    const hamburger = document.getElementById("hamburger");
    const mobileMenu = document.getElementById("mobile-menu");
    const mobileLinks = document.querySelectorAll(".mobile-link");
    const backToTop = document.getElementById("back-to-top");
    const navLinks = document.querySelectorAll(".nav-link");
    const sections = document.querySelectorAll("section[id]");

    // Mobile Hamburger Toggle
    if (hamburger && mobileMenu) {
      hamburger.addEventListener("click", () => {
        const isOpen = mobileMenu.classList.toggle("open");
        hamburger.setAttribute("aria-expanded", isOpen.toString());
        mobileMenu.setAttribute("aria-hidden", (!isOpen).toString());
      });

      mobileLinks.forEach((link) => {
        link.addEventListener("click", () => {
          mobileMenu.classList.remove("open");
          hamburger.setAttribute("aria-expanded", "false");
          mobileMenu.setAttribute("aria-hidden", "true");
        });
      });

      document.addEventListener("click", (e) => {
        if (mobileMenu.classList.contains("open") && !mobileMenu.contains(e.target) && !hamburger.contains(e.target)) {
          mobileMenu.classList.remove("open");
          hamburger.setAttribute("aria-expanded", "false");
          mobileMenu.setAttribute("aria-hidden", "true");
        }
      });

      document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && mobileMenu.classList.contains("open")) {
          mobileMenu.classList.remove("open");
          hamburger.setAttribute("aria-expanded", "false");
          mobileMenu.setAttribute("aria-hidden", "true");
          hamburger.focus();
        }
      });
    }

    // Scroll Listener: Navbar shadow, Back-to-Top button, & Scrollspy
    window.addEventListener("scroll", () => {
      const scrollY = window.scrollY;

      // Navbar scrolled state
      if (navbar) {
        navbar.classList.toggle("scrolled", scrollY > 30);
      }

      // Back to Top button visibility
      if (backToTop) {
        backToTop.classList.toggle("visible", scrollY > 350);
      }

      // Scrollspy
      let currentSectionId = "";
      sections.forEach((sec) => {
        const top = sec.offsetTop - 120;
        const height = sec.offsetHeight;
        if (scrollY >= top && scrollY < top + height) {
          currentSectionId = sec.getAttribute("id");
        }
      });

      navLinks.forEach((link) => {
        const href = link.getAttribute("href");
        if (href === `#${currentSectionId}`) {
          link.classList.add("active");
        } else {
          link.classList.remove("active");
        }
      });
    });

    if (backToTop) {
      backToTop.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
    }
  }

  // ==========================================================================
  // 11. LIFECYCLE INIT (Race-Condition Safe)
  // ==========================================================================
  function bootstrap() {
    renderSkills();
    renderProjects();
    initAtmosphereTheme();
    initTypewriter();
    initEmailCopy();
    initNavigation();

    // Start Canvases & Synth
    new OceanWaveSimulation("ocean-canvas");
    new PetalBreezeSimulation("petal-canvas");
    new CoastalAudioSynthesizer("audio-toggle-btn");
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", bootstrap);
  } else {
    bootstrap();
  }
})();
