import { useIsotop } from "@/hooks/use-isotop";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { UpArrow } from "../svg";

const FILTERS = [
  { id: "*", label: "ALL" },
  { id: ".cat1", label: "Social Media" },
  { id: ".cat2", label: "Branding" },
  { id: ".cat3", label: "WebSite" },
  { id: ".cat4", label: "Video" },
  { id: ".cat5", label: "Printing" },
] as const;

// data
const portfolio_data = [
  {
    id: 1,
    img: "/assets/img/portfolio/masturd-oil-design.webp",
    category: "Shooting",
    title: "Roadtrip",
    year: "2024",
    show: "cat2 cat4 cat3",
  },
  {
    id: 2,
    img: "/assets/img/portfolio/masturd-oil-design.webp",
    category: "Studio",
    title: "Fashion",
    year: "2023",
    show: "cat3 cat1 cat3",
  },
  {
    id: 3,
    img: "/assets/img/portfolio/masturd-oil-design.webp",
    category: "Agency",
    title: "Tesla",
    year: "2022",
    show: "cat4 cat4 cat2 cat3",
  },
  {
    id: 4,
    img: "/assets/img/portfolio/masturd-oil-design.webp",
    category: "Studio",
    title: "Cosmetic",
    year: "2024",
    show: "cat1 cat4 cat3",
  },
  {
    id: 5,
    img: "/assets/img/portfolio/masturd-oil-design.webp",
    category: "Visual",
    title: "Porsche",
    year: "2024",
    show: "cat4 cat1 cat2",
  },
  {
    id: 6,
    img: "/assets/img/portfolio/masturd-oil-design.webp",
    category: "Agency",
    title: "Fiedunit",
    year: "2024",
    show: "cat1 cat2 cat3 cat4",
  },
];

export default function PortfolioGrid() {
  const { initIsotop, isotopContainer } = useIsotop();
  const [activeFilter, setActiveFilter] = useState<string>("*");

  useEffect(() => {
    initIsotop();
  }, [initIsotop]);

  return (
    <div className="nt-py-24 nt-pb-[60px]">
      <div className="nt-container">
        <div className="nt-flex nt-justify-between nt-items-center nt-mb-16">
          <h2 className="nt-text-h2 nt-text-white nt-mb-0">Our Projects</h2>
          {/* Keep Isotope's .masonary-menu hook so filters work; container and active pill use explicit bg */}
          <div className="masonary-menu nt-inline-flex nt-rounded-xl nt-p-1 nt-border nt-border-white/20 nt-bg-white/[0.12]">
            {FILTERS.map((filter) => {
              const isActive = activeFilter === filter.id;
              return (
                <button
                  key={filter.id}
                  type="button"
                  data-filter={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`nt-px-5 nt-py-2.5 nt-rounded-lg nt-text-small nt-font-medium nt-transition-all nt-duration-200 ${
                    isActive
                      ? "nt-bg-white nt-text-body nt-shadow-sm active"
                      : "nt-bg-transparent nt-text-white/70 hover:nt-text-white"
                  }`}
                >
                  <span>{filter.label}</span>
                </button>
              );
            })}
          </div>
        </div>
        <div className="nt-grid nt-grid-cols-1 md:nt-grid-cols-2 nt-gap-8">
          {portfolio_data.map((item) => (
            <div key={item.id} className={`grid-item ${item.show}`}>
              <div
                className="tp-project-5-2-thumb anim-zoomin-wrap not-hide-cursor nt-relative nt-w-full nt-h-[660px]"
                data-cursor="View<br>Demo"
              >
                <Link
                  href="/portfolio/portfolio-details"
                  className="cursor-hide"
                >
                  <Image
                    src={item.img}
                    alt="port-img"
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="anim-zoomin nt-object-cover"
                  />
                  <div className="tp-project-5-2-category tp_fade_anim nt-absolute nt-left-4 nt-top-4 nt-text-white nt-text-small nt-font-medium">
                    <span>{item.category}</span>
                  </div>
                  <div className="tp-project-5-2-content tp_fade_anim nt-absolute nt-bottom-4 nt-left-4 nt-right-4">
                    <span className="nt-text-white/70 nt-text-small">
                      {item.year}
                    </span>
                    <h4 className="nt-text-white nt-font-title nt-text-h5 nt-mt-1">
                      {item.title}
                    </h4>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="row">
          <div className="col-xl-12">
            <div className="tp-projct-5-2-btn-box mt-50 d-flex justify-content-center">
              <div className="tp-hover-btn-wrapper">
                <Link
                  className="tp-btn-circle style-2 tp-hover-btn-item tp-hover-btn"
                  href="/portfolio-grid-col-4-fullwidth"
                >
                  <span className="tp-btn-circle-text">
                    More <br /> Projects
                  </span>
                  <span className="tp-btn-circle-icon">
                    <UpArrow />
                  </span>
                  <i className="tp-btn-circle-dot"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
