import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { FileText, LayoutGrid, Sun, Moon } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import '../styles/navbar.css';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(() => section.scrollIntoView({ behavior: 'smooth', block: 'start' }), 50);
      } else {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  const navLinks = [
    { id: 'resume-section', icon: <FileText size={18} />, text: 'resume' },
    { id: 'projects-section', icon: <LayoutGrid size={18} />, text: 'projects' },
    { id: 'blogs-section', icon: <FileText size={18} />, text: 'writing' },
  ];

  return (
    <header className="navbar">
      <div className="navbar-inner">
        <div className="navbar-center">
          <nav className="navbar-links">
            {navLinks.map(({ id, icon, text }) => (
              <button
                key={id}
                type="button"
                className="navbar-link"
                onClick={() => scrollToSection(id)}
              >
                {icon}
                <span>{text}</span>
              </button>
            ))}
          </nav>
        </div>
        <div className="navbar-actions">
          <button
            type="button"
            className="navbar-link navbar-theme"
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
