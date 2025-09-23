"use client";

import { Splide, SplideTrack, SplideSlide } from "@splidejs/react-splide";
import { cx } from "class-variance-authority";
import { StrapiFile } from "@/core/types/strapi";
import { useEffect, useRef } from "react";
import Image from "next/image";

import "@splidejs/react-splide/css";
import "./styles.css";
import Link from "next/link";

interface Props {
  images: StrapiFile[];
  slug: string;
  onHover?: boolean;
}

const options = {
  type: "fade",
  drag: false,
  arrows: true,
  pagination: true,
  arrowPath: "M16 12L24 20L16 28",
  breakpoints: {
    768: {
      drag: true,
      arrows: false,
    },
  },
};

export function CarouselCardProject({ images, slug, onHover }: Props) {
  const splide = useRef<any>(null);

  const controller = (direction: "prev" | "next") => {
    const splideRef = splide.current?.splide;

    if (splideRef) {
      const prevIndex = 0;
      const nextIndex = splideRef.Components.Controller.getNext();

      if (direction === "prev") {
        splideRef.go(prevIndex);
      }

      if (direction === "next") {
        splideRef.go(nextIndex);
      }
    }
  };

  useEffect(() => {
    if (onHover) controller("next");
    else controller("prev");
  }, [onHover]);

  return (
    <Splide
      ref={splide}
      hasTrack={false}
      options={options}
      className={cx(["w-full h-full"])}
    >
      <SplideTrack className={cx(["w-full h-full"])}>
        {images.map((item) => (
          <SplideSlide key={item.documentId} className={cx(["w-full h-full"])}>
            <Link
              href={`/empreendimentos/${slug}`}
              className="block w-full h-full"
            >
              <Image
                src={item.url}
                width={720}
                height={480}
                alt={item.alternativeText ?? ""}
                className={cx(["w-full h-full object-cover"])}
                loading="lazy"
              />
            </Link>
          </SplideSlide>
        ))}
      </SplideTrack>
    </Splide>
  );
}
