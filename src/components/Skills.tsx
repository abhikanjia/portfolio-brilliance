const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Java", "JavaScript", "C"],
    },
    {
      title: "Web Technologies",
      skills: ["ReactJS", "HTML/CSS", "Node.js", "Express"],
    },
    {
      title: "Databases",
      skills: ["MongoDB", "MySQL", "ChromaDB"],
    },
    {
      title: "Tools & Platforms",
      skills: ["n8n (Automation)", "GitHub", "Agno (Agentic AI)", "Cursor AI"],
    },
  ];

  return (
    <section id="skills" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-secondary/30" />
      <div className="section-container relative">
        <div className="text-center mb-16">
          <span className="inline-block text-primary font-mono text-sm mb-4 tracking-wider">
            // TECHNICAL SKILLS
          </span>
          <h2 className="text-4xl md:text-5xl font-bold">
            My <span className="gradient-text">Tech Stack</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category) => (
            <div 
              key={category.title} 
              className="glass-card p-8 hover-lift"
            >
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-primary" />
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <span 
                    key={skill}
                    className="px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary font-medium text-sm hover:bg-primary/20 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tech icons decoration */}
        <div className="mt-16 flex flex-wrap justify-center gap-4">
          {["Java", "React", "Node.js", "MongoDB", "n8n", "Git", "AI", "Express"].map((tech) => (
            <span 
              key={tech}
              className="px-4 py-2 rounded-full border border-border/50 text-sm text-muted-foreground hover:border-primary/50 hover:text-primary transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;