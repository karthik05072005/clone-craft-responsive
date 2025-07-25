import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "Do you cover the cost of return shipping?",
      answer: "No, customers must cover the return shipping cost. We handle all the logistics and processing, but the shipping fees are the responsibility of the customer or the brand you're returning to."
    },
    {
      question: "Can you return anything I give you?",
      answer: "We can handle most returns, but items must be eligible for return according to the retailer's return policy. Before we pick up your item, please ensure it meets the return criteria of the store or brand you purchased from."
    },
    {
      question: "How far in advance should I book a pickup?",
      answer: "We recommend booking your pickup at least 24-48 hours in advance to ensure availability. However, we often accommodate same-day or next-day pickups depending on demand in your area."
    },
    {
      question: "What areas do you service?",
      answer: "We currently provide service across Canada in major urban areas. Contact us to confirm if we service your specific location and to check pickup availability in your neighborhood."
    },
    {
      question: "What happens if my return is rejected?",
      answer: "If a return is rejected by the retailer, we'll contact you immediately to discuss options. This could include returning the item to you or helping you contact the retailer to resolve any issues."
    }
  ];

  return (
    <section id="faq" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground">
            Everything you need to know about our service
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-lg font-semibold text-foreground hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;