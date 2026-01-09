import React, { useState } from 'react';
import '../CSS/TestSeries.css'; 
// Ensure you have react-icons installed or use SVG placeholders
// npm install react-icons

const AllIndiaTestSeries = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Extended Data with diverse status
  const tests = [
    {
      id: 1,
      title: "AITS Major Test - 05",
      type: "Full Syllabus",
      status: "live",
      date: "09 Jan 2026",
      time: "2:00 PM - 5:20 PM",
      questions: 180,
      marks: 720,
      syllabus: "Physics: Full Mechanics | Chem: Thermodynamics | Bio: Plant Physiology"
    },
    {
      id: 2,
      title: "Unit Test - 08 (Physics)",
      type: "Part Syllabus",
      status: "upcoming",
      date: "12 Jan 2026",
      time: "10:00 AM - 11:30 AM",
      questions: 45,
      marks: 180,
      syllabus: "Rotational Motion, Gravitation, Solids & Fluids"
    },
    {
      id: 3,
      title: "AITS Minor Test - 04",
      type: "Part Syllabus",
      status: "completed",
      date: "02 Jan 2026",
      questions: 180,
      marks: 720,
      syllabus: "Physics: Kinematics | Chem: Bonding | Bio: Cell Biology",
      score: "580/720",
      rank: "AIR 1420"
    },
    {
      id: 4,
      title: "Chemistry Special Mock",
      type: "Subject Wise",
      status: "upcoming",
      date: "15 Jan 2026",
      time: "4:00 PM - 5:00 PM",
      questions: 50,
      marks: 200,
      syllabus: "Organic Chemistry: GOC, Hydrocarbons, Haloalkanes"
    }
  ];

  // Logic: Filter by Tab AND Search
  const filteredTests = tests.filter(test => {
    const matchesTab = activeTab === 'all' ? true : test.status === activeTab;
    const matchesSearch = test.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          test.syllabus.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTab && matchesSearch;
  });

  return (
    <div className="test-page-container">
      {/* Hero */}
      <div className="test-hero">
        <span className="hero-badge">🏆 National Level</span>
        <h1 className="hero-title">
          All India <span className="script-accent">Test Series</span>
        </h1>
        <p className="hero-subtitle">
          Compete with 2 Lakh+ students. Real-time ranking, detailed analysis, and NCERT-based questions.
        </p>
      </div>

      {/* Controls: Search & Tabs */}
      <div className="controls-bar">
        <div className="filter-tabs">
          {['all', 'live', 'upcoming', 'completed'].map(tab => (
            <button 
              key={tab}
              className={`tab-btn ${activeTab === tab ? 'active' : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        <div className="search-wrapper">
          <span className="search-icon">🔍</span>
          <input 
            type="text" 
            placeholder="Search test or syllabus..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {/* Grid */}
      <div className="aits-grid">
        {filteredTests.length > 0 ? (
          filteredTests.map(test => (
            <div key={test.id} className={`aits-card ${test.status}`}>
              
              <div className="card-header-row">
                <span className={`status-badge ${test.status}`}>
                  {test.status === 'live' ? '🔴 Live Now' : test.status === 'upcoming' ? '📅 Upcoming' : '✅ Completed'}
                </span>
                <span style={{color: '#94a3b8', fontSize: '0.75rem', fontWeight:'600'}}>{test.type}</span>
              </div>

              <h3 className="test-title">{test.title}</h3>
              <p className="test-syllabus">{test.syllabus}</p>

              <div className="meta-grid">
                <div className="meta-item">
                  <span className="meta-label">Date</span>
                  <span className="meta-value">{test.date}</span>
                </div>
                <div className="meta-item">
                  <span className="meta-label">Marks</span>
                  <span className="meta-value">{test.marks}</span>
                </div>
                <div className="meta-item">
                  <span className="meta-label">Duration</span>
                  <span className="meta-value">{test.status === 'completed' ? 'Ended' : '200 Mins'}</span>
                </div>
                <div className="meta-item">
                  <span className="meta-label">Questions</span>
                  <span className="meta-value">{test.questions}</span>
                </div>
              </div>

              {test.status === 'live' && (
                <button className="btn-aits primary">
                  Attempt Now ⚡
                </button>
              )}
              
              {test.status === 'upcoming' && (
                <button className="btn-aits secondary">
                  Set Reminder 🔔
                </button>
              )}

              {test.status === 'completed' && (
                <div style={{display:'flex', gap:'10px'}}>
                  <button className="btn-aits secondary" style={{flex:1}}>
                    Analysis 📊
                  </button>
                  <div style={{background:'rgba(16, 185, 129, 0.1)', padding:'0 15px', borderRadius:'10px', display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
                     <span style={{fontSize:'0.7rem', color:'#10b981', fontWeight:'700'}}>SCORE</span>
                     <span style={{fontSize:'1rem', fontWeight:'700', color:'#fff'}}>{test.score}</span>
                  </div>
                </div>
              )}

            </div>
          ))
        ) : (
          <div style={{gridColumn:'1/-1', textAlign:'center', padding:'4rem', color:'#64748b'}}>
            <h3>No tests found matching your criteria.</h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllIndiaTestSeries;