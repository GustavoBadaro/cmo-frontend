"use client";

import { useOutsideClick } from "@/core/hooks/outside-click";
import { ChevronBottom } from "@/shared/icons/chevron-bottom";
import { cva, cx, VariantProps } from "class-variance-authority";
import { HTMLAttributes, ReactNode, useState } from "react";

interface Props
  extends HTMLAttributes<HTMLElement>,
    VariantProps<typeof selectCheckbox> {
  icon: ReactNode;
  className?: string;
  placeholder?: string;
  options: Array<{
    title: string;
    value: string;
  }>;
  onSearch?: boolean;
  onChevron?: boolean;
}

const selectCheckbox = cva(
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

export function SelectCheckbox({
  options,
  icon,
  variant,
  placeholder,
  className,
  onChevron = true,
  ...props
}: Props) {
  const [open, setOpen] = useState(false);

  const containerRef = useOutsideClick<HTMLDivElement>({
    onOutsideClick: () => setOpen(false),
  });

  return (
    <div {...props} ref={containerRef} className={cx(["relative"])}>
      {/* Button */}
      <button
        type="button"
        className={selectCheckbox({
          variant,
          className,
        })}
        onClick={() => setOpen(!open)}
      >
        {icon && <span className="centralize">{icon}</span>}
        {placeholder}
        {onChevron && (
          <ChevronBottom
            color="black"
            className="w-3.5 h-3.5 absolute top-1/2 right-2.5 -translate-1/2"
          />
        )}
      </button>

      {/* Drop */}
      {open && (
        <div
          className={cx([
            "w-fit p-4 absolute z-30 left-0 top-[calc(100%+0.25rem)] ",
            "rounded-2xl bg-white shadow-[0_0_8px_0_rgba(0,0,0,0.2)]",
          ])}
        >
          <ul className="max-h-[200px] flex flex-col gap-4 overflow-auto pr-4">
            {options.map((item) => (
              <li key={item.value}>
                <label
                  className={cx(["flex items-center gap-2 text-sm opacity-60"])}
                >
                  <input type="checkbox" className="peer hidden" />
                  <span
                    className={cx([
                      "w-5 h-5 centralize rounded-md border border-neutral-400",
                      "peer-checked:bg-secondary-200 peer-checked:border-secondary-200",
                    ])}
                  />
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
