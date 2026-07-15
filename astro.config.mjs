import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import markdoc from '@astrojs/markdoc';
import keystatic from '@keystatic/astro';
import sitemap from '@astrojs/sitemap';

// Keystatic's admin UI needs on-demand rendering, so it's enabled in dev only.
// For editing in production, switch Keystatic storage to GitHub mode and use
// the hosted dashboard, or add an SSR adapter (see README).
const isDev = process.env.NODE_ENV !== 'production';

export default defineConfig({
  site: 'https://writenow.media',
  integrations: [react(), markdoc(), ...(isDev ? [keystatic()] : []), sitemap()],
  output: 'static',
});
