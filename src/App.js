import React from "react";
import "./App.css";
import { FaHome, FaUser, FaCode, FaProjectDiagram, FaEnvelope } from "react-icons/fa";  // Icons import



function App() {
  return (
    <div className="App dark-theme">
      <header className="App-header big-header">
        <div className="header-content">
          <h1>Arivnandhan Chitheswaran</h1>
          <p>Service Desk | Development | Website Management</p>
          <nav>
            <ul>
              <li><a href="#home"><FaHome className="nav-icon" /> Home</a></li>
              <li><a href="#about"><FaUser className="nav-icon" /> About Me</a></li>
              <li><a href="#skills"><FaCode className="nav-icon" /> Skills</a></li>
              <li><a href="#projects"><FaProjectDiagram className="nav-icon" /> Projects</a></li>
              <li><a href="#contact"><FaEnvelope className="nav-icon" /> Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <section id="home" className="section" style={{ position: 'relative', overflow: 'hidden', height: '100vh' }}>
  <div className="hero" style={{ position: 'relative', zIndex: 10 }}>
    <h1>Welcome to My Portfolio</h1>
    <p>Exploring the blend of service excellence and technical expertise to create meaningful solutions.</p>
  </div>
  <video 
    autoPlay 
    muted 
    loop 
    style={{
      position: 'absolute', 
      top: 0, 
      left: 0, 
      width: '100%', 
      height: '100%', 
      objectFit: 'cover', 
      zIndex: -1,
    }}
  >
    <source src={`${process.env.PUBLIC_URL}/bgrob.mp4`} type="video/mp4" />
  </video>
  <div style={{
    position: 'absolute', 
    top: 0, 
    left: 0, 
    width: '100%', 
    height: '100%', 
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Dark overlay
    zIndex: 1
  }}></div>
</section>




<section id="skills" className="section skills-section">
  <div className="content">
    <h2 className="skills-title">Skills</h2>
    <div className="skills-cards">
      <div className="card">
        <div className="card-inner">
          <div className="card-front">
            <h3>New Relic</h3>
          </div>
          <div className="card-back">
            <p>Setting up monitors, analyzing performance, and creating dashboards.</p>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="card-inner">
          <div className="card-front">
            <h3>Jira</h3>
          </div>
          <div className="card-back">
            <p>Workflow management, issue tracking, and ITSM best practices.</p>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="card-inner">
          <div className="card-front">
            <h3>ReactJS</h3>
          </div>
          <div className="card-back">
            <p>Developing dynamic web applications with component-based architecture.</p>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="card-inner">
          <div className="card-front">
            <h3>Client Communication</h3>
          </div>
          <div className="card-back">
            <p>Acting as a bridge between technical teams and clients to ensure seamless communication.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>






      <section id="projects" className="section">
        <div className="content">
          <h2>Projects</h2>
          <div className="project-list">
            <div className="project-item">
              <h3>Blockbuster Style Website</h3>
              <p>
                Developed and deployed a responsive website using ReactJS for Blockbuster Style Pvt. Ltd., hosted on GoDaddy.
              </p>
            </div>
            <div className="project-item">
              <h3>Service Desk Optimization</h3>
              <p>
                Enhanced incident management workflows and SLA compliance using Jira, ensuring improved task resolution.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="section">
        <div className="content">
          <h2>Contact</h2>
          <p>Email: <a href="mailto:arivanandhan33@gmail.com">arivanandhan33@gmail.com</a></p>
          <p>LinkedIn: <a href="https://www.linkedin.com/in/arivanandhan">linkedin.com/in/arivanandhan</a></p>
          <p>GitHub: <a href="https://github.com/respectedArivu">github.com/respectedArivu</a></p>
          <p>Portfolio: <a href="https://respectedarivu.netlify.app">respectedarivu.netlify.app</a></p>
        </div>
      </section>
    </div>
  );
}

export default App;
