import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { EducationTraining } from "@/components/EducationTraining";
import { Experience } from "@/components/Experience";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { Skills } from "@/components/Skills";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main id="main" tabIndex={-1}>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <EducationTraining />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}
