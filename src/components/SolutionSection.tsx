
import { Button } from "@/components/ui/button";
import { MonitorPlay, FileVideo, BarChart4, Lock, Search } from "lucide-react";

const SolutionSection = () => {
  return (
    <div className="section-padding container-padding bg-secondary/30" id="features">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">
            Our <span className="gradient-text">Complete Solution</span> for SaaS User Guidance
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            ClarityForge integrates seamlessly with your product to provide contextual help exactly when and where users need it.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="mux-card p-8 rounded-xl overflow-hidden">
            <div className="mb-4 text-primary font-semibold flex items-center">
              <MonitorPlay className="mr-2 h-5 w-5" />
              EMBEDDED VIDEO SUPPORT
            </div>
            <div>
              <div className="relative">
                <div className="aspect-video bg-gray-50 rounded-lg flex flex-col items-center justify-center p-4">
                  <div className="w-full bg-white rounded-lg shadow-sm p-4 mb-4">
                    <div className="h-3 w-24 bg-gray-200 rounded mb-2"></div>
                    <div className="h-6 w-40 bg-primary/10 rounded"></div>
                  </div>
                  
                  <div className="mux-card p-4 rounded-lg w-full max-w-sm relative">
                    <div className="absolute -top-3 right-3 bg-white px-2 py-1 rounded-full text-xs font-medium text-primary border border-gray-100">
                      Help Video
                    </div>
                    <div className="aspect-video bg-gray-100 rounded flex items-center justify-center">
                      <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center">
                        <div className="border-t-4 border-r-4 border-transparent border-l-8 border-l-white h-0 w-0 ml-1"></div>
                      </div>
                    </div>
                    <div className="mt-2">
                      <div className="font-medium text-gray-900">How to Complete This Form</div>
                      <div className="text-sm text-gray-500">1:30 min</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900">Embedded Video Tutorials</h3>
                <p className="text-gray-600">
                  Contextual videos appear directly within your application interface, providing immediate guidance without disrupting workflow.
                </p>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col space-y-6">
            <div className="mux-card p-6 rounded-lg">
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-2 rounded-lg">
                  <FileVideo className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">Content Management System</h3>
                  <p className="text-gray-600">
                    Easily update, manage, and synchronize your video content with product changes through our intuitive CMS.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mux-card p-6 rounded-lg">
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-2 rounded-lg">
                  <BarChart4 className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">Analytics Dashboard</h3>
                  <p className="text-gray-600">
                    Track video engagement and identify pain points with comprehensive analytics on user interaction.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mux-card p-6 rounded-lg">
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-2 rounded-lg">
                  <Lock className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">Enterprise-Grade Security</h3>
                  <p className="text-gray-600">
                    SOC 2 compliant with role-based access controls to keep your content and user data secure.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mux-card p-6 rounded-lg">
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-2 rounded-lg">
                  <Search className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">Intelligent Search</h3>
                  <p className="text-gray-600">
                    Allow users to find relevant tutorial videos with keyword search and smart recommendations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
            See All Features
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SolutionSection;
