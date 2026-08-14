import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  // Used by @astrojs/sitemap to build canonical URLs.
  // Replace with the real deployment domain before publishing.
  site: "https://harness-plugins.example.com",

  integrations: [react(), sitemap()],

  vite: {
    plugins: [tailwindcss()],
  },
});
