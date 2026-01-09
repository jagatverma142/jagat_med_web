import React, { useState, useEffect } from 'react';
import '../CSS/MindMapPage.css';
import { Search, Map, Download, Eye, BookOpen, Layers } from 'lucide-react'; // Ensure you have lucide-react or use standard icons

const MindMapPage = () => {
  const [activeTab, setActiveTab] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);

  // Fake loading effect for animation
  useEffect(() => {
    setTimeout(() => setLoading(false), 800);
  }, []);

  // Dummy Data for Mind Maps
  const mindMaps = [
    { id: 1, title: 'Electrostatics', subject: 'Physics', class: '12th', views: '1.2k' },
    { id: 2, title: 'Organic Chemistry Basics', subject: 'Chemistry', class: '11th', views: '950' },
    { id: 3, title: 'Genetics & Evolution', subject: 'Biology', class: '12th', views: '2.1k' },
    { id: 4, title: 'Calculus: Integration', subject: 'Maths', class: '12th', views: '1.8k' },
    { id: 5, title: 'Kinematics', subject: 'Physics', class: '11th', views: '3.4k' },
    { id: 6, title: 'Plant Kingdom', subject: 'Biology', class: '11th', views: '1.5k' },
  ];

  // Filtering Logic
  const filteredMaps = mindMaps.filter((map) => {
    const matchesTab = activeTab === 'All' || map.subject === activeTab;
    const matchesSearch = map.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTab && matchesSearch;
  });

  return (
    <div className="mindmap-container">
      {/* --- Hero Section --- */}
      <div className="mindmap-hero">
        <div className="badge-year">New Session 2025</div>
        <h1 className="hero-title">
          Interactive <span className="script-font">Mind Maps</span>
        </h1>
        <p className="hero-subtitle">
          Visualise complex concepts. Revise faster. Retain longer.
        </p>
      </div>

      {/* --- Controls Section --- */}
      <div className="controls-wrapper">
        <div className="tabs-list">
          {['All', 'Physics', 'Chemistry', 'Maths', 'Biology'].map((subject) => (
            <button
              key={subject}
              className={`tab-btn ${activeTab === subject ? 'active' : ''}`}
              onClick={() => setActiveTab(subject)}
            >
              {subject}
            </button>
          ))}
        </div>

        <div className="search-wrapper">
          <Search className="search-icon" size={18} />
          <input
            type="text"
            placeholder="Search chapters..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {/* --- Grid Section --- */}
      <div className="maps-grid">
        {filteredMaps.length > 0 ? (
          filteredMaps.map((map, index) => (
            <div 
              key={map.id} 
              className={`map-card ${loading ? 'loading' : 'loaded'}`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="card-preview">
                <div className="preview-overlay">
                  <span className="view-btn"><Eye size={16} /> Preview</span>
                </div>
                {/* Placeholder for Map Image/Icon */}
                <Map size={48} className="placeholder-icon" />
              </div>

              <div className="card-content">
                <div className="card-tags">
                  <span className={`tag ${map.subject.toLowerCase()}`}>{map.subject}</span>
                  <span className="class-tag">{map.class}</span>
                </div>
                
                <h3 className="map-title">{map.title}</h3>
                
                <div className="card-meta">
                  <span className="meta-item"><Layers size={14} /> High Quality</span>
                  <span className="meta-item"><BookOpen size={14} /> {map.views} Views</span>
                </div>

                <div className="card-actions">
                  <button className="action-btn download">
                    <Download size={18} /> Download PDF
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="no-results">
            <h3>No Mind Maps Found</h3>
            <p>Try searching for a different chapter.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MindMapPage;