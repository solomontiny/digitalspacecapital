import digikoloBanner from "@/assets/digikolo-banner.jpg";

const AppDownload = () => {
  return (
    <section className="py-16 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary mb-8">
            Download digikolo app today
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

        {/* Digikolo Banner Section */}
        <div className="mt-12 max-w-4xl mx-auto">
          <div className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
            <img 
              src={digikoloBanner} 
              alt="Digikolo Fintech Savings App - Service, Support, Experience, and Management"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppDownload;