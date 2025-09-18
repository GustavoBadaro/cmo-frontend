import { cx } from "class-variance-authority";
import { InputHTMLAttributes, ReactNode } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  icon?: ReactNode;
}

export function InputContactForm({ icon, ...props }: Props) {
  return (
    <label className="relative">
      {icon && (
        <span className="absolute top-1/2 -translate-1/2 left-7">{icon}</span>
      )}
      <input
        type="text"
        {...props}
        className={cx([
          "flex-1 w-full p-4 border-2 border-[#AEAEB71A] bg-white/10",
          "flex gap-3 rounded-full text-sm text-white",
          "max-md:py-3 max-md:rounded-2xl",
          icon && "pl-12",
        ])}
      />
    </label>
  );
}
