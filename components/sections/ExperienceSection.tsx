'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SectionLabel from '@/components/ui/SectionLabel';
import { experience } from '@/lib/data';

gsap.registerPlugin(ScrollTrigger);

export default function ExperienceSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);
  const labelRef = useRef<HTMLSpanElement>(null);
  const h2Ref = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(labelRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5, scrollTrigger: { trigger: sectionRef.current, start: 'top 80%', once: true } }
      );
      gsap.fromTo(h2Ref.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.6, delay: 0.1, scrollTrigger: { trigger: sectionRef.current, start: 'top 80%', once: true } }
      );
      gsap.fromTo(cardsRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0, duration: 0.6,
          stagger: 0.15,
          scrollTrigger: { trigger: sectionRef.current, start: 'top 75%', once: true }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="experience"
      ref={sectionRef}
      style={{
        backgroundColor: '#F8F6FF',
        borderTop: '1px solid #EEEDFE',
        padding: 'clamp(40px, 8vw, 80px) clamp(20px, 8vw, 80px)',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <span ref={labelRef}>
          <SectionLabel text="Experience" />
        </span>
        <h2
          ref={h2Ref}
          style={{
            fontFamily: 'Playfair Display, Georgia, serif',
            fontSize: 'clamp(24px, 3vw, 32px)',
            fontWeight: 700,
            color: '#1A1A2E',
            marginBottom: '32px',
          }}
        >
          7 years across top agencies
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '12px',
        }}>
          {experience.map((exp, i) => (
            <div
              key={exp.company}
              ref={el => { if (el) cardsRef.current[i] = el; }}
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '14px',
                border: '1px solid #F0ECF8',
                borderTop: `3px solid ${exp.borderColor}`,
                padding: '20px',
              }}
            >
              {/* Year pill */}
              <span style={{
                backgroundColor: exp.pillBg,
                color: exp.pillColor,
                fontFamily: 'Inter, sans-serif',
                fontSize: '9px',
                fontWeight: 600,
                padding: '3px 10px',
                borderRadius: '10px',
                display: 'inline-block',
              }}>
                {exp.years}
              </span>

              {/* Company */}
              <div style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '13px',
                fontWeight: 700,
                color: '#1A1A2E',
                marginTop: '10px',
              }}>
                {exp.company}
              </div>

              {/* Role */}
              <div style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '11px',
                color: '#999999',
                marginTop: '4px',
              }}>
                {exp.role}
              </div>

              {exp.isCurrent && (
                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '4px',
                  marginTop: '10px',
                  backgroundColor: '#FDF0F5',
                  borderRadius: '8px',
                  padding: '3px 8px',
                }}>
                  <div style={{
                    width: '6px', height: '6px',
                    borderRadius: '50%',
                    backgroundColor: '#D4537E',
                  }} />
                  <span style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '9px',
                    color: '#D4537E',
                    fontWeight: 600,
                  }}>Current</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
