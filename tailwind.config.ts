import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#6A53FF',
  
        'high-contrast': '#F7F7F7',
        'low-contrast': '#878787',
  
        'base-color': '#1C1C1C',
  
        'error': '#CC6752',
        'danger': '#EA9E52',
        'alert': '#F4D154',
        'success': '#8CCE6A',
        'info': '#52AFCC',
  
        gray: {
          50: '#F7F7F7',
          100: '#F3F3F7',
          200: '#CED2D9',
          300: '#AEB4C0',
          400: '#878787',
          500: '#737D92',
          600: '#4F4F4F',
          700: '#3F3F3F',
          800: '#2D2D2D',
          900: '#212121',
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
