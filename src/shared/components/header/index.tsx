import { Button } from "@/ui/button";
import { cx } from "class-variance-authority";
import { NavigationHeader } from "./nav";
import Link from "next/link";
import { Lock, UserCicle } from "@/shared/icons";

export function Header() {
  return (
    <header className={cx(["w-full bg-white"])}>
      <div className="layout flex items-center justify-between">
        <Link href="/">CMO</Link>

        <div className="flex gap-12 items-stretch">
          <NavigationHeader />

          <div className="flex gap-4 items-center">
            <Button variant="support-outline" size="sm" className="group">
              <Lock className="transition-colors group-hover:fill-secondary-400" />
              <span>Área do corretor</span>
            </Button>
            <Button variant="support" size="sm">
              <UserCicle />
              <span>Área do Cliente</span>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
