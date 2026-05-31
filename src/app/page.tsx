import { Hero } from "../components/sections/Hero";
import { About } from "../components/sections/About";
import { Experience } from "../components/sections/Experience";
import { Skills } from "../components/sections/Skills";
import { Projects } from "../components/sections/Projects";
import { CertificationsAndContact } from "../components/sections/Certifications&Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <CertificationsAndContact />
    </main>
  );
}