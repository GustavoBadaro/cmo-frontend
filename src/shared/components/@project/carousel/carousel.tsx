"use client";

import { Splide, SplideTrack, SplideSlide } from "@splidejs/react-splide";
import { SplideArrowsProjects } from "./arrows";
import { CardProject } from "../card";
import { useRef } from "react";
import { cx } from "class-variance-authority";

import "@splidejs/react-splide/css";

interface Props {
  title: string;
}

const options = {
  autoWidth: true,
  gap: 16,
  arrows: false,
  pagination: false,
};

export function SplideCarouselProjects({ title }: Props) {
  const splide = useRef<any>(null);

  const controller = (direction: "prev" | "next") => {
    const splideRef = splide.current?.splide;

    if (splideRef) {
      const prevIndex = splideRef.Components.Controller.getPrev();
      const nextIndex = splideRef.Components.Controller.getNext();

      if (direction === "prev") {
        splideRef.go(prevIndex);
      }

      if (direction === "next") {
        splideRef.go(nextIndex);
      }
    }
  };

  return (
    <>
      <div className="layout mb-8 flex items-center justify-between">
        <h2 className="text-2xl font-semibold max-md:w-[80%]">{title}</h2>
        <SplideArrowsProjects controller={controller} />
      </div>
      <Splide ref={splide} hasTrack={false} options={options}>
        <SplideTrack>
          {Array.from({ length: 12 }).map((_, i) => (
            <SplideSlide
              key={i}
              className={cx([
                "first:pl-[calc((100vw-1280px-16px)/2)] flex",
                "last:pr-[calc((100vw-1280px-16px)/2)]",
              ])}
            >
              <CardProject />
            </SplideSlide>
          ))}
        </SplideTrack>
      </Splide>
    </>
  );
}
