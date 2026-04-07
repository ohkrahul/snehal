'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SectionLabel from '@/components/ui/SectionLabel';
import { awards } from '@/lib/data';
import dynamic from 'next/dynamic';

const TrophyScene = dynamic(() => import('@/components/three/TrophyScene'), { ssr: false });

gsap.registerPlugin(ScrollTrigger);

export default function AwardsSection() {
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
        { opacity: 0, scale: 0.9 },
        {
          opacity: 1, scale: 1, duration: 0.5, stagger: 0.15,
          scrollTrigger: { trigger: sectionRef.current, start: 'top 75%', once: true }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="awards"
      ref={sectionRef}
      style={{
        backgroundColor: '#FFFBF0',
        borderTop: '1px solid #FAC775',
        padding: 'clamp(40px, 7vw, 70px) clamp(20px, 8vw, 80px)',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <span ref={labelRef}>
            <SectionLabel text="Awards & Recognition" color="#854F0B" />
          </span>
          <h2
            ref={h2Ref}
            style={{
              fontFamily: 'Playfair Display, Georgia, serif',
              fontSize: 'clamp(24px, 3vw, 32px)',
              fontWeight: 700,
              color: '#1A1A2E',
            }}
          >
            Industry-recognised work
          </h2>
        </div>

        {/* Trophy 3D Scene */}
        <div style={{ marginBottom: '32px' }}>
          <TrophyScene />
        </div>

        {/* Award cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '14px',
          marginBottom: '16px',
        }}>
          {awards.map((award, i) => (
            <div
              key={award.name}
              ref={el => { if (el) cardsRef.current[i] = el; }}
              style={{
                border: '1px solid #FAC775',
                backgroundColor: '#FFFFFF',
                borderRadius: '14px',
                padding: '24px',
                textAlign: 'center',
              }}
            >
              {/* Icon circle */}
              <div style={{
                width: '40px',
                height: '40px',
                backgroundColor: '#FAEEDA',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto',
              }}>
                <div style={{
                  width: '16px',
                  height: '16px',
                  borderRadius: '50%',
                  backgroundColor: '#EF9F27',
                }} />
              </div>

              {/* Award name */}
              <div style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '13px',
                fontWeight: 700,
                color: '#1A1A2E',
                marginTop: '12px',
              }}>
                {award.name}
              </div>

              {/* Show/Year */}
              <div style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '10px',
                color: '#854F0B',
                marginTop: '4px',
              }}>
                {award.showYear} · {award.show}
              </div>
            </div>
          ))}
        </div>

        {/* 4th award banner */}
        <div
          ref={el => { if (el) cardsRef.current[3] = el; }}
          style={{
            backgroundColor: '#FAEEDA',
            border: '1px solid #FAC775',
            borderRadius: '12px',
            padding: '14px 24px',
            textAlign: 'center',
            fontFamily: 'Inter, sans-serif',
            fontSize: '12px',
            color: '#633806',
            fontWeight: 600,
          }}
        >
          🏆 Best Marketing Campaign · Sa Re Ga Ma Pa Li&#39;l Champs (Multiple Platforms)
        </div>
      </div>
    </section>
  );
}
