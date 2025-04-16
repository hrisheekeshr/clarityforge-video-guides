
import { Link } from "react-router-dom";
import { Twitter, Linkedin, Facebook, Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="container-padding py-12 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="text-xl font-bold text-gray-900 mb-4 inline-block">
              ClarityForge
            </Link>
            <p className="text-gray-600 mb-4">
              Contextual video guidance for enterprise SaaS applications.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Github size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold mb-4 text-gray-900">Product</h3>
            <ul className="space-y-3">
              <li><Link to="#features" className="text-gray-600 hover:text-primary">Features</Link></li>
              <li><Link to="#benefits" className="text-gray-600 hover:text-primary">Benefits</Link></li>
              <li><Link to="#pricing" className="text-gray-600 hover:text-primary">Pricing</Link></li>
              <li><Link to="#" className="text-gray-600 hover:text-primary">Roadmap</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-4 text-gray-900">Resources</h3>
            <ul className="space-y-3">
              <li><Link to="#" className="text-gray-600 hover:text-primary">Documentation</Link></li>
              <li><Link to="#" className="text-gray-600 hover:text-primary">Blog</Link></li>
              <li><Link to="#testimonials" className="text-gray-600 hover:text-primary">Testimonials</Link></li>
              <li><Link to="#faq" className="text-gray-600 hover:text-primary">FAQ</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-4 text-gray-900">Company</h3>
            <ul className="space-y-3">
              <li><Link to="#" className="text-gray-600 hover:text-primary">About Us</Link></li>
              <li><Link to="#" className="text-gray-600 hover:text-primary">Careers</Link></li>
              <li><Link to="#" className="text-gray-600 hover:text-primary">Contact</Link></li>
              <li><Link to="#" className="text-gray-600 hover:text-primary">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-100 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} ClarityForge. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="#" className="text-gray-500 hover:text-primary text-sm">Terms of Service</Link>
            <Link to="#" className="text-gray-500 hover:text-primary text-sm">Privacy Policy</Link>
            <Link to="#" className="text-gray-500 hover:text-primary text-sm">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
