import { ExternalLink, Lock } from "lucide-react";
import { projects } from "@/data/portfolio";
import { Section } from "./Section";

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="03. Projects"
      title="Featured projects"
      intro="Selected work from my professional role, academic background and personal projects."
    >
      <ul className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project) => (
          <li key={project.id}>
            <article className="flex h-full flex-col rounded-xl border border-line bg-canvas p-6 transition-[border-color,box-shadow] hover:border-line-hover hover:shadow-sm sm:p-8">
              <p className="flex items-center justify-between gap-3 font-mono text-xs text-fg-subtle">
                <span>{project.context}</span>
                <span>{project.year}</span>
              </p>
              <h3 className="mt-6 text-xl font-semibold tracking-tight text-fg">
                {project.href ? (
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-fg-muted"
                  >
                    {project.title}
                    <ExternalLink
                      aria-hidden="true"
                      className="ml-1.5 inline size-4 align-[-0.125em]"
                    />
                    <span className="sr-only">(opens in a new tab)</span>
                  </a>
                ) : (
                  project.title
                )}
              </h3>
              {project.role ? (
                <p className="mt-1 text-sm text-fg">
                  {project.role}
                </p>
              ) : null}
              <p className="mt-3 flex-1 leading-7 text-fg-muted">
                {project.description}
              </p>

              {project.disclosure ? (
                <p className="mt-6 flex items-start gap-2 rounded-lg border border-dashed border-line-strong p-3 text-sm leading-6 text-fg-muted">
                  <Lock
                    aria-hidden="true"
                    className="mt-1 size-3.5 shrink-0 text-fg-subtle"
                  />
                  {project.disclosure}
                </p>
              ) : null}

              <ul
                aria-label={`${project.title} tags`}
                className="mt-6 flex flex-wrap gap-2 border-t border-line pt-5"
              >
                {project.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-full border border-line-strong px-2.5 py-0.5 font-mono text-xs text-fg-muted"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </article>
          </li>
        ))}
      </ul>
    </Section>
  );
}
