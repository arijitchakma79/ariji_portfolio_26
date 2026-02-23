import React from 'react';
import About from '../components/about';
import Resume from '../components/resume';
import Projects from '../components/project';
import Blogs from '../components/blogs.jsx';
import profileImg from '../assets/profile_pic.jpg';
import '../styles/hero.css';

const Home = () => {
  return (
    <div className="home-page-layout">
      <div className="about-with-profile">
        <div className="profile-overlap profile-overlap--left" aria-hidden>
          <div className="hero-profile">
            <div className="hero-profile-fire">
              <div className="hero-profile-inner">
                <img src={profileImg} alt="Ariji" className="hero-profile-pic" />
              </div>
            </div>
          </div>
        </div>
        <section id="about-section" className="content-section">
          <div className="content-section-inner">
            <About />
          </div>
        </section>
      </div>
      <section id="resume-section" className="content-section">
        <div className="content-section-inner">
          <Resume />
        </div>
      </section>
      <section id="projects-section" className="content-section">
        <div className="content-section-inner">
          <Projects />
        </div>
      </section>
      <section id="blogs-section" className="content-section">
        <div className="content-section-inner">
          <Blogs />
        </div>
      </section>
    </div>
  );
};

export default Home;
