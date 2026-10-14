import { Download, ExternalLink, Mail, MapPin } from "lucide-react";
import { profile } from "@/data/portfolio";
import { ButtonLink } from "./ButtonLink";
import { Section } from "./Section";

export function Contact() {
  // Profile links stay hidden until a verified URL is configured.
  const links = Object.values(profile.links).filter(
    (link): link is { label: string; href: string } => link.href !== null,
  );

  return (
    <Section
      id="contact"
      eyebrow="06. Contact"
      title="Get in touch"
      intro="Open to conversations about full stack development roles and projects. Email is the best way to reach me."
      tone="alt"
    >
      <div className="relative overflow-hidden rounded-2xl border border-line bg-canvas p-6 sm:p-12">
        <dl className="grid gap-6 sm:grid-cols-2">
          <div>
            <dt className="flex items-center gap-2 text-sm font-medium text-fg-subtle">
              <Mail aria-hidden="true" className="size-4" />
              Email
            </dt>
            <dd className="mt-2">
              <a
                href={`mailto:${profile.email}`}
                className="inline-block py-1 text-lg font-medium break-all text-fg underline decoration-line-hover underline-offset-4 hover:decoration-fg"
              >
                {profile.email}
              </a>
            </dd>
          </div>
          <div>
            <dt className="flex items-center gap-2 text-sm font-medium text-fg-subtle">
              <MapPin aria-hidden="true" className="size-4" />
              Location
            </dt>
            <dd className="mt-2 text-lg font-medium text-fg">
              {profile.location}
            </dd>
          </div>
        </dl>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <ButtonLink href={`mailto:${profile.email}`}>
            <Mail aria-hidden="true" className="size-4" />
            Send an email
          </ButtonLink>
          {profile.cv.published ? (
            <ButtonLink variant="secondary" href={profile.cv.href} download>
              <Download aria-hidden="true" className="size-4" />
              Download CV
              <span className="sr-only">(PDF)</span>
            </ButtonLink>
          ) : null}
          {links.map((link) => (
            <ButtonLink
              key={link.label}
              variant="secondary"
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.label}
              <ExternalLink aria-hidden="true" className="size-4" />
              <span className="sr-only">(opens in a new tab)</span>
            </ButtonLink>
          ))}
        </div>
      </div>
    </Section>
  );
}
