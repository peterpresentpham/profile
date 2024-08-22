import type { Config } from 'tailwindcss';

/** @type {import('tailwindcss').Config} */
const config: Config = {
  important: true,
  darkMode: ['class', '[data-theme="light"]'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      xs: '600px',
      sm: '760px',
      md: '960px',
      lg: '1280px',
      xl: '1440px',
    },
    extend: {},
  },
  plugins: [],
};

export default config;
