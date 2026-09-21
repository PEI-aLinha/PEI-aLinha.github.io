import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://pei-alinha.github.io',
  base: '/',
  integrations: [react()],
  vite: { plugins: [tailwindcss()] },
});