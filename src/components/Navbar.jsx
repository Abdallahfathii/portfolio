import { useState, useEffect, useRef } from "react";
import proImg from "../assets/pro.jpg";

export default function Navbar({ isDark, toggleTheme }) {
  const navRef = useRef(null);
  const sections = ["home", "about", "skills", "projects", "experience", "contact"];
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      navRef.current?.classList.toggle("scrolled", window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
            window.history.replaceState(null, "", `#${entry.target.id}`);
          }
        });
      },
      { threshold: 0.45 }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (hash && sections.includes(hash)) {
      setTimeout(() => {
        document.getElementById(hash)?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, []);

  const scrollTo = (id) => {
    window.location.hash = id;
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <>
      <div className={`overlay ${menuOpen ? "active" : ""}`} onClick={() => setMenuOpen(false)} />
      <nav id="navbar" ref={navRef}>
      <div className="nav-logo" onClick={() => scrollTo("home")}>
        <img src={proImg} alt="Logo" className="nav-logo-img" />
      </div>
      <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
        {sections.map((sec) => (
          <li key={sec}>
            <button
              onClick={() => scrollTo(sec)}
              className={activeSection === sec ? "active" : ""}
              data-sec={sec}
            >
              {sec.charAt(0).toUpperCase() + sec.slice(1)}
            </button>
          </li>
        ))}
      </ul>
      <div className="nav-right">
        <button className="theme-btn" onClick={toggleTheme}>
          {isDark ? "🌙" : "☀️"}
        </button>
        <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
          <span className={`menu-line ${menuOpen ? "open" : ""}`} />
          <span className={`menu-line ${menuOpen ? "open" : ""}`} />
          <span className={`menu-line ${menuOpen ? "open" : ""}`} />
        </button>
      </div>
    </nav>
    </>
  );
}
