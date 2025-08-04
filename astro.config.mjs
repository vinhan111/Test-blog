// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';

import vercel from "@astrojs/vercel";
import rehypeMermaid from 'rehype-mermaid';

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
   output: 'server',
  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [react(), mdx(

    {rehypePlugins:[rehypeMermaid]}
  )],

  experimental: {
    fonts: [{
      provider: fontProviders.google(),
      name: "Geist",
      cssVariable: "--font-geist",
      fallbacks: ["Inter", "sans-serif"],
    }]
  },

  

  adapter: vercel()
});