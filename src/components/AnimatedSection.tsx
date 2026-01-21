import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { cn } from "@/lib/utils";

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  animation?: "fade-up" | "fade-left" | "fade-right" | "scale" | "fade" | "slide-rotate" | "zoom-blur" | "float-up";
  delay?: number;
  stagger?: boolean;
}

const AnimatedSection = ({
  children,
  className,
  animation = "fade-up",
  delay = 0,
  stagger = false,
}: AnimatedSectionProps) => {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });

  const animations = {
    "fade-up": "translate-y-16 opacity-0",
    "fade-left": "-translate-x-16 opacity-0",
    "fade-right": "translate-x-16 opacity-0",
    "scale": "scale-90 opacity-0",
    "fade": "opacity-0",
    "slide-rotate": "translate-y-20 rotate-3 opacity-0",
    "zoom-blur": "scale-75 opacity-0 blur-sm",
    "float-up": "translate-y-24 opacity-0 scale-95",
  };

  const visibleState = "translate-y-0 translate-x-0 scale-100 opacity-100 rotate-0 blur-0";

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)]",
        isVisible ? visibleState : animations[animation],
        stagger && "[&>*]:transition-all [&>*]:duration-700",
        className
      )}
      style={{ 
        transitionDelay: `${delay}ms`,
        willChange: "transform, opacity",
      }}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;
