import React, { useState } from 'react';
import { Globe } from 'lucide-react';
import '../styles/projects.css';
import deneyes from '../assets/deneyes.jpg';
import scout from '../assets/scout.jpg';
import skyhigh from '../assets/skyhigh.jpg';
import pigeonpost from '../assets/pigeonpost.png';
import visualed from '../assets/visualed.jpg';
import soundshield from '../assets/soundshield.jpg';
import thrifthub from '../assets/thrifthub.jpg';
import ventureahead from '../assets/ventureahead.png';
import woundwatch from '../assets/woundWatch.png';
import collegebuddy from '../assets/collegebuddy.png';
import carbon0 from '../assets/carbon0.jpg';
import tickermaster from '../assets/tickermaster.jpg';
import phillynet from '../assets/phillynet.png';

const Projects = () => {
  const [showAll, setShowAll] = useState(false);

  const projects = [
    {
      title: 'phillynet nexus',
      description:
        'an ai-powered dashboard that predicts where connectivity complaints will spike across philadelphia\'s 53 zip codes. combines fcc broadband data, ookla speed measurements, census demographics, and 311 complaint history to give internet providers and city planners a heads-up.',
      image: phillynet,
      icon: <Globe size={20} />,
      link: 'https://arijitchakma79.github.io/phillynet-nexus-page/',
      featured: true,
    },
    {
      title: 'tickermaster',
      description:
        'a sandbox of financial AI agents that lets you test strategies, learn trading fundamentals, and understand sentiment-driven moves before placing real orders. features live research with market data and social sentiment, multi-agent trading simulations, and watchlist tracking with AI broker support.',
      image: tickermaster,
      icon: <Globe size={20} />,
      link: 'https://devpost.com/software/tickermaster',
      featured: true,
    },
    {
      title: 'carbon0',
      description:
        'a chrome extension that empowers online shoppers to make eco-conscious choices by analyzing product carbon footprints in real time and suggesting greener alternatives.',
      image: carbon0,
      icon: <Globe size={20} />,
      link: 'https://devpost.com/software/carbon0-0brfc1',
      featured: false,
    },
    {
      title: 'woundwatch',
      description:
        'an AI-powered app to reconstruct 3D wound models from 2D images using depth estimation and segmentation, supporting real-time clinical analysis and remote healthcare for patients.',
      image: woundwatch,
      icon: <Globe size={20} />,
      link: 'https://devpost.com/software/deepcare-ai',
      featured: true,
    },
    {
      title: 'ventureahead.ai',
      description:
        'an AI-powered multi-agent platform that streamlines business and product ideation, market research, strategic analysis, and future outcome simulation to help entrepreneurs and organizations make data-driven decisions.',
      image: ventureahead,
      icon: <Globe size={20} />,
      link: 'https://github.com/arijitchakma79/PhillyCodefest25',
      featured: false,
    },
    {
      title: 'collegebuddy',
      description:
        'your all-in-one platform for campus connections, organizations, and events. college buddy helps students discover and join campus organizations, stay connected with events, and build their campus community.',
      image: collegebuddy,
      icon: <Globe size={20} />,
      link: 'https://github.com/arijitchakma79/CollegeBuddy',
      featured: false,
    },
    {
      title: 'skyhigh',
      description:
        'an IoT frisbee equipped with multi-agent AI systems capable of scanning critical areas during search and rescue missions and providing helpful inspections of the area.',
      image: skyhigh,
      icon: <Globe size={20} />,
      link: 'https://devpost.com/software/skyhigh-hf13ec',
      featured: false,
    },
    {
      title: 'pigeonpost',
      description:
        'ai system that processes live lecture audio for instant knowledge retrieval, automatically generates diverse study content, and drives engagement through gamified learning metrics.',
      image: pigeonpost,
      icon: <Globe size={20} />,
      link: 'https://dorahacks.io/buidl/19412',
      featured: false,
    },
    {
      title: 'deneyes',
      description:
        'robot to detect early signs of ADHD using computer vision and reinforcement learning.',
      image: deneyes,
      icon: <Globe size={20} />,
      link: 'https://devpost.com/software/deneyes',
      featured: true,
    },
    {
      title: 'soundshield',
      description:
        'a smart headphone device that reduces unwanted noise while keeping important sounds like speech and warns users when someone is behind them.',
      image: soundshield,
      icon: <Globe size={20} />,
      link: 'https://devpost.com/software/soundsheild',
      featured: true,
    },
    {
      title: 'visual-ed',
      description:
        'ai-powered eye-tracking system that helps people with mobility disabilities communicate in educational settings by detecting eye movements to answer questions and interact with their surroundings.',
      image: visualed,
      icon: <Globe size={20} />,
      link: 'https://devpost.com/software/visual-ed',
      featured: false,
    },
    {
      title: 'scout',
      description:
        'autonomous campus security robot that patrols autonomously, detects calls for help, and shares its location with security teams in real time through a mobile app.',
      image: scout,
      icon: <Globe size={20} />,
      link: 'https://devpost.com/software/scout-campus-security',
      featured: false,
    },
    {
      title: 'thrifthub',
      description:
        "personal finance tracker that visualizes users' income, expenses, and spending patterns through interactive charts and graphs to help monitor financial habits.",
      image: thrifthub,
      icon: <Globe size={20} />,
      link: 'https://github.com/arijitchakma79/ThriftHub',
      featured: false,
    },
  ];

  const displayed = showAll ? projects : projects.filter((p) => p.featured);
  const hiddenCount = projects.filter((p) => !p.featured).length;

  return (
    <div className="projects">
      <div className="projects-header">
        <h1>projects <span aria-hidden>🚀</span></h1>
        <p className="projects-subtitle">
          {showAll
            ? 'all projects'
            : 'selected projects'}
        </p>
      </div>
      <div className="projects-grid">
        {displayed.map((project, index) => (
          <a
            key={project.title}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card-link"
          >
            <div className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} loading="lazy" />
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-link">
                  <span aria-hidden>↗️</span>
                  <span>view project</span>
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>

      <button
        type="button"
        className="projects-toggle"
        onClick={() => setShowAll((s) => !s)}
      >
        {showAll ? (
          <>show less <span aria-hidden>↑</span></>
        ) : (
          <>show all <span className="projects-toggle-count">{hiddenCount} more</span> <span aria-hidden>↓</span></>
        )}
      </button>
    </div>
  );
};

export default Projects;
