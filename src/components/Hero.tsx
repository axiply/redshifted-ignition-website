import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

export const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden hero-pattern">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10"></div>
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center space-y-8">
          {/* Main Heading */}
          <div className="space-y-4 fade-in-up">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight">
              <span className="block text-foreground">Welcome to</span>
              <span className="block glitch-text gradient-text text-6xl md:text-8xl lg:text-9xl">
                REDSHIFTED
              </span>
            </h1>
          </div>

          {/* Subtitle */}
          <div className="max-w-4xl mx-auto space-y-6 fade-in-up" style={{ animationDelay: "0.2s" }}>
            <p className="text-xl md:text-2xl lg:text-3xl text-muted-foreground leading-relaxed">
              Empowering Ottawa's youth through hands-on STEM experiences, fostering innovation, 
              and building the next generation of creators and problem-solvers.
            </p>
            
            <div className="bg-card/50 backdrop-blur border border-border rounded-lg p-6 md:p-8">
              <blockquote className="text-lg md:text-xl text-foreground italic leading-relaxed">
                "We believe every student deserves the opportunity to explore, create, and innovate. 
                Redshifted is more than just workshops and hackathons—it's a community where curiosity meets opportunity."
              </blockquote>
              <cite className="block mt-4 text-primary font-semibold">— Redshifted Team</cite>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center fade-in-up" style={{ animationDelay: "0.4s" }}>
            <Button 
              size="lg" 
              className="text-lg px-8 py-4 pulse-glow group"
            >
              <Sparkles className="mr-2 h-5 w-5 group-hover:animate-spin" />
              Explore Our Work
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-8 py-4 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              onClick={() => document.getElementById('initiatives')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Initiatives
            </Button>
          </div>

          {/* Floating Elements */}
          <div className="absolute top-10 left-10 text-primary/20 floating" style={{ animationDelay: "1s" }}>
            <div className="text-6xl">{"{"}</div>
          </div>
          <div className="absolute top-20 right-10 text-primary/20 floating" style={{ animationDelay: "2s" }}>
            <div className="text-6xl">{"}"}</div>
          </div>
          <div className="absolute bottom-20 left-20 text-primary/20 floating" style={{ animationDelay: "1.5s" }}>
            <div className="text-4xl">{"</>"}</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};