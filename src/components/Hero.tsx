
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  Truck, 
  BarChart3, 
  Users, 
  ShieldCheck,
  TrendingUp,
  Leaf
} from 'lucide-react';

const Hero = () => {
  return (
    <div className="hero-gradient pt-28 pb-16 md:pt-32 md:pb-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 max-w-2xl">
            <div className="inline-block bg-waberer-light text-waberer-primary font-medium px-4 py-1.5 rounded-full text-sm">
              Hungary's Largest 3PL Provider
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Your Logistics <span className="text-waberer-primary">Partner Portal</span>
            </h1>
            <p className="text-xl text-gray-600">
              Access real-time data, track sustainability metrics, and stay updated with our partner ecosystem - all in one secure platform.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Button asChild size="lg" className="bg-waberer-primary hover:bg-waberer-secondary">
                <Link to="/login">Partner Login</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/contact">Request Access</Link>
              </Button>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 md:gap-6 pt-6">
              <div className="flex items-center">
                <Truck className="text-waberer-primary mr-2 h-5 w-5" />
                <span className="text-gray-700 font-medium">5000+ fleet</span>
              </div>
              <div className="flex items-center">
                <BarChart3 className="text-waberer-primary mr-2 h-5 w-5" />
                <span className="text-gray-700 font-medium">Real-time data</span>
              </div>
              <div className="flex items-center">
                <Users className="text-waberer-primary mr-2 h-5 w-5" />
                <span className="text-gray-700 font-medium">1000+ partners</span>
              </div>
              <div className="flex items-center">
                <ShieldCheck className="text-waberer-primary mr-2 h-5 w-5" />
                <span className="text-gray-700 font-medium">Secure access</span>
              </div>
              <div className="flex items-center">
                <TrendingUp className="text-waberer-primary mr-2 h-5 w-5" />
                <span className="text-gray-700 font-medium">Growth insights</span>
              </div>
              <div className="flex items-center">
                <Leaf className="text-waberer-primary mr-2 h-5 w-5" />
                <span className="text-gray-700 font-medium">Eco-friendly</span>
              </div>
            </div>
          </div>
          
          <div className="relative h-full flex justify-center">
            <img 
              src="/placeholder.svg" 
              alt="Waberer's Partner Portal Dashboard" 
              className="rounded-lg shadow-2xl max-w-full h-auto animate-float z-10"
            />
            <div className="absolute -bottom-5 -right-5 w-72 h-72 bg-waberer-light rounded-full mix-blend-multiply filter blur-3xl opacity-60"></div>
            <div className="absolute -top-5 -left-5 w-72 h-72 bg-waberer-accent rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
