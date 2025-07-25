import { Button } from "@/components/ui/button";
import { Clock, Users, Save, Shield } from "lucide-react";

const CTASection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const benefits = [
    {
      icon: Clock,
      title: "Convenience",
      description: "No need to leave your home. We come to you."
    },
    {
      icon: Users,
      title: "Expertise",
      description: "Professional packing and handling of all items."
    },
    {
      icon: Save,
      title: "Time-saving",
      description: "Focus on what matters while we handle the returns."
    },
    {
      icon: Shield,
      title: "Peace of mind",
      description: "Track your returns from pickup to delivery."
    }
  ];

  return (
    <section className="py-16 bg-primary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Ready to Make Returns Hassle-Free?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8">
            Book a pickup today and let us handle your returns from start to finish.
          </p>
          <Button 
            onClick={() => scrollToSection('book-pickup')}
            size="lg"
            variant="secondary"
            className="px-8 py-6 text-lg bg-background text-primary hover:bg-background/90"
          >
            Book a Pickup
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-primary-foreground/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <benefit.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-primary-foreground mb-2">
                {benefit.title}
              </h3>
              <p className="text-primary-foreground/80">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CTASection;