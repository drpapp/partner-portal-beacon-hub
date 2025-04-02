
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { LogIn, MoveRight } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="py-16 md:py-24 bg-waberer-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Ready to Access Your Partner Portal?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Login to your account to access real-time data, reports, and stay updated with the latest news and events.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="bg-white text-waberer-secondary hover:bg-gray-100">
              <Link to="/login" className="flex items-center">
                <LogIn className="mr-2 h-5 w-5" />
                Partner Login
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
              <Link to="/contact" className="flex items-center">
                Request Access
                <MoveRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
