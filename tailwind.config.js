import {heroui} from "@heroui/react";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'border': 'border 4s linear infinite',
      },
      keyframes: {
        'border': {
          to: { '--border-angle': '360deg' },
        }
      }
    },
  },
  plugins: [heroui({defaultTheme: "dark"})],
}
