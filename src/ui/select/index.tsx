"use client";

import { cva, cx, VariantProps } from "class-variance-authority";
import { HTMLAttributes, ReactNode, useState } from "react";
import { useOutsideClick } from "@/core/hooks/outside-click";
import { ChevronBottom } from "@/shared/icons";
import { SearchSelect } from "./search";
import { ListSelect } from "./list";

interface Props
  extends HTMLAttributes<HTMLElement>,
    VariantProps<typeof select> {
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
  onChangeSelected?: (value: string | null) => void;
}

const select = cva(
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

export function Select({
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
  const [selected, setSelected] = useState<string | null>(null);

  const containerRef = useOutsideClick<HTMLDivElement>({
    onOutsideClick: () => setOpen(false),
  });

  const toggleValue = (value: string) => {
    setSelected((prev) => {
      const newValue = prev === value ? null : value;

      onChangeSelected?.(newValue);
      setOpen(false);

      return newValue;
    });
  };

  const displayText =
    label ||
    (selected ? options.find((o) => o.value === selected)?.title : placeholder);

  return (
    <div {...props} ref={containerRef} className="relative">
      {/* Botão */}
      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        className={cx(select({ variant, className }), onChevron && "pr-12")}
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
            <SearchSelect
              placeholder={placeholder}
              value={search}
              onChange={setSearch}
            />
          )}

          {/* Lista de opções */}
          <ListSelect
            options={options}
            search={search}
            selected={selected}
            toggleValue={(value) => toggleValue(value)}
          />
        </div>
      )}
    </div>
  );
}
