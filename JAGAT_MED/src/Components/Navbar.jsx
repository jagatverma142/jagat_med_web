import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from "react-router-dom";
import '../CSS/Navbar.css';

const Navbar = () => {
  // 1. UI States
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null); 
  const [isSticky, setIsSticky] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  
  const location = useLocation(); 

  // 2. Toggle Main Menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setActiveDropdown(null);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setActiveDropdown(null);
  };

  // 3. Toggle Mobile Dropdowns
  const toggleDropdown = (index) => {
    if (activeDropdown === index) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(index);
    }
  };

  // 4. Auto-close menu on route change
  useEffect(() => {
    closeMenu();
  }, [location]);

  // 5. Scroll Logic
  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);

      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      
      if (scrollHeight > 0) {
        const scrolled = (scrollTop / scrollHeight) * 100;
        setScrollProgress(scrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // --- SVG ICONS (Cleaned up) ---
  const Icons = {
    ChevronDown: ({ rotated }) => <svg style={{ transform: rotated ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s' }} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>,
    Menu: () => <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2c3e50" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>,
    Close: () => <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2c3e50" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
  };

  return (
    <>
      <header id="mainHeader" className={isSticky ? 'sticky' : ''}>
        <nav className="navbar">
          
          {/* Logo (Text Only Now) */}
          <NavLink to="/" className="logo" onClick={closeMenu}>
             JAGAT<span>PREP</span>
          </NavLink>

          {/* Search Box Removed Here */}

          {/* Mobile Menu Toggle */}
          <div className="menu-toggle" onClick={toggleMenu}>
            {isMenuOpen ? <Icons.Close /> : <Icons.Menu />}
          </div>

          {/* Navigation Links */}
          <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`} id="navLinks">
            
            <li className="mobile-close-btn" onClick={closeMenu}>
              <Icons.Close /> Close
            </li>

            <li>
              <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
                Home
              </NavLink>
            </li>

            {/* Dropdown 1: Subjects */}
            <li className={`dropdown ${activeDropdown === 1 ? 'active' : ''}`} onClick={() => toggleDropdown(1)}>
              <span className="dropdown-link">
                Subjects <Icons.ChevronDown rotated={activeDropdown === 1} />
              </span>
              <ul className="dropdown-menu">
                <li><NavLink to="/biology">Biology (Zoology & Botany)</NavLink></li>
                <li><NavLink to="/physics">Physics (Concepts)</NavLink></li>
                <li><NavLink to="/chemistry">Chemistry (Org/Inorg)</NavLink></li>
              </ul>
            </li>

            {/* Dropdown 2: Material */}
            <li className={`dropdown ${activeDropdown === 2 ? 'active' : ''}`} onClick={() => toggleDropdown(2)}>
              <span className="dropdown-link">
                Material <span className="badge">New</span> <Icons.ChevronDown rotated={activeDropdown === 2} />
              </span>
              <ul className="dropdown-menu">
                <li><NavLink to="/material/ncert">NCERT Line-by-Line</NavLink></li>
                <li><NavLink to="/material/notes">Topper's Handwritten Notes</NavLink></li>
                <li><NavLink to="/material/formulas">Formula Sheets (PDF)</NavLink></li>
                <li><NavLink to="/material/mindmaps">Mind Maps 2025</NavLink></li>
              </ul>
            </li>

            {/* Dropdown 3: Practice */}
            <li className={`dropdown ${activeDropdown === 3 ? 'active' : ''}`} onClick={() => toggleDropdown(3)}>
              <span className="dropdown-link">
                Practice <Icons.ChevronDown rotated={activeDropdown === 3} />
              </span>
              <ul className="dropdown-menu">
                <li><NavLink to="/practice/pyq">PYQ (Last 15 Years)</NavLink></li>
                <li><NavLink to="/practice/mock">Daily Mock Tests</NavLink></li>
                <li><NavLink to="/practice/aits">All India Test Series</NavLink></li>
              </ul>
            </li>

            <li><NavLink to="/updates">Updates</NavLink></li>
            
            <li>
              <NavLink to="/login" className="btn-login">
                Login
              </NavLink>
            </li>
          </ul>
        </nav>

        <div className="scroll-progress-container">
          <div className="scroll-progress-bar" style={{ width: `${scrollProgress}%` }}></div>
        </div>
      </header>

      <div 
        className={`overlay ${isMenuOpen ? 'active' : ''}`} 
        onClick={closeMenu}
      ></div>
    </>
  );
};

export default Navbar;