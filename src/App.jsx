import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import ProjectsShowcase from "./components/ProjectsShowcase";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./editorial.css";

export default function App() {
  return (
    <div className="editorial-site relative min-h-screen text-f1-text">
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <ProjectsShowcase />
        <About />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
