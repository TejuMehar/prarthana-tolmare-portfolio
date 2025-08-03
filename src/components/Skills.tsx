import { Code, Database, Wrench, Users } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: "Languages",
      skills: [
        { name: "JavaScript", level: 85 },
        { name: "Python", level: 80 },
        { name: "C++", level: 75 },
        { name: "C", level: 70 },
        { name: "SQL", level: 65 }
      ]
    },
    {
      icon: Wrench,
      title: "Frameworks & Tools",
      skills: [
        { name: "React.js", level: 80 },
        { name: "HTML/CSS", level: 90 },
        { name: "VS Code", level: 85 },
        { name: "GitHub", level: 75 },
        { name: "Google Cloud", level: 60 }
      ]
    },
    {
      icon: Users,
      title: "Soft Skills",
      skills: [
        { name: "Teamwork", level: 90 },
        { name: "Adaptability", level: 85 },
        { name: "Decision Making", level: 80 },
        { name: "Presentation", level: 75 },
        { name: "Leadership", level: 70 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Skills & Technologies
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A comprehensive overview of my technical abilities and soft skills
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <Card
              key={categoryIndex}
              className="p-6 bg-card border-border hover:shadow-lg transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${categoryIndex * 0.2}s` }}
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                  <category.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-foreground font-medium">
                        {skill.name}
                      </span>
                      <span className="text-muted-foreground text-sm">
                        {skill.level}%
                      </span>
                    </div>
                    <Progress
                      value={skill.level}
                      className="h-2 bg-muted"
                    />
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Additional Skills Grid */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center text-foreground mb-8">
            Technologies I Work With
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "React", "JavaScript", "Python", "C++", "HTML/CSS", "SQL",
              "VS Code", "GitHub", "Google Cloud", "Machine Learning",
              "Data Analytics", "UI/UX Design", "Responsive Design",
              "API Integration", "Version Control", "Agile Methodology"
            ].map((tech, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors duration-200 cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;