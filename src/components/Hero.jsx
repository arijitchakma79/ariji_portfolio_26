import React from 'react';
import Typewriter from './Typewriter';
import Navbar from './Navbar';
import teaserGif from '../assets/teaser.gif';
import '../styles/hero.css';

const Hero = () => {
  const typewriterPhrases = [
    'i am a junior at Drexel 🐉',
    'i am a researcher 🔬',
    'i am a software engineer 💻',
  ];

  return (
    <header className="hero">
      <div className="hero-bg">
        <img src={teaserGif} alt="" className="hero-teaser" aria-hidden />
        <div className="hero-overlay" />
        {/* Floating particles */}
        <div className="hero-particles" aria-hidden>
          {[...Array(8)].map((_, i) => (
            <div key={i} className="hero-particle" />
          ))}
        </div>
      </div>
      <Navbar />
      <div className="hero-content">
        <h1 className="hero-name">hi, i am ariji</h1>
        <p className="hero-tagline">
          <Typewriter
            phrases={typewriterPhrases}
            typingSpeed={100}
            deletingSpeed={50}
            pauseTime={2000}
          />
        </p>
      </div>
    </header>
  );
};

export default Hero;
