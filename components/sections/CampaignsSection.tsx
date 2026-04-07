'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SectionLabel from '@/components/ui/SectionLabel';
import { campaigns } from '@/lib/data';

gsap.registerPlugin(ScrollTrigger);

interface CampaignCardProps {
  campaign: typeof campaigns[0];
  isLarge?: boolean;
  innerRef?: (el: HTMLDivElement | null) => void;
}

function CampaignCard({ campaign, isLarge = false, innerRef }: CampaignCardProps) {
  const [hovered, setHovered] = React.useState(false);

  return (
    <div
      ref={innerRef}
      className="campaign-card"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        backgroundColor: '#FFFFFF',
        border: '1px solid #F0ECF8',
        borderRadius: '14px',
        padding: '16px',
        transition: 'transform 0.25s ease, box-shadow 0.25s ease',
        transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
        boxShadow: hovered
          ? '0 8px 24px rgba(0,0,0,0.08)'
          : '0 2px 8px rgba(0,0,0,0.04)',
        cursor: 'default',
        display: 'flex',
        flexDirection: 'column',
        ...(isLarge && { gridRow: 'span 2' }),
      }}
    >
      {/* Image Area */}
      <div style={{
        backgroundColor: campaign.bgColor,
        borderRadius: '10px',
        height: isLarge ? '180px' : '80px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '12px',
        flexShrink: 0,
      }}>
        <span style={{
          fontFamily: 'Inter, sans-serif',
          fontSize: '11px',
          fontWeight: 700,
          color: campaign.textColor,
          textAlign: 'center',
          padding: '0 12px',
        }}>
          {campaign.label}
        </span>
      </div>

      {/* Content */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        <div style={{
          fontFamily: 'Inter, sans-serif',
          fontSize: '13px',
          fontWeight: 700,
          color: '#1A1A2E',
          marginBottom: '4px',
        }}>
          {campaign.title}
        </div>
        <div style={{
          fontFamily: 'Inter, sans-serif',
          fontSize: '10px',
          color: '#AAAAAA',
          marginBottom: '4px',
        }}>
          {campaign.brand}
        </div>
        <div style={{
          fontFamily: 'Inter, sans-serif',
          fontSize: '10px',
          color: '#D4537E',
          marginTop: 'auto',
        }}>
          {campaign.result}
        </div>
      </div>

      {/* Hover arrow */}
      <div
        className="hover-arrow"
        style={{
          alignSelf: 'flex-end',
          marginTop: '8px',
          color: '#D4537E',
          fontSize: '14px',
          fontWeight: 600,
        }}
      >
        →
      </div>
    </div>
  );
}

export default function CampaignsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);
  const h2Ref = useRef<HTMLHeadingElement>(null);
  const largeCardRef = useRef<HTMLDivElement | null>(null);
  const smallCardsRef = useRef<HTMLDivElement[]>([]);

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

      if (largeCardRef.current) {
        gsap.fromTo(largeCardRef.current,
          { opacity: 0, scale: 0.95 },
          {
            opacity: 1, scale: 1, duration: 0.6,
            scrollTrigger: { trigger: sectionRef.current, start: 'top 75%', once: true }
          }
        );
      }

      gsap.fromTo(smallCardsRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0, duration: 0.5, stagger: 0.1,
          scrollTrigger: { trigger: sectionRef.current, start: 'top 75%', once: true }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const [largeCampaign, ...smallCampaigns] = campaigns;

  return (
    <section
      id="campaigns"
      ref={sectionRef}
      style={{
        backgroundColor: '#FFFFFF',
        padding: 'clamp(40px, 8vw, 80px) clamp(20px, 8vw, 80px)',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Header row */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '24px', flexWrap: 'wrap', gap: '12px' }}>
          <div>
            <span ref={labelRef}>
              <SectionLabel text="Key Campaigns" />
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
              Work that moved audiences
            </h2>
          </div>
          <a
            href="#"
            aria-label="See all work"
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '12px',
              color: '#D4537E',
              textDecoration: 'none',
              transition: 'opacity 0.2s',
              paddingTop: '8px',
            }}
            onMouseEnter={e => (e.currentTarget.style.opacity = '0.7')}
            onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
          >
            See all work →
          </a>
        </div>

        {/* Bento Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gridAutoRows: 'auto',
          gap: '12px',
        }}>
          {/* Large card col 1 row span 2 */}
          <div style={{ gridRow: 'span 2' }}>
            <CampaignCard
              campaign={largeCampaign}
              isLarge={true}
              innerRef={el => { largeCardRef.current = el; }}
            />
          </div>

          {/* Small cards */}
          {smallCampaigns.map((c, i) => (
            <CampaignCard
              key={c.id}
              campaign={c}
              isLarge={false}
              innerRef={el => { if (el) smallCardsRef.current[i] = el; }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
