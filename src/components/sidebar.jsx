import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import { Home, FileText, Boxes, Palette, Sun, Moon, Instagram, Linkedin, Github, Twitter, Menu, X, GraduationCap } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import profileImg from '../assets/profile_pic.jpg';
import '../styles/sidebar.css';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about-section');
  const navigate = useNavigate();
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  const navLinks = [
    { id: 'about-section', icon: <Home size={22} />, text: 'about' },
    { id: 'resume-section', icon: <FileText size={22} />, text: 'resume' },
    { id: 'projects-section', icon: <Boxes size={22} />, text: 'projects' },
  ];

  const socialLinks = [
    { icon: <GraduationCap size={20} />, url: 'https://scholar.google.com/citations?hl=en&authuser=7&user=ue5rhwoAAAAJ', label: 'Google Scholar' },
    { icon: <Linkedin size={20} />, url: 'https://www.linkedin.com/in/arijitchakma/', label: 'LinkedIn' },
    { icon: <Github size={20} />, url: 'https://github.com/arijitchakma79/', label: 'Github' },
    { icon: <Instagram size={20} />, url: 'https://www.instagram.com/arigonn79/', label: 'Instagram' },
    { icon: <Twitter size={20} />, url: 'https://x.com/arigon79', label: 'X (Twitter)' },
  ];

  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') closeMenu();
    };
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const scrollToSection = (sectionId) => {
    const performScroll = () => {
      const section = document.getElementById(sectionId);
      if (section) section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    setActiveSection(sectionId);
    closeMenu();

    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(performScroll, 50);
    } else {
      performScroll();
    }
  };

  const SidebarContent = (
    <>
      <button
        type="button"
        className="brand-button"
        onClick={() => scrollToSection('about-section')}
        aria-label="Go to about section"
      >
        <span className="profile-image-container">
          <img src={profileImg} alt="Profile" className="profile-image" />
        </span>
      </button>

      <div className="nav-links">
        {navLinks.map((link) => {
          const isSectionActive = location.pathname === '/' && activeSection === link.id;
          return (
            <button
              key={link.id}
              className={`nav-link ${isSectionActive ? 'active' : ''}`}
              onClick={() => scrollToSection(link.id)}
            >
              {link.icon}
              <span className="nav-text">{link.text}</span>
            </button>
          );
        })}

        <NavLink
          to="/hobbies"
          className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
          onClick={closeMenu}
        >
          <Palette size={22} />
          <span className="nav-text">arts</span>
        </NavLink>
      </div>

      <div className="nav-controls">
        <button
          type="button"
          className="nav-link control-link"
          onClick={() => { toggleTheme(); closeMenu(); }}
          aria-label="Toggle theme"
        >
          {theme === 'dark' ? <Sun size={22} /> : <Moon size={22} />}
          <span className="nav-text">{theme === 'dark' ? 'light' : 'dark'}</span>
        </button>
      </div>

      <div className="social-links">
        {socialLinks.map((link, index) => (
          <a
            key={index}
            href={link.url}
            className="social-link"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.label}
          >
            {link.icon}
          </a>
        ))}
      </div>
    </>
  );

  return (
    <>
      <button
        className={`mobile-menu-btn ${isOpen ? 'open' : ''}`}
        onClick={() => setIsOpen((open) => !open)}
        aria-expanded={isOpen}
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
      >
        {isOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      <aside className="sidebar desktop-sidebar">
        {SidebarContent}
      </aside>

      <div className={`sidebar-overlay ${isOpen ? 'visible' : ''}`} onClick={closeMenu} role="presentation" />
      <aside className={`sidebar mobile-sidebar ${isOpen ? 'open' : ''}`}>
        {SidebarContent}
      </aside>
    </>
  );
};

export default Sidebar;