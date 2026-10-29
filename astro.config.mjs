// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  fonts: [
     {
      provider: fontProviders.fontsource(),
      name: "Inter",
      cssVariable: "--font-inter",
     },

     {
      provider: fontProviders.fontsource(),
      name: "Space Grotesk",
      cssVariable: "--font-space-grotesk",
     }
  ],

  vite: {
    plugins: [tailwindcss()]
  }
});