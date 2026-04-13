'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ImpactStorySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const copyRef = useRef<HTMLDivElement>(null);
  const mainImageCardRef = useRef<HTMLDivElement>(null);
  const portraitCardRef = useRef<HTMLDivElement>(null);
  const angleCardRef = useRef<HTMLDivElement>(null);
  const chipsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        [headingRef.current, copyRef.current],
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          stagger: 0.14,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 78%',
            once: true,
          },
        }
      );

      gsap.fromTo(
        [mainImageCardRef.current, portraitCardRef.current, angleCardRef.current, chipsRef.current],
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          stagger: 0.12,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 70%',
            once: true,
          },
        }
      );

      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1.2,
        },
      });

      scrollTl
        .to(mainImageCardRef.current, { y: -36, scale: 1.03, ease: 'none' }, 0)
        .to(portraitCardRef.current, { y: 22, rotate: -3, ease: 'none' }, 0)
        .to(angleCardRef.current, { y: -24, rotate: 2.5, ease: 'none' }, 0)
        .to(chipsRef.current, { y: -18, ease: 'none' }, 0);
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="impact-story"
      ref={sectionRef}
      style={{
        background:
          'radial-gradient(circle at 8% 15%, rgba(37,99,235,0.08) 0%, rgba(37,99,235,0) 40%), linear-gradient(180deg, #F8FAFC 0%, #FFFFFF 50%, #F1F5F9 100%)',
        padding: 'clamp(56px, 10vw, 110px) clamp(20px, 7vw, 90px)',
      }}
    >
      <div
        style={{
          maxWidth: '1240px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: 'clamp(28px, 5vw, 54px)',
          alignItems: 'center',
        }}
      >
        <div>
          <span
            style={{
              display: 'inline-block',
              fontFamily: 'Inter, sans-serif',
              fontSize: '11px',
              letterSpacing: '2.8px',
              textTransform: 'uppercase',
              color: '#2563EB',
              marginBottom: '14px',
              fontWeight: 600,
            }}
          >
            Strategy In Action
          </span>

          <h2
            ref={headingRef}
            style={{
              fontFamily: 'Playfair Display, Georgia, serif',
              fontSize: 'clamp(31px, 4.3vw, 58px)',
              lineHeight: 1.06,
              color: '#0B1220',
              letterSpacing: '-0.02em',
              marginBottom: '20px',
              maxWidth: '560px',
            }}
          >
            Turning boardroom conversations into measurable growth.
          </h2>

          <div
            ref={copyRef}
            style={{
              fontFamily: 'Inter, sans-serif',
              color: '#475569',
              fontSize: '15px',
              lineHeight: 1.8,
              maxWidth: '520px',
              display: 'grid',
              gap: '12px',
            }}
          >
            <p>
              In client rooms, Snehal translates brand goals into campaign frameworks teams can execute,
              optimize, and scale.
            </p>
            <p>
              The approach combines audience insight, channel-fit storytelling, and clear performance
              checkpoints so every idea is tied to business outcomes.
            </p>
          </div>

          <div
            ref={chipsRef}
            style={{
              marginTop: '24px',
              display: 'flex',
              flexWrap: 'wrap',
              gap: '10px',
            }}
          >
            {[
              'Growth Planning',
              'Client Workshops',
              'Content Funnel Design',
              'Performance Storytelling',
            ].map((chip) => (
              <span
                key={chip}
                style={{
                  border: '1px solid #CBD5E1',
                  backgroundColor: 'rgba(255,255,255,0.78)',
                  padding: '8px 14px',
                  borderRadius: '999px',
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '11px',
                  fontWeight: 600,
                  color: '#0F172A',
                  backdropFilter: 'blur(6px)',
                }}
              >
                {chip}
              </span>
            ))}
          </div>
        </div>

        <div
          style={{
            position: 'relative',
            minHeight: 'min(84vw, 640px)',
            maxWidth: '660px',
            width: '100%',
            margin: '0 auto',
          }}
        >
          <div
            ref={mainImageCardRef}
            style={{
              position: 'absolute',
              top: '0',
              left: '0',
              width: 'min(100%, 620px)',
              borderRadius: '30px',
              overflow: 'hidden',
              border: '1px solid rgba(148,163,184,0.35)',
              boxShadow: '0 28px 60px rgba(15,23,42,0.16)',
              backgroundColor: '#FFFFFF',
            }}
          >
            <Image
              src="/images/profile/image1.png"
              alt="Snehal presenting growth strategy to clients in a meeting"
              width={1024}
              height={683}
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
          </div>

          <div
            ref={portraitCardRef}
            style={{
              position: 'absolute',
              top: 'min(58%, 360px)',
              right: '-2%',
              width: 'min(34vw, 220px)',
              aspectRatio: '1 / 1',
              borderRadius: '26px',
              overflow: 'hidden',
              border: '1px solid rgba(148,163,184,0.35)',
              boxShadow: '0 20px 42px rgba(2,6,23,0.18)',
              backgroundColor: '#FFFFFF',
            }}
          >
            <Image
              src="/images/profile/snehal.jpeg"
              alt="Snehal portrait"
              width={1152}
              height={768}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>

          <div
            ref={angleCardRef}
            style={{
              position: 'absolute',
              bottom: '-2%',
              left: '4%',
              width: 'min(65vw, 430px)',
              borderRadius: '22px',
              overflow: 'hidden',
              border: '1px solid rgba(148,163,184,0.35)',
              boxShadow: '0 16px 36px rgba(15,23,42,0.12)',
              backgroundColor: '#FFFFFF',
            }}
          >
            <Image
              src="/images/profile/image.png"
              alt="Multi-angle profile collage of Snehal"
              width={1024}
              height={683}
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
