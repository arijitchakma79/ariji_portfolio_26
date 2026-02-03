import React from 'react';
import { GraduationCap, Briefcase, Award, FileText, BookOpen } from 'lucide-react';
import '../styles/resume.css';
import logo from '../assets/drexel_logo.png';
import drexelCciResearchLogo from '../assets/drexel_cci_research_logo.jpg';
import bmsLogo from '../assets/BMS.png';
import developForGoodLogo from '../assets/develop_for_good_logo.jpg';
import drexelCCILogo from '../assets/drexel_cci.jpg';
import kbraLogo from '../assets/kbra.jpg';
import drawsimImage from '../assets/drawsim.jpg';
import petGif from '../assets/pet.gif';
import awardsGif from '../assets/blaze.gif';
import researcherGif from '../assets/party-parrot.gif';
import experienceGif from '../assets/wave.gif';

const Resume = () => {
  return (
    <div className="resume">
      <div className="resume-header">
        <h1>resume</h1>
        <a
          href="https://drive.google.com/drive/folders/1y-MUB9luMH3jtbl1PI1W__xDFSkVz_eA?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="resume-button"
        >
          <FileText size={20} />
          <span>View</span>
        </a>
      </div>

      {/* Education Section */}
      <section className="resume-section">
        <h2>education</h2>
        <div className="item">
          <GraduationCap className="icon" size={20} />
          <div className="content">
            <h3>Bachelors in Computer Science</h3>
            <p className="subtitle">Drexel University<img src={petGif} alt="" className="resume-pet-gif" /> , 2027 </p>
          </div>
          <img src={logo} alt="Drexel" className="company-logo-small" loading="lazy" />
        </div>
      </section>

      {/* Favourite Courses Section */}
      <section className="resume-section">
        <h2>some favourite courses</h2>
        <p className="resume-section-note">* indicates grad level. listed in no particular order.</p>
        <div className="item">
          <BookOpen className="icon" size={20} />
          <div className="content">
            <h3>Computational Photography (CS435)</h3>
            <p className="subtitle">Drexel University</p>
          </div>
        </div>
        <div className="item">
          <BookOpen className="icon" size={20} />
          <div className="content">
            <h3>Deep Learning (CS615)*</h3>
            <p className="subtitle">Drexel University</p>
          </div>
        </div>
        <div className="item">
          <BookOpen className="icon" size={20} />
          <div className="content">
            <h3>Augmented Programming (CST480)</h3>
            <p className="subtitle">Drexel University</p>
          </div>
        </div>
        <div className="item">
          <BookOpen className="icon" size={20} />
          <div className="content">
            <h3>Machine Learning (CS383)</h3>
            <p className="subtitle">Drexel University</p>
          </div>
        </div>
        <div className="item">
          <BookOpen className="icon" size={20} />
          <div className="content">
            <h3>Optimization Theory (MATH305)</h3>
            <p className="subtitle">Drexel University</p>
          </div>
        </div>
      </section>

      {/* Publications Section */}
      <section className="resume-section">
        <h2>publications</h2>
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
                DrawSim-PD: Simulating Student Science Drawings to Support NGSS-Aligned Teacher
                Diagnostic Reasoning
              </h3>
              <p className="subtitle">
                Arijit Chakma, Peng He, Tingting Li, Tiffany D. Do, and Feng Liu.
              </p>
              <div className="publication-link">
                <span>PrePrint</span>
              </div>
            </div>
          </div>
        </a>
      </section>

      {/* Experience Section */}
      <section className="resume-section">
        <h2>experience <img src={experienceGif} alt="" className="resume-pet-gif" /></h2>
        <div className="item">
          <Briefcase className="icon" size={20} />
          <div className="content">
            <h3>Incoming Software Engineer Intern</h3>
            <p className="subtitle">KBRA, April 2026 -  September 2026</p>
          </div>
          <img src={kbraLogo} alt="KBRA" className="company-logo-small" loading="lazy" />
        </div>
        <div className="item">
          <Briefcase className="icon" size={20} />
          <div className="content">
            <h3>Undergraduate Researcher <img src={researcherGif} alt="" className="resume-pet-gif" /></h3>
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
          <Briefcase className="icon" size={20} />
          <div className="content">
            <h3>Course Assistant</h3>
            <p className="subtitle">
              Drexel University College of Computing & Informatics, September 2025 -  Present
            </p>
          </div>
          <img src={drexelCCILogo} alt="Drexel CCI" className="company-logo-small" loading="lazy" />
        </div>
        <div className="item">
          <Briefcase className="icon" size={20} />
          <div className="content">
            <h3>Software Engineer Intern</h3>
            <p className="subtitle">Bristol Myers Squibb, April 2024 - September 2024</p>
          </div>
          <img src={bmsLogo} alt="Bristol Myers Squibb" className="company-logo" />
        </div>
        <div className="item">
          <Briefcase className="icon" size={20} />
          <div className="content">
            <h3>Software Engineer</h3>
            <p className="subtitle">Develop For Good, May 2024 - August 2024</p>
          </div>
          <img src={developForGoodLogo} alt="Develop For Good" className="company-logo-small" loading="lazy" />
        </div>
      </section>

      {/* Awards Section */}
      <section className="resume-section">
        <h2>awards & honors <img src={awardsGif} alt="" className="resume-pet-gif" /></h2>
        <div className="item">
          <Award className="icon" size={20} />
          <div className="content">
            <h3>Best Social Impact Hack</h3>
            <p className="subtitle">DragonHacks 2025 @ (Drexel University)</p>
          </div>
        </div>
        <div className="item">
          <Award className="icon" size={20} />
          <div className="content">
            <h3>Beginner Quantum Computing Track - 2nd Place</h3>
            <p className="subtitle">Bitcamps 2025 @ (University of Maryland, College Park)</p>
          </div>
        </div>
        <div className="item">
          <Award className="icon" size={20} />
          <div className="content">
            <h3>Best Overall First</h3>
            <p className="subtitle">PennApps 2024 @ (University of Pennsylvania)</p>
          </div>
        </div>
        <div className="item">
          <Award className="icon" size={20} />
          <div className="content">
            <h3>General Prize Overall Second</h3>
            <p className="subtitle">HopHacks 2024 @ (John Hopkins University)</p>
          </div>
        </div>
        <div className="item">
          <Award className="icon" size={20} />
          <div className="content">
            <h3>Bloomberg Philanthropic Hack - 3rd Prize</h3>
            <p className="subtitle">HopHacks 2024 @ (John Hopkins University)</p>
          </div>
        </div>
        <div className="item">
          <Award className="icon" size={20} />
          <div className="content">
            <h3>Best Beginner Project</h3>
            <p className="subtitle">DevFest 2025 @ (Columbia University)</p>
          </div>
        </div>
        <div className="item">
          <Award className="icon" size={20} />
          <div className="content">
            <h3>Best Interactive and Multimedia Track Winner</h3>
            <p className="subtitle">DragonHacks 2024 @ (Drexel University)</p>
          </div>
        </div>
        <div className="item">
          <Award className="icon" size={20} />
          <div className="content">
            <h3>Deans List</h3>
            <p className="subtitle">Awarded for GPA over 3.70 (All Quarters)</p>
          </div>
        </div>
        <div className="item">
          <Award className="icon" size={20} />
          <div className="content">
            <h3>Drexel Global Scholarship</h3>
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

