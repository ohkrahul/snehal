'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import gsap from 'gsap';
import Card3D from '@/components/ui/Card3D';
import AnimatedCounter from '@/components/ui/AnimatedCounter';
import { personalInfo } from '@/lib/data';

const ParticleField = dynamic(() => import('@/components/three/ParticleField'), { ssr: false });

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const h1LineRef1 = useRef<HTMLSpanElement>(null);
  const h1LineRef2 = useRef<HTMLSpanElement>(null);
  const subheadRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);
  const [scrollIndicatorVisible, setScrollIndicatorVisible] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [imgError, setImgError] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) setScrollIndicatorVisible(false);
      else setScrollIndicatorVisible(true);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo(badgeRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6 }
      );

      if (h1LineRef1.current && h1LineRef2.current) {
        const words1 = Array.from(h1LineRef1.current.querySelectorAll('.hero-word'));
        const words2 = Array.from(h1LineRef2.current.querySelectorAll('.hero-word'));
        tl.fromTo([...words1, ...words2],
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, stagger: 0.1, duration: 0.5 },
          '-=0.2'
        );
      }

      tl.fromTo(subheadRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8 },
        '-=0.2'
      );

      tl.fromTo(buttonsRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6 },
        '-=0.3'
      );

      tl.fromTo(statsRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6 },
        '-=0.2'
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const particleCount = isMobile ? 60 : 120;

  return (
    <section
      id="home"
      ref={sectionRef}
      style={{
        minHeight: '100vh',
        backgroundColor: '#FFFFFF',
        display: 'grid',
        gridTemplateColumns: isMobile ? '1fr' : '55fr 45fr',
        paddingTop: '64px',
      }}
    >
      {/* LEFT COLUMN */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: isMobile ? '40px 20px' : '80px 80px',
        }}
      >
        {/* Pill badge */}
        <div
          ref={badgeRef}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            backgroundColor: '#FDF0F5',
            border: '1px solid #F4C0D1',
            borderRadius: '24px',
            padding: '6px 16px',
            width: 'fit-content',
            marginBottom: '16px',
          }}
        >
          <span style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '11px',
            color: '#993556',
            fontWeight: 500,
          }}>
            ✦ Brand Content Strategist · Mumbai, India
          </span>
        </div>

        {/* Hero H1 */}
        <h1
          style={{
            fontFamily: 'Playfair Display, Georgia, serif',
            fontSize: isMobile ? '34px' : '56px',
            fontWeight: 700,
            lineHeight: 1.1,
            marginBottom: '16px',
          }}
        >
          <span ref={h1LineRef1} style={{ display: 'block' }}>
            <span className="hero-word" style={{ display: 'inline-block', color: '#1A1A2E', marginRight: '0.3em' }}>Where</span>
            <span className="hero-word" style={{ display: 'inline-block', color: '#1A1A2E' }}>Stories</span>
          </span>
          <span ref={h1LineRef2} style={{ display: 'block' }}>
            <span className="hero-word" style={{ display: 'inline-block', color: '#1A1A2E', marginRight: '0.3em' }}>Meet</span>
            <span className="hero-word" style={{ display: 'inline-block', color: '#D4537E' }}>Strategy</span>
          </span>
        </h1>

        {/* Subheadline */}
        <p
          ref={subheadRef}
          style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '14px',
            color: '#666666',
            lineHeight: 1.7,
            maxWidth: '380px',
            marginBottom: '20px',
          }}
        >
          {personalInfo.heroBio}
        </p>

        {/* Buttons */}
        <div
          ref={buttonsRef}
          style={{ display: 'flex', flexDirection: 'row', gap: '12px', marginBottom: '36px', flexWrap: 'wrap' }}
        >
          <a
            href="#campaigns"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#campaigns')?.scrollIntoView({ behavior: 'smooth' });
            }}
            aria-label="View Snehal's work"
            style={{
              backgroundColor: '#D4537E',
              color: '#FFFFFF',
              fontFamily: 'Inter, sans-serif',
              fontSize: '13px',
              fontWeight: 600,
              padding: '12px 28px',
              borderRadius: '28px',
              textDecoration: 'none',
              transition: 'background-color 0.2s ease, transform 0.2s ease',
              display: 'inline-block',
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLAnchorElement).style.backgroundColor = '#993556';
              (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLAnchorElement).style.backgroundColor = '#D4537E';
              (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(0)';
            }}
          >
            View My Work
          </a>
          <a
            href="/cv.pdf"
            download
            aria-label="Download CV"
            style={{
              backgroundColor: 'transparent',
              color: '#7F77DD',
              border: '2px solid #AFA9EC',
              fontFamily: 'Inter, sans-serif',
              fontSize: '13px',
              fontWeight: 600,
              padding: '12px 28px',
              borderRadius: '28px',
              textDecoration: 'none',
              transition: 'background-color 0.2s ease',
              display: 'inline-block',
            }}
            onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.backgroundColor = '#EEEDFE'}
            onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.backgroundColor = 'transparent'}
          >
            Download CV
          </a>
        </div>

        {/* Stats */}
        <div
          ref={statsRef}
          style={{ display: 'flex', gap: '36px', flexWrap: 'wrap' }}
        >
          {[
            { value: 7, suffix: '+', label: 'Years experience', color: '#D4537E' },
            { value: 10, suffix: '+', label: 'Brands worked', color: '#D4537E' },
            { value: 3, suffix: '', label: 'Industry awards', color: '#7F77DD' },
          ].map((stat, i) => (
            <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
              <div style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '32px',
                fontWeight: 700,
                color: '#1A1A2E',
                lineHeight: 1,
              }}>
                <AnimatedCounter
                  target={stat.value}
                  suffix={stat.suffix}
                  delay={0.8 + i * 0.1}
                  numberStyle={{ color: '#1A1A2E', fontSize: '32px', fontWeight: 700 }}
                  suffixStyle={{ color: stat.color, fontSize: '32px', fontWeight: 700 }}
                />
              </div>
              <span style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '10px',
                color: '#AAAAAA',
                textTransform: 'uppercase',
                letterSpacing: '1px',
              }}>
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT COLUMN — 3D Visual Zone */}
      <div
        style={{
          position: 'relative',
          background: 'linear-gradient(135deg, #FDF0F5 0%, #F0EFFE 50%, #E8F8F3 100%)',
          overflow: 'hidden',
          minHeight: isMobile ? '400px' : 'auto',
        }}
      >
        {/* Particle Field Canvas (z-index 0, behind everything) */}
        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          <ParticleField particleCount={particleCount} />
        </div>

        {/* Decorative circle 1 */}
        <div style={{
          position: 'absolute',
          top: '30px',
          left: '20px',
          width: '100px',
          height: '100px',
          backgroundColor: '#FDF0F5',
          borderRadius: '50%',
          opacity: 0.7,
          zIndex: 1,
        }} />

        {/* Decorative circle 2 */}
        <div style={{
          position: 'absolute',
          bottom: '40px',
          right: '20px',
          width: '80px',
          height: '80px',
          backgroundColor: '#EEEDFE',
          borderRadius: '50%',
          opacity: 0.7,
          zIndex: 1,
        }} />

        {/* Floating badge 1 — top right */}
        <div
          className="float-badge"
          style={{
            position: 'absolute',
            top: isMobile ? '20px' : '60px',
            right: '24px',
            backgroundColor: '#FFFFFF',
            border: '1px solid #F4C0D1',
            borderRadius: '12px',
            padding: '8px 14px',
            fontFamily: 'Inter, sans-serif',
            fontSize: '10px',
            color: '#D4537E',
            fontWeight: 600,
            zIndex: 3,
            boxShadow: '0 2px 12px rgba(212,83,126,0.08)',
          }}
        >
          🏆 3 Awards Won
        </div>

        {/* Floating badge 2 — bottom left */}
        <div
          className="float-badge-delayed"
          style={{
            position: 'absolute',
            bottom: isMobile ? '16px' : '80px',
            left: '24px',
            backgroundColor: '#FFFFFF',
            border: '1px solid #AFA9EC',
            borderRadius: '12px',
            padding: '8px 14px',
            fontFamily: 'Inter, sans-serif',
            fontSize: '10px',
            color: '#7F77DD',
            fontWeight: 600,
            zIndex: 3,
            boxShadow: '0 2px 12px rgba(127,119,221,0.08)',
          }}
        >
          ✦ OTT · Film · Television
        </div>

        {/* Profile Card — centered */}
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: 2,
        }}>
          <Card3D
            style={{
              width: '200px',
              backgroundColor: '#FFFFFF',
              borderRadius: '20px',
              border: '1px solid #F0ECF8',
              boxShadow: '0 8px 32px rgba(212,83,126,0.10)',
              padding: '24px 16px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            {/* Avatar */}
            <div style={{
              width: '96px',
              height: '96px',
              borderRadius: '50%',
              border: '3px solid #F4C0D1',
              overflow: 'hidden',
              flexShrink: 0,
              boxShadow: '0 4px 16px rgba(212,83,126,0.15)',
              background: 'linear-gradient(135deg, #FDF0F5, #EEEDFE)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              {imgError ? (
                <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '22px', fontWeight: 700, color: '#D4537E' }}>SY</span>
              ) : (
                <Image
                  src="/images/profile/snehal.jpeg"
                  alt="Snehal Yelle"
                  width={96}
                  height={96}
                  style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                  priority
                  onError={() => setImgError(true)}
                />
              )}
            </div>

            {/* Name */}
            <div style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '14px',
              fontWeight: 700,
              color: '#1A1A2E',
              marginTop: '12px',
              textAlign: 'center',
            }}>
              Snehal Yelle
            </div>

            {/* Role */}
            <div style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '10px',
              color: '#7F77DD',
              marginTop: '2px',
              textAlign: 'center',
            }}>
              Brand Content Strategist
            </div>

            {/* Tags */}
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '4px',
              marginTop: '12px',
              justifyContent: 'center',
            }}>
              {[
                { text: 'Sony LIV', bg: '#FDF0F5', color: '#993556' },
                { text: 'Zee TV', bg: '#EEEDFE', color: '#3C3489' },
                { text: 'Dharma', bg: '#E1F5EE', color: '#085041' },
                { text: '7+ Years', bg: '#FDF0F5', color: '#993556' },
                { text: '3 Awards', bg: '#EEEDFE', color: '#3C3489' },
              ].map((tag) => (
                <span
                  key={tag.text}
                  style={{
                    backgroundColor: tag.bg,
                    color: tag.color,
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '9px',
                    fontWeight: 600,
                    padding: '3px 8px',
                    borderRadius: '10px',
                  }}
                >
                  {tag.text}
                </span>
              ))}
            </div>
          </Card3D>
        </div>

        {/* Scroll indicator at bottom of section */}
        {scrollIndicatorVisible && (
          <div
            ref={scrollIndicatorRef}
            className="scroll-indicator"
            style={{
              position: 'absolute',
              bottom: '24px',
              left: '50%',
              transform: 'translateX(-50%)',
              zIndex: 3,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '4px',
            }}
            aria-label="Scroll down"
          >
            <div style={{
              width: '4px',
              height: '4px',
              borderRadius: '50%',
              backgroundColor: '#D4537E',
              opacity: 0.6,
            }} />
            <div style={{
              width: '4px',
              height: '4px',
              borderRadius: '50%',
              backgroundColor: '#D4537E',
              opacity: 0.4,
            }} />
            <div style={{
              width: '4px',
              height: '4px',
              borderRadius: '50%',
              backgroundColor: '#D4537E',
              opacity: 0.2,
            }} />
          </div>
        )}
      </div>
    </section>
  );
}
