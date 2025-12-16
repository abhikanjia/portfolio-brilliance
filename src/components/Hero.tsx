import { ArrowDown, Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden hero-gradient geometric-pattern">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-pulse-slow delay-200" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-primary/5 rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-primary/5 rounded-full" />
      </div>

      <div className="section-container relative z-10 text-center">
        {/* Status badge */}
        <div className="animate-slide-up opacity-0 mb-8">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            Available for opportunities
          </span>
        </div>

        {/* Name */}
        <h1 className="animate-slide-up opacity-0 delay-100 text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight">
          <span className="text-foreground">Abhi</span>
          <span className="gradient-text"> Kanjia</span>
        </h1>

        {/* Title */}
        <p className="animate-slide-up opacity-0 delay-200 text-xl md:text-2xl text-muted-foreground mb-4 font-medium">
          Software Developer & AI Automation Specialist
        </p>

        {/* Tagline */}
        <p className="animate-slide-up opacity-0 delay-300 text-lg text-muted-foreground/80 max-w-2xl mx-auto mb-10">
          Transforming ideas into intelligent, automated solutions. Building the future with AI-powered applications and seamless workflows.
        </p>

        {/* Contact info */}
        <div className="animate-slide-up opacity-0 delay-400 flex flex-wrap justify-center gap-4 mb-12">
          <a 
            href="mailto:kanjiaabhi@gmail.com" 
            className="flex items-center gap-2 px-4 py-2 glass-card hover-lift text-sm"
          >
            <Mail className="w-4 h-4 text-primary" />
            <span>kanjiaabhi@gmail.com</span>
          </a>
          <a 
            href="tel:+918128074615" 
            className="flex items-center gap-2 px-4 py-2 glass-card hover-lift text-sm"
          >
            <Phone className="w-4 h-4 text-primary" />
            <span>+91 8128074615</span>
          </a>
          <div className="flex items-center gap-2 px-4 py-2 glass-card text-sm">
            <MapPin className="w-4 h-4 text-primary" />
            <span>Morbi, Gujarat, India</span>
          </div>
        </div>

        {/* Social links */}
        <div className="animate-slide-up opacity-0 delay-500 flex justify-center gap-4 mb-16">
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-4 glass-card hover-lift group"
          >
            <Github className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
          </a>
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-4 glass-card hover-lift group"
          >
            <Linkedin className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="animate-slide-up opacity-0 delay-600">
          <a href="#about" className="inline-flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
            <span className="text-sm">Scroll to explore</span>
            <ArrowDown className="w-5 h-5 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;