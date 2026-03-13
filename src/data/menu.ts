import React from "react";
import { RiLinkedinFill } from "react-icons/ri";
import { SiBehance, SiDribbble, SiFacebook } from "react-icons/si";

export type MenuItem = {
  id: number;
  title: string;
  link?: string;
  subMenuItems?: { label: string; link?: string }[];
};

export const menuItems: MenuItem[] = [
  { id: 1, title: "Home", link: "/" },
  { id: 2, title: "About Us", link: "/about-us" },
  { id: 3, title: "Services", link: "/service" },
  { id: 4, title: "Portfolio", link: "/portfolio" },
  { id: 5, title: "Blog", link: "/blog" },
  { id: 6, title: "Contact", link: "/contact" },
];

export const contactInfo = {
  phone: "+1 234 567 890",
  email: "hello@example.com",
};

export const socialMediaLinks: {
  id: number;
  href: string;
  icon?: React.ElementType;
  image?: string;
  label: string;
}[] = [
  {
    id: 1,
    href: "https://clutch.co",
    icon: SiFacebook,
    label: "Follow us on Facebook",
  },
  {
    id: 2,
    href: "https://behance.net",
    icon: SiBehance,
    label: "Follow us on Behance",
  },
  {
    id: 3,
    href: "https://dribbble.com",
    icon: SiDribbble,
    label: "Follow us on Dribbble",
  },
  {
    id: 4,
    href: "https://linkedin.com",
    icon: RiLinkedinFill,
    label: "Follow us on LinkedIn",
  },
];
