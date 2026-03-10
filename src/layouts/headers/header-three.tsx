"use client";

import logo from "@/assets/img/logo/logo.svg";
import MobileOffcanvas from "@/components/offcanvas/mobile-offcanvas";
import Button from "@/components/ui/button";
import useStickyHeader from "@/hooks/use-sticky-header";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import HeaderMenus from "./header-menus";

export default function HeaderThree() {
  const { isSticky, headerFullWidth } = useStickyHeader(20);
  const [openOffCanvas, setOpenOffCanvas] = React.useState(false);
  useEffect(() => {
    headerFullWidth();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <header className="nt-w-full nt-h-16 nt-flex nt-items-center">
        <div
          id="header-sticky"
          className={`nt-w-full nt-px-4 nt-py-3 nt-transition-all nt-duration-200 nt-z-50 ${
            isSticky ? "nt-fixed nt-top-0 nt-left-0 nt-right-0 nt-bg-bg/95 nt-backdrop-blur-md nt-border-b nt-border-white/10" : ""
          }`}
        >
          <div className="nt-container">
            <div className="nt-flex nt-flex-wrap nt-items-center nt-justify-between nt-gap-4">
              {/* Logo */}
              <div className="nt-flex-shrink-0">
                <Link href="/" className="nt-block">
                  <Image src={logo} alt="logo" className="nt-h-8 nt-w-auto" />
                </Link>
              </div>

              {/* Nav - desktop */}
              <div className="nt-hidden xl:nt-block nt-flex-1 nt-flex nt-justify-center">
                <nav className="nt-flex nt-items-center">
                  <HeaderMenus />
                </nav>
              </div>

              {/* Right: CTA + mobile menu */}
              <div className="nt-flex nt-items-center nt-gap-4">
                <span className="nt-hidden sm:nt-inline-block">
                  <Button
                    label="Get in touch"
                    href="/contact"
                    variant="secondary"
                  />
                </span>
                <button
                  type="button"
                  onClick={() => setOpenOffCanvas(true)}
                  className="nt-p-2 nt-rounded-lg nt-text-white hover:nt-bg-white/10 nt-transition-colors xl:nt-hidden"
                  aria-label="Open menu"
                >
                  <i className="fa-solid fa-bars" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* off canvas */}
      <MobileOffcanvas
        openOffcanvas={openOffCanvas}
        setOpenOffcanvas={setOpenOffCanvas}
      />
    </>
  );
}
