"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { ModuleTitle } from "../common/ModuleTitle";

const featuredServices = [
  {
    number: ".03",
    title: "UI Design",
    description:
      "The whole community is interested in growing the FOX prize. The company is planning.",
    slug: "ui-ux-design",
    image: "/assets/img/service/01.jpeg",
  },
  {
    number: ".04",
    title: "App Design",
    description:
      "The whole community is interested in growing the FOX prize. The company is planning.",
    slug: "mobile-app-design",
    image: "/assets/img/service/01.jpeg",
  },
  {
    number: ".02",
    title: "Marketing strategy",
    description:
      "The whole community is interested in growing the FOX prize. The company is planning.",
    slug: "marketing-strategy",
    image: "/assets/img/service/s1.jpeg",
  },
  {
    number: ".02",
    title: "Marketing strategy",
    description:
      "The whole community is interested in growing the FOX prize. The company is planning.",
    slug: "marketing-strategy",
    image: "/assets/img/service/web.webp",
  },
  {
    number: ".02",
    title: "Marketing strategy",
    description:
      "The whole community is interested in growing the FOX prize. The company is planning.",
    slug: "marketing-strategy",
    image: "/assets/img/service/dm-srv02.png",
  },
];

export default function Services() {
  return (
    <section className="nt-space">
      <div className="nt-container">
        <ModuleTitle
          suppertitle="What we do"
          title="Our Services"
          subtitle="We help brands stand out with design and strategy that converts."
          variant="v2"
          colorVariant="light"
        />
      </div>

      {/* Slider – autoplay only; sm: 1, md: 2, lg: 4 slides */}
      <div className="nt-bg-[url('/assets/img/service/srv-bg.jpg')] nt-bg-cover nt-bg-center">
        <Swiper
          modules={[Autoplay]}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          loop
          speed={600}
          allowTouchMove
          spaceBetween={0}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="nt-h-screen"
        >
          {featuredServices.map((service) => (
            <SwiperSlide key={service.slug}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="nt-group nt-relative nt-h-full nt-bg-black/70 nt-flex nt-flex-col nt-items-center nt-justify-between nt-px-6 nt-py-10 md:nt-px-8 md:nt-py-12 nt-overflow-hidden nt-transition-colors nt-duration-300 nt-border-0 nt-border-r-2 nt-border-r-white/20 nt-border-solid"
              >
                {/* Hover: green gradient at bottom */}
                <div
                  className="nt-absolute nt-inset-x-0 nt-bottom-0 nt-h-1/2 nt-bg-gradient-to-t nt-from-theme nt-to-black/0 nt-opacity-0 nt-transition-opacity nt-duration-300 group-hover:nt-opacity-100 nt-pointer-events-none"
                  aria-hidden
                />

                {/* Text block – top-left */}
                <div className="nt-relative nt-z-10 nt-w-full nt-max-w-2xl nt-mx-auto">
                  <span className="nt-block nt-text-h3 nt-text-title/60">
                    {service.number}
                  </span>
                  <h2 className="nt-text-white">{service.title}</h2>
                  <p className="nt-text-white/80 nt-mt-4">
                    {service.description}
                  </p>
                </div>

                {/* Central graphic */}
                <div className="nt-relative nt-z-10 nt-w-full nt-max-w-full nt-p-4 nt-rounded-lg nt-bg-transparent nt-transition-all nt-duration-300">
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={340}
                    height={340}
                    className="nt-grayscale nt-transition-all nt-duration-300 group-hover:nt-grayscale-0 group-hover:nt-scale-[1.03] nt-w-full nt-h-auto"
                  />
                </div>

                {/* Learn More – bottom-left */}
                <div className="nt-relative nt-z-10 nt-w-full nt-max-w-2xl nt-mx-auto">
                  <Link
                    href={`/services#${service.slug}`}
                    className="nt-inline-flex nt-items-center nt-gap-3 nt-w-full nt-group/btn"
                  >
                    <span className="nt-text-white nt-font-medium">
                      Learn More
                    </span>
                    <span className="nt-flex nt-items-center nt-justify-center nt-w-10 nt-h-10 nt-rounded-full nt-border-2 nt-border-white nt-text-white nt-transition-all nt-duration-300 group-hover:nt-border-grey-dark group-hover:nt-bg-white group-hover:nt-text-body">
                      <FiArrowUpRight className="nt-w-5 nt-h-5" />
                    </span>
                  </Link>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
