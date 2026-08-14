import type { Plugin } from "@/types/plugin";

// Source: awesome-dsh-plugin/awesome-dsh-plugin
// Snapshot: 767a47fbff0b4abbf52bdbfc6a39d64abd01ca69 (2026-08-14)
export const plugin: Plugin = {
  slug: "forrestchang-dsh-multica-runtime",
  name: "dsh-multica-runtime",
  description: "让 dsh 运行时跑在 Multica 上。",
  longDescription: "让 dsh 运行时跑在 Multica 上。",
  author: { name: "forrestchang", url: "https://github.com/forrestchang" },
  tags: ["Development"],
  category: "tool",
  repository: "https://github.com/forrestchang/dsh-multica-runtime",
  installMethods: [
    {
      name: "GitHub",
      description: "直接从上游 GitHub 仓库安装。",
      command: "dsh plugin --profile web add github:forrestchang/dsh-multica-runtime",
    },
  ],
  links: [
    { name: "Awesome DSH Plugin 收录页", url: "https://awesome-dsh-plugin.com/p/forrestchang/dsh-multica-runtime/" },
  ],
};

