import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/enhanced-button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star, ThumbsUp, MessageSquare, TrendingUp, MapPin } from "lucide-react"

const farmerFeedback = [
  {
    id: 1,
    name: "Rajesh Kumar",
    location: "Nashik, Maharashtra",
    seed: "Pioneer P1234",
    rating: 5,
    yield: "+32%",
    season: "Kharif 2023",
    feedback: "Excellent drought resistance. Even with irregular rainfall, got amazing yield. The AI recommendation was spot on!",
    verified: true,
    helpful: 24
  },
  {
    id: 2,
    name: "Priya Sharma",
    location: "Indore, Madhya Pradesh", 
    seed: "IARI Wheat-5",
    rating: 4,
    yield: "+25%",
    season: "Rabi 2023-24",
    feedback: "Good disease resistance and early maturity helped a lot. Will definitely use SeedSense recommendations again.",
    verified: true,
    helpful: 18
  },
  {
    id: 3,
    name: "Mukesh Patel",
    location: "Ahmedabad, Gujarat",
    seed: "Mahyco MH-421", 
    rating: 5,
    yield: "+28%",
    season: "Kharif 2023",
    feedback: "The bollworm resistance was exactly what I needed. Quality cotton and better market price too!",
    verified: true,
    helpful: 31
  }
]

const insights = [
  {
    metric: "Average Yield Increase",
    value: "28.5%",
    description: "Compared to traditional seed selection"
  },
  {
    metric: "Farmer Satisfaction",
    value: "4.7/5",
    description: "Based on seasonal feedback"
  },
  {
    metric: "Success Rate",
    value: "94%",
    description: "Farmers report positive outcomes"
  },
  {
    metric: "Cost Savings",
    value: "₹15,000",
    description: "Average per acre savings"
  }
]

const FeedbackSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Real Farmer Success Stories
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our AI learns from thousands of farmer experiences to continuously improve recommendations
          </p>
        </div>

        {/* Success Metrics */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          {insights.map((insight, index) => (
            <Card key={index} className="text-center p-6 bg-card shadow-natural border-0">
              <CardContent className="p-0">
                <div className="text-3xl font-bold text-primary mb-2">{insight.value}</div>
                <div className="font-semibold text-foreground mb-1">{insight.metric}</div>
                <div className="text-sm text-muted-foreground">{insight.description}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Feedback Cards */}
        <div className="grid lg:grid-cols-2 gap-6 mb-12">
          {farmerFeedback.map((feedback) => (
            <Card key={feedback.id} className="bg-card shadow-natural border-0 hover:shadow-elevated transition-smooth">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarImage src={`/avatars/farmer-${feedback.id}.jpg`} />
                      <AvatarFallback className="bg-primary text-primary-foreground">
                        {feedback.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="flex items-center gap-2">
                        <CardTitle className="text-base">{feedback.name}</CardTitle>
                        {feedback.verified && (
                          <Badge variant="outline" className="bg-success-light text-success border-success text-xs">
                            ✓ Verified
                          </Badge>
                        )}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <MapPin className="h-3 w-3" />
                        {feedback.location}
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-1 mb-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < feedback.rating ? 'fill-warning text-warning' : 'text-muted'
                          }`}
                        />
                      ))}
                    </div>
                    <Badge className="bg-success text-success-foreground">
                      <TrendingUp className="h-3 w-3 mr-1" />
                      {feedback.yield}
                    </Badge>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="flex items-center gap-4 text-sm">
                  <div className="flex items-center gap-1">
                    <span className="text-muted-foreground">Seed:</span>
                    <Badge variant="secondary">{feedback.seed}</Badge>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="text-muted-foreground">Season:</span>
                    <span className="font-medium">{feedback.season}</span>
                  </div>
                </div>

                <blockquote className="text-foreground leading-relaxed border-l-4 border-primary pl-4 italic">
                  "{feedback.feedback}"
                </blockquote>

                <div className="flex items-center justify-between pt-2">
                  <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
                    <ThumbsUp className="h-4 w-4 mr-1" />
                    Helpful ({feedback.helpful})
                  </Button>
                  <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
                    <MessageSquare className="h-4 w-4 mr-1" />
                    Reply
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Card className="max-w-2xl mx-auto p-8 bg-gradient-earth shadow-elevated border-0">
            <CardContent className="p-0 text-center">
              <h3 className="text-2xl font-bold text-primary-foreground mb-4">
                Share Your Experience
              </h3>
              <p className="text-primary-foreground/80 mb-6">
                Help improve our AI recommendations by sharing your farming results. 
                Your feedback helps thousands of other farmers make better decisions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="secondary" size="lg">
                  Submit Feedback
                </Button>
                <Button variant="outline" size="lg" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                  View All Stories
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

export default FeedbackSection