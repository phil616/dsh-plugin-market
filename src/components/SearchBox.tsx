import { Search, X } from "lucide-react";

interface Props {
  value: string;
  onChange: (value: string) => void;
  id?: string;
  placeholder?: string;
  autoFocus?: boolean;
}

export default function SearchBox({
  value,
  onChange,
  id = "plugin-search",
  placeholder = "搜索插件…",
  autoFocus = false,
}: Props) {
  return (
    <div className="relative">
      <Search
        className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
        aria-hidden="true"
      />
      <label htmlFor={id} className="sr-only">
        搜索插件
      </label>
      <input
        id={id}
        type="search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        autoFocus={autoFocus}
        autoComplete="off"
        spellCheck={false}
        className="h-12 w-full rounded-xl border border-border bg-card pl-10 pr-10 text-sm shadow-sm outline-none transition-[border-color,box-shadow] duration-150 placeholder:text-muted-foreground/75 hover:border-muted-foreground/40 focus:border-accent focus:ring-4 focus:ring-ring/15"
      />
      {value.length > 0 && (
        <button
          type="button"
          onClick={() => onChange("")}
          aria-label="清除搜索"
          className="absolute right-2 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-lg text-muted-foreground transition-colors duration-150 hover:bg-muted hover:text-foreground"
        >
          <X className="h-4 w-4" aria-hidden="true" />
        </button>
      )}
    </div>
  );
}
