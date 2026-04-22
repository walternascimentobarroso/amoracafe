import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        cream: "#fdf8f0",
        parchment: "#f5ede0",
        coffee: "#6f4e37",
        mocha: "#8b5e3c",
        espresso: "#2d1a0e",
        gold: "#c8860a",
        caramel: "#d4956a"
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        serif: ["var(--font-playfair)", "Georgia", "serif"]
      }
    }
  },
  plugins: []
};

export default config;
