'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SectionLabel from '@/components/ui/SectionLabel';
import { campaigns } from '@/lib/data';

gsap.registerPlugin(ScrollTrigger);

interface CampaignCardProps {
  campaign: typeof campaigns[0];
  innerRef?: (el: HTMLDivElement | null) => void;
  compact?: boolean;
}

function CampaignCard({ campaign, innerRef, compact = false }: CampaignCardProps) {
  const [imageError, setImageError] = React.useState(false);
  const showImage = Boolean(campaign.image) && !imageError;
  const initials = campaign.title
    .split(' ')
    .map((word) => word[0])
    .join('')
    .slice(0, 3)
    .toUpperCase();

  return (
    <div
      ref={innerRef}
      style={{
        width: compact ? 'min(88vw, 430px)' : 'min(78vw, 540px)',
        minHeight: compact ? '320px' : '500px',
        backgroundColor: '#FFFFFF',
        border: '1px solid #E8ECF7',
        borderRadius: compact ? '22px' : '28px',
        padding: compact ? '14px' : '18px',
        boxShadow: '0 26px 60px rgba(20, 31, 67, 0.10)',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <div
        style={{
          position: 'relative',
          overflow: 'hidden',
          borderRadius: compact ? '18px' : '22px',
          minHeight: compact ? '150px' : '250px',
          background: `linear-gradient(135deg, ${campaign.bgColor} 0%, #FFFFFF 100%)`,
          border: `1px solid ${campaign.textColor}1A`,
        }}
      >
        {showImage ? (
          <Image
            src={campaign.image}
            alt={`${campaign.title} campaign visual`}
            fill
            style={{ objectFit: 'cover' }}
            sizes={compact ? '(max-width: 768px) 100vw, 430px' : '(max-width: 768px) 100vw, 540px'}
            onError={() => setImageError(true)}
          />
        ) : (
          <>
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: `radial-gradient(circle at top right, ${campaign.textColor}16 0%, transparent 34%), linear-gradient(135deg, ${campaign.bgColor} 0%, #FFFFFF 100%)`,
              }}
            />
            <div
              style={{
                position: 'absolute',
                inset: 0,
                opacity: 0.18,
                backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(0,0,0,0.16) 1px, transparent 0)',
                backgroundSize: '18px 18px',
              }}
            />
            <div
              style={{
                position: 'absolute',
                right: compact ? '-8px' : '-14px',
                bottom: compact ? '-20px' : '-26px',
                fontFamily: 'Playfair Display, Georgia, serif',
                fontSize: compact ? '62px' : '104px',
                lineHeight: 1,
                color: `${campaign.textColor}12`,
                fontWeight: 700,
                letterSpacing: '-0.06em',
              }}
            >
              {initials}
            </div>
          </>
        )}

        <div
          style={{
            position: 'relative',
            zIndex: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            height: '100%',
            padding: compact ? '14px' : '18px',
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '10px' }}>
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                width: 'fit-content',
                fontFamily: 'Inter, sans-serif',
                fontSize: compact ? '10px' : '11px',
                fontWeight: 700,
                color: campaign.textColor,
                backgroundColor: 'rgba(255,255,255,0.78)',
                border: `1px solid ${campaign.textColor}24`,
                borderRadius: '999px',
                padding: compact ? '6px 10px' : '7px 12px',
                backdropFilter: 'blur(10px)',
              }}
            >
              {campaign.highlight}
            </span>

            <span
              aria-hidden="true"
              style={{
                width: compact ? '32px' : '38px',
                height: compact ? '32px' : '38px',
                borderRadius: '999px',
                border: `1px solid ${campaign.textColor}3D`,
                display: 'grid',
                placeItems: 'center',
                color: campaign.textColor,
                fontSize: compact ? '15px' : '17px',
                fontWeight: 700,
                backgroundColor: 'rgba(255,255,255,0.74)',
              }}
            >
              +
            </span>
          </div>

          <div style={{ maxWidth: compact ? '86%' : '72%' }}>
            <div
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: compact ? '10px' : '11px',
                fontWeight: 700,
                color: campaign.textColor,
                textTransform: 'uppercase',
                letterSpacing: '1.4px',
                marginBottom: '10px',
              }}
            >
              {campaign.subtitle}
            </div>
            <div
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: compact ? '20px' : '25px',
                fontWeight: 700,
                color: '#17203A',
                lineHeight: 1.12,
              }}
            >
              {campaign.label}
            </div>
          </div>
        </div>
      </div>

      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', paddingTop: compact ? '14px' : '18px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: '12px', alignItems: 'flex-start' }}>
          <div>
            <div
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: compact ? '15px' : '18px',
                fontWeight: 700,
                color: '#1A1A2E',
                marginBottom: '5px',
              }}
            >
              {campaign.title}
            </div>
            <div
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: compact ? '11px' : '12px',
                color: '#8891A7',
                fontWeight: 500,
              }}
            >
              {campaign.brand}
            </div>
          </div>

          <span
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '10px',
              color: campaign.textColor,
              backgroundColor: campaign.bgColor,
              borderRadius: '999px',
              padding: '6px 10px',
              fontWeight: 700,
              whiteSpace: 'nowrap',
            }}
          >
            Featured
          </span>
        </div>

        <p
          style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: compact ? '12px' : '13px',
            color: '#4F566F',
            lineHeight: 1.72,
            marginTop: '14px',
            marginBottom: '16px',
          }}
        >
          {campaign.summary}
        </p>

        <div
          style={{
            marginTop: 'auto',
            borderTop: '1px solid #EEF1F8',
            paddingTop: '14px',
          }}
        >
          <div
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '10px',
              color: '#8A90A7',
              textTransform: 'uppercase',
              letterSpacing: '1.1px',
              marginBottom: '8px',
            }}
          >
            Outcome
          </div>
          <div
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: compact ? '12px' : '13px',
              color: campaign.textColor,
              lineHeight: 1.55,
              fontWeight: 600,
            }}
          >
            {campaign.result}
          </div>
        </div>
      </div>
    </div>
  );
}

