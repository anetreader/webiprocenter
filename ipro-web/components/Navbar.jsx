'use client'
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY <= 0) {
        setIsHidden(false);
      } else if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setIsHidden(true);
      } else if (currentScrollY < lastScrollY) {
        setIsHidden(false);
      }
      setLastScrollY(currentScrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <nav className={isHidden ? 'nav-hidden' : ''}>
      <a href="#hero" className="nav-logo">
        <img src="/LOGO sin fondo.png" alt="iPro Center" />
      </a>
      <button 
        className={`menu-toggle ${isOpen ? 'open' : ''}`} 
        aria-label="Menú" 
        onClick={() => setIsOpen(!isOpen)}
      >
        <span></span><span></span><span></span>
      </button>
      <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
        <li><a href="#catalog" onClick={() => setIsOpen(false)}>Catálogo</a></li>
        <li><a href="#canje" onClick={() => setIsOpen(false)}>Canje</a></li>
        <li><a href="#servicios" onClick={() => setIsOpen(false)}>Servicios</a></li>
        <li><a href="#faq" onClick={() => setIsOpen(false)}>FAQ</a></li>
        <li><a href="#contacto" onClick={() => setIsOpen(false)}>Contacto</a></li>
      </ul>
    </nav>
  );
}
