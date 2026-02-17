import React from 'react';
import Typewriter from './Typewriter';
import '../styles/home.css';

const About = () => {
  const typewriterPhrases = [
    'i am a researcher 🔬',
    'i am a software engineer 💻',
  ];

  return (
    <div className="home">
      <section className="intro">
        <div className="intro-grid">
          <div className="intro-hero">
            <h1 className="intro-name">hi, i am ariji</h1>
            <h3 className="intro-typewriter">
              <Typewriter
                phrases={typewriterPhrases}
                typingSpeed={100}
                deletingSpeed={50}
                pauseTime={2000}
              />
            </h3>
          </div>

          <div className="bio">
            <p>
              I’m a junior computer science student at Drexel University. my research focuses on
              2D/3D/4D generation, applied LLMs, and human-computer interaction (HCI), working under
              professor <a href="https://liufeng2915.github.io/" target="_blank" rel="noopener noreferrer" className="email-link"> Feng Liu</a>.
            </p>
            <p>
              I’m also a long-time developer with experience in full-stack and AI-powered applications,
              plus IoT and AR/VR.
            </p>
            <p>
              i previously interned at Bristol Myers Squibb and will be interning at KBRA as a software
              engineer in spring/summer 2026.
            </p>
            <p>
              i love hackathons and have attended around 15 at Stanford, MIT, UPenn, Columbia, Hopkins,
              and more.
            </p>
            <p className="email-paragraph">feel free to reach out through any link in the header or footer.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

