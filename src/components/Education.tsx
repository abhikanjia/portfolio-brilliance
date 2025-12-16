import { GraduationCap, Award, BookOpen } from "lucide-react";

const Education = () => {
  const education = [
    {
      icon: GraduationCap,
      degree: "B.Tech (Computer Science Engineering)",
      institution: "Darshan University",
      period: "2021 - 2025",
      score: "CGPA: 8.15",
    },
    {
      icon: BookOpen,
      degree: "Higher Secondary Education (HSC)",
      institution: "Nalanda Vidyalaya, Morbi",
      period: "2021",
      score: "88.6%",
      board: "Gujarat Board",
    },
    {
      icon: Award,
      degree: "Secondary Education (SSC)",
      institution: "Sarvopari School, Morbi",
      period: "2019",
      score: "90.83%",
      board: "Gujarat Board",
    },
  ];

  return (
    <section id="education" className="relative overflow-hidden geometric-pattern">
      <div className="section-container">
        <div className="text-center mb-16">
          <span className="inline-block text-primary font-mono text-sm mb-4 tracking-wider">
            // EDUCATION
          </span>
          <h2 className="text-4xl md:text-5xl font-bold">
            Academic <span className="gradient-text">Background</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {education.map((item) => (
            <div 
              key={item.degree}
              className="glass-card p-8 hover-lift flex flex-col md:flex-row gap-6 items-start"
            >
              <div className="w-16 h-16 rounded-2xl bg-muted flex items-center justify-center flex-shrink-0">
                <item.icon className="w-8 h-8 text-muted-foreground" />
              </div>

              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
                  <h3 className="text-xl font-bold">
                    {item.degree}
                  </h3>
                  <span className="text-sm font-mono text-muted-foreground">{item.period}</span>
                </div>
                <p className="text-muted-foreground mb-3">{item.institution}</p>
                <div className="flex flex-wrap gap-3">
                  <span className="px-3 py-1 rounded-full bg-muted text-muted-foreground text-sm font-medium">
                    {item.score}
                  </span>
                  {item.board && (
                    <span className="px-3 py-1 rounded-full bg-muted text-muted-foreground text-sm">
                      {item.board}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;