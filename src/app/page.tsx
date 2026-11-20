"use client";

import { useState, useEffect } from "react";
import ScrollExpand from "@/components/ScrollExpand";
import AnimatedContent from "@/components/AnimatedContent";

interface ProjectItem {
  num: string;
  category: "all" | "web" | "mobile" | "data";
  meta: string;
  title: string;
  desc: string;
  fullDesc: string;
  tags: string[];
  link?: string;
}

const projects: ProjectItem[] = [
  {
    num: "01",
    category: "data",
    meta: "Data Mining · 2026",
    title: "Pemodelan Prediksi Kepuasan Kerja Karyawan",
    desc: "Membangun model prediktif employee attrition dengan Gradient Boosting Regression dan smoothed bootstrap oversampling, mengevaluasi MAE, RMSE, R-Squared, serta feature importance.",
    fullDesc: "Penelitian mendalam menggunakan MATLAB untuk memprediksi tingkat retensi karyawan. Pendekatan mencakup penanganan data tidak seimbang dengan teknik smoothed bootstrap oversampling, perbandingan metrik kinerja algoritma (MAE, RMSE, R²), dan identifikasi faktor penentu kepuasan pada tiap divisi kerja.",
    tags: ["MATLAB", "Gradient Boosting", "Bootstrap Oversampling", "Feature Importance"],
    link: "https://github.com/LessThanNone",
  },
  {
    num: "02",
    category: "web",
    meta: "Software Development · 2026",
    title: "Pengembangan Aplikasi ALTAR (Front-End)",
    desc: "Mengembangkan antarmuka responsif untuk asisten dosen dengan React, Next.js, TypeScript, dan Tailwind CSS; mencakup QR check-in, presensi, jadwal mengajar, dan kelas.",
    fullDesc: "Aplikasi portal operasional asisten dosen Universitas Tarumanagara. Mengintegrasikan autentikasi dosen dan asisten dosen, scanner QR kehadiran kelas real-time, manajemen absensi responsif, serta penugasan jadwal asisten dosen.",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "REST API"],
    link: "https://github.com/LessThanNone",
  },
  {
    num: "03",
    category: "web",
    meta: "Front-End Programming · 2025",
    title: "Pengembangan Platform Pembelajaran Trainity",
    desc: "Membangun platform pembelajaran berbasis Next.js: autentikasi, katalog kursus, pembelian kelas, pelacakan progres, sertifikat, dan panel admin materi.",
    fullDesc: "Platform web edukasi modular untuk kursus teknologi. Mengimplementasikan modul video belajar interaktif, dashboard analitik progres siswa, sistem penerbitan sertifikat digital, dan CMS admin untuk penambahan modul materi baru.",
    tags: ["Next.js", "React", "Tailwind CSS", "Admin Dashboard"],
    link: "https://github.com/LessThanNone",
  },
  {
    num: "04",
    category: "mobile",
    meta: "Mobile Programming · 2025",
    title: "Pengembangan Aplikasi Mobile Learra",
    desc: "Mengembangkan aplikasi asuransi Flutter dengan autentikasi dan integrasi API untuk pembelian polis, pembayaran premi, dan pengajuan klaim.",
    fullDesc: "Aplikasi mobile cross-platform berbasis Flutter dan Dart untuk layanan finansial asuransi. Menyediakan alur onboarding pengguna yang mulus, katalog polis digital terintegrasi API pembayaran, dan formulir pengajuan klaim berbasis kamera dan dokumen.",
    tags: ["Flutter", "Dart", "API Integration", "Mobile UI/UX"],
    link: "https://github.com/LessThanNone",
  },
];

const skills = [
  {
    category: "Bahasa Pemrograman",
    items: ["Python", "SQL (Oracle)", "JavaScript", "TypeScript", "Java", "Dart", "MATLAB"],
  },
  {
    category: "Pengembangan Web & Mobile",
    items: ["HTML", "CSS", "React", "Next.js", "Flutter", "Tailwind CSS", "Express.js", "MongoDB"],
  },
  {
    category: "Data Science & Basis Data",
    items: ["Data Preprocessing", "Data Analysis", "Evaluasi Model", "Perancangan ERD", "Normalisasi (3NF)"],
  },
  {
    category: "Sistem & Perangkat Kerja",
    items: ["Linux (Ubuntu)", "Linux (Red Hat)", "Git", "GitHub", "Langflow", "REST API"],
  },
];

