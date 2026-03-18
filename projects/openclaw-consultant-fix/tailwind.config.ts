import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: "#0a0f1e",
        "navy-light": "#141b2d",
        blue: "#2B4DAF",
        "blue-light": "#3a5ec4",
        orange: "#FF4520",
        "orange-hover": "#e63d1a",
        dark: "#0a0f1e",
        light: "#fafbfc",
        muted: "#64748b",
        "muted-dark": "#475569",
        surface: "#f1f5f9",
        border: "#e2e8f0",
      },
      borderRadius: {
        box: "16px",
        btn: "12px",
      },
      fontFamily: {
        sans: ["DM Sans", "sans-serif"],
        heading: ["Outfit", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 60px rgba(43, 77, 175, 0.15)",
        "glow-orange": "0 0 60px rgba(255, 69, 32, 0.1)",
        card: "0 1px 3px rgba(0,0,0,0.04), 0 4px 12px rgba(0,0,0,0.03)",
        "card-hover": "0 8px 30px rgba(0,0,0,0.08)",
      },
    },
  },
  plugins: [],
};
export default config;
