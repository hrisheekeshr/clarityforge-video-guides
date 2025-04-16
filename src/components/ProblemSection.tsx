
import { AlertCircle, Clock, MoveDown, Search, BarChart } from "lucide-react";

const ProblemSection = () => {
  return (
    <div className="section-padding container-padding bg-clarity-50/50" id="problem">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Why SaaS Companies <span className="gradient-text">Struggle with User Adoption</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Non-technical users often face challenges when learning new software, leading to frustration, increased support costs, and lower ROI.
          </p>
        </div>
        
        <div className="bento-grid">
          <div className="bento-item">
            <div className="flex items-start space-x-4">
              <div className="glass-card p-2 rounded-lg">
                <AlertCircle className="h-6 w-6 text-clarity-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Scattered Resources</h3>
                <p className="text-gray-600">
                  Tutorial videos and help documentation are spread across multiple channels, making them difficult to find when needed.
                </p>
              </div>
            </div>
          </div>
          
          <div className="bento-item">
            <div className="flex items-start space-x-4">
              <div className="glass-card p-2 rounded-lg">
                <Search className="h-6 w-6 text-clarity-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Contextual Disconnect</h3>
                <p className="text-gray-600">
                  Users need to leave their workflow to search for help, breaking concentration and reducing productivity.
                </p>
              </div>
            </div>
          </div>
          
          <div className="bento-item">
            <div className="flex items-start space-x-4">
              <div className="glass-card p-2 rounded-lg">
                <Clock className="h-6 w-6 text-clarity-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Outdated Content</h3>
                <p className="text-gray-600">
                  Training materials quickly become outdated as software evolves, causing confusion and support requests.
                </p>
              </div>
            </div>
          </div>
          
          <div className="bento-item">
            <div className="flex items-start space-x-4">
              <div className="glass-card p-2 rounded-lg">
                <MoveDown className="h-6 w-6 text-clarity-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Overwhelmed Support</h3>
                <p className="text-gray-600">
                  Support teams spend excessive time answering repetitive questions that could be resolved with better self-service options.
                </p>
              </div>
            </div>
          </div>
          
          <div className="bento-item">
            <div className="flex items-start space-x-4">
              <div className="glass-card p-2 rounded-lg">
                <BarChart className="h-6 w-6 text-clarity-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Lack of Analytics</h3>
                <p className="text-gray-600">
                  Without proper tracking, companies can't identify which tutorials are effective or where users are struggling most.
                </p>
              </div>
            </div>
          </div>
          
          <div className="bento-item bento-item-large glass-dark">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="flex-1">
                <h3 className="text-2xl font-semibold mb-4">The Result? Poor User Adoption</h3>
                <p className="mb-4">
                  When users can't quickly find help, they abandon tasks, underutilize your product, and generate more support tickets—increasing costs and decreasing satisfaction.
                </p>
                <div className="text-xl font-semibold">
                  <span className="text-blush-300">70%</span> of SaaS customers report abandoning features they couldn't figure out how to use.
                </div>
              </div>
              <div className="flex-1 flex justify-center">
                <div className="glass-card bg-white/10 p-4 rounded-xl w-full max-w-sm">
                  <div className="flex justify-between items-center mb-3">
                    <div className="font-medium text-white">Support Ticket Trends</div>
                    <div className="text-xs text-white/70">Without Contextual Help</div>
                  </div>
                  <div className="h-20 flex items-end space-x-2">
                    <div className="bg-blush-400/80 h-1/3 w-6 rounded-t"></div>
                    <div className="bg-blush-400/80 h-2/5 w-6 rounded-t"></div>
                    <div className="bg-blush-400/80 h-1/2 w-6 rounded-t"></div>
                    <div className="bg-blush-400/80 h-3/5 w-6 rounded-t"></div>
                    <div className="bg-blush-400/80 h-4/5 w-6 rounded-t"></div>
                    <div className="bg-blush-400/80 h-full w-6 rounded-t"></div>
                  </div>
                  <div className="mt-2 text-xs text-white/70 flex justify-between">
                    <span>Week 1</span>
                    <span>Week 6</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProblemSection;
