'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SectionLabel from '@/components/ui/SectionLabel';
import SkillPill from '@/components/ui/SkillPill';
import { skills } from '@/lib/data';

gsap.registerPlugin(ScrollTrigger);

export default function SkillsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const pillsRef = useRef<HTMLDivElement[]>([]);
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
      gsap.fromTo(pillsRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1, y: 0, duration: 0.4, stagger: 0.05,
          scrollTrigger: { trigger: sectionRef.current, start: 'top 75%', once: true }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="skills"
      ref={sectionRef}
      style={{
        backgroundColor: '#F8F6FF',
        padding: 'clamp(40px, 7vw, 70px) clamp(20px, 8vw, 80px)',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <span ref={labelRef}>
          <SectionLabel text="Skills" />
        </span>
        <h2
          ref={h2Ref}
          style={{
            fontFamily: 'Playfair Display, Georgia, serif',
            fontSize: 'clamp(24px, 3vw, 32px)',
            fontWeight: 700,
            color: '#1A1A2E',
            marginBottom: '28px',
          }}
        >
          What I bring to the table
        </h2>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
          {skills.map((skill, i) => (
            <div
              key={skill.name}
              ref={el => { if (el) pillsRef.current[i] = el; }}
            >
              <SkillPill {...skill} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
