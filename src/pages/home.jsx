import React from 'react';
import About from '../components/about';
import Resume from '../components/resume';
import Projects from '../components/project';
import Blogs from '../components/blogs.jsx';
import '../styles/hero.css';

const Home = () => {
  return (
    <div className="home-page-layout">
      <section id="about-section" className="content-section">
        <div className="content-section-inner">
          <About />
        </div>
      </section>
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
