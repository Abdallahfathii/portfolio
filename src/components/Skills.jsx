const SKILLS = {
  Frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Material UI", "Vite"],
  Backend: ["Node.js", "Express.js", "REST APIs", "NextAuth v5", "bcryptjs"],
  Database: ["MongoDB", "PostgreSQL", "Prisma ORM", "SQLite", "Supabase", "Mongoose"],
  "Tools & Deploy": ["Git & GitHub", "Vercel", "Netlify", "C# / WPF", "Cisco CCNA"],
};

export default function Skills() {
  return (
    <section id="skills">
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div className="section-label rv">
          <span>Skills</span>
        </div>
        <h2 className="section-title rv d1">
          My <em>Tech Stack</em>
        </h2>
        <div className="skills-grid">
          {Object.entries(SKILLS).map(([category, skills], idx) => (
            <div key={category} className={`skill-card rv d${idx + 1}`}>
              <div className="skill-cat">{category}</div>
              {skills.map((skill) => (
                <div key={skill} className="skill-item">
                  <div className="skill-dot" />
                  <span className="skill-name">{skill}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
