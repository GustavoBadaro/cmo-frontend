"use client";

import { Button } from "@/ui/button";
import { cx } from "class-variance-authority";
import { CheckboxHeroHome } from "./checkbox";

export function FormHeroHome() {
  return (
    <form action="" className={cx(["mt-6 flex flex-col gap-6"])}>
      <div className="flex items-stretch gap-2">
        <CheckboxHeroHome label="Lançamento" />
        <CheckboxHeroHome label="Em obras" />
        <CheckboxHeroHome label="Pronto para morar" />
      </div>
      <div>bottom</div>
      <Button type="submit" variant="secondary" size="sm">
        Buscar
      </Button>
    </form>
  );
}
