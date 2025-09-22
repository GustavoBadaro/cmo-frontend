"use client";

import { cx } from "class-variance-authority";
import { VariationsProject } from "../variations";
import { Bed, Ruler } from "@/shared/icons";
import { CategoryProject } from "../category";

interface Props {
  className?: string;
}

export function CardProject({ className }: Props) {
  return (
    <div className={cx(["max-w-[295px] w-full", className])}>
      <figure
        className={cx([
          "w-[295px] aspect-[1/0.85] relative overflow-hidden rounded-xl",
          "bg-neutral-200",
        ])}
      >
        <CategoryProject className="absolute top-2.5 left-2.5">
          Categoria
        </CategoryProject>
      </figure>
      <div className="flex flex-col gap-1.5">
        <strong className="font-medium tracking-wide">
          Ilumi Bueno Residências
        </strong>
        <span className="text-sm opacity-60">Setor Bueno</span>
      </div>

      <VariationsProject
        items={[
          {
            icon: <Ruler color="black" className="opacity-40" />,
            text: "65 - 180m²",
          },
          {
            icon: <Bed color="black" className="opacity-40" />,
            text: "2Q - 3Q",
          },
        ]}
      />
    </div>
  );
}
