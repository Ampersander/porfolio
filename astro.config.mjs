import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  site: 'https://nebulacode.com',
  integrations: [react()],
  output: 'server',
  adapter: vercel(),
});
