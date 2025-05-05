import React from "react";
import "./AboutMe.css";
import ALUMNI from './images/ALUMNI.png'
import ALUMNI2 from './images/ALUMNI2.jpg'

function AboutMe() {
  return (
    <div className="about-me-page">
      <section className="about-me-intro">
        <h2>ABOUT ME</h2>
        <p>
          I am a passionate Front-End Developer with a maniac side and a keen eye
          for design and a strong foundation in modern web technologies. I
          specialize in creating responsive, user-friendly interfaces using HTML,
          CSS, JavaScript, and React. With a focus on performance and usability,
          I strive to build seamless digital experiences that bring ideas to life.
          Constantly learning and adapting to new trends, I enjoy turning creative
          concepts into functional and visually appealing websites.
        </p>
      
      </section>

      <section className="about-me-projects">
        <h2>MY PROJECTS</h2>
        <div className="projects-container">
          <div className="project-card">
            <h3>TODO LIST</h3>
            <div className="project-links">
              
              <a href="https://nifledtodoapp.netlify.app/" target="_blank">
                GitHub Repo
              </a>
            </div>
          </div>

          <div className="project-card">
            <h3>POKEDEX</h3>
            
            <div className="project-links">
              
              <a href="https://sprightly-cheesecake-12d95f.netlify.app/" target="_blank">
                GitHub Repo
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="about-me-experience">
        <h2>SOFTWARE ENGINEERING</h2>
        <div className="experience-list">
          <div className="experience-item">
            <h3> TRIA COMPANY (OFFICE OF THE ALUMNI MANAGEMENT SYSTEM)</h3>
            <h4>- QUALITY ASSURANCE</h4>
            <h5> - JANUARY - MAY</h5>
            <img className="ALUMNI" src={ALUMNI} alt="ALUMNI" /> {/* First image */}
            <img className="ALUMNI2" src={ALUMNI2} alt="ALUMNI2" /> {/* Second image */}
            
            
          </div>

          {/* You can add more experience items here */}
        </div>
      </section>
    </div>
  );
}

export default AboutMe;