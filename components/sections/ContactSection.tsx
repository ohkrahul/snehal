'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { personalInfo } from '@/lib/data';

gsap.registerPlugin(ScrollTrigger);

export default function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const h2Ref = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const pillsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(h2Ref.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.6, scrollTrigger: { trigger: sectionRef.current, start: 'top 80%', once: true } }
      );
      gsap.fromTo(subRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, delay: 0.1, scrollTrigger: { trigger: sectionRef.current, start: 'top 80%', once: true } }
      );
      gsap.fromTo(pillsRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.7, delay: 0.2, scrollTrigger: { trigger: sectionRef.current, start: 'top 75%', once: true } }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="contact"
      ref={sectionRef}
      style={{
        backgroundColor: '#FFFFFF',
        borderTop: '1px solid #F0ECF8',
        padding: 'clamp(40px, 8vw, 80px) clamp(20px, 8vw, 80px)',
        textAlign: 'center',
      }}
    >
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        {/* H2 */}
        <h2
          ref={h2Ref}
          style={{
            fontFamily: 'Playfair Display, Georgia, serif',
            fontSize: 'clamp(26px, 4vw, 36px)',
            fontWeight: 700,
            color: '#1A1A2E',
            lineHeight: 1.2,
          }}
        >
          Let&apos;s build something{' '}
          <span style={{ color: '#D4537E' }}>big</span>{' '}
          <span style={{ color: '#7F77DD' }}>together</span>.
        </h2>

        {/* Subtext */}
        <p
          ref={subRef}
          style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '14px',
            color: '#AAAAAA',
            marginTop: '10px',
            marginBottom: '32px',
            lineHeight: 1.6,
          }}
        >
          Open to brand strategy, campaign collaborations and consulting opportunities.
        </p>

        {/* Contact pills + button */}
        <div
          ref={pillsRef}
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '12px',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {/* Email */}
          <a
            href={`mailto:${personalInfo.email}`}
            aria-label="Email Snehal Yelle"
            style={{
              backgroundColor: '#F8F6FF',
              border: '1px solid #CECBF6',
              color: '#7F77DD',
              borderRadius: '24px',
              padding: '11px 20px',
              fontFamily: 'Inter, sans-serif',
              fontSize: '12px',
              textDecoration: 'none',
              transition: 'background-color 0.2s ease',
            }}
            onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#EEEDFE')}
            onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#F8F6FF')}
          >
            {personalInfo.email}
          </a>

          {/* Phone */}
          <a
            href={`tel:${personalInfo.phone}`}
            aria-label="Call Snehal Yelle"
            style={{
              backgroundColor: '#F8F6FF',
              border: '1px solid #CECBF6',
              color: '#7F77DD',
              borderRadius: '24px',
              padding: '11px 20px',
              fontFamily: 'Inter, sans-serif',
              fontSize: '12px',
              textDecoration: 'none',
              transition: 'background-color 0.2s ease',
            }}
            onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#EEEDFE')}
            onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#F8F6FF')}
          >
            {personalInfo.phone}
          </a>

          {/* Location */}
          <span style={{
            backgroundColor: '#F8F6FF',
            border: '1px solid #CECBF6',
            color: '#7F77DD',
            borderRadius: '24px',
            padding: '11px 20px',
            fontFamily: 'Inter, sans-serif',
            fontSize: '12px',
          }}>
            {personalInfo.location}
          </span>

          {/* Get in Touch Button */}
          <a
            href={`mailto:${personalInfo.email}`}
            aria-label="Get in touch with Snehal Yelle"
            style={{
              backgroundColor: '#D4537E',
              color: '#FFFFFF',
              fontFamily: 'Inter, sans-serif',
              fontSize: '13px',
              fontWeight: 700,
              padding: '13px 36px',
              borderRadius: '28px',
              textDecoration: 'none',
              transition: 'background-color 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease',
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLAnchorElement).style.backgroundColor = '#993556';
              (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(-2px)';
              (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 8px 20px rgba(212,83,126,0.25)';
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLAnchorElement).style.backgroundColor = '#D4537E';
              (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(0)';
              (e.currentTarget as HTMLAnchorElement).style.boxShadow = 'none';
            }}
          >
            Get in Touch
          </a>

          {/* LinkedIn */}
          <a
            href={personalInfo.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Snehal Yelle LinkedIn profile"
            style={{
              backgroundColor: '#E6F1FB',
              border: '1px solid #B5D4F4',
              color: '#0C447C',
              borderRadius: '24px',
              padding: '11px 20px',
              fontFamily: 'Inter, sans-serif',
              fontSize: '12px',
              textDecoration: 'none',
              transition: 'background-color 0.2s ease',
            }}
            onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#D0E5F7')}
            onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#E6F1FB')}
          >
            {personalInfo.linkedin}
          </a>
        </div>
      </div>
    </section>
  );
}
