import React, { useState, useEffect } from 'react';
import { NavLink } from "react-router-dom";
import '../CSS/Navbar.css';

const Navbar = () => {
  // 1. State for UI controls
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // 2. Toggle Menu Function
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // 3. Close menu when a link is clicked (Best UX for mobile)
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // 4. Handle Scroll Logic
  useEffect(() => {
    const handleScroll = () => {
      // Sticky Header Logic
      if (window.scrollY > 50) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }

      // Progress Bar Logic
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      
      if (scrollHeight > 0) {
        const scrolled = (scrollTop / scrollHeight) * 100;
        setScrollProgress(scrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Cleanup event listener on component unmount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Dynamic Class based on state */}
      <header id="mainHeader" className={isSticky ? 'sticky' : ''}>
        <nav className="navbar">
          <NavLink to="/" className="logo" onClick={closeMenu}>
            <i className="fas fa-user-md"></i> JAGAT<span>PREP</span>
          </NavLink>

          <div className="search-box">
            <input type="text" placeholder="Search Chapter or Topic..." />
            <button>
              <i className="fas fa-search"></i>
            </button>
          </div>

          {/* Dynamic Class for Mobile Menu */}
          <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`} id="navLinks">
            <li className="mobile-close-btn" onClick={toggleMenu}>
              <i className="fas fa-times"></i>
            </li>

            <li>
              <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")} onClick={closeMenu}>
                Home
              </NavLink>
            </li>

            <li className="dropdown">
              <span className="dropdown-link">
                Subjects <i className="fas fa-chevron-down"></i>
              </span>
              <ul className="dropdown-menu">
                <li>
                  <NavLink to="/biology" onClick={closeMenu}>
                    <i className="fas fa-dna"></i> Biology (Zoology & Botany)
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/physics" onClick={closeMenu}>
                    <i className="fas fa-atom"></i> Physics (Concepts)
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/chemistry" onClick={closeMenu}>
                    <i className="fas fa-flask"></i> Chemistry (Org/Inorg)
                  </NavLink>
                </li>
              </ul>
            </li>

            <li className="dropdown">
              <span className="dropdown-link" >
                Material <span className="badge" >New</span>{' '}
                <i className="fas fa-chevron-down"></i>
              </span>
              <ul className="dropdown-menu">
                <li><NavLink to="/material/ncert" onClick={closeMenu}>NCERT Line-by-Line</NavLink></li>
                <li><NavLink to="/material/notes" onClick={closeMenu}>Topper&apos;s Handwritten Notes</NavLink></li>
                <li><NavLink to="/material/formulas" onClick={closeMenu}>Formula Sheets (PDF)</NavLink></li>
                <li><NavLink to="/material/mindmaps" onClick={closeMenu}>Mind Maps 2025</NavLink></li>
              </ul>
            </li>

            <li className="dropdown">
              <span className="dropdown-link">
                Practice <i className="fas fa-chevron-down"></i>
              </span>
              <ul className="dropdown-menu">
                <li><NavLink to="/practice/pyq" onClick={closeMenu}>PYQ (Last 15 Years)</NavLink></li>
                <li><NavLink to="/practice/mock" onClick={closeMenu}>Daily Mock Tests</NavLink></li>
                <li><NavLink to="/practice/aits" onClick={closeMenu}>All India Test Series</NavLink></li>
              </ul>
            </li>

            <li>
              <NavLink to="/updates" onClick={closeMenu}>Updates</NavLink>
            </li>
            <li>
              <NavLink to="/login" className="btn-login" onClick={closeMenu}>
                Login
              </NavLink>
            </li>
          </ul>

          <div className="menu-toggle" onClick={toggleMenu}>
            <i className="fas fa-bars"></i>
          </div>
        </nav>

        <div className="scroll-progress-container">
          {/* Dynamic Width based on state */}
          <div 
            className="scroll-progress-bar" 
            id="progressBar" 
            style={{ width: `${scrollProgress}%` }}
          ></div>
        </div>
      </header>

      {/* Overlay for mobile menu */}
      <div 
        className={`overlay ${isMenuOpen ? 'active' : ''}`} 
        id="overlay" 
        onClick={toggleMenu}
      ></div>
    </>
  );
};

export default Navbar;