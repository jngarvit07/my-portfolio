export default function Experience() {
  return (
    <section id="experience" className="section">
      <h2 className="section-title">Professional Experience</h2>

      <div className="glass p-10 max-w-4xl text-left space-y-4">
        <h3 className="text-xl font-bold text-cyan-400">
          Software Engineer — Openturf Technologies
        </h3>
        <p className="text-gray-400">March 2025 – Present</p>

        <ul className="list-disc ml-5 text-gray-300 space-y-2">
          <li>Designed UI & API automation frameworks using CodeceptJS.</li>
          <li>Reduced manual testing effort by 60%.</li>
          <li>Developed reusable automation scripts.</li>
          <li>Executed performance testing using Apache JMeter.</li>
          <li>Logged & tracked defects using Jira.</li>
        </ul>
      </div>
    </section>
  );
}