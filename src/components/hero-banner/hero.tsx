"use client";

import Button from "@/components/ui/button";
import { useCallback, useEffect, useRef, useState } from "react";

const DOT_SPACING = 24;
const DOT_RADIUS = 1;
const MAGNET_RADIUS = 154;
const MAGNET_STRENGTH = 14;
const COLOR_RADIUS = 180;
const BASE_OPACITY = 0;
const MAX_OPACITY = 0.5;

const STATS = [
  { value: 120, suffix: "+", label: "Project Complete" },
  { value: 60, suffix: "+", label: "Happy Clients" },
  { value: 5, suffix: "+", label: "Years of experience" },
  { value: 15, suffix: "+", label: "Team members" },
] as const;

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
  const [statCounts, setStatCounts] = useState<number[]>(() =>
    STATS.map(() => 0),
  );

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

  // Animate stats from 0 to their target values
  useEffect(() => {
    let frameId: number;
    const duration = 1500; // ms
    const start = performance.now();

    const animate = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      setStatCounts(STATS.map((stat) => Math.round(stat.value * progress)));
      if (progress < 1) {
        frameId = requestAnimationFrame(animate);
      }
    };

    frameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(frameId);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="nt-relative nt-h-full lg:nt-h-screen nt-flex nt-flex-col nt-items-center nt-justify-between nt-px-4 nt-py-20 nt-pb-16 nt-overflow-hidden"
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
        <div className="nt-inline-flex nt-items-center nt-gap-2 nt-rounded-full nt-px-4 nt-py-2 nt-mb-5 nt-bg-green-500/15 nt-border nt-border-green-500/30">
          <span className="nt-w-2 nt-h-2 nt-rounded-full nt-bg-green-500 nt-shrink-0" />
          <span className="nt-text-small nt-font-medium nt-text-green-400">
            Open to Work
          </span>
        </div>

        {/* Headline */}
        <h1 className="nt-font-title nt-text-white nt-text-center nt-leading-tight nt-font-semibold nt-text-[40px] md:nt-text-h2 lg:nt-text-h1">
          Building{" "}
          <span className="nt-text-theme nt-text-[40px] md:nt-text-h2 lg:nt-text-h1 nt-font-semibold">
            Powerful
          </span>{" "}
          Brands
          <br />
          for Global Business{" "}
          <span className="nt-text-theme nt-text-[40px] md:nt-text-h2 lg:nt-text-h1 nt-font-semibold">
            Growth
          </span>
        </h1>

        {/* Description */}
        <p className="nt-text-white/70 nt-text-base nt-text-center nt-mt-3">
          Providing expert branding, digital marketing, website development, and
          creative design solutions to help businesses grow worldwide.
        </p>

        {/* CTAs */}
        <div className="nt-flex nt-flex-wrap nt-items-center nt-justify-center nt-gap-4 nt-mt-8">
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
            {STATS.map((stat, index) => (
              <div
                key={stat.label}
                className="nt-rounded-xl nt-border w-max nt-text-center nt-flex nt-items-center nt-justify-center nt-flex-col"
              >
                <p className="nt-text-white nt-text-h3 nt-font-bold nt-tabular-nums nt-mb-1">
                  {statCounts[index]}
                  {stat.suffix}
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
