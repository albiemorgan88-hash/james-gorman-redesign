import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: "#1a1f36",
        blue: "#2B4DAF",
        accent: "#ff5722",
        "accent-hover": "#e64a19",
        dark: "#090c1b",
        light: "#fafafa",
        cream: "#fbf8f1",
        gray: "#666666",
        "gray-light": "#c9c9c9",
        border: "rgba(0,0,0,0.06)",
      },
      borderRadius: {
        box: "12px",
        btn: "100px",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        heading: ["Urbanist", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
