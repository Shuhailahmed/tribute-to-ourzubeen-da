import { Heart, Facebook, Instagram, Youtube, Music } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="text-center space-y-6">
          {/* Memorial Message */}
          <div className="flex items-center justify-center gap-2">
            <Heart className="w-6 h-6 text-primary fill-primary" />
            <h3 className="text-2xl font-bold text-gradient">Forever in Our Hearts</h3>
            <Heart className="w-6 h-6 text-primary fill-primary" />
          </div>
          
          <p className="text-3xl md:text-4xl font-bold text-foreground font-playfair">
            Zubeen Garg
          </p>
          
          <p className="text-xl text-primary font-semibold">
            1972 – 2025
          </p>
          
          <p className="text-lg text-muted-foreground italic max-w-2xl mx-auto">
            "The Voice of Assam & Beyond – A legend whose music transcends time and touches souls"
          </p>

          {/* Social Media Links */}
          <div className="flex items-center justify-center gap-6 pt-6">
            <a
              href="https://www.facebook.com/ZUBEENsOFFICIAL/"
              className="p-3 bg-secondary rounded-full hover:bg-primary/20 transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5 text-foreground" />
            </a>
            <a
              href="https://www.instagram.com/zubeen.garg/reels/?hl=en"
              className="p-3 bg-secondary rounded-full hover:bg-primary/20 transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5 text-foreground" />
            </a>
            <a
              href="https://www.youtube.com/channel/UC4Qku9ZrZI1YCJIEAuG32gQ"
              className="p-3 bg-secondary rounded-full hover:bg-primary/20 transition-colors"
              aria-label="YouTube"
            >
              <Youtube className="w-5 h-5 text-foreground" />
            </a>
            <a
              href="https://open.spotify.com/artist/3mpgtUc7wYBNjr04gEiQ4u"
              className="p-3 bg-secondary rounded-full hover:bg-primary/20 transition-colors"
              aria-label="Music"
            >
              <Music className="w-5 h-5 text-foreground" />
            </a>
          </div>

          {/* Copyright */}
          <div className="pt-8 border-t border-border text-center space-y-2">
            <p className="text-sm text-muted-foreground">
              This memorial website is created with love and respect by Shuhail Ahmed. With deep love and respect, we honor the life and legacy of Zubeen Garg. His music, kindness, and spirit will forever remain in our hearts.
            </p>
            <a
              href="https://www.instagram.com/xuhel_ahmed/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary font-semibold hover:underline flex items-center justify-center gap-2"
            >
              <Instagram className="w-4 h-4" /> Follow me on Instagram
            </a>
            <p className="text-sm text-muted-foreground mt-2">
             © 2025 Zubeen Garg Memorial. All rights reserved. Forever in our hearts and melodies.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
