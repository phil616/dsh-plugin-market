/**
 * Plugin data model.
 *
 * The market only stores descriptive information and install instructions.
 * It never hosts, mirrors or proxies plugin files — the `repository` /
 * `homepage` links point at the author's own source.
 *
 * Deliberately NOT included (the market is not a distribution channel):
 * downloadURL, mirrorURL, packageFile, cdnURL, binaryURL.
 */

export interface PluginAuthor {
  name: string;
  url?: string;
  avatar?: string;
}

export interface InstallMethod {
  name: string;
  description?: string;
  /** Install command. May contain `--profile <name>` which the UI replaces live. */
  command: string;
}

export interface PluginLink {
  name: string;
  url: string;
}

export interface Plugin {
  slug: string;

  name: string;

  description: string;

  longDescription?: string;

  author: PluginAuthor;

  tags: string[];

  /**
   * Listing category.
   * - `"tool"` (default): an agent tool / plugin.
   * - `"help"`: supporting material — documentation, resources, software —
   *   collected on the `/help` page.
   */
  category?: "tool" | "help";

  repository: string;

  homepage?: string;

  documentation?: string;

  license?: string;

  installMethods: InstallMethod[];

  links?: PluginLink[];

  featured?: boolean;

  deprecated?: boolean;

  /**
   * Marks UI-development mock data (see the technical plan §46).
   * Maintainers should remove the flag and the data once a real plugin
   * listing replaces it.
   */
  example?: boolean;
}
