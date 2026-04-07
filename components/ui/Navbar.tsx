'use client';

import React, { useState, useEffect } from 'react';
import { navLinks } from '@/lib/data';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <nav
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: '64px',
          backgroundColor: '#FFFFFF',
          borderBottom: '1px solid #F0ECF8',
          boxShadow: scrolled ? '0 2px 20px rgba(212,83,126,0.08)' : 'none',
          zIndex: 500,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 80px',
          transition: 'box-shadow 0.3s ease',
        }}
      >
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => { e.preventDefault(); handleNavClick('#home'); }}
          style={{
            fontFamily: 'Georgia, serif',
            fontSize: '20px',
            fontWeight: 700,
            color: '#1A1A2E',
            textDecoration: 'none',
          }}
          aria-label="Snehal Yelle Home"
        >
          S<span style={{ color: '#D4537E' }}>.</span>Yelle
        </a>

        {/* Desktop nav links */}
        <div
          className="hidden md:flex"
          style={{ gap: '32px', alignItems: 'center' }}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="nav-link"
              onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
              aria-label={`Navigate to ${link.label}`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right side */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          {/* Hire Me Button */}
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); handleNavClick('#contact'); }}
            className="hidden md:inline-block"
            style={{
              backgroundColor: '#D4537E',
              color: '#FFFFFF',
              fontFamily: 'Inter, sans-serif',
              fontSize: '12px',
              fontWeight: 600,
              padding: '9px 22px',
              borderRadius: '24px',
              textDecoration: 'none',
              transition: 'background-color 0.2s ease, transform 0.2s ease',
            }}
            aria-label="Hire Snehal Yelle"
            onMouseEnter={e => {
              (e.currentTarget as HTMLAnchorElement).style.backgroundColor = '#993556';
              (e.currentTarget as HTMLAnchorElement).style.transform = 'scale(1.03)';
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLAnchorElement).style.backgroundColor = '#D4537E';
              (e.currentTarget as HTMLAnchorElement).style.transform = 'scale(1)';
            }}
          >
            Hire Me
          </a>

          {/* Hamburger (mobile) */}
          <button
            className="flex md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle mobile menu"
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '4px',
              display: 'flex',
              flexDirection: 'column',
              gap: '5px',
            }}
          >
            <span style={{ width: '22px', height: '2px', backgroundColor: '#1A1A2E', display: 'block', borderRadius: '2px' }} />
            <span style={{ width: '22px', height: '2px', backgroundColor: '#1A1A2E', display: 'block', borderRadius: '2px' }} />
            <span style={{ width: '22px', height: '2px', backgroundColor: '#1A1A2E', display: 'block', borderRadius: '2px' }} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div className="mobile-menu-overlay" style={{ zIndex: 999 }}>
          <button
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
            style={{
              position: 'absolute',
              top: '20px',
              right: '24px',
              background: 'none',
              border: 'none',
              fontSize: '24px',
              cursor: 'pointer',
              color: '#1A1A2E',
            }}
          >
            ×
          </button>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '20px',
                fontWeight: 600,
                color: '#1A1A2E',
                textDecoration: 'none',
                transition: 'color 0.2s ease',
              }}
              onMouseEnter={e => (e.currentTarget.style.color = '#D4537E')}
              onMouseLeave={e => (e.currentTarget.style.color = '#1A1A2E')}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); handleNavClick('#contact'); }}
            style={{
              backgroundColor: '#D4537E',
              color: '#FFFFFF',
              fontFamily: 'Inter, sans-serif',
              fontSize: '14px',
              fontWeight: 600,
              padding: '12px 32px',
              borderRadius: '24px',
              textDecoration: 'none',
              marginTop: '8px',
            }}
          >
            Hire Me
          </a>
        </div>
      )}
    </>
  );
}
