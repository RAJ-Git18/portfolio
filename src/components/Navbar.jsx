import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', to: '#home' },
    { name: 'About', to: '#about' },
    { name: 'Projects', to: '#projects' },
    { name: 'Skills', to: '#skills' },
    { name: 'Contact', to: '#contact' },
  ];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : 'transparent'}`}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>

        {/* Logo */}
        <a href="#home" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none' }}>
          <img src="/logo.svg" alt="R Logo" style={{ width: '40px', height: '40px' }} />
          <span style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'white' }}>Raj</span>
        </a>

        {/* Desktop Menu */}
        <div className="desktop-menu" style={{ display: 'flex', gap: '3rem', alignItems: 'center' }}>
          {navLinks.map((link) => (
            <a key={link.name} href={link.to} className="nav-link">
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="mobile-toggle" onClick={() => setIsOpen(!isOpen)} style={{ cursor: 'pointer', fontSize: '1.5rem', display: 'none', color: 'white' }}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Simple Mobile Menu Overlay */}
      {isOpen && (
        <div style={{
          position: 'absolute',
          top: '100%',
          left: 0,
          width: '100%',
          background: 'var(--bg-color)',
          padding: '2rem',
          borderBottom: '1px solid var(--glass-border)',
          display: 'flex',
          flexDirection: 'column',
          gap: '1.5rem',
          alignItems: 'center'
        }}>
          {navLinks.map((link) => (
            <a key={link.name} href={link.to} onClick={() => setIsOpen(false)} style={{ fontSize: '1.1rem', fontWeight: '500', color: 'white' }}>
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
