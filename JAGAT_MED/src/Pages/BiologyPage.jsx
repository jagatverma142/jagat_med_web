import React, { useState } from 'react';
import '../CSS/BiologyPage.css'; 
import '../CSS/Navbar.css';
import '../CSS/Footer.css';
import Footer from '../Components/Footer';

const BiologyPage = () => {
  const [activeTab, setActiveTab] = useState('zoology');

  // Comprehensive NEET/Board Curriculum Data
  const curriculum = {
    zoology: [
      { id: 1, title: 'Animal Kingdom', progress: 100, difficulty: 'Medium', topics: 12, status: 'Review' },
      { id: 2, title: 'Structural Organisation in Animals', progress: 45, difficulty: 'Hard', topics: 8, status: 'Continue' },
      { id: 3, title: 'Digestion & Absorption', progress: 10, difficulty: 'Medium', topics: 9, status: 'Continue' },
      { id: 4, title: 'Breathing & Exchange of Gases', progress: 0, difficulty: 'Easy', topics: 6, status: 'Start' },
      { id: 5, title: 'Body Fluids & Circulation', progress: 0, difficulty: 'Hard', topics: 11, status: 'Start' },
      { id: 6, title: 'Excretory Products', progress: 0, difficulty: 'Medium', topics: 7, status: 'Start' },
      { id: 7, title: 'Locomotion & Movement', progress: 0, difficulty: 'Hard', topics: 8, status: 'Start' },
      { id: 8, title: 'Neural Control & Coordination', progress: 85, difficulty: 'Hard', topics: 14, status: 'Continue' },
      { id: 9, title: 'Human Reproduction', progress: 30, difficulty: 'Medium', topics: 10, status: 'Continue' },
      { id: 10, title: 'Reproductive Health', progress: 0, difficulty: 'Easy', topics: 5, status: 'Start' },
      { id: 11, title: 'Biotechnology: Principles', progress: 60, difficulty: 'Hard', topics: 12, status: 'Continue' },
      { id: 12, title: 'Human Health & Disease', progress: 0, difficulty: 'Medium', topics: 15, status: 'Start' },
    ],
    botany: [
      { id: 1, title: 'The Living World', progress: 100, difficulty: 'Easy', topics: 4, status: 'Review' },
      { id: 2, title: 'Biological Classification', progress: 90, difficulty: 'Medium', topics: 8, status: 'Review' },
      { id: 3, title: 'Plant Kingdom', progress: 60, difficulty: 'Medium', topics: 10, status: 'Continue' },
      { id: 4, title: 'Morphology of Flowering Plants', progress: 20, difficulty: 'Easy', topics: 7, status: 'Continue' },
      { id: 5, title: 'Anatomy of Flowering Plants', progress: 0, difficulty: 'Hard', topics: 8, status: 'Start' },
      { id: 6, title: 'Cell: The Unit of Life', progress: 0, difficulty: 'Medium', topics: 9, status: 'Start' },
      { id: 7, title: 'Cell Cycle & Cell Division', progress: 0, difficulty: 'Hard', topics: 6, status: 'Start' },
      { id: 8, title: 'Transport in Plants', progress: 15, difficulty: 'Hard', topics: 11, status: 'Continue' },
      { id: 9, title: 'Photosynthesis', progress: 0, difficulty: 'Hard', topics: 11, status: 'Start' },
      { id: 10, title: 'Plant Growth & Development', progress: 0, difficulty: 'Medium', topics: 6, status: 'Start' },
      { id: 11, title: 'Sexual Reproduction in Plants', progress: 40, difficulty: 'Medium', topics: 12, status: 'Continue' },
      { id: 12, title: 'Genetics: Principles of Inheritance', progress: 0, difficulty: 'Hard', topics: 18, status: 'Start' },
    ]
  };

  const activeData = activeTab === 'zoology' ? curriculum.zoology : curriculum.botany;

  // Function to get button style based on status
  const getStatusClass = (status) => {
    switch(status) {
      case 'Review': return 'outline';
      case 'Continue': return 'filled';
      default: return 'filled start-btn'; // We will add a specific style for 'Start'
    }
  };

  return (
    <>
     
      
      <div className="bio-container " style={{ position: 'relative', zIndex: 1 }}>
        {/* Hero Section */}
        <header className="bio-header">
          <div className="header-content">
            <span className="subject-tag">NEET / Board Prep</span>
            <h1>Biology Masterclass</h1>
            <p>Comprehensive study material for Zoology & Botany designed for top-tier performance.</p>
          </div>

          <div className="stats-row">
            <div className="stat-item">
              <span className="stat-num">98</span>
              <span className="stat-label">Chapters</span>
            </div>
            <div className="stat-item">
              <span className="stat-num">4500+</span>
              <span className="stat-label">Questions</span>
            </div>
            <div className="stat-item">
              <span className="stat-num">Live</span>
              <span className="stat-label">Classes</span>
            </div>
          </div>
        </header>

        {/* Navigation Tabs */}
        <div className="tab-container">
          <button 
            className={`tab-btn ${activeTab === 'zoology' ? 'active' : ''}`} 
            onClick={() => setActiveTab('zoology')}
          >
            Zoology
          </button>
          <button 
            className={`tab-btn ${activeTab === 'botany' ? 'active' : ''}`} 
            onClick={() => setActiveTab('botany')}
          >
            Botany
          </button>
        </div>

        {/* Main Content Grid */}
        <section className="chapters-grid">
          {activeData.map((chapter) => (
            <div key={chapter.id} className="chapter-card">
              <div className="card-top">
                <span className={`badge ${chapter.difficulty.toLowerCase()}`}>{chapter.difficulty}</span>
                <span className="topic-count">
                  <i className="fa-regular fa-file-lines"></i> {chapter.topics} Topics
                </span>
              </div>
              
              <h3>{chapter.title}</h3>
              
              <div className="progress-section">
                <div className="progress-labels">
                  <span>Progress</span>
                  <span>{chapter.progress}%</span>
                </div>
                <div className="progress-bar-bg">
                  <div 
                    className="progress-bar-fill" 
                    style={{ width: `${chapter.progress}%` }}
                  ></div>
                </div>
              </div>

              <div className="card-footer">
                <button className={`action-btn ${getStatusClass(chapter.status)}`}>
                  {chapter.status === 'Start' ? 'Start Learning' : chapter.status}
                </button>
                {chapter.progress > 0 ? (
                  <span className="last-accessed">Resume</span>
                ) : (
                  <span className="last-accessed">Not started</span>
                )}
              </div>
            </div>
          ))}
        </section>
      </div>

      <div className="footer">
        <Footer />
      </div>
    </>
  );
};

export default BiologyPage;