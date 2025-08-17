import { ArrowRight, Sparkles, TrendingUp, Shield } from "lucide-react"
import { Button } from "@/components/ui/enhanced-button"
import { Card } from "@/components/ui/card"
import heroImage from "@/assets/hero-agriculture.jpg"

const HeroSection = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center bg-gradient-to-br from-background to-secondary overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Modern agriculture with AI technology"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/70"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 bg-success-light text-success px-3 py-1 rounded-full text-sm font-medium">
                <Sparkles className="h-4 w-4" />
                AI-Powered Agriculture
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                Smart Seed Selection for
                <span className="bg-gradient-hero bg-clip-text text-transparent block">
                  Climate Resilience
                </span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
                SeedSense revolutionizes farming with AI-driven seed recommendations that adapt to climate volatility, 
                soil health, and pest resistance. Maximize yields with personalized, region-specific insights.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="xl" className="group">
                Get Recommendations
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="xl">
                View Demo
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">95%</div>
                <div className="text-sm text-muted-foreground">Accuracy Rate</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">50k+</div>
                <div className="text-sm text-muted-foreground">Farmers Trust Us</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">30%</div>
                <div className="text-sm text-muted-foreground">Yield Increase</div>
              </div>
            </div>
          </div>

          {/* Feature Cards */}
          <div className="space-y-6">
            <Card className="p-6 bg-card shadow-natural border-0 hover:shadow-elevated transition-smooth">
              <div className="flex items-start gap-4">
                <div className="bg-accent-light p-3 rounded-lg">
                  <TrendingUp className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Climate-Adaptive AI</h3>
                  <p className="text-muted-foreground">
                    Advanced algorithms analyze weather patterns, soil conditions, and historical data 
                    to recommend the most resilient seed varieties for your specific location.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card shadow-natural border-0 hover:shadow-elevated transition-smooth">
              <div className="flex items-start gap-4">
                <div className="bg-success-light p-3 rounded-lg">
                  <Shield className="h-6 w-6 text-success" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Pest Resistance Intelligence</h3>
                  <p className="text-muted-foreground">
                    Comprehensive pest resistance profiles help you choose seeds that naturally defend 
                    against regional threats, reducing pesticide dependency.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card shadow-natural border-0 hover:shadow-elevated transition-smooth">
              <div className="flex items-start gap-4">
                <div className="bg-warning-light p-3 rounded-lg">
                  <Sparkles className="h-6 w-6 text-warning" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Continuous Learning</h3>
                  <p className="text-muted-foreground">
                    Our AI continuously learns from farmer feedback and seasonal outcomes, 
                    improving recommendations for better yields year after year.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection