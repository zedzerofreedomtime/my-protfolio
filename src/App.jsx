import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";


export default function App() {
  return (
    <div className="min-h-screen bg-f1-bg text-f1-text">
      <Navbar />
      <main className="mx-auto max-w-4xl px-4">
       <Hero />
       <About />
       <Skills />
       <Projects />
       <Contact />
      </main>
    </div>
  );
}