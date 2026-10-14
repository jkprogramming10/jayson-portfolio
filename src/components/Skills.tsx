import {
  Bot,
  CodeXml,
  Database,
  FileSpreadsheet,
  LayoutTemplate,
  Palette,
  Smartphone,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { skillGroups } from "@/data/portfolio";
import type { SkillIcon } from "@/data/portfolio";
import { Section } from "./Section";

const icons: Record<SkillIcon, LucideIcon> = {
  web: CodeXml,
  frontend: LayoutTemplate,
  database: Database,
  mobile: Smartphone,
  ai: Bot,
  design: Palette,
  productivity: FileSpreadsheet,
};

// The hairline grid shows its background through empty cells, so the last
// tile stretches to fill an incomplete final row (2 columns at sm, 3 at lg).
const smSpan = skillGroups.length % 2 === 1 ? "sm:col-span-2" : "";
const lgSpan = {
  0: "lg:col-span-1",
  1: "lg:col-span-3",
  2: "lg:col-span-2",
}[skillGroups.length % 3];
const lastTileSpan = `${smSpan} ${lgSpan ?? ""}`;

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="02. Skills"
      title="Technical skills"
      intro="Tools and technologies I work with, grouped by area."
      tone="alt"
    >
      <ul className="grid gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, index) => {
          const Icon = icons[group.icon];
          const headingId = `skill-${group.id}`;
          return (
            <li
              key={group.id}
              className={`flex flex-col bg-canvas p-6 transition-colors hover:bg-surface sm:p-8 ${
                index === skillGroups.length - 1 ? lastTileSpan : ""
              }`}
            >
              <div className="flex flex-wrap items-center gap-3">
                <span className="grid size-9 place-items-center rounded-md border border-line-strong text-fg">
                  <Icon aria-hidden="true" className="size-4" />
                </span>
                <h3 id={headingId} className="font-medium text-fg">
                  {group.title}
                </h3>
                {group.note ? (
                  <span className="rounded-full border border-line-hover px-2.5 py-0.5 font-mono text-[0.7rem] tracking-wide text-fg uppercase">
                    {group.note}
                  </span>
                ) : null}
              </div>
              <ul
                aria-labelledby={headingId}
                className="mt-6 flex flex-wrap gap-2"
              >
                {group.skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-md border border-line bg-surface px-2.5 py-1 text-sm text-fg-muted"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
