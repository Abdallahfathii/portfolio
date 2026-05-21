
import proImg from "../assets/profile 1.jpg";


export default function Footer() {
  const scrollToTop = () => {
    window.location.hash = "home";
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer>
      <div className="footer-logo">
        <img src={proImg} alt="Logo" className="footer-logo-img" />
      </div>
      <div className="footer-copy">© 2025 Abdallah Fathi. All rights reserved.</div>
      <button className="top-btn" onClick={scrollToTop}>
        ↑ Top
      </button>
    </footer>
  );
}
