import { Heart, Users, TrendingUp, Lightbulb } from "lucide-react";
import { Card } from "@/components/ui/card";
import prarthana2 from "@/assets/prarthana2.jpeg";

const About = () => {
  const values = [
    {
      icon: Lightbulb,
      title: "Strategic Thinker",
      description:
        "Approaches hiring challenges with clarity, insight, and purpose.",
    },
    {
      icon: Users,
      title: "People-Centered",
      description:
        "Builds trust through empathy, communication, and collaboration.",
    },
    {
      icon: TrendingUp,
      title: "Growth Focused",
      description:
        "Continuously evolving with hiring trends and market demands.",
    },
    {
      icon: Heart,
      title: "Human First",
      description: "Believes meaningful connections drive successful hiring.",
    },
  ];

  return (
    <section
      id="about"
      className="relative py-28 px-6 overflow-hidden
      bg-gradient-to-b from-[#f8f4ff] via-[#edd7c9]/60 to-[#f8f4ff]
      dark:from-[#0f172a] dark:via-[#1e293b] dark:to-[#0f172a]"
    >
      {/* Background Glow */}
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl" />

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-4">
            About Me
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A people-first approach to building strong, high-performing teams
          </p>
        </div>

        {/* Profile + Bio */}
        <div className="grid lg:grid-cols-2 gap-14 items-center mb-24">
          {/* Profile Image */}
          <div className="flex justify-center">
            <div className="relative group">
              <div
                className="w-72 h-96 md:w-80 md:h-[26rem] rounded-2xl overflow-hidden
                border border-primary/30 shadow-2xl
                transition-all duration-500
                group-hover:scale-[1.03] group-hover:shadow-primary/40"
              >
                <img
                  src={prarthana2}
                  alt="Prarthana Tolmare"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Glow */}
              <div
                className="absolute -z-10 inset-0 rounded-2xl
                bg-gradient-to-br from-primary/30 to-secondary/30
                blur-2xl opacity-70 group-hover:opacity-100
                transition-all duration-500"
              />
            </div>
          </div>

          {/* Content */}
          <div>
            <h3 className="text-3xl font-bold text-foreground mb-6">
              Prarthana Tolmare
            </h3>

            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p>
                I’m a US Technical Recruiter focused on connecting organizations
                with the right technical talent through thoughtful, people-first
                hiring practices. My work balances business goals with candidate
                aspirations to create long-term success.
              </p>

              <p>
                I believe effective recruitment is built on transparency,
                communication, and trust. Every interaction is approached with
                empathy and professionalism to ensure a strong candidate and
                hiring-team experience.
              </p>

              <p>
                I stay closely aligned with evolving hiring trends, technical
                expectations, and market insights to support scalable and
                efficient hiring strategies.
              </p>

              <p>
                Beyond active hiring, I focus on relationship-building,
                continuous process improvement, and meaningful engagement that
                helps teams grow sustainably.
              </p>
            </div>

            {/* Education */}
            <div
              className="mt-10 p-6 rounded-2xl border border-border
              bg-white/60 dark:bg-white/5 backdrop-blur-md shadow-sm"
            >
              <h4 className="text-lg font-semibold text-foreground mb-2">
                Education
              </h4>
              <p className="text-muted-foreground">
                Savitribai Phule Pune University —{" "}
                <span className="font-medium">
                  MBA (HR Specialization) · ZIBACAR
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* Values */}
        <div>
          <h3 className="text-3xl font-bold text-center text-foreground mb-14">
            Core Values
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className="p-8 text-center rounded-2xl
                bg-white/70 dark:bg-white/5 backdrop-blur-md
                border border-border
                hover:shadow-xl hover:-translate-y-2
                transition-all duration-300"
              >
                <div
                  className="w-16 h-16 bg-primary/10 rounded-full
                  flex items-center justify-center mx-auto mb-5"
                >
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
