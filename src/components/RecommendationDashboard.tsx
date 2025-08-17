import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/enhanced-button"
import { Progress } from "@/components/ui/progress"
import { Star, MapPin, Thermometer, Droplets, Bug, TrendingUp, AlertTriangle } from "lucide-react"

const seedRecommendations = [
  {
    id: 1,
    name: "Pioneer P1234",
    crop: "Corn",
    confidence: 95,
    yieldPotential: "High",
    resistanceLevel: "Excellent",
    adaptability: "Climate Resilient",
    features: ["Drought Tolerant", "Pest Resistant", "High Yield"],
    rating: 4.8,
    price: "₹2,400/kg",
    availability: "In Stock"
  },
  {
    id: 2,
    name: "Mahyco MH-421",
    crop: "Cotton",
    confidence: 88,
    yieldPotential: "Medium-High",
    resistanceLevel: "Good",
    adaptability: "Heat Tolerant",
    features: ["Bollworm Resistant", "Extended Season", "Premium Quality"],
    rating: 4.6,
    price: "₹3,200/packet",
    availability: "Limited Stock"
  },
  {
    id: 3,
    name: "IARI Wheat-5",
    crop: "Wheat",
    confidence: 92,
    yieldPotential: "High",
    resistanceLevel: "Very Good",
    adaptability: "Winter Hardy",
    features: ["Disease Resistant", "High Protein", "Early Maturity"],
    rating: 4.7,
    price: "₹45/kg",
    availability: "In Stock"
  }
]

const environmentalFactors = [
  {
    icon: Thermometer,
    label: "Temperature",
    value: "28°C",
    trend: "Stable",
    status: "optimal"
  },
  {
    icon: Droplets,
    label: "Soil Moisture",
    value: "65%",
    trend: "Increasing",
    status: "good"
  },
  {
    icon: Bug,
    label: "Pest Risk",
    value: "Low",
    trend: "Decreasing",
    status: "good"
  },
  {
    icon: TrendingUp,
    label: "Growth Rate",
    value: "85%",
    trend: "Optimal",
    status: "optimal"
  }
]

const RecommendationDashboard = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-background to-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Your Personalized Seed Recommendations
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            AI-powered recommendations based on your location, soil analysis, and current climate conditions
          </p>
        </div>

        {/* Environmental Factors */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {environmentalFactors.map((factor, index) => {
            const IconComponent = factor.icon
            return (
              <Card key={index} className="p-4 bg-card shadow-natural border-0">
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg ${
                    factor.status === 'optimal' ? 'bg-success-light' :
                    factor.status === 'good' ? 'bg-accent-light' : 'bg-warning-light'
                  }`}>
                    <IconComponent className={`h-5 w-5 ${
                      factor.status === 'optimal' ? 'text-success' :
                      factor.status === 'good' ? 'text-accent' : 'text-warning'
                    }`} />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{factor.label}</p>
                    <p className="font-semibold text-foreground">{factor.value}</p>
                  </div>
                </div>
              </Card>
            )
          })}
        </div>

        {/* Location Info */}
        <Card className="mb-8 bg-card shadow-natural border-0">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-primary" />
                <div>
                  <h3 className="font-semibold text-foreground">Current Location</h3>
                  <p className="text-muted-foreground">Pune, Maharashtra • Kharif Season 2024</p>
                </div>
              </div>
              <Badge variant="outline" className="bg-success-light text-success border-success">
                Climate Favorable
              </Badge>
            </div>
          </CardContent>
        </Card>

        {/* Recommendations */}
        <div className="grid gap-6">
          {seedRecommendations.map((seed) => (
            <Card key={seed.id} className="bg-card shadow-natural border-0 hover:shadow-elevated transition-smooth">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-xl text-foreground">{seed.name}</CardTitle>
                    <CardDescription className="flex items-center gap-2 mt-1">
                      <Badge variant="secondary">{seed.crop}</Badge>
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-warning text-warning" />
                        <span className="text-sm font-medium">{seed.rating}</span>
                      </div>
                    </CardDescription>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-muted-foreground">AI Confidence</p>
                    <div className="flex items-center gap-2">
                      <Progress value={seed.confidence} className="w-20 h-2" />
                      <span className="text-sm font-semibold text-success">{seed.confidence}%</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <h4 className="font-medium text-foreground mb-2">Performance Metrics</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Yield Potential:</span>
                        <span className="text-sm font-medium text-foreground">{seed.yieldPotential}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Resistance:</span>
                        <span className="text-sm font-medium text-foreground">{seed.resistanceLevel}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Adaptability:</span>
                        <span className="text-sm font-medium text-foreground">{seed.adaptability}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-foreground mb-2">Key Features</h4>
                    <div className="flex flex-wrap gap-2">
                      {seed.features.map((feature, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-foreground mb-2">Purchase Info</h4>
                    <div className="space-y-2">
                      <p className="text-lg font-semibold text-primary">{seed.price}</p>
                      <div className="flex items-center gap-2">
                        <div className={`w-2 h-2 rounded-full ${
                          seed.availability === 'In Stock' ? 'bg-success' : 'bg-warning'
                        }`}></div>
                        <span className="text-sm text-muted-foreground">{seed.availability}</span>
                      </div>
                      <Button variant="sky" size="sm" className="w-full">
                        Get Details
                      </Button>
                    </div>
                  </div>
                </div>

                {seed.availability === 'Limited Stock' && (
                  <div className="flex items-center gap-2 p-3 bg-warning-light rounded-lg">
                    <AlertTriangle className="h-4 w-4 text-warning" />
                    <span className="text-sm text-warning-foreground">
                      Limited availability - Reserve now to secure your seeds
                    </span>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8">
          <Button variant="hero" size="lg">
            View All Recommendations
          </Button>
        </div>
      </div>
    </section>
  )
}

export default RecommendationDashboard