const skills = [
  "Java","JavaScript","Spring Boot","Hibernate","ReactJS","Angular",
  "CodeceptJS","API Automation","UI Automation","JMeter",
  "MySQL","SQL","Git","GitHub","Postman"
];

export default function Skills() {
  return (
    <section id="skills" className="section">
      <h2 className="section-title">Technical Skills</h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {skills.map(skill => (
          <div key={skill} className="skill-card glass p-6 font-semibold text-lg">
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}