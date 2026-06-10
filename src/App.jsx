import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Starfield from "./components/Starfield";

export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-f1-bg text-f1-text">
      <Starfield />
      <div className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(circle_at_80%_10%,rgba(116,18,28,0.22),transparent_30%),linear-gradient(180deg,rgba(0,0,0,0.12),#030303_88%)]" />
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
