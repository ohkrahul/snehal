'use client';

import React from 'react';

interface SkillPillProps {
  name: string;
  bg: string;
  border: string;
  color: string;
}

export default function SkillPill({ name, bg, border, color }: SkillPillProps) {
  return (
    <span
      className="skill-pill inline-block"
      style={{
        background: `linear-gradient(135deg, ${bg} 0%, rgba(255,255,255,0.92) 100%)`,
        border: `1px solid ${border}`,
        color: color,
        fontSize: '12px',
        fontWeight: 600,
        padding: '10px 18px',
        borderRadius: '999px',
        fontFamily: 'Inter, sans-serif',
        cursor: 'default',
        boxShadow: '0 8px 18px rgba(18, 26, 56, 0.06)',
        backdropFilter: 'blur(8px)',
        letterSpacing: '-0.01em',
      }}
    >
      {name}
    </span>
  );
}
