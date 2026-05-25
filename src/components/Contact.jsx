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
            <a href="https://www.linkedin.com/in/abdallah-fathy-52445b314/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link">
              💼 LinkedIn
            </a>
            <a href="https://wa.me/201055978799"
                onClick={(e) => {
                  // Check if it's likely a mobile browser
                  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
                  if (isMobile) {
                    // For mobile, let the wa.me link handle opening the app
                    return true;
                  } else {
                    // For desktop, try to open WhatsApp desktop app via custom protocol
                    e.preventDefault();
                    const phoneNumber = '201055978799';
                    const whatsappAppUrl = `whatsapp://send?phone=${phoneNumber}`;
                    const whatsappWebUrl = `https://web.whatsapp.com/send?phone=${phoneNumber}`;
                    
                    // Try to open the desktop app
                    const whatsappAppWindow = window.open(whatsappAppUrl, '_blank');
                    
                    // If the window fails to open (popup blocked) or we can't detect, fallback to web after a short delay
                    if (!whatsappAppWindow || whatsappAppWindow.closed || typeof whatsappAppWindow.closed=='undefined') {
                      // Likely blocked or not supported, go to web
                      window.location.href = whatsappWebUrl;
                    } else {
                      // Window opened successfully, but we need to check if it actually redirected to the app
                      // Since we can't reliably detect, we'll set a timeout to redirect to web if the app doesn't respond
                      setTimeout(() => {
                        if (document.hidden || !whatsappAppWindow) {
                          // User likely didn't have the app, redirect to web
                          window.location.href = whatsappWebUrl;
                        }
                      }, 2500);
                    }
                    return false;
                  }
                }}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link">
                📱 WhatsApp
              </a>
              <a href="https://t.me/01144532613"
                 target="_blank"
                 rel="noopener noreferrer"
                 className="social-link">
                 💬 Telegram
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
