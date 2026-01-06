import React, { useEffect, useState } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import '../App.css'; 

const Home = () => {
  const [statsTriggered, setStatsTriggered] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  // --- DATA ARRAYS ---
  const statsData = [
    { id: 1, target: 10000, suffix: "+", label: "Active Students" },
    { id: 2, target: 500, suffix: "+", label: "Mock Tests" },
    { id: 3, target: 100, suffix: "%", label: "Syllabus Coverage" }
  ];

  const subjectsData = [
    { id: 1, icon: "⚛️", title: "Physics", desc: "Mechanics, Optics & Thermodynamics", color: "#e0f2fe" },
    { id: 2, icon: "🧪", title: "Chemistry", desc: "Organic, Inorganic & Physical", color: "#fce7f3" },
    { id: 3, icon: "📐", title: "Mathematics", desc: "Calculus, Algebra & Geometry", color: "#dcfce7" },
    { id: 4, icon: "🧬", title: "Biology", desc: "Botany, Zoology & Genetics", color: "#fef3c7" }
  ];

  const featuresData = [
    { icon: "🎥", title: "Live Interactive Classes", desc: "Real-time doubt solving with expert faculty." },
    { icon: "📝", title: "Structured PDF Notes", desc: "Downloadable notes after every session." },
    { icon: "📊", title: "Performance Analytics", desc: "Deep insights into your strong and weak areas." },
    { icon: "📵", title: "Offline Access", desc: "Download videos and watch without internet." }
  ];

  const testimonialsData = [
    { name: "Rahul Verma", role: "NEET Aspirant", text: "The mock tests are exactly like the real exam. Jagat Prep helped me improve my score by 200 points!", avatar: "R" },
    { name: "Sneha Gupta", role: "Class 12 Student", text: "Physics was my nightmare, but the visual explanations here changed everything. Highly recommended!", avatar: "S" },
    { name: "Amit Kumar", role: "JEE Aspirant", text: "Best platform for revision. The short notes and formula sheets are life savers.", avatar: "A" }
  ];

  const faqData = [
    { question: "Is the content suitable for beginners?", answer: "Yes! We start from the basics and gradually move to advanced topics." },
    { question: "Can I access the course on mobile?", answer: "Absolutely. Our platform is fully responsive and works on all devices." },
    { question: "Do you offer a refund policy?", answer: "We offer a 7-day money-back guarantee if you are not satisfied with the course." }
  ];

  // --- Filter Logic ---
  const filteredSubjects = subjectsData.filter((subject) =>
    subject.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    subject.desc.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // --- SCROLL ANIMATION LOGIC ---
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          if (entry.target.classList.contains('stats-section')) {
            setStatsTriggered(true);
          }
        }
      });
    }, { threshold: 0.1 });

    const sections = document.querySelectorAll('.animate-on-scroll');
    sections.forEach(section => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  return (
    <>
      {/* Fix 1: Navbar container ko high z-index diya */}
      <div className="nav" style={{ position: 'relative', zIndex: 1000 }}>
        <Navbar />
      </div>
      
      {/* Fix 2: 'animate-on-scroll' hata diya taaki yeh Navbar ke upar na aaye */}
      <header className="hero-section" style={{ position: 'relative', zIndex: 1 }}>
        <div className="blob-bg"></div>
        
        <div className="hero-content">
          <div className="tag-pill"><span className="dot"></span> #1 Learning Platform</div>
          <h1>Master Your Exams with <br /><span className="text-gradient">Jagat Prep</span></h1>
          <p>Access comprehensive study materials, mock tests, and personalized guidance to crack your dream exam.</p>
          
          <div className="hero-search-container">
            <input 
              type="text" 
              className="hero-search-input" 
              placeholder="Search for subjects (e.g., Physics)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button className="hero-search-btn">🔍</button>
          </div>

          <div className="hero-buttons">
            <button className="btn-primary">Start Learning</button>
            <button className="btn-secondary">View Syllabus</button>
          </div>
        </div>

        <div className="hero-image-container">
          <div className="floating-card">
            <img src="https://cdn-icons-png.flaticon.com/512/3426/3426653.png" alt="Student Learning" className="hero-img"/>
            <div className="float-badge badge-left"><span>✅</span> 500+ Tests</div>
            <div className="float-badge badge-right"><span>🎓</span> Top Tutors</div>
          </div>
        </div>
      </header>

      {/* Baaki sections mein animation rehne di hai */}
      <section className="stats-container animate-on-scroll stats-section">
        <div className="stats-grid">
          {statsData.map((stat) => (
            <div key={stat.id} className="stat-card">
              <h3 className="counter">
                {statsTriggered ? <Counter target={stat.target} /> : 0}{stat.suffix}
              </h3>
              <p>{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="courses-section animate-on-scroll">
        <div className="section-header">
          <h2>Popular Subjects</h2>
          <p>Explore our most enrolled courses designed for high performance.</p>
        </div>
        
        {filteredSubjects.length > 0 ? (
          <div className="course-grid">
            {filteredSubjects.map((subject) => (
              <div key={subject.id} className="course-card" style={{ '--hover-bg': subject.color }}>
                <div className="icon-box" style={{ backgroundColor: subject.color }}>{subject.icon}</div>
                <h3>{subject.title}</h3>
                <p>{subject.desc}</p>
                <div className="card-arrow">→</div>
              </div>
            ))}
          </div>
        ) : (
          <div className="no-results">
            <h3>😕 No subjects found for "{searchTerm}"</h3>
            <p>Try searching for Physics, Chemistry, Math, or Biology.</p>
          </div>
        )}
      </section>

      <section className="features-section animate-on-scroll">
        <div className="section-header">
          <h2>Why Choose Jagat Prep?</h2>
          <p>We provide everything you need to succeed.</p>
        </div>
        <div className="features-grid">
          {featuresData.map((feature, index) => (
            <div key={index} className="feature-item">
              <div className="feature-icon">{feature.icon}</div>
              <div>
                <h4>{feature.title}</h4>
                <p>{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="testimonials-section animate-on-scroll">
        <div className="section-header">
          <h2>Student Success Stories</h2>
        </div>
        <div className="testimonials-grid">
          {testimonialsData.map((testi, index) => (
            <div key={index} className="testimonial-card">
              <div className="quote-icon">“</div>
              <p className="testi-text">{testi.text}</p>
              <div className="testi-user">
                <div className="avatar">{testi.avatar}</div>
                <div>
                  <h4>{testi.name}</h4>
                  <span>{testi.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="faq-section animate-on-scroll">
        <div className="section-header">
          <h2>Frequently Asked Questions</h2>
        </div>
        <div className="faq-container">
          {faqData.map((faq, index) => (
            <div key={index} className={`faq-item ${activeAccordion === index ? 'active' : ''}`} onClick={() => toggleAccordion(index)}>
              <div className="faq-question">
                {faq.question}
                <span className="faq-toggle">{activeAccordion === index ? '−' : '+'}</span>
              </div>
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="cta-section animate-on-scroll">
        <div className="cta-content">
          <h2>Ready to start your journey?</h2>
          <p>Join 10,000+ students and ace your exams today.</p>
          <button className="btn-white">Get Started for Free</button>
        </div>
      </section>

      <div className="footer">
        <Footer />
      </div>
    </>
  );
};

// Helper: Animated Counter
const Counter = ({ target }) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const increment = Math.max(1, target / (duration / 16)); 
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) { setCount(target); clearInterval(timer); } 
      else { setCount(Math.ceil(start)); }
    }, 16);
    return () => clearInterval(timer);
  }, [target]);
  
  const formatNumber = (num) => (num >= 1000 ? (num / 1000).toFixed(0) + 'k' : num);
  return <span>{formatNumber(count)}</span>;
};

export default Home;