import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import Expertise from '@/components/Expertise';
import About from '@/components/About';
import Education from '@/components/Education';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import Portfolio from '@/components/Portfolio';
import Contact from '@/components/Contact';
import RevealObserver from '@/components/RevealObserver';

export default function Home() {
  return (
    <>
      <Nav />
      <RevealObserver />

      <a
        href="#hero"
        className="absolute -left-[9999px] top-4 focus:left-4 focus:z-[9999] focus:bg-accent-green focus:text-black focus:px-4 focus:py-2 focus:rounded-md font-mono text-sm"
      >
        Skip to content
      </a>

      <main className="relative z-[1] pt-[58px]">
        <Hero />
        <Expertise />
        <About />
        <Education />
        <Experience />
        <Skills />
        <Portfolio />
        <Contact />
      </main>
    </>
  );
}
