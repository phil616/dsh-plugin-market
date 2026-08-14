import type { Plugin } from "@/types/plugin";

// Source: awesome-dsh-plugin/awesome-dsh-plugin
// Snapshot: 767a47fbff0b4abbf52bdbfc6a39d64abd01ca69 (2026-08-14)
export const plugin: Plugin = {
  slug: "samxiabing-dsh-adb",
  name: "dsh-adb",
  description: "ADB 设备·台架运维工具集：设备发现、结构化 logcat（后台采集）、apk 安装、文件 pull/push、性能快照。",
  longDescription: "ADB 设备·台架运维工具集：设备发现、结构化 logcat（后台采集）、apk 安装、文件 pull/push、性能快照。",
  author: { name: "SamXiaBing", url: "https://github.com/SamXiaBing" },
  tags: ["Tool"],
  category: "tool",
  repository: "https://github.com/SamXiaBing/dsh-adb",
  installMethods: [
    {
      name: "GitHub",
      description: "直接从上游 GitHub 仓库安装。",
      command: "dsh plugin --profile web add github:SamXiaBing/dsh-adb",
    },
  ],
  links: [
    { name: "Awesome DSH Plugin 收录页", url: "https://awesome-dsh-plugin.com/p/SamXiaBing/dsh-adb/" },
  ],
};

