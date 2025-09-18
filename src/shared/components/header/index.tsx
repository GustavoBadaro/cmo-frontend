import { Button } from "@/ui/button";
import { cx } from "class-variance-authority";
import { NavigationHeader } from "./nav";
import Link from "next/link";

export function Header() {
  return (
    <header className={cx(["w-full bg-white"])}>
      <div className="layout flex items-center justify-between">
        <Link href="/">CMO</Link>

        <div className="flex gap-12 items-stretch">
          <NavigationHeader />

          <div className="flex gap-4 items-center">
            <Button variant="support-outline" size="sm">
              Área do corretor
            </Button>
            <Button variant="support" size="sm">
              Área do Cliente
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
