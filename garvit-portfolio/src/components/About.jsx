import Reveal from "./Reveal";

export default function About() {
  return (
    <Reveal>
    <section id="about" className="section">
      <h2 className="section-title">About Me</h2>

      <div className="glass p-10 max-w-4xl text-lg text-gray-300 leading-relaxed">
        Software Engineer with 1+ year of experience in UI and API automation testing using CodeceptJS, 
        along with strong expertise in Java, Spring Boot, Hibernate, Angular and React.
        Passionate about building scalable applications, high-performance automation frameworks,
        and delivering premium quality software solutions.
      </div>
    </section>
    </Reveal>
  );
}