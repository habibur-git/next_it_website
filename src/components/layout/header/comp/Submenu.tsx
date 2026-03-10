"use client";

import Button from "@/components/ui/button";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import { GoDotFill } from "react-icons/go";
import { GrSend } from "react-icons/gr";

export interface SubMenuItem {
  label: string;
}

interface SubmenuProps {
  subMenuItems: SubMenuItem[];
  isOpen: boolean;
}

const serviceSections = [
  { title: "Services", items: [{ slug: "social-media", title: "Social Media Design" }, { slug: "website", title: "Website Development" }, { slug: "ecommerce", title: "E-Commerce" }, { slug: "branding", title: "Branding" }] },
];

export default function Submenu({ isOpen }: SubmenuProps) {
  if (!isOpen) return null;

  const data = serviceSections;

  // Service categories matching Services.tsx structure with proper links
  const email = "contact@devionex.com";

  return (
    <div className="nt-fixed nt-top-[75px] nt-inset-x-0 nt-mx-auto nt-bg-bg/50 nt-backdrop-blur-lg nt-rounded-4xl nt-shadow-2xl nt-z-50 nt-p-2 nt-w-[70vw]">
      <motion.div
        className="nt-grid nt-grid-cols-1 md:nt-grid-cols-2 lg:nt-grid-cols-3 nt-gap-2"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }} // repeatable
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        {/* SERVICE COLUMNS */}
        {data.map((section, i) => (
          <motion.div
            key={i}
            className="nt-bg-white nt-rounded-3xl nt-p-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{
              duration: 0.5,
              delay: i * 0.2,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            <h6 className="nt-mb-5 nt-text-title nt-text-[20px] nt-px-2">
              {section.title}
            </h6>
            <div className="nt-flex nt-flex-col">
              {section.items.map((item, idx) => (
                <motion.div
                  className="nt-border-t nt-border-border hover:nt-border-transparent"
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false }}
                  transition={{
                    duration: 0.4,
                    delay: idx * 0.1,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                >
                  <Link
                    href={`/services/${item.slug}`}
                    className="nt-flex nt-items-center nt-justify-between nt-py-5 nt-px-3 hover:nt-bg-black/5 nt-rounded-2xl"
                  >
                    <p className="nt-text-title nt-font-title nt-text-[17px]">
                      {item.title}
                    </p>
                    <FiArrowUpRight className="nt-text-desc/50 nt-text-[22px]" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}

        {/* CALL CARD */}
        <motion.div
          className="nt-rounded-3xl nt-p-1 nt-flex nt-flex-col nt-justify-between nt-relative nt-bg-[url(/assets/img/bg/herobg1.avif)] nt-bg-no-repeat nt-bg-center nt-object-contain nt-border-4 nt-border-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{
            duration: 0.6,
            delay: 0.4,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        >
          <>
            <div className="nt-flex nt-items-center nt-justify-between nt-p-5">
              <Image
                src="/assets/img/team/Founder.webp"
                alt="Profile"
                width={300}
                height={300}
                className="nt-w-14 nt-h-14 nt-rounded-full nt-object-cover nt-border nt-border-secondary"
              />

              <p className="nt-text-theme nt-text-small nt-font-medium nt-flex nt-items-center nt-gap-2 nt-mb-0">
                <GoDotFill />
                Available For Call Now
              </p>
            </div>
            <div className="nt-p-5 nt-py-2">
              <p className="nt-text-desc nt-text-base">
                <b className="nt-text-h6 nt-text-title">Schedule a call</b> & Let’s
                connect and see how we can bring your vision to life.
              </p>
              <Button
                label="Schedule a Meeting"
                href="#"
                variant="primary"
                className="nt-w-full nt-mt-6"
              />
            </div>
          </>

          <button className="nt-flex nt-items-center nt-justify-between nt-gap-3 nt-bg-white nt-p-4 nt-rounded-2xl nt-mt-4 nt-cursor-pointer">
            <div className="nt-flex nt-flex-col nt-gap-2">
              <span className="nt-text-sm nt-text-left">Do you prefer email?</span>
              <Link href="mailto:contact@devionex.com">
                <h6 className="nt-text-title nt-mb-0">{email}</h6>
              </Link>
            </div>

            <Link
              href="mailto:contact@devionex.com"
              className="nt-w-12 nt-h-12 nt-bg-bg nt-rounded-full nt-flex nt-items-center nt-justify-center nt-text-xl nt-text-theme"
            >
              <GrSend />
            </Link>
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
}
