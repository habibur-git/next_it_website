"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  RiGlobalLine,
  RiShieldCheckLine,
  RiSparkling2Line,
} from "react-icons/ri";
import Button from "../ui/button";

export default function AboutUs() {
  return (
    <section className="nt-py-24 nt-bg-black">
      <div className="nt-container nt-px-6 nt-mx-auto">
        <div className="nt-grid nt-grid-cols-1 md:nt-grid-cols-12 nt-gap-6 nt-h-auto nt-min-h-[600px]">
          {/* THE FOUNDER CARD */}
          <motion.div
            className="nt-col-span-1 md:nt-col-span-5 nt-relative nt-rounded-[2.5rem] nt-overflow-hidden nt-bg-[#111] nt-border nt-border-white/5 nt-group nt-shadow-2xl"
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <video
              src="/assets/video/hero.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="nt-absolute nt-inset-0 nt-w-full nt-h-full nt-object-cover nt-z-[1] nt-grayscale group-hover:nt-grayscale-0 nt-transition-all nt-duration-1000 group-hover:nt-scale-105"
            />
          </motion.div>

          {/* THE "WHY" CARD */}
          <motion.div
            className="nt-col-span-1 md:nt-col-span-7 nt-p-10 md:nt-p-16 nt-bg-white/5 nt-rounded-[2.5rem] nt-border nt-border-white/5 nt-flex nt-flex-col nt-justify-center nt-relative nt-overflow-hidden nt-backdrop-blur-3xl"
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <h3 className="nt-text-h3 nt-text-white nt-mb-8">About Us</h3>
            <p className="nt-text-xl md:nt-text-2xl nt-text-white/90 nt-leading-relaxed nt-max-w-4xl nt-mb-16">
              NextIT is a{" "}
              <strong className="nt-text-theme nt-font-medium">
                Dhaka-based growth partner
              </strong>{" "}
              for the{" "}
              <strong className="nt-text-theme nt-font-medium">
                digital age
              </strong>
              . We fuse{" "}
              <strong className="nt-text-theme nt-font-medium">
                data-driven strategy
              </strong>{" "}
              with{" "}
              <strong className="nt-text-theme nt-font-medium">
                creative excellence
              </strong>{" "}
              to{" "}
              <strong className="nt-text-theme nt-font-medium">
                bridge the gap
              </strong>{" "}
              between your brand and your audience—turning complex challenges
              into{" "}
              <strong className="nt-text-theme nt-font-medium">
                measurable success
              </strong>
              .
            </p>
            <div>
              <Button label="About Us" href="/about-us" variant="primary" />
            </div>

            <div className="nt-mt-12 nt-flex nt-flex-wrap nt-gap-4">
              <div className="nt-flex nt-items-center nt-gap-3 nt-px-5 nt-py-2.5 nt-bg-white/5 nt-rounded-full nt-border nt-border-white/10 nt-text-xs nt-font-medium nt-text-white/70 hover:nt-bg-white/10 nt-transition-colors">
                <RiShieldCheckLine className="nt-w-4 nt-h-4 nt-text-theme nt-shrink-0" />
                Data-Driven Strategy
              </div>

              <div className="nt-flex nt-items-center nt-gap-3 nt-px-5 nt-py-2.5 nt-bg-white/5 nt-rounded-full nt-border nt-border-white/10 nt-text-xs nt-font-medium nt-text-white/70 hover:nt-bg-white/10 nt-transition-colors">
                <RiGlobalLine className="nt-w-4 nt-h-4 nt-text-theme nt-shrink-0" />
                Creative Excellence
              </div>

              <div className="nt-flex nt-items-center nt-gap-3 nt-px-5 nt-py-2.5 nt-bg-white/5 nt-rounded-full nt-border nt-border-white/10 nt-text-xs nt-font-medium nt-text-white/70 hover:nt-bg-white/10 nt-transition-colors">
                <RiSparkling2Line className="nt-w-4 nt-h-4 nt-text-theme nt-shrink-0" />
                Measurable Success
              </div>
            </div>
            <Image
              src="/assets/img/logo/favi-logo.png"
              alt="About Us"
              width={200}
              height={200}
              className="nt-absolute nt-bottom-0 -nt-right-8 -nt-z-10 nt-w-[320px] nt-h-[320px] nt-object-contain nt-opacity-10"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
