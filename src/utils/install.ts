/**
 * Install-command helpers. Commands are plain text — the site only
 * displays and copies them, it never executes anything.
 */

/** Default agent profile used on detail pages (see plan §16). */
export const DEFAULT_PROFILE = "web";

/**
 * Replace the `--profile <name>` part of a command with the user's
 * profile. If the command has no profile flag (or the input is empty),
 * the command is returned unchanged.
 */
export function applyProfile(command: string, profile: string): string {
  const value = profile.trim();
  if (!value) return command;
  if (!/--profile\s+\S+/.test(command)) return command;
  return command.replace(/--profile\s+\S+/, `--profile ${value}`);
}

/**
 * Best-effort copy to the clipboard with a legacy fallback for contexts
 * where `navigator.clipboard` is unavailable (e.g. non-secure origins).
 * Returns true when the text was copied.
 */
export async function copyText(text: string): Promise<boolean> {
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
      return true;
    }
  } catch {
    // fall through to the legacy path
  }

  try {
    const textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.setAttribute("readonly", "");
    textarea.style.position = "fixed";
    textarea.style.opacity = "0";
    document.body.appendChild(textarea);
    textarea.select();
    const ok = document.execCommand("copy");
    textarea.remove();
    return ok;
  } catch {
    return false;
  }
}