const certificates = [
  { mark: "M", org: "MongoDB · 2026", title: "MongoDB Node.js Developer Path for SmartBridge", status: "Completion" },
  { mark: "SF", org: "Salesforce · 2026", title: "Salesforce Talent Accelerator Program", status: "Completion" },
  { mark: "IBM", org: "IBM SkillsBuild x Hacktiv8 · 2026", title: "AI Agent for Programming & Data Analysis", status: "Accomplishment" },
  { mark: "G", org: "Google · 2026", title: "Gemini Certified Student", status: "Certified" },
  { mark: "RH", org: "Red Hat Academy · 2025", title: "Red Hat System Administration I & II", status: "Attendance" },
];

export default function Home() {
  const [copied, setCopied] = useState(false);
  const [showNotice, setShowNotice] = useState(false);
  const [activeSection, setActiveSection] = useState("beranda");
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isIntroComplete, setIsIntroComplete] = useState(false);
  const [projectCategory, setProjectCategory] = useState<"all" | "web" | "mobile" | "data">("all");
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  useEffect(() => {
    const dismissed = sessionStorage.getItem("noticeDismissed");
    if (!dismissed) {
      setShowNotice(true);
    }

    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = totalScroll > 0 ? (window.scrollY / totalScroll) * 100 : 0;
      setScrollProgress(currentProgress);
      setIsScrolled(window.scrollY > 20);

      const introThreshold = window.innerHeight * 1.1;
      setIsIntroComplete(window.scrollY > introThreshold);

      const sections = ["beranda", "projects", "experiences", "about-skills", "education-certs", "contact"];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 140 && rect.bottom >= 140) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (selectedProject) setSelectedProject(null);
        if (showNotice) closeNotice();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedProject, showNotice]);

  const closeNotice = () => {
    setShowNotice(false);
    sessionStorage.setItem("noticeDismissed", "true");
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText("c.charlesswork@gmail.com");
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      // fallback
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const filteredProjects = projects.filter(
    (p) => projectCategory === "all" || p.category === projectCategory
  );

  return (
    <>
      {/* Reading Progress Bar */}
      <div
        className="scroll-progress-bar"
        style={{ width: `${scrollProgress}%` }}
        aria-hidden="true"
      />

      {/* Back To Top */}
      <button
        onClick={scrollToTop}
        className={`back-to-top ${isScrolled ? "visible" : ""}`}
        aria-label="Kembali ke atas"
        title="Kembali ke atas"
      >
        ↑
      </button>

      {/* Pop Up Pengumuman */}
      {showNotice && (
        <div className="modal-backdrop" onClick={closeNotice} role="dialog" aria-modal="true">
          <div className="modal-card" onClick={(e) => e.stopPropagation()}>
            <span className="eyebrow-tag">Pengumuman</span>
            <h3>Selamat Datang di Portofolio Saya</h3>
            <p>
              Website portofolio ini sedang dalam tahap pengembangan aktif. Proyek, pembaruan materi, serta tampilan antarmuka akan terus diperbarui secara berkala.
            </p>
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <button type="button" className="btn-filled-plum" onClick={closeNotice}>
                Mengerti dan Lanjutkan
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Detail Project Modal */}
      {selectedProject && (
        <div
          className="detail-modal-backdrop"
          onClick={() => setSelectedProject(null)}
          role="dialog"
          aria-modal="true"
        >
          <div className="detail-modal-card" onClick={(e) => e.stopPropagation()}>
            <button
              className="modal-close-btn"
              onClick={() => setSelectedProject(null)}
              aria-label="Tutup detail proyek"
            >
              ✕
            </button>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "8px" }}>
              <span className="project-card-num">{selectedProject.num}</span>
              <span className="tag-pill">{selectedProject.meta}</span>
            </div>
            <h3>{selectedProject.title}</h3>
            <p>{selectedProject.fullDesc}</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "24px" }}>
              {selectedProject.tags.map((t) => (
                <span key={t} className="tag-pill">
                  {t}
                </span>
              ))}
            </div>
            {selectedProject.link && (
              <a
                href={selectedProject.link}
                target="_blank"
                rel="noreferrer"
                className="btn-filled-plum"
              >
                Kunjungi Repositori GitHub
              </a>
            )}
          </div>
        </div>
      )}

      {/* Header – visible only after intro */}
      <header className={`site-header ${isIntroComplete ? "visible" : ""} ${isScrolled ? "scrolled" : ""}`}>
        <div className="nav-wrap">
          <a className="brand" href="#beranda">
            <div className="brand-monogram">C</div>
            <div className="brand-text">CHARLESS</div>
          </a>

          <nav className="nav-links" aria-label="Navigasi Utama">
            {[
              ["Beranda", "beranda"],
              ["Projects", "projects"],
              ["Experiences", "experiences"],
              ["About & Skills", "about-skills"],
              ["Education & Certs", "education-certs"],
              ["Contact", "contact"],
            ].map(([label, id]) => (
              <a
                key={id}
                href={`#${id}`}
                className={`nav-link ${activeSection === id ? "active" : ""}`}
              >
                {label}
              </a>
            ))}
          </nav>

          <a className="btn-filled-plum" href="#contact">
            Hubungi Saya
          </a>
        </div>
      </header>

      <main id="beranda">
        {/* ScrollExpand Welcome */}
        <section className="scroll-expand-intro" aria-label="Intro Welcome">
          <ScrollExpand
            src="/hero.png"
            alt="Portofolio Charless"
            title="Welcome"
            scrollHint="Scroll down untuk melihat"
            useWindowScroll
            startWidth={42}
            startHeight={58}
            startRadius={24}
            endRadius={0}
            mediaZoom={1.35}
            scrollDistance={1.3}
            holdDistance={0.4}
            smoothing={0.1}
            overlayScrim={0.65}
            enabled
          >
            <div style={{ maxWidth: "780px", color: "#FAFAFC", padding: "0 20px" }}>
              <span className="eyebrow-tag" style={{ color: "#90FCF9", textShadow: "0 2px 8px rgba(0,0,0,0.5)" }}>
                Portofolio 2026
              </span>
              <h2
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "clamp(30px, 4.8vw, 52px)",
                  fontWeight: 400,
                  margin: "12px 0 16px",
                  lineHeight: 1.15,
                  letterSpacing: "-1px",
                  color: "#FAFAFC",
                  textShadow: "0 4px 24px rgba(20, 6, 32, 0.9)",
                }}
              >
                Charless: Web Development &amp; Data Engineering
              </h2>
              <p
                style={{
                  fontSize: "16px",
                  color: "rgba(250, 250, 252, 0.9)",
                  lineHeight: 1.65,
                  margin: "0 auto 24px",
                  maxWidth: "580px",
                  textShadow: "0 2px 14px rgba(0,0,0,0.7)",
                }}
              >
                Membangun solusi digital yang terukur, rapi, dan mudah diakses melalui perpaduan rekayasa front-end modern dan analisis data terstruktur.
              </p>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "10px",
                  padding: "10px 24px",
                  borderRadius: "9999px",
                  background: "rgba(255, 255, 255, 0.08)",
                  border: "1px solid rgba(255, 255, 255, 0.25)",
                  backdropFilter: "blur(10px)",
                  color: "#FAFAFC",
                  fontSize: "13px",
                  letterSpacing: "0.04em",
                  textTransform: "uppercase",
                  fontWeight: 500,
                  boxShadow: "0 4px 24px rgba(0, 0, 0, 0.4)",
                }}
              >
                <span>Scroll Down Untuk Menjelajahi</span>
                <span style={{ fontSize: "16px", transform: "translateY(1px)" }}>↓</span>
              </div>
            </div>
          </ScrollExpand>
        </section>

        {/* Portfolio Body – revealed after intro */}
        <div className={`portfolio-body-reveal ${isIntroComplete ? "revealed" : ""}`}>

          {/* 1. HERO */}
          <section id="hero-profile" className="hero content">
            <div className="hero-layout">
              <AnimatedContent distance={40} direction="vertical" duration={0.9} ease="power3.out" threshold={0.15} stagger={0.1}>
                <span className="eyebrow-tag">Portofolio 2026 · Web &amp; Data Engineering</span>
                <h1 className="hero-huge-display">
                  Membangun solusi digital yang <span>bermakna.</span>
                </h1>
                <p className="hero-lead">
                  Mahasiswa Teknik Informatika Universitas Tarumanagara yang berfokus pada arsitektur web modern, aplikasi mobile, dan pengolahan data terukur. Menggabungkan ketelitian algoritma dengan antarmuka yang intuitif.
                </p>
                <div className="hero-cta-group">
                  <a className="btn-filled-plum" href="#projects">Jelajahi Proyek</a>
                  <a className="btn-overlay-cyan" href="#about-skills">Tentang Saya</a>
                </div>
              </AnimatedContent>

              <AnimatedContent distance={50} direction="vertical" duration={1} ease="power3.out" delay={0.2} threshold={0.1}>
                <div className="hero-meta-row">
                  <div className="hero-meta-item">
                    <small>Program Studi</small>
                    <strong>S1 Teknik Informatika</strong>
                  </div>
                  <div className="hero-meta-item">
                    <small>Universitas</small>
                    <strong>Tarumanagara</strong>
                  </div>
                  <div className="hero-meta-item">
                    <small>Indeks Prestasi Kumulatif</small>
                    <strong>3.93 / 4.00</strong>
                  </div>
                  <div className="hero-meta-item">
                    <small>Status Akademik</small>
                    <strong>Semester 5</strong>
                  </div>
                </div>
              </AnimatedContent>
            </div>
          </section>

          {/* 2. PROJECTS */}
          <section id="projects" className="section content">
            <AnimatedContent distance={30} direction="vertical" duration={0.7} ease="power3.out" threshold={0.15}>
              <div className="section-head">
                <span className="eyebrow-tag">01 · Portofolio Karya</span>
                <h2 className="section-title">Proyek Pilihan</h2>
              </div>
            </AnimatedContent>

            <div className="project-filter-row">
              {(
                [
                  ["all", "Semua Kategori"],
                  ["web", "Web Development"],
                  ["mobile", "Mobile App"],
                  ["data", "Data Science & Mining"],
                ] as const
              ).map(([cat, label]) => (
                <button
                  key={cat}
                  type="button"
                  className={`filter-pill ${projectCategory === cat ? "active" : ""}`}
                  onClick={() => setProjectCategory(cat)}
                >
                  {label}
                </button>
              ))}
            </div>

            <div className="project-grid">
              {filteredProjects.map((p) => (
                <AnimatedContent key={p.num} distance={40} direction="vertical" duration={0.75} ease="power3.out" threshold={0.1}>
                  <article
                    className="project-card"
                    role="button"
                    tabIndex={0}
                    onClick={() => setSelectedProject(p)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        setSelectedProject(p);
                      }
                    }}
                    aria-label={`Lihat detail proyek: ${p.title}`}
                  >
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <span className="project-card-num">{p.num}</span>
                      <span className="project-card-meta">{p.meta}</span>
                    </div>
                    <h3>{p.title}</h3>
                    <p>{p.desc}</p>
                    <div style={{ color: "var(--link)", fontSize: "12px", fontWeight: 500, marginBottom: "16px" }}>
                      Buka detail studi kasus
                    </div>
                    <div className="project-card-tags">
                      {p.tags.map((tag) => (
                        <span key={tag} className="tag-pill">{tag}</span>
                      ))}
                    </div>
                  </article>
                </AnimatedContent>
              ))}
            </div>
          </section>

          {/* 3. EXPERIENCES */}
          <section id="experiences" className="section content">
            <AnimatedContent distance={30} direction="vertical" duration={0.7} ease="power3.out" threshold={0.15}>
              <div className="section-head">
                <span className="eyebrow-tag">02 · Rekam Jejak</span>
                <h2 className="section-title">Pengalaman Kerja &amp; Kepanitiaan</h2>
              </div>
            </AnimatedContent>

            <div className="experience-cols">
              <div>
                <h3 className="exp-group-title">Pengalaman Asisten Dosen: Universitas Tarumanagara</h3>
                {[
                  {
                    role: "Asisten Dosen: Big Data",
                    period: "Agustus 2026 - Desember 2026",
                    desc: "Membimbing praktikum 27 mahasiswa lintas jurusan dalam pemrosesan dan analisis big data menggunakan Python, mengevaluasi penugasan mingguan, dan memfasilitasi sesi tanya-jawab teknis.",
                  },
                  {
                    role: "Asisten Dosen: Database Systems",
                    period: "Agustus 2026 - Desember 2026",
                    desc: "Mengajar modul praktikum basis data untuk 43 mahasiswa terkait perancangan ERD relasional, implementasi normalisasi 3NF, dan optimasi kueri SQL Oracle.",
                  },
                  {
                    role: "Asisten Dosen: Algebra and Discrete Mathematics",
                    period: "Februari 2026 - Juni 2026",
                    desc: "Membimbing 84 mahasiswa dalam dua kelas praktikum teori graf, logika proposisi, dan aljabar matriks, serta menyusun standardisasi penilaian responsi.",
                  },
                ].map((item) => (
                  <AnimatedContent key={item.role} distance={35} direction="vertical" duration={0.75} ease="power3.out" threshold={0.12}>
                    <article className="exp-card">
                      <div className="exp-header">
                        <h4>{item.role}</h4>
                        <span className="exp-badge">{item.period}</span>
                      </div>
                      <p>{item.desc}</p>
                    </article>
                  </AnimatedContent>
                ))}
              </div>

              <div>
                <h3 className="exp-group-title">Organisasi &amp; Kepanitiaan</h3>
                <AnimatedContent distance={35} direction="vertical" duration={0.75} ease="power3.out" threshold={0.12}>
                  <article className="org-card">
                    <h4>Tarumanagara English Club (TEC)</h4>
                    <div className="org-role">Anggota Aktif UKM · 2024 - Sekarang</div>
                    <ul>
                      <li>Koordinator Divisi Perlengkapan dan Konsumsi pada National English Competition 2025.</li>
                      <li>Anggota operasional pada kepanitiaan TEC Anniversary dan penyelenggaraan TOEFL Institutional Test.</li>
                    </ul>
                  </article>
                </AnimatedContent>

                <AnimatedContent distance={35} direction="vertical" duration={0.75} ease="power3.out" delay={0.1} threshold={0.12}>
                  <article className="org-card">
                    <h4>BEM FTI Universitas Tarumanagara</h4>
                    <div className="org-role">Kepanitiaan Fakultas · 2025 - 2026</div>
                    <ul>
                      <li>Anggota Divisi Supply dan Logistics pada penyelenggaraan festival teknologi tahunan I/O Festival 2026.</li>
                      <li>Anggota Divisi Perlengkapan dan Konsumsi pada acara penyambutan mahasiswa baru Welcoming Party 2025.</li>
                    </ul>
                  </article>
                </AnimatedContent>
              </div>
            </div>
          </section>

          {/* 4. ABOUT & SKILLS */}
          <section id="about-skills" className="section content">
            <AnimatedContent distance={30} direction="vertical" duration={0.7} ease="power3.out" threshold={0.15}>
              <div className="section-head">
                <span className="eyebrow-tag">03 · Profil &amp; Keahlian</span>
                <h2 className="section-title">About &amp; Skills</h2>
              </div>
            </AnimatedContent>

            <div className="about-skills-layout">
              <AnimatedContent distance={40} direction="horizontal" duration={0.85} ease="power3.out" threshold={0.1}>
                <div className="about-prose">
                  <p className="highlight-para">
                    &ldquo;Fokus pada kejelasan struktural, ketepatan data, dan pengalaman pengguna yang bersahaja.&rdquo;
                  </p>
                  <p>
                    Saya Charless, mahasiswa S1 Teknik Informatika di Universitas Tarumanagara dengan antusiasme tinggi pada rekayasa web full-stack, pengembangan aplikasi mobile, dan pengolahan data.
                  </p>
                  <p>
                    Melalui peran sebagai asisten laboratorium dan pengembang proyek perangkat lunak, saya terbiasa menerjemahkan kebutuhan logis menjadi antarmuka responsif dan alur data yang terstruktur. Saya memprioritaskan kode yang bersih, mudah dipelihara, dan berorientasi pada pemecahan masalah nyata.
                  </p>
                </div>
              </AnimatedContent>

              <div className="skills-grid">
                {skills.map((cat, i) => (
                  <AnimatedContent key={cat.category} distance={30} direction="vertical" duration={0.7} ease="power3.out" delay={i * 0.08} threshold={0.1}>
                    <div className="skill-category-card">
                      <h4>{cat.category}</h4>
                      <div className="skill-chips">
                        {cat.items.map((skill) => (
                          <span key={skill} className="skill-chip">{skill}</span>
                        ))}
                      </div>
                    </div>
                  </AnimatedContent>
                ))}
              </div>
            </div>
          </section>

          {/* 5. EDUCATION & CERTS */}
          <section id="education-certs" className="section content">
            <AnimatedContent distance={30} direction="vertical" duration={0.7} ease="power3.out" threshold={0.15}>
              <div className="section-head">
                <span className="eyebrow-tag">04 · Kualifikasi Akademik &amp; Profesional</span>
                <h2 className="section-title">Education &amp; Certificates</h2>
              </div>
            </AnimatedContent>

            <div className="edu-cert-layout">
              <AnimatedContent distance={40} direction="horizontal" duration={0.85} ease="power3.out" threshold={0.1}>
                <div className="education-card">
                  <span className="eyebrow-tag">Pendidikan Formal</span>
                  <h3>S1 Teknik Informatika</h3>
                  <p>Universitas Tarumanagara · Jakarta, Indonesia</p>
                  <div className="edu-stats-grid">
                    <div className="edu-stat">
                      <span>IPK Kumulatif</span>
                      <strong>3.93</strong>
                    </div>
                    <div className="edu-stat">
                      <span>Semester</span>
                      <strong>5</strong>
                    </div>
                    <div className="edu-stat">
                      <span>Masa Studi</span>
                      <strong>2024 - 2028</strong>
                    </div>
                  </div>
                </div>
              </AnimatedContent>

              <div className="cert-list">
                {certificates.map((cert, i) => (
                  <AnimatedContent key={cert.title} distance={30} direction="vertical" duration={0.65} ease="power3.out" delay={i * 0.07} threshold={0.1}>
                    <article className="cert-card">
                      <div className="cert-icon">{cert.mark}</div>
                      <div className="cert-details">
                        <h4>{cert.title}</h4>
                        <small>{cert.org} · Predikat: {cert.status}</small>
                      </div>
                    </article>
                  </AnimatedContent>
                ))}
              </div>
            </div>
          </section>

          {/* 6. CONTACT */}
          <section id="contact" className="section content">
            <AnimatedContent distance={40} direction="vertical" duration={0.9} ease="power3.out" threshold={0.1}>
              <div className="contact-container">
                <span className="eyebrow-tag">05 · Kolaborasi &amp; Karir</span>
                <h2>Mari Terhubung</h2>
                <p>
                  Terbuka untuk kesempatan program magang, proyek rekayasa perangkat lunak web maupun mobile, riset data, serta kolaborasi akademik.
                </p>

                <div className="email-pill-box">
                  <code>c.charlesswork@gmail.com</code>
                  <button type="button" className="btn-filled-plum" onClick={copyEmail}>
                    {copied ? "Email Tersalin" : "Salin Email"}
                  </button>
                </div>

                <div className="social-pills-row">
                  <span className="social-pill">Jakarta Barat, Indonesia</span>
                  <a href="tel:081779952785" className="social-pill">Telepon: 081779952785</a>
                  <a href="https://www.linkedin.com/in/charlesswork" target="_blank" rel="noreferrer" className="social-pill">LinkedIn</a>
                  <a href="https://github.com/LessThanNone" target="_blank" rel="noreferrer" className="social-pill">GitHub</a>
                </div>
              </div>
            </AnimatedContent>
          </section>

        </div>
      </main>

      <footer className="site-footer">
        <div className="content">
          <div className="footer-content">
            <div>
              <strong>Charless</strong>
              <p>Portofolio Teknik Informatika · Universitas Tarumanagara</p>
            </div>
            <div>
              <small>© 2026 Charless. Hak cipta dilindungi.</small>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
