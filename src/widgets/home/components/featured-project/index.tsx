import { Specifications } from "@/shared/components/specifications";
import { Button } from "@/ui/button";
import { cx } from "class-variance-authority";

interface Props {
  reverse?: boolean;
}

export function FeaturedProjectHome({ reverse }: Props) {
  return (
    <section className="bg-white py-20">
      <div
        className={cx([
          "layout px-15 gap-28 centralize",
          reverse && "flex-row-reverse",
        ])}
      >
        <div className="flex flex-col gap-6">
          <h2 className="text-[2.5rem] leading-[1.2] font-semibold tracking-wide">
            Seu lugar de destaque, ao lado do Vaca Brava
          </h2>
          <p>Venha viver com todo o conforto e tranquilidade que você merece</p>

          <Specifications
            items={[
              { icon: undefined, text: "65 - 180m²" },
              { icon: undefined, text: "2Q - 3Q" },
            ]}
          />

          <Button>Conheça</Button>
        </div>

        <figure
          className={cx([
            "max-w-[504px] min-w-[504px] h-full aspect-[1/0.925]",
            "block relative overflow-hidden bg-neutral-200",
          ])}
        ></figure>
      </div>
    </section>
  );
}
