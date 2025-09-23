"use client";

import { cx } from "class-variance-authority";
import { ChevronLeft, ChevronRight } from "@/shared/icons";

interface Props {
  controller: (direction: "prev" | "next") => void;
}

const styleButton = cx([
  "w-10 h-10 centralize bg-brand-blue rounded-full text-white",
  "hover:bg-secondary-400",
]);

export function SplideArrowsProjects({ controller }: Props) {
  return (
    <div className="flex gap-2 max-md:hidden">
      <button
        type="button"
        className={cx(["pr-0.5", styleButton])}
        onClick={() => controller("prev")}
      >
        <ChevronLeft />
      </button>

      <button
        type="button"
        className={cx(["pl-0.5", styleButton])}
        onClick={() => controller("next")}
      >
        <ChevronRight />
      </button>
    </div>
  );
}
