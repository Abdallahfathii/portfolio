import { useState } from "react";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const email = "abdallahfathi.dev@gmail.com";

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact">
      <div className="contact-wrap">
        <div className="section-label rv" style={{ justifyContent: "center", textAlign: "center" }}>
          <div style={{ width: 30, height: 1, background: "var(--purple)" }} />
          <span>Contact</span>
          <div style={{ width: 30, height: 1, background: "var(--purple)" }} />
        </div>
        <h2 className="section-title rv d1" style={{ textAlign: "center" }}>
          Let's <em>Connect</em>
        </h2>
        <p className="rv d2" style={{ color: "var(--muted)", textAlign: "center", marginBottom: "2rem", lineHeight: 1.8 }}>
          Open to new opportunities, collaborations, or a friendly chat about tech.
        </p>
        <div className="contact-card rv d3">
          <div className="contact-info">
            <div className="ci-row">
              <div className="ci-icon">📧</div>
              <div>
                <div className="ci-label">Email</div>
                <div className="ci-val">{email}</div>
              </div>
              <button className="copy-btn" onClick={copyEmail}>
                {copied ? "✓ Copied!" : "Copy"}
              </button>
            </div>
            <div className="ci-row">
              <div className="ci-icon">💻</div>
              <div>
                <div className="ci-label">GitHub</div>
                <div className="ci-val">github.com/Abdallahfathii</div>
              </div>
            </div>
            <div className="ci-row">
              <div className="ci-icon">📍</div>
              <div>
                <div className="ci-label">Location</div>
                <div className="ci-val">Sadat City, Menofiya, Egypt 🇪🇬</div>
              </div>
            </div>
            <div className="ci-row">
              <div className="ci-icon">⚡</div>
              <div>
                <div className="ci-label">Status</div>
                <div className="ci-val" style={{ color: "#4ade80", fontWeight: 600 }}>
                  Open to Work ✓
                </div>
              </div>
            </div>
          </div>
          <div className="social-links" style={{ justifyContent: "center" }}>
            <a
              href="https://github.com/Abdallahfathii"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              💻 GitHub
            </a>
            <a href="#" className="social-link">
              💼 LinkedIn
            </a>
            <a href="#" className="social-link">
              🐦 Twitter
            </a>
          </div>
          <div className="cta-bar">
            <button className="btn-gold" onClick={copyEmail} style={{ fontSize: ".9rem" }}>
              📬 Copy Email Address
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
