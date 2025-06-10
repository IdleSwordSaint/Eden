import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"], // ✅ Correct Tailwind paths
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-inter)", "sans-serif"], // ✅ Custom font
      },
    },
  },
  plugins: [],
};

export default config;