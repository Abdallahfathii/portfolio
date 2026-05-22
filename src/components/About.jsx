import proImg from "../assets/pro.jpg";

export default function About() {
  return (
    <section id="about">
      <div className="about-grid">
        <div>
          <div className="section-label rv">
            <span>About Me</span>
          </div>
          <h2 className="section-title rv d1">
            Crafting Digital <em>Experiences</em>
          </h2>
          <p className="rv d2">
            I'm a Full Stack Developer based in Egypt, with a Bachelor's in Information Systems and Technologies. I specialize in building modern, performant web applications end-to-end.
          </p>
          <p className="rv d3">
            My stack spans React, Next.js, Node.js, MongoDB, and PostgreSQL. I'm passionate about clean architecture, smooth UI, and shipping real products that solve real problems.
          </p>
          <div className="skill-tags rv d4">
            <span className="tag">Egypt 🇪🇬</span>
            <span className="tag">Bachelor's in Info Systems</span>
            <span className="tag">Open to Work</span>
            <span className="tag">Full Stack</span>
            <span className="tag">6+ Projects</span>
          </div>
          <div className="funfact rv d5">
            <strong>⚡ Fun Fact:</strong> I started my dev journey building a POS system for a pesticides shop in C#/WPF — and now I'm building full-stack web platforms with Next.js!
          </div>
        </div>
        <div className="rv d2" style={{ display: "flex", justifyContent: "center" }}>
          <div className="about-card" style={{ width: 280 }}>
            <img src={proImg} alt="Abdallah Fathi" className="avatar" />
            <div style={{ fontFamily: "'Playfair Display',serif", fontSize: "1.3rem", fontWeight: 700, marginBottom: 4 }}>
              Abdallah Fathi
            </div>
            <div style={{ color: "var(--muted)", fontSize: ".85rem", marginBottom: "1.5rem" }}>
              Full Stack Developer
            </div>
            <a
              href="https://github.com/Abdallahfathii"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
              style={{ fontSize: ".8rem", padding: ".5rem 1.4rem", borderRadius: 20 }}
            >
              GitHub ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
