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
    <section id="faq" className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header with Search - Matching Screenshot Layout */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-16 gap-8">
          <div className="flex-1">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Frequently asked questions
            </h2>
          </div>
          
          {/* Search Bar - Matching Screenshot Style */}
          <div className="relative max-w-sm w-full lg:w-auto">
            <Input
              type="text"
              placeholder="Looking for something?"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-4 pr-12 py-3 bg-background border-border/30 rounded-lg text-foreground placeholder:text-muted-foreground focus:ring-1 focus:ring-primary/20 focus:border-primary/30 text-base"
            />
            <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
          </div>
        </div>

        {/* FAQ Tabs - Matching Screenshot Style */}
        <Tabs defaultValue="managing" className="w-full">
          {/* Tab Navigation - Clean Underline Style */}
          <div className="border-b border-border/20 mb-12">
            <TabsList className="bg-transparent h-auto p-0 space-x-0">
              <TabsTrigger 
                value="managing" 
                className="bg-transparent text-base font-medium px-0 py-4 mr-12 border-b-2 border-transparent data-[state=active]:border-accent data-[state=active]:text-accent data-[state=active]:bg-transparent data-[state=active]:shadow-none rounded-none hover:text-accent/80 transition-colors"
              >
                Managing Your Pickup
              </TabsTrigger>
              <TabsTrigger 
                value="service"
                className="bg-transparent text-base font-medium px-0 py-4 mr-12 border-b-2 border-transparent data-[state=active]:border-accent data-[state=active]:text-accent data-[state=active]:bg-transparent data-[state=active]:shadow-none rounded-none hover:text-accent/80 transition-colors"
              >
                Service and Pick ups
              </TabsTrigger>
              <TabsTrigger 
                value="pricing"
                className="bg-transparent text-base font-medium px-0 py-4 mr-12 border-b-2 border-transparent data-[state=active]:border-accent data-[state=active]:text-accent data-[state=active]:bg-transparent data-[state=active]:shadow-none rounded-none hover:text-accent/80 transition-colors"
              >
                Pricing and Payment
              </TabsTrigger>
              <TabsTrigger 
                value="general"
                className="bg-transparent text-base font-medium px-0 py-4 border-b-2 border-transparent data-[state=active]:border-accent data-[state=active]:text-accent data-[state=active]:bg-transparent data-[state=active]:shadow-none rounded-none hover:text-accent/80 transition-colors"
              >
                General
              </TabsTrigger>
            </TabsList>
          </div>

          {/* Tab Content */}
          {Object.entries(faqData).map(([key, category]) => (
            <TabsContent key={key} value={key} className="mt-0">
              <div className="max-w-4xl">
                <Accordion type="single" collapsible className="w-full space-y-6">
                  {filterQuestions(category.questions).map((faq, index) => (
                    <AccordionItem 
                      key={index} 
                      value={`${key}-item-${index}`}
                      className="border-0 border-b border-border/10 pb-6 last:border-b-0"
                    >
                      <AccordionTrigger className="text-left text-lg font-semibold text-foreground hover:text-primary py-0 hover:no-underline [&[data-state=open]>svg]:rotate-180">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground text-base leading-relaxed pt-4 pb-0">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
                
                {/* No Results Message */}
                {searchQuery && filterQuestions(category.questions).length === 0 && (
                  <div className="text-center py-16">
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
        <div className="mt-20 text-center bg-secondary/20 rounded-2xl p-12">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Still have questions?
          </h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto text-lg">
            Can't find the answer you're looking for? Our friendly customer support team is here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:support@baccksee.com"
              className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium text-base"
            >
              Contact Support
            </a>
            <a 
              href="tel:+1-800-BACCKSEE"
              className="inline-flex items-center justify-center px-8 py-4 border border-border rounded-lg hover:bg-secondary/50 transition-colors font-medium text-base"
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