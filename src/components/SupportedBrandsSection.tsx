import { Card } from "@/components/ui/card";

const SupportedBrandsSection = () => {
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

  // Duplicate the brands array for seamless infinite scroll
  const duplicatedBrands = [...brands, ...brands];

  return (
    <section className="py-16 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-heading mb-4">
            Trusted by Returns from Top Brands
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We handle returns for products from hundreds of popular retailers and brands across Canada
          </p>
        </div>

        {/* Scrolling brands container */}
        <div className="relative">
          {/* Gradient overlays for smooth fade effect */}
          <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-background to-transparent z-10"></div>
          <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-background to-transparent z-10"></div>
          
          {/* Scrolling animation container */}
          <div className="flex animate-scroll-brands">
            {duplicatedBrands.map((brand, index) => (
              <Card 
                key={`${brand.name}-${index}`}
                className="flex-shrink-0 mx-4 p-6 bg-card hover:bg-card/80 transition-colors duration-300 border-0 shadow-md hover:shadow-lg min-w-[200px]"
              >
                <div className="flex items-center justify-center h-16">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <img 
                        src={brand.logo} 
                        alt={`${brand.name} logo`}
                        className="w-8 h-8 object-contain rounded"
                        onError={(e) => {
                          // Fallback to a colored div with brand initial if image fails
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          const fallback = document.createElement('div');
                          fallback.className = 'w-8 h-8 bg-primary text-primary-foreground rounded flex items-center justify-center text-sm font-bold';
                          fallback.textContent = brand.name.charAt(0);
                          target.parentNode?.appendChild(fallback);
                        }}
                      />
                    </div>
                    <span className="font-semibold text-foreground text-lg">
                      {brand.name}
                    </span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Additional info */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Don't see your brand? We work with most major retailers that accept returns.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
              Electronics
            </span>
            <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
              Fashion
            </span>
            <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
              Home & Garden
            </span>
            <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
              Beauty
            </span>
            <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
              Sports
            </span>
            <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
              And More
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportedBrandsSection;