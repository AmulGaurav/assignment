import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["var(--font-inter)"],
        urbanist: ["var(--font-urbanist)"],
      },
      colors: {
        primary: "#00DC82",
        secondary: "#003C3C",
        "gradient-red": "#FF5D5D",
        "gradient-blue": "#4794FF",
        text: {
          primary: "#000000",
          secondary: "#838383",
          white: "#FFFFFF",
        },
      },
      fontSize: {
        // Mobile
        "hero-mobile": ["40px", { lineHeight: "48px" }],
        "h1-mobile": ["24px", { lineHeight: "28.8px" }],
        "h2-mobile": ["20px", { lineHeight: "24px" }],
        "h3-mobile": ["18px", { lineHeight: "21.6px" }],
        "h4-mobile": ["16px", { lineHeight: "19.2px" }],
        "h5-mobile": ["14px", { lineHeight: "16.8px" }],
        "body1-mobile": ["16px", { lineHeight: "19px" }],
        "body2-mobile": ["14px", { lineHeight: "16.8px" }],
        "body3-mobile": ["12px", { lineHeight: "14.52px" }],
        "cta-mobile": "16px",

        // Desktop
        "hero-desktop": ["64px", { lineHeight: "76.8px" }],
        "header-desktop": ["180px", { lineHeight: "216px" }],
        "h1-desktop": ["40px", { lineHeight: "48px" }],
        "h2-desktop": ["34px", { lineHeight: "40.8px" }],
        "h3-desktop": ["27px", { lineHeight: "32px" }],
        "h4-desktop": ["22px", { lineHeight: "26.4px" }],
        "body1-desktop": ["18px", { lineHeight: "21.6px" }],
        "body2-desktop": ["16px", { lineHeight: "20px" }],
        "cta-desktop": ["18px", { lineHeight: "21.6px" }],
      },

      padding: {
        "screen-1440": "150px",
        "screen-1200": "120px",
        "screen-992": "70px",
        "screen-768": "40px",
        "screen-320": "16px",
      },

      keyframes: {
        // Slide in from right
        slideInRight: {
          from: { transform: "translateX(100%)", opacity: "0" },
          to: { transform: "translateX(0)", opacity: "1" },
        },
        // Slide out to left
        slideOutLeft: {
          from: { transform: "translateX(0)", opacity: "1" },
          to: { transform: "translateX(-100%)", opacity: "0" },
        },
        slideDown: {
          from: { height: "0px" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        slideUp: {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0px" },
        },
      },
      animation: {
        "slide-in-right": "slideInRight 300ms ease-out",
        "slide-out-left": "slideOutLeft 300ms ease-out",
        slideDown: "slideDown 300ms cubic-bezier(0.87, 0, 0.13, 1)",
        slideUp: "slideUp 300ms cubic-bezier(0.87, 0, 0.13, 1)",
      },
    },
  },
  plugins: [],
} satisfies Config;
