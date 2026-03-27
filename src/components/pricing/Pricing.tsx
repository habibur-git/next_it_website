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

// ✅ K format function
const formatToK = (price: number) => {
  if (price >= 1000) {
    const value = price / 1000;
    return `৳${value % 1 === 0 ? value : value.toFixed(1)}k`;
  }
  return `৳${price}`;
};

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
      priceLabel: "৳15k–25k",
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
      priceLabel: "৳30k–50k",
      description:
        "Ideal for growing businesses. 6–10 pages, premium theme, speed & SEO.",
      included: [9, 10, 11, 12, 13, 14, 15, 16, 17, 18],
      cta: "Get started",
      emphasized: true,
    },
    {
      id: "website-premium",
      name: "Premium Package",
      priceLabel: "৳60k–120k+",
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
      description: "Basic business launch setup.",
      included: [0, 1, 2, 3, 4, 5, 6, 7, 8],
      cta: "Get started",
      emphasized: false,
    },
    {
      id: "ecom-shop",
      name: "E-Commerce Business Setup",
      badge: "Popular",
      monthlyPrice: 8999,
      description: "E-commerce landing + product system.",
      included: [0, 1, 2, 3, 4, 5, 6, 7, 9, 10, 11, 12, 13],
      cta: "Get started",
      emphasized: true,
    },
    {
      id: "ecom-premium",
      name: "Premium Brand & E-Commerce Setup",
      monthlyPrice: 19999,
      description: "Full online store + branding.",
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
      description: "Basic branding setup.",
      included: [0, 1, 2, 3, 4, 5],
      cta: "Get started",
      emphasized: false,
    },
    {
      id: "branding-business",
      name: "Business Branding",
      badge: "Recommended",
      monthlyPrice: 7999,
      description: "Professional branding kit.",
      included: [0, 6, 1, 7, 8, 9, 10, 11, 12],
      cta: "Get started",
      emphasized: true,
    },
    {
      id: "branding-premium",
      name: "Premium Brand Identity",
      monthlyPrice: 14999,
      description: "Full brand identity system.",
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
    <section className="nt-pt-12 nt-pb-0 md:nt-pb-24 lg:nt-pb-24">
      <div className="nt-container nt-mx-auto nt-px-4">
        <div className="nt-grid nt-grid-cols-1 lg:nt-grid-cols-12 nt-gap-10 nt-items-end nt-mb-16">
          <div className="nt-col-span-5">
            <h2 className="nt-text-h2 nt-text-white">Pricing</h2>
            <p className="nt-text-grey-muted nt-text-small nt-mt-2">
              Choose your service and plan.
            </p>
          </div>

          <div className="nt-col-span-7 nt-flex nt-justify-end">
            <div className="nt-inline-flex nt-rounded-xl nt-bg-white/5 nt-p-1 nt-border nt-border-white/10">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setCategory(cat.id)}
                  className={`nt-px-5 nt-py-2.5 nt-rounded-lg nt-text-small ${
                    category === cat.id
                      ? "nt-bg-white nt-text-body"
                      : "nt-text-white/70"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="nt-grid md:nt-grid-cols-3 nt-gap-6">
          {plans.map((plan) => (
            <div key={plan.id} className="nt-p-6 nt-rounded-2xl nt-bg-white/5">
              <h4 className="nt-text-white">{plan.name}</h4>

              <h3 className="nt-text-[36px] nt-font-bold nt-my-4 nt-text-theme">
                {plan.priceLabel ||
                  (plan.monthlyPrice && formatToK(plan.monthlyPrice))}
              </h3>

              <ul className="nt-space-y-2 nt-mb-8">
                {features.map((f, i) =>
                  plan.included.includes(i) ? (
                    <li key={i} className="nt-flex nt-gap-2 nt-text-white/70">
                      <RiCheckLine /> {f}
                    </li>
                  ) : null,
                )}
              </ul>

              <Button label={plan.cta} href="/contact" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
