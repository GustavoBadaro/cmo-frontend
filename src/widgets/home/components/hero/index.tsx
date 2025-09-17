import { cx } from "class-variance-authority";
import { FormHeroHome } from "./form";

export function HeroHome() {
  return (
    <section className="bg-neutral-200">
      <div className={cx(["layout h-[60vh] max-h-[580px] flex items-center"])}>
        <div className={cx("max-w-[600px] w-full p-8 rounded-2xl bg-white")}>
          <h1 className={cx(["text-2xl tracking-wide font-semibold"])}>
            Que tipo de imóvel você busca?
          </h1>
          <FormHeroHome />
        </div>
      </div>
    </section>
  );
}
