import type { Plugin } from "@/types/plugin";

// Source: awesome-dsh-plugin/awesome-dsh-plugin
// Snapshot: 767a47fbff0b4abbf52bdbfc6a39d64abd01ca69 (2026-08-14)
export const plugin: Plugin = {
  slug: "jesse-njx-dsh-cowork",
  name: "dsh-cowork",
  description: "doc_read/doc_write：以有界、单元格寻址的方式读写 xlsx / pdf / docx / pptx / ipynb，另附 MCP 服务器与 CLI。",
  longDescription: "doc_read/doc_write：以有界、单元格寻址的方式读写 xlsx / pdf / docx / pptx / ipynb，另附 MCP 服务器与 CLI。",
  author: { name: "Jesse-njx", url: "https://github.com/Jesse-njx" },
  tags: ["Tool"],
  category: "tool",
  repository: "https://github.com/Jesse-njx/dsh-cowork",
  installMethods: [
    {
      name: "GitHub",
      description: "直接从上游 GitHub 仓库安装。",
      command: "dsh plugin --profile web add github:Jesse-njx/dsh-cowork",
    },
  ],
  links: [
    { name: "Awesome DSH Plugin 收录页", url: "https://awesome-dsh-plugin.com/p/Jesse-njx/dsh-cowork/" },
  ],
};

