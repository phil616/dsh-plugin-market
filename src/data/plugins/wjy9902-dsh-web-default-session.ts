import type { Plugin } from "@/types/plugin";

// Source: awesome-dsh-plugin/awesome-dsh-plugin
// Snapshot: 767a47fbff0b4abbf52bdbfc6a39d64abd01ca69 (2026-08-14)
export const plugin: Plugin = {
  slug: "wjy9902-dsh-web-default-session",
  name: "dsh-web-default-session",
  description: "点「新会话」默认打开绑定宿主启动目录的「默认目录」工作区（无需选文件夹），工作区选择菜单中也可选该项。",
  longDescription: "点「新会话」默认打开绑定宿主启动目录的「默认目录」工作区（无需选文件夹），工作区选择菜单中也可选该项。",
  author: { name: "wjy9902", url: "https://github.com/wjy9902" },
  tags: ["UI"],
  category: "tool",
  repository: "https://github.com/wjy9902/dsh-web-default-session",
  installMethods: [
    {
      name: "GitHub",
      description: "直接从上游 GitHub 仓库安装。",
      command: "dsh plugin --profile web add github:wjy9902/dsh-web-default-session",
    },
  ],
  links: [
    { name: "Awesome DSH Plugin 收录页", url: "https://awesome-dsh-plugin.com/p/wjy9902/dsh-web-default-session/" },
  ],
};

