"use client";

import { Splide, SplideTrack, SplideSlide } from "@splidejs/react-splide";
import { StrapiProject } from "@/core/types/strapi";
import { SplideArrowsProjects } from "./arrows";
import { CardProject } from "../card";
import { useRef } from "react";
import { cx } from "class-variance-authority";

import "@splidejs/react-splide/css";

interface Props {
  title: string;
  data: StrapiProject[];
}

const options = {
  autoWidth: true,
  gap: 16,
  arrows: false,
  pagination: false,
};

export function SplideCarouselProjects({ title, data }: Props) {
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
          {data.map((item) => (
            <SplideSlide
              key={item.id}
              className={cx([
                "flex",
                "min-[1600px]:first:pl-[calc((100vw-1280px-1rem)/2)]",
                "min-[1600px]:last:pr-[calc((100vw-1280px-1rem)/2)]",
                "first:pl-[calc((100vw-1280px+5rem)/2)]",
                "last:pr-[calc((100vw-1280px+5rem)/2)]",
                "max-xl:first:pl-10 max-xl:last:pr-10",
                "max-lg:first:pl-6 max-lg:last:pr-6",
              ])}
            >
              <CardProject data={item} />
            </SplideSlide>
          ))}
        </SplideTrack>
      </Splide>
    </>
  );
}
