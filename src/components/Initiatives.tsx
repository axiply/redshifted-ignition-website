import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Wrench, Zap, Calendar } from "lucide-react";

const initiatives = [
  {
    title: "Hardware Workshops",
    description: "Beginner-friendly, in-person hardware workshops around Ottawa for high schoolers.",
    icon: Wrench,
    buttonText: "Learn More",
    gradient: "from-primary/20 to-purple-500/20"
  },
  {
    title: "Catalyst Hackathon",
    description: "Catalyst is Ottawa's first hardware hackathon — made for total beginners.",
    icon: Zap,
    buttonText: "Get Involved",
    gradient: "from-primary/20 to-blue-500/20"
  }
];

const events = [
  {
    title: "Hardware Workshop - from Zero to Hero",
    date: "July 26, 2025",
    location: "Beaverbrook Library",
    icon: Calendar
  },
  {
    title: "Catalyst Pre-Registration - Opens",
    date: "August 1, 2025",
    location: "Online",
    icon: Calendar
  }
];

export const Initiatives = () => {
  return (
    <section id="initiatives" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="glitch-text">Our Initiatives</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Hands-on learning experiences designed to inspire and empower the next generation of innovators.
          </p>
        </div>

        {/* Initiatives Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {initiatives.map((initiative, index) => (
            <Card 
              key={initiative.title} 
              className={`card-hover bg-gradient-to-br ${initiative.gradient} border-primary/20 backdrop-blur-sm fade-in-up`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="space-y-4">
                <div className="w-16 h-16 bg-primary/20 rounded-lg flex items-center justify-center">
                  <initiative.icon className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-2xl text-foreground">{initiative.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <CardDescription className="text-lg text-muted-foreground">
                  {initiative.description}
                </CardDescription>
                <Button className="w-full pulse-glow">
                  {initiative.buttonText}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Upcoming Events */}
        <div className="fade-in-up" style={{ animationDelay: "0.3s" }}>
          <h3 className="text-3xl font-bold text-center mb-12">
            <span className="glitch-text">Upcoming Events</span>
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {events.map((event, index) => (
              <Card 
                key={event.title} 
                className="card-hover bg-card/50 backdrop-blur border-primary/20"
                style={{ animationDelay: `${(index + 3) * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <event.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="space-y-2">
                      <h4 className="text-xl font-semibold text-foreground">{event.title}</h4>
                      <p className="text-primary font-medium">{event.date}</p>
                      <p className="text-muted-foreground">{event.location}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};