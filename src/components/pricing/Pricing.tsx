"use client";

import Button from "@/components/ui/button";
import { useState } from "react";
import { RiCheckLine } from "react-icons/ri";

const CATEGORIES = [
  { id: "socialMedia", label: "Social Media Design" },
  { id: "website", label: "Website Development" },
  { id: "ecommerce", label: "E-Commerce Launch" },
  { id: "branding", label: "Branding Solution" },
] as const;

type CategoryId = (typeof CATEGORIES)[number]["id"];

const FEATURES_BY_CATEGORY: Record<CategoryId, string[]> = {
  socialMedia: [
    "Page Post & Caption Writing",
    "Premium Images & Fonts",
    "8 Social Media Post Designs",
    "2 Designs Per Week",
    "2 Revisions Per Design",
    "16 Social Media Post Designs",
    "4 Designs Per Week",
    "3 Revisions Per Design",
    "1 Free Page Cover Design",
    "30 Social Media Post Designs",
    "7 Designs Per Week",
    "4 Revisions Per Design",
  ],
  website: [
    "3–5 Pages Website",
    "Responsive (Mobile Friendly) Design",
    "WordPress Installation & Setup",
    "Basic UI Design",
    "Contact Form Integration",
    "Google Map Integration",
    "Social Media Links",
    "Basic SEO Setup",
    "Delivery Time: 5–7 Days",
    "6–10 Pages Website",
    "Premium Responsive Design",
    "WordPress with Premium Theme",
    "Speed Optimization",
    "On-Page SEO Setup",
    "Blog System",
    "WhatsApp Chat Integration",
    "Website Security Setup",
    "Basic Website Training",
    "Delivery Time: 7–12 Days",
    "10+ Pages Custom Website",
    "Custom UI/UX Design",
    "E-commerce Functionality",
    "Payment Gateway Integration",
    "Advanced SEO Setup",
    "Marketing Tools Integration",
    "Security & Backup System",
    "Full Website Training",
    "1 Month Free Support",
    "Delivery Time: 15–25 Days",
  ],
  ecommerce: [
    "Facebook Page Setup",
    "Custom Logo Design",
    "Facebook Cover Design",
    "2 Promotional Post Designs",
    "Complete Business Information Setup",
    "Google Maps Business Location Setup",
    "Basic SEO Setup",
    "Social Media Account Creation (FB, YouTube, TikTok, Instagram)",
    "Best for small businesses and startups",
    "E-Commerce Landing Page",
    "Product Upload (Up to 5 Products)",
    "Mobile Friendly Design",
    "Simple Order System",
    "Best for small online shops",
    "Professional Logo Design",
    "Basic Product Packaging Design",
    "Social Media Page Setup",
    "Professional E-Commerce Website",
    "Unlimited Product Upload",
    "Mobile Responsive Design",
    "Product Management System",
    "Basic SEO Optimization",
    "Order Management System",
    "Perfect for brands and full online stores",
  ],
  branding: [
    "Professional Logo Design",
    "Facebook Cover Design",
    "Profile Image Design",
    "Business Color Selection",
    "Basic Brand Style Guidance",
    "Ideal for startups and small businesses",
    "Logo Variations (PNG / Transparent)",
    "Profile & Social Media Branding",
    "Business Color Palette",
    "Typography Selection",
    "Basic Packaging Design",
    "2 Promotional Post Designs",
    "Perfect for strong visual identity",
    "Multiple Logo Concepts",
    "Complete Brand Color Palette",
    "Typography & Brand Style Guide",
    "Social Media Branding Kit",
    "Packaging Design",
    "Business Card Design",
    "Letterhead Design",
    "10 Page Company Profile Design",
    "4 Promotional Social Media Post Designs",
    "Best for brands and long-term identity",
  ],
};

type Plan = {
  id: string;
  name: string;
  badge?: string;
  monthlyPrice?: number;
  priceLabel?: string;
  plan?: string;
  description: string;
  included: number[];
  cta: string;
  emphasized: boolean;
};

