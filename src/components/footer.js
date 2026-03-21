import React from 'react';
import '../styles/footer.css';

const Footer = () => {
  const socialLinks = [
    { href: 'https://github.com/arijitchakma79/', label: 'github' },
    { href: 'https://www.linkedin.com/in/arijitchakma/', label: 'linkedin' },
    { href: 'https://scholar.google.com/citations?hl=en&authuser=7&user=ue5rhwoAAAAJ', label: 'scholar' },
    { href: 'mailto:ac4393@drexel.edu', label: 'email' },
  ];

  return (
    <footer className="footer">
      <div className="footer-links">
        {socialLinks.map((link, i) => (
          <React.Fragment key={link.label}>
            <a
              href={link.href}
              className="footer-link"
              target={link.href.startsWith('mailto') ? undefined : '_blank'}
              rel={link.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
            >
              {link.label}
            </a>
            {i < socialLinks.length - 1 && <span className="footer-divider" aria-hidden />}
          </React.Fragment>
        ))}
      </div>
      <p className="footer-copy">© {new Date().getFullYear()} Arijit Chakma</p>
    </footer>
  );
};

export default Footer;
