import { cx } from "class-variance-authority";
import { InputHTMLAttributes, ReactNode } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  icon?: ReactNode;
  error?: boolean;
}

export function InputContactForm({ icon, error, ...props }: Props) {
  return (
    <label className="relative">
      {icon && (
        <span className="absolute top-1/2 -translate-1/2 left-7">{icon}</span>
      )}
      <input
        type="text"
        {...props}
        className={cx([
          "flex-1 w-full px-4 py-3 border-2 border-[#AEAEB71A] bg-white/10",
          "flex gap-3 rounded-full text-sm text-white",
          "max-md:rounded-2xl",
          icon && "pl-11",
          error && "border-[#FF3724] !text-[#FF3724]",
        ])}
      />
    </label>
  );
}
