import { ArrowUpRight, Bot, Database, Workflow } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      icon: Workflow,
      title: "AI-Powered Automation System",
      subtitle: "Agentic Workflows",
      description: "Built and automated multiple business workflows using n8n, enabling complete end-to-end automation across operational tasks and business processes.",
      highlights: [
        "Fully automated billing management system with invoice generation and payment tracking",
        "Integrated with external APIs for email, billing, and automated reminders",
        "Recurring billing cycles with automatic payment confirmations",
      ],
      technologies: ["n8n", "JavaScript", "REST APIs", "Webhooks"],
      gradient: "from-primary to-cyan-400",
    },
    {
      icon: Database,
      title: "Stock Management System",
      subtitle: "MERN Application",
      description: "Complete stock and inventory management system enabling businesses to manage products, track stock levels, and automate inventory updates.",
      highlights: [
        "ReactJS frontend with reusable components and clean UI/UX",
        "Real-time data updates using REST APIs",
        "Node.js + Express backend with structured APIs",
        "MongoDB for scalable data storage",
      ],
      technologies: ["ReactJS", "Node.js", "Express", "MongoDB"],
      gradient: "from-accent to-pink-400",
    },
  ];

  return (
    <section id="projects" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-secondary/30" />
      <div className="section-container relative">
        <div className="text-center mb-16">
          <span className="inline-block text-primary font-mono text-sm mb-4 tracking-wider">
            // FEATURED PROJECTS
          </span>
          <h2 className="text-4xl md:text-5xl font-bold">
            Recent <span className="gradient-text">Work</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Showcasing projects that demonstrate my expertise in AI automation, full-stack development, and creating impactful solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.title}
              className="group glass-card overflow-hidden hover-lift"
            >
              {/* Header with gradient */}
              <div className={`relative h-48 bg-gradient-to-br ${project.gradient} p-8 flex items-end`}>
                <div className="absolute inset-0 bg-background/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute top-6 right-6 w-16 h-16 rounded-2xl bg-background/20 backdrop-blur flex items-center justify-center">
                  <project.icon className="w-8 h-8 text-foreground" />
                </div>
                <div className="relative">
                  <span className="text-sm font-mono text-foreground/80">{project.subtitle}</span>
                  <h3 className="text-2xl font-bold text-foreground mt-1">{project.title}</h3>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <p className="text-muted-foreground mb-6">{project.description}</p>

                <div className="space-y-3 mb-6">
                  {project.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex gap-3">
                      <ArrowUpRight className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                      <span className="text-sm text-muted-foreground">{highlight}</span>
                    </div>
                  ))}
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 rounded-full bg-muted text-xs font-medium text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional project highlight */}
        <div className="mt-8 glass-card p-8 hover-lift">
          <div className="flex flex-col md:flex-row md:items-center gap-6">
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
              <Bot className="w-8 h-8 text-primary" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold mb-2">AI Chatbot with Long-Term Memory</h3>
              <p className="text-muted-foreground">
                Integrated ChromaDB as a vector database to enable contextual continuity and smarter AI interactions 
                for the Help Center chatbot, significantly improving user support experience.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {["ChromaDB", "Vector DB", "AI", "NLP"].map((tech) => (
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
    </section>
  );
};

export default Projects;