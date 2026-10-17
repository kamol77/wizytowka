import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  // site: 'https://twoja-domena.pl', // odkomentuj po wdrożeniu (canonical, sitemap)
  vite: { plugins: [tailwindcss()] },
});
