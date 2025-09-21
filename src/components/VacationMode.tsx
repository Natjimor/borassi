import { Plane, Shield, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";

export const VacationMode = () => {
  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-primary-light p-2 rounded-lg">
                  <Plane className="h-6 w-6 text-primary" />
                </div>
                <span className="text-primary font-semibold">Vacation Mode</span>
              </div>
              
              <h2 className="text-4xl font-bold leading-tight">
                Travel worry-free, your plants are 
                <span className="bg-gradient-hero bg-clip-text text-transparent"> protected</span>
              </h2>
              
              <p className="text-xl text-muted-foreground leading-relaxed">
                Going away? EcoSense's vacation mode ensures your plants receive optimal care while you're gone, 
                with real-time updates and emergency alerts sent directly to your phone.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="bg-success/10 p-2 rounded-lg">
                  <Shield className="h-5 w-5 text-success" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Extended care cycles</h4>
                  <p className="text-muted-foreground">Automatically adjusts watering and feeding schedules for longer periods</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-success/10 p-2 rounded-lg">
                  <Smartphone className="h-5 w-5 text-success" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Remote monitoring & alerts</h4>
                  <p className="text-muted-foreground">Stay connected with your plants no matter where you are in the world</p>
                </div>
              </div>
            </div>

            <Button className="bg-gradient-hero hover:bg-primary-hover shadow-soft hover:shadow-glow transition-all duration-300">
              Learn more about vacation mode
            </Button>
          </div>

          {/* Right content - Feature showcase */}
          <div className="relative animate-scale-in">
            <div className="bg-gradient-card p-8 rounded-2xl shadow-large">
              <div className="space-y-6">
                {/* Mock mobile interface */}
                <div className="bg-background rounded-xl p-6 shadow-medium">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="font-semibold">Vacation Mode Active</h4>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-success rounded-full"></div>
                      <span className="text-sm text-success">Online</span>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-muted-foreground">Duration</span>
                      <span className="font-medium">7 days remaining</span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-muted-foreground">Next watering</span>
                      <span className="font-medium">Tomorrow, 9:00 AM</span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-muted-foreground">Plant status</span>
                      <span className="font-medium text-success">Healthy</span>
                    </div>
                  </div>
                </div>

                {/* Notification examples */}
                <div className="space-y-3">
                  <div className="bg-primary-light/50 border-l-4 border-primary p-3 rounded-r-lg">
                    <p className="text-sm font-medium">Plant watered successfully</p>
                    <p className="text-xs text-muted-foreground">2 hours ago</p>
                  </div>
                  <div className="bg-accent/50 border-l-4 border-success p-3 rounded-r-lg">
                    <p className="text-sm font-medium">All systems optimal</p>
                    <p className="text-xs text-muted-foreground">Daily check complete</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};