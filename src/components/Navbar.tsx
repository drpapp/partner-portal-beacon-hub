
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import {
  Menu,
  LogIn,
  X,
} from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="w-full bg-white shadow-sm fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main navigation */}
        <div className="flex items-center justify-between py-3">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <div className="flex items-center">
                <img 
                  src="https://waberers.com/images/site/waberers_logo.svg" 
                  alt="Waberer's Logo" 
                  className="h-10 mr-2" 
                />
                <div className="text-xl font-light text-gray-700">Partner Portal</div>
              </div>
            </Link>
          </div>

          {/* Desktop - Only show login button */}
          <div className="hidden md:flex items-center">
            <Button asChild variant="default" className="bg-waberer-primary hover:bg-waberer-secondary">
              <Link to="/login" className="flex items-center">
                <LogIn className="h-4 w-4 mr-2" />
                Login
              </Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-500 hover:text-waberer-primary focus:outline-none"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile navigation */}
      <div
        className={cn(
          "md:hidden bg-white w-full shadow-lg transition-all duration-300 ease-in-out",
          isOpen ? "max-h-96 py-4" : "max-h-0 py-0 overflow-hidden"
        )}
      >
        <div className="container mx-auto px-4 flex flex-col space-y-4">
          <Link to="/" className="nav-link active py-2">Home</Link>
          <Link to="/about" className="nav-link py-2">About</Link>
          <Link to="/services" className="nav-link py-2">Services</Link>
          <Link to="/contact" className="nav-link py-2">Contact</Link>
          <Button asChild variant="default" className="w-full bg-waberer-primary hover:bg-waberer-secondary">
            <Link to="/login" className="flex items-center justify-center">
              <LogIn className="h-4 w-4 mr-2" />
              Login
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
