import { useMemo, useState } from "react";
import { Check, Copy } from "lucide-react";
import type { InstallMethod } from "@/types/plugin";
import { applyProfile, copyText, DEFAULT_PROFILE } from "@/utils/install";

/** One install method row: name, command, copy button with feedback. */
export function InstallBox({ method, profile }: { method: InstallMethod; profile: string }) {
  const [copied, setCopied] = useState(false);

  const command = useMemo(
    () => applyProfile(method.command, profile),
    [method.command, profile],
  );

  const handleCopy = async () => {
    const ok = await copyText(command);
    if (ok) {
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1500);
    }
  };

  return (
    <div className="min-w-0 overflow-hidden rounded-xl border border-border bg-card shadow-sm">
      <div className="flex min-h-12 items-center gap-3 border-b border-border bg-surface/45 px-3.5 py-2.5 sm:px-4">
        <span className="shrink-0 rounded-md border border-border bg-card px-2 py-1 font-mono text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
          {method.name}
        </span>
        {method.description && (
          <p className="min-w-0 text-xs leading-5 text-muted-foreground">{method.description}</p>
        )}
      </div>
      <div className="flex items-start gap-2 bg-code p-2.5 sm:items-center sm:p-3">
        <code
          dir="ltr"
          className="min-w-0 flex-1 overflow-x-auto whitespace-nowrap px-1.5 py-2 font-mono text-[12px] leading-5 text-code-foreground sm:text-[13px]"
        >
          <span className="select-none text-accent">$ </span>
          {command}
        </code>
        <button
          type="button"
          onClick={handleCopy}
          aria-label={`复制 ${method.name} 的安装命令`}
          className={`flex h-9 shrink-0 items-center gap-1.5 rounded-lg border px-3 text-xs font-semibold transition-colors duration-150 ${
            copied
              ? "border-accent bg-accent text-accent-foreground"
              : "border-white/15 bg-white/8 text-code-foreground hover:border-white/30 hover:bg-white/12"
          }`}
        >
          {copied ? (
            <Check className="h-3.5 w-3.5" aria-hidden="true" />
          ) : (
            <Copy className="h-3.5 w-3.5" aria-hidden="true" />
          )}
          {copied ? "已复制" : "复制"}
        </button>
      </div>
    </div>
  );
}

/**
 * The whole installation section: a profile input (default "web", never
 * persisted) plus one InstallBox per method. Commands update live when
 * the profile changes (plan §15–16).
 */
export function InstallPanel({ methods }: { methods: InstallMethod[] }) {
  const [profile, setProfile] = useState(DEFAULT_PROFILE);

  return (
    <div className="min-w-0">
      <div className="surface-card mb-5 bg-surface/30 p-4">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end">
          <div className="w-full sm:w-48">
            <label
              htmlFor="install-profile"
              className="mb-1.5 block text-xs font-semibold text-foreground"
            >
              配置名称
            </label>
            <input
              id="install-profile"
              type="text"
              value={profile}
              onChange={(e) => setProfile(e.target.value)}
              placeholder={DEFAULT_PROFILE}
              spellCheck={false}
              autoComplete="off"
              className="h-10 w-full rounded-xl border border-border bg-card px-3 font-mono text-sm shadow-sm outline-none transition-[border-color,box-shadow] duration-150 placeholder:text-muted-foreground/60 hover:border-muted-foreground/40 focus:border-accent focus:ring-4 focus:ring-ring/15"
            />
          </div>
          <p className="pb-0.5 text-xs leading-5 text-muted-foreground">
            自动替换下方命令中的 <code className="rounded bg-muted px-1 py-0.5 font-mono text-[11px] text-foreground">--profile</code>
            参数；内容仅保留在当前页面。
          </p>
        </div>
      </div>

      <div className="space-y-3">
        {methods.map((m) => (
          <InstallBox key={m.name} method={m} profile={profile} />
        ))}
      </div>
    </div>
  );
}

export default InstallPanel;
