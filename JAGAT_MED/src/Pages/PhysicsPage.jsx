import React, { useState } from 'react';
import '../CSS/PhysicsPage.css'; 
import '../CSS/Navbar.css';
import '../CSS/Footer.css';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const PhysicsPage = () => {
  const [activeTab, setActiveTab] = useState('class11');
  const [searchQuery, setSearchQuery] = useState(''); // Search State
  const [showTools, setShowTools] = useState(false);  // Floating Menu State
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  // Syllabus Data
  const curriculum = {
    class11: [
      { id: 1, title: 'Units & Measurements', progress: 100, difficulty: 'Easy', topics: 5, status: 'Review' },
      { id: 2, title: 'Motion in a Straight Line', progress: 80, difficulty: 'Medium', topics: 8, status: 'Continue' },
      { id: 3, title: 'Laws of Motion', progress: 45, difficulty: 'Hard', topics: 10, status: 'Continue' },
      { id: 4, title: 'Work, Energy & Power', progress: 10, difficulty: 'Medium', topics: 9, status: 'Continue' },
      { id: 5, title: 'Rotational Motion', progress: 0, difficulty: 'Hard', topics: 14, status: 'Start' },
      { id: 6, title: 'Gravitation', progress: 0, difficulty: 'Medium', topics: 7, status: 'Start' },
      { id: 7, title: 'Thermodynamics', progress: 0, difficulty: 'Hard', topics: 6, status: 'Start' },
      { id: 8, title: 'Oscillations (SHM)', progress: 0, difficulty: 'Medium', topics: 8, status: 'Start' },
      { id: 9, title: 'Waves', progress: 0, difficulty: 'Hard', topics: 10, status: 'Start' },
      { id: 10, title: 'Mechanical Properties of Fluids', progress: 20, difficulty: 'Medium', topics: 8, status: 'Continue' },
    ],
    class12: [
      { id: 1, title: 'Electric Charges & Fields', progress: 90, difficulty: 'Medium', topics: 12, status: 'Review' },
      { id: 2, title: 'Electrostatic Potential', progress: 60, difficulty: 'Medium', topics: 8, status: 'Continue' },
      { id: 3, title: 'Current Electricity', progress: 30, difficulty: 'Hard', topics: 15, status: 'Continue' },
      { id: 4, title: 'Moving Charges & Magnetism', progress: 0, difficulty: 'Hard', topics: 12, status: 'Start' },
      { id: 5, title: 'Electromagnetic Induction', progress: 0, difficulty: 'Medium', topics: 7, status: 'Start' },
      { id: 6, title: 'Ray Optics', progress: 0, difficulty: 'Hard', topics: 18, status: 'Start' },
      { id: 7, title: 'Wave Optics', progress: 0, difficulty: 'Hard', topics: 9, status: 'Start' },
      { id: 8, title: 'Dual Nature of Radiation', progress: 0, difficulty: 'Easy', topics: 5, status: 'Start' },
      { id: 9, title: 'Semiconductors', progress: 0, difficulty: 'Medium', topics: 10, status: 'Start' },
      { id: 10, title: 'Atoms & Nuclei', progress: 0, difficulty: 'Easy', topics: 6, status: 'Start' },
    ]
  };

  const faqData = [
    { question: "Is NCERT enough for Physics NEET?", answer: "NCERT is the foundation, but for Physics, you need extensive numerical practice. Our 'Masterclass' modules include NCERT-based questions plus advanced application problems." },
    { question: "How do I manage Class 11 backlog?", answer: "Start with high-weightage topics like Mechanics and Heat. Dedicate 2 days a week specifically for Class 11 revision while continuing Class 12." },
    { question: "Are these questions video-solution enabled?", answer: "Yes! Every single question in the practice set comes with a detailed video solution explaining the core concept." },
    { question: "What is the difficulty level of the tests?", answer: "The tests are adaptive. They start at an Easy/Medium level and automatically adjust to Hard as your accuracy improves." },
  ];

  const activeData = activeTab === 'class11' ? curriculum.class11 : curriculum.class12;

  // Search Filter Logic
  const filteredChapters = activeData.filter(chapter => 
    chapter.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const getStatusClass = (status) => {
    switch(status) {
      case 'Review': return 'outline-glow';
      case 'Continue': return 'filled-glow';
      default: return 'filled-glow start-btn'; 
    }
  };

  return (
    <>
      <div className="nav" style={{ position: 'relative', zIndex: 1000 }}>
        <Navbar />
      </div> 
      
      <div className="physics-dynamic-container">
        
        {/* --- Header --- */}
        <header className="physics-header-dynamic">
          <div className="header-bg-grid"></div>
          <div className="header-bg-particles"></div>
          
          <div className="header-content z-rel">
            <span className="subject-tag-neon">NEET / JEE Prep</span>
            <h1 className="neon-text">Physics Concepts</h1>
            <p className="neon-subtext">Master the forces of the universe. High-yield concepts derived from first principles.</p>
          </div>

          <div className="stats-row-neon z-rel">
            <div className="stat-item-neon">
              <span className="stat-num-neon">32</span>
              <span className="stat-label-neon">Chapters</span>
            </div>
            <div className="stat-item-neon no-border">
              <span className="stat-num-neon">5k+</span>
              <span className="stat-label-neon">Numericals</span>
            </div>
            <div className="stat-item-neon">
              <span className="stat-num-neon">Daily</span>
              <span className="stat-label-neon">Practice</span>
            </div>
          </div>
        </header>

        {/* --- Tabs --- */}
        <div className="tab-container-neon">
          <button 
            className={`tab-btn-neon ${activeTab === 'class11' ? 'active' : ''}`} 
            onClick={() => {setActiveTab('class11'); setSearchQuery('');}}
          >
            Class 11 (Mechanics)
          </button>
          <button 
            className={`tab-btn-neon ${activeTab === 'class12' ? 'active' : ''}`} 
            onClick={() => {setActiveTab('class12'); setSearchQuery('');}}
          >
            Class 12 (Electro/Optics)
          </button>
        </div>

        {/* --- NEW: Feature 1 - Neon Search Bar --- */}
        <div className="search-container">
          <div className="search-wrapper">
            <span className="search-icon">🔍</span>
            <input 
              type="text" 
              placeholder="Search chapters (e.g., Optics, Force)..." 
              className="neon-search-input"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* --- NEW: Feature 2 - Daily Challenge Widget --- */}
        {!searchQuery && (
          <div className="daily-challenge-section">
            <div className="challenge-card">
              <div className="challenge-icon">⚡</div>
              <div className="challenge-content">
                <h4>Daily Orbit Challenge</h4>
                <p>Solve today's high-yield numerical on <strong>Rotational Motion</strong>.</p>
              </div>
              <button className="challenge-btn">Solve Now</button>
            </div>
          </div>
        )}

        {/* --- Chapters Grid --- */}
        <section className="chapters-grid-dynamic">
          {filteredChapters.length > 0 ? (
            filteredChapters.map((chapter, index) => (
              <div key={chapter.id} className="chapter-card-dynamic" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="card-top">
                  <span className={`badge-dynamic ${chapter.difficulty.toLowerCase()}`}>{chapter.difficulty}</span>
                  <span className="topic-count-dynamic">{chapter.topics} Topics</span>
                </div>
                
                <h3>{chapter.title}</h3>
                
                <div className="progress-section">
                  <div className="progress-labels-dynamic">
                    <span>Concept Mastery</span>
                    <span>{chapter.progress}%</span>
                  </div>
                  <div className="progress-bar-bg-dynamic">
                    <div 
                      className="progress-bar-fill-dynamic" 
                      style={{ width: `${chapter.progress}%` }}
                    >
                      <div className="progress-glow"></div>
                    </div>
                  </div>
                </div>

                <div className="card-footer">
                  <button className={`action-btn-dynamic ${getStatusClass(chapter.status)}`}>
                    {chapter.status === 'Start' ? 'Initialize' : chapter.status}
                  </button>
                  {chapter.progress > 0 ? (
                    <span className="last-accessed-dynamic">Resume Session</span>
                  ) : (
                    <span className="last-accessed-dynamic">Not started</span>
                  )}
                </div>
              </div>
            ))
          ) : (
            <div className="no-results">
              <p>No chapters found matching "{searchQuery}"</p>
            </div>
          )}
        </section>

        {/* --- FAQ SECTION --- */}
        <section className="faq-section-neon">
          <h2 className="faq-title">Frequency Asked Questions</h2>
          <div className="faq-grid">
            {faqData.map((item, index) => (
              <div 
                key={index} 
                className={`faq-item ${openFaq === index ? 'open' : ''}`}
                onClick={() => toggleFaq(index)}
              >
                <div className="faq-question">
                  <span>{item.question}</span>
                  <span className="faq-icon">{openFaq === index ? '−' : '+'}</span>
                </div>
                <div className="faq-answer">
                  <div className="answer-content">
                    {item.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* --- NEW: Feature 3 - Floating Tools Menu --- */}
        <div className={`floating-tools-container ${showTools ? 'open' : ''}`}>
          <div className="tools-menu">
            <button className="tool-item">📐 Formula Sheet</button>
            <button className="tool-item">🧮 Calculator</button>
            <button className="tool-item">📝 Notes</button>
          </div>
          <button className="fab-main-btn" onClick={() => setShowTools(!showTools)}>
            {showTools ? '✖' : '🛠️'}
          </button>
        </div>

      </div>

      <div className="footer">
        <Footer />
      </div>
    </>
  );
};

export default PhysicsPage;