type CardState = {
  x: number;
  y: number;
  scale: number;
  opacity: number;
  zIndex: number;
  rotate: number;
};

function getCardState(index: number, activeIndex: number, stageWidth: number): CardState {
  if (index === activeIndex) {
    return {
      x: 0,
      y: 0,
      scale: 1,
      opacity: 1,
      zIndex: 30,
      rotate: 0,
    };
  }

  if (index < activeIndex) {
    const offset = activeIndex - index - 1;
    const visibleOffset = Math.min(offset, 2);

    return {
      x: Math.min(stageWidth * 0.34 + visibleOffset * 34, stageWidth * 0.44),
      y: visibleOffset * 28,
      scale: Math.max(0.68, 0.82 - visibleOffset * 0.08),
      opacity: offset > 2 ? 0 : 0.56 - visibleOffset * 0.12,
      zIndex: 20 - visibleOffset,
      rotate: 4 - visibleOffset,
    };
  }

  return {
    x: 0,
    y: 26,
    scale: 0.92,
    opacity: 0,
    zIndex: 5,
    rotate: 0,
  };
}

export default function CampaignsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);
  const h2Ref = useRef<HTMLHeadingElement>(null);
  const introRef = useRef<HTMLParagraphElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const syncViewport = () => setIsMobile(window.innerWidth < 900);
    syncViewport();
    window.addEventListener('resize', syncViewport);
    return () => window.removeEventListener('resize', syncViewport);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        [labelRef.current, h2Ref.current, introRef.current],
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.75,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            once: true,
          },
        }
      );

      const cards = cardsRef.current.filter(Boolean);
      if (!cards.length) return;

      if (isMobile) {
        gsap.fromTo(
          cards,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.65,
            stagger: 0.12,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 72%',
              once: true,
            },
          }
        );
        return;
      }

      const stage = stageRef.current;
      if (!stage) return;

      const applyState = (activeIndex: number) => {
        const stageWidth = stage.clientWidth;
        cards.forEach((card, index) => {
          gsap.set(card, getCardState(index, activeIndex, stageWidth));
        });
      };

      applyState(0);

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: stage,
          start: 'top top+=86',
          end: `+=${campaigns.length * 520}`,
          pin: true,
          scrub: 1,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      for (let activeIndex = 1; activeIndex < cards.length; activeIndex += 1) {
        const stepLabel = `step-${activeIndex}`;

        cards.forEach((card, index) => {
          timeline.to(
            card,
            {
              ...getCardState(index, activeIndex, stage.clientWidth),
              duration: 1,
              ease: 'power2.inOut',
            },
            stepLabel
          );
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, [isMobile]);

  return (
    <section
      id="campaigns"
      ref={sectionRef}
      style={{
        background: 'linear-gradient(180deg, #FFFFFF 0%, #F8FAFF 100%)',
        padding: 'clamp(48px, 8vw, 90px) clamp(20px, 7vw, 88px)',
        overflow: 'hidden',
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <div style={{ maxWidth: '760px', marginBottom: '28px' }}>
          <span ref={labelRef}>
            <SectionLabel text="Key Campaigns" />
          </span>
          <h2
            ref={h2Ref}
            style={{
              fontFamily: 'Playfair Display, Georgia, serif',
              fontSize: 'clamp(34px, 5vw, 72px)',
              fontWeight: 700,
              color: '#101828',
              lineHeight: 1.02,
              letterSpacing: '-0.03em',
              marginBottom: '12px',
            }}
          >
            Work that moved audiences
          </h2>
          <p
            ref={introRef}
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '15px',
              lineHeight: 1.75,
              color: '#586174',
              maxWidth: '640px',
            }}
          >
            Scroll through the campaign story one card at a time. Each project takes the center stage, then shifts aside as the next one steps in.
          </p>
        </div>

        {isMobile ? (
          <div style={{ display: 'grid', gap: '16px' }}>
            {campaigns.map((campaign, index) => (
              <CampaignCard
                key={campaign.id}
                campaign={campaign}
                compact={index !== 0}
                innerRef={(el) => {
                  if (el) cardsRef.current[index] = el;
                }}
              />
            ))}
          </div>
        ) : (
          <div
            ref={stageRef}
            style={{
              position: 'relative',
              minHeight: '680px',
              borderRadius: '34px',
              border: '1px solid #E8ECF8',
              background: 'linear-gradient(180deg, rgba(251,252,255,0.95) 0%, rgba(245,248,255,0.95) 100%)',
              boxShadow: '0 20px 70px rgba(34, 52, 111, 0.08)',
              overflow: 'hidden',
            }}
          >
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'radial-gradient(circle at 80% 20%, rgba(127,119,221,0.08) 0%, transparent 32%), radial-gradient(circle at 10% 80%, rgba(212,83,126,0.08) 0%, transparent 34%)',
              }}
            />

            <div
              style={{
                position: 'absolute',
                left: '42px',
                top: '34px',
                zIndex: 40,
                display: 'grid',
                gap: '6px',
              }}
            >
              <div
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '10px',
                  textTransform: 'uppercase',
                  letterSpacing: '1.8px',
                  color: '#98A2B3',
                }}
              >
                Scroll Sequence
              </div>
              <div
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '13px',
                  lineHeight: 1.6,
                  color: '#344054',
                  maxWidth: '280px',
                }}
              >
                Center card is the active campaign. Previous campaigns stack to the side as you keep scrolling.
              </div>
            </div>

            <div
              style={{
                position: 'absolute',
                inset: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '40px',
              }}
            >
              {campaigns.map((campaign, index) => (
                <div
                  key={campaign.id}
                  ref={(el) => {
                    if (el) cardsRef.current[index] = el;
                  }}
                  style={{
                    position: 'absolute',
                    left: '50%',
                    top: '50%',
                    transform: 'translate(-50%, -50%)',
                    transformOrigin: 'center center',
                    willChange: 'transform, opacity',
                  }}
                >
                  <CampaignCard campaign={campaign} compact={false} />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
