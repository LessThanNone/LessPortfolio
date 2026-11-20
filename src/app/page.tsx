"use client";

import { useState, useEffect } from "react";
import ScrollExpand from "@/components/ScrollExpand";
import AnimatedContent from "@/components/AnimatedContent";
import SplitText from "@/components/SplitText";
import PillNav from "@/components/PillNav";

interface ProjectItem {
  num: string;
  category: "all" | "web" | "mobile" | "data";
  meta: string;
  title: string;
  desc: string;
  fullDesc: string;
  tags: string[];
  link?: string;
  demoUrl?: string;
  reportUrl?: string;
}

const projects: ProjectItem[] = [
  {
    num: "01",
    category: "web",
    meta: "Full-Stack Development · 2026",
    title: "StayRent — Property Rental Web Application",
    desc: "Platform persewaan properti berbasis MERN stack dengan autentikasi berbasis peran (penyewa, pemilik, admin), pencarian & filter properti, manajemen booking, dan kontak WhatsApp langsung.",
    fullDesc: "Platform web full-stack terintegrasi untuk persewaan properti dengan stack MERN (MongoDB, Express, React, Node.js). Dilengkapi autentikasi JWT multi-role untuk penyewa, pemilik properti, dan admin. Memiliki fitur pencarian & penyaringan properti interaktif, manajemen listing dan reservasi, daftar keinginan (wishlist), ulasan pengguna, upload gambar hunian, serta integrasi kontak langsung ke pemilik via WhatsApp.",
    tags: ["React", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "JWT"],
    link: "https://github.com/LessThanNone/StayRent",
    demoUrl: "https://youtu.be/eySfyn-7pJc?si=wC-N2kz-Ij0nLvVj",
  },
  {
    num: "02",
    category: "web",
    meta: "Software Development · 2026",
    title: "Pengembangan Aplikasi ALTAR (Front-End)",
    desc: "Mengembangkan antarmuka responsif untuk asisten dosen dengan React, Next.js, TypeScript, dan Tailwind CSS; mencakup QR check-in, presensi, jadwal mengajar, dan kelas.",
    fullDesc: "Aplikasi portal operasional asisten dosen Universitas Tarumanagara. Mengintegrasikan autentikasi dosen dan asisten dosen, scanner QR kehadiran kelas real-time, manajemen absensi responsif, serta penugasan jadwal asisten dosen.",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "REST API"],
    link: "https://github.com/KamingLo/altar-frontend",
    demoUrl: "https://drive.google.com/file/d/1R6YssACYFXfmvHnww3DrAMFHGXfhFJgR/view?usp=sharing",
  },
  {
    num: "03",
    category: "web",
    meta: "Front-End Programming · 2025",
    title: "Pengembangan Platform Pembelajaran Trainity",
    desc: "Membangun platform pembelajaran berbasis Next.js: autentikasi, katalog kursus, pembelian kelas, pelacakan progres, sertifikat, dan panel admin materi.",
    fullDesc: "Platform web edukasi modular untuk kursus teknologi. Mengimplementasikan modul video belajar interaktif, dashboard analitik progres siswa, sistem penerbitan sertifikat digital, dan CMS admin untuk penambahan modul materi baru.",
    tags: ["Next.js", "React", "Tailwind CSS", "Admin Dashboard"],
    link: "https://github.com/KamingLo/TrainityNext",
    demoUrl: "https://youtu.be/v_6A5_IvTBU?si=7HTsFuWUbFEuDnBP",
  },
  {
    num: "04",
    category: "web",
    meta: "Web Development Game · 2025",
    title: "iClick — Click Speed Test Game",
    desc: "Game uji kecepatan klik berbasis web dengan mode durasi 5, 10, dan 15 detik, pelacakan CPS real-time, klik bonus acak, papan peringkat pemain, serta efek suara & ripple interaktif.",
    fullDesc: "Proyek pengembangan web pertama yang dibuat untuk penugasan mata kuliah Backend Development. Game pengukur kecepatan klik interaktif yang menyediakan pilihan durasi 5, 10, dan 15 detik. Menyajikan pelacakan statistik kecepatan klik per detik (CPS) secara real-time, sistem bonus multiplier acak, ranking skor pemain, serta animasi efek ripple visual dan audio responsif.",
    tags: ["HTML", "CSS", "JavaScript", "Audio API", "Interactive UI"],
    link: "https://github.com/KamingLo/iClick",
    demoUrl: "https://youtu.be/Cf8Y80dZcJo?si=lO1v1NChzOVsbwZ0",
  },
  {
    num: "05",
    category: "mobile",
    meta: "Mobile Programming · 2025",
    title: "Pengembangan Aplikasi Mobile Learra",
    desc: "Mengembangkan aplikasi asuransi Flutter dengan autentikasi dan integrasi API untuk pembelian polis, pembayaran premi, dan pengajuan klaim.",
    fullDesc: "Aplikasi mobile cross-platform berbasis Flutter dan Dart untuk layanan finansial asuransi. Menyediakan alur onboarding pengguna yang mulus, katalog polis digital terintegrasi API pembayaran, dan formulir pengajuan klaim berbasis kamera dan dokumen.",
    tags: ["Flutter", "Dart", "API Integration", "Mobile UI/UX"],
    link: "https://github.com/kaminglo/learra",
    demoUrl: "https://youtu.be/BrQjxDMiyUM?si=FfNFlrkYqdE4SUhN",
  },
  {
    num: "06",
    category: "data",
    meta: "Data Mining · 2026",
    title: "Pemodelan Prediksi Kepuasan Kerja Karyawan",
    desc: "Membangun model prediktif employee attrition dengan Gradient Boosting Regression dan smoothed bootstrap oversampling, mengevaluasi MAE, RMSE, R-Squared, serta feature importance.",
    fullDesc: "Penelitian mendalam menggunakan MATLAB untuk memprediksi tingkat retensi karyawan. Pendekatan mencakup penanganan data tidak seimbang dengan teknik smoothed bootstrap oversampling, perbandingan metrik kinerja algoritma (MAE, RMSE, R²), dan identifikasi faktor penentu kepuasan pada tiap divisi kerja.",
    tags: ["MATLAB", "Gradient Boosting", "Bootstrap Oversampling", "Feature Importance"],
    reportUrl: "Laporan UAS Data Mining Gradient Boosting Regression.pdf",
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

interface CertificateItem {
  mark: string;
  org: string;
  title: string;
  status: string;
  image?: string;
}

const certificates: CertificateItem[] = [
  { mark: "M", org: "MongoDB · 2026", title: "MongoDB Node.js Developer Path for SmartBridge", status: "Completion", image: "" },
  { mark: "SF", org: "Salesforce · 2026", title: "Salesforce Talent Accelerator Program", status: "Completion", image: "salesforce certificate.jpg" },
  { mark: "IBM", org: "IBM SkillsBuild x Hacktiv8 · 2026", title: "AI Agent for Programming & Data Analysis", status: "Accomplishment", image: "IBM Data - AI Agent for Data Analysis.jpg" },
  { mark: "G", org: "Google · 2026", title: "Gemini Certified Student", status: "Certified", image: "master.encrypted.jpg" },
  { mark: "RH", org: "Red Hat Academy · 2025", title: "Red Hat System Administration I & II", status: "Attendance", image: "redhat1.jpg" },
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
  const [selectedCert, setSelectedCert] = useState<CertificateItem | null>(null);

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

      const atBottom =
        window.innerHeight + Math.ceil(window.scrollY) >=
        document.documentElement.scrollHeight - 2;
      if (atBottom) {
        setActiveSection("contact");
        return;
      }

      const sectionMap = [
        { id: "contact", nav: "contact" },
        { id: "education-certs", nav: "education-certs" },
        { id: "about-skills", nav: "about-skills" },
        { id: "experiences", nav: "experiences" },
        { id: "projects", nav: "projects" },
        { id: "hero-profile", nav: "beranda" },
      ];
      let matched = false;
      for (const { id, nav } of sectionMap) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200) {
            setActiveSection(nav);
            matched = true;
            break;
          }
        }
      }
      if (!matched) {
        setActiveSection("beranda");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (selectedCert) setSelectedCert(null);
        if (selectedProject) setSelectedProject(null);
        if (showNotice) closeNotice();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedProject, selectedCert, showNotice]);

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
            <span className="card-context-badge">Pemberitahuan</span>
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
            <div className="modal-actions-group">
              {selectedProject.link && (
                <a
                  href={selectedProject.link}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-modal-action btn-modal-primary"
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  <span>Repositori GitHub</span>
                </a>
              )}
              {selectedProject.demoUrl && (
                <a
                  href={selectedProject.demoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-modal-action btn-modal-secondary"
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                  <span>Demonstrasi Video ↗</span>
                </a>
              )}
              {selectedProject.reportUrl && (
                <a
                  href={selectedProject.reportUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-modal-action btn-modal-primary"
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                    <line x1="16" y1="13" x2="8" y2="13"></line>
                    <line x1="16" y1="17" x2="8" y2="17"></line>
                    <polyline points="10 9 9 9 8 9"></polyline>
                  </svg>
                  <span>Cek Dokumen Laporan ↗</span>
                </a>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Certificate Preview Modal */}
      {selectedCert && (
        <div
          className="detail-modal-backdrop"
          onClick={() => setSelectedCert(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="cert-modal-heading"
        >
          <div className="detail-modal-card cert-modal-card" onClick={(e) => e.stopPropagation()}>
            <button
              className="modal-close-btn"
              onClick={() => setSelectedCert(null)}
              aria-label="Tutup pratinjau sertifikat"
            >
              ✕
            </button>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "8px" }}>
              <span className="card-context-badge">{selectedCert.org}</span>
              <span className="tag-pill">Predikat: {selectedCert.status}</span>
            </div>
            <h3 id="cert-modal-heading">{selectedCert.title}</h3>

            <div className="cert-preview-wrapper">
              {selectedCert.image ? (
                <img
                  src={selectedCert.image}
                  alt={`Sertifikat ${selectedCert.title}`}
                  className="cert-preview-img"
                />
              ) : (
                <div className="cert-placeholder-frame">
                  <div className="cert-placeholder-seal">
                    <span>{selectedCert.mark}</span>
                  </div>
                  <div className="cert-placeholder-text">
                    <span className="cert-placeholder-org">{selectedCert.org}</span>
                    <p className="cert-placeholder-title">{selectedCert.title}</p>
                    <span className="cert-placeholder-recipient">
                      Diberikan kepada: <strong>Charless</strong>
                    </span>
                    <span className="cert-placeholder-note">
                      Simpan file gambar sertifikat pada folder <code>public/certificates/</code> dan isi path-nya pada data <code>certificates</code>.
                    </span>
                  </div>
                </div>
              )}
            </div>

            <div style={{ display: "flex", justifyContent: "flex-end", gap: "10px", marginTop: "20px" }}>
              {selectedCert.image && (
                <a
                  href={selectedCert.image}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-overlay-cyan"
                >
                  Buka Gambar Penuh ↗
                </a>
              )}
              <button
                type="button"
                className="btn-filled-plum"
                onClick={() => setSelectedCert(null)}
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Header – visible only after intro */}
      <header className={`site-header ${isIntroComplete ? "visible" : ""} ${isScrolled ? "scrolled" : ""}`}>
        <div className="nav-wrap">
          <a className="brand" href="#beranda" aria-label="Beranda Charless">
            <div className="brand-monogram">C</div>
            <div className="brand-text">CHARLESS</div>
          </a>

          <PillNav
            className="site-pill-nav"
            layout="split"
            size="md"
            theme="light"
            surface="glass"
            itemStyle="pill"
            hoverEffect="fill"
            indicator="dot"
            highlightColor="#480355"
            highlightTextColor="#FAFAFC"
            activeHref={`#${activeSection}`}
            items={[
              { label: "Beranda", href: "#beranda" },
              { label: "Proyek", href: "#projects" },
              { label: "Pengalaman", href: "#experiences" },
              { label: "Tentang", href: "#about-skills" },
              { label: "Pendidikan", href: "#education-certs" },
              { label: "Kontak", href: "#contact" },
            ]}
          />

          <div className="header-cta-wrap">
            <a className="btn-filled-plum header-cta-btn" href="#contact">
              Hubungi Saya
            </a>
          </div>
        </div>
      </header>

      <main id="beranda">
        {/* ScrollExpand Welcome */}
        <section className="scroll-expand-intro" aria-label="Intro Welcome">
          <ScrollExpand
            src="/hero.png"
            alt="Portofolio Charless"
            title={
              <SplitText
                text="Welcome"
                className="font-light tracking-tight"
                effect="rise"
                splitType="chars"
                delay={120}
                duration={2.2}
                staggerFrom="start"
                trigger="load"
                hoverEffect="lift"
                loop={false}
                loopDelay={1.5}
                mask={false}
                threshold={0.1}
                rootMargin="-100px"
                textAlign="center"
              />
            }
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
            <div style={{ maxWidth: "700px", color: "#FAFAFC", padding: "0 20px" }}>
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
                Web, Mobile Development, Data, &amp; AI
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
                Memadukan pengembangan teknologi modern dan data untuk menghadirkan solusi digital yang terstruktur, terukur, dan intuitif.
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
                <h1 className="hero-huge-display">
                  Membangun solusi digital yang <span>bermakna.</span>
                </h1>
                <p className="hero-lead">
                  Mahasiswa Teknik Informatika Universitas Tarumanagara yang berpengalaman dalam pengembangan web serta aplikasi mobile, dengan minat kuat di bidang data science. Bertujuan untuk menyatukan data dengan pengalaman pengguna yang nyaman.
                </p>
                <div className="hero-cta-group">
                  <a
                    className="btn-filled-plum"
                    href="/CV Charless.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>Lihat CV</span>
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                  </a>
                </div>
              </AnimatedContent>

              <AnimatedContent distance={50} direction="vertical" duration={1} ease="power3.out" delay={0.2} threshold={0.1}>
                <div className="hero-meta-row">
                  <div className="hero-meta-item">
                    <small>Program Studi</small>
                    <strong>S1 Teknik Informatika</strong>
                  </div>
                  <div className="hero-meta-item">
                    <small>Kampus</small>
                    <strong>Universitas Tarumanagara</strong>
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
                <h2 className="section-title">Proyek Pilihan</h2>
              </div>
            </AnimatedContent>

            <div className="project-filter-row">
              {(
                [
                  ["all", "Semua Kategori"],
                  ["web", "Web Development"],
                  ["mobile", "Mobile App"],
                  ["data", "Data Science"],
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
                    <div className="project-card-footer-actions">
                      <span className="project-card-action-text">
                        Detail Proyek →
                      </span>
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
                    <div className="org-role">Anggota UKM · 2024 - Sekarang</div>
                    <ul>
                      <li>Koordinator Divisi Perlengkapan dan Konsumsi pada National English Competition 2025.</li>
                      <li>Anggota Divisi Perlengkapan dan Konsumsi pada kepanitiaan TEC Anniversary dan penyelenggaraan TOEFL Test.</li>
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
                <h2 className="section-title">Tentang &amp; Keahlian</h2>
              </div>
            </AnimatedContent>

            <div className="about-skills-layout">
              <AnimatedContent distance={40} direction="horizontal" duration={0.85} ease="power3.out" threshold={0.1}>
                <div className="about-dossier-card">
                  <div className="about-quote-header">
                    <div className="quote-icon" aria-hidden="true">&ldquo;</div>
                    <p className="highlight-para">
                      Fokus pada kejelasan struktural, ketepatan data, dan pengalaman pengguna yang bersahaja.
                    </p>
                  </div>
                  <div className="about-narrative">
                    <p>
                      Saya Charless, mahasiswa S1 Teknik Informatika di Universitas Tarumanagara dengan antusiasme tinggi pada rekayasa web full-stack, pengembangan aplikasi mobile, dan pengolahan data.
                    </p>
                    <p>
                      Melalui peran sebagai asisten laboratorium dan pengembang proyek perangkat lunak, saya terbiasa menerjemahkan kebutuhan logis menjadi antarmuka responsif dan alur data yang terstruktur. Saya memprioritaskan kode yang bersih, mudah dipelihara, dan berorientasi pada pemecahan masalah nyata.
                    </p>
                  </div>
                  <div className="about-pillars-grid">
                    <div className="about-pillar-card">
                      <span className="pillar-num">01</span>
                      <div>
                        <strong>Web &amp; Mobile</strong>
                        <p>Next.js, React &amp; Flutter</p>
                      </div>
                    </div>
                    <div className="about-pillar-card">
                      <span className="pillar-num">02</span>
                      <div>
                        <strong>Data &amp; AI</strong>
                        <p>Machine Learning &amp; SQL</p>
                      </div>
                    </div>
                    <div className="about-pillar-card">
                      <span className="pillar-num">03</span>
                      <div>
                        <strong>Akademik</strong>
                        <p>Asisten Lab 3 Semester</p>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedContent>

              <div className="skills-grid">
                {skills.map((cat, i) => (
                  <AnimatedContent key={cat.category} distance={30} direction="vertical" duration={0.7} ease="power3.out" delay={i * 0.08} threshold={0.1}>
                    <div className="skill-category-card">
                      <div className="skill-category-header">
                        <h4>{cat.category}</h4>
                      </div>
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
                <h2 className="section-title">Pendidikan &amp; Sertifikasi</h2>
              </div>
            </AnimatedContent>

            <div className="edu-cert-layout">
              <div className="education-col">
                <AnimatedContent distance={40} direction="horizontal" duration={0.85} ease="power3.out" threshold={0.1}>
                  <div className="education-card">
                    <h3>S1 Teknik Informatika</h3>
                    <p>Universitas Tarumanagara · Jakarta, Indonesia</p>
                    <div className="edu-stats-grid">
                      <div className="edu-stat">
                        <span>IPK Kumulatif</span>
                        <strong>3.93</strong>
                      </div>
                      <div className="edu-stat">
                        <span>Semester</span>
                        <strong>Semester 5</strong>
                      </div>
                      <div className="edu-stat">
                        <span>Masa Studi</span>
                        <strong>2024 - 2028</strong>
                      </div>
                    </div>
                  </div>
                </AnimatedContent>

                <AnimatedContent distance={40} direction="horizontal" duration={0.85} ease="power3.out" delay={0.1} threshold={0.1}>
                  <div className="education-card">
                    <h3>SMK · Multimedia</h3>
                    <p>SMK Pelita IV · Jakarta, Indonesia</p>
                    <div className="edu-stats-grid">
                      <div className="edu-stat">
                        <span>Bidang Fokus</span>
                        <strong>Multimedia</strong>
                      </div>
                      <div className="edu-stat">
                        <span>Status</span>
                        <strong>Lulus</strong>
                      </div>
                      <div className="edu-stat">
                        <span>Masa Studi</span>
                        <strong>2021 - 2024</strong>
                      </div>
                    </div>
                  </div>
                </AnimatedContent>
              </div>

              <div className="cert-list">
                {certificates.map((cert, i) => (
                  <AnimatedContent key={cert.title} distance={30} direction="vertical" duration={0.65} ease="power3.out" delay={i * 0.07} threshold={0.1}>
                    <article
                      className="cert-card"
                      role="button"
                      tabIndex={0}
                      onClick={() => setSelectedCert(cert)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          e.preventDefault();
                          setSelectedCert(cert);
                        }
                      }}
                      aria-label={`Buka pratinjau sertifikat: ${cert.title}`}
                    >
                      <div className="cert-card-main">
                        <div className="cert-icon">{cert.mark}</div>
                        <div className="cert-details">
                          <h4>{cert.title}</h4>
                          <small>{cert.org} · Predikat: {cert.status}</small>
                        </div>
                      </div>
                      <div className="cert-click-hint" title="Klik untuk melihat pratinjau sertifikat">
                        <span>Lihat Sertifikat</span>
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                          <polyline points="15 3 21 3 21 9" />
                          <line x1="10" y1="14" x2="21" y2="3" />
                        </svg>
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
                <h2>Mari Terhubung</h2>
                <p>
                  Terbuka untuk kesempatan program magang, proyek web maupun mobile, riset, serta kolaborasi bersama.
                </p>

                <div className="email-pill-box">
                  <code>c.charlesswork@gmail.com</code>
                  <button type="button" className="btn-filled-plum" onClick={copyEmail}>
                    {copied ? "Email Tersalin" : "Salin Email"}
                  </button>
                </div>

                <div className="social-pills-row">
                  <a
                    href="https://www.linkedin.com/in/charlesswork"
                    target="_blank"
                    rel="noreferrer"
                    className="social-pill"
                    aria-label="Profil LinkedIn Charless"
                  >
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                    <span>LinkedIn</span>
                  </a>
                  <a
                    href="https://github.com/LessThanNone"
                    target="_blank"
                    rel="noreferrer"
                    className="social-pill"
                    aria-label="Profil GitHub Charless"
                  >
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    <span>GitHub</span>
                  </a>
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
