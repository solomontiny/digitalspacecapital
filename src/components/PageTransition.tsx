import { useEffect, useState, useRef } from "react";
import { useLocation } from "react-router-dom";
import BrandedPageLoader from "./BrandedPageLoader";
import ProgressBar from "./ProgressBar";

interface PageTransitionProps {
  children: React.ReactNode;
}

const PageTransition = ({ children }: PageTransitionProps) => {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const isFirstRender = useRef(true);
  const previousPath = useRef(location.pathname);

  useEffect(() => {
    // Skip loading animation on first render
    if (isFirstRender.current) {
      isFirstRender.current = false;
      previousPath.current = location.pathname;
      return;
    }

    // Only show loader when navigating to a different page
    if (previousPath.current !== location.pathname) {
      setIsLoading(true);
      setIsVisible(false);

      // Scroll to top
      window.scrollTo({ top: 0, behavior: "instant" });

      // Hide loader and show content after a brief delay
      const loaderTimer = setTimeout(() => {
        setIsLoading(false);
      }, 600);

      const contentTimer = setTimeout(() => {
        setIsVisible(true);
      }, 400);

      previousPath.current = location.pathname;

      return () => {
        clearTimeout(loaderTimer);
        clearTimeout(contentTimer);
      };
    }
  }, [location.pathname]);

  return (
    <>
      {/* Progress Bar at top */}
      <ProgressBar />

      {/* Branded Page Loader */}
      <BrandedPageLoader isVisible={isLoading} />

      {/* Page Content */}
      <div
        className={`transition-all duration-500 ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        {children}
      </div>
    </>
  );
};

export default PageTransition;
