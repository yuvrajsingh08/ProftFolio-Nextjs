import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Education from "./components/Education"
import Skills from "./components/Skills"
import AboutMe from "./components/AboutMe";


export default function Home() {
  return (
    <main>
      <Hero />
      <AboutMe />
      <Projects />
      <Education />
      <Skills/>

    </main>
  );
}