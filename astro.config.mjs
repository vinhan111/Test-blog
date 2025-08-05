// @ts-check
import { defineConfig, fontProviders, sharpImageService } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';
import mermaid from 'astro-mermaid';
import cloudflare from '@astrojs/cloudflare';

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
   output: 'server',
  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [react(), mdx(), 
    
    mermaid({
      theme: 'dark',
      autoTheme: true,
      mermaidConfig: {
        flowchart: {
          curve: 'basis'
        }}
    }),
  ],

  experimental: {
    fonts: [{
      provider: fontProviders.google(),
      name: "Geist",
      cssVariable: "--font-geist",
      fallbacks: ["Inter", "sans-serif"],
    }]
  },

  adapter: cloudflare
  ({
    
    imageService: 'compile'
  })
});