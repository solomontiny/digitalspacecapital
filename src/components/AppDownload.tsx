import digikoloBanner from "@/assets/digikolo-banner.jpg";
import digikoloPromo from "@/assets/digikolo-promo.mp4";

const AppDownload = () => {
  return (
    <section className="py-16 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary mb-8">
            Download Our Digikolo Mobile app
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Experience seamless fintech savings and investment management with Digikolo - your trusted financial companion.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="https://play.google.com/store" 
              target="_blank" 
              rel="noopener noreferrer"
              className="transition-smooth hover:scale-105"
            >
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" 
                alt="Get it on Google Play"
                className="h-16"
              />
            </a>
            <a 
              href="https://apps.apple.com/app" 
              target="_blank" 
              rel="noopener noreferrer"
              className="transition-smooth hover:scale-105"
            >
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" 
                alt="Download on the App Store"
                className="h-16"
              />
            </a>
          </div>
        </div>

        {/* Digikolo Video Advert Section */}
        <div className="mt-12 max-w-3xl mx-auto">
          <div className="rounded-xl overflow-hidden shadow-xl bg-card">
            <video 
              src={digikoloPromo}
              controls
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-auto"
              style={{ maxHeight: '500px', objectFit: 'cover' }}
            >
              Your browser does not support the video tag.
            </video>
          </div>
          <p className="text-center text-sm text-muted-foreground mt-4">
            Digikolo - Your trusted fintech savings partner
          </p>
        </div>
      </div>
    </section>
  );
};

export default AppDownload;