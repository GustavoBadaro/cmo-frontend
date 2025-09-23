"use client";

import { useOutsideClick } from "@/core/hooks/outside-click";
import { ChevronBottom, Check } from "@/shared/icons";
import { cva, cx, VariantProps } from "class-variance-authority";
import { HTMLAttributes, ReactNode, useState } from "react";
import { SearchMultiselect } from "./search";

interface Props
  extends HTMLAttributes<HTMLElement>,
    VariantProps<typeof multiselect> {
  icon?: ReactNode;
  label?: string;
  className?: string;
  placeholder?: string;
  options: Array<{
    title: string;
    value: string;
  }>;
  onSearch?: boolean;
  onChevron?: boolean;
  onChangeSelected?: (values: string[]) => void;
}

const multiselect = cva(
  [
    "!h-11 px-4 flex items-center gap-2 border border-neutral-300 bg-white",
    "whitespace-nowrap text-sm text-center font-medium text-neutral-500",
    "w-fit h-fit leading-none transition-[color,background,border,filter]",
    "hover:text-[#00375A] relative",
  ],
  {
    variants: {
      variant: {
        default: ["rounded-2xl"],
        rounded: ["rounded-full"],
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export function Multiselect({
  options,
  icon,
  label,
  variant,
  placeholder = "Selecione...",
  className,
  onSearch,
  onChevron = true,
  onChangeSelected,
  ...props
}: Props) {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState<string[]>([]);

  const containerRef = useOutsideClick<HTMLDivElement>({
    onOutsideClick: () => setOpen(false),
  });

  function toggleValue(value: string) {
    setSelected((prev) => {
      const newSelected = prev.includes(value)
        ? prev.filter((v) => v !== value)
        : [...prev, value];

      onChangeSelected?.(newSelected);
      return newSelected;
    });
  }

  const displayText =
    label ||
    (selected.length > 0
      ? selected
          .map((v) => options.find((o) => o.value === v)?.title)
          .filter(Boolean)
          .join(", ")
      : placeholder);

  return (
    <div {...props} ref={containerRef} className="relative">
      {/* Botão */}
      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        className={cx(
          multiselect({ variant, className }),
          onChevron && "pr-12"
        )}
        onClick={() => setOpen((prev) => !prev)}
      >
        {icon && <span className="centralize">{icon}</span>}
        {displayText}
        {onChevron && (
          <ChevronBottom
            color="black"
            className="w-3.5 h-3.5 absolute top-1/2 right-4 -translate-y-1/2"
          />
        )}
      </button>

      {/* Dropdown */}
      {open && (
        <div
          className={cx([
            "w-fit p-4 absolute z-30 left-0 top-[calc(100%+0.25rem)]",
            "rounded-2xl bg-white shadow-[0_0_8px_0_rgba(0,0,0,0.2)]",
          ])}
        >
          {/* Busca */}
          {onSearch && (
            <SearchMultiselect
              placeholder={placeholder}
              value={search}
              onChange={setSearch}
            />
          )}

          {/* Lista de opções */}
          <ul
            role="listbox"
            className="max-h-[200px] flex flex-col gap-4 overflow-auto pr-4"
          >
            {options
              .filter((item) =>
                item.title.toLowerCase().includes(search.toLowerCase())
              )
              .map((item) => (
                <li
                  key={item.value}
                  role="option"
                  aria-selected={selected.includes(item.value)}
                >
                  <label
                    className={cx([
                      "flex items-center gap-2 text-sm opacity-60 cursor-pointer",
                      "whitespace-nowrap",
                    ])}
                  >
                    <input
                      type="checkbox"
                      className="peer sr-only"
                      checked={selected.includes(item.value)}
                      onChange={() => toggleValue(item.value)}
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
              ))}
          </ul>
        </div>
      )}
    </div>
  );
}
