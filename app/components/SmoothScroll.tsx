'use client';

import { useEffect } from 'react';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Initialize Lenis smooth scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Wait for DOM to be ready
    const initAnimations = () => {
      // GSAP ScrollTrigger animations
      const elements = document.querySelectorAll('[data-scroll]');
      elements.forEach((element) => {
        gsap.fromTo(
          element,
          {
            opacity: 0,
            y: 50,
          },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: element,
              start: 'top 80%',
              end: 'bottom 20%',
              toggleActions: 'play none none none',
            },
          }
        );
      });

      // Fade in animations for cards
      const cards = document.querySelectorAll('[data-scroll-card]');
      cards.forEach((card, index) => {
        gsap.fromTo(
          card,
          {
            opacity: 0,
            y: 60,
            scale: 0.95,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            delay: index * 0.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
          }
        );
      });

      // Step-by-step animation for "How It Works" section
      const howItWorksSection = document.querySelector('#how-it-works');
      if (howItWorksSection) {
        const steps = howItWorksSection.querySelectorAll('.step-item');
        const progressLine = howItWorksSection.querySelector('.progress-line') as HTMLElement;

        // Animate progress line (no reverse)
        if (progressLine) {
          gsap.to(progressLine, {
            width: '100%',
            duration: 1.5,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: howItWorksSection,
              start: 'top 70%',
              toggleActions: 'play none none none',
            },
          });
        }

        // Animate each step sequentially
        steps.forEach((step, index) => {
          const stepNumber = step.querySelector('.step-number') as HTMLElement;
          const stepPulse = step.querySelector('.step-pulse') as HTMLElement;

          // Set initial state
          gsap.set(step, {
            opacity: 0,
            y: 40,
            scale: 0.95,
          });

          // Main step animation
          gsap.to(step, {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            delay: index * 0.2,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: step,
              start: 'top 85%',
              toggleActions: 'play none none none',
              onEnter: () => {
                step.classList.add('active');
                if (stepNumber) {
                  gsap.to(stepNumber, {
                    scale: 1.15,
                    duration: 0.4,
                    yoyo: true,
                    repeat: 1,
                    ease: 'power2.out',
                  });
                }
                if (stepPulse) {
                  gsap.to(stepPulse, {
                    opacity: 1,
                    scale: 1.3,
                    duration: 0.6,
                    ease: 'power2.out',
                  });
                }
              },
            },
          });

          // Step number animation
          if (stepNumber) {
            gsap.set(stepNumber, {
              rotation: -180,
              scale: 0.8,
            });

            gsap.to(stepNumber, {
              rotation: 0,
              scale: 1,
              duration: 0.8,
              delay: index * 0.2,
              ease: 'back.out(1.7)',
              scrollTrigger: {
                trigger: step,
                start: 'top 85%',
                toggleActions: 'play none none none',
              },
            });
          }
        });
      }
    };

    // Initialize animations after a short delay to ensure DOM is ready
    setTimeout(initAnimations, 100);

    return () => {
      lenis.destroy();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return <>{children}</>;
}

