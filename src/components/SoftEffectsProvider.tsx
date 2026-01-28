import React, { createContext, useContext, useEffect } from 'react';
import { useSoftSound } from '@/hooks/useSoftSound';

type SoftEffectsContextType = {
  playSound: (type: 'click' | 'hover' | 'success' | 'whoosh' | 'pop') => void;
  toggleSound: (enabled: boolean) => void;
};

const SoftEffectsContext = createContext<SoftEffectsContextType | null>(null);

export const useSoftEffects = () => {
  const context = useContext(SoftEffectsContext);
  if (!context) {
    return { playSound: () => {}, toggleSound: () => {} };
  }
  return context;
};

interface SoftEffectsProviderProps {
  children: React.ReactNode;
}

export const SoftEffectsProvider: React.FC<SoftEffectsProviderProps> = ({ children }) => {
  const { playSound, toggleSound } = useSoftSound();

  // Global click sound effect for buttons
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Play soft click for buttons and interactive elements
      if (
        target.tagName === 'BUTTON' ||
        target.closest('button') ||
        target.closest('a') ||
        target.closest('[role="button"]')
      ) {
        playSound('click');
      }
    };

    // Add global click listener
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, [playSound]);

  // Smooth scroll bounce effect
  useEffect(() => {
    let scrollTimeout: NodeJS.Timeout;
    let lastScrollTop = 0;
    let velocity = 0;

    const handleScroll = () => {
      const st = window.scrollY;
      velocity = st - lastScrollTop;
      lastScrollTop = st;

      // Clear existing timeout
      clearTimeout(scrollTimeout);

      // Add subtle bounce class when scrolling ends
      scrollTimeout = setTimeout(() => {
        if (Math.abs(velocity) > 10) {
          document.body.classList.add('scroll-bounce');
          setTimeout(() => {
            document.body.classList.remove('scroll-bounce');
          }, 300);
        }
      }, 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <SoftEffectsContext.Provider value={{ playSound, toggleSound }}>
      <div className="soft-effects-wrapper">
        {children}
      </div>
    </SoftEffectsContext.Provider>
  );
};

export default SoftEffectsProvider;
