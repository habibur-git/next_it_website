"use client";

import { contactInfo, menuItems, socialMediaLinks } from "@/data/menu";
import { motion } from "framer-motion";
import { RiArrowDownSLine, RiCloseLine } from "react-icons/ri";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface MobileNavProps {
  onClose?: () => void;
}

export default function MobileNav({ onClose }: MobileNavProps) {
  const [openSubmenu, setOpenSubmenu] = useState<number | null>(null);

  const handleMenuClick = (
    e: React.MouseEvent,
    itemId: number,
    hasSubmenu: boolean
  ) => {
    if (hasSubmenu) {
      e.preventDefault(); // prevent navigation
      setOpenSubmenu(openSubmenu === itemId ? null : itemId);
    } else {
      onClose?.();
    }
  };

  return (
    <motion.div
      className="nt-fixed nt-top-0 nt-left-0 nt-inset-0 nt-z-50 nt-flex nt-bg-black/50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Sidebar */}
      <motion.div
        className="nt-bg-theme nt-w-80 nt-h-screen nt-flex nt-flex-col nt-border-r nt-border-border/30"
        initial={{ x: -320 }}
        animate={{ x: 0 }}
        exit={{ x: -320 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
      >
        {/* Header */}
        <div className="nt-flex nt-items-center nt-justify-between nt-p-4 nt-border-b nt-border-border/30">
          <Link href="/" onClick={onClose} className="nt-flex nt-items-center">
            <Image
              width={140}
              height={60}
              src="/assets/img/sec-logo.svg"
              alt="DevioNex Logo"
              priority
            />
          </Link>

          <button
            onClick={onClose}
            className="nt-p-2 nt-rounded-full nt-text-white nt-border nt-border-border hover:nt-bg-secondary/10 nt-transition nt-cursor-pointer"
          >
            <RiCloseLine className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation */}
        <div className="nt-flex-1 nt-py-6 nt-overflow-y-auto">
          <ul className="nt-space-y-1 nt-px-4">
            {menuItems.map((item) => {
              const hasSubmenu = !!(
                item.subMenuItems && item.subMenuItems.length > 0
              );

              return (
                <li key={item.id}>
                  <div
                    className="nt-flex nt-items-center nt-justify-between nt-cursor-pointer"
                    onClick={(e) => handleMenuClick(e, item.id, hasSubmenu)}
                  >
                    {/* Menu link */}
                    <Link
                      href={item.link || "#"}
                      className="nt-block nt-py-2 nt-text-base nt-text-white nt-font-title nt-font-medium hover:nt-scale-105 nt-transition-transform"
                    >
                      {item.title}
                    </Link>

                    {/* Chevron */}
                    {hasSubmenu && (
                      <RiArrowDownSLine
                        className={`nt-w-4 nt-h-4 nt-ml-2 nt-text-white nt-transition-transform nt-duration-200 ${
                          openSubmenu === item.id ? "nt-rotate-180" : ""
                        }`}
                      />
                    )}
                  </div>

                  {/* Submenu */}
                  {hasSubmenu && openSubmenu === item.id && (
                    <div className="nt-pl-4 nt-mt-2">
                      {[
                        { title: "Services", items: [{ slug: "social-media", title: "Social Media" }, { slug: "website", title: "Website" }, { slug: "ecommerce", title: "E-Commerce" }, { slug: "branding", title: "Branding" }] },
                      ].map((section) => (
                        <div key={section.title}>
                          {/* Section title */}
                          <p className="nt-text-xs nt-uppercase nt-text-white/50 nt-font-semibold nt-px-3 nt-mt-4 nt-mb-2">
                            {section.title}
                          </p>

                          {/* Section items */}
                          <ul className="nt-flex nt-flex-col">
                            {section.items.map((subItem) => (
                              <li key={subItem.slug}>
                                <Link
                                  href={`/services/${subItem.slug}`}
                                  onClick={onClose}
                                  className="nt-flex nt-items-center nt-justify-between nt-py-2 nt-px-5 nt-text-white nt-text-base hover:nt-bg-white/10 nt-rounded-2xl nt-transition"
                                >
                                  {subItem.title}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        </div>

        {/* Separator */}
        <div className="nt-border-t nt-border-grey-muted nt-mx-6" />

        {/* Contact Info */}
        <div className="nt-p-6 nt-space-y-4">
          <div className="nt-text-sm nt-space-y-2 nt-font-medium">
            <p className="nt-text-white">{contactInfo.phone}</p>
            <p className="nt-text-white">{contactInfo.email}</p>
          </div>

          {/* Social Media */}
          <div className="nt-flex nt-space-x-4">
            {socialMediaLinks.map((social) => (
              <Link
                key={social.id}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="nt-p-2 nt-rounded-full nt-bg-white/5 hover:nt-bg-grey-light nt-transition-colors nt-flex nt-items-center nt-justify-center nt-min-w-12 nt-min-h-12"
              >
                {social.icon ? (
                  (() => {
                    const Icon = social.icon as React.ElementType;
                    return <Icon className="nt-text-xl nt-text-white" />;
                  })()
                ) : social.image ? (
                  <Image
                    src={social.image}
                    alt={social.label}
                    width={24}
                    height={24}
                    className="nt-min-w-6 nt-min-h-6"
                  />
                ) : null}
              </Link>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Overlay */}
      <div className="nt-flex-1 nt-bg-transparent" onClick={onClose} />
    </motion.div>
  );
}
