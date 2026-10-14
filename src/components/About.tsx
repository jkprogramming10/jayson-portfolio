import { Briefcase, Database, Layers, Sparkles } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { profile } from "@/data/portfolio";
import { Section } from "./Section";

const focusAreas: readonly { icon: LucideIcon; title: string; text: string }[] =
  [
    {
      icon: Briefcase,
      title: "Internal business systems",
      text: "Front-end and back-end development and maintenance for operational workflows.",
    },
    {
      icon: Database,
      title: "Data & integrations",
      text: "Database-driven systems, APIs and integrations on MySQL, PostgreSQL and SQL Server.",
    },
    {
      icon: Layers,
      title: "Design background",
      text: "Earlier experience as a graphic artist informs practical, usable interfaces.",
    },
    {
      icon: Sparkles,
      title: "AI-assisted workflow",
      text: "Claude Code, ChatGPT and GitHub Copilot, with every output reviewed and tested.",
    },
  ];

export function About() {
  return (
    <Section id="about" eyebrow="01. About" title="About me">
      <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr]">
        <div className="space-y-5 text-base leading-7 text-fg-muted sm:text-lg sm:leading-8">
          {profile.summary.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <ul className="grid gap-px self-start overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
          {focusAreas.map(({ icon: Icon, title, text }) => (
            <li key={title} className="bg-canvas p-6">
              <Icon aria-hidden="true" className="size-5 text-fg" />
              <h3 className="mt-4 font-medium text-fg">{title}</h3>
              <p className="mt-1.5 text-sm leading-6 text-fg-muted">{text}</p>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
