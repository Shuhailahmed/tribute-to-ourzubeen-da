import { Card } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="section-padding bg-gradient-hero">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gradient">
          About Zubeen Garg
        </h2>
        
        <Card className="bg-gradient-card border-border p-8 md:p-12 shadow-golden">
          <div className="space-y-6 text-foreground">
            <p className="text-lg leading-relaxed">
              Zubeen Garg was not just a singer; he was the heartbeat of Assamese music and a voice
              that resonated across India and beyond. Born on November 18, 1972, in Tura, Meghalaya,
              Zubeen's journey from a small town to becoming one of India's most celebrated playback
              singers is a testament to his extraordinary talent and unwavering dedication.
            </p>
            
            <p className="text-lg leading-relaxed">
              Known for his versatility, Zubeen sang in multiple languages including Assamese, Hindi,
              Bengali, and several other regional languages. His voice carried the soul of Assam while
              touching hearts across linguistic and cultural boundaries.
            </p>
            
            <p className="text-lg leading-relaxed">
              Beyond music, Zubeen was a composer, lyricist, music producer, and actor. He composed
              music for numerous Assamese films and his songs became anthems of love, celebration,
              and cultural pride. His passion for preserving and promoting Assamese culture while
              embracing innovation made him a true cultural ambassador.
            </p>
            
            <p className="text-lg leading-relaxed">
              His iconic song "Ya Ali" from the Bollywood film Gangster became a sensation nationwide,
              introducing his unique voice to millions. Yet, his heart always remained with Assamese
              music, where he created timeless classics that will be cherished for generations.
            </p>
            
            <div className="mt-8 p-6 bg-secondary/30 rounded-lg border border-primary/20">
              <p className="text-xl font-semibold text-primary mb-2">Early Life</p>
              <p className="text-foreground leading-relaxed">
                Born into a family with deep musical roots, Zubeen's father Mohini Mohon Borthakur was
                a respected magistrate and a poet and lyricist. Music flowed through his veins from childhood, and
                by his teenage years, it was clear that Zubeen was destined for greatness. His journey
                began in the cultural hub of Jorhat, where he first discovered his passion for melody
                and rhythm.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default About;
