import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  site: 'https://nebulacode.com',
  integrations: [react()],
  output: 'static',
  define: {
    'process.env': process.env
  }
});

console.log("Vite ENV:", process.env); 