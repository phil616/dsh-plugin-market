import type { Plugin } from "@/types/plugin";

// Source: awesome-dsh-plugin/awesome-dsh-plugin
// Snapshot: 767a47fbff0b4abbf52bdbfc6a39d64abd01ca69 (2026-08-14)
export const plugin: Plugin = {
  slug: "yuuz12-dsh-webui-auth",
  name: "dsh-webui-auth",
  description: "WebUI 身份认证：HTTP/传输层强制登录（资源、插件 bundle、/api、WebSocket 四层防护），服务端会话 + HttpOnly Cookie。",
  longDescription: "WebUI 身份认证：HTTP/传输层强制登录（资源、插件 bundle、/api、WebSocket 四层防护），服务端会话 + HttpOnly Cookie。",
  author: { name: "Yuuz12", url: "https://github.com/Yuuz12" },
  tags: ["Development"],
  category: "tool",
  repository: "https://github.com/Yuuz12/dsh-webui-auth",
  installMethods: [
    {
      name: "GitHub",
      description: "直接从上游 GitHub 仓库安装。",
      command: "dsh plugin --profile web add github:Yuuz12/dsh-webui-auth",
    },
  ],
  links: [
    { name: "Awesome DSH Plugin 收录页", url: "https://awesome-dsh-plugin.com/p/Yuuz12/dsh-webui-auth/" },
  ],
};

