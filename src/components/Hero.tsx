import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

export const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden hero-pattern">
      {/* Advanced Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-transparent to-primary/12"></div>
      
      {/* Animated Orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/15 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-glitch-secondary/20 rounded-full blur-2xl animate-pulse delay-500"></div>
      
      {/* Floating Particles */}
      <div className="absolute top-20 left-1/3 w-2 h-2 bg-primary rounded-full animate-pulse matrix-effect"></div>
      <div className="absolute top-32 right-1/3 w-1 h-1 bg-glitch-primary rounded-full animate-pulse matrix-effect" style={{ animationDelay: "1s" }}></div>
      <div className="absolute bottom-40 left-1/5 w-1.5 h-1.5 bg-glitch-tertiary rounded-full animate-pulse matrix-effect" style={{ animationDelay: "2s" }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center space-y-8">
          {/* Main Heading */}
          <div className="space-y-6 fade-in-up relative">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight">
              <span className="block text-foreground mb-4 slide-in-scale" style={{ animationDelay: "0.2s" }}>Welcome to</span>
              <span className="block glitch-text gradient-text text-6xl md:text-8xl lg:text-9xl relative">
                REDSHIFTED
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-transparent to-primary/20 blur-2xl pulse-ring" style={{ animationDelay: "0.5s" }}></div>
              </span>
            </h1>
          </div>

          {/* Subtitle */}
          <div className="max-w-4xl mx-auto space-y-8 fade-in-up" style={{ animationDelay: "0.4s" }}>
            <p className="text-xl md:text-2xl lg:text-3xl text-muted-foreground leading-relaxed zoom-in" style={{ animationDelay: "0.6s" }}>
              Empowering Ottawa's youth through hands-on STEM experiences, fostering innovation, 
              and building the next generation of creators and problem-solvers.
            </p>
            
            <div className="bg-card/60 backdrop-blur-xl border border-primary/20 rounded-2xl p-6 md:p-8 card-hover relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-glitch-secondary/5"></div>
              <blockquote className="text-lg md:text-xl text-foreground italic leading-relaxed relative z-10">
                "We believe every student deserves the opportunity to explore, create, and innovate. 
                Redshifted is more than just workshops and hackathons—it's a community where curiosity meets opportunity."
              </blockquote>
              <cite className="block mt-6 text-primary font-semibold text-lg relative z-10">— Redshifted Team</cite>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center fade-in-up" style={{ animationDelay: "0.8s" }}>
            <Button 
              size="lg" 
              className="text-lg px-10 py-5 pulse-glow group relative overflow-hidden"
            >
              <Sparkles className="mr-3 h-6 w-6 group-hover:animate-spin transition-transform duration-500" />
              Explore Our Work
              <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform duration-300" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-10 py-5 border-2 border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground hover:border-primary hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 relative overflow-hidden group"
              onClick={() => document.getElementById('initiatives')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <span className="relative z-10">View Initiatives</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Button>
          </div>

          {/* Enhanced Floating Elements */}
          <div className="absolute top-10 left-10 text-primary/30 floating filter drop-shadow-lg" style={{ animationDelay: "1s" }}>
            <div className="text-6xl md:text-7xl font-mono transform hover:scale-110 transition-transform duration-300">{"{"}</div>
          </div>
          <div className="absolute top-20 right-10 text-primary/30 floating filter drop-shadow-lg" style={{ animationDelay: "2s" }}>
            <div className="text-6xl md:text-7xl font-mono transform hover:scale-110 transition-transform duration-300">{"}"}</div>
          </div>
          <div className="absolute bottom-20 left-20 text-glitch-secondary/40 floating filter drop-shadow-lg" style={{ animationDelay: "1.5s" }}>
            <div className="text-4xl md:text-5xl font-mono transform hover:scale-110 transition-transform duration-300">{"</>"}</div>
          </div>
          <div className="absolute top-1/3 right-1/4 text-glitch-tertiary/25 floating filter drop-shadow-lg" style={{ animationDelay: "2.5s" }}>
            <div className="text-3xl md:text-4xl font-mono transform hover:scale-110 transition-transform duration-300">{"[]"}</div>
          </div>
          <div className="absolute bottom-1/3 left-1/3 text-primary/25 floating filter drop-shadow-lg" style={{ animationDelay: "3s" }}>
            <div className="text-3xl md:text-4xl font-mono transform hover:scale-110 transition-transform duration-300">{"()"}</div>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce group cursor-pointer" onClick={() => document.getElementById('initiatives')?.scrollIntoView({ behavior: 'smooth' })}>
        <div className="w-7 h-12 border-2 border-primary rounded-full flex justify-center relative overflow-hidden group-hover:border-primary-glow transition-colors duration-300">
          <div className="w-1.5 h-4 bg-primary rounded-full mt-2 animate-pulse group-hover:bg-primary-glow transition-colors duration-300"></div>
          <div className="absolute inset-0 bg-primary/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
        <div className="text-xs text-primary/60 text-center mt-2 font-medium">Scroll</div>
      </div>
    </section>
  );
};