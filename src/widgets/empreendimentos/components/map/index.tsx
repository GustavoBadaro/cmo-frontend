import { Expand } from "@/shared/icons";
import { Button } from "@/ui/button";
import { cx } from "class-variance-authority";

export function MapProjects() {
  return (
    <section className="w-full h-[300px] relative">
      <figure className="centralize w-full h-full bg-neutral-200">
        Google Maps
      </figure>
      <Button
        size="sm"
        className={cx([
          "!text-brand-blue bg-white absolute bottom-6 hover:!text-white",
          "min-[1600px]:right-[calc((100vw-1280px)/2)]",
          "right-[calc((100vw-1280px+2.5rem)/2)]",
          "max-xl:right-10 max-lg:right-6 group",
        ])}
      >
        <Expand
          color="black"
          className="transition-all group-hover:stroke-white"
        />
        Ampliar mapa
      </Button>
    </section>
  );
}
