export default function Skills() {
  const skills = [
    "Java",
    "CodeceptJS",
    "Selenium",
    "SQL",
    "API Testing",
    "Git",
    "Docker",
  ];

  return (
    <section id="skills" className="p-10 bg-gray-100">
      <h2 className="text-3xl font-bold mb-4">Skills</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {skills.map((s) => (
          <div key={s} className="bg-white shadow p-4 rounded-xl text-center">
            {s}
          </div>
        ))}
      </div>
    </section>
  );
}
