import { ComponentSimpleCTA } from "@/core/types/strapi";
import { Button } from "@/ui/button";
import { cx } from "class-variance-authority";

interface Props {
  data: ComponentSimpleCTA;
}

export function SimpleCTA({ data }: Props) {
  return (
    <section className="w-full bg-white py-10">
      <div className="layout">
        <div
          className={cx([
            "flex items-center gap-2 p-10 rounded-3xl bg-[#E3E6ED]",
            "max-md:p-8 max-md:flex-col max-md:gap-8",
          ])}
        >
          <div className="flex-1 flex flex-col gap-2 max-md:gap-3">
            <h2 className="text-2xl tracking-wide font-semibold max-md:text-xl">
              {data.title}
            </h2>

            {data.description && (
              <p className="text-xl leading-none opacity-70 max-md:text-base">
                {data.description}
              </p>
            )}
          </div>

          <Button
            href={data.button.url}
            target={data.button.target}
            className="max-md:w-full"
          >
            {data.button.label}
          </Button>
        </div>
      </div>
    </section>
  );
}
