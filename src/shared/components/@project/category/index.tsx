import { cx } from "class-variance-authority";
import { CSSProperties, ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}

export function CategoryProject({ className, children, style }: Props) {
  return (
    <div
      className={cx([
        "p-1.5 text-center text-[10px] font-semibold text-black",
        "bg-neutral-100 rounded-lg leading-none",
        className,
      ])}
      style={style}
    >
      {children}
    </div>
  );
}
