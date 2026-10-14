import { Award, GraduationCap } from "lucide-react";
import { education, training } from "@/data/portfolio";
import { Section } from "./Section";

export function EducationTraining() {
  return (
    <Section
      id="education"
      eyebrow="05. Education"
      title="Education and training"
    >
      <div className="grid gap-10 md:grid-cols-2">
        <div>
          <h3 className="flex items-center gap-2 font-mono text-xs tracking-[0.2em] text-fg-subtle uppercase">
            <GraduationCap aria-hidden="true" className="size-4" />
            Education
          </h3>
          <ul className="mt-6 divide-y divide-line border-y border-line">
            {education.map((item) => (
              <li
                key={item.id}
                className="py-5"
              >
                <p className="font-medium text-fg">{item.qualification}</p>
                <p className="mt-1 text-fg-muted">{item.institution}</p>
                <p className="mt-2 font-mono text-sm text-fg-subtle">
                  <time dateTime={item.year}>{item.year}</time>
                </p>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="flex items-center gap-2 font-mono text-xs tracking-[0.2em] text-fg-subtle uppercase">
            <Award aria-hidden="true" className="size-4" />
            Training
          </h3>
          <ul className="mt-6 divide-y divide-line border-y border-line">
            {training.map((item) => (
              <li
                key={item.id}
                className="py-5"
              >
                <p className="font-medium text-fg">{item.title}</p>
                <p className="mt-1 text-fg-muted">{item.provider}</p>
                <p className="mt-2 font-mono text-sm text-fg-subtle">
                  <time dateTime={item.dateTime}>{item.date}</time>
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
