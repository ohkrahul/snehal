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
        backgroundColor: bg,
        border: `1px solid ${border}`,
        color: color,
        fontSize: '12px',
        fontWeight: 600,
        padding: '9px 18px',
        borderRadius: '24px',
        fontFamily: 'Inter, sans-serif',
        cursor: 'default',
      }}
    >
      {name}
    </span>
  );
}
