// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: 'https://jonadevp.com',
  fonts: [
     {
      provider: fontProviders.fontsource(),
      name: "Inter",
      cssVariable: "--font-inter",
      styles: ["normal"],
      weights: [400, 500, 600],
     },

     {
      provider: fontProviders.fontsource(),
      name: "Space Grotesk",
      cssVariable: "--font-space-grotesk",
      styles: ["normal"],
      weights: [600, 700],
     }
  ],

  vite: {
    plugins: [tailwindcss()]
  }
});