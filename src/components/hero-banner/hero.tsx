"use client";

import Button from "@/components/ui/button";
import { useCallback, useEffect, useRef } from "react";

const DOT_SPACING = 24;
const DOT_RADIUS = 1;
const MAGNET_RADIUS = 154;
const MAGNET_STRENGTH = 14;
const COLOR_RADIUS = 180;
const BASE_OPACITY = 0;
const MAX_OPACITY = 0.5;

function getThemeRgb(): [number, number, number] {
  if (typeof window === "undefined") return [51, 110, 249];
  const rgb = getComputedStyle(document.documentElement)
    .getPropertyValue("--theme-color-rgb")
    .trim();
  const parts = rgb.split(/\s+/).map(Number);
  return parts.length === 3
    ? (parts as [number, number, number])
    : [51, 110, 249];
}

const Hero = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const cursorRef = useRef({ x: -1000, y: -1000 });
  const dotsRef = useRef<{ x: number; y: number }[]>([]);
  const rafRef = useRef<number>(0);

  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    const section = sectionRef.current;
    if (!canvas || !section) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const rect = section.getBoundingClientRect();
    canvas.width = rect.width;
    canvas.height = rect.height;

    // Build grid on first paint when we have size
    if (dotsRef.current.length === 0 && rect.width > 0 && rect.height > 0) {
      const dots: { x: number; y: number }[] = [];
      for (let x = DOT_SPACING / 2; x < rect.width; x += DOT_SPACING) {
        for (let y = DOT_SPACING / 2; y < rect.height; y += DOT_SPACING) {
          dots.push({ x, y });
        }
      }
      dotsRef.current = dots;
    }

    const cursor = cursorRef.current;
    const dots = dotsRef.current;
    const [r, g, b] = getThemeRgb();

    const cx = cursor.x - rect.left;
    const cy = cursor.y - rect.top;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    dots.forEach((dot) => {
      const dx = cx - dot.x;
      const dy = cy - dot.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      // Magnet: pull dot toward cursor when within radius
      let drawX = dot.x;
      let drawY = dot.y;
      if (distance < MAGNET_RADIUS && distance > 0) {
        const pull = (1 - distance / MAGNET_RADIUS) * MAGNET_STRENGTH;
        const factor = pull / distance;
        drawX = dot.x + dx * factor;
        drawY = dot.y + dy * factor;
      }

      // Color: theme color with opacity based on cursor distance (closer = brighter)
      const colorFactor =
        distance < COLOR_RADIUS ? 1 - distance / COLOR_RADIUS : 0;
      const opacity = BASE_OPACITY + (MAX_OPACITY - BASE_OPACITY) * colorFactor;

      ctx.beginPath();
      ctx.arc(drawX, drawY, DOT_RADIUS, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${opacity})`;
      ctx.fill();
    });

    rafRef.current = requestAnimationFrame(draw);
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    const canvas = canvasRef.current;
    if (!section || !canvas) return;

    const buildGrid = () => {
      const rect = section.getBoundingClientRect();
      const dots: { x: number; y: number }[] = [];
      for (let x = DOT_SPACING / 2; x < rect.width; x += DOT_SPACING) {
        for (let y = DOT_SPACING / 2; y < rect.height; y += DOT_SPACING) {
          dots.push({ x, y });
        }
      }
      dotsRef.current = dots;
    };

    buildGrid();
    const resizeObserver = new ResizeObserver(buildGrid);
    resizeObserver.observe(section);

    const handleMove = (e: MouseEvent) => {
      cursorRef.current = { x: e.clientX, y: e.clientY };
    };
    const handleLeave = () => {
      cursorRef.current = { x: -1000, y: -1000 };
    };

    section.addEventListener("mousemove", handleMove);
    section.addEventListener("mouseleave", handleLeave);
    draw();

    return () => {
      resizeObserver.disconnect();
      section.removeEventListener("mousemove", handleMove);
      section.removeEventListener("mouseleave", handleLeave);
      cancelAnimationFrame(rafRef.current);
    };
  }, [draw]);

  return (
    <section
      ref={sectionRef}
      className="nt-relative nt-h-screen nt-flex nt-flex-col nt-items-center nt-justify-between nt-px-4 nt-py-20 nt-overflow-hidden"
    >
      {/* Canvas dot grid: magnet + theme color by cursor */}
      <canvas
        ref={canvasRef}
        className="nt-absolute nt-inset-0 nt-w-full nt-h-full nt-pointer-events-none"
        aria-hidden
      />

      {/* Content (above canvas) */}
      <div className="nt-relative nt-z-10 nt-flex nt-flex-col nt-items-center nt-mt-28 nt-max-w-8xl nt-mx-auto">
        {/* Open to Work badge */}
        <div className="nt-inline-flex nt-items-center nt-gap-2 nt-rounded-full nt-px-4 nt-py-2 nt-mb-8 nt-bg-green-500/15 nt-border nt-border-green-500/30">
          <span className="nt-w-2 nt-h-2 nt-rounded-full nt-bg-green-500 nt-shrink-0" />
          <span className="nt-text-small nt-font-medium nt-text-green-400">
            Open to Work
          </span>
        </div>

        {/* Headline */}
        <h1 className="nt-font-title nt-text-white nt-text-center nt-text-h1 md:nt-text-h1 nt-font-bold nt-leading-tight">
          Web & Brand Design
          <br />
          For Ambitious Founders
        </h1>

        {/* Description */}
        <p className="nt-text-grey-muted nt-text-base nt-text-center nt-mt-3">
          We build conversion-driven websites and marketing that attract,
          engage, and convert.
        </p>

        {/* CTAs */}
        <div className="nt-flex nt-flex-wrap nt-items-center nt-justify-center nt-gap-4 nt-mt-10">
          <Button
            label="Book A Call"
            href="/contact"
            variant="primary"
            showArrow
          />
          <Button label="View Projects" href="/portfolio" variant="secondary" />
        </div>
      </div>
      <div className="nt-container nt-mt-28">
        {/* Stats: Happy Customers + stat cards */}
        <div className="nt-w-full">
          {/* Stat cards */}
          <div className="nt-grid nt-grid-cols-2 md:nt-grid-cols-4 nt-gap-4">
            {[
              { value: "60+", label: "Projects completed" },
              { value: "16+", label: "Awards Received" },
              { value: "12+", label: "Years of experience" },
              { value: "34+", label: "Team members" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="nt-rounded-xl nt-border nt-border-white/10 nt-bg-white/5 nt-p-4 nt-text-center nt-flex nt-items-center nt-justify-center nt-flex-col nt-h-full"
              >
                <p className="nt-text-white nt-text-h3 nt-font-bold nt-tabular-nums nt-mb-1">
                  {stat.value}
                </p>
                <p className="nt-text-white/50 nt-text-small nt-mb-0">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <video
        src="/assets/video/hero-bg.mov"
        muted
        autoPlay
        loop
        className="nt-absolute nt-inset-0 nt-w-full nt-h-full nt-object-cover -nt-z-20 nt-opacity-5"
      ></video>
    </section>
  );
};

export default Hero;
