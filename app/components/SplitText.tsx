'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface SplitTextProps {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
  ease?: string;
  splitType?: 'chars' | 'words' | 'lines';
  from?: gsap.TweenVars;
  to?: gsap.TweenVars;
  threshold?: number;
  rootMargin?: string;
  textAlign?: 'left' | 'center' | 'right';
  onLetterAnimationComplete?: () => void;
}

export default function SplitText({
  text,
  className = '',
  delay = 100,
  duration = 0.6,
  ease = 'power3.out',
  splitType = 'chars',
  from = { opacity: 0, y: 40 },
  to = { opacity: 1, y: 0 },
  threshold = 0.1,
  rootMargin = '-100px',
  textAlign = 'center',
  onLetterAnimationComplete,
}: SplitTextProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!containerRef.current || hasAnimated.current) return;

    const container = containerRef.current;
    const chars = container.querySelectorAll('.char');

    if (chars.length === 0) return;

    // Set initial state
    gsap.set(chars, from);

    // Create scroll trigger animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: 'top 80%',
        toggleActions: 'play none none none',
        onEnter: () => {
          if (hasAnimated.current) return;
          hasAnimated.current = true;

          // Animate each character
          chars.forEach((char, index) => {
            gsap.to(char, {
              ...to,
              duration: duration,
              delay: index * (delay / 1000),
              ease: ease,
              onComplete: index === chars.length - 1 ? onLetterAnimationComplete : undefined,
            });
          });
        },
      },
    });

    return () => {
      tl.kill();
    };
  }, [text, delay, duration, ease, from, to, onLetterAnimationComplete]);

  // Split text into characters
  const splitText = () => {
    if (splitType === 'chars') {
      return text.split('').map((char, index) => (
        <span
          key={index}
          className="char inline-block"
          style={{ display: char === ' ' ? 'inline' : 'inline-block' }}
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ));
    } else if (splitType === 'words') {
      return text.split(' ').map((word, index) => (
        <span key={index} className="char inline-block mr-2">
          {word}
        </span>
      ));
    }
    return text;
  };

  const textAlignClass =
    textAlign === 'center'
      ? 'text-center'
      : textAlign === 'right'
      ? 'text-right'
      : 'text-left';

  return (
    <div
      ref={containerRef}
      className={`${className} ${textAlignClass}`}
      style={{ display: 'inline-block' }}
    >
      {splitText()}
    </div>
  );
}

