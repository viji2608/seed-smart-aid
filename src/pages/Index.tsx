import SeedSenseHeader from "@/components/SeedSenseHeader"
import HeroSection from "@/components/HeroSection"
import RecommendationDashboard from "@/components/RecommendationDashboard"
import FeatureShowcase from "@/components/FeatureShowcase"
import FeedbackSection from "@/components/FeedbackSection"

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SeedSenseHeader />
      <HeroSection />
      <RecommendationDashboard />
      <FeatureShowcase />
      <FeedbackSection />
    </div>
  );
};

export default Index;
