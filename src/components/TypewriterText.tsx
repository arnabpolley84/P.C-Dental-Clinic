import React, { useState, useEffect, useRef } from 'react';

interface TypewriterTextProps {
  text: string;
  speed?: number; // ms per character
  delay?: number; // initial delay in ms
  showCursor?: boolean;
  cursorChar?: string;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'p' | 'span' | 'div';
  triggerOnView?: boolean;
  triggerKey?: string | number; // allow manual re-trigger if slide changes
  onComplete?: () => void;
}

export const TypewriterText: React.FC<TypewriterTextProps> = ({
  text,
  speed = 28,
  delay = 100,
  showCursor = true,
  cursorChar = '|',
  className = '',
  as: Component = 'span',
  triggerOnView = true,
  triggerKey,
  onComplete,
}) => {
  const [displayedText, setDisplayedText] = useState<string>('');
  const [isTyping, setIsTyping] = useState<boolean>(false);
  const [hasCompleted, setHasCompleted] = useState<boolean>(false);
  const [isInView, setIsInView] = useState<boolean>(!triggerOnView);
  const containerRef = useRef<HTMLElement>(null);

  // Check user reduced motion preference
  const prefersReducedMotion = typeof window !== 'undefined' && 
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  useEffect(() => {
    if (prefersReducedMotion) {
      setDisplayedText(text);
      setHasCompleted(true);
      if (onComplete) onComplete();
      return;
    }

    if (!triggerOnView) {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [triggerOnView, prefersReducedMotion, triggerKey]);

  useEffect(() => {
    if (prefersReducedMotion) {
      setDisplayedText(text);
      setHasCompleted(true);
      return;
    }

    if (!isInView) return;

    // Reset when triggerKey or text changes
    setDisplayedText('');
    setHasCompleted(false);
    setIsTyping(false);

    let timeoutId: NodeJS.Timeout;
    let charIndex = 0;
    let isCancelled = false;

    timeoutId = setTimeout(() => {
      if (isCancelled) return;
      setIsTyping(true);

      const intervalId = setInterval(() => {
        if (isCancelled) {
          clearInterval(intervalId);
          return;
        }

        charIndex++;
        if (charIndex <= text.length) {
          setDisplayedText(text.slice(0, charIndex));
        }

        if (charIndex >= text.length) {
          clearInterval(intervalId);
          setIsTyping(false);
          setHasCompleted(true);
          if (onComplete) onComplete();
        }
      }, Math.max(12, speed));

      return () => clearInterval(intervalId);
    }, delay);

    return () => {
      isCancelled = true;
      clearTimeout(timeoutId);
    };
  }, [isInView, text, speed, delay, triggerKey, prefersReducedMotion]);

  return (
    <Component ref={containerRef as any} className={`inline-block ${className}`}>
      <span>{displayedText}</span>
      {showCursor && (isTyping || (!hasCompleted && isInView)) && (
        <span className="animate-typing-cursor ml-0.5 select-none" aria-hidden="true">
          {cursorChar}
        </span>
      )}
    </Component>
  );
};
