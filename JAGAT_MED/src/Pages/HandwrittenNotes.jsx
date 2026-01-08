import React, { useState, useEffect } from 'react';
import '../CSS/HandwrittenNotes.css';
import { Search, Download, Eye, FileText } from 'lucide-react'; // Icons ke liye (Optional, ya standard <i> use karein)

const HandwrittenNotes = () => {
  const [activeTab, setActiveTab] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  // Fake Loading Effect
  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1500); // 1.5 seconds loading
  }, []);

  // Mock Data
  const notesData = [
    { id: 1, title: "Electrostatics & Fields", subject: "Physics", chapter: "Ch-01", pages: 24, author: "AIR 1 Notes", size: "4.2 MB", color: "#3b82f6" },
    { id: 2, title: "Solutions & Colligative", subject: "Chemistry", chapter: "Ch-02", pages: 18, author: "Kota Faculty", size: "3.5 MB", color: "#22c55e" },
    { id: 3, title: "Sexual Reproduction", subject: "Biology", chapter: "Ch-02", pages: 32, author: "Dr. Ali Notes", size: "5.1 MB", color: "#eab308" },
    { id: 4, title: "Current Electricity", subject: "Physics", chapter: "Ch-03", pages: 28, author: "AIR 5 Notes", size: "4.8 MB", color: "#3b82f6" },
    { id: 5, title: "Chemical Kinetics", subject: "Chemistry", chapter: "Ch-04", pages: 21, author: "Topper Scan", size: "3.9 MB", color: "#22c55e" },
    { id: 6, title: "Genetics & Evolution", subject: "Biology", chapter: "Ch-05", pages: 45, author: "Detailed", size: "8.2 MB", color: "#eab308" },
  ];

  const filteredNotes = notesData.filter(note => {
    const matchesTab = activeTab === 'All' || note.subject === activeTab;
    const matchesSearch = note.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTab && matchesSearch;
  });

  return (
    <div className="notes-page-container">
      {/* --- Hero Section --- */}
      <div className="notes-hero">
        <div className="hero-content fade-in-up">
          <span className="badge-new">New Uploads 2026</span>
          <h1 className="hero-title">
            Topper's <span className="handwritten-highlight">Handwritten</span> Notes
          </h1>
          <p className="hero-subtitle">
            High-quality, scanned PDF notes from top rankers. Revised for NEET & JEE 2026.
          </p>
        </div>
      </div>

      {/* --- Controls / Filter Bar --- */}
      <div className="controls-bar fade-in-up" style={{animationDelay: '0.2s'}}>
        <div className="tabs-container">
          {['All', 'Physics', 'Chemistry', 'Biology'].map((tab) => (
            <button
              key={tab}
              className={`filter-btn ${activeTab === tab ? 'active' : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="search-box">
          <Search className="search-icon" size={20} />
          <input
            type="text"
            placeholder="Search chapters..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {/* --- Notes Grid --- */}
      <div className="notes-grid">
        {isLoading ? (
          // --- SKELETON LOADERS (Dikhega jab load ho rha ho) ---
          Array(6).fill(0).map((_, index) => (
            <div key={index} className="note-card skeleton-card">
              <div className="skeleton-line title-sk" style={{width: '60%'}}></div>
              <div className="skeleton-line" style={{width: '80%', height: '20px', marginTop:'15px'}}></div>
              <div className="skeleton-line" style={{width: '40%', marginTop:'10px'}}></div>
              <div className="skeleton-line footer-sk" style={{marginTop: 'auto'}}></div>
            </div>
          ))
        ) : (
          // --- REAL CONTENT ---
          filteredNotes.length > 0 ? (
            filteredNotes.map((note, index) => (
              <div 
                className="note-card fade-in-card" 
                key={note.id}
                style={{animationDelay: `${index * 0.1}s`}} // Staggered Animation
              >
                <div className="card-top" style={{ borderColor: note.color }}>
                  <span className="card-subject" style={{ color: note.color }}>{note.subject}</span>
                  <span className="card-chapter">{note.chapter}</span>
                </div>
                
                <div className="card-body">
                  <h3 className="note-title">{note.title}</h3>
                  <div className="note-meta">
                    <span><FileText size={14} style={{verticalAlign:'middle'}}/> {note.pages} Pages</span>
                    <span>✍️ {note.author}</span>
                  </div>
                </div>

                <div className="card-footer">
                  <span className="file-size">{note.size}</span>
                  <div className="action-buttons-notes">
                      <button className="btn-preview"><Eye size={16}/></button>
                      <button className="btn-download">
                          Download <Download size={16}/>
                      </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
              <div className="no-results fade-in-up">
                  <h3>No notes found for "{searchQuery}"</h3>
                  <p>Try searching for a different chapter.</p>
              </div>
          )
        )}
      </div>
    </div>
  );
};

export default HandwrittenNotes;