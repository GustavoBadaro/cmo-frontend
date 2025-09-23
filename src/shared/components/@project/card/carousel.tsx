"use client";

import { Splide, SplideTrack, SplideSlide } from "@splidejs/react-splide";
import { cx } from "class-variance-authority";
import { StrapiFile } from "@/core/types/strapi";
import Image from "next/image";

import "@splidejs/react-splide/css";

interface Props {
  images: StrapiFile[];
}

const options = {
  drag: false,
  arrows: true,
  pagination: true,
  breakpoints: {
    768: {
      drag: true,
    },
  },
};

export function CarouselCardProject({ images }: Props) {
  return (
    <Splide
      hasTrack={false}
      options={options}
      className={cx(["w-full h-full"])}
    >
      <SplideTrack className={cx(["w-full h-full"])}>
        {images.map((item) => (
          <SplideSlide key={item.documentId} className={cx(["w-full h-full"])}>
            <Image
              src={item.url}
              width={720}
              height={480}
              alt={item.alternativeText ?? ""}
              className={cx(["w-full h-full object-cover"])}
              loading="lazy"
            />
          </SplideSlide>
        ))}
      </SplideTrack>
    </Splide>
  );
}
