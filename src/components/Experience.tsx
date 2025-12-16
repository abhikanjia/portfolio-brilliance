import { Briefcase, Calendar, CheckCircle2 } from "lucide-react";

const Experience = () => {
  const experience = {
    company: "iSmartRecruit",
    role: "Software Developer",
    period: "Jan 2025 - Present",
    location: "Remote",
    achievements: [
      "Implemented AI-powered features including a Co-pilot assistant and developed an interactive Help Center chatbot to enhance user support and system navigation",
      "Designed and automated a sales outreach workflow using n8n, streamlining lead generation and follow-ups for the sales team",
      "Built a negotiation agent for the marketing team to automate and manage link exchange partnerships, improving backlink strategy and SEO outcomes",
      "Integrated ChromaDB as a vector database to store and retrieve long-term chatbot memory, enabling contextual continuity and smarter AI interactions",
    ],
  };

  return (
    <section id="experience" className="relative overflow-hidden geometric-pattern">
      <div className="section-container">
        <div className="text-center mb-16">
          <span className="inline-block text-primary font-mono text-sm mb-4 tracking-wider">
            // WORK EXPERIENCE
          </span>
          <h2 className="text-4xl md:text-5xl font-bold">
            Professional <span className="gradient-text">Journey</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="relative">
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/50 to-transparent transform md:-translate-x-1/2" />

            {/* Experience card */}
            <div className="relative pl-8 md:pl-0 md:grid md:grid-cols-2 gap-8">
              {/* Left side - Date badge */}
              <div className="hidden md:flex justify-end items-start pt-2">
                <div className="flex items-center gap-2 px-4 py-2 glass-card text-sm">
                  <Calendar className="w-4 h-4 text-primary" />
                  <span>{experience.period}</span>
                </div>
              </div>

              {/* Timeline dot */}
              <div className="absolute left-0 md:left-1/2 top-2 w-4 h-4 rounded-full bg-primary transform md:-translate-x-1/2 animate-glow" />

              {/* Right side - Experience details */}
              <div className="glass-card p-8 hover-lift">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Briefcase className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">{experience.role}</h3>
                    <p className="text-lg text-primary font-medium">{experience.company}</p>
                    <p className="text-sm text-muted-foreground md:hidden mt-1">{experience.period}</p>
                  </div>
                </div>

                <div className="space-y-4">
                  {experience.achievements.map((achievement, index) => (
                    <div 
                      key={index} 
                      className="flex gap-3 group"
                    >
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                      <p className="text-muted-foreground leading-relaxed">{achievement}</p>
                    </div>
                  ))}
                </div>

                {/* Tech used */}
                <div className="mt-8 pt-6 border-t border-border/50">
                  <p className="text-sm text-muted-foreground mb-3">Technologies used:</p>
                  <div className="flex flex-wrap gap-2">
                    {["n8n", "ChromaDB", "JavaScript", "AI/ML", "REST APIs"].map((tech) => (
                      <span 
                        key={tech}
                        className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
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

export default Experience;