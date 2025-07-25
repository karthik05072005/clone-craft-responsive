import pickupImage from "@/assets/pickup-process.jpg";
import packingImage from "@/assets/packing-process.jpg";
import labelingImage from "@/assets/labeling-process.jpg";
import transportImage from "@/assets/transport-process.jpg";
import trackingImage from "@/assets/tracking-process.jpg";
import dropoffImage from "@/assets/dropoff-process.jpg";

const ProcessSection = () => {
  const processes = [
    {
      image: pickupImage,
      title: "Pickup",
      description: "Our team arrives at your location to collect your returns"
    },
    {
      image: packingImage,
      title: "Packing",
      description: "We carefully pack your items for secure shipping"
    },
    {
      image: labelingImage,
      title: "Labeling",
      description: "We ensure your returns are properly labeled for delivery"
    },
    {
      image: transportImage,
      title: "Transportation",
      description: "We handle the secure transport of your returns"
    },
    {
      image: trackingImage,
      title: "Tracking",
      description: "We provide real-time updates on your return status"
    },
    {
      image: dropoffImage,
      title: "Drop-Off",
      description: "We deliver your returns to the correct location"
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Delivery Process
          </h2>
          <p className="text-xl text-muted-foreground">
            See how our diverse team makes returns effortless
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {processes.map((process, index) => (
            <div key={index} className="group">
              <div className="relative overflow-hidden rounded-lg mb-4">
                <img 
                  src={process.image} 
                  alt={`${process.title} process`}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {process.title}
              </h3>
              <p className="text-muted-foreground">
                {process.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-2">
              Professional Service
            </h3>
            <p className="text-muted-foreground">
              Our trained staff provide exceptional service with every return
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-2">
              Diverse Team
            </h3>
            <p className="text-muted-foreground">
              Our diverse staff provides inclusive service across Canada
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-2">
              End-to-End Solution
            </h3>
            <p className="text-muted-foreground">
              Complete returns management from pickup to delivery
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;