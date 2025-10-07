import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import newsVideo from "@/assets/news-video.mp4";
import newsVideo2 from "@/assets/news-video-2.mp4";

const NewsSection = () => {
  const newsItems = [
    {
      title: "Exciting Times! 💃🏽🤗 The Emison Real Estate and DigiKolo teams were thrilled to participate in the 75th FIABCI World Real Estate Congress in Lagos, Nigeria (June 9-13, 2025)! We were honored to be among notable figures, including President Bola Ahmed Tinubu's representative, 2025 President-elect of NAR Kevin Brown, Prof. Yemi Osinbajo, SAN; GCON, Gov. Babajide Sanwoolu and FIABCI World President Ramon Rierra Toroba.",
      category: "Marketing",
      date: "January 16, 2025",
      video: newsVideo,
    },
    {
      title: "Honored to welcome His Royal Highness, Alhaji Yahaya Abubakar, Etsu Nupe of Nupe Kingdom and Chairman, Board of Directors, Digital Space Capital! 🙏🏽👑",
      category: "AVA Research Daily Commentary",
      date: "September 6, 2024",
      video: newsVideo2,
    },
    {
      title: "FGN Local bond & T-bills/OMO market",
      category: "AVA Research Daily Commentary", 
      date: "August 9, 2024",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=650&h=572&fit=crop",
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary mb-4">News</h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {newsItems.map((item, index) => (
            <Card key={index} className="group cursor-pointer overflow-hidden transition-smooth hover:shadow-lg">
              <div className="aspect-[650/572] overflow-hidden">
                {item.video ? (
                  <video 
                    src={item.video} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
                    autoPlay
                    loop
                    muted
                    playsInline
                  />
                ) : (
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
                  />
                )}
              </div>
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-foreground mb-3 line-clamp-3 group-hover:text-primary transition-smooth">
                  {item.title}
                </h3>
                <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                  <span className="text-primary font-medium">{item.category}</span>
                  <span>{item.date}</span>
                </div>
                <Button variant="outline" size="sm">
                  Read More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            Read More →
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;