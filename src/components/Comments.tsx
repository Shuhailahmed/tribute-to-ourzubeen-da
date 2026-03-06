import { useState, useEffect } from "react";
import { MessageCircle, Send, User, Heart } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

interface Comment {
  _id?: string;
  name: string;
  email?: string;
  comment: string;
  timestamp: number;
  likes?: number;
}

const Comments = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState<Comment[]>([]);
  const [, setTick] = useState(0);

  const [currentPage, setCurrentPage] = useState(1);
  const commentsPerPage = 3; // ✅ 1 page = 3 comments

  const { toast } = useToast();

  const API = "http://localhost:5000/api/comments";

  // Fetch comments
  useEffect(() => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => setComments(data))
      .catch((err) => console.error(err));
  }, []);

  // Refresh timestamps
  useEffect(() => {
    const interval = setInterval(() => setTick((t) => t + 1), 60000);
    return () => clearInterval(interval);
  }, []);

  // Submit comment
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (name && email && comment) {
      const newComment = {
        name,
        email,
        comment,
        timestamp: Date.now(),
      };

      try {
        const res = await fetch(API, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newComment),
        });

        const saved = await res.json();

        setComments([saved, ...comments]);

        toast({
          title: "Comment posted successfully",
          description: "Thank you for sharing your thoughts and prayers.",
        });

        setName("");
        setEmail("");
        setComment("");
        setCurrentPage(1);
      } catch (error) {
        console.error(error);
      }
    }
  };

  // ❤️ Like comment
  const handleLike = async (id?: string) => {
    if (!id) return;

    const liked = JSON.parse(localStorage.getItem("likedComments") || "[]");

    // already liked
    if (liked.includes(id)) {
      toast({
        title: "Already liked",
        description: "You already liked this comment.",
      });
      return;
    }

    try {
      const res = await fetch(`${API}/like/${id}`, {
        method: "POST",
      });

      const updated = await res.json();

      setComments((prev) =>
        prev.map((c) =>
          c._id === updated._id ? { ...c, likes: updated.likes } : c,
        ),
      );

      liked.push(id);
      localStorage.setItem("likedComments", JSON.stringify(liked));
    } catch (error) {
      console.error(error);
    }
  };

  const formatDate = (ts: number) => {
    const date = new Date(ts);

    return date.toLocaleString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  // Pagination
  const indexOfLast = currentPage * commentsPerPage;
  const indexOfFirst = indexOfLast - commentsPerPage;
  const currentComments = comments.slice(indexOfFirst, indexOfLast);

  const totalPages = Math.ceil(comments.length / commentsPerPage);

  const getPageNumbers = () => {
    const pages: (number | string)[] = [];

    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
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
    <section id="comments" className="section-padding bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gradient">
          Comments & Prayers
        </h2>

        <p className="text-center text-muted-foreground mb-12 text-lg">
          Leave your condolences, prayers, and memories
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Comment Form */}
          <div className="lg:col-span-2">
            <Card className="bg-gradient-card border-border p-8 shadow-golden sticky top-24">
              <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                <MessageCircle className="w-6 h-6 text-primary" />
                Leave a Comment
              </h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                  required
                />

                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                />

                <Textarea
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  placeholder="Share your prayers..."
                  required
                />

                <Button type="submit" className="btn-golden w-full">
                  <Send className="w-4 h-4 mr-2" />
                  Post Comment
                </Button>
              </form>
            </Card>
          </div>

          {/* Comments List */}
          <div className="lg:col-span-3">
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Recent Comments ({comments.length})
            </h3>

            <div className="space-y-6">
              {comments.length === 0 ? (
                <p className="text-muted-foreground">No comments yet.</p>
              ) : (
                currentComments.map((item) => (
                  <Card
                    key={item._id}
                    className="bg-gradient-card border-border p-6 shadow-golden"
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-primary/20 rounded-full">
                        <User className="w-5 h-5 text-primary" />
                      </div>

                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-semibold text-foreground">
                            {item.name}
                          </h4>

                          <span className="text-xs text-muted-foreground">
                            {formatDate(item.timestamp)}
                          </span>
                        </div>

                        <p className="text-foreground whitespace-pre-wrap">
                          {item.comment}
                        </p>

                        {/* ❤️ Like Button */}
                        <div className="flex items-center gap-2 mt-3">
                          <Button
                            variant="ghost"
                            size="sm"
                            disabled={JSON.parse(
                              localStorage.getItem("likedComments") || "[]",
                            ).includes(item._id)}
                            onClick={() => handleLike(item._id)}
                            className="flex items-center gap-1"
                          >
                            <Heart className="w-4 h-4 text-red-500" />
                            <span>{item.likes || 0}</span>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))
              )}
            </div>

            {/* Pagination */}
            <div className="flex justify-center items-center gap-2 mt-8 flex-wrap">
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
                  <span key={index}>...</span>
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
      </div>
    </section>
  );
};

export default Comments;
