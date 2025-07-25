import { Shirt, Laptop, Package2, Package } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ServicesSection = () => {
  const services = [
    {
      icon: Shirt,
      title: "Clothing Returns",
      description: "No need to find the right box or packaging"
    },
    {
      icon: Laptop,
      title: "Electronics",
      description: "Safe handling of delicate items"
    },
    {
      icon: Package2,
      title: "Large Items",
      description: "No hassle with awkward parcels"
    },
    {
      icon: Package,
      title: "Multiple Returns",
      description: "One pickup for multiple packages"
    }
  ];

  return (
    <section id="about" className="py-16 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            We Make Returns Effortless
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Whether you're returning clothes, electronics, or household items, we make returns 
            effortless — no more trips to the post office or worrying about packing.
          </p>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Before we pick it up, make sure your item is eligible for return. We'll help with 
            packing, labeling, and dropping it off — but the return shipping cost must be 
            covered by you or the brand.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center pb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-lg text-foreground">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0 text-center">
                <p className="text-muted-foreground">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;