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
  const introRef = useRef<HTMLParagraphElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);

  const spotlight = {
    title: "Best Marketing Campaign",
    context: "Sa Re Ga Ma Pa Li'l Champs · Multiple Platforms",
    note: "Recognition for platform-wide storytelling that turned entertainment content into a larger audience participation moment.",
  };

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
      gsap.fromTo(introRef.current,
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 0.6, delay: 0.18, scrollTrigger: { trigger: sectionRef.current, start: 'top 80%', once: true } }
      );
      gsap.fromTo(heroRef.current,
        { opacity: 0, scale: 0.96, y: 24 },
        {
          opacity: 1, scale: 1, y: 0, duration: 0.85, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 74%', once: true }
        }
      );
      gsap.fromTo(cardsRef.current,
        { opacity: 0, y: 30, scale: 0.96 },
        {
          opacity: 1, y: 0, scale: 1, duration: 0.6, stagger: 0.12,
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
        background: 'linear-gradient(180deg, #FFFCF3 0%, #FFF7E6 100%)',
        borderTop: '1px solid #F5D08B',
        padding: 'clamp(52px, 7vw, 84px) clamp(20px, 8vw, 88px)',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '28px' }}>
          <span ref={labelRef}>
            <SectionLabel text="Awards & Recognition" color="#854F0B" />
          </span>
          <h2
            ref={h2Ref}
            style={{
              fontFamily: 'Playfair Display, Georgia, serif',
              fontSize: 'clamp(32px, 4.8vw, 60px)',
              fontWeight: 700,
              color: '#1A1A2E',
              lineHeight: 1.04,
              letterSpacing: '-0.03em',
            }}
          >
            Industry-recognised work
          </h2>
          <p
            ref={introRef}
            style={{
              margin: '14px auto 0',
              maxWidth: '660px',
              fontFamily: 'Inter, sans-serif',
              fontSize: '15px',
              lineHeight: 1.75,
              color: '#6B5A37',
            }}
          >
            Campaign thinking that earned recognition across digital storytelling, integrated marketing, and attention-grabbing audience experiences.
          </p>
        </div>

        <div
          ref={heroRef}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '18px',
            alignItems: 'stretch',
            marginBottom: '24px',
          }}
        >
          <div
            style={{
              border: '1px solid #F1D8A1',
              borderRadius: '28px',
              background: 'linear-gradient(180deg, rgba(255,255,255,0.86) 0%, rgba(255,248,230,0.96) 100%)',
              boxShadow: '0 26px 60px rgba(167, 119, 22, 0.10)',
              padding: 'clamp(20px, 3vw, 30px)',
              display: 'grid',
              gap: '18px',
            }}
          >
            <div>
              <div
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '11px',
                  textTransform: 'uppercase',
                  letterSpacing: '1.8px',
                  color: '#A46507',
                  marginBottom: '10px',
                  fontWeight: 700,
                }}
              >
                Recognition Snapshot
              </div>
              <div
                style={{
                  fontFamily: 'Playfair Display, Georgia, serif',
                  fontSize: 'clamp(26px, 4vw, 42px)',
                  lineHeight: 1.08,
                  color: '#1F1A14',
                  marginBottom: '12px',
                }}
              >
                Work that didn&apos;t just launch. It landed.
              </div>
              <p
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '14px',
                  lineHeight: 1.75,
                  color: '#715C30',
                  maxWidth: '470px',
                }}
              >
                Across television, OTT, and film campaigns, the strongest ideas were the ones that balanced cultural relevance, audience participation, and sharp execution across platforms.
              </p>
            </div>

            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              {[
                { value: '3+', label: 'Awards' },
                { value: '2022-23', label: 'Recognition Window' },
                { value: 'OTT · TV · Film', label: 'Campaign Domains' },
              ].map((item) => (
                <div
                  key={item.label}
                  style={{
                    minWidth: '140px',
                    borderRadius: '18px',
                    border: '1px solid #F2DFB6',
                    backgroundColor: 'rgba(255,255,255,0.72)',
                    padding: '12px 14px',
                  }}
                >
                  <div
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '18px',
                      fontWeight: 700,
                      color: '#1A1A2E',
                      marginBottom: '4px',
                    }}
                  >
                    {item.value}
                  </div>
                  <div
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '11px',
                      color: '#8A6B2F',
                      lineHeight: 1.5,
                    }}
                  >
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div
            style={{
              border: '1px solid #F1D8A1',
              borderRadius: '28px',
              background: 'radial-gradient(circle at top, rgba(255,255,255,0.95) 0%, rgba(255,248,232,0.92) 58%, rgba(251,238,205,0.96) 100%)',
              boxShadow: '0 26px 60px rgba(167, 119, 22, 0.10)',
              padding: '18px',
              overflow: 'hidden',
              position: 'relative',
              minHeight: '360px',
            }}
          >
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'radial-gradient(circle at center, rgba(239,159,39,0.18) 0%, rgba(239,159,39,0) 52%)',
                pointerEvents: 'none',
              }}
            />
            <div style={{ position: 'relative', zIndex: 1, height: '220px' }}>
              <TrophyScene />
            </div>
            <div
              style={{
                position: 'relative',
                zIndex: 1,
                borderTop: '1px solid rgba(172, 120, 21, 0.16)',
                paddingTop: '16px',
              }}
            >
              <div
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '11px',
                  textTransform: 'uppercase',
                  letterSpacing: '1.6px',
                  color: '#A46507',
                  fontWeight: 700,
                  marginBottom: '6px',
                }}
              >
                Spotlight Recognition
              </div>
              <div
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '20px',
                  fontWeight: 700,
                  color: '#1E1A14',
                  lineHeight: 1.25,
                  marginBottom: '6px',
                }}
              >
                {spotlight.title}
              </div>
              <div
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '12px',
                  color: '#8A6B2F',
                  marginBottom: '8px',
                  fontWeight: 600,
                }}
              >
                {spotlight.context}
              </div>
              <p
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '13px',
                  lineHeight: 1.65,
                  color: '#6F5A31',
                }}
              >
                {spotlight.note}
              </p>
            </div>
          </div>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '16px',
          marginBottom: '18px',
        }}>
          {awards.map((award, i) => (
            <div
              key={award.name}
              ref={el => { if (el) cardsRef.current[i] = el; }}
              style={{
                border: '1px solid #EFC773',
                background: 'linear-gradient(180deg, rgba(255,255,255,0.98) 0%, rgba(255,250,239,0.94) 100%)',
                borderRadius: '22px',
                padding: '22px',
                textAlign: 'left',
                boxShadow: '0 16px 34px rgba(167, 119, 22, 0.08)',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', gap: '10px', alignItems: 'flex-start' }}>
                <div style={{
                  width: '46px',
                  height: '46px',
                  background: 'radial-gradient(circle at 30% 30%, #FFD98B 0%, #F4AF2D 55%, #C6760A 100%)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 10px 20px rgba(239, 159, 39, 0.18)',
                  flexShrink: 0,
                }}>
                  <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#FFF6DF' }} />
                </div>
                <div
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '10px',
                    textTransform: 'uppercase',
                    letterSpacing: '1.2px',
                    color: '#9E7321',
                    fontWeight: 700,
                    paddingTop: '4px',
                  }}
                >
                  Awarded
                </div>
              </div>

              <div style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '20px',
                fontWeight: 700,
                color: '#1A1A2E',
                marginTop: '18px',
                lineHeight: 1.25,
              }}>
                {award.name}
              </div>

              <div style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '12px',
                color: '#854F0B',
                marginTop: '8px',
                fontWeight: 600,
                lineHeight: 1.55,
              }}>
                {award.showYear} · {award.show}
              </div>

              <div
                style={{
                  marginTop: '18px',
                  borderTop: '1px solid rgba(250, 199, 117, 0.45)',
                  paddingTop: '14px',
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '12px',
                  color: '#6D5B35',
                  lineHeight: 1.65,
                }}
              >
                Recognised for execution that translated a strong campaign idea into high-visibility audience impact.
              </div>
            </div>
          ))}
        </div>

        <div
          ref={el => { if (el) cardsRef.current[3] = el; }}
          style={{
            background: 'linear-gradient(90deg, rgba(250,238,218,0.9) 0%, rgba(255,247,229,0.95) 100%)',
            border: '1px solid #F1C775',
            borderRadius: '20px',
            padding: '18px 22px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '16px',
            flexWrap: 'wrap',
          }}
        >
          <div>
            <div
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '10px',
                textTransform: 'uppercase',
                letterSpacing: '1.2px',
                color: '#9E7321',
                fontWeight: 700,
                marginBottom: '6px',
              }}
            >
              Additional Highlight
            </div>
            <div
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '15px',
                color: '#52370A',
                fontWeight: 700,
                lineHeight: 1.5,
              }}
            >
              Best Marketing Campaign · Sa Re Ga Ma Pa Li&apos;l Champs (Multiple Platforms)
            </div>
          </div>
          <div
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '12px',
              color: '#7A5A1D',
              lineHeight: 1.6,
              maxWidth: '380px',
            }}
          >
            A campaign moment that extended beyond a single execution and proved strong enough to work across touchpoints.
          </div>
        </div>
      </div>
    </section>
  );
}
