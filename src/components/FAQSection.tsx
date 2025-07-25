import { useState } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQSection = () => {
  const [activeTab, setActiveTab] = useState("Managing Your Pickup");
  const [searchQuery, setSearchQuery] = useState("");

  const tabs = [
    "Managing Your Pickup",
    "Service and Pick ups", 
    "Pricing and Payment",
    "General"
  ];

  const faqData = {
    "Managing Your Pickup": [
      {
        question: "How do I schedule a pickup?",
        answer: "You can schedule a pickup by filling out our online booking form or calling our customer service. We'll arrange a convenient time for our team to collect your returns."
      },
      {
        question: "Can I reschedule my pickup?",
        answer: "Yes, you can reschedule your pickup up to 2 hours before the scheduled time. Contact us through our website or call our support team."
      },
      {
        question: "What if I'm not home during pickup?",
        answer: "We can arrange for pickup from a secure location like your building's concierge or a trusted neighbor. Please specify this when booking."
      }
    ],
    "Service and Pick ups": [
      {
        question: "What areas do you serve?",
        answer: "We currently serve major cities across Canada including Toronto, Vancouver, Montreal, Calgary, and Ottawa. Check our coverage map for specific areas."
      },
      {
        question: "What items can you pick up?",
        answer: "We handle returns for clothing, electronics, household items, and most retail products. We cannot handle hazardous materials or perishable items."
      },
      {
        question: "Do you provide packaging?",
        answer: "Yes! We bring all necessary packaging materials and handle the packing process for you. No need to worry about boxes or bubble wrap."
      }
    ],
    "Pricing and Payment": [
      {
        question: "How much does the service cost?",
        answer: "Our pickup service starts at $15 for local pickups. The return shipping cost is separate and depends on the retailer's policy."
      },
      {
        question: "Who pays for return shipping?",
        answer: "Return shipping costs are typically covered by you or the retailer, depending on their return policy. We handle the logistics, but shipping fees are separate from our service fee."
      },
      {
        question: "What payment methods do you accept?",
        answer: "We accept all major credit cards, debit cards, and e-transfer. Payment is processed securely through our platform."
      }
    ],
    "General": [
      {
        question: "How do I track my return?",
        answer: "Once we pick up your items, you'll receive a tracking number and regular updates via email and SMS until your return is delivered."
      },
      {
        question: "What if my return gets lost?",
        answer: "We provide full insurance coverage for all items in our care. If anything goes wrong, we'll work with you and the retailer to resolve the issue."
      },
      {
        question: "Can I return items to multiple stores in one pickup?",
        answer: "Absolutely! We can handle returns to multiple retailers in a single pickup, making it even more convenient for you."
      }
    ]
  };

  const filteredFAQs = faqData[activeTab as keyof typeof faqData]?.filter(faq =>
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  ) || [];

  return (
    <section id="faq" className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-12 gap-6">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Frequently asked questions
          </h2>
          
          {/* Search Bar */}
          <div className="relative max-w-md w-full lg:w-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
            <Input
              type="text"
              placeholder="Looking for something?"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 pr-4 py-3 w-full border-muted-foreground/30 focus:border-primary"
            />
          </div>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-8 md:gap-12 mb-12 border-b border-border">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-4 px-1 text-lg font-medium transition-colors whitespace-nowrap relative ${
                activeTab === tab
                  ? "text-accent font-semibold"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {tab}
              {activeTab === tab && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent rounded-full" />
              )}
            </button>
          ))}
        </div>

        {/* FAQ Content */}
        <div className="max-w-4xl">
          {filteredFAQs.length > 0 ? (
            <Accordion type="single" collapsible className="space-y-4">
              {filteredFAQs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="border border-border rounded-lg px-6 py-2"
                >
                  <AccordionTrigger className="text-left text-lg font-medium text-foreground hover:text-primary">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pt-2 pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">
                No questions found matching your search.
              </p>
            </div>
          )}
        </div>

        {/* Contact CTA */}
        <div className="mt-16 text-center p-8 bg-secondary rounded-2xl">
          <h3 className="text-2xl font-semibold text-foreground mb-4">
            Still have questions?
          </h3>
          <p className="text-muted-foreground mb-6">
            Our customer support team is here to help you with any questions about our return service.
          </p>
          <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-lg font-medium transition-colors">
            Contact Support
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;