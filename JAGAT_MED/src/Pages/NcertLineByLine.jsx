import React, { useState, useEffect } from 'react';
import '../CSS/NcertLineByline.css';      // Wahi CSS jo maine pichle response me di thi (scoped wali)
import { 
  Eye, EyeOff, FileText, ChevronLeft, HelpCircle, 
  Brain, Menu, X, Save, CheckCircle, AlertCircle, Clock 
} from 'lucide-react';
import { ncertData } from '../Data/NcertData';

const NcertLineByline = () => {
  // --- States ---
  const [activeChapterId, setActiveChapterId] = useState(1);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Mobile Menu
  const [isNotesOpen, setIsNotesOpen] = useState(false);     // Notes Panel
  const [hideKeys, setHideKeys] = useState(false);           // Blur Effect
  const [userNote, setUserNote] = useState('');              // Note Text
  
  // Quiz States
  const [quizAnswer, setQuizAnswer] = useState('');
  const [feedback, setFeedback] = useState(null);

  // --- Dynamic Data Fetching ---
  const currentChapter = ncertData.find((item) => item.id === activeChapterId);

  // --- Effect: Load Notes from LocalStorage ---
  useEffect(() => {
    // Jab chapter change ho, purane notes load karo
    const savedNote = localStorage.getItem(`note_ch_${activeChapterId}`);
    setUserNote(savedNote || '');
    setQuizAnswer(''); // Quiz reset
    setFeedback(null); // Feedback reset
    window.scrollTo(0, 0); // Scroll to top
  }, [activeChapterId]);

  // --- Functions ---
  
  // Save Note
  const handleSaveNote = () => {
    localStorage.setItem(`note_ch_${activeChapterId}`, userNote);
    alert('Note Saved Successfully! 📝');
  };

  // Change Chapter
  const handleChapterChange = (id) => {
    setActiveChapterId(id);
    setIsSidebarOpen(false); // Mobile me menu band karo click ke baad
  };

  // Check Quiz
  const handleQuizSubmit = (e) => {
    e.preventDefault();
    if (quizAnswer.trim().toLowerCase() === currentChapter.quiz.answer.toLowerCase()) {
      setFeedback({ type: 'success', text: 'Correct Answer! Well done! 🎉' });
    } else {
      setFeedback({ type: 'error', text: 'Incorrect. Try again! ❌' });
    }
  };

  return (
    <div className="ncert-layout">
      
      {/* --- Mobile Overlay (Click to close sidebar) --- */}
      <div 
        className={`mobile-overlay ${isSidebarOpen ? 'active' : ''}`} 
        onClick={() => setIsSidebarOpen(false)}
      />

      {/* --- Sidebar (Index) --- */}
      <aside className={`sidebar ${isSidebarOpen ? 'mobile-open' : ''}`}>
        <div className="sidebar-header">
          <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
            <h2 style={{ WebkitTextFillColor:'white'}}>Index</h2>
            {/* Close Icon for Mobile */}
            <button 
              className="tool-btn" 
              style={{padding:'6px', border:'none'}}
              onClick={() => setIsSidebarOpen(false)}
            >
              <X size={20} className="md:hidden"/> {/* md:hidden logic CSS media query se handle hoga */}
            </button>
          </div>
        </div>
        
        <nav className="chapter-list">
          {ncertData.map((chapter) => (
            <button
              key={chapter.id}
              onClick={() => handleChapterChange(chapter.id)}
              className={`chapter-item ${activeChapterId === chapter.id ? 'active' : ''}`}
            >
              <span className="chapter-num">0{chapter.id}.</span> 
              {chapter.title}
            </button>
          ))}
        </nav>
      </aside>

      {/* --- Main Content Area --- */}
      <main className="main-content">
        
        {/* Sticky Toolbar */}
        <header className="content-header">
          <div style={{display:'flex', gap:'10px', alignItems:'center'}}>
            {/* Mobile Menu Button */}
            <button 
              className="tool-btn" 
              onClick={() => setIsSidebarOpen(true)}
              // Inline style to show only on mobile logic needs CSS, but here's a fallback
              style={{ display: window.innerWidth > 768 ? 'none' : 'flex' }}
            >
              <Menu size={18} />
            </button>
            
            <button className="back-btn">
              <ChevronLeft size={18} /> Back
            </button>
          </div>

          <div className="action-buttons">
            <button 
              className={`tool-btn ${hideKeys ? 'active' : ''}`} 
              onClick={() => setHideKeys(!hideKeys)}
            >
              {hideKeys ? <Eye size={16}/> : <EyeOff size={16}/>}
              {/* Text hidden on small mobile via CSS usually, but keeping short here */}
              <span style={{marginLeft:'5px'}}>Key Terms</span>
            </button>

            <button 
              className={`tool-btn ${isNotesOpen ? 'active' : ''}`} 
              onClick={() => setIsNotesOpen(!isNotesOpen)}
            >
              <FileText size={16}/> 
              <span style={{marginLeft:'5px'}}>Notes</span>
            </button>
          </div>
        </header>

        {/* Content Body */}
        <div className="content-wrapper">
          
          <div className="chapter-hero">
            <div style={{display:'flex', justifyContent:'space-between', alignItems:'start'}}>
              <span className="badge">Class 12 • Chemistry</span>
              <span style={{fontSize:'0.8rem', color:'#64748b', display:'flex', gap:'5px'}}>
                <Clock size={14}/> {currentChapter.time}
              </span>
            </div>
            <h1 className="main-title">{currentChapter.title}</h1>
          </div>

          <section className="text-section">
            <h2 className="section-title">
              <span className="green-bar">|</span> {currentChapter.subtitle}
            </h2>

            {/* Dynamic Text Rendering */}
            <div className="ncert-text">
              {currentChapter.content.map((block, index) => (
                <p key={index}>
                  <span className={hideKeys && block.isKey ? 'masked-word' : ''}>
                    {block.text}
                  </span>
                </p>
              ))}
              
              <div className="highlight-box">
                <HelpCircle size={20} style={{minWidth:'20px'}} />
                <span>{currentChapter.highlight}</span>
              </div>
            </div>
          </section>

          {/* Quiz Card */}
          <section className="quiz-section">
            <div className="quiz-header">
              <Brain size={24} />
              <h3>Quick Check</h3>
            </div>
            
            <p className="quiz-question">{currentChapter.quiz.question}</p>
            
            <form onSubmit={handleQuizSubmit} className="quiz-input-wrapper">
              <input 
                type="text" 
                placeholder="Type your answer..." 
                className="quiz-input"
                value={quizAnswer}
                onChange={(e) => setQuizAnswer(e.target.value)}
              />
            </form>

            {/* Quiz Feedback */}
            {feedback && (
              <div 
                className="feedback-msg" 
                style={{ color: feedback.type === 'success' ? '#4ade80' : '#f87171' }}
              >
                {feedback.type === 'success' ? <CheckCircle size={18}/> : <AlertCircle size={18}/>}
                {feedback.text}
              </div>
            )}
            
            <div style={{marginTop:'15px', fontSize:'0.9rem', color:'#64748b', fontStyle:'italic'}}>
               Hint: {currentChapter.quiz.options.join(' / ')}
            </div>
          </section>

        </div>
      </main>

      {/* --- Notes Drawer (Right Side) --- */}
      <div className={`notes-drawer ${isNotesOpen ? 'open' : ''}`}>
        <div className="notes-header">
          <h3 style={{ color: 'white' }}>My Notes </h3>
          <button className="tool-btn" onClick={() => setIsNotesOpen(false)}>
            <X size={18} />
          </button>
        </div>
        
        <textarea 
          className="notes-area" 
          placeholder={`Write notes for ${currentChapter.title}...`}
          value={userNote}
          onChange={(e) => setUserNote(e.target.value)}
        ></textarea>
        
        <button className="save-notes-btn" onClick={handleSaveNote}>
          <Save size={16} style={{display:'inline', marginRight:'8px'}}/> Save Notes
        </button>
      </div>

    </div>
  );
};

export default NcertLineByline;