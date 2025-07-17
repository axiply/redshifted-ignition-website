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
    <section id="initiatives" className="py-20 relative section-pattern overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/4 right-10 w-32 h-32 bg-glitch-primary/10 rounded-full blur-2xl animate-pulse"></div>
      <div className="absolute bottom-1/4 left-10 w-48 h-48 bg-glitch-secondary/8 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20 fade-in-up">
          <h2 className="text-4xl md:text-6xl font-bold mb-8 relative">
            <span className="glitch-text relative">
              Our Initiatives
              <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 via-transparent to-primary/20 blur-xl pulse-ring" style={{ animationDelay: "0.3s" }}></div>
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed zoom-in" style={{ animationDelay: "0.5s" }}>
            Hands-on learning experiences designed to inspire and empower the next generation of innovators.
          </p>
        </div>

        {/* Initiatives Grid */}
        <div className="grid md:grid-cols-2 gap-10 mb-24">
          {initiatives.map((initiative, index) => (
            <Card 
              key={initiative.title} 
              className={`card-hover bg-gradient-to-br ${initiative.gradient} border-primary/30 backdrop-blur-xl shadow-xl hover:shadow-2xl transition-all duration-500 ${index % 2 === 0 ? 'fade-in-left' : 'fade-in-right'} rounded-2xl overflow-hidden group`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-glitch-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardHeader className="space-y-6 relative z-10">
                <div className="w-18 h-18 bg-primary/25 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <initiative.icon className="w-10 h-10 text-primary group-hover:text-primary-glow transition-colors duration-300" />
                </div>
                <CardTitle className="text-2xl md:text-3xl text-foreground font-bold">{initiative.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-8 relative z-10">
                <CardDescription className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                  {initiative.description}
                </CardDescription>
                <Button className="w-full pulse-glow text-lg py-3 group-hover:scale-105 transition-transform duration-300">
                  {initiative.buttonText}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Upcoming Events */}
        <div className="fade-in-up" style={{ animationDelay: "0.6s" }}>
          <h3 className="text-3xl md:text-5xl font-bold text-center mb-16 relative">
            <span className="glitch-text relative">
              Upcoming Events
              <div className="absolute -inset-1 bg-gradient-to-r from-glitch-secondary/20 via-transparent to-glitch-primary/20 blur-lg pulse-ring" style={{ animationDelay: "0.8s" }}></div>
            </span>
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            {events.map((event, index) => (
              <Card 
                key={event.title} 
                className={`card-hover bg-card/70 backdrop-blur-xl border-primary/30 shadow-lg hover:shadow-xl transition-all duration-500 rounded-2xl overflow-hidden group ${index % 2 === 0 ? 'zoom-in' : 'slide-in-scale'}`}
                style={{ animationDelay: `${(index + 6) * 0.15}s` }}
              >
                <CardContent className="p-8 relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-glitch-tertiary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="flex items-start space-x-6 relative z-10">
                    <div className="w-16 h-16 bg-primary/25 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300 shadow-lg">
                      <event.icon className="w-8 h-8 text-primary group-hover:text-primary-glow transition-colors duration-300" />
                    </div>
                    <div className="space-y-3 flex-1">
                      <h4 className="text-xl md:text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">{event.title}</h4>
                      <p className="text-primary font-semibold text-lg bg-primary/10 px-3 py-1 rounded-lg inline-block">{event.date}</p>
                      <p className="text-muted-foreground text-lg flex items-center gap-2">
                        <span className="w-2 h-2 bg-glitch-secondary rounded-full animate-pulse"></span>
                        {event.location}
                      </p>
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