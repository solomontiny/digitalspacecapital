import { Card } from "@/components/ui/card";

interface GalleryImage {
  src: string;
  alt: string;
  title: string;
  description: string;
}

interface ProjectGalleryProps {
  images: GalleryImage[];
  title?: string;
  subtitle?: string;
}

const ProjectGallery = ({ images, title = "Project Gallery", subtitle = "Showcasing our completed projects and success stories" }: ProjectGalleryProps) => {
  return (
    <Card>
      <div className="p-8 space-y-6">
        <div className="text-center space-y-3">
          <h2 className="text-3xl font-bold text-foreground">{title}</h2>
          <p className="text-muted-foreground">{subtitle}</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg border border-border hover:shadow-lg transition-all duration-300">
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <h3 className="text-lg font-semibold text-foreground mb-1">{image.title}</h3>
                <p className="text-sm text-muted-foreground">{image.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
};

export default ProjectGallery;
