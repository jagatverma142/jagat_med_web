import React, { useState, useEffect } from 'react';
import '../CSS/PYQPage.css'; 
import { 
  Search, FileText, Download, Eye, Calendar, 
  Filter, Heart, X, Loader2, CheckCircle 
} from 'lucide-react';

const PYQPage = () => {
  const [selectedSubject, setSelectedSubject] = useState('All');
  const [selectedYear, setSelectedYear] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [activePaper, setActivePaper] = useState(null); // For Modal
  const [bookmarks, setBookmarks] = useState([]); // For Bookmarks
  const [downloadingId, setDownloadingId] = useState(null); // For Download Spinners

  // Generate Year List (2010 - 2025)
  const years = Array.from({ length: 16 }, (_, i) => 2025 - i);

  // Fake API Loading Effect
  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => setIsLoading(false), 1200);
    return () => clearTimeout(timer);
  }, [selectedSubject, selectedYear]);

  // Mock Data
  const papers = [
    { id: 1, title: 'JEE Main 2025 - Session 1', subject: 'Physics', year: 2025, type: 'Solved', exam: 'JEE', questions: 30, difficulty: 'Hard' },
    { id: 2, title: 'NEET UG 2024 - Code Q', subject: 'Biology', year: 2024, type: 'Solved', exam: 'NEET', questions: 200, difficulty: 'Medium' },
    { id: 3, title: 'JEE Advanced 2023 - Paper 1', subject: 'Maths', year: 2023, type: 'Unsolved', exam: 'JEE', questions: 18, difficulty: 'Hard' },
    { id: 4, title: 'CBSE Board Exam 2023', subject: 'Chemistry', year: 2023, type: 'Solved', exam: 'Board', questions: 35, difficulty: 'Easy' },
    { id: 5, title: 'NEET UG 2022 - Code A', subject: 'Physics', year: 2022, type: 'Solved', exam: 'NEET', questions: 50, difficulty: 'Medium' },
    { id: 6, title: 'JEE Main 2020 - Shift 2', subject: 'Chemistry', year: 2020, type: 'Solved', exam: 'JEE', questions: 25, difficulty: 'Medium' },
    { id: 7, title: 'AIPMT 2015 - Mains', subject: 'Biology', year: 2015, type: 'Solved', exam: 'NEET', questions: 90, difficulty: 'Medium' },
    { id: 8, title: 'JEE Main 2012 - Offline', subject: 'Maths', year: 2012, type: 'Unsolved', exam: 'JEE', questions: 30, difficulty: 'Hard' },
  ];

  // Filtering Logic
  const filteredPapers = papers.filter((paper) => {
    const matchSubject = selectedSubject === 'All' || paper.subject === selectedSubject;
    const matchYear = selectedYear === 'All' || paper.year === parseInt(selectedYear);
    const matchSearch = paper.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchSubject && matchYear && matchSearch;
  });

  // Toggle Bookmark
  const toggleBookmark = (e, id) => {
    e.stopPropagation();
    if (bookmarks.includes(id)) {
      setBookmarks(bookmarks.filter(bId => bId !== id));
    } else {
      setBookmarks([...bookmarks, id]);
    }
  };

  // Handle Download
  const handleDownload = (e, id) => {
    e.stopPropagation();
    setDownloadingId(id);
    setTimeout(() => setDownloadingId(null), 2000); // Simulate 2s download
  };

  return (
    <div className="pyq-container">
      {/* Background Blobs */}
      <div className="blob blob-green"></div>
      <div className="blob blob-blue"></div>

      {/* --- Hero Section --- */}
      <div className="pyq-hero">
        <div className="pyq-badge slide-down">📂 15 Years Archive</div>
        <h1 className="pyq-title fade-in">
          Previous Year <span className="text-highlight">Questions</span>
        </h1>
        <p className="pyq-subtitle fade-in">
          Access the most comprehensive library of solved and unsolved papers for JEE, NEET, and Boards.
        </p>
      </div>

      {/* --- Controls Bar (Sticky) --- */}
      <div className="pyq-controls-wrapper sticky-top">
        <div className="pyq-controls">
          
          {/* Mobile Scrollable Tabs */}
          <div className="pyq-tabs-scroll">
            {['All', 'Physics', 'Chemistry', 'Maths', 'Biology'].map((sub) => (
              <button
                key={sub}
                className={`pyq-chip ${selectedSubject === sub ? 'active' : ''}`}
                onClick={() => setSelectedSubject(sub)}
              >
                {sub}
              </button>
            ))}
          </div>

          <div className="pyq-actions">
            <div className="custom-select">
              <Calendar size={14} className="input-icon" />
              <select 
                value={selectedYear} 
                onChange={(e) => setSelectedYear(e.target.value)}
              >
                <option value="All">All Years</option>
                {years.map(y => <option key={y} value={y}>{y}</option>)}
              </select>
            </div>

            <div className="custom-search">
              <Search size={14} className="input-icon" />
              <input 
                type="text" 
                placeholder="Search..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>

      {/* --- Grid Section --- */}
      <div className="pyq-grid">
        {isLoading ? (
          // SKELETON LOADER
          Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="pyq-card skeleton-card">
              <div className="sk-header"></div>
              <div className="sk-body"></div>
              <div className="sk-footer"></div>
            </div>
          ))
        ) : filteredPapers.length > 0 ? (
          // ACTUAL CARDS
          filteredPapers.map((paper) => (
            <div 
              key={paper.id} 
              className="pyq-card"
              onClick={() => setActivePaper(paper)}
            >
              <div className="card-top">
                <span className={`exam-badge ${paper.exam.toLowerCase()}`}>{paper.exam}</span>
                <button 
                  className={`bookmark-btn ${bookmarks.includes(paper.id) ? 'active' : ''}`}
                  onClick={(e) => toggleBookmark(e, paper.id)}
                >
                  <Heart size={18} fill={bookmarks.includes(paper.id) ? "currentColor" : "none"} />
                </button>
              </div>

              <div className="card-mid">
                <div className={`icon-circle ${paper.subject.toLowerCase()}`}>
                  <FileText size={24} />
                </div>
                <div className="paper-info">
                  <h3>{paper.title}</h3>
                  <div className="meta-tags">
                    <span>{paper.year}</span> • <span>{paper.type}</span> • <span>{paper.difficulty}</span>
                  </div>
                </div>
              </div>

              <div className="card-bottom">
                <button className="btn-secondary" onClick={(e) => { e.stopPropagation(); setActivePaper(paper); }}>
                  <Eye size={16} /> Preview
                </button>
                <button 
                  className={`btn-primary ${downloadingId === paper.id ? 'downloading' : ''}`}
                  onClick={(e) => handleDownload(e, paper.id)}
                  disabled={downloadingId === paper.id}
                >
                  {downloadingId === paper.id ? (
                    <><Loader2 size={16} className="spin" /> Saving...</>
                  ) : (
                    <><Download size={16} /> PDF</>
                  )}
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="no-data-state">
            <h3>No Papers Found</h3>
            <button onClick={() => {setSelectedSubject('All'); setSelectedYear('All'); setSearchQuery('');}}>
              Clear Filters
            </button>
          </div>
        )}
      </div>

      {/* --- Modal Overlay --- */}
      {activePaper && (
        <div className="modal-overlay" onClick={() => setActivePaper(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setActivePaper(null)}>
              <X size={24} />
            </button>
            
            <div className="modal-header">
              <span className={`exam-badge ${activePaper.exam.toLowerCase()}`}>{activePaper.exam}</span>
              <h2>{activePaper.title}</h2>
            </div>

            <div className="modal-stats">
              <div className="stat-box">
                <span className="label">Questions</span>
                <span className="value">{activePaper.questions}</span>
              </div>
              <div className="stat-box">
                <span className="label">Time</span>
                <span className="value">180 Mins</span>
              </div>
              <div className="stat-box">
                <span className="label">Difficulty</span>
                <span className="value">{activePaper.difficulty}</span>
              </div>
            </div>

            <div className="modal-desc">
              <p>This paper contains the complete set of questions from the {activePaper.year} session. 
              The solution key is included at the end of the document.</p>
            </div>

            <button className="modal-cta-btn">
               Download Full Paper & Solution (PDF)
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PYQPage;