const PRICING_BY_CATEGORY: Record<CategoryId, Plan[]> = {
  socialMedia: [
    {
      id: "social-startup",
      name: "Startup Package",
      monthlyPrice: 2200,
      priceLabel: " ৳ 2,200",
      plan: "Monthly",
      description: "8 posts, 2 per week, caption writing & premium assets.",
      included: [0, 1, 2, 3, 4],
      cta: "Get started",
      emphasized: false,
    },
    {
      id: "social-business",
      name: "Business Package",
      badge: "Recommended",
      monthlyPrice: 3999,
      priceLabel: " ৳ 3,999",
      plan: "Monthly",
      description: "16 posts, 4 per week, 3 revisions & free page cover.",
      included: [0, 1, 5, 6, 7, 8],
      cta: "Get started",
      emphasized: true,
    },
    {
      id: "social-corporate",
      name: "Corporate Package",
      monthlyPrice: 6599,
      priceLabel: " ৳ 6,599",
      plan: "Monthly",
      description: "30 posts, 7 per week, 4 revisions & free page cover.",
      included: [0, 1, 9, 10, 11, 8],
      cta: "Contact us",
      emphasized: false,
    },
  ],
  website: [
    {
      id: "website-basic",
      name: "Basic Package",
      priceLabel: "৳15,000 – ৳25,000",
      description:
        "Perfect for startups and small businesses. 3–5 pages, responsive, WordPress.",
      included: [0, 1, 2, 3, 4, 5, 6, 7, 8],
      cta: "Get started",
      emphasized: false,
    },
    {
      id: "website-standard",
      name: "Standard Package",
      badge: "Recommended",
      priceLabel: "৳30,000 – ৳50,000",
      description:
        "Ideal for growing businesses. 6–10 pages, premium theme, speed & SEO.",
      included: [9, 10, 11, 12, 13, 14, 15, 16, 17, 18],
      cta: "Get started",
      emphasized: true,
    },
    {
      id: "website-premium",
      name: "Premium Package",
      priceLabel: "৳60,000 – ৳120,000+",
      description:
        "Advanced features & e-commerce. Custom UI/UX, payment gateway, 1 month support.",
      included: [19, 20, 21, 22, 23, 24, 25, 26, 27, 28],
      cta: "Contact us",
      emphasized: false,
    },
  ],
  ecommerce: [
    {
      id: "ecom-starter",
      name: "Starter Business Setup",
      monthlyPrice: 1950,
      priceLabel: "৳ 1,950 ",
      description:
        "Facebook page, logo, cover, 2 promo posts, business info, Google Maps, SEO, social accounts.",
      included: [0, 1, 2, 3, 4, 5, 6, 7, 8],
      cta: "Get started",
      emphasized: false,
    },
    {
      id: "ecom-shop",
      name: "E-Commerce Business Setup",
      badge: "Popular",
      monthlyPrice: 8999,
      priceLabel: "৳ 8,999 ",
      description:
        "Starter features + e-commerce landing, 5 products, mobile friendly, order system.",
      included: [0, 1, 2, 3, 4, 5, 6, 7, 9, 10, 11, 12, 13],
      cta: "Get started",
      emphasized: true,
    },
    {
      id: "ecom-premium",
      name: "Premium Brand & E-Commerce Setup",
      monthlyPrice: 19999,
      priceLabel: "৳ 19,999 ",
      description:
        "Full digital launch: logo, packaging, social pages, full e-commerce site, unlimited products.",
      included: [14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
      cta: "Contact us",
      emphasized: false,
    },
  ],
  branding: [
    {
      id: "branding-starter",
      name: "Starter Branding",
      monthlyPrice: 2999,
      priceLabel: "৳ 2,999 ",
      description:
        "Logo, Facebook cover, profile image, colors & basic brand guidance.",
      included: [0, 1, 2, 3, 4, 5],
      cta: "Get started",
      emphasized: false,
    },
    {
      id: "branding-business",
      name: "Business Branding",
      badge: "Recommended",
      monthlyPrice: 7999,
      priceLabel: "৳ 7,999 ",
      description:
        "Logo + variations, cover, social branding, palette, typography, 2 promo posts.",
      included: [0, 6, 1, 7, 8, 9, 10, 11, 12],
      cta: "Get started",
      emphasized: true,
    },
    {
      id: "branding-premium",
      name: "Premium Brand Identity",
      monthlyPrice: 14999,
      priceLabel: "৳ 14,999 ",
      description:
        "Multiple logo concepts, full style guide, packaging, business card, letterhead, 10-page profile.",
      included: [0, 13, 14, 15, 16, 17, 18, 19, 20, 21],
      cta: "Contact us",
      emphasized: false,
    },
  ],
};

export default function Pricing() {
  const [category, setCategory] = useState<CategoryId>("socialMedia");
  const plans = PRICING_BY_CATEGORY[category];
  const features = FEATURES_BY_CATEGORY[category];

  return (
    <section className="nt-pt-12 nt-pb-24">
      <div className="nt-container nt-mx-auto nt-px-4">
        <div className="nt-grid nt-grid-cols-12 nt-gap-10 nt-items-end nt-w-full nt-mb-16">
          {/* Minimal header */}
          <div className="nt-col-span-5">
            <h2 className="nt-text-h2 nt-text-white">Pricing</h2>
            <p className="nt-text-grey-muted nt-text-small nt-mt-2 nt-mb-0">
              Choose your service and plan.
            </p>
          </div>

          {/* SaaS-style segment control: minimal, premium feel */}
          <div className="nt-col-span-7 nt-flex nt-justify-end">
            <div className="nt-inline-flex nt-rounded-xl nt-bg-white/5 nt-p-1 nt-border nt-border-white/10">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setCategory(cat.id)}
                  className={`nt-px-5 nt-py-2.5 nt-rounded-lg nt-text-small nt-font-medium nt-transition-all nt-duration-200 ${
                    category === cat.id
                      ? "nt-bg-white nt-text-body nt-shadow-sm"
                      : "nt-text-white/70 hover:nt-text-white"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Three tiers: minimal premium cards */}
        <div className="nt-grid md:nt-grid-cols-3 nt-gap-5 md:nt-gap-6">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`nt-relative nt-flex nt-flex-col nt-rounded-2xl nt-border nt-bg-white/5 nt-backdrop-blur-sm nt-transition-all nt-duration-200 ${
                plan.emphasized
                  ? "nt-border-theme/40 nt-shadow-lg nt-shadow-theme/5"
                  : "nt-border-white/10 hover:nt-border-white/15"
              }`}
            >
              <div className="nt-flex nt-flex-col nt-flex-1 nt-p-6 md:nt-p-7">
                {plan.badge && (
                  <span className="nt-text-xs nt-font-medium nt-text-theme nt-mb-3 nt-block ">
                    {plan.badge}
                  </span>
                )}
                <h4 className="nt-font-title nt-text-white nt-font-semibold">
                  {plan.name}
                </h4>

                <div className="nt-mt-6 nt-flex nt-items-baseline nt-gap-1 nt-flex-wrap nt-gap-y-1">
                  <span className="nt-font-title nt-text-white nt-text-[40px] nt-font-bold nt-tabular-nums nt-mb-8">
                    {plan.priceLabel ??
                      (plan.monthlyPrice != null
                        ? `$${plan.monthlyPrice}`
                        : "")}
                  </span>
                  {plan.priceLabel ? null : (
                    <span className="nt-text-sm nt-text-white/50">
                      / {plan.plan}
                    </span>
                  )}
                </div>

                <ul className="nt-mt-6 nt-space-y-3 nt-flex-1">
                  {features.map((feature, i) =>
                    plan.included.includes(i) ? (
                      <li
                        key={i}
                        className="nt-flex nt-items-center nt-gap-2.5 nt-text-small nt-text-white/90"
                      >
                        <RiCheckLine className="nt-w-4 nt-h-4 nt-text-green-500 nt-shrink-0" />
                        {feature}
                      </li>
                    ) : null,
                  )}
                </ul>

                <Button
                  label={plan.cta}
                  href="/contact"
                  variant={plan.emphasized ? "primary" : "secondary"}
                  className="nt-mt-6 nt-w-full nt-py-3 nt-rounded-xl nt-text-small nt-justify-center"
                  showArrow={plan.emphasized}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
