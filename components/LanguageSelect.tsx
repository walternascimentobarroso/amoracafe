"use client";

import { useI18n } from "@/components/I18nProvider";
import type { Language } from "@/lib/i18n";

const availableLanguages: Array<{ value: Language; label: string }> = [
  { value: "pt", label: "PT" },
  { value: "en", label: "EN" }
];

export function LanguageSelect() {
  const { language, setLanguage, copy } = useI18n();

  return (
    <label className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/15 px-3 py-2 text-xs font-semibold text-zinc-700 shadow-sm backdrop-blur-md transition dark:border-white/20 dark:bg-zinc-900/40 dark:text-zinc-100">
      <span>{copy.header.languageLabel}</span>
      <select
        value={language}
        onChange={(event) => {
          setLanguage(event.target.value as Language);
        }}
        className="bg-transparent text-xs font-semibold outline-none"
        aria-label={copy.header.languageLabel}
      >
        {availableLanguages.map((item) => (
          <option key={item.value} value={item.value} className="text-zinc-900">
            {item.label}
          </option>
        ))}
      </select>
    </label>
  );
}
