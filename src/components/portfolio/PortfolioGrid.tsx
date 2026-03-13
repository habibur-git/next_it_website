"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { UpArrow } from "../svg";

const cardVariants = {
  rest: {},
  hover: {},
};

const overlayVariants = {
  rest: { y: "100%" },
  hover: { y: 0 },
};

const imageVariants = {
  rest: { scale: 1 },
  hover: { scale: 1.05 },
};

// data
const portfolio_data = [
  {
    id: 1,
    img: "/assets/img/portfolio/P-1-.webp",
    category: "Shooting",
    title: "Roadtrip",
    year: "2024",
  },
  {
    id: 2,
    img: "/assets/img/portfolio/P-2.webp",
    category: "Studio",
    title: "Fashion",
    year: "2023",
  },
  {
    id: 3,
    img: "/assets/img/portfolio/p-4.webp",
    category: "Agency",
    title: "Tesla",
    year: "2022",
  },
  {
    id: 4,
    img: "/assets/img/portfolio/p-5-3.webp",
    category: "Studio",
    title: "Cosmetic",
    year: "2024",
  },
  {
    id: 5,
    img: "/assets/img/portfolio/uyq -7.webp",
    category: "Visual",
    title: "Porsche",
    year: "2024",
  },
  {
    id: 6,
    img: "/assets/img/portfolio/masturd-oil-design.webp",
    category: "Agency",
    title: "Fiedunit",
    year: "2024",
  },
];

// get unique categories
const categories = [
  "ALL",
  ...Array.from(new Set(portfolio_data.map((item) => item.category))),
];

export default function PortfolioGrid() {
  const [activeFilter, setActiveFilter] = useState<string>("ALL");

  // filtering
  const filteredProjects =
    activeFilter === "ALL"
      ? portfolio_data
      : portfolio_data.filter((item) => item.category === activeFilter);

  return (
    <div className="nt-space">
      <div className="nt-container">
        {/* Header */}
        <div className="nt-grid nt-grid-cols-1 lg:nt-grid-cols-12 nt-gap-10 nt-items-end nt-w-full nt-mb-16">
          <div className="nt-col-span-5">
            <h2 className="nt-text-h2 nt-text-white">Our Projects</h2>
          </div>

          {/* Filters */}
          <div className="nt-col-span-7 nt-flex nt-justify-end">
            <div className="nt-inline-flex nt-rounded-xl nt-bg-white/5 nt-p-1 nt-border nt-border-white/10">
              {categories.map((cat) => {
                const isActive = activeFilter === cat;

                return (
                  <button
                    key={cat}
                    onClick={() => setActiveFilter(cat)}
                    className={`nt-px-5 nt-py-2.5 nt-rounded-lg nt-text-small nt-font-medium nt-transition-all ${
                      isActive
                        ? "nt-bg-white nt-text-body nt-shadow-sm"
                        : "nt-text-white/70 hover:nt-text-white"
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Grid */}
        <div className="nt-grid nt-grid-cols-1 md:nt-grid-cols-2 nt-gap-8">
          {filteredProjects.map((item) => (
            <motion.div
              key={item.id}
              className="nt-relative nt-w-full nt-h-[500px] lg:nt-h-[660px] nt-overflow-hidden"
              variants={cardVariants}
              initial="rest"
              whileHover="hover"
            >
              <Link
                href="/portfolio/portfolio-details"
                className="nt-block nt-w-full nt-h-full nt-relative"
              >
                <motion.div
                  className="nt-absolute nt-inset-0 nt-w-full nt-h-full nt-overflow-hidden"
                  variants={imageVariants}
                  transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                  <Image
                    src={item.img}
                    alt={item.title}
                    width={800}
                    height={660}
                    className="nt-w-full nt-h-full nt-object-cover"
                  />
                </motion.div>

                {/* Hover overlay: slides up from bottom -100% to 0 */}
                <motion.div
                  className="nt-absolute nt-inset-0 nt-w-full nt-h-full nt-bg-gradient-to-t nt-from-black/90 nt-via-black/40 nt-to-transparent nt-flex nt-items-end nt-justify-start nt-p-6 nt-z-10"
                  variants={overlayVariants}
                  transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                  <div className="nt-space-y-1">
                    <h4 className="nt-text-white nt-text-xl nt-font-semibold">
                      {item.title}
                    </h4>
                    <span className="nt-text-white/80 nt-text-sm">
                      {item.category} · {item.year}
                    </span>
                  </div>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Button */}
        <div className="nt-mt-16 nt-flex nt-justify-center">
          <Link
            className="tp-btn-circle style-2"
            href="/portfolio-grid-col-4-fullwidth"
          >
            <span className="tp-btn-circle-text">
              More <br /> Projects
            </span>

            <span className="tp-btn-circle-icon">
              <UpArrow />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
