'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const growthPillars = [
  {
    title: 'Brief to Business Direction',
    desc: 'Turns open-ended client asks into clear strategy tracks, prioritised deliverables, and measurable growth goals.',
    color: '#0C4A6E',
    bg: '#E0F2FE',
    border: '#7DD3FC',
  },
  {
    title: 'Cross-Team Delivery Command',
    desc: 'Aligns Content, Design, Video, and Performance teams so momentum stays high and launch quality stays sharp.',
    color: '#7C2D12',
    bg: '#FFEDD5',
    border: '#FDBA74',
  },
  {
    title: 'Client Confidence Engine',
    desc: 'Maintains reporting rhythm, feedback clarity, and proactive communication that builds long-term trust.',
    color: '#581C87',
    bg: '#F3E8FF',
    border: '#D8B4FE',
  },
  {
    title: 'Opportunity & Revenue Lens',
    desc: 'Identifies campaign extensions, commercial follow-ups, and growth opportunities within existing accounts.',
    color: '#14532D',
    bg: '#DCFCE7',
    border: '#86EFAC',
  },
];

const growthExecution = [
  { label: 'Brief Clarity + Category Context', value: 96, color: '#0369A1' },
  { label: 'On-time Cross-team Execution', value: 94, color: '#C2410C' },
  { label: 'Creative & Strategic Alignment', value: 92, color: '#7E22CE' },
  { label: 'Business Opportunity Expansion', value: 89, color: '#15803D' },
];

export default function BrandGrowthSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.growth-reveal',
        { opacity: 0, y: 36 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          stagger: 0.12,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 78%',
            once: true,
          },
        }
      );

      const bars = gsap.utils.toArray<HTMLElement>('[data-growth-bar]');
      bars.forEach((bar) => {
        const width = bar.dataset.value ?? '0';
        gsap.fromTo(
          bar,
          { width: '0%' },
          {
            width: `${width}%`,
            duration: 1.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: bar,
              start: 'top 88%',
              once: true,
            },
          }
        );
      });

      gsap.to('.growth-float-chip', {
        y: -10,
        repeat: -1,
        yoyo: true,
        duration: 2.8,
        stagger: 0.35,
        ease: 'sine.inOut',
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="brand-growth"
      ref={sectionRef}
      style={{
        padding: 'clamp(56px, 9vw, 112px) clamp(20px, 8vw, 90px)',
        background:
          'radial-gradient(circle at 85% 10%, rgba(14,165,233,0.12) 0%, rgba(14,165,233,0) 36%), radial-gradient(circle at 10% 90%, rgba(22,163,74,0.10) 0%, rgba(22,163,74,0) 38%), #F8FAFC',
      }}
    >
      <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
        <div className="growth-reveal" style={{ maxWidth: '760px', marginBottom: '34px' }}>
          <span
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '11px',
              fontWeight: 700,
              letterSpacing: '2.6px',
              textTransform: 'uppercase',
              color: '#0369A1',
              display: 'inline-block',
              marginBottom: '12px',
            }}
          >
            Client Servicing, Upgraded
          </span>
          <h2
            style={{
              fontFamily: 'Playfair Display, Georgia, serif',
              fontSize: 'clamp(31px, 4.2vw, 56px)',
              lineHeight: 1.06,
              letterSpacing: '-0.02em',
              color: '#0F172A',
              marginBottom: '14px',
            }}
          >
            How Snehal helps brands grow beyond campaign delivery.
          </h2>
          <p
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '15px',
              lineHeight: 1.82,
              color: '#475569',
              maxWidth: '700px',
            }}
          >
            She combines category intelligence, strategic planning, and cross-functional leadership to make every
            campaign execution-ready, commercially stronger, and business-relevant. From brief interpretation to
            feedback loops, reporting discipline, and proactive growth suggestions, the work is designed to scale
            client outcomes, not just output.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '14px',
            marginBottom: '28px',
          }}
        >
          {growthPillars.map((pillar) => (
            <article
              key={pillar.title}
              className="growth-reveal"
              style={{
                backgroundColor: pillar.bg,
                border: `1px solid ${pillar.border}`,
                borderRadius: '18px',
                padding: '18px 18px 16px',
                minHeight: '172px',
                boxShadow: '0 10px 26px rgba(2,6,23,0.05)',
              }}
            >
              <h3
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 700,
                  fontSize: '15px',
                  lineHeight: 1.4,
                  color: pillar.color,
                  marginBottom: '8px',
                }}
              >
                {pillar.title}
              </h3>
              <p
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '13px',
                  lineHeight: 1.68,
                  color: '#334155',
                }}
              >
                {pillar.desc}
              </p>
            </article>
          ))}
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 1fr)',
            gap: '16px',
            backgroundColor: 'rgba(255,255,255,0.84)',
            border: '1px solid #DCE6F1',
            borderRadius: '20px',
            padding: '22px',
            position: 'relative',
            overflow: 'hidden',
          }}
          className="growth-reveal"
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
            <h3
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '16px',
                fontWeight: 700,
                color: '#0F172A',
              }}
            >
              Brand Growth Operating System
            </h3>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              {['MOM Discipline', 'Risk Alerts', 'Feedback Precision'].map((chip) => (
                <span
                  key={chip}
                  className="growth-float-chip"
                  style={{
                    padding: '6px 10px',
                    borderRadius: '999px',
                    border: '1px solid #BFDBFE',
                    backgroundColor: '#EFF6FF',
                    color: '#1D4ED8',
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '10px',
                    fontWeight: 700,
                    letterSpacing: '0.4px',
                    textTransform: 'uppercase',
                  }}
                >
                  {chip}
                </span>
              ))}
            </div>
          </div>

          {growthExecution.map((item) => (
            <div key={item.label}>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '6px',
                  gap: '10px',
                }}
              >
                <span
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    color: '#334155',
                    fontSize: '12px',
                    fontWeight: 600,
                  }}
                >
                  {item.label}
                </span>
                <span
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    color: item.color,
                    fontSize: '11px',
                    fontWeight: 700,
                  }}
                >
                  {item.value}%
                </span>
              </div>
              <div
                style={{
                  width: '100%',
                  height: '8px',
                  borderRadius: '999px',
                  backgroundColor: '#E2E8F0',
                  overflow: 'hidden',
                }}
              >
                <div
                  data-growth-bar
                  data-value={item.value}
                  style={{
                    width: '0%',
                    height: '100%',
                    borderRadius: '999px',
                    background: `linear-gradient(90deg, ${item.color}, #0EA5E9)`,
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
