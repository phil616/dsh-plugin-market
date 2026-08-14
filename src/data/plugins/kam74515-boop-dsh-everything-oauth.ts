import type { Plugin } from "@/types/plugin";

// Source: awesome-dsh-plugin/awesome-dsh-plugin
// Snapshot: 767a47fbff0b4abbf52bdbfc6a39d64abd01ca69 (2026-08-14)
export const plugin: Plugin = {
  slug: "kam74515-boop-dsh-everything-oauth",
  name: "dsh-everything-oauth",
  description: "把本机 Codex / Grok / Claude / OpenCode / CC Switch 登录态导入 DSH，在设置里自选来源并启用模型。",
  longDescription: "把本机 Codex / Grok / Claude / OpenCode / CC Switch 登录态导入 DSH，在设置里自选来源并启用模型。",
  author: { name: "kam74515-boop", url: "https://github.com/kam74515-boop" },
  tags: ["Model"],
  category: "tool",
  repository: "https://github.com/kam74515-boop/dsh-everything-oauth",
  installMethods: [
    {
      name: "GitHub",
      description: "直接从上游 GitHub 仓库安装。",
      command: "dsh plugin --profile web add github:kam74515-boop/dsh-everything-oauth",
    },
  ],
  links: [
    { name: "Awesome DSH Plugin 收录页", url: "https://awesome-dsh-plugin.com/p/kam74515-boop/dsh-everything-oauth/" },
  ],
};

