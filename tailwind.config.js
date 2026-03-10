/** @type {import('tailwindcss').Config} */
module.exports = {
  // Prefix: only nt-* classes work. Avoids any class name clash with Bootstrap.
  prefix: "nt-",
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        body: ["var(--body-font-family)"],
        title: ["var(--title-font-family)"],
        gallery: ["var(--font-gallery)"],
        shoulders: ["var(--font-shoulders)"],
        marcellus: ["var(--font-marcellus)"],
        aladin: ["var(--font-aladin)"],
        fontawesome: ["var(--font-fontawesome)"],
      },
      fontSize: {
        small: ["var(--small)", { lineHeight: "1.5" }],
        base: ["var(--base)", { lineHeight: "1.5" }],
        "h1": ["var(--heading-h1)", { lineHeight: "1.2" }],
        "h2": ["var(--heading-h2)", { lineHeight: "1.2" }],
        "h3": ["var(--heading-h3)", { lineHeight: "1.2" }],
        "h4": ["var(--heading-h4)", { lineHeight: "1.2" }],
        "h5": ["var(--heading-h5)", { lineHeight: "1.2" }],
        "h6": ["var(--heading-h6)", { lineHeight: "1.2" }],
      },
      colors: {
        "common-white": "rgb(var(--common-white-rgb) / <alpha-value>)",
        white: "rgb(var(--white-rgb) / <alpha-value>)",
        bg: {
          DEFAULT: "rgb(var(--bg-color-rgb) / <alpha-value>)",
          secondary: "rgb(var(--bg-color-2-rgb) / <alpha-value>)",
          dark: "rgb(var(--bg-color-3-rgb) / <alpha-value>)",
        },
        body: "rgb(var(--body-color-rgb) / <alpha-value>)",
        "common-orange": "rgb(var(--common-orange-rgb) / <alpha-value>)",
        grey: {
          dark: "rgb(var(--grey-color-1-rgb) / <alpha-value>)",
          light: "rgb(var(--grey-color-2-rgb) / <alpha-value>)",
          muted: "rgb(var(--grey-color-3-rgb) / <alpha-value>)",
          pale: "rgb(var(--grey-color-4-rgb) / <alpha-value>)",
        },
        "text-body": "rgb(var(--text-body-color-rgb) / <alpha-value>)",
        title: "rgb(var(--white-rgb) / <alpha-value>)",
        desc: "rgb(var(--text-body-color-rgb) / <alpha-value>)",
        theme: "rgb(var(--theme-color-rgb) / <alpha-value>)",
        border: "rgb(var(--border-color-rgb) / <alpha-value>)",
      },
    },
  },
  plugins: [],
  corePlugins: {
    // Disable Preflight so Bootstrap's reset/base styles are the only ones.
    // Prevents conflicts between Tailwind reset and Bootstrap.
    preflight: false,
  },
};
