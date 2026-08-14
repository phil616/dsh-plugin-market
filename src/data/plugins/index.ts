import type { Plugin } from "@/types/plugin";

import { openDesignPlugin } from "./open-design";
import { dotSkillPlugin } from "./dot-skill";

/**
 * The single source of truth for the whole site.
 *
 * To add a plugin: create `src/data/plugins/<name>.ts`, export a `Plugin`
 * object and append it to this list. Then run `npm run build`.
 * See AGENTS.md for the full contribution guide.
 */
export const plugins: Plugin[] = [
  openDesignPlugin,
  dotSkillPlugin,
];
