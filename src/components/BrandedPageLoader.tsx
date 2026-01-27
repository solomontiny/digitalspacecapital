import { cn } from "@/lib/utils";
import newLogo from "@/assets/dsc-logo-new.png";

interface BrandedPageLoaderProps {
  isVisible: boolean;
}

const BrandedPageLoader = ({ isVisible }: BrandedPageLoaderProps) => {
  return (
    <div
      className={cn(
        "fixed inset-0 z-[100] flex items-center justify-center",
        "bg-background/95 backdrop-blur-md",
        "transition-all duration-500 ease-out",
        isVisible
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      )}
    >
      <div className="flex flex-col items-center gap-6">
        {/* Branded Logo with Animation */}
        <div className="relative">
          {/* Outer glow ring */}
          <div className="absolute inset-0 -m-4 rounded-full bg-primary/20 blur-xl animate-soft-pulse" />
          
          {/* Spinning ring around logo */}
          <div className="absolute inset-0 -m-6">
            <svg
              className="w-full h-full animate-spin"
              style={{ animationDuration: '3s' }}
              viewBox="0 0 100 100"
            >
              <circle
                cx="50"
                cy="50"
                r="45"
                fill="none"
                stroke="hsl(var(--primary) / 0.2)"
                strokeWidth="2"
              />
              <circle
                cx="50"
                cy="50"
                r="45"
                fill="none"
                stroke="hsl(var(--primary))"
                strokeWidth="2"
                strokeLinecap="round"
                strokeDasharray="70 200"
              />
            </svg>
          </div>
          
          {/* Logo */}
          <div className="relative w-20 h-20 flex items-center justify-center animate-soft-pulse">
            <img
              src={newLogo}
              alt="Loading..."
              className="w-16 h-16 object-contain"
            />
          </div>
        </div>
        
        {/* Loading text with shimmer effect */}
        <div className="flex flex-col items-center gap-2">
          <p className="text-sm font-medium text-foreground/80 animate-pulse">
            Loading
          </p>
          
          {/* Animated dots */}
          <div className="flex gap-1.5">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="w-2 h-2 rounded-full bg-primary"
                style={{
                  animation: 'bounceLoader 1.4s ease-in-out infinite',
                  animationDelay: `${i * 0.16}s`,
                }}
              />
            ))}
          </div>
        </div>
      </div>
      
      {/* Inline keyframes for the dots */}
      <style>{`
        @keyframes bounceLoader {
          0%, 80%, 100% {
            transform: scale(0.6);
            opacity: 0.5;
          }
          40% {
            transform: scale(1);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default BrandedPageLoader;
