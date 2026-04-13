'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SectionLabel from '@/components/ui/SectionLabel';
import { brands } from '@/lib/data';

gsap.registerPlugin(ScrollTrigger);

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const introRef = useRef<HTMLDivElement>(null);
  const frameworkRef = useRef<HTMLDivElement>(null);
  const brandsRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);
  const h2Ref = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  const frameworkCards = [
    {
      title: 'Decode the Brief',
      copy: 'Convert client asks into a clear digital strategy with timelines, priorities, and measurable objectives.',
      color: '#D4537E',
      bg: 'linear-gradient(150deg, #FFF2F7 0%, #FFE7F1 100%)',
    },
    {
      title: 'Align Every Team',
      copy: 'Coordinate content, design, video, and media so every deliverable lands on time and with one brand voice.',
      color: '#4F46E5',
      bg: 'linear-gradient(150deg, #EFEEFF 0%, #E5E7FF 100%)',
    },
    {
      title: 'Lead Creative Execution',
      copy: 'Shape campaign ideas, social storytelling, and platform tone so strategy and creativity stay tightly connected.',
      color: '#0F766E',
      bg: 'linear-gradient(150deg, #EBFFFA 0%, #DBFDF4 100%)',
    },
    {
      title: 'Drive Business Growth',
      copy: 'Track outcomes, spot opportunities, and push proactive recommendations that grow client trust and revenue.',
      color: '#A16207',
      bg: 'linear-gradient(150deg, #FFF8E9 0%, #FFF1CC 100%)',
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
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

      gsap.fromTo(introRef.current,
        { opacity: 0, x: -50 },
        {
          opacity: 1, x: 0, duration: 0.8, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 75%', once: true }
        }
      );

      gsap.fromTo(frameworkRef.current,
        { opacity: 0, x: 50 },
        {
          opacity: 1, x: 0, duration: 0.8, delay: 0.08, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 75%', once: true }
        }
      );

      gsap.fromTo(cardsRef.current,
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.65,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 68%', once: true }
        }
      );

      gsap.fromTo(brandsRef.current,
        { opacity: 0, y: 18 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: 'power2.out',
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
        background: 'linear-gradient(180deg, #F8FAFC 0%, #EEF3FF 44%, #FFFFFF 100%)',
        padding: 'clamp(56px, 8vw, 92px) clamp(20px, 7vw, 88px)',
      }}
    >
      <div
        style={{
          maxWidth: '1240px',
          margin: '0 auto',
          border: '1px solid #DBE4F3',
          borderRadius: '28px',
          padding: 'clamp(22px, 3.2vw, 38px)',
          background: 'linear-gradient(140deg, rgba(255,255,255,0.96) 0%, rgba(244,247,255,0.96) 100%)',
          boxShadow: '0 24px 56px rgba(32,69,126,0.1)',
        }}
      >
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))',
          gap: 'clamp(22px, 4vw, 48px)',
          alignItems: 'start',
        }}>
          <div ref={introRef}>
          <span ref={labelRef}>
            <SectionLabel text="How I Help Brands Grow" />
          </span>
          <h2
            ref={h2Ref}
            style={{
              fontFamily: 'Playfair Display, Georgia, serif',
              fontSize: 'clamp(31px, 4.3vw, 52px)',
              fontWeight: 700,
              color: '#0F172A',
              lineHeight: 1.08,
              marginBottom: '16px',
            }}
          >
            Structured delivery.
            <br />
            <span
              style={{
                background: 'linear-gradient(90deg, #D4537E 0%, #4F46E5 52%, #0F766E 100%)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent',
              }}
            >
              Strategic growth.
            </span>
          </h2>
            <p style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '15px',
              color: '#475569',
              lineHeight: 1.78,
              maxWidth: '560px',
              marginBottom: '18px',
            }}>
              I lead accounts end-to-end: from understanding briefs and planning digital strategy to aligning
              internal teams, supervising execution, and guiding campaigns toward business outcomes.
            </p>

            <div style={{ display: 'grid', gap: '10px', maxWidth: '560px' }}>
              {[
                'Clear brief-to-execution handoff across Content, Design, Video, and Media teams',
                'Proactive risk flagging, timeline discipline, and client-ready reporting',
                'Consumer-insight-led strategy inputs, competitive updates, and campaign recommendations',
                'Commercial ownership and growth-minded account planning',
              ].map((point) => (
                <div
                  key={point}
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '13px',
                    color: '#1E293B',
                    border: '1px solid #D7E1F1',
                    backgroundColor: 'rgba(255,255,255,0.72)',
                    borderRadius: '12px',
                    padding: '10px 12px',
                    lineHeight: 1.55,
                  }}
                >
                  {point}
                </div>
              ))}
            </div>
          </div>

          <div ref={frameworkRef}>
            <SectionLabel text="Growth Engine" />
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: '10px', marginTop: '12px' }}>
              {frameworkCards.map((card, idx) => (
                <div
                  key={card.title}
                  ref={(el) => {
                    if (el) cardsRef.current[idx] = el;
                  }}
                  style={{
                    borderRadius: '18px',
                    border: '1px solid #D7E1F1',
                    background: card.bg,
                    padding: '14px 12px',
                    minHeight: '154px',
                    transition: 'transform 0.28s ease, box-shadow 0.28s ease',
                    cursor: 'default',
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-4px)';
                    (e.currentTarget as HTMLDivElement).style.boxShadow = `0 16px 26px ${card.color}22`;
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)';
                    (e.currentTarget as HTMLDivElement).style.boxShadow = 'none';
                  }}
                >
                  <div
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '11px',
                      textTransform: 'uppercase',
                      letterSpacing: '1.1px',
                      color: card.color,
                      fontWeight: 700,
                      marginBottom: '8px',
                    }}
                  >
                    0{idx + 1}
                  </div>
                  <h3
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '15px',
                      color: '#0F172A',
                      fontWeight: 700,
                      marginBottom: '6px',
                      lineHeight: 1.28,
                    }}
                  >
                    {card.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '12px',
                      color: '#475569',
                      lineHeight: 1.58,
                    }}
                  >
                    {card.copy}
                  </p>
                </div>
              ))}
            </div>

            <div ref={brandsRef} style={{ marginTop: '18px' }}>
              <SectionLabel text="Trusted By" />
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
                gap: '8px',
                marginTop: '12px',
              }}>
                {brands.map((brand) => (
                  <div
                    key={brand.name}
                    style={{
                      backgroundColor: 'rgba(255,255,255,0.76)',
                      border: `1px solid ${brand.border}`,
                      color: brand.color,
                      borderRadius: '999px',
                      padding: '8px 9px',
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '11px',
                      fontWeight: 600,
                      textAlign: 'center',
                      transition: 'transform 0.2s ease, background-color 0.2s ease',
                      cursor: 'default',
                      whiteSpace: 'nowrap',
                    }}
                    onMouseEnter={e => {
                      (e.currentTarget as HTMLDivElement).style.transform = 'scale(1.05)';
                      (e.currentTarget as HTMLDivElement).style.backgroundColor = brand.bg;
                    }}
                    onMouseLeave={e => {
                      (e.currentTarget as HTMLDivElement).style.transform = 'scale(1)';
                      (e.currentTarget as HTMLDivElement).style.backgroundColor = 'rgba(255,255,255,0.76)';
                    }}
                  >
                    {brand.name}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
