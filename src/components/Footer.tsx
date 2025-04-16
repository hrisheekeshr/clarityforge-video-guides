
import { Link } from "react-router-dom";
import { Twitter, Linkedin, Facebook, Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="container-padding pb-12 pt-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="text-xl font-bold text-clarity-600 mb-4 inline-block">
              ClarityForge
            </Link>
            <p className="text-gray-600 mb-4">
              Contextual video guidance for enterprise SaaS applications.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-clarity-600 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-clarity-600 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-clarity-600 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-clarity-600 transition-colors">
                <Github size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              <li><Link to="#features" className="text-gray-600 hover:text-clarity-600">Features</Link></li>
              <li><Link to="#benefits" className="text-gray-600 hover:text-clarity-600">Benefits</Link></li>
              <li><Link to="#pricing" className="text-gray-600 hover:text-clarity-600">Pricing</Link></li>
              <li><Link to="#" className="text-gray-600 hover:text-clarity-600">Roadmap</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><Link to="#" className="text-gray-600 hover:text-clarity-600">Documentation</Link></li>
              <li><Link to="#" className="text-gray-600 hover:text-clarity-600">Blog</Link></li>
              <li><Link to="#testimonials" className="text-gray-600 hover:text-clarity-600">Testimonials</Link></li>
              <li><Link to="#faq" className="text-gray-600 hover:text-clarity-600">FAQ</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link to="#" className="text-gray-600 hover:text-clarity-600">About Us</Link></li>
              <li><Link to="#" className="text-gray-600 hover:text-clarity-600">Careers</Link></li>
              <li><Link to="#" className="text-gray-600 hover:text-clarity-600">Contact</Link></li>
              <li><Link to="#" className="text-gray-600 hover:text-clarity-600">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} ClarityForge. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="#" className="text-gray-500 hover:text-clarity-600 text-sm">Terms of Service</Link>
            <Link to="#" className="text-gray-500 hover:text-clarity-600 text-sm">Privacy Policy</Link>
            <Link to="#" className="text-gray-500 hover:text-clarity-600 text-sm">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
