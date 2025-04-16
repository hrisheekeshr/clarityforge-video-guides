
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

const CTASection = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Demo request submitted!",
        description: "We'll contact you soon to schedule your personalized demo.",
      });
      setEmail("");
      setIsSubmitting(false);
    }, 1000);
  };
  
  return (
    <div className="section-padding container-padding bg-primary/5">
      <div className="max-w-7xl mx-auto">
        <div className="bg-primary p-8 sm:p-12 md:p-16 rounded-2xl">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-white">
              Ready to Transform Your User Experience?
            </h2>
            <p className="text-xl mb-8 text-white/80">
              Join industry leaders using ClarityForge to reduce support costs, increase user adoption, and deliver exceptional customer experiences.
            </p>
            
            <form onSubmit={handleSubmit} className="mb-8 max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Enter your work email"
                  className="flex-1 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-white bg-white/10 border border-white/20 text-white"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <Button 
                  className="bg-white text-primary hover:bg-white/90 font-medium" 
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Requesting..." : "Request Demo"}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </form>
            
            <div className="inline-block bg-white/10 p-3 rounded-lg text-white/80 text-sm">
              No credit card required. Start your free trial today.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTASection;
