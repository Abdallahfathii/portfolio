import { useState, useEffect } from "react";

const words = [
  "Full Stack Developer",
  "React Specialist",
  "Next.js Engineer",
  "Node.js Developer",
  "Problem Solver",
];

export default function Hero() {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];

    const timeout = setTimeout(
      () => {
        if (!isDeleting && charIndex < currentWord.length) {
          setText(currentWord.slice(0, charIndex + 1));
          setCharIndex((prev) => prev + 1);
        } else if (!isDeleting && charIndex === currentWord.length) {
          setTimeout(() => setIsDeleting(true), 1800);
        } else if (isDeleting && charIndex > 0) {
          setText(currentWord.slice(0, charIndex - 1));
          setCharIndex((prev) => prev - 1);
        } else if (isDeleting && charIndex === 0) {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }
      },
      isDeleting ? 40 : 80
    );

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, wordIndex]);

  const scrollTo = (id) => {
    window.location.hash = id;
    const el = document.getElementById(id);
    if (el) {
      const navHeight = 80;
      const top = el.getBoundingClientRect().top + window.scrollY - navHeight;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <section id="home">
      <div className="hero-grid" />
      <div className="hero-glow" />
      <div className="hero-content">
        <div className="hero-eye">
          <span>Available for Work</span>
          <div className="dot-pulse" />
        </div>
        <h1 className="hero-name">
          Abdallah<br />
          <span className="outline">Fathi</span>
        </h1>
        <p className="hero-sub">
          <span id="tw">{text}</span>
          <span className="blink" />
          <br />
          Building fast, elegant digital experiences with modern web technologies.
        </p>
        <div className="hero-cta">
          <button className="btn-gold" onClick={() => scrollTo("projects")}>
            View Projects →
          </button>
          <button className="btn-outline" onClick={() => scrollTo("contact")}>
            Contact Me
          </button>
        </div>
        <div className="stats">
          <div>
            <div className="stat-num">6+</div>
            <div className="stat-lbl">Projects</div>
          </div>
          <div>
            <div className="stat-num">3+</div>
            <div className="stat-lbl">Years Learning</div>
          </div>
          <div>
            <div className="stat-num">12+</div>
            <div className="stat-lbl">Technologies</div>
          </div>
        </div>
      </div>
      <div className="scroll-hint">
        <span>Scroll</span>
        <div className="scroll-line" />
      </div>
    </section>
  );
}
