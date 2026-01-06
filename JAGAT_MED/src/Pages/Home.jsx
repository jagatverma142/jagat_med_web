import React from 'react';
import '../CSS/Home.css'; // Fixed: Changed from '.App.css' to './Home.css'
import '../CSS/Navbar.css';
const Home = () => {
  return (
    <div className="home-container">
      {/* --- Navbar Section --- */}
      <nav className="navbar">
        <div className="logo">
          <span className="logo-dark">JAGAT</span>
          <span className="logo-green"> PREP</span>
        </div>

        <div className="search-bar-container">
          <input 
            type="text" 
            placeholder="Search Chapter or Topic..." 
            className="search-input"
          />
          <span className="search-icon">🔍</span>
        </div>

        <ul className="nav-links">
          <li className="nav-item active">Home</li>
          <li className="nav-item">Subjects</li>
          <li className="nav-item">
            Material <span className="badge-new">New</span>
          </li>
          <li className="nav-item">Practice</li>
          <li className="nav-item">Updates</li>
        </ul>

        <button className="btn-login">Login</button>
      </nav>

      {/* --- Hero Section --- */}
      <header className="hero-section">
        <div className="hero-content">
          <span className="tagline">#1 Learning Platform</span>
          <h1>Master Your Exams with <br /> <span className="highlight">Jagat Prep</span></h1>
          <p>
            Access comprehensive study materials, mock tests, and personalized 
            guidance to crack your dream exam. Start your journey today.
          </p>
          <div className="hero-buttons">
            <button className="btn-primary">Start Learning</button>
            <button className="btn-secondary">View Syllabus</button>
          </div>
        </div>
        
        <div className="hero-image">
          {/* Placeholder for an illustration/image */}
          <div className="image-placeholder">
            <div className="circle-bg"></div>
            <img 
              src="https://cdn-icons-png.flaticon.com/512/3426/3426653.png" 
              alt="Student Learning" 
            />
          </div>
        </div>
      </header>

      {/* --- Features/Stats Section --- */}
      <section className="stats-section">
        <div className="stat-card">
          <h3>10k+</h3>
          <p>Active Students</p>
        </div>
        <div className="stat-card">
          <h3>500+</h3>
          <p>Mock Tests</p>
        </div>
        <div className="stat-card">
          <h3>100%</h3>
          <p>Syllabus Coverage</p>
        </div>
      </section>

      {/* --- Popular Subjects Section --- */}
      <section className="courses-section">
        <h2>Popular Subjects</h2>
        <div className="course-grid">
          <div className="course-card">
            <div className="icon physics">⚛️</div>
            <h3>Physics</h3>
            <p>Mechanics, Optics & more</p>
          </div>
          <div className="course-card">
            <div className="icon chemistry">🧪</div>
            <h3>Chemistry</h3>
            <p>Organic, Inorganic & Physical</p>
          </div>
          <div className="course-card">
            <div className="icon maths">📐</div>
            <h3>Mathematics</h3>
            <p>Calculus, Algebra & Geometry</p>
          </div>
          <div className="course-card">
            <div className="icon biology">🧬</div>
            <h3>Biology</h3>
            <p>Botany & Zoology</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;