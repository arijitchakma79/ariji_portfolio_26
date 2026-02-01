import React from 'react';
import { Globe, ExternalLink } from 'lucide-react';
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
import carbon0 from '../assets/carbon0.png'

const Projects = () => {
  const projects = [
    {
      title: 'Carbon0',
      description:
        'A Chrome extension that empowers online shoppers to make eco-conscious choices by analyzing product carbon footprints in real time and suggesting greener alternatives.',
      category: 'Technical',
      image: carbon0,
      icon: <Globe size={20} />,
      link: 'https://devpost.com/software/carbon0-0brfc1',
    },
    {
      title: 'CollegeBuddy',
      description:
        'Your all-in-one platform for campus connections, organizations, and events. College Buddy helps students discover and join campus organizations, stay connected with events, and build their campus community.',
      category: 'Technical',
      image: collegebuddy,
      icon: <Globe size={20} />,
      link: 'https://github.com/arijitchakma79/CollegeBuddy',
    },
    {
      title: 'WoundWatch',
      description:
        'An AI-powered app to reconstruct 3D wound models from 2D images using depth estimation and segmentation, supporting real-time clinical analysis and remote healthcare for patients.',
      category: 'Technical',
      image: woundwatch,
      icon: <Globe size={20} />,
      link: 'https://devpost.com/software/deepcare-ai',
    },
    {
      title: 'VentureAhead.AI',
      description:
        'An AI-powered multi-agent platform that streamlines business and product ideation, market research, strategic analysis, and future outcome simulation to help entrepreneurs and organizations make data-driven decisions.',
      category: 'Technical',
      image: ventureahead,
      icon: <Globe size={20} />,
      link: 'https://github.com/arijitchakma79/PhillyCodefest25',
    },
    {
      title: 'SkyHigh',
      description:
        'An IoT Frisbee equipped with multi-agent AI systems capable of scanning critical areas during search and rescue missions and providing helpful inspections of the area.',
      category: 'Technical',
      image: skyhigh,
      icon: <Globe size={20} />,
      link: 'https://devpost.com/software/skyhigh-hf13ec',
    },
    {
      title: 'PigeonPost',
      description:
        'AI system that processes live lecture audio for instant knowledge retrieval, automatically generates diverse study content, and drives engagement through gamified learning metrics.',
      category: 'Technical',
      image: pigeonpost,
      icon: <Globe size={20} />,
      link: 'https://dorahacks.io/buidl/19412',
    },
    {
      title: 'DenEyes',
      description:
        'Robot to detect early signs of ADHD using computer vision and reinforcement learning.',
      category: 'Technical',
      image: deneyes,
      icon: <Globe size={20} />,
      link: 'https://devpost.com/software/deneyes',
    },
    {
      title: 'SoundShield',
      description:
        'A smart headphone device that reduces unwanted noise while keeping important sounds like speech and warns users when someone is behind them.',
      category: 'Technical',
      image: soundshield,
      icon: <Globe size={20} />,
      link: 'https://devpost.com/software/soundsheild',
    },
    {
      title: 'Visual-ED',
      description:
        'AI-powered eye-tracking system that helps people with mobility disabilities communicate in educational settings by detecting eye movements to answer questions and interact with their surroundings.',
      category: 'Technical',
      image: visualed,
      icon: <Globe size={20} />,
      link: 'https://devpost.com/software/visual-ed',
    },
    {
      title: 'Scout',
      description:
        'Autonomous campus security robot that patrols autonomously, detects calls for help, and shares its location with security teams in real time through a mobile app.',
      category: 'Technical',
      image: scout,
      icon: <Globe size={20} />,
      link: 'https://devpost.com/software/scout-campus-security',
    },
    {
      title: 'ThirftHub',
      description:
        "Personal finance tracker that visualizes users' income, expenses, and spending patterns through interactive charts and graphs to help monitor financial habits.",
      category: 'Technical',
      image: thrifthub,
      icon: <Globe size={20} />,
      link: 'https://github.com/arijitchakma79/ThriftHub',
    },
  ];

  return (
    <div className="projects">
      <h1>projects</h1>
      <p className="projects-subtitle">this includes my personal and group projects</p>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <a
            key={index}
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
                <div className="project-category">
                  {project.icon}
                  <span>{project.category}</span>
                </div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-link">
                  <ExternalLink size={16} />
                  <span>view project</span>
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Projects;

