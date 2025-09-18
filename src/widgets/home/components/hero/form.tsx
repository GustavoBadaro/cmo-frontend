"use client";

import { Button } from "@/ui/button";
import { cx } from "class-variance-authority";
import { CheckboxHeroHome } from "./checkbox";
import { Home, Star, Work } from "@/shared/icons";

export function FormHeroHome() {
  return (
    <form action="" className={cx(["mt-6 flex flex-col gap-6"])}>
      <div className="flex items-stretch gap-2">
        <CheckboxHeroHome label="Lançamento" icon={<Star />} />
        <CheckboxHeroHome label="Em obras" icon={<Work />} />
        <CheckboxHeroHome label="Pronto para morar" icon={<Home />} />
      </div>
      <div>bottom</div>
      <Button type="submit" variant="secondary">
        Buscar
      </Button>
    </form>
  );
}
