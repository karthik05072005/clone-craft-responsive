import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect, useRef } from "react";

const SupportedBrandsSection = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [scrollDirection, setScrollDirection] = useState<'left' | 'right'>('left');
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>();

  // Real brand logos from the uploaded images
  const brands = [
    { 
      name: "H&M", 
      logo: "/WhatsApp Image 2025-07-25 at 12.16.13 AM copy.jpeg",
      category: "Fashion"
    },
    { 
      name: "Best Buy", 
      logo: "/WhatsApp Image 2025-07-25 at 12.16.14 AM copy.jpeg",
      category: "Electronics"
    },
    { 
      name: "Aritzia", 
      logo: "/WhatsApp Image 2025-07-25 at 12.16.12 AM (1) copy.jpeg",
      category: "Fashion"
    },
    { 
      name: "Amazon", 
      logo: "/WhatsApp Image 2025-07-25 at 12.16.12 AM (2) copy.jpeg",
      category: "Everything"
    },
    { 
      name: "Zara", 
      logo: "/WhatsApp Image 2025-07-25 at 12.16.13 AM (1) copy.jpeg",
      category: "Fashion"
    },
    // Additional popular brands for variety
    { 
      name: "Nike", 
      logo: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=200&h=100&fit=crop&crop=center",
      category: "Sports"
    },
    { 
      name: "Apple", 
      logo: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=200&h=100&fit=crop&crop=center",
      category: "Electronics"
    },
    { 
      name: "Adidas", 
      logo: "https://images.unsplash.com/photo-1556906781-9a412961c28c?w=200&h=100&fit=crop&crop=center",
      category: "Sports"
    },
    { 
      name: "Target", 
      logo: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=200&h=100&fit=crop&crop=center",
      category: "Retail"
    },
    { 
      name: "Walmart", 
      logo: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=200&h=100&fit=crop&crop=center",
      category: "Retail"
    },
    { 
      name: "IKEA", 
      logo: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=200&h=100&fit=crop&crop=center",
      category: "Home"
    },
    { 
      name: "Costco", 
      logo: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=200&h=100&fit=crop&crop=center",
      category: "Wholesale"
    }
  ];

  // Triple the brands array for seamless infinite scroll
  const extendedBrands = [...brands, ...brands, ...brands];

  // Auto-scroll functionality with smooth animation
  useEffect(() => {
    if (!isPlaying || !scrollContainerRef.current) return;

    const scroll = () => {
      if (scrollContainerRef.current) {
        const container = scrollContainerRef.current;
        const scrollSpeed = 0.5; // Slower, smoother scrolling
        const scrollAmount = scrollDirection === 'left' ? scrollSpeed : -scrollSpeed;
        
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
      const scrollAmount = 320; // Scroll by one card width
      const targetScroll = scrollContainerRef.current.scrollLeft + 
        (direction === 'left' ? scrollAmount : -scrollAmount);
      
      scrollContainerRef.current.scrollTo({
        left: targetScroll,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-background via-secondary/30 to-background overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-heading mb-6">
            Trusted by Returns from Top Brands
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
            We handle returns for products from hundreds of popular retailers and brands across Canada. 
            From fashion to electronics, we've got you covered.
          </p>
        </div>

        {/* Enhanced Scrolling Container */}
        <div className="relative group mb-16">
          {/* Enhanced Gradient Overlays */}
          <div className="absolute left-0 top-0 w-40 h-full bg-gradient-to-r from-background via-background/90 via-background/60 to-transparent z-20 pointer-events-none"></div>
          <div className="absolute right-0 top-0 w-40 h-full bg-gradient-to-l from-background via-background/90 via-background/60 to-transparent z-20 pointer-events-none"></div>
          
          {/* Floating Navigation Buttons */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-6 top-1/2 -translate-y-1/2 z-30 opacity-0 group-hover:opacity-100 transition-all duration-500 bg-background/95 backdrop-blur-md shadow-xl hover:shadow-2xl hover:scale-110 border-2"
            onClick={() => handleManualScroll('right')}
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>
          
          <Button
            variant="outline"
            size="icon"
            className="absolute right-6 top-1/2 -translate-y-1/2 z-30 opacity-0 group-hover:opacity-100 transition-all duration-500 bg-background/95 backdrop-blur-md shadow-xl hover:shadow-2xl hover:scale-110 border-2"
            onClick={() => handleManualScroll('left')}
          >
            <ChevronRight className="w-5 h-5" />
          </Button>
          
          {/* Scrolling Container */}
          <div 
            ref={scrollContainerRef}
            className="flex overflow-x-hidden scroll-smooth gap-6 py-4"
            style={{ 
              scrollbarWidth: 'none', 
              msOverflowStyle: 'none',
              WebkitOverflowScrolling: 'touch'
            }}
            onMouseEnter={() => setIsPlaying(false)}
            onMouseLeave={() => setIsPlaying(true)}
          >
            {extendedBrands.map((brand, index) => (
              <Card 
                key={`${brand.name}-${index}`}
                className="flex-shrink-0 p-8 bg-card/80 backdrop-blur-sm hover:bg-card transition-all duration-500 border-0 shadow-lg hover:shadow-2xl hover:scale-105 hover:-translate-y-2 min-w-[280px] group/card cursor-pointer"
              >
                <div className="flex flex-col items-center space-y-4">
                  {/* Logo Container */}
                  <div className="w-20 h-20 bg-background rounded-2xl flex items-center justify-center p-4 group-hover/card:bg-primary/10 transition-all duration-500 shadow-md group-hover/card:shadow-xl">
                    <img 
                      src={brand.logo} 
                      alt={`${brand.name} logo`}
                      className="w-full h-full object-contain transition-all duration-500 group-hover/card:scale-110"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const fallback = document.createElement('div');
                        fallback.className = 'w-full h-full bg-primary text-primary-foreground rounded-xl flex items-center justify-center text-2xl font-bold';
                        fallback.textContent = brand.name.charAt(0);
                        if (target.parentNode) {
                          target.parentNode.appendChild(fallback);
                        }
                      }}
                    />
                  </div>
                  
                  {/* Brand Info */}
                  <div className="text-center space-y-2">
                    <h3 className="font-bold text-xl text-foreground group-hover/card:text-primary transition-colors duration-300">
                      {brand.name}
                    </h3>
                    <div className="flex flex-col space-y-1">
                      <span className="text-sm text-muted-foreground font-medium">
                        {brand.category}
                      </span>
                      <span className="text-xs text-primary bg-primary/10 px-3 py-1 rounded-full">
                        Returns Supported
                      </span>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Enhanced Progress Indicators */}
        <div className="flex justify-center mb-12 space-x-3">
          {[...Array(7)].map((_, index) => (
            <div
              key={index}
              className={`h-2 rounded-full transition-all duration-500 ${
                index === 3 
                  ? 'bg-primary w-12 shadow-lg' 
                  : index === 2 || index === 4
                  ? 'bg-primary/60 w-8'
                  : 'bg-muted-foreground/30 w-2'
              }`}
            />
          ))}
        </div>

        {/* Enhanced Info Section */}
        <div className="text-center mb-16">
          <p className="text-muted-foreground mb-8 text-lg leading-relaxed max-w-2xl mx-auto">
            Don't see your brand? We work with most major retailers that accept returns. 
            Contact us to confirm compatibility with your specific retailer.
          </p>
          
          {/* Category Tags */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {[
              { name: "Fashion & Apparel", color: "bg-pink-100 text-pink-700 hover:bg-pink-200" },
              { name: "Electronics", color: "bg-blue-100 text-blue-700 hover:bg-blue-200" },
              { name: "Home & Garden", color: "bg-green-100 text-green-700 hover:bg-green-200" },
              { name: "Beauty & Health", color: "bg-purple-100 text-purple-700 hover:bg-purple-200" },
              { name: "Sports & Outdoors", color: "bg-orange-100 text-orange-700 hover:bg-orange-200" },
              { name: "Books & Media", color: "bg-indigo-100 text-indigo-700 hover:bg-indigo-200" },
              { name: "Toys & Games", color: "bg-yellow-100 text-yellow-700 hover:bg-yellow-200" },
              { name: "And Many More", color: "bg-gray-100 text-gray-700 hover:bg-gray-200" }
            ].map((category) => (
              <span 
                key={category.name}
                className={`px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 cursor-default hover:scale-105 hover:shadow-md ${category.color}`}
              >
                {category.name}
              </span>
            ))}
          </div>
        </div>

        {/* Enhanced Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          <div className="p-8 bg-gradient-to-br from-card to-card/80 rounded-2xl border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105">
            <div className="text-4xl font-bold text-primary mb-3 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              500+
            </div>
            <div className="text-muted-foreground font-medium">Supported Brands</div>
          </div>
          <div className="p-8 bg-gradient-to-br from-card to-card/80 rounded-2xl border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105">
            <div className="text-4xl font-bold text-primary mb-3 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              50,000+
            </div>
            <div className="text-muted-foreground font-medium">Returns Processed</div>
          </div>
          <div className="p-8 bg-gradient-to-br from-card to-card/80 rounded-2xl border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105">
            <div className="text-4xl font-bold text-primary mb-3 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              99.9%
            </div>
            <div className="text-muted-foreground font-medium">Success Rate</div>
          </div>
          <div className="p-8 bg-gradient-to-br from-card to-card/80 rounded-2xl border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105">
            <div className="text-4xl font-bold text-primary mb-3 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              24/7
            </div>
            <div className="text-muted-foreground font-medium">Customer Support</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportedBrandsSection;