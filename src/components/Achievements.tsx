import { Trophy, Star, Award, Medal } from "lucide-react";
import { Card } from "@/components/ui/card";

const Achievements = () => {
  const achievements = [
    {
      title: "National Film Award",
      description: "He won the National Award for Best Music Direction for the non-feature film Echoes of Silence.",
      icon: Trophy,
      year: "2009",
    },
    {
      title: "Global Indian Film Award (GIFA)",
      description: "Garg received this award for Best Male Playback Singer for his hit song 'Ya Ali' from the Bollywood film Gangster.",
      icon: Award,
      year: "2006",
    },
    {
      title: "Bengal Film Journalists' Association (BFJA) Award",
      description: "Best Music Director for the Bengali film Shudhu Tumi.",
      icon: Star,
      year: "2005",
    },
    {
      title: "Honorary Doctorate",
      description: "The University of Science and Technology, Meghalaya (USTM), awarded him an honorary Doctor of Literature (D.Litt.) for his cultural contributions. ",
      icon: Medal,
      year: "2004",
    },
  ];

  const milestones = [
    "Recorded over 38,000+ songs in more than 40 languages,",
    "becoming known as the \"heartthrob of Assam\" and \"King of Humming\".",
    "Rise in Pop Music - Became a household name in Assamese and Indian pop music.",
    "Film Direction & Production Expanded his career from music to filmmaking, contributing to Assamese cinema like Mon Jai and Kanchanjangha.",
    "Represented Assamese music and culture globally by performing in countries like the USA, UK, and Middle East, spreading awareness of Assam’s music and heritage.",
  ];

  return (
    <section id="achievements" className="section-padding bg-gradient-hero">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gradient">
          Achievements & Recognition
        </h2>
        <p className="text-center text-muted-foreground mb-12 text-lg">
          A legacy of excellence celebrated across the nation
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <Card
                key={index}
                className="bg-gradient-card border-border p-8 shadow-golden hover:scale-105 transition-transform duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="p-4 bg-primary/20 rounded-full">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-2">{achievement.title}</h3>
                    <p className="text-primary font-semibold mb-2">{achievement.year}</p>
                    <p className="text-muted-foreground">{achievement.description}</p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        <Card className="bg-gradient-card border-border p-8 md:p-12">
          <h3 className="text-2xl font-bold text-center text-foreground mb-8">
            Career Milestones
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <p className="text-foreground">{milestone}</p>
              </div>
            ))}
          </div>
        </Card>

        <div className="mt-12 text-center">
          <p className="text-lg text-muted-foreground italic max-w-3xl mx-auto">
            "Awards and recognition are wonderful, but my greatest achievement is touching people's
            hearts through my music. That's what makes it all worthwhile."
          </p>
          <p className="text-primary mt-4 font-semibold">- Zubeen Garg</p>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
