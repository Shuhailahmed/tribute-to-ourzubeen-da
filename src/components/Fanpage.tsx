import { useState, useEffect } from "react";
import { Heart, Send, User } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

const Fanpage = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [fanTributes, setFanTributes] = useState<
    { name: string; message: string; date: string }[]
  >([]);

  const { toast } = useToast();

  // Load tributes from localStorage on mount
  useEffect(() => {
    const storedTributes = localStorage.getItem("fanTributes");
    if (storedTributes) {
      setFanTributes(JSON.parse(storedTributes));
    } else {
      const defaultTributes = [];
      setFanTributes(defaultTributes);
      localStorage.setItem("fanTributes", JSON.stringify(defaultTributes));
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && message) {
      const newTribute = {
        name,
        message,
        // ✅ Real-time date and time instead of "Just now"
        date: new Date().toLocaleString("en-IN", {
          day: "numeric",
          month: "long",
          year: "numeric",
          hour: "2-digit",
          minute: "2-digit",
        }),
      };

      const updatedTributes = [newTribute, ...fanTributes];
      setFanTributes(updatedTributes);

      localStorage.setItem("fanTributes", JSON.stringify(updatedTributes));

      toast({
        title: "Thank you for sharing your love",
        description: "Your tribute has been received and is now displayed below.",
      });

      setName("");
      setMessage("");
    }
  };

  return (
    <section id="fanpage" className="section-padding bg-gradient-hero">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gradient">
          Fanpage
        </h2>
        <p className="text-center text-muted-foreground mb-12 text-lg">
          Share your love, memories, and tributes
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Share Your Tribute Form */}
          <Card className="bg-gradient-card border-border p-8 shadow-golden">
            <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
              <Heart className="w-6 h-6 text-primary" />
              Share Your Tribute
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Your Name
                </label>
                <Input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your name"
                  className="bg-background border-border text-foreground"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Your Message
                </label>
                <Textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Share your memories, poems, or words of love..."
                  className="bg-background border-border text-foreground min-h-[150px]"
                  required
                />
              </div>
              <Button type="submit" className="btn-golden w-full">
                <Send className="w-4 h-4 mr-2" />
                Submit Tribute
              </Button>
            </form>
          </Card>

          {/* Recent Tributes */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Recent Tributes
            </h3>
            <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2">
              {fanTributes.map((tribute, index) => (
                <Card
                  key={index}
                  className="bg-gradient-card border-border p-6 shadow-golden"
                >
                  <div className="flex items-start gap-3 mb-3">
                    <div className="p-2 bg-primary/20 rounded-full">
                      <User className="w-4 h-4 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-foreground">
                        {tribute.name}
                      </h4>
                      <p className="text-xs text-muted-foreground">
                        {tribute.date}
                      </p>
                    </div>
                  </div>
                  <p className="text-foreground leading-relaxed italic break-words whitespace-pre-wrap">
                    "{tribute.message}"
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Card className="bg-secondary/30 border-primary/20 p-6 max-w-3xl mx-auto">
            <p className="text-foreground leading-relaxed">
              <Heart className="inline w-5 h-5 text-primary mr-2" />
              {fanTributes.length} tributes have been shared by fans worldwide.
              Each message keeps Zubeen da’s music and memory alive.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Fanpage;
