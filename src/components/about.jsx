import React from 'react';
import '../styles/home.css';

const About = () => {
  return (
    <div className="home">
      <section className="intro">
        <div className="intro-grid">
          <div className="bio">
            <p>
              I’m a junior computer science student at Drexel University. my research focuses on
              <span className="dim-emoji" aria-label="2D">2️⃣</span>D / <span className="dim-emoji" aria-label="3D">3️⃣</span>D / <span className="dim-emoji" aria-label="4D">4️⃣</span>D generation, applied LLMs, and human-computer interaction (HCI), working under
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
            <p className="email-paragraph">feel free to reach out.</p>
            <div className="about-links">
              <a href="https://github.com/arijitchakma79/" target="_blank" rel="noopener noreferrer"><span className="about-link-emoji" aria-hidden>🐙</span> github</a>
              <a href="https://www.linkedin.com/in/arijitchakma/" target="_blank" rel="noopener noreferrer"><span className="about-link-emoji" aria-hidden>💼</span> linkedin</a>
              <a href="https://scholar.google.com/citations?hl=en&authuser=7&user=ue5rhwoAAAAJ" target="_blank" rel="noopener noreferrer"><span className="about-link-emoji" aria-hidden>🎓</span> google scholar</a>
              <a href="https://www.instagram.com/arigonn79/" target="_blank" rel="noopener noreferrer"><span className="about-link-emoji" aria-hidden>📷</span> instagram</a>
              <a href="https://x.com/arigon79" target="_blank" rel="noopener noreferrer"><span className="about-link-emoji" aria-hidden>𝕏</span> x</a>
              <a href="mailto:ac4393@drexel.edu"><span className="about-link-emoji" aria-hidden>📧</span> email</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

