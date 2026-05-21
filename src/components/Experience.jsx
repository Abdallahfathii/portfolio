const EXPERIENCES = [
  {
    year: "2024 — Present",
    title: "Full Stack Developer",
    org: "Real Estate Platform (Professional Project)",
    desc: "Built and maintained a full-featured real estate listing website with advanced search, filters, and a responsive UI using React + Node.js + MongoDB.",
  },
  {
    year: "2023 — 2024",
    title: "AWA E-Commerce Platform",
    org: "Personal Project",
    desc: "Designed and built a full luxury e-commerce platform (Next.js + PostgreSQL + Prisma + NextAuth) with cart, auth, and product management.",
  },
  {
    year: "2022 — 2023",
    title: "Desktop & Web Application Developer",
    org: "Freelance / Personal Projects",
    desc: "Built PesticidePOS in C#/WPF with SQLite, and an HTML/JS POS system integrated with Supabase and Telegram bot via Netlify Functions.",
  },
  {
    year: "2020 — 2024",
    title: "B.Sc. Information Systems & Technologies",
    org: "Egypt",
    desc: "Studied networking (CCNA), databases, software engineering, and systems analysis. Built a strong foundation in both hardware and software.",
  },
];

export default function Experience() {
  return (
    <section id="experience">
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div className="section-label rv">
          <span>Experience</span>
        </div>
        <h2 className="section-title rv d1">
          My <em>Journey</em>
        </h2>
        <div className="timeline">
          {EXPERIENCES.map((exp, idx) => (
            <div key={idx} className={`tl-item rv d${idx + 1}`}>
              <div className="tl-dot" />
              <div className="tl-year">{exp.year}</div>
              <div className="tl-title">{exp.title}</div>
              <div className="tl-org">{exp.org}</div>
              <div className="tl-desc">{exp.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
