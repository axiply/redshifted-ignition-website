import { Mail, Instagram } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <img 
              src="/lovable-uploads/387e5c1c-60cf-4c9d-8868-abbee1e743e3.png" 
              alt="Redshifted Logo" 
              className="h-10 w-auto"
            />
            <p className="text-muted-foreground leading-relaxed">
              Empowering Ottawa's youth through hands-on STEM experiences and innovative learning opportunities.
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Contact</h3>
            <div className="space-y-2">
              <a 
                href="mailto:programs@redshifted.ca"
                className="flex items-center text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="w-4 h-4 mr-2" />
                programs@redshifted.ca
              </a>
              <a 
                href="https://instagram.com/redshifted.ottawa"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-muted-foreground hover:text-primary transition-colors"
              >
                <Instagram className="w-4 h-4 mr-2" />
                @redshifted.ottawa
              </a>
            </div>
          </div>

          {/* Mission */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Our Mission</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              To give every hacker whether first-timer or veteran, a space to experiment, 
              collaborate, and turn 'what if?' into 'what's next.'
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-muted-foreground text-sm">
            © 2025 Redshifted. Built with ❤️ for Ottawa's STEM community.
          </p>
        </div>
      </div>
    </footer>
  );
};