
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

interface PricingTierProps {
  name: string;
  price: string;
  description: string;
  features: string[];
  popular?: boolean;
  buttonText?: string;
}

const PricingTier = ({ 
  name, 
  price, 
  description, 
  features, 
  popular = false,
  buttonText = "Get Started"
}: PricingTierProps) => {
  return (
    <div className={`${popular ? 'border-clarity-500 relative z-10 shadow-xl scale-105' : 'border-transparent'} glass-card p-8 rounded-xl border-2 transition-all duration-300 hover:shadow-xl`}>
      {popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-clarity-600 to-blush-500 text-white px-4 py-1 rounded-full text-sm font-medium">
          Most Popular
        </div>
      )}
      
      <div className="text-clarity-600 font-semibold mb-2">{name}</div>
      <div className="flex items-baseline mb-4">
        <span className="text-4xl font-bold">{price}</span>
        {price !== 'Custom' && <span className="text-gray-500 ml-2">/month</span>}
      </div>
      <p className="text-gray-600 mb-6">{description}</p>
      
      <div className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <div key={index} className="flex items-start">
            <div className="flex-shrink-0 h-6 w-6 rounded-full bg-clarity-100 flex items-center justify-center mr-3">
              <Check className="h-4 w-4 text-clarity-600" />
            </div>
            <span className="text-gray-600">{feature}</span>
          </div>
        ))}
      </div>
      
      <Button 
        className={`w-full ${popular ? 'bg-gradient-to-r from-clarity-600 to-blush-500 text-white' : ''}`}
        variant={popular ? 'default' : 'outline'}
      >
        {buttonText}
      </Button>
    </div>
  );
};

const PricingSection = () => {
  return (
    <div className="section-padding container-padding bg-clarity-50/50" id="pricing">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Simple, <span className="gradient-text">Transparent Pricing</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose the plan that fits your business needs. All plans include core features with enhanced capabilities as you scale.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <PricingTier 
            name="STARTER"
            price="$499"
            description="Perfect for small SaaS companies starting to scale their user education."
            features={[
              "Up to 20 embedded videos",
              "Basic analytics dashboard",
              "Standard content management",
              "Email support",
              "1 admin user"
            ]}
            buttonText="Start Free Trial"
          />
          
          <PricingTier 
            name="GROWTH"
            price="$999"
            description="Ideal for growing companies with established user bases and advanced needs."
            features={[
              "Up to 100 embedded videos",
              "Advanced analytics & reporting",
              "Content versioning & scheduling",
              "Priority support",
              "5 admin users",
              "Custom branding"
            ]}
            popular={true}
            buttonText="Start Free Trial"
          />
          
          <PricingTier 
            name="ENTERPRISE"
            price="Custom"
            description="For large organizations requiring enterprise-grade security and support."
            features={[
              "Unlimited embedded videos",
              "Enterprise analytics suite",
              "Advanced content management",
              "Dedicated support manager",
              "Unlimited admin users",
              "SOC 2 compliance",
              "Custom integrations"
            ]}
            buttonText="Contact Sales"
          />
        </div>
        
        <div className="text-center">
          <p className="text-gray-500 mb-4">
            Need a custom solution? Contact our sales team to discuss your specific requirements.
          </p>
          <Button variant="outline">
            Request Custom Quote
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PricingSection;
