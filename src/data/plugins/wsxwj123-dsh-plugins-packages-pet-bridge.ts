import type { Plugin } from "@/types/plugin";

// Source: awesome-dsh-plugin/awesome-dsh-plugin
// Snapshot: 767a47fbff0b4abbf52bdbfc6a39d64abd01ca69 (2026-08-14)
export const plugin: Plugin = {
  slug: "wsxwj123-dsh-plugins-packages-pet-bridge",
  name: "dsh-plugins#pet-bridge",
  description: "dsh ↔ cc-pet 桌面宠物状态桥：把会话状态（思考中 / 读取文件 / 运行命令 / 完成）实时推送到桌面宠物气泡。",
  longDescription: "dsh ↔ cc-pet 桌面宠物状态桥：把会话状态（思考中 / 读取文件 / 运行命令 / 完成）实时推送到桌面宠物气泡。",
  author: { name: "wsxwj123", url: "https://github.com/wsxwj123" },
  tags: ["Notification"],
  category: "tool",
  repository: "https://github.com/wsxwj123/dsh-plugins/tree/main/packages/pet-bridge",
  installMethods: [
    {
      name: "GitHub",
      description: "从上游 GitHub 仓库的插件子目录安装。",
      command: "dsh plugin --profile web add github:wsxwj123/dsh-plugins#path:/packages/pet-bridge",
    },
  ],
  links: [
    { name: "Awesome DSH Plugin 收录页", url: "https://awesome-dsh-plugin.com/p/wsxwj123/dsh-plugins--packages-pet-bridge/" },
  ],
};

