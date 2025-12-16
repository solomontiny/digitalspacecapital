import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { X, Cookie, Shield, BarChart3, Megaphone } from "lucide-react";

interface CookiePreferences {
  essential: boolean;
  analytics: boolean;
  marketing: boolean;
}

const CookiePreferenceCenter = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    essential: true,
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    // Load saved preferences
    const saved = localStorage.getItem("dsc-cookie-preferences");
    if (saved) {
      try {
        setPreferences(JSON.parse(saved));
      } catch (e) {
        console.error("Failed to parse cookie preferences");
      }
    }

    // Listen for open event
    const handleOpen = () => setIsOpen(true);
    window.addEventListener("open-cookie-preferences", handleOpen);
    return () => window.removeEventListener("open-cookie-preferences", handleOpen);
  }, []);

  const handleSave = () => {
    localStorage.setItem("dsc-cookie-preferences", JSON.stringify(preferences));
    localStorage.setItem("dsc-cookie-consent", "customized");
    setIsOpen(false);
    window.dispatchEvent(new Event("cookie-preferences-saved"));
  };

  const handleAcceptAll = () => {
    const allAccepted = { essential: true, analytics: true, marketing: true };
    setPreferences(allAccepted);
    localStorage.setItem("dsc-cookie-preferences", JSON.stringify(allAccepted));
    localStorage.setItem("dsc-cookie-consent", "accepted");
    setIsOpen(false);
    window.dispatchEvent(new Event("cookie-preferences-saved"));
  };

  const handleRejectAll = () => {
    const essentialOnly = { essential: true, analytics: false, marketing: false };
    setPreferences(essentialOnly);
    localStorage.setItem("dsc-cookie-preferences", JSON.stringify(essentialOnly));
    localStorage.setItem("dsc-cookie-consent", "declined");
    setIsOpen(false);
    window.dispatchEvent(new Event("cookie-preferences-saved"));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in">
      <div className="bg-card rounded-2xl shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto animate-in zoom-in-95">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Cookie className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-foreground">Cookie Preferences</h2>
              <p className="text-sm text-muted-foreground">Manage your cookie settings</p>
            </div>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(false)}
            className="text-muted-foreground hover:text-foreground"
          >
            <X className="w-5 h-5" />
          </Button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          <p className="text-sm text-muted-foreground">
            We use cookies to enhance your browsing experience, analyze site traffic, and personalize content. 
            Choose which cookies you want to allow below.
          </p>

          {/* Essential Cookies */}
          <div className="bg-muted/30 rounded-xl p-4 border">
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-primary/10 rounded-lg mt-0.5">
                  <Shield className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Essential Cookies</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    Required for the website to function properly. These cannot be disabled as they are 
                    necessary for basic features like page navigation and secure area access.
                  </p>
                </div>
              </div>
              <Switch checked={true} disabled className="mt-1" />
            </div>
          </div>

          {/* Analytics Cookies */}
          <div className="bg-muted/30 rounded-xl p-4 border">
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-blue-500/10 rounded-lg mt-0.5">
                  <BarChart3 className="w-5 h-5 text-blue-500" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Analytics Cookies</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    Help us understand how visitors interact with our website by collecting and reporting 
                    information anonymously. This helps us improve our services.
                  </p>
                </div>
              </div>
              <Switch
                checked={preferences.analytics}
                onCheckedChange={(checked) => setPreferences({ ...preferences, analytics: checked })}
                className="mt-1"
              />
            </div>
          </div>

          {/* Marketing Cookies */}
          <div className="bg-muted/30 rounded-xl p-4 border">
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-orange-500/10 rounded-lg mt-0.5">
                  <Megaphone className="w-5 h-5 text-orange-500" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Marketing Cookies</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    Used to track visitors across websites to display relevant and engaging advertisements. 
                    They are usually placed by advertising networks with our permission.
                  </p>
                </div>
              </div>
              <Switch
                checked={preferences.marketing}
                onCheckedChange={(checked) => setPreferences({ ...preferences, marketing: checked })}
                className="mt-1"
              />
            </div>
          </div>

          {/* Privacy Policy Link */}
          <p className="text-sm text-muted-foreground">
            For more information about how we use cookies, please read our{" "}
            <a href="/privacy-policy" className="text-primary hover:underline">
              Privacy Policy
            </a>
            .
          </p>
        </div>

        {/* Footer */}
        <div className="p-6 border-t bg-muted/20 flex flex-col sm:flex-row gap-3">
          <Button variant="outline" onClick={handleRejectAll} className="flex-1">
            Reject All
          </Button>
          <Button variant="outline" onClick={handleSave} className="flex-1">
            Save Preferences
          </Button>
          <Button onClick={handleAcceptAll} className="flex-1">
            Accept All
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CookiePreferenceCenter;
