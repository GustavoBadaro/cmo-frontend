"use client";

import { cx } from "class-variance-authority";
import { InputHTMLAttributes, ReactNode } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  icon?: ReactNode;
}

export function CheckboxHeroHome({ label, icon, ...props }: Props) {
  return (
    <label className={cx(["w-full flex items-center gap-2 cursor-pointer"])}>
      <input type="checkbox" {...props} className="peer hidden" />
      <div
        className={cx([
          "w-full flex justify-start items-center gap-2 px-4 py-2",
          "rounded-full border border-neutral-300 bg-white",
          "transition-colors hover:text-[#00375A]",
          "peer-checked:bg-[#F2F6FF] peer-checked:text-[#00375A]",
        ])}
      >
        {icon && <span>{icon}</span>}
        <strong className="text-sm font-medium text-neutral-500">
          {label}
        </strong>
      </div>
    </label>
  );
}
