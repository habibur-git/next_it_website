"use client";

import { IPortfolio } from "@/types/custom-d-t";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import useSWR from "swr";
import { UpArrow } from "../svg";

type PortfolioGridProps = {
  variant?: "one" | "two";
};

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

export default function PortfolioGrid({ variant = "one" }: PortfolioGridProps) {
  const { data: portfolio = [], isLoading } = useSWR<IPortfolio[]>(
    `/api/portfolio`,
    {
      fallbackData: [],
    },
  );

  const [activeFilter, setActiveFilter] = useState<string>("ALL");
  const isVariantTwo = variant === "two";
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [showFloatingFilters, setShowFloatingFilters] = useState(false);

  // filtering
  const filteredProjects =
    activeFilter === "ALL"
      ? portfolio
      : portfolio.filter((item) => item.category === activeFilter);

  // get unique categories
  const portfolioCategories = [
    "ALL",
    ...Array.from(new Set(portfolio.map((item) => item.category))),
  ];

  useEffect(() => {
    if (!isVariantTwo) return;

    const handleVisibility = () => {
      const section = sectionRef.current;
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      // Show only in the middle "active" window of this section.
      // Hide a bit earlier near section end so it doesn't overlap footer/next sections.
      const isInView =
        rect.top < viewportHeight - 120 && rect.bottom > viewportHeight + 120;
      setShowFloatingFilters(isInView);
    };

    handleVisibility();
    window.addEventListener("scroll", handleVisibility, { passive: true });
    window.addEventListener("resize", handleVisibility);
    return () => {
      window.removeEventListener("scroll", handleVisibility);
      window.removeEventListener("resize", handleVisibility);
    };
  }, [isVariantTwo]);

  if (isLoading) {
    return "loading...";
  }

  return (
    <div
      ref={sectionRef}
      className={`nt-space nt-position ${isVariantTwo ? "nt-pb-24" : ""}`}
    >
      <div className="nt-container">
        {/* Header */}
        <div
          className={`nt-grid nt-grid-cols-1 lg:nt-grid-cols-12 nt-gap-10 nt-items-end nt-w-full nt-relative ${
            isVariantTwo ? "nt-mb-0" : "nt-mb-16"
          }`}
        >
          {!isVariantTwo && (
            <div className="nt-col-span-5">
              <h2 className="nt-text-h2 nt-text-white">Our Projects</h2>
            </div>
          )}

          {/* Filters */}
          {!isVariantTwo && (
            <div className="nt-col-span-7 nt-flex nt-justify-end">
              <div className="nt-inline-flex nt-rounded-xl nt-bg-white/5 nt-p-1 nt-border nt-border-white/10">
                {portfolioCategories?.map((cat) => {
                  const isActive = activeFilter === cat;

                  return (
                    <button
                      key={cat}
                      onClick={() => setActiveFilter(cat)}
                      className={`nt-px-5 nt-py-2.5 nt-rounded-lg nt-text-small nt-font-medium nt-transition-all nt-whitespace-nowrap ${
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
          )}
        </div>

        {/* Sticky Filters (variant two) */}
        {isVariantTwo && showFloatingFilters && (
          <div className="nt-fixed nt-bottom-6 nt-left-1/2 -nt-translate-x-1/2 nt-z-40 nt-flex nt-justify-center nt-px-3">
            <div
              className="nt-inline-flex nt-max-w-full nt-gap-1 nt-flex-wrap sm:nt-flex-nowrap nt-justify-center nt-rounded-xl nt-bg-black/70 nt-backdrop-blur-md nt-p-1.5 nt-border nt-border-white/15"
            >
              {portfolioCategories?.map((cat) => {
                const isActive = activeFilter === cat;

                return (
                  <button
                    key={cat}
                    onClick={() => setActiveFilter(cat)}
                    className={`nt-px-5 nt-py-2.5 nt-rounded-lg nt-text-small nt-font-medium nt-transition-all nt-whitespace-nowrap ${
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
        )}

        {/* Grid */}
        <div className="nt-grid nt-grid-cols-1 md:nt-grid-cols-2 nt-gap-8">
          {filteredProjects?.map((item) => (
            <motion.div
              key={item._id}
              className="nt-relative nt-w-full nt-h-[500px] lg:nt-h-[660px] nt-overflow-hidden"
              variants={cardVariants}
              initial="rest"
              whileHover="hover"
            >
              <Link
                href={`/portfolio/portfolio-details/${item.slug}`}
                className="nt-block nt-w-full nt-h-full nt-relative"
              >
                <motion.div
                  className="nt-absolute nt-inset-0 nt-w-full nt-h-full nt-overflow-hidden"
                  variants={imageVariants}
                  transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                  <Image
                    src={item.bannerImage}
                    alt={item.title}
                    width={800}
                    height={660}
                    className="nt-aspect-square nt-w-full nt-h-full nt-object-cover"
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
                      {item.category} ·{" "}
                      {new Date(
                        item?.projectDate || new Date(),
                      ).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </span>
                  </div>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Button */}
        {!isVariantTwo && (
          <div className="nt-mt-16 nt-flex nt-justify-center">
            <Link
              className="nt-inline-flex nt-w-[140px] nt-h-[140px] nt-shrink-0 nt-rounded-full nt-items-center nt-justify-center nt-bg-transparent nt-text-black nt-ring-1 nt-ring-inset nt-ring-white/60  hover:nt-ring-theme nt-group"
              href="/portfolio"
            >
              <span className="nt-text-white/60 group-hover:nt-text-theme">
                More <br /> Projects
              </span>

              <span className="nt-text-white/60 nt-w-4 nt-h-4 nt-ml-3 nt-mt-3 group-hover:nt-text-theme">
                <UpArrow />
              </span>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
