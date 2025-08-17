import { Sprout, Menu, Bell, User } from "lucide-react"
import { Button } from "@/components/ui/enhanced-button"

const SeedSenseHeader = () => {
  return (
    <header className="bg-card border-b border-border shadow-natural sticky top-0 z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo and Brand */}
        <div className="flex items-center gap-3">
          <div className="bg-gradient-hero p-2 rounded-lg shadow-glow">
            <Sprout className="h-6 w-6 text-primary-foreground" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-foreground tracking-tight">SeedSense</h1>
            <p className="text-xs text-muted-foreground">AI-Powered Agriculture</p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <a href="#dashboard" className="text-foreground hover:text-primary transition-smooth font-medium">
            Dashboard
          </a>
          <a href="#recommendations" className="text-foreground hover:text-primary transition-smooth font-medium">
            Recommendations
          </a>
          <a href="#analytics" className="text-foreground hover:text-primary transition-smooth font-medium">
            Analytics
          </a>
          <a href="#feedback" className="text-foreground hover:text-primary transition-smooth font-medium">
            Feedback
          </a>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="h-5 w-5" />
            <span className="absolute -top-1 -right-1 h-3 w-3 bg-warning rounded-full"></span>
          </Button>
          <Button variant="ghost" size="icon">
            <User className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  )
}

export default SeedSenseHeader