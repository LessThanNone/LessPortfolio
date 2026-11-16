"use client";

import { useEffect, useRef, useState } from "react";

export default function Home() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [copied, setCopied] = useState(false);

  const emailAddress = "c.charlesswork@gmail.com"; 

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let time = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener("resize", resize);

    const waves = [
      {
        amplitude: 55,
        frequency: 0.0022,
        speed: 0.012,
        yOffset: 0.68,
        colorTop: "rgba(159, 170, 203, 0.45)", // #9FAACB
        colorBottom: "rgba(35, 101, 165, 0.25)", // #2365A5
      },
      {
        amplitude: 45,
        frequency: 0.0031,
        speed: -0.015,
        yOffset: 0.73,
        colorTop: "rgba(168, 143, 163, 0.42)", // #A88FA3
        colorBottom: "rgba(207, 194, 203, 0.35)", // #CFC2CB
      },
      {
        amplitude: 65,
        frequency: 0.0018,
        speed: 0.009,
        yOffset: 0.78,
        colorTop: "rgba(35, 101, 165, 0.35)", // #2365A5
        colorBottom: "rgba(159, 170, 203, 0.55)", // #9FAACB
      },
    ];

    const render = () => {
      time += 1;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      waves.forEach((wave, index) => {
        ctx.beginPath();
        const baseHeight = canvas.height * wave.yOffset;
        ctx.moveTo(0, canvas.height);

        for (let x = 0; x <= canvas.width; x += 8) {
          const y =
            baseHeight +
            Math.sin(x * wave.frequency + time * wave.speed + index) *
            wave.amplitude +
            Math.cos(x * wave.frequency * 0.6 - time * wave.speed) *
            (wave.amplitude * 0.5);
          ctx.lineTo(x, y);
        }

        ctx.lineTo(canvas.width, canvas.height);
        ctx.closePath();

        const gradient = ctx.createLinearGradient(
          0,
          baseHeight - wave.amplitude,
          0,
          canvas.height
        );
        gradient.addColorStop(0, wave.colorTop);
        gradient.addColorStop(1, wave.colorBottom);

        ctx.fillStyle = gradient;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[#F4F1F2] px-6 text-center select-none">
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full blur-2xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#F4F1F2] via-[#F4F1F2]/75 to-transparent"
      />

      <div className="relative z-10 -mt-16 flex max-w-2xl flex-col items-center">
        <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#CFC2CB] bg-white/60 px-3.5 py-1 text-xs font-medium text-[#2365A5] backdrop-blur-md">
          <span className="h-2 w-2 rounded-full bg-[#A88FA3]" />
          Work in Progress
        </span>

        <h1 className="text-4xl font-bold tracking-tight text-[#2365A5] sm:text-5xl md:text-6xl">
          Portfolio sedang dibuat.
        </h1>

        <p className="mt-4 max-w-lg text-sm leading-relaxed text-[#2365A5]/75 sm:text-base">
          Website ini masih dalam tahap pengerjaan dan penyusunan karya. Untuk
          sementara waktu, silakan cek aktivitas atau hubungi saya melalui
          tautan berikut.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="https://github.com/LessThanNone"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-xl bg-[#2365A5] px-5 py-3 text-sm font-medium text-[#F4F1F2] shadow-[0_8px_24px_rgba(35,101,165,0.22)] transition-all hover:bg-[#1b5287] active:scale-[0.98]"
          >
            <span>GitHub</span>
          </a>

          <a
            href="https://linkedin.com/in/charlesswork"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-[#9FAACB]/50 bg-[#9FAACB]/25 px-5 py-3 text-sm font-medium text-[#2365A5] backdrop-blur-md transition-all hover:border-[#2365A5]/40 hover:bg-[#9FAACB]/40 active:scale-[0.98]"
          >
            LinkedIn
          </a>

          <a
            href={`mailto:${emailAddress}`}
            onClick={handleCopyEmail}
            className="inline-flex items-center gap-2 rounded-xl border border-[#A88FA3]/50 bg-[#A88FA3]/20 px-5 py-3 text-sm font-medium text-[#2365A5] backdrop-blur-md transition-all hover:border-[#A88FA3] hover:bg-[#A88FA3]/35 active:scale-[0.98]"
          >
            {copied ? "Email Tersalin!" : "Contact Email"}
          </a>
        </div>
      </div>
    </main>
  );
}