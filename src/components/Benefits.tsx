import { Droplets, Smartphone, Leaf, Palette } from "lucide-react";

const benefits = [
  {
    icon: Droplets,
    title: "Automatic irrigation & fertilization",
    description: "Double tank system provides precise watering and nutrition based on your plant's real-time needs."
  },
  {
    icon: Smartphone,
    title: "Advanced sensors with real-time data",
    description: "Monitor humidity, temperature, light, and pH levels with instant updates to your smartphone."
  },
  {
    icon: Leaf,
    title: "Full control from your app", 
    description: "AI diagnostics, care reminders, and expert tips delivered straight to your phone."
  },
  {
    icon: Palette,
    title: "Premium & customizable design",
    description: "Modular, aesthetic design that complements your home while keeping your plants thriving."
  }
];

export const Benefits = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl font-bold mb-4">
            Why choose <span className="bg-gradient-hero bg-clip-text text-transparent">EcoSense</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Advanced technology meets beautiful design for effortless plant care
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-gradient-card p-6 rounded-2xl shadow-soft hover-lift animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-primary-light p-3 rounded-xl w-fit mb-4">
                <benefit.icon className="h-6 w-6 text-primary" />
              </div>
              
              <h3 className="font-semibold text-lg mb-3 leading-tight">
                {benefit.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};