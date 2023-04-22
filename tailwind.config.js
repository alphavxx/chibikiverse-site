/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      outfit: ["Outfit", "sans-serif"],
    },
    extend: {
      dropShadow: {
        glow: ["0 0px 2px rgba(71, 193, 237)", "0 0px 6px rgba(71, 193, 237)"],
      },
      backgroundImage: {
        "hero-pattern": "url('/img/hero-bg.png')",
        "roadmap-texture": "url('/img/chibiki-roadmap.png')",
      },
    },
  },
  plugins: [],
};
