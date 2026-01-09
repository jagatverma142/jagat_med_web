import React, { useState } from 'react';
import '../CSS/Login.css';

const LoginPage = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [showPass, setShowPass] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorShake, setErrorShake] = useState(false);

  // Handle Input Changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // Stop shaking if user types again
    if (errorShake) setErrorShake(false);
  };

  // Handle Login Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API Call (2 seconds)
    setTimeout(() => {
      setIsLoading(false);
      
      // Dummy Logic: If password is short, show error
      if (formData.password.length < 6) {
        triggerError();
      } else {
        alert("Login Successful! Redirecting...");
      }
    }, 2000);
  };

  // Trigger Shake Animation
  const triggerError = () => {
    setErrorShake(true);
    setTimeout(() => setErrorShake(false), 500); // Remove class after animation
  };

  return (
    <div className="login-container">
      {/* Animated Background Orbs */}
      <div className="orb orb-1"></div>
      <div className="orb orb-2"></div>

      <div className={`login-card ${errorShake ? 'shake' : ''}`}>
        
        {/* Brand Header */}
        <div className="login-header">
          <h1 className="brand-logo">JAGAT <span className="script-highlight">PREP</span></h1>
          <p className="subtitle">Login to access your dashboard & analytics</p>
        </div>

        <form onSubmit={handleSubmit}>
          
          {/* Email Input with Floating Label */}
          <div className="input-group">
            <input 
              type="text" 
              name="email"
              className="custom-input" 
              placeholder=" " /* Space required for CSS :placeholder-shown trick */
              value={formData.email}
              onChange={handleChange}
              required
            />
            <label className="floating-label">Email Address</label>
            <span className="input-icon">✉️</span>
          </div>

          {/* Password Input with Floating Label */}
          <div className="input-group">
            <input 
              type={showPass ? "text" : "password"} 
              name="password"
              className="custom-input" 
              placeholder=" " 
              value={formData.password}
              onChange={handleChange}
              required
            />
            <label className="floating-label">Password</label>
            <span className="input-icon">🔒</span>
            
            <button 
              type="button" 
              className="toggle-pass" 
              onClick={() => setShowPass(!showPass)}
            >
              {showPass ? "🙈" : "👁️"}
            </button>
          </div>

          {/* Remember & Forgot */}
          <div className="options-row">
            <label style={{display:'flex', gap:'8px', cursor:'pointer', color:'#94a3b8'}}>
              <input type="checkbox" style={{accentColor: '#10b981'}} /> 
              Remember me
            </label>
            <a href="#" className="forgot-link">Forgot Password?</a>
          </div>

          {/* Dynamic Login Button */}
          <button type="submit" className="btn-primary" disabled={isLoading}>
            {isLoading ? (
              <>
                <div className="spinner"></div> Signing In...
              </>
            ) : (
              <>Login Now <span style={{fontSize:'1.2rem'}}>→</span></>
            )}
          </button>

          {/* Social Divider */}
          <div className="divider">
            <span>Or continue with</span>
          </div>

          {/* Social Buttons */}
          <div className="social-login">
            <button type="button" className="social-btn">
              <img src="https://img.icons8.com/color/24/google-logo.png" alt="Google" />
              Google
            </button>
            <button type="button" className="social-btn">
              <img src="https://img.icons8.com/ios-filled/24/ffffff/mac-os.png" alt="Apple" />
              Apple
            </button>
          </div>

        </form>

        <div className="login-footer">
          Don't have an account? 
          <a href="#" className="link-highlight">Create Account</a>
        </div>

      </div>
    </div>
  );
};

export default LoginPage;