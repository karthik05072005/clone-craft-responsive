import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import { useState, useEffect, useRef } from "react";

const SupportedBrandsSection = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [scrollDirection, setScrollDirection] = useState<'left' | 'right'>('left');
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>();

  // Popular brands that typically have return policies
  const brands = [
    { name: "Amazon", logo: "https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?w=120&h=60&fit=crop&crop=center" },
    { name: "Nike", logo: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=120&h=60&fit=crop&crop=center" },
    { name: "Adidas", logo: "https://images.unsplash.com/photo-1556906781-9a412961c28c?w=120&h=60&fit=crop&crop=center" },
    { name: "Zara", logo: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=120&h=60&fit=crop&crop=center" },
    { name: "H&M", logo: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=120&h=60&fit=crop&crop=center" },
    { name: "Best Buy", logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=120&h=60&fit=crop&crop=center" },
    { name: "Target", logo: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=120&h=60&fit=crop&crop=center" },
    { name: "Walmart", logo: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=120&h=60&fit=crop&crop=center" },
    { name: "Apple", logo: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=120&h=60&fit=crop&crop=center" },
    { name: "Samsung", logo: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=120&h=60&fit=crop&crop=center" },
    { name: "IKEA", logo: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=120&h=60&fit=crop&crop=center" },
    { name: "Costco", logo: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=120&h=60&fit=crop&crop=center" },
    { name: "Home Depot", logo: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=120&h=60&fit=crop&crop=center" },
    { name: "Lowe's", logo: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=120&h=60&fit=crop&crop=center" },
    { name: "Sephora", logo: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=120&h=60&fit=crop&crop=center" },
    { name: "Ulta", logo: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=120&h=60&fit=crop&crop=center" },
  ];

  // Triple the brands array for seamless infinite scroll
  const extendedBrands = [...brands, ...brands, ...brands];

  // Auto-scroll functionality
  useEffect(() => {
    if (!isPlaying || !scrollContainerRef.current) return;

    const scroll = () => {
      if (scrollContainerRef.current) {
        const container = scrollContainerRef.current;
        const scrollAmount = scrollDirection === 'left' ? 1 : -1;
        
        container.scrollLeft += scrollAmount;
        
        // Reset scroll position for infinite effect
        const maxScroll = container.scrollWidth / 3;
        if (scrollDirection === 'left' && container.scrollLeft >= maxScroll) {
          container.scrollLeft = 0;
        } else if (scrollDirection === 'right' && container.scrollLeft <= 0) {
          container.scrollLeft = maxScroll;
        }
      }
      
      animationRef.current = requestAnimationFrame(scroll);
    };

    animationRef.current = requestAnimationFrame(scroll);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isPlaying, scrollDirection]);

  const handleManualScroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300;
      const targetScroll = scrollContainerRef.current.scrollLeft + 
        (direction === 'left' ? scrollAmount : -scrollAmount);
      
      scrollContainerRef.current.scrollTo({
        left: targetScroll,
        behavior: 'smooth'
      });
    }
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const toggleDirection = () => {
    setScrollDirection(prev => prev === 'left' ? 'right' : 'left');
  };

  return (
    <section className="py-16 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-heading mb-4">
            Trusted by Returns from Top Brands
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-6">
            We handle returns for products from hundreds of popular retailers and brands across Canada
          </p>
          
          {/* Control buttons */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <Button
              variant="outline"
              size="sm"
              onClick={() => handleManualScroll('left')}
              className="flex items-center gap-2"
            >
              <ChevronLeft className="w-4 h-4" />
              Scroll Left
            </Button>
            
            <Button
              variant="outline"
              size="sm"
              onClick={togglePlayPause}
              className="flex items-center gap-2"
            >
              {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
              {isPlaying ? 'Pause' : 'Play'}
            </Button>
            
            <Button
              variant="outline"
              size="sm"
              onClick={toggleDirection}
              className="flex items-center gap-2"
            >
              {scrollDirection === 'left' ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
              {scrollDirection === 'left' ? 'Reverse' : 'Forward'}
            </Button>
            
            <Button
              variant="outline"
              size="sm"
              onClick={() => handleManualScroll('right')}
              className="flex items-center gap-2"
            >
              Scroll Right
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Enhanced scrolling brands container */}
        <div className="relative group">
          {/* Gradient overlays for smooth fade effect */}
          <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-background via-background/80 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-background via-background/80 to-transparent z-10 pointer-events-none"></div>
          
          {/* Manual scroll buttons (appear on hover) */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-background/90 backdrop-blur-sm"
            onClick={() => handleManualScroll('left')}
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>
          
          <Button
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-background/90 backdrop-blur-sm"
            onClick={() => handleManualScroll('right')}
          >
            <ChevronRight className="w-4 h-4" />
          </Button>
          
          {/* Scrolling container */}
          <div 
            ref={scrollContainerRef}
            className="flex overflow-x-hidden scroll-smooth"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            onMouseEnter={() => setIsPlaying(false)}
            onMouseLeave={() => setIsPlaying(true)}
          >
            <style jsx>{`
              div::-webkit-scrollbar {
                display: none;
              }
            `}</style>
            
            {extendedBrands.map((brand, index) => (
              <Card 
                key={`${brand.name}-${index}`}
                className="flex-shrink-0 mx-3 p-6 bg-card hover:bg-card/80 transition-all duration-300 border-0 shadow-md hover:shadow-xl hover:scale-105 min-w-[220px] group/card"
              >
                <div className="flex items-center justify-center h-20">
                  <div className="flex items-center space-x-4">
                    <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center group-hover/card:bg-primary/20 transition-colors duration-300">
                      <img 
                        src={brand.logo} 
                        alt={`${brand.name} logo`}
                        className="w-10 h-10 object-contain rounded-lg transition-transform duration-300 group-hover/card:scale-110"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          const fallback = document.createElement('div');
                          fallback.className = 'w-10 h-10 bg-primary text-primary-foreground rounded-lg flex items-center justify-center text-lg font-bold';
                          fallback.textContent = brand.name.charAt(0);
                          target.parentNode?.appendChild(fallback);
                        }}
                      />
                    </div>
                    <div className="flex flex-col">
                      <span className="font-semibold text-foreground text-lg group-hover/card:text-primary transition-colors duration-300">
                        {brand.name}
                      </span>
                      <span className="text-sm text-muted-foreground">
                        Returns Supported
                      </span>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Scroll indicators */}
        <div className="flex justify-center mt-8 space-x-2">
          {[...Array(5)].map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === 2 ? 'bg-primary w-8' : 'bg-muted-foreground/30'
              }`}
            />
          ))}
        </div>

        {/* Additional info */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6 text-lg">
            Don't see your brand? We work with most major retailers that accept returns.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Electronics", "Fashion", "Home & Garden", 
              "Beauty", "Sports", "Books", "Toys", "And More"
            ].map((category) => (
              <span 
                key={category}
                className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium hover:bg-primary/20 transition-colors duration-300 cursor-default"
              >
                {category}
              </span>
            ))}
          </div>
        </div>

        {/* Stats section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 text-center">
          <div className="p-6 bg-card rounded-xl border-0 shadow-lg">
            <div className="text-3xl font-bold text-primary mb-2">500+</div>
            <div className="text-muted-foreground">Supported Brands</div>
          </div>
          <div className="p-6 bg-card rounded-xl border-0 shadow-lg">
            <div className="text-3xl font-bold text-primary mb-2">50,000+</div>
            <div className="text-muted-foreground">Returns Processed</div>
          </div>
          <div className="p-6 bg-card rounded-xl border-0 shadow-lg">
            <div className="text-3xl font-bold text-primary mb-2">99.9%</div>
            <div className="text-muted-foreground">Success Rate</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportedBrandsSection;