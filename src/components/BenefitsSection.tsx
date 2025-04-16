
import { Zap, TrendingUp, LifeBuoy, RefreshCw, PieChart } from "lucide-react";

const BenefitsSection = () => {
  return (
    <div className="section-padding container-padding bg-clarity-50/50" id="benefits">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Transform Your <span className="gradient-text">User Experience</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            See how ClarityForge delivers measurable improvements across your organization.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="col-span-1 md:col-span-3 glass-card p-8 rounded-xl">
            <div className="flex flex-col md:flex-row md:items-center gap-8">
              <div className="flex-1">
                <div className="inline-flex items-center py-1 px-3 rounded-full glass mb-4">
                  <span className="text-sm font-medium text-clarity-600">PROVEN RESULTS</span>
                </div>
                <h3 className="text-2xl font-bold mb-3">The ClarityForge Impact</h3>
                <p className="text-gray-600 mb-6">
                  Our customers report significant improvements in user adoption, support efficiency, and overall satisfaction.
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  <div className="glass p-4 rounded-xl text-center">
                    <div className="text-3xl font-bold text-clarity-600 mb-1">+65%</div>
                    <div className="text-sm text-gray-600">User Adoption</div>
                  </div>
                  <div className="glass p-4 rounded-xl text-center">
                    <div className="text-3xl font-bold text-clarity-600 mb-1">-40%</div>
                    <div className="text-sm text-gray-600">Support Tickets</div>
                  </div>
                  <div className="glass p-4 rounded-xl text-center">
                    <div className="text-3xl font-bold text-clarity-600 mb-1">3.5x</div>
                    <div className="text-sm text-gray-600">Content ROI</div>
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <div className="glass p-5 rounded-xl">
                  <div className="flex justify-between items-center mb-4">
                    <div className="font-medium">Before vs. After ClarityForge</div>
                    <div className="text-xs text-gray-500">180 Day Period</div>
                  </div>
                  <div className="h-40 relative">
                    {/* Simplified chart representation */}
                    <div className="absolute bottom-0 left-0 h-full w-full flex items-end">
                      <div className="flex-1 flex flex-col items-center">
                        <div className="text-xs text-gray-500 mb-2">Before</div>
                        <div className="w-12 h-1/3 bg-gray-300 rounded-t"></div>
                      </div>
                      <div className="flex-1 flex flex-col items-center">
                        <div className="text-xs text-gray-500 mb-2">After</div>
                        <div className="w-12 h-4/5 bg-gradient-to-t from-clarity-600 to-blush-400 rounded-t"></div>
                      </div>
                    </div>
                  </div>
                  <div className="text-center text-sm text-gray-500 mt-2">
                    Feature Adoption Rate
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="glass-card p-6 rounded-xl">
            <div className="flex items-start space-x-4">
              <div className="glass-card p-3 rounded-lg">
                <Zap className="h-6 w-6 text-clarity-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Instant, Contextual Access</h3>
                <p className="text-gray-600">
                  Videos appear right when users need them, within their workflow, eliminating the need to search elsewhere.
                </p>
                <div className="mt-4 text-clarity-600 font-medium">
                  90% faster help access
                </div>
              </div>
            </div>
          </div>
          
          <div className="glass-card p-6 rounded-xl">
            <div className="flex items-start space-x-4">
              <div className="glass-card p-3 rounded-lg">
                <TrendingUp className="h-6 w-6 text-clarity-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Higher User Engagement</h3>
                <p className="text-gray-600">
                  Contextual help increases successful task completion and overall product satisfaction.
                </p>
                <div className="mt-4 text-clarity-600 font-medium">
                  65% more feature adoption
                </div>
              </div>
            </div>
          </div>
          
          <div className="glass-card p-6 rounded-xl">
            <div className="flex items-start space-x-4">
              <div className="glass-card p-3 rounded-lg">
                <LifeBuoy className="h-6 w-6 text-clarity-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Reduced Support Load</h3>
                <p className="text-gray-600">
                  Decrease dependency on CSMs and support teams by enabling self-service learning.
                </p>
                <div className="mt-4 text-clarity-600 font-medium">
                  40% fewer support tickets
                </div>
              </div>
            </div>
          </div>
          
          <div className="glass-card p-6 rounded-xl">
            <div className="flex items-start space-x-4">
              <div className="glass-card p-3 rounded-lg">
                <RefreshCw className="h-6 w-6 text-clarity-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Better Content Management</h3>
                <p className="text-gray-600">
                  Makes updating videos simpler and more consistent across your entire platform.
                </p>
                <div className="mt-4 text-clarity-600 font-medium">
                  75% faster content updates
                </div>
              </div>
            </div>
          </div>
          
          <div className="glass-card p-6 rounded-xl">
            <div className="flex items-start space-x-4">
              <div className="glass-card p-3 rounded-lg">
                <PieChart className="h-6 w-6 text-clarity-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Actionable Analytics</h3>
                <p className="text-gray-600">
                  Track usage to identify user pain points and improve content quality and targeting.
                </p>
                <div className="mt-4 text-clarity-600 font-medium">
                  100% visibility into user needs
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BenefitsSection;
