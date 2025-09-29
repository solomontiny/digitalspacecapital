const AppDownload = () => {
  return (
    <section className="py-16 bg-muted">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-primary mb-8">
          Download Our Mobile App
        </h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          Manage your investments on the go with our mobile application available on both iOS and Android platforms.
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
    </section>
  );
};

export default AppDownload;