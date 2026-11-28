"use client";

import { useState, useEffect, useRef } from "react";
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
  problem: string;
  solution: string;
  tags: string[];
  link?: string;
  demoUrl?: string;
  reportUrl?: string;
}

const projects: ProjectItem[] = [
  {
    num: "01",
    category: "web",
    meta: "Full-Stack MERN · 2026",
    title: "StayRent — Property Rental Web Application",
    desc: "Platform persewaan properti berbasis MERN stack dengan autentikasi berbasis peran (penyewa, pemilik, admin), pencarian & filter properti, manajemen booking, dan kontak WhatsApp langsung.",
    fullDesc:
      "Platform web full-stack terintegrasi berbasis MERN stack (MongoDB, Express, React, Node.js) yang menghubungkan penyewa, pemilik properti, dan administrator dalam satu ekosistem persewaan hunian.",
    problem:
      "Pencarian hunian sewa secara konvensional kerap memakan waktu karena informasi properti yang tersebar, kurang transparan, dan bergantung pada perantara berbiaya tinggi. Di sisi lain, pemilik properti kesulitan mengelola daftar hunian, memantau ketersediaan, serta mencatat pemesanan secara terpusat dan akurat.",
    solution:
      "Membangun platform terpusat dengan autentikasi JWT multi-role (penyewa, pemilik, admin) yang dilengkapi pencarian serta filter lokasi, harga, dan fasilitas. Sistem ini juga menyediakan manajemen listing dan reservasi, unggah foto properti, wishlist, ulasan, serta kontak langsung ke pemilik via WhatsApp tanpa perantara.",
    tags: ["React", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "JWT"],
    link: "https://github.com/LessThanNone/StayRent",
    demoUrl: "https://youtu.be/eySfyn-7pJc?si=wC-N2kz-Ij0nLvVj",
  },
  {
    num: "02",
    category: "web",
    meta: "Software Development As Front End · 2026",
    title: "ALTAR - App For Teaching Assistant",
    desc: "Mengembangkan portal operasional asisten dosen berbasis PWA menggunakan Next.js, TypeScript, dan Tailwind CSS dengan fitur OAuth, QR check-in presensi, jadwal mengajar, dan pengajuan KP.",
    fullDesc:
      "Aplikasi portal operasional asisten dosen Universitas Tarumanagara berbasis Progressive Web App (PWA) menggunakan Next.js, TypeScript, dan Tailwind CSS untuk memusatkan administrasi serta aktivitas mengajar.",
    problem:
      "Sebelumnya, koordinasi asisten dosen, mulai dari absensi, pengecekan jadwal, ketersediaan ruangan kosong, hingga pengajuan kelas pengganti (KP), menumpuk dalam satu grup WhatsApp. Informasi yang bercampur dan akses yang kurang praktis saat berpindah kelas membuat data penting sulit dilacak dan rawan terlewat.",
    solution:
      "Membangun aplikasi web responsif berbasis PWA yang dapat dipasang langsung di perangkat mobile untuk akses cepat di kelas. Sistem ini terintegrasi dengan autentikasi Google OAuth, proteksi rute middleware, QR check-in presensi real-time, pemantauan jadwal serta ruangan kosong, dan pengajuan KP.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "PWA", "OAuth"],
    link: "https://github.com/KamingLo/altar-frontend",
    demoUrl: "https://drive.google.com/file/d/1R6YssACYFXfmvHnww3DrAMFHGXfhFJgR/view?usp=sharing",
  },
  {
    num: "03",
    category: "web",
    meta: "Front-End Programming · 2025",
    title: "Trainity - Digital Learning Platform",
    desc: "Membangun platform pembelajaran berbasis Next.js dan TypeScript yang mencakup autentikasi, katalog dan pembelian kelas, pelacakan progres, sertifikat PDF otomatis, serta panel admin materi.",
    fullDesc:
      "Platform pembelajaran digital berbasis Next.js dan TypeScript yang mengintegrasikan area belajar pengguna, manajemen kursus admin, autentikasi, serta penerbitan sertifikat otomatis.",
    problem:
      "Proses pembelajaran daring sering kali terhambat ketika katalog kursus, transaksi kelas, pemantauan progres belajar, dan penerbitan sertifikat dikelola secara terpisah. Di sisi lain, pengelola materi membutuhkan panel terpusat untuk mengatur konten dan pengguna tanpa alur manual yang rumit.",
    solution:
      "Membangun platform terintegrasi menggunakan Next.js, TypeScript, NextAuth, dan MongoDB yang mencakup autentikasi pengguna, katalog serta pembelian kelas, pelacakan progres belajar, dan panel admin materi. Sistem ini juga dilengkapi notifikasi email serta pembuatan sertifikat PDF secara otomatis.",
    tags: ["Next.js", "React", "TypeScript", "MongoDB", "NextAuth", "CSS Modules"],
    link: "https://github.com/KamingLo/TrainityNext",
    demoUrl: "https://youtu.be/v_6A5_IvTBU?si=7HTsFuWUbFEuDnBP",
  },
  {
    num: "04",
    category: "web",
    meta: "Back-End Programming · 2024",
    title: "iClick - Click Speed Test Game",
    desc: "Game uji kecepatan klik berbasis web menggunakan Node.js, Express.js, MongoDB, dan WebSocket dengan mode klik mouse atau spasi, papan peringkat, sistem pertemanan, serta fitur chat real-time.",
    fullDesc:
      "Proyek pengembangan web back-end pertama yang menghadirkan permainan uji kecepatan klik interaktif berbasis Node.js, Express.js, MongoDB, dan WebSocket dengan dukungan mode tamu maupun akun terdaftar.",
    problem:
      "Permainan uji kecepatan klik di browser umumnya bersifat statis dan solo tanpa penyimpanan skor permanen maupun interaksi antarpemain. Dari sisi teknis, dibutuhkan arsitektur back-end yang mampu mengelola sesi akun, papan peringkat, serta pertukaran pesan secara real-time dalam satu aplikasi web.",
    solution:
      "Membangun aplikasi web dengan Express.js, MongoDB, dan WebSocket yang menyediakan mode klik mouse serta spasi dalam pilihan durasi 5, 10, dan 15 detik. Dilengkapi autentikasi akun untuk menyimpan skor ke papan peringkat global, sistem pertemanan, chat privat maupun publik secara real-time, serta efek audio.",
    tags: ["Node.js", "Express.js", "MongoDB", "WebSocket", "EJS", "JavaScript"],
    link: "https://github.com/KamingLo/iClick",
    demoUrl: "https://youtu.be/Cf8Y80dZcJo?si=lO1v1NChzOVsbwZ0",
  },
  {
    num: "05",
    category: "mobile",
    meta: "Mobile Programming · 2025",
    title: "Learra - Mobile Insurance Application",
    desc: "Mengembangkan aplikasi asuransi berbasis Flutter yang terhubung dengan backend Express.js dan MongoDB untuk pembelian polis, pengecekan status polis, pembayaran premi, serta pengajuan dan pemantauan klaim.",
    fullDesc:
      "Aplikasi mobile cross-platform berbasis Flutter dan Dart yang terhubung dengan backend Express.js dan MongoDB untuk memudahkan pengelolaan layanan asuransi secara mandiri.",
    problem:
      "Pengelolaan layanan asuransi secara konvensional sering kali menyulitkan nasabah karena proses pembelian polis, pengecekan status pertanggungan, hingga pengajuan klaim yang memerlukan prosedur panjang dan berkas fisik. Selain itu, pengguna kerap kesulitan memantau perkembangan status klaim secara transparan.",
    solution:
      "Membangun aplikasi mobile yang menyatukan seluruh layanan asuransi dalam satu alur praktis, mulai dari pemilihan dan pembelian polis, pengecekan detail status polis, hingga pembayaran premi secara aman. Pengguna juga dapat mengajukan klaim dengan mengunggah dokumen langsung dari ponsel serta memantau progresnya.",
    tags: ["Flutter", "Dart", "Express.js", "MongoDB", "REST API"],
    link: "https://github.com/kaminglo/learra",
    demoUrl: "https://youtu.be/BrQjxDMiyUM?si=FfNFlrkYqdE4SUhN",
  },
  {
    num: "06",
    category: "data",
    meta: "Data Mining · 2026",
    title: "Pemodelan Prediksi Kepuasan Kerja Karyawan",
    desc: "Membangun model prediktif tingkat kepuasan kerja karyawan pada divisi sales, technical, dan support menggunakan Gradient Boosting Regression serta smoothed bootstrap oversampling, lengkap dengan evaluasi MAE, RMSE, R-Squared, dan feature importance.",
    fullDesc:
      "Penelitian pemodelan data mining menggunakan MATLAB untuk memprediksi tingkat kepuasan kerja karyawan (satisfaction level) pada divisi sales, technical, dan support sebagai upaya menekan risiko employee attrition.",
    problem:
      "Penurunan kepuasan kerja memicu tingginya employee attrition yang merugikan operasional perusahaan, sementara evaluasi lewat survei berkala kurang memberikan gambaran yang objektif. Secara teknis, ketidakseimbangan distribusi data antardivisi juga berisiko membuat model prediktif menjadi bias terhadap kelompok mayoritas.",
    solution:
      "Menerapkan encoding fitur kategorik dan teknik smoothed bootstrap oversampling untuk menyeimbangkan data latih secara natural, lalu melatih model Gradient Boosting Regression terpisah pada divisi sales, technical, dan support. Performa model dievaluasi melalui MAE, RMSE, dan R-Squared disertai pemetaan feature importance tiap divisi.",
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
  images?: string[];
}

const certificates: CertificateItem[] = [
  {
    mark: "M",
    org: "MongoDB · 2026",
    title: "MongoDB Node.js Developer Path for SmartBridge",
    status: "Completion",
    images: ["charless-mongo.jpg"],
  },
  {
    mark: "SF",
    org: "Salesforce · 2026",
    title: "Salesforce Talent Accelerator Program",
    status: "Completion",
    images: ["salesforce certificate.jpg"],
  },
  {
    mark: "IBM",
    org: "IBM SkillsBuild x Hacktiv8 · 2026",
    title: "AI Agent for Programming & Data Analysis",
    status: "Accomplishment",
    images: [
      "IBM Agent For Programming.jpg  ",
      "IBM Data - AI Agent for Data Analysis.jpg",
    ],
  },
  {
    mark: "G",
    org: "Google · 2026",
    title: "Gemini Certified Student",
    status: "Certified",
    images: ["master.encrypted.jpg"],
  },
  {
    mark: "RH",
    org: "Red Hat Academy · 2025",
    title: "Red Hat System Administration I & II",
    status: "Attendance",
    images: ["redhat1.jpg", "redhat2.jpg"],
  },
];

function BlueMoonIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 32 32"
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="brand-petal-gradient" cx="16" cy="16" r="14" gradientUnits="userSpaceOnUse">
          <stop offset="25%" stopColor="#8EE3F5" />
          <stop offset="90%" stopColor="#567BB5" />
        </radialGradient>
      </defs>
      <g fill="url(#brand-petal-gradient)">
        <circle cx="16" cy="8.4" r="6" />
        <circle cx="23.23" cy="13.65" r="6" />
        <circle cx="20.47" cy="22.15" r="6" />
        <circle cx="11.53" cy="22.15" r="6" />
        <circle cx="8.77" cy="13.65" r="6" />
      </g>
      <circle cx="16" cy="16" r="3.2" fill="#FAFAFC" />
      <circle cx="16" cy="16" r="1.5" fill="#480355" />
    </svg>
  );
}

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
  const [welcomeKey, setWelcomeKey] = useState(0);
  const hasLeftWelcomeRef = useRef(false);

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
      const introDone = window.scrollY > introThreshold;
      setIsIntroComplete(introDone);
      document.documentElement.classList.toggle("intro-active", !introDone);
      const expandSpan = window.innerHeight * 1.3; // sesuai scrollDistance={1.3}
      const expandProgress = Math.min(Math.max(window.scrollY / expandSpan, 0), 1);

      if (expandProgress >= 0.88) {
        hasLeftWelcomeRef.current = true;
      } else if (expandProgress <= 0.55 && hasLeftWelcomeRef.current) {
        hasLeftWelcomeRef.current = false;
        setWelcomeKey((prev) => prev + 1);
      }
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

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.documentElement.classList.remove("intro-active");
    };
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
      {/* Detail Project Modal */}
      {selectedProject && (
        <div
          className="detail-modal-backdrop"
          onClick={() => setSelectedProject(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="detail-modal-card project-modal-wide"
            onClick={(e) => e.stopPropagation()}
          >
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
            <p className="project-modal-intro">{selectedProject.fullDesc}</p>

            <div className="project-ps-grid">
              <div className="project-ps-box problem">
                <span className="project-ps-label">Masalah yang Diselesaikan</span>
                <p>{selectedProject.problem}</p>
              </div>
              <div className="project-ps-box solution">
                <span className="project-ps-label">Solusi yang Dihasilkan</span>
                <p>{selectedProject.solution}</p>
              </div>
            </div>

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
          <div
            className="detail-modal-card cert-modal-card"
            style={{ maxWidth: (selectedCert.images?.length ?? 0) > 1 ? "960px" : undefined }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="modal-close-btn"
              onClick={() => setSelectedCert(null)}
              aria-label="Tutup pratinjau sertifikat"
            >
              ✕
            </button>
            <h3 id="cert-modal-heading" style={{ paddingRight: "36px" }}>
              {selectedCert.title}
            </h3>

            <div className="cert-preview-wrapper">
              {selectedCert.images && selectedCert.images.length > 0 ? (
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns:
                      selectedCert.images.length > 1
                        ? "repeat(auto-fit, minmax(280px, 1fr))"
                        : "1fr",
                    gap: "16px",
                    width: "100%",
                  }}
                >
                  {selectedCert.images.map((imgSrc, idx) => (
                    <div key={imgSrc} style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                      <img
                        src={imgSrc}
                        alt={`Sertifikat ${selectedCert.title} (${idx + 1})`}
                        className="cert-preview-img"
                        style={{ width: "100%", height: "auto", objectFit: "contain" }}
                      />
                      {selectedCert.images!.length > 1 && (
                        <span style={{ fontSize: "12px", opacity: 0.75, textAlign: "center" }}>
                          Sertifikat {idx + 1} dari {selectedCert.images!.length}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
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
            {selectedCert.images && selectedCert.images.length > 0 && (
              <div className="modal-actions-group" style={{ marginTop: "20px" }}>
                {selectedCert.images.map((imgSrc, idx) => (
                  <a
                    key={imgSrc}
                    href={imgSrc}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-modal-action btn-modal-primary"
                  >
                    <span>
                      {selectedCert.images!.length > 1
                        ? `Buka Sertifikat ${idx + 1} ↗`
                        : "Buka Gambar Penuh ↗"}
                    </span>
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Header – visible only after intro */}
      <header className={`site-header ${isIntroComplete ? "visible" : ""} ${isScrolled ? "scrolled" : ""}`}>
        <div className="nav-wrap">
          <a className="brand" href="#beranda" aria-label="Beranda Charless">
            <div className="brand-monogram">
              <BlueMoonIcon />
            </div>
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
        {/* Reading Progress Bar */}
        <div
          className="scroll-progress-bar"
          style={{ width: `${scrollProgress}%` }}
          aria-hidden="true"
        />
      </header>

      <main id="beranda">
        {/* ScrollExpand Welcome */}
        <section className="scroll-expand-intro" aria-label="Intro Welcome">
          <ScrollExpand
            src="/hero.png"
            alt="Portofolio Charless"
            title={
              <SplitText
                key={welcomeKey}
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
                    desc: "Membimbing 84 mahasiswa dalam dua kelas praktikum teori vector, logika proposisi, dan aljabar matriks, serta menyusun standardisasi penilaian responsi.",
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
                      Produk digital yang baik lahir dari bagian yang terstruktur dan antarmuka yang mudah dipahami, dengan fokus utama pada pemecahan masalah nyata.
                    </p>
                  </div>
                  <div className="about-narrative">
                    <p>
                      Saya Charless, mahasiswa Teknik Informatika yang mengutamakan ketelitian dalam mengolah data maupun membangun aplikasi web dan mobile yang rapi dan fungsional.
                    </p>
                    <p>
                      Melalui peran sebagai Asisten Dosen dan pengalaman berorganisasi di kampus, saya terbiasa untuk berkomunikasi efektif dan berkontribusi secara adaptif di berbagai peran tim.
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
                        <p>Python, ML &amp; SQL</p>
                      </div>
                    </div>
                    <div className="about-pillar-card">
                      <span className="pillar-num">03</span>
                      <div>
                        <strong>Akademik</strong>
                        <p>Menjadi Asisten Dosen</p>
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
                        <span>Nilai Akhir</span>
                        <strong>89.42</strong>
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
                          <small>{cert.org} · {cert.status}</small>
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
            <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
              <span className="brand-monogram">
                <BlueMoonIcon />
              </span>
              <div>
                <strong>Charless</strong>
                <p>Web, Mobile &amp; Data · Jakarta, Indonesia</p>
              </div>
            </div>
            <div style={{ paddingRight: "52px" }}>
              <small>© 2026 Charless · Crafted with passion</small>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
