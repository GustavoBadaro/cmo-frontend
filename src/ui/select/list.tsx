"use client";

import { Check } from "@/shared/icons";
import { cx } from "class-variance-authority";

interface Props {
  options: Array<{
    title: string;
    value: string;
  }>;
  search: string;
  selected: string | null;
  toggleValue: (value: string) => void;
}

export function ListSelect({ options, search, selected, toggleValue }: Props) {
  return (
    <ul
      role="listbox"
      className="max-h-[200px] flex flex-col gap-4 overflow-auto pr-4"
    >
      {options
        .filter((item) =>
          item.title.toLowerCase().includes(search.toLowerCase())
        )
        .map((item) => {
          const isSelected = selected === item.value;
          return (
            <li key={item.value} role="option" aria-selected={isSelected}>
              <label
                className={cx([
                  "flex items-center gap-2 text-sm opacity-60 cursor-pointer",
                  "whitespace-nowrap",
                ])}
              >
                <input
                  type="checkbox"
                  className="peer sr-only"
                  checked={isSelected}
                  readOnly
                  onClick={() => toggleValue(item.value)}
                />
                <span
                  className={cx(
                    "w-5 h-5 centralize rounded-md border border-neutral-400",
                    "peer-checked:bg-secondary-200 peer-checked:border-secondary-200",
                    "[&>svg]:opacity-0 [&>svg]:scale-95",
                    "peer-checked:[&>svg]:opacity-100 peer-checked:[&>svg]:scale-100",
                    "transition-all duration-150 ease-in-out"
                  )}
                >
                  <Check color="#F58220" />
                </span>
                {item.title}
              </label>
            </li>
          );
        })}
    </ul>
  );
}
