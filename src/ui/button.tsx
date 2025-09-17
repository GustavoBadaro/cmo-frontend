import { cva, cx, VariantProps } from "class-variance-authority";
import { ButtonHTMLAttributes, HTMLAttributeAnchorTarget } from "react";

import Link from "next/link";

interface Props
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof button> {
  href?: string;
  target?: HTMLAttributeAnchorTarget;
}

const button = cva(
  [
    "centralize gap-2 whitespace-nowrap text-sm text-center font-medium",
    "w-fit rounded-full transition-[color,background,border,filter]",
  ],
  {
    variants: {
      variant: {
        default: [
          "px-6 bg-[#00375A] text-white",
          "[&:not(:disabled)]:hover:bg-secondary-400",
        ],
        secondary: [
          "px-6 bg-secondary-500 text-white",
          "[&:not(:disabled)]:hover:bg-secondary-400",
        ],
        outline: [
          "bg-transparent border border-[#00375A] text-[#00375A]",
          "[&:not(:disabled)]:hover:border-secondary-400",
          "[&:not(:disabled)]:hover:text-secondary-400",
        ],
      },
      size: {
        sm: ["py-2.5"],
        md: ["py-3.5"],
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
);

export function Button({
  type = "button",
  href,
  target,
  variant,
  size,
  className,
  children,
  disabled,
  ...props
}: Props) {
  if (href && !disabled) {
    return (
      <Link
        href={href}
        target={target}
        aria-label={props["aria-label"]}
        className={button({
          variant,
          size,
          className,
        })}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={button({
        variant,
        size,
        className,
      })}
      {...props}
    >
      {children}
      {disabled && (
        <div
          className={cx([
            "w-4 h-4 rounded-full animate-spin",
            "border-2 border-white border-b-white/50",
          ])}
        />
      )}
    </button>
  );
}
