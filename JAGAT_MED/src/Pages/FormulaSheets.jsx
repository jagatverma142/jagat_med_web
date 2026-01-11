import React, { useState, useEffect } from 'react';
import '../CSS/FormulaSheets.css';
import { Search, Download, Eye, FileSpreadsheet, Atom, FlaskConical, Sigma, Zap } from 'lucide-react';

const FormulaSheets = () => {
  const [activeTab, setActiveTab] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  // Simulate Dynamic Data Fetching
  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1200); // 1.2s loading time
  }, [activeTab]); // Reload effect on tab change for "dynamic" feel

  // Mock Data
  const formulaData = [
    {
      id: 1,
      title: "Mechanics Blueprint",
      subject: "Physics",
      topics: "Kinematics, NLM, Friction, Work Energy",
      pages: 4,
      size: "1.2 MB",
      color: "#06b6d4", // Cyan
      icon: <Atom size={24} />
    },
    {
      id: 2,
      title: "Physical Chem Cheat Sheet",
      subject: "Chemistry",
      topics: "Mole Concept, Equilibrium, Kinetics",
      pages: 6,
      size: "1.8 MB",
      color: "#f59e0b", // Amber
      icon: <FlaskConical size={24} />
    },
    {
      id: 3,
      title: "Calculus: Integration",
      subject: "Maths",
      topics: "Definite & Indefinite Integral Formulas",
      pages: 3,
      size: "0.8 MB",
      color: "#ec4899", // Pink
      icon: <Sigma size={24} />
    },
    {
      id: 4,
      title: "Electromagnetism",
      subject: "Physics",
      topics: "Electrostatics, Capacitance, Magnetism",
      pages: 8,
      size: "2.1 MB",
      color: "#06b6d4",
      icon: <Zap size={24} />
    },
    {
      id: 5,
      title: "Organic Reactions Map",
      subject: "Chemistry",
      topics: "All Name Reactions & Reagents",
      pages: 12,
      size: "2.5 MB",
      color: "#f59e0b",
      icon: <FlaskConical size={24} />
    },
    {
      id: 6,
      title: "Trigonometry & Algebra",
      subject: "Maths",
      topics: "Identities, Series, Binomial Theorem",
      pages: 5,
      size: "1.1 MB",
      color: "#ec4899",
      icon: <Sigma size={24} />
    }
  ];

  // Advanced Filtering
  const filteredSheets = formulaData.filter(sheet => {
    const matchesTab = activeTab === 'All' || sheet.subject === activeTab;
    const matchesSearch = sheet.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          sheet.topics.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTab && matchesSearch;
  });

  return (
    <>
    
    
    <div className="formula-page-container">
      {/* --- Hero Section --- */}
      <div className="formula-hero">
        <div className="hero-content fade-in-up">
          <span className="badge-revision">Exam Ready 2026</span>
          <h1 className="hero-title">
            Ultimate <span className="script-highlight">Formula</span> Sheets
          </h1>
          <p className="hero-subtitle">
            Concise, chapter-wise PDF summaries. The quickest way to revise before the exam.
          </p>
        </div>
      </div>

      {/* --- Controls Bar --- */}
      <div className="controls-bar fade-in-up" style={{animationDelay: '0.2s'}}>
        <div className="tabs-container">
          {['All', 'Physics', 'Chemistry', 'Maths'].map((tab) => (
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
            placeholder="Search topics (e.g. Optics)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {/* --- Formula Grid --- */}
      <div className="formula-grid">
        {isLoading ? (
          // --- SKELETON LOADING STATE ---
          Array(6).fill(0).map((_, i) => (
            <div key={i} className="formula-card skeleton-card">
              <div className="sk-header">
                <div className="sk-icon"></div>
                <div className="sk-badge"></div>
              </div>
              <div className="sk-line w-70"></div>
              <div className="sk-line w-50"></div>
              <div className="sk-line w-100 mt-auto"></div>
            </div>
          ))
        ) : (
          // --- REAL DATA ---
          filteredSheets.length > 0 ? (
            filteredSheets.map((sheet, index) => (
              <div 
                className="formula-card fade-in-card" 
                key={sheet.id}
                style={{animationDelay: `${index * 0.1}s`}} // Staggered Animation
              >
                {/* Hover Glow Effect */}
                <div className="card-glow" style={{background: sheet.color}}></div>

                <div className="card-header">
                  <div className="icon-box" style={{background: `${sheet.color}15`, color: sheet.color}}>
                    {sheet.icon}
                  </div>
                  <span className="subject-tag" style={{borderColor: sheet.color, color: sheet.color}}>
                    {sheet.subject}
                  </span>
                </div>

                <div className="card-body">
                  <h3 className="sheet-title">{sheet.title}</h3>
                  <p className="sheet-topics">{sheet.topics}</p>
                </div>

                <div className="card-footer">
                  <div className="file-info">
                    <FileSpreadsheet size={16} />
                    <span>{sheet.pages} pgs • {sheet.size}</span>
                  </div>
                  
                  <div className="action-row">
                    
                    <button className="btn-download-full" style={{background: sheet.color}}>
                        Download <Download size={16} />
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="no-results fade-in-up">
               <h3>No formulas found for "{searchQuery}"</h3>
               <p>Try searching for 'Mechanics' or 'Organic'</p>
            </div>
          )
        )}
      </div>
    </div>
    
    </>
    
  );
};

export default FormulaSheets;