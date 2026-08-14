import type { Config } from "tailwindcss";

/**
 * Tailwind CSS v4 is configured CSS-first in `src/styles/global.css`
 * (`@theme`, `@custom-variant dark`). This legacy-style config file is
 * loaded through the `@config` directive only to keep the classic
 * `tailwind.config.ts` entry point for maintainers; all design tokens
 * live in the CSS file.
 */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx}"],
} satisfies Config;
