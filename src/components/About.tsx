import { Heart, Users, TrendingUp, Lightbulb } from "lucide-react";
import { Card } from "@/components/ui/card";
import profilePicture from "@/assets/profile-picture.jpg";

const About = () => {
  const values = [
    {
      icon: Lightbulb,
      title: "Curious Thinker",
      description: "Always asking 'why' and 'how can we do this better?'"
    },
    {
      icon: Users,
      title: "Team Player",
      description: "Believes in the power of collaboration and diverse perspectives"
    },
    {
      icon: TrendingUp,
      title: "Growth Oriented",
      description: "Continuously learning and adapting to new challenges"
    },
    {
      icon: Heart,
      title: "Good Human First",
      description: "Values kindness, empathy, and meaningful connections"
    }
  ];

  return (
    <section id="about" className="py-20 px-6 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            About Me
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Get to know the person behind the code
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Profile Image */}
          <div className="flex justify-center animate-fade-in">
            <div className="relative group">
              <div className="w-80 h-80 overflow-hidden shadow-xl border-4 border-primary transition-all duration-500 group-hover:scale-105 group-hover:shadow-primary/50" style={{clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)'}}>
                <img
                  src={profilePicture}
                  alt="Aditi Yadav"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute -z-10 inset-0 bg-gradient-to-br from-primary/30 to-secondary/30 blur-xl transition-all duration-500 group-hover:blur-2xl group-hover:scale-110" style={{clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)'}}></div>
            </div>
          </div>

          {/* About Content */}
          <div className="animate-slide-in-left">
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Aditi Yadav
            </h3>
            
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I'm a Computer Science student with a passion for frontend development and an 
                emerging interest in data analytics. What drives me isn't just the technology 
                itself, but the potential to create meaningful solutions that connect people 
                and solve real-world problems.
              </p>
              
              <p>
                I believe that being a good human comes first – before being a good developer, 
                teammate, or professional. This philosophy guides everything I do, from how I 
                approach collaborative projects to the way I design user experiences.
              </p>
              
              <p>
                Currently pursuing my B.E in Computer Science (graduating in 2027), I'm 
                constantly exploring new technologies and methodologies.
              </p>
              
              <p>
                When I'm not coding, you'll find me learning something new, collaborating with 
                peers, or working on projects that make a positive impact. I'm particularly 
                excited about the intersection of frontend development and data science, and 
                how these fields can work together to create more intelligent, user-centered 
                applications.
              </p>
            </div>

            {/* Education */}
            <div className="mt-8 p-6 bg-card rounded-lg border border-border">
              <h4 className="text-lg font-semibold text-foreground mb-2">Education</h4>
              <p className="text-muted-foreground">
                <span className="font-medium">B.E in Computer Science</span><br />
                Expected Graduation: 2027
              </p>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div>
          <h3 className="text-2xl font-bold text-center text-foreground mb-8">
            My Values
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card
                key={index}
                className="p-6 text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 bg-card border-border"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-2">
                  {value.title}
                </h4>
                <p className="text-muted-foreground text-sm">
                  {value.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;