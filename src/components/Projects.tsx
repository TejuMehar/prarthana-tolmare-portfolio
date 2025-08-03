import { ExternalLink, Github, Shield, Newspaper, Brain } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "ResQall - Voice Activated SOS App",
      description: "A life-saving mobile application that activates emergency protocols through secret voice commands. When triggered, it captures photos and audio evidence while automatically sending distress alerts via email to emergency contacts.",
      icon: Shield,
      features: [
        "Secret voice command activation",
        "Automatic photo & audio capture",
        "Emergency email alerts",
        "Privacy-focused design",
        "Quick response system"
      ],
      technologies: ["React Native", "Voice Recognition API", "Camera API", "Email Integration"],
      category: "Mobile App",
      color: "from-red-400 to-pink-400",
      githubLink: "https://github.com/bhavani-2710/resQall"
    },
    {
      title: "Personalized News Aggregator",
      description: "An intelligent news platform that learns user preferences to deliver customized news content. Features smart recommendations, content filtering, and a 'save for later' functionality for seamless news consumption.",
      icon: Newspaper,
      features: [
        "AI-powered recommendations",
        "User preference learning",
        "Content categorization",
        "Save for later functionality",
        "Responsive design"
      ],
      technologies: ["React.js", "News API", "Machine Learning", "Local Storage"],
      category: "Web App",
      color: "from-blue-400 to-cyan-400",
      githubLink: "https://github.com/bhavani-2710/Personalized-News-Aggregator"
    },
    {
      title: "Aptitude Portal",
      description: "An adaptive learning platform powered by AI that provides personalized aptitude tests. Features comprehensive analytics, performance tracking, and intelligent question adaptation based on user responses.",
      icon: Brain,
      features: [
        "Adaptive question difficulty",
        "Performance analytics",
        "User progress tracking",
        "Multiple test categories",
        "Real-time scoring"
      ],
      technologies: ["React.js", "PHP", "MySQL", "AI Algorithms"],
      category: "Learning Platform",
      color: "from-purple-400 to-indigo-400",
      githubLink: "https://github.com/jaypatelll1/csi-aptitude-portal"
    }
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Featured Projects
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Showcasing real-world solutions that combine technical innovation with human-centered design
          </p>
        </div>

        <div className="grid lg:grid-cols-1 gap-8 max-w-4xl mx-auto">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group overflow-hidden bg-card border-border hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="p-8">
                <div className="flex flex-col lg:flex-row gap-8">
                  {/* Project Icon & Category */}
                  <div className="flex-shrink-0">
                    <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${project.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <project.icon className="w-10 h-10 text-white" />
                    </div>
                    <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                      {project.category}
                    </span>
                  </div>

                  {/* Project Content */}
                  <div className="flex-grow">
                    <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Features */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-foreground mb-3">Key Features:</h4>
                      <div className="grid sm:grid-cols-2 gap-2">
                        {project.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-start">
                            <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            <span className="text-muted-foreground text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Technologies */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-foreground mb-3">Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-xs font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3">
                      <Button 
                        variant="outline" 
                        size="sm"
                        className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                        onClick={() => window.open(project.githubLink, '_blank')}
                      >
                        <Github className="w-4 h-4 mr-2" />
                        View Code
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h3 className="text-xl font-semibold text-foreground mb-4">
            Interested in collaborating?
          </h3>
          <p className="text-muted-foreground mb-6">
            I'm always excited to work on meaningful projects that make a difference
          </p>
          <Button
            onClick={() => {
              const element = document.querySelector("#contact");
              if (element) element.scrollIntoView({ behavior: "smooth" });
            }}
            className="bg-primary hover:bg-primary-hover text-primary-foreground px-8 py-3 rounded-full"
          >
            Let's Build Something Together
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;