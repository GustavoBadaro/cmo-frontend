import { Button } from "@/ui/button";
import { cx } from "class-variance-authority";

export function MapProjects() {
  return (
    <section className="w-full h-[300px] relative">
      <figure className="centralize w-full h-full bg-neutral-200">
        Google Maps
      </figure>
      <Button
        className={cx([
          "!text-brand-blue bg-white absolute bottom-6",
          "min-[1600px]:right-[calc((100vw-1280px)/2)]",
          "right-[calc((100vw-1280px+2.5rem)/2)]",
          "max-xl:right-10 max-lg:right-6",
        ])}
      >
        Ampliar mapa
      </Button>
    </section>
  );
}
