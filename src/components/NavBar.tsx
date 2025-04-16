
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <nav className="sticky top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <span className="text-xl font-bold text-gray-900">ClarityForge</span>
            </Link>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <Link to="#features" className="text-sm font-medium text-gray-600 hover:text-gray-900">
                  Features
                </Link>
                <Link to="#benefits" className="text-sm font-medium text-gray-600 hover:text-gray-900">
                  Benefits
                </Link>
                <Link to="#testimonials" className="text-sm font-medium text-gray-600 hover:text-gray-900">
                  Testimonials
                </Link>
                <Link to="#pricing" className="text-sm font-medium text-gray-600 hover:text-gray-900">
                  Pricing
                </Link>
                <Link to="#faq" className="text-sm font-medium text-gray-600 hover:text-gray-900">
                  FAQ
                </Link>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <Button variant="outline" className="mr-3 text-sm font-medium">Sign In</Button>
            <Button className="bg-primary hover:bg-primary/90 text-white text-sm font-medium">Book a Demo</Button>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-900 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-white border-b border-gray-100 shadow-md animate-fade-in">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="#features" className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-gray-900">
              Features
            </Link>
            <Link to="#benefits" className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-gray-900">
              Benefits
            </Link>
            <Link to="#testimonials" className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-gray-900">
              Testimonials
            </Link>
            <Link to="#pricing" className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-gray-900">
              Pricing
            </Link>
            <Link to="#faq" className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-gray-900">
              FAQ
            </Link>
          </div>
          <div className="flex flex-col gap-2 p-4 border-t border-gray-100">
            <Button variant="outline" className="w-full justify-center">Sign In</Button>
            <Button className="w-full bg-primary hover:bg-primary/90 text-white justify-center">Book a Demo</Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
