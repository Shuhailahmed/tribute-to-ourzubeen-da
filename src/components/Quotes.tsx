import { useState, useRef } from "react";
import { Quote, Music2 } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Quotes = () => {
  const quotes = [
    {
      text: "I have no caste, no religion. I don't believe in God. I am free. I am Kanchenjunga.",
      context: "Philosophy of his life",
    },
    {
      text: "Assam is my heartbeat, and music connects me to my fans more than words.",
      context: "On his love for Assam",
    },
    {
      text: "A king should never leave his kingdom.",
      context: "Commitment to his roots and responsibilities",
    },
    {
      text: "I want to be bigger than this what I had. I love to swim. I never see how deep it is. I just jump.",
      context: "Fearless attitude toward life and ambition",
    },
  ];

  // Ref and state for bottom audio
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleAudio = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }

    setIsPlaying(!isPlaying);
  };

  return (
    <section id="quotes" className="section-padding bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gradient">
          Words of Wisdom
        </h2>
        <p className="text-center text-muted-foreground mb-12 text-lg">
          Timeless thoughts from a legendary artist
        </p>

        {/* Quotes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {quotes.map((quote, index) => (
            <Card
              key={index}
              className="bg-gradient-card border-border p-8 shadow-golden hover:scale-105 transition-transform duration-300"
            >
              <div className="flex flex-col h-full">
                <div className="mb-4">
                  <Quote className="w-12 h-12 text-primary opacity-50" />
                </div>
                <blockquote className="text-lg text-foreground leading-relaxed italic mb-4 flex-1">
                  "{quote.text}"
                </blockquote>
                <p className="text-sm text-primary font-semibold">
                  — {quote.context}
                </p>
              </div>
            </Card>
          ))}
        </div>

        {/* Famous Quote Card */}
        <div className="mt-12 text-center">
          <Card className="bg-secondary/30 border-primary/20 p-8 max-w-3xl mx-auto">
            <p className="text-xl text-foreground leading-relaxed italic">
              "My voice may fade, but my music will sing forever in the hearts of those who loved it."
            </p>
            <p className="text-primary mt-4 font-semibold text-lg">- Zubeen Garg</p>
          </Card>
        </div>

        {/* Extra Audio Box at the Bottom */}
        <div className="mt-12 text-center">
          <Card className="bg-gradient-accent border-none p-8 md:p-12 shadow-golden max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-primary-foreground">
              <i>
                "Mur kunu <span className="text-yellow-900 font-bold">jaati</span> nai, 
                mur kunu <span className="text-yellow-900 font-bold">dhormo</span> nai, 
                Mur kunu <span className="text-yellow-900 font-bold">bhogoban</span> nai. 
                Moi <span className="text-yellow-900 font-bold">mukto</span>. 
                Moi <span className="text-yellow-900 font-bold">Kanchanjangha</span>
                !!!."
              </i>
            </h3>
            <p className="text-lg text-primary-foreground/90 mb-6">
                Zubeen Garg, The Voice of a Generation
            </p>
            
            {/* Play/Pause Button with Icon */}
            <Button className="btn-golden inline-flex items-center" onClick={toggleAudio}>
              <Music2 className="w-5 h-5 mr-2" />
              {isPlaying ? "Pause Audio" : "Listen Audio"}
            </Button>

            {/* Audio Element */}
            <audio ref={audioRef} src="/audio/quote.mp3" />
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Quotes;
