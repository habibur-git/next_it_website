import React from "react";
import { RiFacebookFill, RiLinkedinFill, RiTwitterXFill } from "react-icons/ri";

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
  { id: 1, href: "https://facebook.com", icon: RiFacebookFill, label: "Facebook" },
  { id: 2, href: "https://twitter.com", icon: RiTwitterXFill, label: "Twitter" },
  { id: 3, href: "https://linkedin.com", icon: RiLinkedinFill, label: "LinkedIn" },
];
