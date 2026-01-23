import { useEffect, useState, useRef } from "react";
import { useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

const ProgressBar = () => {
  const location = useLocation();
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const isFirstRender = useRef(true);
  const previousPath = useRef(location.pathname);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      previousPath.current = location.pathname;
      return;
    }

    if (previousPath.current !== location.pathname) {
      // Start progress
      setIsVisible(true);
      setProgress(0);

      // Animate progress
      const timer1 = setTimeout(() => setProgress(30), 50);
      const timer2 = setTimeout(() => setProgress(60), 200);
      const timer3 = setTimeout(() => setProgress(80), 400);
      const timer4 = setTimeout(() => setProgress(100), 600);
      
      // Hide after complete
      const hideTimer = setTimeout(() => {
        setIsVisible(false);
        setProgress(0);
      }, 800);

      previousPath.current = location.pathname;

      return () => {
        clearTimeout(timer1);
        clearTimeout(timer2);
        clearTimeout(timer3);
        clearTimeout(timer4);
        clearTimeout(hideTimer);
      };
    }
  }, [location.pathname]);

  return (
    <div
      className={cn(
        "fixed top-0 left-0 right-0 z-[200] h-1",
        "transition-opacity duration-300",
        isVisible ? "opacity-100" : "opacity-0"
      )}
    >
      {/* Background track */}
      <div className="absolute inset-0 bg-primary/10" />
      
      {/* Progress fill */}
      <div
        className="h-full bg-gradient-to-r from-primary via-primary to-primary/80 relative overflow-hidden"
        style={{
          width: `${progress}%`,
          transition: "width 0.3s cubic-bezier(0.22, 1, 0.36, 1)",
        }}
      >
        {/* Shimmer effect */}
        <div 
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
          style={{
            animation: "shimmerProgress 1s infinite",
          }}
        />
      </div>

      {/* Glow effect at the end */}
      <div
        className="absolute top-0 h-full w-20 bg-gradient-to-r from-transparent to-primary/50 blur-sm"
        style={{
          left: `calc(${progress}% - 20px)`,
          transition: "left 0.3s cubic-bezier(0.22, 1, 0.36, 1)",
          opacity: isVisible ? 1 : 0,
        }}
      />

      <style>{`
        @keyframes shimmerProgress {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(200%); }
        }
      `}</style>
    </div>
  );
};

export default ProgressBar;
