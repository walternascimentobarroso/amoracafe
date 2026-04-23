import type { Config } from "tailwindcss";
import designSystem from "./config/design-system.json";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        cream: designSystem.colors.brand.cream,
        parchment: designSystem.colors.brand.parchment,
        coffee: designSystem.colors.brand.coffee,
        mocha: designSystem.colors.brand.mocha,
        espresso: designSystem.colors.brand.espresso,
        gold: designSystem.colors.brand.gold,
        caramel: designSystem.colors.brand.caramel
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
