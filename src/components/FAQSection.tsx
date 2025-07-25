import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useState } from "react";

const FAQSection = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const faqData = {
    "managing": {
      title: "Managing Your Pickup",
      questions: [
        {
          question: "The pickup date/time I requested no longer works. Can I cancel or reschedule?",
          answer: "Absolutely. You can cancel or reschedule your pickup by letting us know at least 3 hours before your scheduled window."
        },
        {
          question: "I've changed my mind about my pickup — can I update it?",
          answer: "Yes — as long as you notify us at least 3 hours in advance, we'll happily update your pickup time."
        },
        {
          question: "What days and times can I schedule a pickup?",
          answer: "You can book pickups 6 days a week — with time slots available from 6PM to 9PM."
        },
        {
          question: "Do I need to be home at the time of pickup?",
          answer: "Nope. Just leave your item at the door (or a safe place), and we'll grab it during your chosen time window."
        },
        {
          question: "Do you return in-store purchases?",
          answer: "No — we only handle returns for online purchases that come with a return label or QR code."
        }
      ]
    },
    "service": {
      title: "Service and Pick ups",
      questions: [
        {
          question: "What if my return is more than 15kg or 5 items?",
          answer: "No problem — just let us know before booking. We may apply a small additional fee."
        },
        {
          question: "What do I need to do before Baccksee picks it up?",
          answer: "You'll need to file the return with the store and send us the return label."
        },
        {
          question: "What stores can I return to?",
          answer: "100+ stores supported — Amazon, Zara, Best Buy, etc."
        },
        {
          question: "Can I include pre-packed items?",
          answer: "Yes — if your item is already boxed and labeled, that's totally fine."
        },
        {
          question: "What happens after the driver picks up my return?",
          answer: "We'll deliver it and notify you once it's been dropped off."
        }
      ]
    },
    "pricing": {
      title: "Pricing and Payment",
      questions: [
        {
          question: "When do I need to pay?",
          answer: "You pay when you schedule your return pickup — not before."
        },
        {
          question: "How much does it cost?",
          answer: "Flat $12 for up to 5 items (or 15kg total). No surprises."
        },
        {
          question: "Do I need to box the item before pickup?",
          answer: "No. Just leave it in any shopping bag or pouch — we'll handle the rest."
        },
        {
          question: "How and when will I get my refund?",
          answer: "Your refund comes from the store, after we drop off your return."
        }
      ]
    },
    "general": {
      title: "General",
      questions: [
        {
          question: "Is Baccksee affiliated with these brands?",
          answer: "Nope. We just do the legwork — you get the refund."
        },
        {
          question: "Do you cover the cost of return shipping?",
          answer: "No — the return shipping must be prepaid by you or the retailer. If there's no label, we can help pack and drop it off, but you cover the cost."
        },
        {
          question: "Can you return anything I give you?",
          answer: "Not everything is eligible. Make sure the item is eligible before pickup. We help with packing, labeling, and drop-off — but shipping costs must be covered by you or the brand."
        }
      ]
    }
  };

  // Filter questions based on search query
  const filterQuestions = (questions: any[]) => {
    if (!searchQuery) return questions;
    return questions.filter(q => 
      q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      q.answer.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };

  return (
    <section id="faq" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        {/* Header with Search */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-12 gap-6">
          <div className="flex-1">
            <h2 className="text-4xl md:text-5xl font-bold text-heading mb-2">
              Frequently asked questions
            </h2>
          </div>
          
          {/* Search Bar */}
          <div className="relative max-w-md w-full lg:w-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
              type="text"
              placeholder="Looking for something?"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 pr-4 py-3 bg-background border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-primary focus:border-primary"
            />
          </div>
        </div>

        {/* FAQ Tabs */}
        <Tabs defaultValue="managing" className="w-full">
          {/* Tab Navigation */}
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-8 bg-secondary/50 p-1 rounded-lg">
            <TabsTrigger 
              value="managing" 
              className="text-sm font-medium px-4 py-3 rounded-md data-[state=active]:bg-background data-[state=active]:text-primary data-[state=active]:shadow-sm transition-all"
            >
              Managing Your Pickup
            </TabsTrigger>
            <TabsTrigger 
              value="service"
              className="text-sm font-medium px-4 py-3 rounded-md data-[state=active]:bg-background data-[state=active]:text-primary data-[state=active]:shadow-sm transition-all"
            >
              Service and Pick ups
            </TabsTrigger>
            <TabsTrigger 
              value="pricing"
              className="text-sm font-medium px-4 py-3 rounded-md data-[state=active]:bg-background data-[state=active]:text-primary data-[state=active]:shadow-sm transition-all"
            >
              Pricing and Payment
            </TabsTrigger>
            <TabsTrigger 
              value="general"
              className="text-sm font-medium px-4 py-3 rounded-md data-[state=active]:bg-background data-[state=active]:text-primary data-[state=active]:shadow-sm transition-all"
            >
              General
            </TabsTrigger>
          </TabsList>

          {/* Tab Content */}
          {Object.entries(faqData).map(([key, category]) => (
            <TabsContent key={key} value={key} className="mt-0">
              <div className="max-w-4xl mx-auto">
                <Accordion type="single" collapsible className="w-full space-y-4">
                  {filterQuestions(category.questions).map((faq, index) => (
                    <AccordionItem 
                      key={index} 
                      value={`${key}-item-${index}`}
                      className="border border-border rounded-lg px-6 py-2 bg-card/50 hover:bg-card transition-colors"
                    >
                      <AccordionTrigger className="text-left text-lg font-semibold text-heading hover:text-primary py-6 hover:no-underline">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-6">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
                
                {/* No Results Message */}
                {searchQuery && filterQuestions(category.questions).length === 0 && (
                  <div className="text-center py-12">
                    <p className="text-muted-foreground text-lg">
                      No questions found matching "{searchQuery}" in {category.title}.
                    </p>
                    <p className="text-sm text-muted-foreground mt-2">
                      Try searching in a different category or adjusting your search terms.
                    </p>
                  </div>
                )}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        {/* Contact Section */}
        <div className="mt-16 text-center bg-secondary/30 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-heading mb-4">
            Still have questions?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Can't find the answer you're looking for? Our friendly customer support team is here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:support@baccksee.com"
              className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
            >
              Contact Support
            </a>
            <a 
              href="tel:+1-800-BACCKSEE"
              className="inline-flex items-center justify-center px-6 py-3 border border-border rounded-lg hover:bg-secondary transition-colors font-medium"
            >
              Call Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;