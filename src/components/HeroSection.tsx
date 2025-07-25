import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="pt-20 pb-16 bg-gradient-to-br from-background to-secondary">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Content */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-heading mb-6 leading-tight">
              Hassle-Free Parcel Returns, 
              <span className="block text-primary">From Pickup to Drop-Off</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
              Baccksee is your complete pickup and return service that handles every step 
              of the process. No more packing, labeling, or trips to the post office.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                onClick={() => scrollToSection('book-pickup')}
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-medium rounded-lg"
              >
                Book a Pickup
              </Button>
              <Button 
                onClick={() => scrollToSection('how-it-works')}
                variant="outline"
                size="lg"
                className="px-8 py-6 text-lg font-medium border-heading text-heading hover:bg-heading hover:text-heading-foreground rounded-lg"
              >
                Learn How It Works
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="flex-1 max-w-lg lg:max-w-none">
            <video 
              src="/WhatsApp Video 2025-07-25 at 5.52.50 PM.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-auto rounded-2xl shadow-2xl"
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;