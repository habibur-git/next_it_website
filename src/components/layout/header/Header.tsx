"use client";

import Button from "@/components/ui/button";
import { menuItems, type MenuItem } from "@/data/menu";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import { RiCloseLine, RiMenuLine } from "react-icons/ri";
import MobileNav from "./comp/MobileNav";
import Submenu from "./comp/Submenu";

type HeaderProps = {
  variant?: "auto" | "white";
};

export default function Header({ variant = "auto" }: HeaderProps) {
  const pathname = usePathname();

  const [openDropdown, setOpenDropdown] = useState<number | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  const lastScrollY = useRef(0);

  const useWhiteVariant = variant === "white";

  const textColorClass = isScrolled
    ? "nt-text-desc"
    : useWhiteVariant
      ? "nt-text-white"
      : "nt-text-title/70";

  const activeClass =
    useWhiteVariant && !isScrolled
      ? "nt-text-white nt-font-semibold"
      : "nt-text-theme nt-font-semibold";

  /* Scroll Detection + Direction */
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Detect scroll direction
      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setIsVisible(false); // scrolling down
      } else {
        setIsVisible(true); // scrolling up
      }

      // Sticky style trigger
      setIsScrolled(currentScrollY > 4);

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* Lock scroll when mobile menu open */
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  return (
    <header className="nt-fixed nt-top-0 nt-z-50 nt-w-full nt-h-20">
      <div className="nt-h-full nt-px-4 nt-flex nt-items-center nt-justify-center">
        <motion.div
          animate={{
            y: isVisible ? 0 : -120,
            maxWidth: isScrolled ? 1000 : 1400,
            backgroundColor: isScrolled ? "#151515" : "transparent",
            borderRadius: isScrolled ? 50 : 0,
            border: isScrolled ? "1px solid rgba(0,0,0,0.1)" : "none",
          }}
          transition={{
            y: { type: "spring", stiffness: 300, damping: 30 },
            type: "spring",
            stiffness: 180,
            damping: 25,
          }}
          className="nt-w-full nt-h-16 nt-flex nt-items-center nt-justify-between nt-px-1.5"
        >
          {/* Logo: 2 images – full when not scrolled, icon when scrolled */}
          <Link href="/" className="nt-flex nt-items-center ml-8">
            {!isScrolled ? (
              <Image
                src="/assets/img/logo/logo.svg"
                width={140}
                height={60}
                alt="NextIT Logo"
                priority
                className={useWhiteVariant ? "nt-brightness-0 nt-invert" : ""}
              />
            ) : (
              <Image
                src="/assets/img/logo/logo.svg"
                width={85}
                height={60}
                alt="NextIT"
                priority
              />
            )}
          </Link>

          {/* Desktop Menu */}
          <ul className="nt-hidden lg:nt-flex nt-items-center nt-gap-8 nt-h-full">
            {menuItems.map((item: MenuItem) => {
              const isActive = item.link && pathname === item.link;

              return (
                <li
                  key={item.id}
                  className="nt-relative nt-flex nt-items-center nt-h-full nt-text-white nt-text-base"
                  onMouseEnter={() =>
                    item.subMenuItems && setOpenDropdown(item.id)
                  }
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  {item.subMenuItems ? (
                    <>
                      <Link
                        href={item.link || "#"}
                        className={`nt-group nt-flex nt-items-center nt-gap-1 nt-font-title nt-font-medium nt-transition-transform nt-duration-300 hover:nt-scale-105 ${
                          isActive ? activeClass : textColorClass
                        }`}
                      >
                        {item.title}
                        <BiChevronDown className="nt-h-4 nt-w-4 nt-transition-transform nt-duration-300 group-hover:nt-rotate-180" />
                      </Link>

                      <Submenu
                        subMenuItems={item.subMenuItems}
                        isOpen={openDropdown === item.id}
                      />
                    </>
                  ) : (
                    <Link
                      href={item.link || "#"}
                      className={`nt-font-title nt-font-medium nt-transition-transform nt-duration-300 hover:nt-scale-105 ${
                        isActive ? activeClass : textColorClass
                      }`}
                    >
                      {item.title}
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>

          {/* CTA + Mobile Toggle */}
          <div className="nt-flex nt-items-center nt-gap-2">
            <div className="nt-hidden sm:nt-block">
              <Button
                label="Let's talk"
                href="/contact"
                variant={
                  useWhiteVariant && !isScrolled ? "secondary" : "primary"
                }
              />
            </div>

            <button
              className="lg:nt-hidden nt-w-12 nt-h-12 nt-flex nt-items-center nt-justify-center nt-rounded-full nt-bg-theme nt-text-white"
              onClick={() => setIsMobileMenuOpen((p) => !p)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <RiCloseLine className="nt-w-[22px] nt-h-[22px]" />
              ) : (
                <RiMenuLine className="nt-w-[22px] nt-h-[22px]" />
              )}
            </button>
          </div>
        </motion.div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <MobileNav onClose={() => setIsMobileMenuOpen(false)} />
      )}
    </header>
  );
}
