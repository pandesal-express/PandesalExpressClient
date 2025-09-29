// @ts-check
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

import vercel from '@astrojs/vercel';
import {defineConfig} from 'astro/config';

// https://astro.build/config
export default defineConfig({
    integrations: [react(), tailwind()],
    output: 'server',
    server: {port: 3000},
    adapter: vercel({
        edgeMiddleware: true
    })
});