import { cn } from "@/lib/utils";

interface SkeletonProps {
  className?: string;
}

// Base skeleton shimmer component
const SkeletonBase = ({ className }: SkeletonProps) => (
  <div
    className={cn(
      "relative overflow-hidden rounded-lg bg-muted/60",
      "before:absolute before:inset-0",
      "before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent",
      "before:animate-[shimmer_2s_infinite]",
      className
    )}
  />
);

// Text line skeleton
export const SkeletonText = ({ className }: SkeletonProps) => (
  <SkeletonBase className={cn("h-4 w-full", className)} />
);

// Title skeleton
export const SkeletonTitle = ({ className }: SkeletonProps) => (
  <SkeletonBase className={cn("h-8 w-3/4", className)} />
);

// Avatar/Circle skeleton
export const SkeletonAvatar = ({ className }: SkeletonProps) => (
  <SkeletonBase className={cn("h-12 w-12 rounded-full", className)} />
);

// Image skeleton
export const SkeletonImage = ({ className }: SkeletonProps) => (
  <SkeletonBase className={cn("aspect-video w-full", className)} />
);

// Button skeleton
export const SkeletonButton = ({ className }: SkeletonProps) => (
  <SkeletonBase className={cn("h-10 w-32 rounded-md", className)} />
);

// Card skeleton - mimics service/testimonial cards
export const SkeletonCard = ({ className }: SkeletonProps) => (
  <div className={cn("rounded-xl border bg-card p-6 space-y-4", className)}>
    <SkeletonImage className="rounded-lg" />
    <div className="space-y-3">
      <SkeletonBase className="h-6 w-2/3" />
      <SkeletonText className="w-full" />
      <SkeletonText className="w-5/6" />
      <SkeletonText className="w-4/6" />
    </div>
    <SkeletonButton />
  </div>
);

// Team/Person card skeleton
export const SkeletonPersonCard = ({ className }: SkeletonProps) => (
  <div className={cn("rounded-xl border bg-card p-6 text-center space-y-4", className)}>
    <div className="flex justify-center">
      <SkeletonAvatar className="h-24 w-24" />
    </div>
    <div className="space-y-2">
      <SkeletonBase className="h-5 w-2/3 mx-auto" />
      <SkeletonBase className="h-4 w-1/2 mx-auto" />
    </div>
    <div className="space-y-2">
      <SkeletonText className="w-full" />
      <SkeletonText className="w-5/6 mx-auto" />
      <SkeletonText className="w-4/6 mx-auto" />
    </div>
  </div>
);

// Hero section skeleton
export const SkeletonHero = ({ className }: SkeletonProps) => (
  <div className={cn("min-h-[70vh] bg-muted/30 flex items-center", className)}>
    <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
      <div className="space-y-6">
        <SkeletonBase className="h-12 w-4/5" />
        <SkeletonBase className="h-8 w-2/3" />
        <div className="space-y-3">
          <SkeletonText className="w-full" />
          <SkeletonText className="w-5/6" />
          <SkeletonText className="w-4/6" />
        </div>
        <SkeletonButton className="w-40" />
      </div>
      <SkeletonImage className="rounded-2xl h-[400px]" />
    </div>
  </div>
);

// Section header skeleton
export const SkeletonSectionHeader = ({ className }: SkeletonProps) => (
  <div className={cn("text-center space-y-4 mb-12", className)}>
    <SkeletonBase className="h-10 w-1/3 mx-auto" />
    <SkeletonBase className="h-5 w-2/3 mx-auto" />
  </div>
);

// Grid of cards skeleton
export const SkeletonCardGrid = ({ 
  count = 3, 
  columns = 3,
  className 
}: { count?: number; columns?: number } & SkeletonProps) => (
  <div className={cn(
    "grid gap-8",
    columns === 2 && "md:grid-cols-2",
    columns === 3 && "md:grid-cols-2 lg:grid-cols-3",
    columns === 4 && "md:grid-cols-2 lg:grid-cols-4",
    className
  )}>
    {Array.from({ length: count }).map((_, i) => (
      <SkeletonCard key={i} />
    ))}
  </div>
);

// Team grid skeleton
export const SkeletonTeamGrid = ({ 
  count = 6,
  className 
}: { count?: number } & SkeletonProps) => (
  <div className={cn("grid md:grid-cols-2 lg:grid-cols-3 gap-8", className)}>
    {Array.from({ length: count }).map((_, i) => (
      <SkeletonPersonCard key={i} />
    ))}
  </div>
);

// Stats/Numbers skeleton
export const SkeletonStats = ({ className }: SkeletonProps) => (
  <div className={cn("grid grid-cols-2 md:grid-cols-4 gap-8", className)}>
    {Array.from({ length: 4 }).map((_, i) => (
      <div key={i} className="text-center space-y-2">
        <SkeletonBase className="h-10 w-24 mx-auto" />
        <SkeletonBase className="h-4 w-20 mx-auto" />
      </div>
    ))}
  </div>
);

// Full page skeleton
export const SkeletonPage = ({ className }: SkeletonProps) => (
  <div className={cn("min-h-screen", className)}>
    <SkeletonHero />
    <div className="container mx-auto px-6 py-16 space-y-16">
      <div>
        <SkeletonSectionHeader />
        <SkeletonCardGrid count={3} />
      </div>
      <div>
        <SkeletonSectionHeader />
        <SkeletonStats />
      </div>
    </div>
  </div>
);

// Export all as named exports and a default object
const ContentSkeleton = {
  Base: SkeletonBase,
  Text: SkeletonText,
  Title: SkeletonTitle,
  Avatar: SkeletonAvatar,
  Image: SkeletonImage,
  Button: SkeletonButton,
  Card: SkeletonCard,
  PersonCard: SkeletonPersonCard,
  Hero: SkeletonHero,
  SectionHeader: SkeletonSectionHeader,
  CardGrid: SkeletonCardGrid,
  TeamGrid: SkeletonTeamGrid,
  Stats: SkeletonStats,
  Page: SkeletonPage,
};

export default ContentSkeleton;
