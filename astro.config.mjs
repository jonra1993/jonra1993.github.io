// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

import react from '@astrojs/react';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://jonathan-vargas.com',  
  integrations: [
    sitemap(),
    react(), 
    tailwind({
      applyBaseStyles: false,
    }),
  ]
});