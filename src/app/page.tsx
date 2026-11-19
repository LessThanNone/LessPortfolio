"use client";
import { useState, useEffect } from "react";

const projects: [string, string, string, string, string[]][] = [
  ["01", "Data Mining · 2026", "Pemodelan Prediksi Kepuasan Kerja Karyawan", "Membangun model prediktif employee attrition dengan Gradient Boosting Regression dan smoothed bootstrap oversampling, mengevaluasi MAE, RMSE, R-Squared, serta feature importance tiap divisi.", ["MATLAB", "Gradient Boosting", "Bootstrap Oversampling", "Feature Importance"]],
  ["02", "Software Development · 2026", "Pengembangan Aplikasi ALTAR (Front-End)", "Mengembangkan antarmuka responsif untuk asisten dosen dengan React, Next.js, TypeScript, dan Tailwind CSS; mencakup QR check-in, presensi, jadwal mengajar, serta pemantauan kelas.", ["Next.js", "React", "TypeScript", "Tailwind CSS", "REST API"]],
  ["03", "Front-End Programming · 2025", "Pengembangan Platform Pembelajaran Trainity", "Membangun platform pembelajaran berbasis Next.js: autentikasi, katalog kursus, pembelian kelas, pelacakan progres, sertifikat, dan panel admin pengelolaan materi.", ["Next.js", "React", "Tailwind CSS", "Admin Dashboard"]],
  ["04", "Mobile Programming · 2025", "Pengembangan Aplikasi Mobile Learra", "Mengembangkan aplikasi asuransi Flutter dengan autentikasi dan integrasi API untuk pembelian polis, pembayaran premi, dan pengajuan klaim.", ["Flutter", "Dart", "API Integration", "Mobile UI/UX"]],
];
const skills = [["⌘", "Bahasa Pemrograman", ["Python", "SQL (Oracle)", "JavaScript", "TypeScript", "Java", "Dart", "MATLAB"]], ["◫", "Pengembangan Web & Mobile", ["HTML", "CSS", "MongoDB", "Express.js", "React", "Next.js", "Flutter", "Tailwind CSS"]], ["◌", "Data Science & Basis Data", ["Data Preprocessing", "Data Analysis", "Evaluasi Model", "Perancangan ERD", "Normalisasi (3NF)"]], [">_", "Sistem Operasi & Tools", ["Linux (Ubuntu)", "Linux (Red Hat)", "Git", "GitHub", "Langflow"]]];
const certificates = [["M", "MongoDB · 2026", "MongoDB Node.js Developer Path for SmartBridge", "Completion"], ["SF", "Salesforce · 2026", "Salesforce Talent Accelerator Program", "Completion"], ["IBM", "IBM SkillsBuild x Hacktiv8 · 2026", "AI Agent for Programming & Data Analysis", "Accomplishment"], ["G", "Google · 2026", "Gemini Certified Student", "Certified"], ["RH", "Red Hat Academy · 2025", "Red Hat System Administration I & II", "Attendance"]];
function SectionTitle({ number, title }: { number: string; title: string }) { return <div className="section-title"><p>{number}</p><h2>{title}</h2></div>; }
function Chip({ children }: { children: React.ReactNode }) { return <span className="chip">{children}</span>; }

