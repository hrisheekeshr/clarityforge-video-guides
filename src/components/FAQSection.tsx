
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  return (
    <div className="section-padding container-padding" id="faq">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-lg text-gray-600">
            Find answers to common questions about ClarityForge.
          </p>
        </div>
        
        <div className="glass-card p-6 rounded-xl">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1" className="border-b border-gray-200">
              <AccordionTrigger className="text-lg font-medium py-4">
                How long does it take to implement ClarityForge?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                Typical implementation takes 2-4 weeks depending on the complexity of your SaaS application. Our team will guide you through the process, including integration support, content planning, and initial setup. Many clients start seeing benefits within the first week of deployment.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-2" className="border-b border-gray-200">
              <AccordionTrigger className="text-lg font-medium py-4">
                Is ClarityForge secure enough for enterprise use?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                Yes, ClarityForge is built with enterprise-grade security. We are SOC 2 compliant, implement robust access controls, and encrypt all data both in transit and at rest. Our platform is regularly audited for security vulnerabilities and follows industry best practices for data protection.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-3" className="border-b border-gray-200">
              <AccordionTrigger className="text-lg font-medium py-4">
                Can we use our existing tutorial videos?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                Absolutely! ClarityForge is designed to work with your existing video content. You can import videos from platforms like YouTube, Vimeo, or your own storage. Our platform also offers tools to help you organize, tag, and manage these videos effectively within your application.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-4" className="border-b border-gray-200">
              <AccordionTrigger className="text-lg font-medium py-4">
                How do we measure the ROI of implementing ClarityForge?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                ClarityForge provides comprehensive analytics that help you measure impact in several areas: reduction in support tickets (typically 30-40%), increase in feature adoption (avg. 65%), decrease in onboarding time (avg. 50%), and improved user satisfaction. Our team can help you establish baselines and track improvements over time.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-5" className="border-b border-gray-200">
              <AccordionTrigger className="text-lg font-medium py-4">
                Will ClarityForge work with our tech stack?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                ClarityForge is designed to be platform-agnostic and integrates with most modern web applications. We offer SDKs for JavaScript, React, Angular, and Vue.js, as well as a REST API for custom integrations. Our team will assess your specific tech stack during the initial consultation to ensure seamless integration.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-6">
              <AccordionTrigger className="text-lg font-medium py-4">
                Do you offer a free trial?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                Yes, we offer a 14-day free trial of our Growth plan with no credit card required. This allows you to experience the full capabilities of ClarityForge and evaluate how it works with your specific application. We also provide a free consultation to help you get the most out of your trial period.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
