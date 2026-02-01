import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import { Home, FileText, Boxes, Palette, Sun, Moon, Instagram, Linkedin, Github, Twitter, Menu, X, Droplets, Check } from 'lucide-react';
import { useTheme, ACCENT_OPTIONS } from '../contexts/ThemeContext';
import profileImg from '../assets/profile_pic.jpg';
import '../styles/sidebar.css';

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('about-section');
    const navigate = useNavigate();
    const location = useLocation();
    const { theme, toggleTheme, accent, setAccent } = useTheme();
    const [colorPickerOpen, setColorPickerOpen] = useState(false);

    const navLinks = [
        { id: 'about-section', icon: <Home size={20} />, text: 'about' },
        { id: 'resume-section', icon: <FileText size={20} />, text: 'resume' },
        { id: 'projects-section', icon: <Boxes size={20} />, text: 'projects' },
    ];

    const socialLinks = [
        { icon: <Instagram size={20} />, url: 'https://www.instagram.com/80asfluffshi/', label: 'Instagram' },
        { icon: <Linkedin size={20} />, url: 'https://www.linkedin.com/in/arijitchakma/', label: 'LinkedIn' },
        { icon: <Github size={20} />, url: 'https://github.com/arijitchakma79/', label: 'Github' },
        { icon: <Twitter size={20} />, url: 'https://x.com/arigon79', label: 'X (Twitter)' }
    ];

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
        setColorPickerOpen(false);
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
            if (section) {
                section.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
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

    return (
        <>
            <button
                className={`mobile-menu-btn ${isOpen ? 'open' : ''}`}
                onClick={toggleMenu}
                aria-expanded={isOpen}
                aria-label={isOpen ? 'Close menu' : 'Open menu'}
            >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            <div
                className={`sidebar-overlay ${isOpen ? 'visible' : ''}`}
                onClick={closeMenu}
                role="presentation"
                aria-hidden={!isOpen}
            />

            <nav className={`sidebar ${isOpen ? 'open' : ''}`}>
                <div className="sidebar-mobile-header">
                    <span className="sidebar-mobile-title">Menu</span>
                </div>
                <div className="profile-image-container">
                    <img src={profileImg} alt="Profile" className="profile-image" />
                </div>

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
                        className={({ isActive }) =>
                            `nav-link ${isActive ? 'active' : ''}`
                        }
                        onClick={closeMenu}
                    >
                        <Palette size={20} />
                        <span className="nav-text">arts</span>
                    </NavLink>
                    <button
                        type="button"
                        className={`nav-link ${colorPickerOpen ? 'active' : ''}`}
                        onClick={() => { setColorPickerOpen((open) => !open); }}
                        aria-label="Change accent color"
                        aria-expanded={colorPickerOpen}
                    >
                        <Droplets size={20} />
                        <span className="nav-text">color</span>
                    </button>
                    {colorPickerOpen && (
                        <div className="accent-picker nav-link-size">
                            <div className="accent-picker-body">
                                <div className="accent-swatches">
                                    {ACCENT_OPTIONS.map((opt) => (
                                        <button
                                            key={opt.id}
                                            type="button"
                                            className={`accent-swatch ${accent === opt.id ? 'active' : ''}`}
                                            style={{ backgroundColor: opt.color }}
                                            onClick={() => { setAccent(opt.id); }}
                                            aria-label={`Set accent to ${opt.name}`}
                                            title={opt.name}
                                        >
                                            {accent === opt.id && <Check className="accent-swatch-check" size={12} />}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}
                    <button
                        type="button"
                        className="nav-link"
                        onClick={() => { toggleTheme(); closeMenu(); }}
                        aria-label="Toggle theme"
                    >
                        {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
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
            </nav>
        </>
    );
};

export default Sidebar;