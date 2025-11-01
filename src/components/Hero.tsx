import heroImage from "@/assets/zubeen_garg.webp";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Zubeen Garg"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/70 to-background"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto animate-fade-in">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gradient">
          In Loving Memory of
        </h1>
        <h2 className="text-6xl md:text-8xl font-bold mb-8 text-foreground">
          Zubeen Garg
        </h2>
        <p className="text-2xl md:text-3xl mb-4 text-primary font-semibold">
          The Voice of Assam & Beyond
        </p>
        <p className="text-xl md:text-2xl mb-8 text-muted-foreground italic">
          1972 – 2025
        </p>
        <div className="max-w-2xl mx-auto">
          <p className="text-lg md:text-xl text-foreground leading-relaxed mb-8">
            A legendary voice that touched millions of hearts, a cultural icon who brought the
            melodies of Assam to the world. His music will echo through generations, forever
            inspiring souls with its passion, depth, and beauty.
          </p>
          <p className="text-lg text-muted-foreground italic">
            "Music is not just my profession, it's my soul's language" - Zubeen Garg
          </p>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-primary rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
