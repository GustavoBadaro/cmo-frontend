"use client";

import { Splide, SplideTrack, SplideSlide } from "@splidejs/react-splide";
import { CardProject } from "../card";
import { cx } from "class-variance-authority";
import { ChevronLeft, ChevronRight } from "@/shared/icons";

import "@splidejs/react-splide/css";

interface Props {
  title: string;
}

const options = {
  autoWidth: true,
  arrows: false,
  gap: 16,
  pagination: false,
};

const styleButton = cx([
  "w-10 h-10 centralize bg-brand-blue rounded-full text-white",
  "hover:bg-secondary-400",
]);

export function SplideCarouselProjects({ title }: Props) {
  return (
    <>
      <div className="layout mb-8 flex items-center justify-between">
        <h2 className="text-2xl font-semibold max-md:w-[80%]">{title}</h2>

        <div className="flex gap-2 max-md:hidden">
          <button type="button" className={cx(["pr-0.5", styleButton])}>
            <ChevronLeft />
          </button>

          <button type="button" className={cx(["pl-0.5", styleButton])}>
            <ChevronRight />
          </button>
        </div>
      </div>
      <Splide hasTrack={false} options={options}>
        <SplideTrack>
          {Array.from({ length: 12 }).map((_, i) => (
            <SplideSlide
              key={i}
              className="first:pl-[calc((100vw-1280px-16px)/2)]"
            >
              <CardProject />
            </SplideSlide>
          ))}
        </SplideTrack>
      </Splide>
    </>
  );
}
