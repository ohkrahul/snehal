'use client';

import React, { useEffect, useMemo, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SectionLabel from '@/components/ui/SectionLabel';
import SkillPill from '@/components/ui/SkillPill';
import { skills } from '@/lib/data';

gsap.registerPlugin(ScrollTrigger);

type ParticleSpec = {
  angle: number;
  distance: number;
  width: number;
  color: string;
  opacity: number;
};

export default function SkillsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const pillsRef = useRef<HTMLDivElement[]>([]);
  const particleRefs = useRef<HTMLDivElement[]>([]);
  const orbitRef = useRef<HTMLDivElement>(null);
  const spotlightRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);
  const h2Ref = useRef<HTMLHeadingElement>(null);
  const copyRef = useRef<HTMLParagraphElement>(null);
  const statRefs = useRef<HTMLDivElement[]>([]);

  const groupedSkills = useMemo(() => ({
    Strategy: skills.slice(0, 10),
    Execution: skills.slice(10, 20),
    Growth: skills.slice(20),
  }), []);

  const featuredSkills = useMemo(() => [
    { label: 'Strategy', skill: 'Content Strategy', top: '14%', left: '10%' },
    { label: 'Execution', skill: 'Cross-Functional Coordination', top: '18%', right: '8%' },
    { label: 'Voice', skill: 'Content Tone Development', bottom: '20%', left: '6%' },
    { label: 'Growth', skill: 'Reporting & Analytics', bottom: '14%', right: '10%' },
  ], []);

  const particleData = useMemo<ParticleSpec[]>(() => {
    const palette = ['#D4537E', '#7F77DD', '#1D9E75', '#EF9F27', '#0C447C'];

    return Array.from({ length: 72 }, (_, index) => ({
      angle: (360 / 72) * index,
      distance: 110 + (index % 3) * 58 + ((index * 13) % 17),
      width: 8 + (index % 4) * 6,
      color: palette[index % palette.length],
      opacity: 0.28 + (index % 5) * 0.08,
    }));
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        [labelRef.current, h2Ref.current, copyRef.current],
        { opacity: 0, y: 28 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 78%', once: true },
        }
      );

      gsap.fromTo(
        statRefs.current,
        { opacity: 0, y: 18 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.08,
          ease: 'power2.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 75%', once: true },
        }
      );

      gsap.fromTo(
        pillsRef.current,
        { opacity: 0, y: 18, scale: 0.96 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.42,
          stagger: 0.03,
          ease: 'power2.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 68%', once: true },
        }
      );

      if (orbitRef.current) {
        gsap.fromTo(
          orbitRef.current,
          { opacity: 0, scale: 0.92 },
          {
            opacity: 1,
            scale: 1,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: { trigger: sectionRef.current, start: 'top 75%', once: true },
          }
        );

        gsap.to(orbitRef.current, {
          rotate: 16,
          duration: 10,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
        });
      }

      if (spotlightRef.current) {
        gsap.to(spotlightRef.current, {
          y: -10,
          duration: 2.8,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
        });
      }

      gsap.to(particleRefs.current, {
        scale: 1.14,
        opacity: 0.95,
        duration: 1.4,
        stagger: {
          each: 0.025,
          repeat: -1,
          yoyo: true,
        },
        ease: 'sine.inOut',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="skills"
      ref={sectionRef}
      style={{
        background: 'linear-gradient(180deg, #F6F5FF 0%, #F8FAFF 38%, #FFFFFF 100%)',
        padding: 'clamp(56px, 8vw, 90px) clamp(20px, 8vw, 88px)',
        overflow: 'hidden',
      }}
    >
      <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))',
            gap: 'clamp(24px, 4vw, 44px)',
            alignItems: 'center',
            marginBottom: '32px',
          }}
        >
          <div>
            <span ref={labelRef}>
              <SectionLabel text="Skills" />
            </span>
            <h2
              ref={h2Ref}
              style={{
                fontFamily: 'Playfair Display, Georgia, serif',
                fontSize: 'clamp(34px, 4.8vw, 64px)',
                fontWeight: 700,
                color: '#101828',
                lineHeight: 1.04,
                letterSpacing: '-0.03em',
                marginBottom: '16px',
                maxWidth: '560px',
              }}
            >
              Strategy, systems, and social storytelling in motion.
            </h2>

            <p
              ref={copyRef}
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '15px',
                color: '#5A6376',
                lineHeight: 1.8,
                maxWidth: '520px',
                marginBottom: '20px',
              }}
            >
              The skill set combines client servicing discipline, content strategy, creative direction, and the operational clarity needed to move campaigns from brief to business impact.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
              {[
                '30+ core capabilities',
                'Brief to delivery ownership',
                'Brand growth mindset',
              ].map((stat, index) => (
                <div
                  key={stat}
                  ref={(el) => {
                    if (el) statRefs.current[index] = el;
                  }}
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '12px',
                    fontWeight: 600,
                    color: '#17203A',
                    border: '1px solid #D7E0F3',
                    backgroundColor: 'rgba(255,255,255,0.72)',
                    borderRadius: '999px',
                    padding: '10px 14px',
                    boxShadow: '0 10px 22px rgba(19, 28, 63, 0.06)',
                  }}
                >
                  {stat}
                </div>
              ))}
            </div>
          </div>

          <div
            style={{
              position: 'relative',
              minHeight: '520px',
              borderRadius: '34px',
              background: 'radial-gradient(circle at center, rgba(255,255,255,0.95) 0%, rgba(241,245,255,0.78) 46%, rgba(244,240,255,0.9) 100%)',
              border: '1px solid #E2E8F4',
              boxShadow: '0 28px 80px rgba(35, 45, 91, 0.08)',
              overflow: 'hidden',
            }}
          >
            <div
              ref={orbitRef}
              style={{
                position: 'absolute',
                inset: 0,
                transformOrigin: 'center center',
              }}
            >
              {particleData.map((particle, index) => (
                <div
                  key={`${particle.angle}-${index}`}
                  ref={(el) => {
                    if (el) particleRefs.current[index] = el;
                  }}
                  style={{
                    position: 'absolute',
                    left: '50%',
                    top: '50%',
                    width: `${particle.width}px`,
                    height: '4px',
                    borderRadius: '999px',
                    backgroundColor: particle.color,
                    opacity: particle.opacity,
                    transform: `translate(-50%, -50%) rotate(${particle.angle}deg) translateX(${particle.distance}px)`,
                    boxShadow: `0 0 12px ${particle.color}33`,
                  }}
                />
              ))}
            </div>

            {featuredSkills.map((item) => (
              <div
                key={item.skill}
                style={{
                  position: 'absolute',
                  ...(item.top ? { top: item.top } : {}),
                  ...(item.bottom ? { bottom: item.bottom } : {}),
                  ...(item.left ? { left: item.left } : {}),
                  ...(item.right ? { right: item.right } : {}),
                  zIndex: 3,
                  padding: '10px 12px',
                  borderRadius: '18px',
                  border: '1px solid #DFE7F5',
                  backgroundColor: 'rgba(255,255,255,0.78)',
                  boxShadow: '0 14px 28px rgba(18, 24, 58, 0.08)',
                  backdropFilter: 'blur(12px)',
                }}
              >
                <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '10px', letterSpacing: '1.4px', textTransform: 'uppercase', color: '#8A93AA', marginBottom: '4px' }}>
                  {item.label}
                </div>
                <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', fontWeight: 700, color: '#17203A' }}>
                  {item.skill}
                </div>
              </div>
            ))}

            <div
              ref={spotlightRef}
              style={{
                position: 'absolute',
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)',
                width: 'min(72%, 360px)',
                borderRadius: '28px',
                border: '1px solid #E2E8F3',
                background: 'linear-gradient(180deg, rgba(255,255,255,0.96) 0%, rgba(249,250,255,0.94) 100%)',
                boxShadow: '0 24px 60px rgba(25, 36, 77, 0.12)',
                padding: '22px 22px 20px',
                zIndex: 4,
                textAlign: 'center',
              }}
            >
              <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '11px', letterSpacing: '2px', textTransform: 'uppercase', color: '#8F98B2', marginBottom: '8px' }}>
                Core Value Stack
              </div>
              <div style={{ fontFamily: 'Playfair Display, Georgia, serif', fontSize: 'clamp(28px, 3vw, 40px)', lineHeight: 1.05, color: '#101828', marginBottom: '10px' }}>
                Build the idea.
                <br />
                Scale the execution.
              </div>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', lineHeight: 1.75, color: '#5A6376', maxWidth: '290px', margin: '0 auto 14px' }}>
                A blend of strategy thinking, content leadership, and operational clarity designed for modern entertainment brands.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '8px' }}>
                {skills.slice(0, 4).map((skill) => (
                  <div key={skill.name} style={{ fontFamily: 'Inter, sans-serif', fontSize: '11px', color: skill.color, backgroundColor: skill.bg, border: `1px solid ${skill.border}`, borderRadius: '999px', padding: '7px 10px', fontWeight: 700 }}>
                    {skill.name}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div
          style={{
            border: '1px solid #E3E9F5',
            borderRadius: '28px',
            background: 'linear-gradient(180deg, rgba(255,255,255,0.94) 0%, rgba(247,249,255,0.94) 100%)',
            boxShadow: '0 24px 70px rgba(24, 37, 79, 0.06)',
            padding: 'clamp(18px, 3vw, 28px)',
            display: 'grid',
            gap: '18px',
          }}
        >
          {Object.entries(groupedSkills).map(([groupName, groupSkills]) => (
            <div key={groupName}>
              <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '11px', fontWeight: 700, letterSpacing: '1.6px', textTransform: 'uppercase', color: '#7B879F', marginBottom: '12px' }}>
                {groupName}
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                {groupSkills.map((skill) => (
                  <div
                    key={skill.name}
                    ref={(el) => {
                      if (el) pillsRef.current[skills.findIndex((item) => item.name === skill.name)] = el;
                    }}
                  >
                    <SkillPill {...skill} />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
