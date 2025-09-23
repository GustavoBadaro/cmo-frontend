"use client";

import { Search } from "@/shared/icons";
import { cx } from "class-variance-authority";

interface Props {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
}

export function SearchMultiselect({
  value,
  onChange,
  placeholder = "Buscar...",
  className,
}: Props) {
  const inputId = "search-select-checkbox";

  return (
    <div className={cx("relative mb-5", className)}>
      {/* Ícone */}
      <Search
        aria-hidden="true"
        color="#AEAEB7"
        className="absolute inset-y-0 left-3 my-auto"
      />

      {/* Campo */}
      <input
        id={inputId}
        type="search"
        placeholder={placeholder}
        className={cx([
          "h-12 w-full pl-9 pr-4 border border-neutral-300 rounded-xl",
          "text-sm text-neutral-700 font-normal placeholder-neutral-400",
          "focus:outline-none focus:ring-2 focus:ring-secondary-200",
        ])}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}
