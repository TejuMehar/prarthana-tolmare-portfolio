import { Calendar, MapPin, Building, Award } from "lucide-react";
import { Card } from "@/components/ui/card";

const Experience = () => {
  const experiences = [
    {
      title: "US Technical Recruiter",
      company: "Intigrow Staffing Agency",
      location: "Remote / US Market",
      period: "Jan 2025 – Present",
      status: "Current",
      description:
        "Managing full-cycle recruitment for technical and non-technical roles in a fast-paced staffing environment, partnering closely with clients and hiring managers to deliver high-quality talent.",
      highlights: [
        "Managed end-to-end recruitment from sourcing to onboarding",
        "Sourced candidates using LinkedIn Recruiter, CareerBuilder, Monster, and internal databases",
        "Applied advanced Boolean search techniques to identify top talent",
        "Coordinated and scheduled interviews to ensure a smooth hiring process",
        "Led offer negotiation and closing in collaboration with account managers",
        "Maintained candidate pipelines and generated reports and dashboards",
        "Built strong relationships with hiring managers to align talent strategy with business needs",
        "Utilized strong interpersonal, communication, and problem-solving skills to meet hiring targets",
      ],
    },
    {
      title: "Recruiting Coordinator (Intern)",
      company: "Upgrade Consulting Pvt. Ltd.",
      location: "India",
      period: "May 2024 – Aug 2024",
      status: "Completed",
      description:
        "Contributed to recruitment operations and research through an academic project focused on the effectiveness of e-recruitment in modern talent acquisition.",
      highlights: [
        "Conducted a project titled “A Study on the Effectiveness of Talent Acquisition through E-Recruitment”",
        "Analyzed the impact of job portals and professional networking platforms like LinkedIn",
        "Studied how organizations leverage e-recruitment to improve efficiency and reduce hiring costs",
        "Explored benefits of global talent reach and faster hiring cycles through digital recruitment",
        "Evaluated how e-recruitment tools enhance candidate quality and hiring outcomes",
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="relative py-28 px-4 sm:px-6 lg:px-12
      bg-gradient-to-b from-[#f8f4ff] via-[#edd7c9]/70 to-[#f8f4ff]
      dark:from-[#0f172a] dark:via-[#1e293b] dark:to-[#0f172a]"
    >
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-4">
            Professional Experience
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            My journey in recruitment, talent strategy, and people-focused
            hiring
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-6 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-primary/20" />

          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`relative flex flex-col md:flex-row mb-16 ${
                index % 2 === 0 ? "md:justify-start" : "md:justify-end"
              }`}
            >
              {/* Dot */}
              <div
                className="absolute left-4 md:left-1/2 md:-translate-x-1/2
                w-4 h-4 bg-primary rounded-full border-4 border-background z-10"
              />

              {/* Card */}
   <Card
  className={`w-full md:w-5/12 ml-12 md:ml-0 mr-3 md:mr-0 p-7 rounded-2xl
  bg-white/70 dark:bg-white/5 backdrop-blur-md
  border border-border
  hover:shadow-2xl hover:-translate-y-2
  transition-all duration-500 ${
    index % 2 === 0 ? "md:mr-auto" : "md:ml-auto"
  }`}
>
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:justify-between gap-3 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-foreground">
                      {exp.title}
                    </h3>
                    <div className="flex items-center text-primary font-medium">
                      <Building className="w-4 h-4 mr-2" />
                      {exp.company}
                    </div>
                  </div>

                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium w-fit ${
                      exp.status === "Current"
                        ? "bg-primary/10 text-primary"
                        : "bg-secondary text-secondary-foreground"
                    }`}
                  >
                    {exp.status}
                  </span>
                </div>

                {/* Meta */}
                <div className="flex flex-col sm:flex-row gap-3 text-muted-foreground mb-4">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    {exp.period}
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-2" />
                    {exp.location}
                  </div>
                </div>

                {/* Description */}
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {exp.description}
                </p>

                {/* Highlights */}
                <div>
                  <h4 className="font-semibold text-foreground mb-2 flex items-center">
                    <Award className="w-4 h-4 mr-2" />
                    Key Responsibilities & Achievements
                  </h4>
                  <ul className="space-y-2">
                    {exp.highlights.map((item, i) => (
                      <li
                        key={i}
                        className="text-muted-foreground text-sm flex items-start"
                      >
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-20">
          <Card
            className="inline-block p-8 rounded-2xl
            bg-gradient-to-r from-primary/5 to-secondary/5
            border border-primary/20"
          >
            <h3 className="text-lg font-semibold text-foreground mb-2">
              Open to New Opportunities
            </h3>
            <p className="text-muted-foreground mb-4">
              Always interested in impactful recruitment and talent strategy
              roles
            </p>
            <button
              onClick={() =>
                document
                  .querySelector("#contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="text-primary font-medium hover:underline"
            >
              Let’s Connect →
            </button>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Experience;
