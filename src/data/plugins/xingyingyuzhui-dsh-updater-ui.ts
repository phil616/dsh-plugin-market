import type { Plugin } from "@/types/plugin";

// Source: awesome-dsh-plugin/awesome-dsh-plugin
// Snapshot: 767a47fbff0b4abbf52bdbfc6a39d64abd01ca69 (2026-08-14)
export const plugin: Plugin = {
  slug: "xingyingyuzhui-dsh-updater-ui",
  name: "dsh-updater-ui",
  description: "设置页中的 DSH 自助更新器：一键检查/拉取（git pull --ff-only）、自动后台检查、版本对比与更新说明预览，带红点提醒。",
  longDescription: "设置页中的 DSH 自助更新器：一键检查/拉取（git pull --ff-only）、自动后台检查、版本对比与更新说明预览，带红点提醒。",
  author: { name: "xingyingyuzhui", url: "https://github.com/xingyingyuzhui" },
  tags: ["Development"],
  category: "tool",
  repository: "https://github.com/xingyingyuzhui/dsh-updater-ui",
  installMethods: [
    {
      name: "GitHub",
      description: "直接从上游 GitHub 仓库安装。",
      command: "dsh plugin --profile web add github:xingyingyuzhui/dsh-updater-ui",
    },
  ],
  links: [
    { name: "Awesome DSH Plugin 收录页", url: "https://awesome-dsh-plugin.com/p/xingyingyuzhui/dsh-updater-ui/" },
  ],
};

