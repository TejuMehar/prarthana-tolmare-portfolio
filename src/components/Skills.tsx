import { Users, Briefcase, BarChart3 } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const Skills = () => {
  const skillCategories = [
    {
      icon: Briefcase,
      title: "Recruitment Expertise",
      skills: [
        { name: "Full-Cycle Recruiting", level: 90 },
        { name: "Technical & Non-Technical Sourcing", level: 88 },
        { name: "Boolean Search Techniques", level: 85 },
        { name: "Interview Coordination & Scheduling", level: 90 },
        { name: "Offer Negotiation & Closing", level: 82 },
      ],
    },
    {
      icon: BarChart3,
      title: "Hiring Operations",
      skills: [
        { name: "Pipeline Reporting & Dashboards", level: 80 },
        { name: "Candidate Tracking & Follow-ups", level: 85 },
        { name: "Stakeholder Communication", level: 88 },
        { name: "Time Management", level: 85 },
        { name: "Process Optimization", level: 78 },
      ],
    },
    {
      icon: Users,
      title: "People & Communication",
      skills: [
        { name: "Strong Interpersonal Skills", level: 92 },
        { name: "Relationship Building", level: 90 },
        { name: "Critical Thinking", level: 85 },
        { name: "Problem Solving", level: 82 },
        { name: "Professional Communication", level: 90 },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="relative py-24 px-4 sm:px-6 lg:px-8
      bg-gradient-to-b from-[#f8f4ff] via-[#edd7c9]/70 to-[#f8f4ff]
      dark:from-[#0f172a] dark:via-[#1e293b] dark:to-[#0f172a]"
    >
      <div className="container mx-auto max-w-7xl">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Skills & Expertise
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A comprehensive overview of my recruiting capabilities and
            professional strengths
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="p-8 rounded-2xl bg-white/70 dark:bg-white/5
              backdrop-blur-md border border-border
              hover:shadow-xl hover:-translate-y-2
              transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <div
                  className="w-12 h-12 bg-primary/10 rounded-xl
                  flex items-center justify-center mr-4"
                >
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
                      <span className="text-foreground font-medium text-sm">
                        {skill.name}
                      </span>
                      <span className="text-muted-foreground text-xs">
                        {skill.level}%
                      </span>
                    </div>
                    <Progress value={skill.level} className="h-2 bg-muted" />
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Tools & Platforms */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-center text-foreground mb-8">
            Tools & Platforms
          </h3>

          <div className="flex flex-wrap justify-center gap-3">
            {[
              "LinkedIn Recruiter",
              "Indeed Recruiter",
              "Dice",
              "Monster Career Builder",
              "Internal Databases",
              "Microsoft Office Suite",
              "Google Workspace",
              "Slack",
              "Microsoft Teams",
              "Zoom",
              "Google Meet",
              "ATS Platforms",
              "Job Boards",
            ].map((tool, index) => (
              <span
                key={index}
                className="px-4 py-2 rounded-full text-sm font-medium
                bg-secondary text-secondary-foreground
                hover:bg-primary hover:text-primary-foreground
                transition-colors duration-200 cursor-default"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
