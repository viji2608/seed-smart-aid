import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Brain, Smartphone, Globe, Shield, BarChart3, Users, Zap, Leaf } from "lucide-react"

const features = [
  {
    icon: Brain,
    title: "AI-Powered Intelligence",
    description: "Advanced machine learning algorithms analyze climate patterns, soil health, and pest resistance data to provide personalized seed recommendations.",
    benefits: ["95% accuracy rate", "Continuous learning", "Real-time adaptation"],
    color: "accent"
  },
  {
    icon: Smartphone,
    title: "Mobile & SMS Support",
    description: "Access recommendations through our mobile app or SMS/IVR system in regional languages for maximum accessibility.",
    benefits: ["Offline access", "Multi-language support", "Voice enabled"],
    color: "primary"
  },
  {
    icon: Globe,
    title: "Hyperlocal Mapping",
    description: "Geo-specific climate and soil data ensure recommendations are tailored to your exact location and microclimate conditions.",
    benefits: ["GPS-based insights", "Microclimate analysis", "Regional optimization"],
    color: "success"
  },
  {
    icon: Shield,
    title: "Pest Resistance Profiles",
    description: "Comprehensive pest and disease resistance data helps you choose varieties that naturally defend against regional threats.",
    benefits: ["Reduced pesticide use", "Lower crop loss", "Sustainable farming"],
    color: "warning"
  },
  {
    icon: BarChart3,
    title: "Yield Forecasting",
    description: "Visual yield simulations and historical performance data help you make informed decisions about seed selection.",
    benefits: ["Predictive analytics", "Risk assessment", "ROI calculation"],
    color: "accent"
  },
  {
    icon: Users,
    title: "Community Feedback",
    description: "Learn from thousands of farmer experiences and contribute to the collective knowledge base for better recommendations.",
    benefits: ["Peer learning", "Verified reviews", "Success stories"],
    color: "primary"
  }
]

const stats = [
  { icon: Zap, label: "Faster Decisions", value: "3x", color: "accent" },
  { icon: Leaf, label: "Yield Improvement", value: "30%", color: "success" },
  { icon: Shield, label: "Risk Reduction", value: "40%", color: "warning" },
  { icon: Users, label: "Active Farmers", value: "50k+", color: "primary" }
]

const FeatureShowcase = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-secondary to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-primary-light text-primary-foreground">
            Comprehensive Platform
          </Badge>
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Everything You Need for Smart Farming
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            SeedSense combines cutting-edge AI technology with practical farming insights 
            to revolutionize how farmers select and cultivate crops.
          </p>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon
            return (
              <Card key={index} className="p-6 text-center bg-card shadow-natural border-0">
                <CardContent className="p-0">
                  <div className={`inline-flex p-3 rounded-lg mb-3 ${
                    stat.color === 'accent' ? 'bg-accent-light' :
                    stat.color === 'success' ? 'bg-success-light' :
                    stat.color === 'warning' ? 'bg-warning-light' : 'bg-primary-light'
                  }`}>
                    <IconComponent className={`h-6 w-6 ${
                      stat.color === 'accent' ? 'text-accent' :
                      stat.color === 'success' ? 'text-success' :
                      stat.color === 'warning' ? 'text-warning' : 'text-primary'
                    }`} />
                  </div>
                  <div className="text-2xl font-bold text-foreground mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <Card key={index} className="bg-card shadow-natural border-0 hover:shadow-elevated transition-smooth group">
                <CardHeader className="pb-4">
                  <div className={`inline-flex p-3 rounded-lg w-fit mb-3 group-hover:scale-110 transition-transform ${
                    feature.color === 'accent' ? 'bg-accent-light' :
                    feature.color === 'success' ? 'bg-success-light' :
                    feature.color === 'warning' ? 'bg-warning-light' : 'bg-primary-light'
                  }`}>
                    <IconComponent className={`h-6 w-6 ${
                      feature.color === 'accent' ? 'text-accent' :
                      feature.color === 'success' ? 'text-success' :
                      feature.color === 'warning' ? 'text-warning' : 'text-primary'
                    }`} />
                  </div>
                  <CardTitle className="text-xl text-foreground">{feature.title}</CardTitle>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center gap-2">
                        <div className={`w-1.5 h-1.5 rounded-full ${
                          feature.color === 'accent' ? 'bg-accent' :
                          feature.color === 'success' ? 'bg-success' :
                          feature.color === 'warning' ? 'bg-warning' : 'bg-primary'
                        }`}></div>
                        <span className="text-sm text-muted-foreground">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <Card className="max-w-4xl mx-auto p-8 bg-gradient-tech-nature shadow-glow border-0">
            <CardContent className="p-0">
              <h3 className="text-3xl font-bold text-primary-foreground mb-4">
                Ready to Transform Your Farming?
              </h3>
              <p className="text-primary-foreground/90 text-lg mb-8 max-w-2xl mx-auto">
                Join thousands of farmers who trust SeedSense for smarter, more profitable, 
                and sustainable agriculture. Start your journey today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-primary hover:bg-white/90 px-8 py-3 rounded-lg font-semibold transition-smooth">
                  Start Free Trial
                </button>
                <button className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-3 rounded-lg font-semibold transition-smooth">
                  Schedule Demo
                </button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

export default FeatureShowcase