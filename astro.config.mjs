// @ts-check
import { defineConfig } from 'astro/config';
import path from 'path';

import react from '@astrojs/react';

import tailwindcss from '@tailwindcss/vite';
import tailwind from '@astrojs/tailwind';

import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve('./src')
      }
    }
  },

  integrations: [react(), tailwind()],
  output: 'server',
  adapter: vercel({
    edgeMiddleware: true
  })
});