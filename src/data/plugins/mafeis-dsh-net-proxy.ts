import type { Plugin } from "@/types/plugin";

// Source: awesome-dsh-plugin/awesome-dsh-plugin
// Snapshot: 767a47fbff0b4abbf52bdbfc6a39d64abd01ca69 (2026-08-14)
export const plugin: Plugin = {
  slug: "mafeis-dsh-net-proxy",
  name: "dsh-net-proxy",
  description: "让 agent 的网络请求走本机 HTTP/CONNECT/SOCKS5 代理。",
  longDescription: "让 agent 的网络请求走本机 HTTP/CONNECT/SOCKS5 代理。",
  author: { name: "mafeis", url: "https://github.com/mafeis" },
  tags: ["Tool"],
  category: "tool",
  repository: "https://github.com/mafeis/dsh-net-proxy",
  installMethods: [
    {
      name: "GitHub",
      description: "直接从上游 GitHub 仓库安装。",
      command: "dsh plugin --profile web add github:mafeis/dsh-net-proxy",
    },
  ],
  links: [
    { name: "Awesome DSH Plugin 收录页", url: "https://awesome-dsh-plugin.com/p/mafeis/dsh-net-proxy/" },
  ],
};

