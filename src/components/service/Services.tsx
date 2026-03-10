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
    number: ".01",
    title: "Social Media Marketing",
    description:
      "Stop shouting into the void. We help you build a community that actually listens, engages, and stays for the long haul.",
    slug: "#",
    image: "/assets/img/service/social-media.webp",
  },
  {
    number: ".02",
    title: "Branding & Identity",
    description:
      "A brand is more than a logo—it’s a feeling. We find your unique voice and turn it into a visual story that people won't forget.",
    slug: "#",
    image: "/assets/img/service/branding.webp",
  },
  {
    number: ".03",
    title: "Web Design & Dev.",
    description:
      "Your website is your hardest-working employee. We build fast, beautiful digital spaces that welcome guests and close the deal.",
    slug: "#",
    image: "/assets/img/service/website.webp",
  },
  {
    number: ".04",
    title: "Video Production",
    description:
      "Capture attention in a world that’s always moving. We tell stories through video that spark emotion and drive real action.",
    slug: "#",
    image: "/assets/img/service/video.webp",
  },
  {
    number: ".05",
    title: "Print & Graphic",
    description:
      "There’s still magic in the physical. We create tangible brand experiences—from cards to banners—that people want to hold onto.",
    slug: "#",
    image: "/assets/img/service/printing.webp",
  },
];

export default function Services() {
  return (
    <section className="nt-space">
      <div className="nt-container">
        <ModuleTitle
          suppertitle="Our Expertise"
          title="Creative solutions for bold brands"
          subtitle="We don't just make things look pretty; we build systems that grow your business and connect with your people."
          variant="v2"
          colorVariant="light"
        />
      </div>

      {/* Slider – bg image + black/20 overlay */}
      <div className="nt-relative">
        <div
          className="nt-absolute nt-inset-0 nt-bg-[url('/assets/img/service/srv-bg.jpg')] nt-bg-cover nt-bg-center"
          aria-hidden
        />
        <div
          className="nt-absolute nt-inset-0 nt-bg-black/50 nt-pointer-events-none"
          aria-hidden
        />
        <Swiper
          className="nt-relative nt-z-10 nt-h-screen"
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
                  <span className="nt-block nt-text-h3 nt-text-title/50">
                    {service.number}
                  </span>
                  <h2 className="nt-text-theme nt-mt-5">{service.title}</h2>
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
                    className=" nt-transition-all nt-duration-300  group-hover:nt-scale-[1.03] nt-w-full nt-h-auto"
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
