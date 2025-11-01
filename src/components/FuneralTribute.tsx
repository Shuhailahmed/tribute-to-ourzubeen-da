import { Heart, Flower2, Flame, ImageIcon } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useEffect, useRef } from "react";

const FuneralTribute = () => {
  const galleryImages = [
    "photo1.avif",
    "photo2.webp",
    "photo3.webp",
    "photo4.webp",
    "photo5.webp",
    "photo6.avif",
    "photo7.webp",
    "photo8.jpg",
    "photo9.webp",
    "ptoto10.jpg",
    "ptoto11.avif",
    "photo12.webp",
  ];

  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Try autoplay (muted allows autoplay)
    video.play().catch(() => {
      const resume = () => {
        video.play().catch(() => {});
        window.removeEventListener("click", resume);
        window.removeEventListener("touchstart", resume);
      };
      window.addEventListener("click", resume);
      window.addEventListener("touchstart", resume);
    });
  }, []);

  return (
    <section id="tribute" className="section-padding relative bg-background">
      {/* Background Video */}
      <video
        ref={videoRef}
        src="/video/tribute.mp4" // put your video in /public/video/tribute.mp4
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        loop
        muted
        autoPlay
        playsInline
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gradient">
          Final Farewell
        </h2>
        <p className="text-center text-muted-foreground mb-12 text-lg">
          In loving memory, forever in our hearts
        </p>

        <Card className="bg-gradient-card border-border p-8 md:p-12 shadow-golden mb-8">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-primary/20 rounded-full mb-6">
              <Flame className="w-12 h-12 text-primary" />
            </div>
            <h3 className="text-3xl font-bold text-foreground mb-4">
              A Celebration of Life
            </h3>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
             On September 19, 2025, the world lost the legendary singer Zubeen Garg. Thousands gathered to pay their final respects, and the atmosphere was filled with both sorrow and celebration—sorrow for the loss of a musical genius, and celebration for a life that touched millions with his voice, passion, and artistry. His legacy continues to live on in the hearts of fans across Assam, India, and the world.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="text-center p-6 bg-secondary/30 rounded-lg">
              <Flower2 className="w-8 h-8 text-primary mx-auto mb-3" />
              <h4 className="font-semibold text-foreground mb-2">Last Rites</h4>
              <p className="text-sm text-muted-foreground">
                The last rites were held on September 23, 2025, at Kamarkuchi village, near Guwahati, Assam, with full state honors. His sister, Palmee Borthakur, lit the pyre, amid chanting of Vedic hymns and a gun salute. The ceremony was attended by thousands of fans, dignitaries including the Chief Minister of Assam, Himanta Biswa Sarma, and Union Ministers. 
              </p>
            </div>
            <div className="text-center p-6 bg-secondary/30 rounded-lg">
              <Heart className="w-8 h-8 text-primary mx-auto mb-3" />
              <h4 className="font-semibold text-foreground mb-2">Public Tribute</h4>
              <p className="text-sm text-muted-foreground">
                Fans and admirers honored Zubeen Garg, celebrating his music, kindness, and legacy. His soulful voice and inspiring journey touched millions, leaving an everlasting impact on hearts worldwide.
              </p>
            </div>
            <div className="text-center p-6 bg-secondary/30 rounded-lg">
              <Flame className="w-8 h-8 text-primary mx-auto mb-3" />
              <h4 className="font-semibold text-foreground mb-2">Musical Homage</h4>
              <p className="text-sm text-muted-foreground">
                Fans, fellow musicians, and admirers gathered to honor Zubeen Garg through his music, celebrating his extraordinary talent, soulful voice, and timeless contributions that touched millions and inspired generations.
              </p>
            </div>
          </div>

          <div className="space-y-4 text-foreground leading-relaxed">
            <p>
              The funeral procession moved through the streets of Kamarkuchi village, accompanied by his timeless
              melodies playing in the background. Fans lined the roads, many with tears in their eyes,
              holding flowers and candles, singing his "Mayabini" song one last time together.
            </p>
            <p>
              Fellow artists, musicians, politicians, and people from all walks of life came to pay
              their respects. The unity in grief was a testament to how deeply Zubeen had touched
              lives across communities, languages, and borders.
            </p>
          </div>
        </Card>

         <Card className="bg-black/70 border-primary/20 p-8 text-center mb-12 shadow-lg">
            <blockquote className="text-xl text-white italic leading-relaxed mb-4">
              "Though his voice has fallen silent, his music will echo through eternity. Zubeen Garg
              may have left us, but his legacy will inspire generations to come."
            </blockquote>
            <p className="text-primary font-semibold">— A message from the people of Assam</p>
          </Card>


        {/* Photo Gallery Section */}
        <div className="mt-12 text-center">
          <h3 className="text-3xl font-bold text-gradient mb-8">
            Final journey of a Legend
          </h3>
          <p className="p-5 text-sm text-muted-foreground">As we reflect on the remarkable life of Zubeen Garg, these images capture moments from his final journey—times of love, admiration, and the countless memories he created that will forever remain in our hearts.</p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryImages.map((src, index) => (
              <Card
                key={index}
                className="p-0 overflow-hidden rounded-lg hover:scale-105 transition-transform duration-300"
              >
                <img
                  src={src}
                  alt={`Funeral ${index + 1}`}
                  className="w-full h-48 object-cover"
                />
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FuneralTribute;
