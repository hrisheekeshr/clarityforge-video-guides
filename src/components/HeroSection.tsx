
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="pt-20 pb-16 md:pt-24 md:pb-20 container-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col space-y-8">
            <div>
              <div className="inline-flex items-center py-1 px-3 rounded-full bg-secondary mb-6">
                <span className="text-xs font-semibold text-gray-700">Enterprise SaaS Video Solution</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-gray-900">
                Instant Video Help <span className="gradient-text">Within Your SaaS Product</span>
              </h1>
              
              <p className="text-lg md:text-xl text-gray-600 max-w-2xl">
                Embed contextual tutorial videos directly into your SaaS interface, providing instant guidance to users exactly when and where they need it.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-medium py-6">
                Schedule a Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="group py-6">
                <Play className="mr-2 h-5 w-5 text-primary group-hover:text-primary/90" />
                See How It Works
              </Button>
            </div>
            
            <div className="mt-4 max-w-md">
              <div className="text-sm text-gray-500 mb-2">Trusted by enterprise teams</div>
              <div className="flex items-center space-x-6">
                <div className="text-gray-800 font-semibold">GovEVA</div>
                <div className="text-gray-800 font-semibold">CareStack</div>
                <div className="text-gray-800 font-semibold">BuildSmart</div>
              </div>
            </div>
          </div>
          
          <div>
            <div className="mux-card p-4 rounded-xl overflow-hidden">
              <div className="relative">
                <div className="absolute top-2 right-2 z-10 bg-white/90 px-3 py-1 rounded-full text-sm font-medium text-primary">
                  Tutorial Video
                </div>
                <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
                  <div className="bg-primary/10 p-4 rounded-full">
                    <Play className="h-12 w-12 text-primary" />
                  </div>
                </div>
                <div className="mt-3 p-2">
                  <div className="font-medium text-gray-900">Navigating the Dashboard</div>
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
