import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        plum: {
          950: '#1a061a',
          900: '#260925',
          850: '#310d31',
          800: '#42123f',
          700: '#5b1c56',
        },
        champagne: '#d7b679',
        cream: '#f8f3ea',
        ink: '#180f18',
      },
      fontFamily: {
        serif: ['var(--font-serif)', 'Georgia', 'serif'],
        sans: ['var(--font-sans)', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        luxury: '0 26px 70px rgba(26, 6, 26, 0.18)',
        soft: '0 18px 48px rgba(26, 6, 26, 0.10)',
      },
    },
  },
  plugins: [],
};

export default config;
