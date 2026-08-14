import type { Plugin } from "@/types/plugin";

// Source: awesome-dsh-plugin/awesome-dsh-plugin
// Snapshot: 767a47fbff0b4abbf52bdbfc6a39d64abd01ca69 (2026-08-14)
export const plugin: Plugin = {
  slug: "lynx-gt-dsh-subagent-tools",
  name: "dsh-subagent-tools",
  description: "子代理委派的按调用覆盖：model/provider/persona/toolFilter、@preset: 引用与 provider/model 组合 id。",
  longDescription: "子代理委派的按调用覆盖：model/provider/persona/toolFilter、@preset: 引用与 provider/model 组合 id。",
  author: { name: "lynx-gt", url: "https://github.com/lynx-gt" },
  tags: ["Tool"],
  category: "tool",
  repository: "https://github.com/lynx-gt/dsh-subagent-tools",
  installMethods: [
    {
      name: "GitHub",
      description: "直接从上游 GitHub 仓库安装。",
      command: "dsh plugin --profile web add github:lynx-gt/dsh-subagent-tools",
    },
  ],
  links: [
    { name: "Awesome DSH Plugin 收录页", url: "https://awesome-dsh-plugin.com/p/lynx-gt/dsh-subagent-tools/" },
  ],
};

