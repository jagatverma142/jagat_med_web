import React, { useState } from 'react';
import '../CSS/Updates.css';

const UpdatesPage = () => {
  const [filter, setFilter] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  // Helper: Check if date is within last 7 days for "New" badge
  const isRecent = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now - date);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays <= 15; // Marking anything within 15 days as new for demo
  };

  const updatesData = [
    {
      id: 1,
      date: '09 Jan 2026',
      title: 'NEET 2026 Application Window Open',
      description: 'The National Testing Agency has opened the correction window. Check your application status immediately.',
      category: 'Exam Alert',
      type: 'urgent' // urgent, feature, general
    },
    {
      id: 2,
      date: '05 Jan 2026',
      title: 'Version 2.0 Released: Dark Mode',
      description: 'We have updated the app UI. You can now toggle Dark/Light mode in settings. Formula sheets are now interactive.',
      category: 'App Update',
      type: 'feature'
    },
    {
      id: 3,
      date: '28 Dec 2025',
      title: 'Physics Chapter 4: New Notes Added',
      description: 'Detailed handwritten notes for "Work, Energy & Power" have been uploaded to the library section.',
      category: 'Syllabus',
      type: 'general'
    },
    {
      id: 4,
      date: '15 Dec 2025',
      title: 'Maintenance Scheduled',
      description: 'Server maintenance on 20th Dec. The app might be slow between 2 AM - 4 AM.',
      category: 'General',
      type: 'general'
    },
    {
      id: 5,
      date: '10 Dec 2025',
      title: 'Chemistry: Organic Reactions Chart',
      description: 'A new high-resolution chart for all named organic reactions is now available for download.',
      category: 'Syllabus',
      type: 'feature'
    }
  ];

  // Advanced Filtering Logic
  const filteredUpdates = updatesData.filter(item => {
    // 1. Category Filter
    let catMatch = false;
    if (filter === 'All') catMatch = true;
    else if (filter === 'Exams' && (item.category === 'Exam Alert' || item.category === 'Syllabus')) catMatch = true;
    else if (filter === 'App' && item.category === 'App Update') catMatch = true;
    else if (filter === 'General' && item.category === 'General') catMatch = true;

    // 2. Search Filter
    const searchMatch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                        item.description.toLowerCase().includes(searchTerm.toLowerCase());

    return catMatch && searchMatch;
  });

  return (
    <div className="updates-page-container">
      
      {/* Hero */}
      <div className="updates-hero">
        <div className="hero-icon-box">🔔</div>
        <h1 className="hero-title">
          Latest <span className="script-highlight">Updates</span>
        </h1>
        <p style={{color: '#94a3b8', marginTop:'0.5rem'}}>
          Track exam dates, new features, and study material uploads.
        </p>
      </div>

      {/* Controls */}
      <div className="controls-wrapper">
        {/* Search Bar */}
        <div className="search-bar">
          <span className="search-icon">🔍</span>
          <input 
            type="text" 
            placeholder="Search updates (e.g., 'Physics', 'Exam')"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Filter Pills */}
        <div className="update-filters">
          {['All', 'Exams', 'App', 'General'].map((cat) => (
            <button
              key={cat}
              className={`filter-pill ${filter === cat ? 'active' : ''}`}
              onClick={() => setFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Timeline Feed */}
      <div className="timeline-container">
        {filteredUpdates.length > 0 ? (
          filteredUpdates.map((item, index) => (
            <div 
              key={item.id} 
              // Add 'urgent' class if type is urgent, add 'left'/'right' based on index
              className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'} ${item.type} ${item.type === 'feature' ? 'feature' : ''} ${item.type === 'general' ? 'general' : ''}`}
              style={{ animationDelay: `${index * 0.15}s` }} 
            >
              <div className="timeline-dot"></div>
              
              <div className="update-card">
                <div className="card-header-row">
                  <span className="card-date">{item.date}</span>
                  {isRecent(item.date) && <span className="new-badge">NEW</span>}
                </div>
                
                <h3 className="update-title">{item.title}</h3>
                <p className="update-desc">{item.description}</p>
                
                <div className="card-footer">
                  <span className="tag-cat">#{item.category}</span>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div style={{textAlign: 'center', color: '#64748b', padding: '3rem'}}>
            <h3>No updates found matching "{searchTerm}"</h3>
            <p>Try changing filters or search terms.</p>
          </div>
        )}
      </div>

    </div>
  );
};

export default UpdatesPage;