import { useState, useEffect } from "react";
import { MessageCircle, Send, User } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

interface Comment {
  name: string;
  email?: string;
  comment: string;
  timestamp: number; // store as number
}

const Comments = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState<Comment[]>([]);
  const [, setTick] = useState(0); // for forcing re-render
  const { toast } = useToast();

  // Load comments from localStorage
  useEffect(() => {
    const stored = localStorage.getItem("comments");
    if (stored) {
      setComments(JSON.parse(stored));
    }
  }, []);

  // Update every minute for real-time timestamp display
  useEffect(() => {
    const interval = setInterval(() => setTick(tick => tick + 1), 60000);
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && email && comment) {
      const newComment: Comment = {
        name,
        email,
        comment,
        timestamp: Date.now(), // store timestamp
      };

      const updated = [newComment, ...comments];
      setComments(updated);
      localStorage.setItem("comments", JSON.stringify(updated));

      toast({
        title: "Comment posted successfully",
        description: "Thank you for sharing your thoughts and prayers.",
      });

      setName("");
      setEmail("");
      setComment("");
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
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Name *
                  </label>
                  <Input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name"
                    className="bg-background border-border text-foreground"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email *
                  </label>
                  <Input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    className="bg-background border-border text-foreground"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Comment *
                  </label>
                  <Textarea
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    placeholder="Share your prayers, memories, or condolences..."
                    className="bg-background border-border text-foreground min-h-[120px]"
                    required
                  />
                </div>
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

            <div className="space-y-6 max-h-[500px] overflow-y-auto pr-2">
              {comments.length === 0 ? (
                <p className="text-muted-foreground">No comments yet.</p>
              ) : (
                comments.map((item, index) => (
                  <Card
                    key={index}
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
                        <p className="text-foreground leading-relaxed whitespace-pre-wrap break-words">
                          {item.comment}
                        </p>
                      </div>
                    </div>
                  </Card>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Comments;
