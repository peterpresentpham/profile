import type { Config } from 'tailwindcss';

/** @type {import('tailwindcss').Config} */
const config: Config = {
  important: true,
  darkMode: ['class', '[data-theme="light"]'],
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    screens: {
      xs: '600px',
      sm: '760px',
      md: '960px',
      lg: '1280px',
      xl: '1440px',
    },
    extend: {
      colors: {
        gray: {
          50: '#ABB2BF',
        },
        purple: {
          50: '#C778DD',
        },
        black: {
          50: '#0a0118',
        },
      },
    },
  },
  plugins: [],
};

export default config;
