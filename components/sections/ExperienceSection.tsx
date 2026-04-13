'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SectionLabel from '@/components/ui/SectionLabel';
import { experience } from '@/lib/data';

gsap.registerPlugin(ScrollTrigger);

export default function ExperienceSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);
  const labelRef = useRef<HTMLSpanElement>(null);
  const h2Ref = useRef<HTMLHeadingElement>(null);
  const subheadRef = useRef<HTMLParagraphElement>(null);

  const experienceTimeline = [...experience];

  const experienceDetails: Record<string, { focus: string; outcomes: string[]; platforms: string[] }> = {
    'Mazeweb Technologies': {
      focus: 'Built early execution discipline across digital marketing calendars and internal coordination.',
      outcomes: [
        'Handled scheduling and publishing workflows across campaign cycles',
        'Maintained reporting hygiene with client-ready weekly updates',
      ],
      platforms: ['Facebook', 'YouTube', 'LinkedIn'],
    },
    AdEngage: {
      focus: 'Strengthened storytelling craft and conversion-oriented copywriting for brand communication.',
      outcomes: [
        'Wrote campaign copy for social, web, and branded content assets',
        'Supported ideation and concept development with creative teams',
      ],
      platforms: ['Instagram', 'Twitter', 'Website'],
    },
    'Koffeetech Communications': {
      focus: 'Scaled account coordination and content marketing with stronger multi-team execution.',
      outcomes: [
        'Aligned briefs and feedback between clients and internal production teams',
        'Improved turnaround speed through better planning and priority setting',
      ],
      platforms: ['Meta', 'YouTube', 'Twitter'],
    },
    'The Small Big Idea': {
      focus: 'Leading strategic brand content marketing and growth-focused campaign execution for marquee brands.',
      outcomes: [
        'Drives integrated campaign strategy with measurable business outcomes',
        'Leads cross-functional account delivery and proactive growth recommendations',
      ],
      platforms: ['OTT', 'Film', 'Television'],
    },
  };

  useEffect(() => {
    cardsRef.current = [];

    const ctx = gsap.context(() => {
      gsap.fromTo(labelRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5, scrollTrigger: { trigger: sectionRef.current, start: 'top 80%', once: true } }
      );
      gsap.fromTo(h2Ref.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.6, delay: 0.1, scrollTrigger: { trigger: sectionRef.current, start: 'top 80%', once: true } }
      );
      gsap.fromTo(subheadRef.current,
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 0.6, delay: 0.2, scrollTrigger: { trigger: sectionRef.current, start: 'top 80%', once: true } }
      );
      gsap.fromTo(cardsRef.current,
        { opacity: 0, x: 40, y: 24 },
        {
          opacity: 1, x: 0, y: 0, duration: 0.7,
          stagger: 0.12,
          scrollTrigger: { trigger: sectionRef.current, start: 'top 75%', once: true }
        }
      );

      const viewport = viewportRef.current;
      const track = trackRef.current;
      if (!viewport || !track) return;

      const getScrollDistance = () => track.scrollWidth - viewport.clientWidth;

      const scrollTween = gsap.to(track, {
        x: () => -Math.max(0, getScrollDistance()),
        ease: 'none',
        scrollTrigger: {
          trigger: viewport,
          start: 'top top+=84',
          end: () => `+=${Math.max(800, getScrollDistance() + 700)}`,
          scrub: 1,
          pin: true,
          invalidateOnRefresh: true,
          anticipatePin: 1,
        },
      });

      if (progressRef.current) {
        gsap.fromTo(
          progressRef.current,
          { scaleX: 0 },
          {
            scaleX: 1,
            transformOrigin: 'left center',
            ease: 'none',
            scrollTrigger: {
              trigger: viewport,
              start: 'top top+=84',
              end: () => `+=${Math.max(800, getScrollDistance() + 700)}`,
              scrub: true,
              invalidateOnRefresh: true,
            },
          }
        );
      }

      return () => {
        scrollTween.scrollTrigger?.kill();
        scrollTween.kill();
      };
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="experience"
      ref={sectionRef}
      style={{
        background: 'linear-gradient(180deg, #F8F6FF 0%, #EEF2FF 100%)',
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
            fontSize: 'clamp(30px, 4.5vw, 54px)',
            fontWeight: 700,
            color: '#1A1A2E',
            marginBottom: '12px',
          }}
        >
          Current leadership, built on strong foundations
        </h2>
        <p
          ref={subheadRef}
          style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '14px',
            color: '#5B6380',
            lineHeight: 1.7,
            maxWidth: '760px',
            marginBottom: '22px',
          }}
        >
          Scroll to move through the career journey left to right. Each phase adds stronger strategy, ownership,
          and business impact for brands.
        </p>

        <div
          style={{
            height: '4px',
            width: '100%',
            borderRadius: '999px',
            backgroundColor: '#DDE3F6',
            marginBottom: '18px',
            overflow: 'hidden',
          }}
        >
          <div
            ref={progressRef}
            style={{
              height: '100%',
              width: '100%',
              borderRadius: 'inherit',
              background: 'linear-gradient(90deg, #EF9F27 0%, #1D9E75 35%, #7F77DD 68%, #D4537E 100%)',
              transform: 'scaleX(0)',
              transformOrigin: 'left center',
            }}
          />
        </div>

        <div
          ref={viewportRef}
          style={{
            overflow: 'hidden',
          }}
        >
          <div
            ref={trackRef}
            style={{
              display: 'flex',
              alignItems: 'stretch',
              gap: '14px',
              width: 'max-content',
              paddingBottom: '8px',
              willChange: 'transform',
            }}
          >
            {experienceTimeline.map((exp, i) => {
              const detail = experienceDetails[exp.company];
              return (
            <div
              key={exp.company}
              ref={el => { if (el) cardsRef.current[i] = el; }}
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '18px',
                border: '1px solid #F0ECF8',
                borderTop: `3px solid ${exp.borderColor}`,
                padding: '20px',
                width: 'min(82vw, 340px)',
                minHeight: '342px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                boxShadow: '0 10px 28px rgba(58,61,117,0.08)',
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '8px' }}>
                  <span style={{
                    backgroundColor: exp.pillBg,
                    color: exp.pillColor,
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '10px',
                    fontWeight: 700,
                    padding: '4px 12px',
                    borderRadius: '999px',
                    display: 'inline-block',
                  }}>
                    {exp.years}
                  </span>
                  <span
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '10px',
                      color: '#8690A8',
                      fontWeight: 600,
                    }}
                  >
                    Stage 0{i + 1}
                  </span>
                </div>

                <div style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '23px',
                  fontWeight: 700,
                  color: '#1A1A2E',
                  marginTop: '14px',
                  lineHeight: 1.2,
                }}>
                  {exp.company}
                </div>

                <div style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '13px',
                  color: '#5E6476',
                  marginTop: '6px',
                  fontWeight: 500,
                }}>
                  {exp.role}
                </div>

                <p
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '12px',
                    lineHeight: 1.65,
                    color: '#4A5163',
                    marginTop: '14px',
                  }}
                >
                  {detail?.focus}
                </p>

                <div style={{ marginTop: '12px', display: 'grid', gap: '8px' }}>
                  {(detail?.outcomes || []).map((outcome) => (
                    <div
                      key={outcome}
                      style={{
                        display: 'flex',
                        gap: '8px',
                        alignItems: 'flex-start',
                        fontFamily: 'Inter, sans-serif',
                        fontSize: '11px',
                        color: '#3F475D',
                        lineHeight: 1.5,
                      }}
                    >
                      <span
                        style={{
                          width: '6px',
                          height: '6px',
                          borderRadius: '50%',
                          backgroundColor: exp.color,
                          marginTop: '6px',
                          flexShrink: 0,
                        }}
                      />
                      <span>{outcome}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ marginTop: '14px', display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                {(detail?.platforms || []).map((platform) => (
                  <span
                    key={platform}
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '10px',
                      color: exp.pillColor,
                      backgroundColor: exp.pillBg,
                      borderRadius: '999px',
                      padding: '4px 9px',
                      fontWeight: 600,
                    }}
                  >
                    {platform}
                  </span>
                ))}
                {exp.isCurrent && (
                  <span style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '5px',
                    backgroundColor: '#FDF0F5',
                    color: '#D4537E',
                    borderRadius: '999px',
                    padding: '4px 10px',
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '10px',
                    fontWeight: 700,
                  }}>
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#D4537E' }} />
                    Current
                  </span>
                )}
              </div>
            </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
