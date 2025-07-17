import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    question: "Who can participate in Redshifted programs?",
    answer: "Our programs are primarily designed for high school students in the Ottawa area who are interested in STEM. Whether you're a complete beginner or have some experience, we welcome everyone who's curious about technology and innovation."
  },
  {
    question: "Do I need to bring my own equipment?",
    answer: "No! We provide all the necessary equipment and materials for our workshops and hackathons. Just bring yourself, your curiosity, and enthusiasm to learn."
  },
  {
    question: "How much do workshops and events cost?",
    answer: "All of our workshops and events are completely free! We believe that financial barriers shouldn't prevent anyone from accessing quality STEM education and experiences."
  },
  {
    question: "What if I've never coded or worked with hardware before?",
    answer: "Perfect! Our programs are specifically designed for beginners. We start from the very basics and our mentors are there to guide you every step of the way. Everyone starts somewhere, and we're here to help you begin your journey."
  },
  {
    question: "How do I sign up for upcoming events?",
    answer: "You can sign up for events through our Instagram @redshifted.ottawa or by emailing us at hello@redshifted.ca. We'll announce registration details for each event as they become available."
  },
  {
    question: "Can I volunteer or help organize events?",
    answer: "Absolutely! We're always looking for passionate volunteers and organizers. Whether you're a student, educator, or industry professional, there are many ways to get involved. Reach out to us at programs@redshifted.ca to learn more."
  }
];

export const FAQ = () => {
  return (
    <section id="faq" className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="glitch-text">Frequently Asked Questions</span>
          </h2>
        </div>

        {/* FAQ Accordion */}
        <div className="fade-in-up" style={{ animationDelay: "0.2s" }}>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card/50 backdrop-blur border border-primary/20 rounded-lg px-6 data-[state=open]:bg-card/70"
              >
                <AccordionTrigger className="text-left text-lg font-semibold text-foreground hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-4">
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