import React from 'react';
import About from '../components/about';
import Resume from '../components/resume';
import Projects from '../components/project';

const Home = () => {
  return (
    <div className="home-page-layout">
      <section id="about-section" className="content-section">
        <About />
      </section>
      <section id="resume-section" className="content-section">
        <Resume />
      </section>
      <section id="projects-section" className="content-section">
        <Projects />
      </section>
    </div>
  );
};

export default Home;
