import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Instagram, Heart, DollarSign } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="glitch-text">Get in Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to join the Redshifted community? We'd love to hear from you!
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Email Card */}
          <Card className="card-hover bg-card/50 backdrop-blur border-primary/20 fade-in-up">
            <CardContent className="p-8 text-center space-y-6">
              <div className="w-16 h-16 bg-primary/20 rounded-lg flex items-center justify-center mx-auto">
                <Mail className="w-8 h-8 text-primary" />
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-foreground">Email</h3>
                <p className="text-muted-foreground">General inquiries and support</p>
                <a 
                  href="mailto:hello@redshifted.ca"
                  className="block text-primary font-mono text-lg hover:text-primary-glow transition-colors"
                >
                  hello@redshifted.ca
                </a>
              </div>
            </CardContent>
          </Card>

          {/* Social Media Card */}
          <Card className="card-hover bg-card/50 backdrop-blur border-primary/20 fade-in-up" style={{ animationDelay: "0.1s" }}>
            <CardContent className="p-8 text-center space-y-6">
              <div className="w-16 h-16 bg-primary/20 rounded-lg flex items-center justify-center mx-auto">
                <Instagram className="w-8 h-8 text-primary" />
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-foreground">Follow Us</h3>
                <p className="text-muted-foreground">Stay updated with our latest events</p>
                <a 
                  href="https://instagram.com/redshifted.ottawa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-primary font-mono text-lg hover:text-primary-glow transition-colors"
                >
                  @redshifted.ottawa
                </a>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Support Section */}
        <div className="text-center fade-in-up" style={{ animationDelay: "0.3s" }}>
          <Card className="bg-gradient-to-r from-primary/10 to-purple-500/10 border-primary/20 backdrop-blur">
            <CardContent className="p-8 md:p-12">
              <div className="space-y-6">
                <div className="flex justify-center">
                  <div className="w-20 h-20 bg-primary/20 rounded-lg flex items-center justify-center">
                    <Heart className="w-10 h-10 text-primary" />
                  </div>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold glitch-text">
                  Support Our Mission
                </h3>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                  We run on sponsorships and donations from individuals. If our mission resonates with you, 
                  please consider supporting us financially.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button className="pulse-glow text-lg px-8 py-4">
                    <DollarSign className="mr-2 h-5 w-5" />
                    Donate
                  </Button>
                  <a 
                    href="mailto:programs@redshifted.ca"
                    className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold border border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-lg transition-colors"
                  >
                    Become a Sponsor
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};