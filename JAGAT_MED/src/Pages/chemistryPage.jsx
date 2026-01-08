import React, { useState } from 'react';
import '../CSS/ChemistryPage.css';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { Beaker, Atom, ChevronRight } from 'lucide-react';

const ChemistryPage = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const topicsData = [
    { id: 1, title: "General Organic Chem", desc: "Resonance & Inductive Effects", type: "organic", progress: 75, chapters: 3 },
    { id: 2, title: "Periodic Table", desc: "Trends in physical properties", type: "inorganic", progress: 90, chapters: 2 },
    { id: 3, title: "Hydrocarbons", desc: "Alkanes, Alkenes & Alkynes", type: "organic", progress: 40, chapters: 4 },
    { id: 4, title: "Coordination Compounds", desc: "IUPAC & Werner's Theory", type: "inorganic", progress: 20, chapters: 2 },
    { id: 5, title: "Aldehydes & Ketones", desc: "Nucleophilic addition reactions", type: "organic", progress: 10, chapters: 3 },
    { id: 6, title: "P-Block Elements", desc: "Group 13 to 18 trends", type: "inorganic", progress: 0, chapters: 5 },
  ];

  const filteredTopics = topicsData.filter(topic => {
    const matchesTab = activeTab === 'all' || topic.type === activeTab;
    const matchesSearch = topic.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          topic.desc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTab && matchesSearch;
  });

  return (
    <>
      <Navbar />
      
      <div className="container" style={{ marginTop: '2rem', minHeight: '80vh' }}>
        
        <span className="hero-badge">Class 11 & 12</span>
        <h1 className="hero-title">Chemistry Mastery</h1>

        <div className="stats-container">
          <div className="stat-item">
            <h2>{topicsData.length}</h2>
            <p>Modules</p>
          </div>
          <div className="stat-item">
            <h2 style={{color: '#22c55e'}}>85%</h2>
            <p>Accuracy</p>
          </div>
          <div className="stat-item">
            <h2 style={{color: '#3b82f6'}}>12d</h2>
            <p>Streak</p>
          </div>
        </div>

        <div className="tabs">
          <button 
            className={`tab-btn ${activeTab === 'all' ? 'active' : ''}`}
            onClick={() => setActiveTab('all')}
          >
            All
          </button>
          <button 
            className={`tab-btn ${activeTab === 'organic' ? 'active' : ''}`}
            onClick={() => setActiveTab('organic')}
          >
            Organic
          </button>
          <button 
            className={`tab-btn blue ${activeTab === 'inorganic' ? 'active blue' : ''}`}
            onClick={() => setActiveTab('inorganic')}
          >
            Inorganic
          </button>
        </div>

        <div className="topics-grid">
          {filteredTopics.length > 0 ? (
            filteredTopics.map((topic) => (
              <div key={topic.id} className={`card ${topic.type}`}>
                <div style={{display:'flex', justifyContent:'space-between', alignItems:'start'}}>
                  <div className={`icon-box ${topic.type === 'organic' ? 'bg-green-900' : 'bg-blue-900'}`} 
                        style={{
                          background: topic.type === 'organic' ? 'rgba(34, 197, 94, 0.1)' : 'rgba(59, 130, 246, 0.1)',
                          color: topic.type === 'organic' ? '#22c55e' : '#3b82f6',
                          padding: '8px', borderRadius: '8px', width: 'fit-content', marginBottom:'10px'
                        }}>
                    {topic.type === 'organic' ? <Beaker size={24}/> : <Atom size={24}/>}
                  </div>
                  <span style={{fontSize:'12px', color:'#64748b'}}>{topic.chapters} Ch</span>
                </div>
                
                <h3>{topic.title}</h3>
                <p style={{flexGrow: 1}}>{topic.desc}</p>

                <div style={{background: '#334155', height: '4px', borderRadius: '4px', overflow:'hidden', marginBottom:'5px'}}>
                  <div style={{
                    width: `${topic.progress}%`, 
                    height:'100%', 
                    background: topic.type === 'organic' ? '#22c55e' : '#3b82f6',
                    transition: 'width 1s'
                  }}></div>
                </div>
                <div style={{fontSize:'10px', color:'#94a3b8', textAlign:'right', marginBottom:'10px'}}>
                  {topic.progress}% Completed
                </div>

                <button className="card-cta">
                  Continue Learning <ChevronRight size={16} style={{verticalAlign:'middle'}}/>
                </button>
              </div>
            ))
          ) : (
            <div style={{gridColumn: '1/-1', padding: '2rem', color: '#64748b'}}>
              No topics found matching "{searchQuery}"
            </div>
          )}
        </div>

      </div>

      <Footer />
    </>
  );
};

export default ChemistryPage;