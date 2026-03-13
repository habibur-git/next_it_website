export type LinkItem = {
  id: number;
  href: string;
  text: string;
};

export const links: Record<string, LinkItem[]> = {
  Company: [
    { id: 1, href: "/", text: "Home" },
    { id: 2, href: "/about", text: "About Us" },
    { id: 3, href: "/case-studies", text: "Case Studies" },
    { id: 4, href: "/blog", text: "Blog" },
    { id: 5, href: "/contact", text: "Contact Us" },
  ],

  "Design Services": [
    { id: 101, href: "/service", text: "UI/UX Design" },
    { id: 102, href: "/service", text: "Website Design" },
    { id: 103, href: "/service", text: "Mobile App Design" },
    { id: 104, href: "/service", text: "SaaS Design" },
    { id: 105, href: "/service", text: "E-commerce Design" },
  ],

  "Development Services": [
    { id: 201, href: "/service", text: "Web Development" },
    { id: 202, href: "/service", text: "Mobile App Development" },
    { id: 203, href: "/service", text: "Web Application Development" },
    { id: 204, href: "/service", text: "SaaS Development" },
    { id: 205, href: "/service", text: "E-commerce Development" },
  ],

  "Contact Us": [
    { id: 999, href: "#", text: "House-01 Road-06, Dhaka 1216" },
    { id: 1000, href: "tel:+8801690274952", text: "+8801690274952" },
    {
      id: 1001,
      href: "mailto:contact@devionex.com",
      text: "contact@devionex.com",
    },
  ],
};
