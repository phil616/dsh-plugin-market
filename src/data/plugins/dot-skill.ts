import type { Plugin } from "@/types/plugin";

/**
 * 真实插件：dot-skill（同事.skill）（https://github.com/titanwings/colleague-skill）
 * 将"人"蒸馏为 AI Skill 的通用技能引擎，DeepSeek Harness 原生支持。
 */
export const dotSkillPlugin: Plugin = {
  slug: "dot-skill",

  name: "dot-skill",

  description: "把同事、家人或偶像蒸馏成 AI Skill，让智能体真正像他们一样思考与表达。",

  longDescription:
    "dot-skill（同事.skill）由 titanwings 开发、上海 AI 实验室支持，它把“人”蒸馏成 AI Skill：同事、伴侣、家人、偶像，甚至你自己——只要提供素材和一段描述，就能生成一个真正“像他们一样思考、用他们的口吻说话”的 Skill。支持三类人物族：colleague（同事）、relationship（亲密关系）、celebrity（名人），各自配有独立的提示词管线、素材采集策略与生成模板。DeepSeek Harness 通过原生文件系统 Skill 发现直接支持：克隆到 ~/.dsh/skills/dot-skill（或项目 .dsh/skills/dot-skill）后输入 /dot-skill 即可使用；同时兼容 Claude Code、Hermes、OpenClaw、Codex 等宿主。",

  author: {
    name: "titanwings",
    url: "https://github.com/titanwings",
  },

  tags: ["Skill", "Persona", "AI"],

  repository: "https://github.com/titanwings/colleague-skill",

  documentation: "https://github.com/titanwings/colleague-skill/blob/dot-skill/INSTALL.md",

  license: "MIT",

  installMethods: [
    {
      name: "dsh 全局",
      description: "全局安装到 ~/.dsh/skills，所有项目可用；安装后输入 /dot-skill 启动。",
      command: "git clone https://github.com/titanwings/colleague-skill ~/.dsh/skills/dot-skill",
    },
    {
      name: "dsh 项目",
      description: "仅当前项目可用：安装到项目内的 .dsh/skills。",
      command: "git clone https://github.com/titanwings/colleague-skill .dsh/skills/dot-skill",
    },
    {
      name: "GitHub",
      description: "克隆仓库查看源码与安装文档（默认分支 dot-skill）。",
      command: "git clone https://github.com/titanwings/colleague-skill",
    },
  ],

  links: [
    { name: "技术报告（arXiv）", url: "https://arxiv.org/abs/2605.31264" },
    { name: "社区画廊", url: "https://titanwings.github.io/colleague-skill-site/" },
  ],

  featured: true,
};