export default function Home() {
  const [copied, setCopied] = useState(false);
  const [showNotice, setShowNotice] = useState(false);

  useEffect(() => {
    // Tampilkan popup saat pertama kali masuk ke web
    const dismissed = sessionStorage.getItem("noticeDismissed");
    if (!dismissed) {
      setShowNotice(true);
    }
  }, []);

  const closeNotice = () => {
    setShowNotice(false);
    sessionStorage.setItem("noticeDismissed", "true");
  };

  const copyEmail = async () => { await navigator.clipboard.writeText("c.charlesswork@gmail.com"); setCopied(true); window.setTimeout(() => setCopied(false), 2000); };
  return <>
    {showNotice && (
      <div className="modal-backdrop" onClick={closeNotice} role="dialog" aria-modal="true">
        <div className="modal-card" onClick={(e) => e.stopPropagation()}>
          <div className="modal-header">
            <span className="modal-badge">
              <i /> Dalam Pengembangan
            </span>
          </div>
          <h3>Halo, Selamat Datang! 👋</h3>
          <p>
            Portofolio ini masih dalam tahap pengembangan aktif. Konten, proyek, serta tampilan antarmuka akan terus diperbarui dan disempurnakan secara berkala.
          </p>
          <div className="modal-footer">
            <button type="button" onClick={closeNotice}>
              Mengerti & Lanjutkan
            </button>
          </div>
        </div>
      </div>
    )}
    <header className="site-header"><div className="nav-wrap"><a className="brand" href="#beranda"><b>C</b><span><strong>CHARLESS</strong><small>WEB & DATA ENGINEERING</small></span></a><span className="availability"><i /> Terbuka untuk Magang & Kolaborasi</span><nav aria-label="Navigasi utama">{[["Tentang", "tentang"], ["Pengalaman", "pengalaman"], ["Proyek", "proyek"], ["Keahlian", "keahlian"], ["Sertifikasi", "sertifikat"], ["Kontak", "kontak"]].map(([label, id]) => <a key={id} href={`#${id}`}>{label}</a>)}</nav><a className="contact-cta" href="#kontak">Hubungi Saya ↗</a></div></header>
    <main id="beranda">
      <section className="hero content"><div className="hero-copy"><p className="eyebrow">PORTOFOLIO · 2026</p><h1>Membangun solusi digital yang <em>bermakna.</em></h1><p className="lede">Mahasiswa Teknik Informatika yang berfokus pada pengembangan web, aplikasi mobile, dan pengolahan data. Menyatukan ketelitian teknis dengan pengalaman digital yang manusiawi.</p><div className="hero-actions"><a className="button primary" href="#proyek">Lihat Proyek ↓</a><a className="button secondary" href="#tentang">Kenalan Lebih Dekat</a></div></div><aside className="profile-card"><div className="profile-monogram">C</div><p className="eyebrow">SAAT INI</p><h2>Teknik Informatika</h2><p>Universitas Tarumanagara</p><div className="profile-grid"><span><b>5</b><small>SEMESTER</small></span><span><b>3.93</b><small>IPK / 4.00</small></span><span><b>4+</b><small>PROYEK</small></span></div></aside></section>
      <section id="tentang" className="content section about"><SectionTitle number="01 · TENTANG SAYA" title="Belajar dengan rasa ingin tahu, berkarya dengan ketelitian." /><div className="about-grid"><div><p className="body-large">Saya Charless, mahasiswa S1 Teknik Informatika di Universitas Tarumanagara. Saya menikmati proses membongkar masalah kompleks menjadi solusi digital yang jelas, terukur, dan mudah digunakan.</p><p>Saat ini saya memperdalam pengembangan web dan mobile, pemodelan data, serta fondasi sistem basis data. Saya juga aktif sebagai asisten dosen dan dalam organisasi kampus.</p></div><div className="facts">{[["Program Studi", "S1 Teknik Informatika", "Universitas Tarumanagara"], ["Masa Studi", "Semester 5", "2024 – 2028 (Perkiraan)"], ["Indeks Prestasi", "3.93 / 4.00", "Predikat Sangat Memuaskan"], ["Kompetensi Utama", "Web, Mobile & Data", "Full-Stack & Data Science"]].map(([label, value, note]) => <article key={label}><small>{label}</small><b>{value}</b><span>{note}</span></article>)}</div></div></section>
      <section id="pengalaman" className="content section"><SectionTitle number="02 · PENGALAMAN & ORGANISASI" title="Pengalaman Asisten Dosen & Kepemimpinan Kampus" /><div className="experience-grid"><div><h3 className="subheading">◌ Pengalaman Asisten Dosen — Universitas Tarumanagara</h3>{[["Asisten Dosen — Big Data", "Agustus 2026 – Desember 2026", "Membimbing praktikum 27 mahasiswa lintas jurusan dalam pemrosesan dan analisis big data menggunakan Python, serta mengevaluasi tugas mingguan."], ["Asisten Dosen — Database Systems", "Agustus 2026 – Desember 2026", "Mengajar praktikum untuk 43 mahasiswa terkait perancangan basis data relasional, normalisasi, dan kueri SQL Oracle."], ["Asisten Dosen — Algebra and Discrete Mathematics", "Februari 2026 – Juni 2026", "Mengajar dan membimbing 84 mahasiswa dalam dua kelas, mengevaluasi responsi mingguan, dan berkoordinasi untuk standardisasi penilaian."]].map(([title, date, text]) => <article className="experience-card" key={title}><div><h3>{title}</h3><Chip>{date}</Chip></div><p>{text}</p></article>)}</div><div><h3 className="subheading">◉ Pengalaman Organisasi & Kepanitiaan</h3><article className="experience-card organization"><h3>Tarumanagara English Club (TEC)</h3><p className="role">ANGGOTA UKM · 2024 – SEKARANG</p><ul><li>Koordinator Divisi Perlengkapan & Konsumsi pada National English Competition 2025.</li><li>Anggota divisi pada TEC Anniversary dan TOEFL Test.</li></ul></article><article className="experience-card organization"><h3>BEM FTI Universitas Tarumanagara</h3><p className="role">PANITIA ACARA · 2025 – 2026</p><ul><li>Anggota Divisi Supply dan Logistics pada I/O Festival 2026.</li><li>Anggota Divisi Perlengkapan dan Konsumsi pada Welcoming Party 2025.</li></ul></article></div></div></section>
      <section id="proyek" className="content section"><div className="title-row"><SectionTitle number="03 · PROYEK" title="Proyek Pengembangan & Pemodelan Data" /><a className="text-link" href="https://github.com/LessThanNone" target="_blank" rel="noreferrer">Lihat repositori di GitHub →</a></div><div className="project-grid">{projects.map(([num, meta, title, desc, tags]) => <article className="project-card" key={num}><div><b className="number">{num}</b><Chip>{meta}</Chip></div><h3>{title}</h3><p>{desc}</p><footer>{tags.map(tag => <Chip key={tag}>{tag}</Chip>)}</footer></article>)}</div></section>
      <section id="keahlian" className="content section"><SectionTitle number="04 · KEAHLIAN TEKNIS" title="Teknologi, Bahasa Pemrograman & Alat Pengembangan" /><div className="skill-grid">{skills.map(([icon, title, values]) => <article className="skill-card" key={title as string}><i>{icon}</i><h3>{title}</h3><div>{(values as string[]).map(value => <Chip key={value}>{value}</Chip>)}</div></article>)}</div></section>
      <section id="sertifikat" className="content section"><div className="title-row"><SectionTitle number="05 · SERTIFIKASI" title="Sertifikasi & Pelatihan Profesional" /><p className="muted">5 Sertifikasi Terverifikasi (2025 – 2026)</p></div><div className="certificate-grid">{certificates.map(([mark, meta, title, type], index) => <article className="certificate" key={title}><b>{mark}</b><div><small>No. 00{index + 1}</small><span>{meta}</span><h3>{title}</h3><p>✓ {type}</p></div></article>)}</div></section>
      <section id="kontak" className="content section contact-section"><div className="contact-box"><p className="eyebrow">06 · KONTAK</p><h2>Mari Terhubung & Berkolaborasi</h2><p>Terbuka untuk kesempatan magang, proyek pengembangan aplikasi web maupun mobile, pengolahan data, serta kolaborasi di bidang teknologi.</p><div className="email-box"><code>c.charlesswork@gmail.com</code><button onClick={copyEmail}>{copied ? "Tersalin ✓" : "Salin Email"}</button></div><div className="socials"><span>⌖ Jakarta Barat</span><a href="tel:081779952785">☎ 081779952785</a><a href="https://www.linkedin.com/in/charlesswork" target="_blank" rel="noreferrer">◉ LinkedIn</a><a href="https://github.com/LessThanNone" target="_blank" rel="noreferrer">⌘ GitHub</a></div></div></section>
    </main><footer className="site-footer"><div className="content"><div><strong>Charless</strong><p>Portofolio S1 Teknik Informatika · Universitas Tarumanagara</p></div><div><p>Jakarta Barat, Indonesia · c.charlesswork@gmail.com</p><small>© 2026 Charless. Hak cipta dilindungi.</small></div></div></footer>
  </>;
}
