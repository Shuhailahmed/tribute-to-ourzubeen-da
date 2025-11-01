import { Heart } from "lucide-react";
import { Card } from "@/components/ui/card";

// Import images correctly
import FatherPhoto from "/src/assets/father.jpg";
import MotherPhoto from "/src/assets/mother.jpg";
import SisterPhoto from "/src/assets/sister.jpg";
import Sister2Photo from "/src/assets/sister2.jpg"; // ✅ New sister photo import
import WifePhoto from "/src/assets/wife.jpg";
import BackgroundPhoto from "/src/assets/family.avif";

const Family = () => {
  const familyMembers = [
    {
      name: "Mohini Mohan Garg",
      relation: "Father",
      description:
        "A legendary musician and lyricist who shaped Zubeen’s passion for music from an early age.",
      photo: FatherPhoto,
    },
    {
      name: "Ily Borthakur",
      relation: "Mother",
      description:
        "The heart of the family, nurturing Zubeen’s dreams and keeping the family’s musical legacy alive.",
      photo: MotherPhoto,
    },
    {
      name: "Jongki Borthakur",
      relation: "Sister",
      description:
        "A beloved sister and early supporter, whose memory continues to inspire Zubeen.",
      photo: SisterPhoto,
    },
    {
      name: "Palme Borthakur",
      relation: "Sister",
      description:
        "A cherished sister and constant source of strength of Zubeen Garg.",
      photo: Sister2Photo, // ✅ Uses sister2.jpg
    },
    {
      name: "Garima Saikia Garg",
      relation: "Wife",
      description:
        "His lifelong companion, sharing every triumph and challenge with love and devotion.",
      photo: WifePhoto,
    },
  ];

  return (
    <section id="family" className="relative section-padding bg-background">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center filter brightness-50"
        style={{ backgroundImage: `url(${BackgroundPhoto})` }}
      ></div>

      {/* Overlay to enhance readability */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
            Family
          </h2>
          <p className="text-lg text-white max-w-2xl mx-auto">
            Behind every great artist is a loving family that nurtures their dreams
          </p>
        </div>

        {/* Family Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* ✅ changed lg:grid-cols-4 → lg:grid-cols-5 to fit all 5 members in one line */}
          {familyMembers.map((member, index) => (
            <Card
              key={index}
              className="bg-gradient-card border-border p-8 text-center shadow-golden hover:scale-105 transition-transform duration-300 relative"
            >
              {/* Profile Photo */}
              <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-4 border-primary">
                <img
                  src={member.photo}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <h3 className="text-2xl font-bold text-foreground mb-2">
                {member.name}
              </h3>
              <p className="text-primary font-semibold mb-3">{member.relation}</p>
              <p className="text-muted-foreground leading-relaxed">
                {member.description}
              </p>
            </Card>
          ))}
        </div>

        {/* Footer Quote */}
        <div className="mt-12 text-center relative z-10">
          <Card className="bg-white/80 border-primary/20 p-8 max-w-3xl mx-auto">
            <p className="text-lg text-foreground-dark leading-relaxed italic">
              "Family was always Zubeen's anchor. Despite his fame and busy schedule, he remained
              deeply connected to his roots and cherished every moment with his loved ones."
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Family;
