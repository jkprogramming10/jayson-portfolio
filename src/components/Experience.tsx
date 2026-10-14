import { experience } from "@/data/portfolio";
import { Section } from "./Section";

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="04. Experience"
      title="Work experience"
      tone="alt"
    >
      <ol className="border-t border-line">
        {experience.map((job) => (
          <li key={job.id} className="border-b border-line">
            <article className="grid gap-4 py-10 lg:grid-cols-[17rem_1fr] lg:gap-12">
              <p className="font-mono text-sm leading-6 text-fg-subtle">
                <time dateTime={job.startDate}>{job.start}</time>
                {" – "}
                {job.endDate ? (
                  <time dateTime={job.endDate}>{job.end}</time>
                ) : (
                  job.end
                )}
                <span className="block">{job.location}</span>
              </p>
              <div>
                <header>
                  <h3 className="text-xl font-semibold tracking-tight text-fg">
                    {job.role}
                  </h3>
                  <p className="mt-1 text-fg-muted">{job.company}</p>
                </header>
                <ul className="mt-6 space-y-3">
                  {job.highlights.map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 leading-7 text-fg-muted"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-3 h-px w-3 shrink-0 bg-fg-subtle"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </li>
        ))}
      </ol>
    </Section>
  );
}
