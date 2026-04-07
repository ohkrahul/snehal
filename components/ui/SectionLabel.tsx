'use client';

import React from 'react';

interface SectionLabelProps {
  text: string;
  color?: string;
}

export default function SectionLabel({ text, color = '#D4537E' }: SectionLabelProps) {
  return (
    <span
      className="section-label"
      style={{ color }}
    >
      {text}
    </span>
  );
}
