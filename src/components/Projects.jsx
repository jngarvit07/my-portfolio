const projects = [
  { title: "Automation Framework", tech: "CodeceptJS, Playwright, JavaScript" },
  { title: "Employee Dashboard", tech: "Angular, REST APIs, Charts" },
  { title: "Portfolio Website", tech: "React, Tailwind, Animations" },
];

export default function Projects() {
  return (
    <section id="projects" className="section">
      <h2 className="section-title">Projects & Experience</h2>

      <div className="grid md:grid-cols-3 gap-10 mt-10">
        {projects.map((p) => (
          <div key={p.title} className="project-card glass p-8">
            <h3 className="text-xl font-bold mb-3">{p.title}</h3>
            <p className="text-gray-400">{p.tech}</p>
          </div>
        ))}
      </div>
    </section>
  );
}