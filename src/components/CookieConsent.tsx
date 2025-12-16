import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { X, Settings } from "lucide-react";

const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("dsc-cookie-consent");
    if (!consent) {
      setShowBanner(true);
    }

    // Listen for manage cookies event
    const handleManageCookies = () => setShowBanner(true);
    window.addEventListener("manage-cookies", handleManageCookies);
    
    // Listen for preferences saved
    const handleSaved = () => setShowBanner(false);
    window.addEventListener("cookie-preferences-saved", handleSaved);
    
    return () => {
      window.removeEventListener("manage-cookies", handleManageCookies);
      window.removeEventListener("cookie-preferences-saved", handleSaved);
    };
  }, []);

  const handleAccept = () => {
    const allAccepted = { essential: true, analytics: true, marketing: true };
    localStorage.setItem("dsc-cookie-preferences", JSON.stringify(allAccepted));
    localStorage.setItem("dsc-cookie-consent", "accepted");
    setShowBanner(false);
  };

  const handleDecline = () => {
    const essentialOnly = { essential: true, analytics: false, marketing: false };
    localStorage.setItem("dsc-cookie-preferences", JSON.stringify(essentialOnly));
    localStorage.setItem("dsc-cookie-consent", "declined");
    setShowBanner(false);
  };

  const openPreferences = () => {
    window.dispatchEvent(new Event("open-cookie-preferences"));
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-primary text-primary-foreground shadow-lg animate-in slide-in-from-bottom-5">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex-1">
            <h3 className="font-semibold text-lg mb-2">Cookie Policy</h3>
            <p className="text-sm text-primary-foreground/90">
              Digital Space Capital uses cookies to enhance your browsing experience, analyze site traffic, and personalize content. 
              By clicking "Accept All", you consent to our use of cookies in accordance with our privacy policy.
            </p>
          </div>
          
          <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
            <Button
              onClick={openPreferences}
              variant="ghost"
              size="sm"
              className="flex-1 sm:flex-none text-primary-foreground hover:bg-primary-foreground/20 gap-1"
            >
              <Settings className="h-4 w-4" />
              Preferences
            </Button>
            <Button
              onClick={handleDecline}
              variant="outline"
              size="sm"
              className="flex-1 sm:flex-none border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
            >
              Decline
            </Button>
            <Button
              onClick={handleAccept}
              size="sm"
              className="flex-1 sm:flex-none bg-primary-foreground text-primary hover:bg-primary-foreground/90"
            >
              Accept All
            </Button>
            <Button
              onClick={handleDecline}
              variant="ghost"
              size="icon"
              className="text-primary-foreground hover:bg-primary-foreground/20"
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
