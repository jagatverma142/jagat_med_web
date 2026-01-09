import React, { useState } from 'react';
import '../CSS/TestSeries.css';

const DailyMockTests = () => {
  const [subjectFilter, setSubjectFilter] = useState('All');

  const dailyTests = [
    { id: 1, subject: 'Physics', topic: 'Laws of Motion (DPP-12)', qs: 15, time: '20 Mins', attempts: '12k+' },
    { id: 2, subject: 'Chemistry', topic: 'Chemical Bonding (Rapid Fire)', qs: 20, time: '25 Mins', attempts: '8.5k+' },
    { id: 3, subject: 'Biology', topic: 'Plant Kingdom (NCERT Line by Line)', qs: 50, time: '40 Mins', attempts: '18k+' },
    { id: 4, subject: 'Physics', topic: 'Work Power Energy (Advanced)', qs: 10, time: '30 Mins', attempts: '5k+' },
    { id: 5, subject: 'Biology', topic: 'Human Reproduction (Diagram Based)', qs: 30, time: '25 Mins', attempts: '22k+' },
  ];

  // Filtering Logic
  const filteredData = subjectFilter === 'All' 
    ? dailyTests 
    : dailyTests.filter(t => t.subject === subjectFilter);

  // Helper for dynamic styling based on subject
  const getSubjectStyle = (sub) => {
    if(sub === 'Chemistry') return 'chem';
    if(sub === 'Biology') return 'bio';
    return ''; // Default is Physics (Blue)
  };

  const getIcon = (sub) => {
    if(sub === 'Physics') return '⚛️';
    if(sub === 'Chemistry') return '🧪';
    return '🧬';
  };

  return (
    <div className="test-page-container">
      
      <div className="test-hero">
        <span className="hero-badge">🔥 Current Streak: 12 Days</span>
        <h1 className="hero-title">
          Daily <span className="script-accent">Practice</span>
        </h1>
        <p className="hero-subtitle">
          Small consistent steps lead to big results. Sharpen your skills with topic-wise mini tests.
        </p>
      </div>

      {/* Subject Filter Pills */}
      <div className="controls-bar" style={{justifyContent: 'center'}}>
        <div className="filter-tabs">
          {['All', 'Physics', 'Chemistry', 'Biology'].map(sub => (
            <button 
              key={sub}
              className={`tab-btn ${subjectFilter === sub ? 'active' : ''}`}
              onClick={() => setSubjectFilter(sub)}
            >
              {sub}
            </button>
          ))}
        </div>
      </div>

      <div className="daily-container">
        {filteredData.length > 0 ? (
          filteredData.map((test) => (
            <div key={test.id} className="daily-row">
              
              {/* Dynamic Icon */}
              <div className={`daily-icon ${getSubjectStyle(test.subject)}`}>
                {getIcon(test.subject)}
              </div>

              <div className="daily-info">
                <span className="daily-sub-tag" style={{
                  color: test.subject === 'Biology' ? '#10b981' : test.subject === 'Chemistry' ? '#f59e0b' : '#3b82f6'
                }}>
                  {test.subject}
                </span>
                <h3 className="daily-title">{test.topic}</h3>
                <div className="daily-meta">
                  <span>📝 {test.qs} Questions</span>
                  <span>⏱️ {test.time}</span>
                  <span>👥 {test.attempts} Attempted</span>
                </div>
              </div>

              <button className="btn-start-daily">
                Start Test →
              </button>
              
            </div>
          ))
        ) : (
          <div style={{textAlign:'center', padding:'3rem', color:'#64748b'}}>
             No practice tests available for {subjectFilter}.
          </div>
        )}
      </div>
    </div>
  );
};

export default DailyMockTests;