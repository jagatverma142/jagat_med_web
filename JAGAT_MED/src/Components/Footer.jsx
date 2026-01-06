import React, { useState } from 'react';
import '../CSS/Footer.css'; // Make sure to create this CSS file

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    alert(`Subscribed with: ${email}`);
    setEmail('');
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // --- DYNAMIC DATA ---
  const footerLinks = {
    company: [
      { name: "About Us", url: "#" },
      { name: "Our Team", url: "#" },
      { name: "Careers", url: "#" },
      { name: "Privacy Policy", url: "#" }
    ],
    resources: [
      { name: "Free Mock Tests", url: "#" },
      { name: "Study Notes", url: "#" },
      { name: "Video Lectures", url: "#" },
      { name: "Blog", url: "#" }
    ],
    support: [
      { name: "Help Center", url: "#" },
      { name: "Student Community", url: "#" },
      { name: "Contact Support", url: "#" },
      { name: "Terms of Service", url: "#" }
    ]
  };

  const socialIcons = [
    { icon: "📘", name: "Facebook", url: "#" },
    { icon: "🐦", name: "Twitter", url: "#" },
    { icon: "📸", name: "Instagram", url: "#" },
    { icon: "💼", name: "LinkedIn", url: "#" }
  ];

  return (
    <footer className="footer-container">
      
      {/* --- SVG Wave Separator --- */}
      <div className="footer-wave">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
        </svg>
      </div>

      <div className="footer-content">
        <div className="footer-grid">
          
          {/* Column 1: Brand & Newsletter */}
          <div className="footer-col brand-col">
            <h2 className="footer-logo">Jagat<span className="highlight">Prep</span></h2>
            <p className="footer-desc">
              Empowering students with accessible, high-quality education to crack the toughest exams.
            </p>
            
            <form className="newsletter-form" onSubmit={handleSubscribe}>
              <div className="input-group">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button type="submit" className="btn-send">
                  ➤
                </button>
              </div>
            </form>
          </div>

          {/* Column 2: Company */}
          <div className="footer-col">
            <h3>Company</h3>
            <ul>
              {footerLinks.company.map((link, index) => (
                <li key={index}><a href={link.url}>{link.name}</a></li>
              ))}
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div className="footer-col">
            <h3>Resources</h3>
            <ul>
              {footerLinks.resources.map((link, index) => (
                <li key={index}><a href={link.url}>{link.name}</a></li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Social */}
          <div className="footer-col contact-col">
            <h3>Get in Touch</h3>
            <p>📧 support@jagatprep.com</p>
            <p>📞 +91 98765 43210</p>
            <div className="social-links">
              {socialIcons.map((social, index) => (
                <a key={index} href={social.url} className="social-icon" title={social.name}>
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* --- Footer Bottom --- */}
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Jagat Prep. All rights reserved.</p>
          <div className="legal-links">
            <a href="#">Privacy</a>
            <span className="divider">|</span>
            <a href="#">Terms</a>
          </div>
          <button className="back-to-top" onClick={scrollToTop}>
            ↑ Top
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;