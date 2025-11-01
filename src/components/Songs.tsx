import { useState, useRef } from "react";
import { Music2, Play, Pause, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Songs = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const specialSong = {
    title: "Mayabini (Daag)",
    year: "2001",
    description:
      "Garg often referred to Mayabini as his 'fantasy' song and, in a video from 2019, expressed his wish that the song be played at his death. In a tribute to the singer, fans and the media have widely called it 'Assam's anthem of grief'.",
    audio: "/audio/Mayabini.mp3",
  };

  const popularSongs = [
    {
      title: "Ya Ali",
      language: "Hindi",
      year: "2006",
      spotify: "https://open.spotify.com/search/Ya%20Ali",
    },
    {
      title: "Maya",
      language: "Assamese",
      year: "2007",
      spotify: "https://open.spotify.com/track/4sVALJRvgpuUzfcptODdQK",
    },
    {
      title: "Anamika",
      language: "Assamese",
      year: "1992",
      spotify: "https://open.spotify.com/search/anamika%20album%201992",
    },
    {
      title: "Gaane Ki Aane",
      language: "Assamese",
      year: "2015",
      spotify: "https://open.spotify.com/track/4SL7F9HNlOTZ25p3jaU6XT",
    },
    {
      title: "Mugdho Hiya Mur",
      language: "Assamese",
      year: "2015",
      spotify: "https://open.spotify.com/track/12Mrv6C0LA90kejXAQ1JpU",
    },
    {
      title: "Dil Tu Hi Bataa",
      language: "Hindi",
      year: "2013",
      spotify: "https://open.spotify.com/search/Dil%20Tu%20Hi%20Bataa",
    },
  ];

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <section id="songs" className="section-padding bg-gradient-hero">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gradient">
          Melodious Legacy
        </h2>

        {/* Special Song Highlight */}
        <Card className="bg-gradient-accent border-none p-8 md:p-12 mb-12 shadow-golden">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-primary-foreground/20 rounded-full mb-6">
              <Music2 className="w-10 h-10 text-primary-foreground" />
            </div>
            <h3 className="text-3xl md:text-4xl font-bold mb-2 text-primary-foreground">
              {specialSong.title}
            </h3>
            <p className="text-lg text-primary-foreground/80 mb-4">
              {specialSong.year}
            </p>
            <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto mb-6">
              {specialSong.description}
            </p>
            <Button className="btn-golden" onClick={togglePlay}>
              {isPlaying ? (
                <>
                  <Pause className="w-5 h-5 mr-2" />
                  Pause
                </>
              ) : (
                <>
                  <Play className="w-5 h-5 mr-2" />
                  Listen Now
                </>
              )}
            </Button>

            {/* Hidden audio element */}
            <audio ref={audioRef} src={specialSong.audio}></audio>
          </div>
        </Card>

        {/* Popular Songs Grid */}
        <div>
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-8 text-foreground">
            Popular Songs
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {popularSongs.map((song, index) => (
              <Card
                key={index}
                className="bg-gradient-card border-border p-6 hover:shadow-golden hover:scale-105 transition-all duration-300"
              >
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-primary/20 rounded-lg">
                    <Music2 className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-lg text-foreground mb-1">
                      {song.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {song.language}
                    </p>
                    <p className="text-sm text-primary mt-1">{song.year}</p>
                    <Button
                      variant="outline"
                      size="sm"
                      className="mt-3 text-sm flex items-center gap-2 hover:bg-primary/10"
                      onClick={() => window.open(song.spotify, "_blank")}
                    >
                      <ExternalLink className="w-4 h-4" />
                      Listen on Spotify
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button
              className="btn-golden"
              onClick={() =>
                window.open(
                  "https://open.spotify.com/artist/3mpgtUc7wYBNjr04gEiQ4u",
                  "_blank"
                )
              }
            >
              View All Songs
            </Button>
            <p className="text-muted-foreground mt-4 text-sm">
              Explore his complete discography of over 38,000+ songs
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Songs;
