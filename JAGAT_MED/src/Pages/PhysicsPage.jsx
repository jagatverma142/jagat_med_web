import React, { useState } from 'react';
import '../CSS/PhysicsPage.css'; // Ensure CSS file is in the same folder
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const PhysicsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  // Toggle FAQ
  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  // Dummy Data for Chapters (Extended)
  const chapters = [
    {
      id: 1, title: 'Units & Measurements', description: 'Dimensional analysis, error calculation and significant figures.', difficulty: 'Easy', progress: 100,
    },
    {
      id: 2, title: 'Kinematics', description: 'Motion in 1D & 2D, vectors, projectiles and relative velocity.', difficulty: 'Medium', progress: 65,
    },
    {
      id: 3, title: 'Laws of Motion', description: 'Newtons laws, friction, circular motion and dynamics.', difficulty: 'Hard', progress: 30,
    },
    {
      id: 4, title: 'Work, Energy & Power', description: 'Conservation of energy, collisions and potential energy curves.', difficulty: 'Medium', progress: 0,
    },
    {
      id: 5, title: 'Rotational Motion', description: 'Moment of inertia, torque, angular momentum and rolling motion.', difficulty: 'Hard', progress: 10,
    },
    {
      id: 6, title: 'Gravitation', description: 'Keplers laws, gravitational potential, and escape velocity.', difficulty: 'Easy', progress: 0,
    },
    {
      id: 7, title: 'Thermodynamics', description: 'Laws of thermodynamics, heat engines, and entropy.', difficulty: 'Hard', progress: 0,
    }
  ];

  // Quick Resources Data
  const resources = [
    { id: 1, title: 'Formula Sheet', icon: '📐', desc: 'All formulas in one place' },
    { id: 2, title: 'PYQ Papers', icon: '📝', desc: 'Last 10 years questions' },
    { id: 3, title: 'Flashcards', icon: '⚡', desc: 'Quick revision mode' },
    { id: 4, title: 'Mock Tests', icon: '🎯', desc: 'Test your knowledge' },
  ];

  // FAQ Data
  const faqs = [
    { question: "Is this course sufficient for NEET/JEE?", answer: "Yes, our content covers the entire NCERT syllabus along with advanced problem-solving techniques required for competitive exams." },
    { question: "How can I clear my backlogs?", answer: "Use our 'One Shot' videos in the Revision section. Focus on high-weightage chapters first like Mechanics and Electrodynamics." },
    { question: "Are the mock tests free?", answer: "We offer 5 free full-length mock tests. For more, you can upgrade to the premium plan." },
    { question: "Can I download notes for offline use?", answer: "Yes, all chapter notes and formula sheets are downloadable in PDF format from the resources section." }
  ];

  // Filter Logic
  const filteredChapters = chapters.filter(chapter =>
    chapter.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      {/* Navbar Container */}
      <div className="nav" style={{ position: 'relative', zIndex: 1000 }}>
        <Navbar />
      </div> 
    
      <div className="physics-wrapper" style={{ position: 'relative', zIndex: 1 }}>
        
        {/* --- Header Section --- */}
        <header className="phys-header">
          <span className="phys-tag">Physics Class 11</span>
          <h1 className="phys-title">Master Concepts</h1>
          <p className="phys-subtitle">
            Track your daily progress, solve challenges, and dominate your exams with interactive learning.
          </p>

          {/* Stats Row */}
          <div className="phys-stats-row">
            <div className="phys-stat-item">
              <span className="phys-stat-num">{chapters.length}</span>
              <span className="phys-stat-label">Chapters</span>
            </div>
            <div className="phys-stat-item">
              <span className="phys-stat-num">85%</span>
              <span className="phys-stat-label">Accuracy</span>
            </div>
            <div className="phys-stat-item">
              <span className="phys-stat-num">12d</span>
              <span className="phys-stat-label">Streak</span>
            </div>
          </div>
        </header>

        {/* --- Daily Challenge Banner (New Feature) --- */}
        <div className="phys-banner-container">
          <div className="phys-challenge-banner">
            <div className="phys-banner-text">
              <h3>🔥 Daily Challenge</h3>
              <p>Solve 5 questions on <strong>Rotational Motion</strong> to keep your streak alive!</p>
            </div>
            <button className="phys-btn-banner">Accept Challenge</button>
          </div>
        </div>

        {/* --- Search Section --- */}
        <div className="phys-search-container">
          <div className="phys-search-wrapper">
            <svg className="phys-search-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
            <input
              type="text"
              className="phys-search-input"
              placeholder="Search chapters or topics..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* --- Quick Resources Section (New Feature) --- */}
        <div className="phys-section-title">
            <h2>Quick Resources</h2>
        </div>
        <div className="phys-resources-grid">
            {resources.map(res => (
                <div key={res.id} className="phys-resource-card">
                    <span className="phys-res-icon">{res.icon}</span>
                    <div className="phys-res-info">
                        <h4>{res.title}</h4>
                        <p>{res.desc}</p>
                    </div>
                </div>
            ))}
        </div>

        {/* --- Chapters Grid --- */}
        <div className="phys-section-title">
            <h2>All Chapters</h2>
        </div>
        <div className="phys-chapters-grid">
          {filteredChapters.length > 0 ? (
            filteredChapters.map((chapter) => (
              <div key={chapter.id} className="phys-chapter-card">
                
                <div className="phys-card-top">
                  <span className={`phys-badge ${chapter.difficulty.toLowerCase()}`}>
                    {chapter.difficulty}
                  </span>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
                  </svg>
                </div>

                <h3 className="phys-card-title">{chapter.title}</h3>
                <p className="phys-desc">{chapter.description}</p>

                <div className="phys-progress-container">
                  <div className="phys-progress-info">
                    <span>Progress</span>
                    <span>{chapter.progress}%</span>
                  </div>
                  <div className="phys-progress-bg">
                    <div 
                      className="phys-progress-fill" 
                      style={{ width: `${chapter.progress}%` }}
                    ></div>
                  </div>
                </div>

                <button className="phys-btn-start">
                  {chapter.progress > 0 ? 'Continue' : 'Start Learning'}
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </button>

              </div>
            ))
          ) : (
            <div style={{ gridColumn: '1 / -1', textAlign: 'center', color: '#94a3b8', padding: '2rem' }}>
              No chapters found matching "{searchTerm}"
            </div>
          )}
        </div>

        {/* --- FAQ Section (New Feature) --- */}
        <div className="phys-faq-section">
            <h2 className="phys-faq-title">Frequently Asked Questions</h2>
            <div className="phys-faq-list">
                {faqs.map((faq, index) => (
                    <div 
                        key={index} 
                        className={`phys-faq-item ${openFaqIndex === index ? 'open' : ''}`}
                        onClick={() => toggleFaq(index)}
                    >
                        <div className="phys-faq-question">
                            {faq.question}
                            <span className="phys-faq-icon">+</span>
                        </div>
                        <div className="phys-faq-answer">
                            <p>{faq.answer}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>

      </div>
      
      <Footer />
    </>
  );
};

export default PhysicsPage;