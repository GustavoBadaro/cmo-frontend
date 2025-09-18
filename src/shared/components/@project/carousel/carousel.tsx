"use client";

import { Splide, SplideTrack, SplideSlide } from "@splidejs/react-splide";
import { CardProject } from "../card";

import "@splidejs/react-splide/css";

const options = {
  autoWidth: true,
  arrows: false,
  gap: 16,
};

export function SplideCarouselProjects() {
  return (
    <>
      <div className="layout mb-8 flex items-center justify-between">
        <h2 className="text-2xl font-semibold">
          Confira nossos empreendimentos
        </h2>
      </div>
      <Splide hasTrack={false} options={options}>
        <SplideTrack>
          <SplideSlide className="first:pl-[calc((100vw-1280px-16px)/2)]">
            <CardProject />
          </SplideSlide>
          <SplideSlide>
            <CardProject />
          </SplideSlide>
          <SplideSlide>
            <CardProject />
          </SplideSlide>
          <SplideSlide>
            <CardProject />
          </SplideSlide>
          <SplideSlide>
            <CardProject />
          </SplideSlide>
        </SplideTrack>
      </Splide>
    </>
  );
}
