import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Target, Users, Lightbulb } from "lucide-react";

const stats = [
  {
    icon: Calendar,
    title: "Founded in 2025",
    subtitle: "Our Story",
    description: "Founded with a vision to empower Ottawa's youth through STEM, Redshifted is an organisation providing opportunities to kids in Ottawa the chance to use their STEM skills."
  },
  {
    icon: Target,
    title: "Creating a new vision",
    subtitle: "Our Mission",
    description: "To give every hacker whether first-timer or veteran, a space to experiment, collaborate, and turn 'what if?' into 'what's next.'"
  },
  {
    icon: Users,
    title: "10+ Organisers",
    subtitle: "Our Values",
    description: "Try the weird idea. Break things. Learn."
  },
  {
    icon: Lightbulb,
    title: "Not just software",
    subtitle: "Why WE'RE different",
    description: "We're aiming to redefine what hackathons can be - not just about software, but about the hardware too!"
  }
];

export const About = () => {
  return (
    <section id="about" className="py-20 bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="glitch-text">About Us</span>
          </h2>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card 
              key={stat.title}
              className="card-hover bg-card/50 backdrop-blur border-primary/20 fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 text-center space-y-4">
                <div className="w-16 h-16 bg-primary/20 rounded-lg flex items-center justify-center mx-auto">
                  <stat.icon className="w-8 h-8 text-primary" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-primary">{stat.title}</h3>
                  <h4 className="text-lg font-semibold text-foreground">{stat.subtitle}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">{stat.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center fade-in-up" style={{ animationDelay: "0.5s" }}>
          <Card className="bg-gradient-to-r from-primary/10 to-purple-500/10 border-primary/20 backdrop-blur">
            <CardContent className="p-8 md:p-12">
              <div className="space-y-6">
                <h3 className="text-3xl md:text-4xl font-bold glitch-text">
                  Join the Journey
                </h3>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                  This is just our beginning—help us write the rest! Follow @redshifted.ottawa on Instagram 
                  for updates or DM to get involved. Check out our events!
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="https://instagram.com/redshifted.ottawa" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors pulse-glow"
                  >
                    Follow on Instagram
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