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
        light: "#FAF8F5",
        cream: "#FAF8F5",
        "cream-dark": "#F3F0EB",
        muted: "#64748b",
        "muted-dark": "#475569",
        surface: "#F3F0EB",
        border: "#E8E4DE",
        "border-light": "#F0EDE8",
      },
      borderRadius: {
        box: "16px",
        btn: "12px",
      },
      fontFamily: {
        sans: ["DM Sans", "Inter", "system-ui", "sans-serif"],
        heading: ["Outfit", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 60px rgba(43, 77, 175, 0.15)",
        "glow-orange": "0 0 60px rgba(255, 69, 32, 0.1)",
        card: "0 1px 3px rgba(0,0,0,0.03), 0 6px 16px rgba(0,0,0,0.025)",
        "card-hover": "0 12px 40px rgba(0,0,0,0.08), 0 2px 8px rgba(0,0,0,0.04)",
        soft: "0 2px 8px rgba(0,0,0,0.04), 0 8px 24px rgba(0,0,0,0.03)",
        "soft-lg": "0 4px 12px rgba(0,0,0,0.05), 0 16px 40px rgba(0,0,0,0.06)",
        "input-focus": "0 0 0 3px rgba(255, 69, 32, 0.12)",
      },
      letterSpacing: {
        "heading-tight": "-0.025em",
      },
    },
  },
  plugins: [],
};
export default config;
