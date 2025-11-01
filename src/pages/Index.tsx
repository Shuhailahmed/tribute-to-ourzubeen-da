import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import MusicalJourney from "@/components/MusicalJourney";
import Songs from "@/components/Songs";
import Family from "@/components/Family";
import Education from "@/components/Education";
import PersonalLife from "@/components/PersonalLife";
import Achievements from "@/components/Achievements";
import Quotes from "@/components/Quotes";
import Gallery from "@/components/Gallery";
import FuneralTribute from "@/components/FuneralTribute";
import Fanpage from "@/components/Fanpage";
import Comments from "@/components/Comments";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <About />
      <MusicalJourney />
      <Songs />
      <Family />
      <Education />
      <PersonalLife />
      <Achievements />
      <Quotes />
      <Gallery />
      <FuneralTribute />
      <Fanpage />
      <Comments />
      <Footer />
    </div>
  );
};

export default Index;
