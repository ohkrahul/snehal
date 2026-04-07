'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SectionLabel from '@/components/ui/SectionLabel';
import { brands } from '@/lib/data';

gsap.registerPlugin(ScrollTrigger);

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);
  const h2Ref = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Label and H2
      gsap.fromTo(labelRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1, y: 0, duration: 0.5,
          scrollTrigger: { trigger: sectionRef.current, start: 'top 80%', once: true }
        }
      );
      gsap.fromTo(h2Ref.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0, duration: 0.6, delay: 0.1,
          scrollTrigger: { trigger: sectionRef.current, start: 'top 80%', once: true }
        }
      );

      // Left column
      gsap.fromTo(leftRef.current,
        { opacity: 0, x: -60 },
        {
          opacity: 1, x: 0, duration: 0.8,
          scrollTrigger: { trigger: sectionRef.current, start: 'top 75%', once: true }
        }
      );

      // Right column
      gsap.fromTo(rightRef.current,
        { opacity: 0, x: 60 },
        {
          opacity: 1, x: 0, duration: 0.8, delay: 0.2,
          scrollTrigger: { trigger: sectionRef.current, start: 'top 75%', once: true }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      style={{
        backgroundColor: '#FFFFFF',
        padding: 'clamp(40px, 8vw, 80px) clamp(20px, 8vw, 80px)',
      }}
    >
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '48px',
        maxWidth: '1200px',
        margin: '0 auto',
      }}>
        {/* LEFT */}
        <div ref={leftRef}>
          <span ref={labelRef}>
            <SectionLabel text="About Me" />
          </span>
          <h2
            ref={h2Ref}
            style={{
              fontFamily: 'Playfair Display, Georgia, serif',
              fontSize: 'clamp(24px, 3vw, 32px)',
              fontWeight: 700,
              color: '#1A1A2E',
              lineHeight: 1.2,
              marginBottom: '20px',
            }}
          >
            Creative vision,{' '}
            <span style={{ color: '#7F77DD' }}>data-driven</span>{' '}
            results.
          </h2>
          <p style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '14px',
            color: '#666666',
            lineHeight: 1.8,
            maxWidth: '420px',
          }}>
            Forward-thinking strategist specializing in entertainment marketing,
            social-first storytelling, and integrated campaign strategy. I build
            campaigns that audiences remember and brands measure — blending big
            creative ideas with performance insights.
          </p>
        </div>

        {/* RIGHT */}
        <div ref={rightRef}>
          <SectionLabel text="Brands I've Worked With" />
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '8px',
            marginTop: '14px',
          }}>
            {brands.map((brand) => (
              <div
                key={brand.name}
                style={{
                  backgroundColor: brand.bg,
                  border: `1px solid ${brand.border}`,
                  color: brand.color,
                  borderRadius: '10px',
                  padding: '10px 8px',
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '10px',
                  fontWeight: 600,
                  textAlign: 'center',
                  transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                  cursor: 'default',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLDivElement).style.transform = 'scale(1.05)';
                  (e.currentTarget as HTMLDivElement).style.boxShadow = '0 4px 12px rgba(0,0,0,0.06)';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLDivElement).style.transform = 'scale(1)';
                  (e.currentTarget as HTMLDivElement).style.boxShadow = 'none';
                }}
              >
                {brand.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
