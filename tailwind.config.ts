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
        cream: "#fbf7f2",
        coffee: "#6f4e37",
        mocha: "#8b5e3c"
      }
    }
  },
  plugins: []
};

export default config;
