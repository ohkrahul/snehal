'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

interface AnimatedCounterProps {
  target: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  delay?: number;
  className?: string;
  numberStyle?: React.CSSProperties;
  suffixStyle?: React.CSSProperties;
}

export default function AnimatedCounter({
  target,
  suffix = '',
  prefix = '',
  duration = 1.8,
  delay = 0,
  className = '',
  numberStyle = {},
  suffixStyle = {},
}: AnimatedCounterProps) {
  const countRef = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (hasAnimated.current || !countRef.current) return;
    hasAnimated.current = true;

    const proxy = { value: 0 };
    gsap.to(proxy, {
      value: target,
      duration,
      delay,
      ease: 'power2.out',
      onUpdate: () => {
        if (countRef.current) {
          countRef.current.textContent = Math.round(proxy.value).toString();
        }
      },
    });
  }, [target, duration, delay]);

  return (
    <span className={className}>
      {prefix && <span style={suffixStyle}>{prefix}</span>}
      <span ref={countRef} style={numberStyle}>0</span>
      {suffix && <span style={suffixStyle}>{suffix}</span>}
    </span>
  );
}
