import { ArrowUp } from "lucide-react";
import { profile } from "@/data/portfolio";

export function SiteFooter() {
  return (
    <footer className="border-t border-line py-10">
      <div className="container-page flex flex-col items-start justify-between gap-4 text-sm text-fg-subtle sm:flex-row sm:items-center">
        <p className="font-mono text-xs">
          © {profile.name}. Built with Next.js, TypeScript and Tailwind CSS.
        </p>
        <a
          href="#top"
          className="inline-flex min-h-11 items-center gap-1.5 rounded-md text-fg-muted transition-colors hover:text-fg"
        >
          <ArrowUp aria-hidden="true" className="size-4" />
          Back to top
        </a>
      </div>
    </footer>
  );
}
