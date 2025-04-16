
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <span className="text-xl font-bold text-clarity-600">ClarityForge</span>
            </Link>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link to="#features" className="text-foreground hover:text-clarity-600 px-3 py-2 rounded-md text-sm font-medium">
                  Features
                </Link>
                <Link to="#benefits" className="text-foreground hover:text-clarity-600 px-3 py-2 rounded-md text-sm font-medium">
                  Benefits
                </Link>
                <Link to="#testimonials" className="text-foreground hover:text-clarity-600 px-3 py-2 rounded-md text-sm font-medium">
                  Testimonials
                </Link>
                <Link to="#pricing" className="text-foreground hover:text-clarity-600 px-3 py-2 rounded-md text-sm font-medium">
                  Pricing
                </Link>
                <Link to="#faq" className="text-foreground hover:text-clarity-600 px-3 py-2 rounded-md text-sm font-medium">
                  FAQ
                </Link>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <Button variant="outline" className="mr-3">Sign In</Button>
            <Button className="bg-gradient-to-r from-clarity-600 to-blush-500 text-white">Book a Demo</Button>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-foreground hover:text-clarity-600 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden glass-card absolute top-16 left-0 right-0 p-4 animate-fade-in">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="#features" className="block px-3 py-2 rounded-md text-base font-medium hover:text-clarity-600">
              Features
            </Link>
            <Link to="#benefits" className="block px-3 py-2 rounded-md text-base font-medium hover:text-clarity-600">
              Benefits
            </Link>
            <Link to="#testimonials" className="block px-3 py-2 rounded-md text-base font-medium hover:text-clarity-600">
              Testimonials
            </Link>
            <Link to="#pricing" className="block px-3 py-2 rounded-md text-base font-medium hover:text-clarity-600">
              Pricing
            </Link>
            <Link to="#faq" className="block px-3 py-2 rounded-md text-base font-medium hover:text-clarity-600">
              FAQ
            </Link>
          </div>
          <div className="flex flex-col gap-2 pt-4 border-t border-gray-200">
            <Button variant="outline" className="w-full">Sign In</Button>
            <Button className="w-full bg-gradient-to-r from-clarity-600 to-blush-500 text-white">Book a Demo</Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
