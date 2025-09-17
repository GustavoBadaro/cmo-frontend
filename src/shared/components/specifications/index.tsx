import { cx } from "class-variance-authority";
import { ReactNode } from "react";

interface Props {
  items: Array<{
    icon: ReactNode;
    text: string;
  }>;
  className?: string;
}

export function Specifications({ items, className }: Props) {
  return (
    <div className={cx(["flex items-center py-2", className])}>
      {items.map((item, index) => (
        <div
          key={index}
          className={cx([
            "flex gap-2.5 items-center pr-4 mr-4 ",
            "border-r border-r-black/10 last:border-0",
          ])}
        >
          {item.icon && <span>{item.icon}</span>}
          <strong className="text-xs text-black uppercase font-semibold">
            {item.text}
          </strong>
        </div>
      ))}
    </div>
  );
}
