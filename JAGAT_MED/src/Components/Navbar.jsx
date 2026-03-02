import React, { useEffect, useMemo, useRef, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "../CSS/Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isSticky, setIsSticky] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const location = useLocation();
  const menuBtnRef = useRef(null);
  const menuPanelRef = useRef(null);

  const navItems = useMemo(
    () => [
      { type: "link", to: "/", label: "Home" },
      {
        type: "dropdown",
        key: 1,
        label: "Subjects",
        items: [
          { to: "/biology", label: "Biology (Zoology & Botany)" },
          { to: "/physics", label: "Physics (Concepts)" },
          { to: "/chemistry", label: "Chemistry (Org/Inorg)" },
        ],
      },
      {
        type: "dropdown",
        key: 2,
        label: "Material",
        badge: "New",
        items: [
          { to: "/material/ncert", label: "NCERT Line-by-Line" },
          { to: "/material/notes", label: "Topper's Handwritten Notes" },
          { to: "/material/formulas", label: "Formula Sheets (PDF)" },
          { to: "/material/mindmaps", label: "Mind Maps 2025" },
        ],
      },
      {
        type: "dropdown",
        key: 3,
        label: "Practice",
        items: [
          { to: "/practice/pyq", label: "PYQ (Last 15 Years)" },
          { to: "/practice/mock", label: "Daily Mock Tests" },
          { to: "/practice/aits", label: "All India Test Series" },
        ],
      },
      { type: "link", to: "/updates", label: "Updates" },
      { type: "cta", to: "/login", label: "Login" },
    ],
    []
  );

  const Icons = {
    ChevronDown: ({ rotated }) => (
      <svg
        style={{ transform: rotated ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.3s" }}
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <polyline points="6 9 12 15 18 9"></polyline>
      </svg>
    ),
    Menu: () => (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <line x1="3" y1="12" x2="21" y2="12"></line>
        <line x1="3" y1="6" x2="21" y2="6"></line>
        <line x1="3" y1="18" x2="21" y2="18"></line>
      </svg>
    ),
    Close: () => (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <line x1="18" y1="6" x2="6" y2="18"></line>
        <line x1="6" y1="6" x2="18" y2="18"></line>
      </svg>
    ),
  };

  const openMenu = () => {
    setIsMenuOpen(true);
    setActiveDropdown(null);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setActiveDropdown(null);
  };

  const toggleMenu = () => {
    setIsMenuOpen((v) => !v);
    setActiveDropdown(null);
  };

  const toggleDropdown = (key) => setActiveDropdown((prev) => (prev === key ? null : key));

  // Close on route change
  useEffect(() => {
    closeMenu();
  }, [location]);

  // Sticky + scroll progress
  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);

      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;

      if (scrollHeight > 0) setScrollProgress((scrollTop / scrollHeight) * 100);
      else setScrollProgress(0);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock background scroll when menu open (mobile usability) [web:133]
  useEffect(() => {
    const cls = "nav-lock";
    if (isMenuOpen) document.body.classList.add(cls);
    else document.body.classList.remove(cls);

    return () => document.body.classList.remove(cls);
  }, [isMenuOpen]);

  // ESC to close
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape" && isMenuOpen) closeMenu();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isMenuOpen]);

  // Return focus to menu button after closing
  useEffect(() => {
    if (!isMenuOpen && menuBtnRef.current) menuBtnRef.current.focus();
  }, [isMenuOpen]);

  return (
    <>
      <header id="mainHeader" className={`mainHeader ${isSticky ? "sticky" : ""}`}>
        <nav className="navbar" aria-label="Primary">
          <NavLink to="/" className="logo" onClick={closeMenu}>
            JAGAT<span>PREP</span>
          </NavLink>

          <button
            ref={menuBtnRef}
            type="button"
            className="menu-toggle"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            aria-controls="navLinks"
          >
            {isMenuOpen ? <Icons.Close /> : <Icons.Menu />}
          </button>

          <div className={`nav-drawer ${isMenuOpen ? "open" : ""}`} ref={menuPanelRef}>
            <ul className={`nav-links ${isMenuOpen ? "active" : ""}`} id="navLinks">
              <li className="mobile-header">
                <div className="mobile-brand">Menu</div>
                <button type="button" className="mobile-close" onClick={closeMenu} aria-label="Close menu">
                  <Icons.Close />
                </button>
              </li>

              {navItems.map((item) => {
                if (item.type === "link") {
                  return (
                    <li key={item.to}>
                      <NavLink to={item.to} className={({ isActive }) => (isActive ? "active" : "")}>
                        {item.label}
                      </NavLink>
                    </li>
                  );
                }

                if (item.type === "cta") {
                  return (
                    <li key={item.to}>
                      <NavLink to={item.to} className="btn-login">
                        {item.label}
                      </NavLink>
                    </li>
                  );
                }

                // dropdown
                return (
                  <li key={item.key} className={`dropdown ${activeDropdown === item.key ? "active" : ""}`}>
                    <button
                      type="button"
                      className="dropdown-link"
                      onClick={() => toggleDropdown(item.key)}
                      aria-expanded={activeDropdown === item.key}
                    >
                      <span className="ddl-left">
                        {item.label} {item.badge ? <span className="badge">{item.badge}</span> : null}
                      </span>
                      <Icons.ChevronDown rotated={activeDropdown === item.key} />
                    </button>

                    <ul className="dropdown-menu">
                      {item.items.map((x) => (
                        <li key={x.to}>
                          <NavLink to={x.to} onClick={closeMenu}>
                            {x.label}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  </li>
                );
              })}
            </ul>
          </div>
        </nav>

        <div className="scroll-progress-container" aria-hidden="true">
          <div className="scroll-progress-bar" style={{ width: `${scrollProgress}%` }} />
        </div>
      </header>

      <div className={`overlay ${isMenuOpen ? "active" : ""}`} onClick={closeMenu} />
    </>
  );
};

export default Navbar;
