import { Calendar, MapPin, Building, Award } from "lucide-react";
import { Card } from "@/components/ui/card";

const Experience = () => {
  const experiences = [
    {
      title: "Web Development Intern",
      company: "Unified Mentor",
      location: "Remote",
      period: "Present",
      status: "Current",
      description: "Working on modern web development projects, focusing on React.js and responsive design principles. Contributing to real-world applications and learning industry best practices.",
      highlights: [
        "Developing responsive web applications using React.js",
        "Collaborating with cross-functional teams",
        "Implementing modern UI/UX design patterns",
        "Code review and version control with Git"
      ]
    },
    {
      title: "AI-ML Virtual Internship",
      company: "EduSkills/AICTE",
      location: "Remote",
      period: "July 2024 - September 2024",
      status: "Completed",
      description: "Intensive program focusing on machine learning algorithms and their practical applications. Gained hands-on experience with Python, data analysis, and cloud platforms.",
      highlights: [
        "Implemented various ML algorithms from scratch",
        "Worked with Python libraries (NumPy, Pandas, Scikit-learn)",
        "Explored Google Cloud Platform services",
        "Completed real-world data analysis projects"
      ]
    }
  ];

  return (
    <section id="experience" className="relative min-h-screen flex items-center pt-20 px-6 
      bg-gradient-to-b from-[#f8f4ff] via-[#edd7c9]
      dark:from-[#7198cf] dark:via-[#1e293b] dark:to-[#7198cf]">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Experience
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            My professional journey and learning experiences
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-6 md:left-1/2 md:transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-primary/20"></div>

            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex ${
                  index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'
                } mb-12 animate-fade-in`}
                style={{ animationDelay: `${index * 0.3}s` }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background z-10 animate-pulse hover:scale-125 transition-transform duration-300">
                  <div className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75"></div>
                </div>

                {/* Content */}
                <Card
                  className={`w-full md:w-5/12 ml-12 md:ml-0 p-6 bg-card border-border hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 group relative overflow-hidden ${
                    index % 2 === 0 ? 'md:mr-auto md:ml-0' : 'md:ml-auto md:mr-0'
                  }`}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-1">
                        {exp.title}
                      </h3>
                      <div className="flex items-center text-primary font-medium mb-2">
                        <Building className="w-4 h-4 mr-2" />
                        {exp.company}
                      </div>
                    </div>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        exp.status === 'Current'
                          ? 'bg-primary/10 text-primary'
                          : 'bg-secondary text-secondary-foreground'
                      }`}
                    >
                      {exp.status}
                    </span>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-4 text-muted-foreground">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      {exp.period}
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-2" />
                      {exp.location}
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {exp.description}
                  </p>

                  <div>
                    <h4 className="font-semibold text-foreground mb-2 flex items-center">
                      <Award className="w-4 h-4 mr-2" />
                      Key Highlights
                    </h4>
                    <ul className="space-y-1">
                      {exp.highlights.map((highlight, highlightIndex) => (
                        <li
                          key={highlightIndex}
                          className="text-muted-foreground text-sm flex items-start"
                        >
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Card className="inline-block p-6 bg-gradient-to-r from-primary/5 to-secondary/5 border-primary/20">
            <h3 className="text-lg font-semibold text-foreground mb-2">
              Looking for New Opportunities
            </h3>
            <p className="text-muted-foreground mb-4">
              I'm always excited to explore new challenges and learning opportunities
            </p>
            <button
              onClick={() => {
                const element = document.querySelector("#contact");
                if (element) element.scrollIntoView({ behavior: "smooth" });
              }}
              className="text-primary hover:text-primary-hover font-medium transition-colors"
            >
              Let's Connect →
            </button>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Experience;