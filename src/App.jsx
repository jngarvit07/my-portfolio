import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import MouseGlow from "./components/MouseGlow";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  return (
    
    <>
      {/* Ultra Premium Floating Glow Background */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="orb orb1"></div>
        <div className="orb orb2"></div>
        <div className="orb orb3"></div>
      </div>

      {/* Main Content */}
      <div className="overflow-hidden">
        <MouseGlow />
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
        <ScrollToTop />
        <Footer />
      </div>
    </>
  );
}