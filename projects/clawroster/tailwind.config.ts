import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: "#0A0A0A",
          secondary: "#0D1117",
        },
        foreground: "#FFFFFF",
        primary: {
          DEFAULT: "#00F0FF",
          hover: "#00D0EF",
        },
        accent: "#FF6B6B",
        border: "#1C1C1C",
        card: "#0F0F0F",
        muted: {
          DEFAULT: "#6B7280",
          foreground: "#9CA3AF",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        "slide-up": "slideUp 0.3s ease-out",
        "glow": "glow 2s ease-in-out infinite alternate",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        glow: {
          "0%": { boxShadow: "0 0 5px #00F0FF, 0 0 10px #00F0FF, 0 0 15px #00F0FF" },
          "100%": { boxShadow: "0 0 10px #00F0FF, 0 0 20px #00F0FF, 0 0 30px #00F0FF" },
        },
      },
    },
  },
  plugins: [],
};

export default config;