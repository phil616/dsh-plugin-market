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
    <div className="rounded-xl border border-border bg-muted/40">
      <div className="flex flex-col gap-2 p-3 sm:flex-row sm:items-center sm:gap-3">
        <span className="shrink-0 self-start rounded-md border border-border bg-card px-2 py-1 font-mono text-[11px] font-medium uppercase tracking-wider text-muted-foreground sm:self-center">
          {method.name}
        </span>
        <code
          dir="ltr"
          className="min-w-0 flex-1 overflow-x-auto whitespace-nowrap font-mono text-[13px] text-foreground"
        >
          <span className="select-none text-muted-foreground">$ </span>
          {command}
        </code>
        <button
          type="button"
          onClick={handleCopy}
          aria-label={`复制 ${method.name} 的安装命令`}
          className={`flex h-8 shrink-0 items-center gap-1.5 rounded-lg border px-3 text-xs font-medium transition-colors duration-150 ${
            copied
              ? "border-accent bg-accent text-white dark:text-black"
              : "border-border bg-card text-muted-foreground hover:border-accent/60 hover:text-foreground"
          }`}
        >
          {copied ? (
            <Check className="h-3.5 w-3.5" aria-hidden="true" />
          ) : (
            <Copy className="h-3.5 w-3.5" aria-hidden="true" />
          )}
          {copied ? "已复制!" : "复制"}
        </button>
      </div>
      {method.description && (
        <p className="px-3 pb-2.5 text-xs text-muted-foreground sm:pl-[4.7rem]">
          {method.description}
        </p>
      )}
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
    <div>
      <div className="mb-5 flex flex-wrap items-center gap-2">
        <label
          htmlFor="install-profile"
          className="font-mono text-xs font-medium uppercase tracking-wider text-muted-foreground"
        >
          Profile
        </label>
        <input
          id="install-profile"
          type="text"
          value={profile}
          onChange={(e) => setProfile(e.target.value)}
          placeholder={DEFAULT_PROFILE}
          spellCheck={false}
          autoComplete="off"
          className="h-9 w-44 rounded-lg border border-border bg-card px-3 font-mono text-sm outline-none transition-colors duration-150 placeholder:text-muted-foreground/60 focus:border-accent/60 focus:ring-2 focus:ring-ring/40"
        />
        <p className="w-full text-xs text-muted-foreground sm:w-auto">
          将应用到下方所有命令的 <code className="font-mono text-[11px]">--profile</code> 参数。
          您输入的内容不会被保存。
        </p>
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
