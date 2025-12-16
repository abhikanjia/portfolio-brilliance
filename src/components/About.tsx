import { Code2, Cpu, Sparkles, Zap } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: "Full-Stack Development",
      description: "Building robust applications with MERN stack and modern technologies",
    },
    {
      icon: Cpu,
      title: "AI Integration",
      description: "Implementing intelligent features with Co-pilots and chatbots",
    },
    {
      icon: Zap,
      title: "Workflow Automation",
      description: "Streamlining business processes with n8n and custom workflows",
    },
    {
      icon: Sparkles,
      title: "Problem Solving",
      description: "Strong foundation in algorithms and innovative solutions",
    },
  ];

  return (
    <section id="about" className="relative overflow-hidden geometric-pattern">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div>
            <span className="inline-block text-primary font-mono text-sm mb-4 tracking-wider">
              // ABOUT ME
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Turning <span className="gradient-text">Complex Problems</span> Into Elegant Solutions
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              I'm an enthusiastic and dedicated Computer Science Engineering student with a strong foundation 
              in programming, algorithms, and problem-solving. Currently working as a Software Developer at 
              iSmartRecruit, where I build AI-powered features and automate business workflows.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              My passion lies in creating intelligent systems that not only solve problems but anticipate 
              needs. From developing interactive chatbots to building complete automation pipelines, I thrive 
              on challenges that push the boundaries of what's possible.
            </p>

            {/* Stats */}
            <div className="flex gap-8">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold gradient-text">8.15</div>
                <div className="text-sm text-muted-foreground mt-1">CGPA</div>
              </div>
              <div className="w-px bg-border" />
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold gradient-text">2025</div>
                <div className="text-sm text-muted-foreground mt-1">Graduation</div>
              </div>
              <div className="w-px bg-border" />
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold gradient-text">6+</div>
                <div className="text-sm text-muted-foreground mt-1">Months Exp</div>
              </div>
            </div>
          </div>

          {/* Right content - Highlights grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <div 
                key={item.title}
                className="glass-card p-6 hover-lift group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;