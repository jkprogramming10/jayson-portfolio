import { ArrowRight, Download, Mail, MapPin } from "lucide-react";
import { profile } from "@/data/portfolio";
import { ButtonLink } from "./ButtonLink";

export function Hero() {
  return (
    <section
      id="top"
      aria-labelledby="hero-heading"
      className="relative isolate overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="bg-grid absolute inset-0 -z-10 mask-[radial-gradient(ellipse_at_top,black_20%,transparent_70%)]"
      />
      <div
        aria-hidden="true"
        className="absolute -top-48 left-1/2 -z-10 h-96 w-3xl max-w-full -translate-x-1/2 rounded-full bg-black/4 blur-3xl"
      />

      <div className="container-page pt-24 pb-24 sm:pt-32 sm:pb-32 lg:pt-40">
        <p className="inline-flex items-center gap-2 rounded-full border border-line-strong bg-canvas/80 px-3 py-1 text-xs text-fg-muted sm:text-sm">
          <MapPin aria-hidden="true" className="size-3.5 text-fg-subtle" />
          {profile.location}
        </p>

        <h1
          id="hero-heading"
          className="text-gradient mt-8 max-w-4xl pb-1 text-4xl font-semibold tracking-tighter sm:text-6xl lg:text-7xl"
        >
          {profile.name}
        </h1>
        <p className="mt-5 font-mono text-sm tracking-[0.2em] text-fg-muted uppercase sm:text-base">
          {profile.title}
        </p>
        <p className="mt-8 max-w-2xl text-lg leading-8 text-fg-muted sm:text-xl sm:leading-9">
          {profile.tagline} My background spans web and mobile development,
          relational databases and UI/UX design.
        </p>

        <div className="mt-12 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <ButtonLink href="#projects">
            View projects
            <ArrowRight aria-hidden="true" className="size-4" />
          </ButtonLink>
          {profile.cv.published ? (
            <ButtonLink variant="secondary" href={profile.cv.href} download>
              <Download aria-hidden="true" className="size-4" />
              Download CV
              <span className="sr-only">(PDF)</span>
            </ButtonLink>
          ) : null}
          <ButtonLink variant="secondary" href="#contact">
            <Mail aria-hidden="true" className="size-4" />
            Get in touch
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
