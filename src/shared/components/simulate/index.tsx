import { Button } from "@/ui/button";
import { cx } from "class-variance-authority";

export function Simulate() {
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
              Simule seu financiamento
            </h2>
            <p className="text-xl leading-none opacity-70 max-md:text-base">
              Nós estamos com você em cada etapa da realização do seu sonho
            </p>
          </div>

          <Button className="max-md:w-full">Simule agora</Button>
        </div>
      </div>
    </section>
  );
}
