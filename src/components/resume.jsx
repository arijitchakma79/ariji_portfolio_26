import React from 'react';
import '../styles/resume.css';
import resumePdf from '../assets/resume.pdf';
import logo from '../assets/drexel_logo.png';
import drexelCciResearchLogo from '../assets/drexel_cci_research_logo.jpg';
import bmsLogo from '../assets/BMS.png';
import developForGoodLogo from '../assets/develop_for_good_logo.jpg';
import drexelCCILogo from '../assets/drexel_cci.jpg';
import kbraLogo from '../assets/kbra.jpg';
import drawsimImage from '../assets/drawsim.jpg';

const Resume = () => {
  return (
    <div className="resume">
      <div className="resume-header">
        <div>
          <h1>resume <span aria-hidden>📄</span></h1>
          <p className="resume-subtitle">education, experience, publications & awards</p>
        </div>
        <a
          href={resumePdf}
          target="_blank"
          rel="noopener noreferrer"
          className="resume-button"
          aria-label="View resume (PDF)"
        >
          <span aria-hidden>📄</span>
          <span>view resume</span>
        </a>
      </div>

      {/* Education Section */}
      <section className="resume-section">
        <h2>education <span aria-hidden>🎓</span></h2>
        <div className="item">
          <div className="content">
            <h3>bachelors in computer science</h3>
            <p className="subtitle">Drexel University, 2027</p>
          </div>
          <img src={logo} alt="Drexel" className="company-logo-small" loading="lazy" />
        </div>
      </section>

      {/* Favourite Courses Section */}
      <section className="resume-section">
        <h2>some favourite courses <span aria-hidden>📚</span></h2>
        <p className="resume-section-note">* indicates grad level. listed in no particular order.</p>
        <div className="item">
          <div className="content">
            <h3>computational photography (CS435)</h3>
            <p className="subtitle">Drexel University</p>
          </div>
        </div>
        <div className="item">
          <div className="content">
            <h3>deep learning (CS615)*</h3>
            <p className="subtitle">Drexel University</p>
          </div>
        </div>
        <div className="item">
          <div className="content">
            <h3>augmented programming (CST480)</h3>
            <p className="subtitle">Drexel University</p>
          </div>
        </div>
        <div className="item">
          <div className="content">
            <h3>machine learning (CS383)</h3>
            <p className="subtitle">Drexel University</p>
          </div>
        </div>
        <div className="item">
          <div className="content">
            <h3>optimization theory (MATH305)</h3>
            <p className="subtitle">Drexel University</p>
          </div>
        </div>
      </section>

      {/* Publications Section */}
      <section className="resume-section">
        <h2>publications <span aria-hidden>📑</span></h2>
        <a
          href="https://arxiv.org/abs/2602.01578"
          target="_blank"
          rel="noopener noreferrer"
          className="publication-card-link"
        >
          <div className="item clickable-item publication-item">
            <img src={drawsimImage} alt="DrawSim-PD overview" className="publication-image" loading="lazy" />
            <div className="content">
              <h3 className="publication-title">
                drawsim-pd: simulating student science drawings to support NGSS-aligned teacher
                diagnostic reasoning
              </h3>
              <p className="subtitle">
                Arijit Chakma, Peng He, Tingting Li, Tiffany D. Do, and Feng Liu.
              </p>
              <div className="publication-link">
                <span>preprint</span>
              </div>
            </div>
          </div>
        </a>
      </section>

      {/* Experience Section */}
      <section className="resume-section">
        <h2>experience <span aria-hidden>💼</span></h2>
        <div className="item">
          <div className="content">
            <h3>incoming software engineer intern</h3>
            <p className="subtitle">KBRA, April 2026 -  September 2026</p>
          </div>
          <img src={kbraLogo} alt="KBRA" className="company-logo-small" loading="lazy" />
        </div>
        <div className="item">
          <div className="content">
            <h3>undergraduate researcher</h3>
            <p className="subtitle">
              <a
                href="https://vilab-group.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="resume-link"
              >
                Visual Intelligence Lab
              </a>
              , April 2025 -  Present
            </p>
          </div>
          <img src={drexelCciResearchLogo} alt="Drexel CCI Research" className="company-logo-small" />
        </div>
        <div className="item">
          <div className="content">
            <h3>course assistant</h3>
            <p className="subtitle">
              Drexel University College of Computing & Informatics, September 2025 -  Present
            </p>
          </div>
          <img src={drexelCCILogo} alt="Drexel CCI" className="company-logo-small" loading="lazy" />
        </div>
        <div className="item">
          <div className="content">
            <h3>software engineer intern</h3>
            <p className="subtitle">Bristol Myers Squibb, April 2024 - September 2024</p>
          </div>
          <img src={bmsLogo} alt="Bristol Myers Squibb" className="company-logo" />
        </div>
        <div className="item">
          <div className="content">
            <h3>software engineer</h3>
            <p className="subtitle">Develop For Good, May 2024 - August 2024</p>
          </div>
          <img src={developForGoodLogo} alt="Develop For Good" className="company-logo-small" loading="lazy" />
        </div>
      </section>

      {/* Awards Section */}
      <section className="resume-section">
        <h2>awards & honors <span aria-hidden>🏆</span></h2>
        <div className="item">
          <div className="content">
            <h3>best social impact hack</h3>
            <p className="subtitle">dragonhacks 2025 @ (Drexel University)</p>
          </div>
        </div>
        <div className="item">
          <div className="content">
            <h3>beginner quantum computing track - 2nd place</h3>
            <p className="subtitle">bitcamps 2025 @ (University of Maryland, College Park)</p>
          </div>
        </div>
        <div className="item">
          <div className="content">
            <h3>best overall first</h3>
            <p className="subtitle">pennapps 2024 @ (University of Pennsylvania)</p>
          </div>
        </div>
        <div className="item">
          <div className="content">
            <h3>general prize overall second</h3>
            <p className="subtitle">hophacks 2024 @ (John Hopkins University)</p>
          </div>
        </div>
        <div className="item">
          <div className="content">
            <h3>bloomberg philanthropic hack - 3rd prize</h3>
            <p className="subtitle">hophacks 2024 @ (John Hopkins University)</p>
          </div>
        </div>
        <div className="item">
          <div className="content">
            <h3>best beginner project</h3>
            <p className="subtitle">devfest 2025 @ (Columbia University)</p>
          </div>
        </div>
        <div className="item">
          <div className="content">
            <h3>best interactive and multimedia track winner</h3>
            <p className="subtitle">dragonhacks 2024 @ (Drexel University)</p>
          </div>
        </div>
        <div className="item">
          <div className="content">
            <h3>deans list</h3>
            <p className="subtitle">awarded for GPA over 3.70 (all quarters)</p>
          </div>
        </div>
        <div className="item">
          <div className="content">
            <h3>drexel global scholarship</h3>
            <p className="subtitle">
              1 out of 13 international students who were awarded this prestigious scholarship in
              2022
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Resume;

