import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  eyebrow: string;
  title: string;
  intro?: string;
  /** "alt" gives the section the alternate #FAFAFA background. */
  tone?: "default" | "alt";
  children: ReactNode;
};

export function Section({
  id,
  eyebrow,
  title,
  intro,
  tone = "default",
  children,
}: SectionProps) {
  const headingId = `${id}-heading`;

  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className={`border-t border-line py-24 sm:py-32 ${
        tone === "alt" ? "bg-surface" : "bg-canvas"
      }`}
    >
      <div className="container-page">
        <header className="mb-12 max-w-2xl sm:mb-16">
          <p className="font-mono text-xs font-medium tracking-[0.2em] text-fg-subtle uppercase">
            {eyebrow}
          </p>
          <h2
            id={headingId}
            className="mt-3 text-3xl font-semibold tracking-tighter text-fg sm:text-5xl"
          >
            {title}
          </h2>
          {intro ? (
            <p className="mt-5 text-base leading-7 text-fg-muted sm:text-lg">
              {intro}
            </p>
          ) : null}
        </header>
        {children}
      </div>
    </section>
  );
}
