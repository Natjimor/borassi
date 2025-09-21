import { Users, Lightbulb, Heart } from "lucide-react";

export const TrustSection = () => {
  return (
    <section className="py-20 bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-4xl font-bold">
                Building the future of 
                <span className="bg-gradient-hero bg-clip-text text-transparent"> smart gardening</span>
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                We're building the next generation of smart gardening technology. Your opinion counts – 
                join our community of early testers and help shape the future of plant care!
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mt-16">
              <div className="text-center space-y-4 animate-scale-in" style={{ animationDelay: "0.1s" }}>
                <div className="bg-primary-light p-4 rounded-full w-16 h-16 mx-auto flex items-center justify-center">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold text-lg">Community Driven</h3>
                <p className="text-muted-foreground">
                  Built with feedback from passionate plant parents like you
                </p>
              </div>

              <div className="text-center space-y-4 animate-scale-in" style={{ animationDelay: "0.2s" }}>
                <div className="bg-primary-light p-4 rounded-full w-16 h-16 mx-auto flex items-center justify-center">
                  <Lightbulb className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold text-lg">Innovation First</h3>
                <p className="text-muted-foreground">
                  Cutting-edge AI and sensor technology for superior plant care
                </p>
              </div>

              <div className="text-center space-y-4 animate-scale-in" style={{ animationDelay: "0.3s" }}>
                <div className="bg-primary-light p-4 rounded-full w-16 h-16 mx-auto flex items-center justify-center">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold text-lg">Made with Love</h3>
                <p className="text-muted-foreground">
                  Designed by plant lovers, for plant lovers everywhere
                </p>
              </div>
            </div>

            <div className="bg-gradient-card p-8 rounded-2xl shadow-medium mt-16 max-w-2xl mx-auto">
              <blockquote className="text-lg italic text-muted-foreground mb-4">
                "Finally, a smart pot that actually understands plants. The AI diagnostics caught issues 
                I never would have noticed. My plants have never been healthier!"
              </blockquote>
              <div className="flex items-center justify-center gap-3">
                <div className="w-10 h-10 bg-primary-light rounded-full flex items-center justify-center">
                  <span className="text-primary font-semibold text-sm">SJ</span>
                </div>
                <div className="text-left">
                  <div className="font-medium text-sm">Sarah Johnson</div>
                  <div className="text-xs text-muted-foreground">Beta Tester</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};