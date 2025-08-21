import { Code, Wrench, Users } from "lucide-react";
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
        { name: "SQL", level: 65 },
      ],
    },
    {
      icon: Wrench,
      title: "Frameworks & Tools",
      skills: [
        { name: "React.js", level: 80 },
        { name: "HTML/CSS", level: 90 },
        { name: "VS Code", level: 85 },
        { name: "GitHub", level: 75 },
        { name: "Google Cloud", level: 60 },
      ],
    },
    {
      icon: Users,
      title: "Soft Skills",
      skills: [
        { name: "Teamwork", level: 90 },
        { name: "Adaptability", level: 85 },
        { name: "Decision Making", level: 80 },
        { name: "Presentation", level: 75 },
        { name: "Leadership", level: 70 },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="relative min-h-screen flex items-center pt-20 px-4 sm:px-6 lg:px-8 
      bg-gradient-to-b from-[#f8f4ff] via-[#edd7c9] 
      dark:from-[#7198cf] dark:via-[#1e293b] dark:to-[#7198cf]"
    >
      <div className="container mx-auto max-w-7xl">
        {/* Section Heading */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4">
            Skills & Technologies
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto px-2">
            A comprehensive overview of my technical abilities and soft skills
          </p>
        </div>

        {/* Main Skills Grid */}
        <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, categoryIndex) => (
            <Card
              key={categoryIndex}
              className="p-5 sm:p-6 bg-card border-border hover:shadow-lg transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${categoryIndex * 0.2}s` }}
            >
              <div className="flex items-center mb-4 sm:mb-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-3 sm:mr-4">
                  <category.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-foreground">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-3 sm:space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-1 sm:space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-foreground text-sm sm:text-base font-medium">
                        {skill.name}
                      </span>
                      <span className="text-muted-foreground text-xs sm:text-sm">
                        {skill.level}%
                      </span>
                    </div>
                    <Progress value={skill.level} className="h-1.5 sm:h-2 bg-muted" />
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Extra Skills Grid */}
        <div className="mt-12 sm:mt-16">
          <h3 className="text-xl sm:text-2xl font-bold text-center text-foreground mb-6 sm:mb-8">
            Technologies I Work With
          </h3>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
            {[
              "React",
              "JavaScript",
              "Python",
              "C++",
              "HTML/CSS",
              "SQL",
              "VS Code",
              "GitHub",
              "Google Cloud",
              "UI/UX Design",
              "Responsive Design",
              "API Integration",
              "Version Control",
              "Agile Methodology",
            ].map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1.5 sm:px-4 sm:py-2 bg-secondary text-secondary-foreground 
                rounded-full text-xs sm:text-sm font-medium 
                hover:bg-primary hover:text-primary-foreground 
                transition-colors duration-200 cursor-default"
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
