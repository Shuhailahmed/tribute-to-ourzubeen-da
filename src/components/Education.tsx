import { GraduationCap, BookOpen } from "lucide-react";
import { Card } from "@/components/ui/card";

const Education = () => {
  const educationDetails = [
    {
      level: "Early Education",
      institution: "Jorhat Kendriya Vidyalaya",
      description: "Completed his schooling in Jorhat, where he first discovered his passion for music",
      icon: BookOpen,
    },
    {
      level: "Higher Education",
      institution: "Biotechnology Studies",
      description: "Pursued Biotechnology but his heart belonged to music, leading him to follow his true calling",
      icon: GraduationCap,
    },
  ];

  return (
    <section id="education" className="section-padding bg-gradient-hero">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gradient">
          Education
        </h2>
        <p className="text-center text-muted-foreground mb-12 text-lg max-w-2xl mx-auto">
          A journey from academics to artistry, following the call of music
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {educationDetails.map((education, index) => {
            const Icon = education.icon;
            return (
              <Card
                key={index}
                className="bg-gradient-card border-border p-8 shadow-golden hover:scale-105 transition-transform duration-300"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-4 bg-primary/20 rounded-full">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">{education.level}</h3>
                </div>
                <p className="text-xl text-primary font-semibold mb-3">{education.institution}</p>
                <p className="text-muted-foreground leading-relaxed">{education.description}</p>
              </Card>
            );
          })}
        </div>

        <div className="mt-12">
          <Card className="bg-secondary/30 border-primary/20 p-8">
            <p className="text-lg text-foreground text-center leading-relaxed italic">
              "Education opened doors, but music was the path I was destined to walk. My academic
              journey taught me discipline, but my heart always sang a different tune."
            </p>
            <p className="text-primary text-center mt-4 font-semibold">- Zubeen Garg</p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Education;
