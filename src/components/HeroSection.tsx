
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="pt-24 pb-16 md:pt-32 md:pb-24 container-padding">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col space-y-8 animate-fade-in">
            <div>
              <div className="glass inline-flex items-center py-2 px-4 rounded-full mb-6">
                <span className="bg-clarity-500 h-2 w-2 rounded-full mr-2"></span>
                <span className="text-sm font-medium">Enterprise SaaS Video Solution</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
                Instant Video Help <span className="gradient-text">Within Your SaaS Product</span>
              </h1>
              
              <p className="text-lg md:text-xl text-gray-600 max-w-2xl">
                Embed contextual tutorial videos directly into your SaaS interface, providing instant guidance to users exactly when and where they need it.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-gradient-to-r from-clarity-600 to-blush-500 text-white">
                Schedule a Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="group">
                <Play className="mr-2 h-5 w-5 text-clarity-600 group-hover:text-clarity-700" />
                See How It Works
              </Button>
            </div>
            
            <div className="glass p-4 rounded-xl mt-4 max-w-md">
              <div className="text-sm text-gray-500 mb-2">Trusted by enterprise teams</div>
              <div className="flex items-center space-x-6">
                <div className="text-clarity-800 font-semibold">GovEVA</div>
                <div className="text-clarity-800 font-semibold">CareStack</div>
                <div className="text-clarity-800 font-semibold">BuildSmart</div>
              </div>
            </div>
          </div>
          
          <div className="animate-fade-in">
            <div className="glass-card p-2 rounded-2xl overflow-hidden animate-float">
              <div className="relative">
                <div className="absolute top-2 right-2 z-10 glass px-3 py-1 rounded-full text-sm font-medium text-clarity-600">
                  Tutorial Video
                </div>
                <div className="aspect-video bg-clarity-100/50 rounded-xl flex items-center justify-center">
                  <div className="glass-card p-4 rounded-full">
                    <Play className="h-12 w-12 text-clarity-600" />
                  </div>
                </div>
                <div className="glass mt-1 p-3 rounded-xl">
                  <div className="font-medium">Navigating the Dashboard</div>
                  <div className="text-sm text-gray-500">2:45 min • Updated 2 days ago</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
