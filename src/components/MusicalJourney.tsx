import { Music, Award, Heart, Mic } from "lucide-react";
import { Card } from "@/components/ui/card";

const MusicalJourney = () => {
  const milestones = [
    {
      year: "1992",
      title: "The Beginning",
      description: "Started his musical journey in Assam, performing at local events and cultural programs",
      icon: Music,
    },
    {
      year: "1995",
      title: "Playback Singing Debut",
      description: "Began his journey as a playback singer in Assamese films, expanding his reach in the music industry.",
      icon: Mic,
    },
    {
      year: "2006",
      title: "Bollywood Breakthrough",
      description: "\"Ya Ali\" from Gangster became a nationwide sensation, introducing his voice to millions",
      icon: Award,
    },
    {
      year: "2010-2020",
      title: "Golden Era",
      description: "Created countless Assamese classics, composed for films, and became a cultural icon",
      icon: Heart,
    },
  ];

  return (
    <section id="journey" className="section-padding bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gradient">
          Musical Journey
        </h2>
        <p className="text-center text-muted-foreground mb-12 text-lg">
          From Jorhat to the hearts of millions worldwide
        </p>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary via-accent to-primary hidden md:block"></div>

          <div className="space-y-12">
            {milestones.map((milestone, index) => {
              const Icon = milestone.icon;
              return (
                <div
                  key={index}
                  className={`flex flex-col md:flex-row items-center gap-8 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Content Card */}
                  <div className="flex-1 w-full">
                    <Card className="bg-gradient-card border-border p-6 shadow-golden hover:scale-105 transition-transform duration-300">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="p-3 bg-primary/20 rounded-full">
                          <Icon className="w-6 h-6 text-primary" />
                        </div>
                        <span className="text-2xl font-bold text-primary">{milestone.year}</span>
                      </div>
                      <h3 className="text-2xl font-bold mb-2 text-foreground">{milestone.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{milestone.description}</p>
                    </Card>
                  </div>

                  {/* Timeline dot */}
                  <div className="hidden md:block w-4 h-4 bg-primary rounded-full border-4 border-background shadow-golden z-10"></div>

                  {/* Spacer */}
                  <div className="flex-1 hidden md:block"></div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg text-muted-foreground italic">
            A journey marked by passion, dedication, and an unwavering love for music
          </p>
        </div>
      </div>
    </section>
  );
};

export default MusicalJourney;
