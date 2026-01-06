import React, { useEffect } from 'react';
import { NavLink } from "react-router-dom";
import '../CSS/Navbar.css';

const Navbar = () => {
  // Toggle Mobile Menu
  const toggleMenu = () => {
    const nav = document.getElementById('navLinks');
    const overlay = document.getElementById('overlay');
    nav.classList.toggle('active');
    overlay.classList.toggle('active');
  };

  // Scroll Logic (Sticky Header + Progress Bar)
  useEffect(() => {
    const handleScroll = () => {
      const header = document.getElementById('mainHeader');
      const progressBar = document.getElementById('progressBar');

      if (window.scrollY > 50) {
        header.classList.add('sticky');
      } else {
        header.classList.remove('sticky');
      }

      const winScroll =
        document.body.scrollTop || document.documentElement.scrollTop;
      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      progressBar.style.width = scrolled + '%';
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header id="mainHeader">
        <nav className="navbar">
          <a href="#" className="logo">
            <i className="fas fa-user-md"></i> JAGAT<span>PREP</span>
          </a>

          <div className="search-box">
            {/* ✅ input must be self-closing */}
            <input type="text" placeholder="Search Chapter or Topic..." />
            <button>
              <i className="fas fa-search"></i>
            </button>
          </div>

          <ul className="nav-links" id="navLinks">
            <li className="mobile-close-btn" onClick={toggleMenu}>
              <i className="fas fa-times"></i>
            </li>

            <li>
              <a href="#" className="active">
                Home
              </a>
            </li>

            <li className="dropdown">
              <a href="#">
                Subjects <i className="fas fa-chevron-down"></i>
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a href="#">
                    <i className="fas fa-dna"></i> Biology (Zoology & Botany)
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fas fa-atom"></i> Physics (Concepts)
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fas fa-flask"></i> Chemistry (Org/Inorg)
                  </a>
                </li>
              </ul>
            </li>

            <li className="dropdown">
              <a href="#">
                Material <span className="badge">New</span>{' '}
                <i className="fas fa-chevron-down"></i>
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a href="#">NCERT Line-by-Line</a>
                </li>
                <li>
                  <a href="#">Topper&apos;s Handwritten Notes</a>
                </li>
                <li>
                  <a href="#">Formula Sheets (PDF)</a>
                </li>
                <li>
                  <a href="#">Mind Maps 2025</a>
                </li>
              </ul>
            </li>

            <li className="dropdown">
              <a href="#">
                Practice <i className="fas fa-chevron-down"></i>
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a href="#">PYQ (Last 15 Years)</a>
                </li>
                <li>
                  <a href="#">Daily Mock Tests</a>
                </li>
                <li>
                  <a href="#">All India Test Series</a>
                </li>
              </ul>
            </li>

            <li>
              <a href="#">Updates</a>
            </li>
            <li>
              <a href="#" className="btn-login">
                Login
              </a>
            </li>
          </ul>

          <div className="menu-toggle" onClick={toggleMenu}>
            <i className="fas fa-bars"></i>
          </div>
        </nav>

        <div className="scroll-progress-container">
          <div className="scroll-progress-bar" id="progressBar"></div>
        </div>
      </header>

      <div className="overlay" id="overlay" onClick={toggleMenu}></div>
    </>
  );
};

export default Navbar;
