
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Quote } from "lucide-react";

interface TestimonialProps {
  quote: string;
  author: string;
  role: string;
  company: string;
  highlight?: boolean;
}

const Testimonial = ({ quote, author, role, company, highlight = false }: TestimonialProps) => {
  return (
    <div className={`${highlight ? 'glass-dark' : 'glass-card'} p-6 rounded-xl relative`}>
      <Quote className={`h-10 w-10 absolute -top-3 -left-3 ${highlight ? 'text-clarity-300' : 'text-clarity-300/30'}`} />
      <div className="pt-4">
        <p className={`mb-6 text-lg ${highlight ? 'text-white' : 'text-gray-600'}`}>
          "{quote}"
        </p>
        <div className="flex items-center">
          <div className={`h-10 w-10 rounded-full bg-clarity-200 flex items-center justify-center mr-3 ${highlight ? 'text-clarity-600' : ''}`}>
            {author.charAt(0)}
          </div>
          <div>
            <div className={`font-medium ${highlight ? 'text-white' : ''}`}>{author}</div>
            <div className={`text-sm ${highlight ? 'text-gray-300' : 'text-gray-500'}`}>{role}, {company}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

const TestimonialsSection = () => {
  return (
    <div className="section-padding container-padding" id="testimonials">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            What Our <span className="gradient-text">Customers Say</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hear from companies that have transformed their user experience with ClarityForge.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Testimonial 
            quote="ClarityForge has cut our support tickets by 42% within just 3 months. Our users love having instant video help right inside our platform."
            author="Sarah Johnson"
            role="VP of Product"
            company="GovEVA"
          />
          
          <Testimonial 
            quote="The ability to track which videos users are watching has been invaluable. We've completely revamped our onboarding based on the insights."
            author="Michael Chen"
            role="Director of Customer Success"
            company="BuildSmart"
          />
          
          <Testimonial 
            quote="As a healthcare SaaS company, we needed a secure solution for helping our non-technical users. ClarityForge has been transformative."
            author="Dr. Amelia Rodriguez"
            role="CEO"
            company="CareStack"
            highlight={true}
          />
        </div>
        
        <div className="mt-16 glass-card p-8 rounded-xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <div className="text-clarity-600 font-semibold mb-2">TRUSTED BY ENTERPRISE TEAMS</div>
              <h3 className="text-2xl font-bold mb-4">Join these forward-thinking companies</h3>
              <p className="text-gray-600 max-w-md">
                Leading enterprises trust ClarityForge to elevate their user experience and reduce support costs.
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-8">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <div className="h-12 px-4 glass flex items-center justify-center rounded-lg font-bold text-clarity-800">
                      GovEVA
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Government Enterprise Verification Application</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <div className="h-12 px-4 glass flex items-center justify-center rounded-lg font-bold text-clarity-800">
                      CareStack
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Healthcare Management Platform</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <div className="h-12 px-4 glass flex items-center justify-center rounded-lg font-bold text-clarity-800">
                      BuildSmart
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Construction Management Software</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <div className="h-12 px-4 glass flex items-center justify-center rounded-lg font-bold text-clarity-800">
                      EduTrack
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Educational Institution Management</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
