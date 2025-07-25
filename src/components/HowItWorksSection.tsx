import { Calendar, MapPin, Package, Truck } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const HowItWorksSection = () => {
  const steps = [
    {
      icon: Calendar,
      title: "Schedule Pickup",
      description: "Book online and tell us what you're returning"
    },
    {
      icon: MapPin,
      title: "We Arrive",
      description: "Our professional team picks up your items from your door"
    },
    {
      icon: Package,
      title: "We Pack & Label",
      description: "We pack and label your parcels securely"
    },
    {
      icon: Truck,
      title: "We Drop Off",
      description: "Items are delivered to the correct return location"
    }
  ];

  return (
    <section id="how-it-works" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our hassle-free process makes returning items simple and convenient
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <step.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground">
                  {step.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 p-6 bg-secondary rounded-lg text-center">
          <p className="text-muted-foreground">
            <strong>Note:</strong> Baccksee manages the entire process, but customers must cover the return shipping cost.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;