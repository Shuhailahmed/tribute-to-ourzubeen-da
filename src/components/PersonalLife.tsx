import { TreePine, Heart, Dog, Play, Volleyball } from "lucide-react";
import { Card } from "@/components/ui/card";

const PersonalLife = () => {
  const interests = [
    {
      title: "Nature Lover",
      description: "Zubeen Garg, a true nature lover, often found peace and inspiration in Assam’s lush landscapes, rivers, and tea gardens, reflecting his deep connection to his roots.",
      icon: TreePine,
    },
    {
      title: "Kind Hearted",
      description: "Zubeen Garg was also soft-hearted, always showing kindness and empathy toward people and animals, valuing emotions deeply, and reflecting his gentle and compassionate nature in daily life",
      icon: Heart,
    },
    {
      title: "Animal Lover",
      description: "Showed affection and care for animals, reflecting his gentle and nurturing personality.",
      icon: Dog,
    },
    {
      title: "Football Enthusiast",
      description: "Zubeen Garg has a deep passion for football, having played during his school and college days, enjoying the sport both as a player and a fan.",
      icon: Volleyball,
    },
  ];

  return (
    <section id="personal" className="section-padding bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gradient">
          Personal Life
        </h2>
        <p className="text-center text-muted-foreground mb-12 text-lg max-w-3xl mx-auto">
          Beyond the stage and studio, Zubeen lived a life rich with passions, hobbies, and a deep
          connection to his Assamese roots
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {interests.map((interest, index) => {
            const Icon = interest.icon;
            return (
              <Card
                key={index}
                className="bg-gradient-card border-border p-6 shadow-golden hover:scale-105 transition-transform duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/20 rounded-lg">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">{interest.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{interest.description}</p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        <Card className="bg-gradient-card border-border p-8 md:p-12">
          <h3 className="text-2xl font-bold text-center text-foreground mb-6">
            A Life Well Lived
          </h3>
          <div className="space-y-4 text-foreground leading-relaxed">
            <p>
              Zubeen Garg was more than just a musician; he was a cultural icon who lived life on
              his own terms. Known for his humility despite his fame, he remained deeply connected
              to his roots in Assam throughout his life.
            </p>
            <p>
              He was known for his philanthropic work, supporting young artists and contributing to
              various social causes in Assam. His down-to-earth personality made him beloved not
              just as an artist, but as a human being who never forgot where he came from.
            </p>
            <p>
              Friends and family remember him as someone who could light up any room with his
              presence, who had a joke ready for every occasion, and who treated everyone with
              respect and kindness, regardless of their status.
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default PersonalLife;
