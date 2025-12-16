const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "Java", level: 85 },
        { name: "JavaScript", level: 90 },
        { name: "C", level: 75 },
      ],
    },
    {
      title: "Web Technologies",
      skills: [
        { name: "ReactJS", level: 88 },
        { name: "HTML/CSS", level: 92 },
        { name: "Node.js", level: 82 },
        { name: "Express", level: 80 },
      ],
    },
    {
      title: "Databases",
      skills: [
        { name: "MongoDB", level: 85 },
        { name: "MySQL", level: 80 },
        { name: "ChromaDB", level: 75 },
      ],
    },
    {
      title: "Tools & Platforms",
      skills: [
        { name: "n8n (Automation)", level: 90 },
        { name: "GitHub", level: 88 },
        { name: "Agno (Agentic AI)", level: 82 },
        { name: "Cursor AI", level: 85 },
      ],
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
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={category.title} 
              className="glass-card p-8 hover-lift"
            >
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-primary" />
                {category.title}
              </h3>
              <div className="space-y-5">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-primary font-mono text-sm">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-bar-fill transition-all duration-1000 ease-out"
                        style={{ 
                          width: `${skill.level}%`,
                          animationDelay: `${(categoryIndex * 4 + skillIndex) * 100}ms`
                        }}
                      />
                    </div>
                  </div>
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