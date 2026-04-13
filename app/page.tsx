'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from '@/components/ui/Navbar';
import HeroSection from '@/components/sections/HeroSection';
import ImpactStorySection from '@/components/sections/ImpactStorySection';
import BrandGrowthSection from '@/components/sections/BrandGrowthSection';
import AboutSection from '@/components/sections/AboutSection';
import ExperienceSection from '@/components/sections/ExperienceSection';
import CampaignsSection from '@/components/sections/CampaignsSection';
import SkillsSection from '@/components/sections/SkillsSection';
import AwardsSection from '@/components/sections/AwardsSection';
import ContactSection from '@/components/sections/ContactSection';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const loaderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loader = loaderRef.current;
    if (!loader) return;
    const tl = gsap.timeline();
    tl.to(loader, { width: '100%', duration: 0.8, ease: 'power2.inOut' })
      .to(loader, {
        opacity: 0,
        duration: 0.3,
        onComplete: () => { if (loader) loader.style.display = 'none'; },
      });
  }, []);

  return (
    <>
      <div ref={loaderRef} className="page-loader" aria-hidden="true" />
      <Navbar />
      <main>
        <HeroSection />
        <ImpactStorySection />
        <BrandGrowthSection />
        <AboutSection />
        <ExperienceSection />
        <CampaignsSection />
        <SkillsSection />
        <AwardsSection />
        <ContactSection />
      </main>
      <footer
        style={{
          backgroundColor: '#1A1A2E',
          padding: '20px clamp(20px, 8vw, 80px)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '12px',
        }}
      >
        <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: 'rgba(255,255,255,0.35)' }}>
           2025 Snehal Yelle. All rights reserved.
        </span>
        <div style={{ display: 'flex', gap: '16px' }}>
          {[
            { label: 'LinkedIn', href: 'https://www.linkedin.com/in/snehal-yelle-99007613b' },
            { label: 'Instagram', href: '#' },
            { label: 'Email', href: 'mailto:snehal.yelle45@gmail.com' },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              aria-label={link.label}
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '11px',
                color: 'rgba(255,255,255,0.3)',
                textDecoration: 'none',
                transition: 'color 0.2s ease',
              }}
              onMouseEnter={e => (e.currentTarget.style.color = '#D4537E')}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.3)')}
            >
              {link.label}
            </a>
          ))}
        </div>
      </footer>
    </>
  );
}
