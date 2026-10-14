import { navItems, profile } from "@/data/portfolio";
import { MobileNav } from "./MobileNav";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-canvas/90 backdrop-blur-md supports-backdrop-filter:bg-canvas/70">
      <div className="container-page flex h-16 items-center justify-between gap-6">
        <a
          href="#top"
          className="flex items-center gap-2.5 text-sm font-semibold tracking-tight text-fg"
          aria-label={`${profile.shortName}, back to top`}
        >
          <span
            aria-hidden="true"
            className="grid size-7 place-items-center rounded-md bg-fg font-mono text-[0.65rem] font-bold text-on-accent"
          >
            JE
          </span>
          <span className="hidden sm:inline">{profile.shortName}</span>
        </a>

        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-1">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className="rounded-md px-3 py-2 text-sm text-fg-muted transition-colors hover:text-fg"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <MobileNav items={navItems} />
      </div>
    </header>
  );
}
