import { Shield, Package, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const TrustSection = () => {
  const features = [
    {
      icon: Shield,
      title: "Background-Checked Staff",
      description: "All our delivery professionals undergo thorough background checks and training"
    },
    {
      icon: Package,
      title: "Secure Handling",
      description: "Your items are carefully packed and securely transported throughout the return process"
    },
    {
      icon: MapPin,
      title: "Live Tracking",
      description: "Track your return from pickup to delivery with real-time updates"
    }
  ];

  return (
    <section className="py-16 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-heading mb-4">
            Trust & Safety
          </h2>
          <p className="text-xl text-muted-foreground">
            Your items are in good hands with our professional team
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {features.map((feature, index) => (
            <Card key={index} className="border-0 shadow-lg text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-heading mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="max-w-4xl mx-auto text-center">
          <blockquote className="text-lg italic text-muted-foreground mb-4">
            "Our commitment to professional service and customer satisfaction is at the heart 
            of everything we do. With Baccksee, you can trust that your returns are handled 
            with care from start to finish."
          </blockquote>
          <cite className="text-heading font-semibold">
            — The Baccksee Team
          </cite>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;