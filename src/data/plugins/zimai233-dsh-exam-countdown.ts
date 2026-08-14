import type { Plugin } from "@/types/plugin";

// Source: awesome-dsh-plugin/awesome-dsh-plugin
// Snapshot: 767a47fbff0b4abbf52bdbfc6a39d64abd01ca69 (2026-08-14)
export const plugin: Plugin = {
  slug: "zimai233-dsh-exam-countdown",
  name: "dsh-exam-countdown",
  description: "查询 64 场中国考试（高考/考研/四六级/CPA/法考…）的规则日期（第二个周六、第一个周日）与倒计时。",
  longDescription: "查询 64 场中国考试（高考/考研/四六级/CPA/法考…）的规则日期（第二个周六、第一个周日）与倒计时。",
  author: { name: "zimai233", url: "https://github.com/zimai233" },
  tags: ["Tool"],
  category: "tool",
  repository: "https://github.com/zimai233/dsh-exam-countdown",
  installMethods: [
    {
      name: "GitHub",
      description: "直接从上游 GitHub 仓库安装。",
      command: "dsh plugin --profile web add github:zimai233/dsh-exam-countdown",
    },
  ],
  links: [
    { name: "Awesome DSH Plugin 收录页", url: "https://awesome-dsh-plugin.com/p/zimai233/dsh-exam-countdown/" },
  ],
};

