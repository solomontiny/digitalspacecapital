import { useCallback, useRef } from 'react';

// AudioContext singleton for better performance
let audioContext: AudioContext | null = null;

const getAudioContext = () => {
  if (!audioContext) {
    audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
  }
  return audioContext;
};

type SoundType = 'click' | 'hover' | 'success' | 'whoosh' | 'pop';

export const useSoftSound = () => {
  const isEnabled = useRef(true);

  const playSound = useCallback((type: SoundType = 'click') => {
    if (!isEnabled.current) return;

    try {
      const ctx = getAudioContext();
      if (ctx.state === 'suspended') {
        ctx.resume();
      }

      const oscillator = ctx.createOscillator();
      const gainNode = ctx.createGain();

      oscillator.connect(gainNode);
      gainNode.connect(ctx.destination);

      const now = ctx.currentTime;

      switch (type) {
        case 'click':
          // Soft click - short, subtle
          oscillator.frequency.setValueAtTime(800, now);
          oscillator.frequency.exponentialRampToValueAtTime(400, now + 0.05);
          gainNode.gain.setValueAtTime(0.03, now);
          gainNode.gain.exponentialRampToValueAtTime(0.001, now + 0.05);
          oscillator.type = 'sine';
          oscillator.start(now);
          oscillator.stop(now + 0.05);
          break;

        case 'hover':
          // Very soft hover - barely audible
          oscillator.frequency.setValueAtTime(600, now);
          oscillator.frequency.exponentialRampToValueAtTime(800, now + 0.03);
          gainNode.gain.setValueAtTime(0.015, now);
          gainNode.gain.exponentialRampToValueAtTime(0.001, now + 0.03);
          oscillator.type = 'sine';
          oscillator.start(now);
          oscillator.stop(now + 0.03);
          break;

        case 'success':
          // Pleasant success tone - two notes
          oscillator.frequency.setValueAtTime(523.25, now); // C5
          oscillator.frequency.setValueAtTime(659.25, now + 0.1); // E5
          gainNode.gain.setValueAtTime(0.04, now);
          gainNode.gain.exponentialRampToValueAtTime(0.001, now + 0.2);
          oscillator.type = 'sine';
          oscillator.start(now);
          oscillator.stop(now + 0.2);
          break;

        case 'whoosh':
          // Soft whoosh - for transitions
          oscillator.frequency.setValueAtTime(200, now);
          oscillator.frequency.exponentialRampToValueAtTime(800, now + 0.15);
          gainNode.gain.setValueAtTime(0.02, now);
          gainNode.gain.exponentialRampToValueAtTime(0.001, now + 0.15);
          oscillator.type = 'sine';
          oscillator.start(now);
          oscillator.stop(now + 0.15);
          break;

        case 'pop':
          // Soft pop - for elements appearing
          oscillator.frequency.setValueAtTime(400, now);
          oscillator.frequency.exponentialRampToValueAtTime(600, now + 0.02);
          oscillator.frequency.exponentialRampToValueAtTime(300, now + 0.08);
          gainNode.gain.setValueAtTime(0.05, now);
          gainNode.gain.exponentialRampToValueAtTime(0.001, now + 0.08);
          oscillator.type = 'sine';
          oscillator.start(now);
          oscillator.stop(now + 0.08);
          break;
      }
    } catch (error) {
      // Silently fail if audio context is not available
      console.log('Audio not available');
    }
  }, []);

  const toggleSound = useCallback((enabled: boolean) => {
    isEnabled.current = enabled;
  }, []);

  return { playSound, toggleSound };
};

export default useSoftSound;
