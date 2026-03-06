import { useState, useEffect } from "react";
import { Heart, Send, User } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

interface Tribute {
  _id?: string;
  name: string;
  message: string;
  date: string;
}

const Fanpage = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [fanTributes, setFanTributes] = useState<Tribute[]>([]);

  const [currentPage, setCurrentPage] = useState(1);
  const tributesPerPage = 3;

  const { toast } = useToast();

  // Load tributes from backend
  useEffect(() => {
    fetch("http://localhost:5000/api/tributes")
      .then((res) => res.json())
      .then((data) => setFanTributes(data))
      .catch((err) => console.log(err));
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (name && message) {
      const newTribute = {
        name,
        message,
        date: new Date().toLocaleString("en-IN", {
          day: "numeric",
          month: "long",
          year: "numeric",
          hour: "2-digit",
          minute: "2-digit",
        }),
      };

      try {
        const res = await fetch("http://localhost:5000/api/tributes", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newTribute),
        });

        const savedTribute = await res.json();

        setFanTributes([savedTribute, ...fanTributes]);

        toast({
          title: "Thank you for sharing your love",
          description:
            "Your tribute has been received and is now displayed below.",
        });

        setName("");
        setMessage("");
        setCurrentPage(1);
      } catch (error) {
        console.log(error);
      }
    }
  };

  // Pagination
  const indexOfLastTribute = currentPage * tributesPerPage;
  const indexOfFirstTribute = indexOfLastTribute - tributesPerPage;

  const currentTributes = fanTributes.slice(
    indexOfFirstTribute,
    indexOfLastTribute,
  );

  const totalPages = Math.ceil(fanTributes.length / tributesPerPage);

  const getPageNumbers = () => {
    const pages: (number | string)[] = [];

    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      pages.push(1);

      if (currentPage > 3) pages.push("...");

      for (
        let i = Math.max(2, currentPage - 1);
        i <= Math.min(totalPages - 1, currentPage + 1);
        i++
      ) {
        pages.push(i);
      }

      if (currentPage < totalPages - 2) pages.push("...");

      pages.push(totalPages);
    }

    return pages;
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
          {/* Tribute Form */}
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
                  className="min-h-[150px]"
                  required
                />
              </div>

              <Button type="submit" className="btn-golden w-full">
                <Send className="w-4 h-4 mr-2" />
                Submit Tribute
              </Button>
            </form>
          </Card>

          {/* Tribute List */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Recent Tributes
            </h3>

            <div className="space-y-4">
              {currentTributes.map((tribute) => (
                <Card
                  key={tribute._id}
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

                  <p className="text-foreground italic break-words whitespace-pre-wrap">
                    "{tribute.message}"
                  </p>
                </Card>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center items-center gap-2 mt-6 flex-wrap">
              <Button
                size="sm"
                variant="outline"
                disabled={currentPage === 1}
                onClick={() => setCurrentPage(currentPage - 1)}
              >
                Prev
              </Button>

              {getPageNumbers().map((page, index) =>
                page === "..." ? (
                  <span key={index} className="px-2 text-muted-foreground">
                    ...
                  </span>
                ) : (
                  <Button
                    key={index}
                    size="sm"
                    variant={currentPage === page ? "default" : "outline"}
                    onClick={() => setCurrentPage(page as number)}
                  >
                    {page}
                  </Button>
                ),
              )}

              <Button
                size="sm"
                variant="outline"
                disabled={currentPage === totalPages || totalPages === 0}
                onClick={() => setCurrentPage(currentPage + 1)}
              >
                Next
              </Button>
            </div>
          </div>
        </div>

        {/* Tribute Counter */}
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
