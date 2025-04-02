
import { 
  BarChart3, 
  TrendingUp, 
  Newspaper, 
  Leaf, 
  Truck, 
  Calendar 
} from 'lucide-react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => (
  <div className="feature-card">
    <div className="mb-4 text-waberer-primary">{icon}</div>
    <h3 className="text-xl font-semibold mb-2 text-gray-900">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const Features = () => {
  const features = [
    {
      icon: <BarChart3 size={32} />,
      title: "Data Analytics",
      description: "Access comprehensive analytics dashboards showing your logistics performance metrics in real-time."
    },
    {
      icon: <Newspaper size={32} />,
      title: "News & Updates",
      description: "Stay updated with the latest company news, service updates, and industry trends."
    },
    {
      icon: <Leaf size={32} />,
      title: "Green Reporting",
      description: "Monitor sustainability metrics and see the environmental impact of your logistics operations."
    },
    {
      icon: <TrendingUp size={32} />,
      title: "Performance Insights",
      description: "Track key performance indicators and identify opportunities for optimization and growth."
    },
    {
      icon: <Truck size={32} />,
      title: "Shipment Tracking",
      description: "Track your shipments in real-time with detailed status updates and location information."
    },
    {
      icon: <Calendar size={32} />,
      title: "Event Calendar",
      description: "Stay on top of important deadlines, industry events, and partnership meetings."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Everything You Need in One Platform
          </h2>
          <p className="text-xl text-gray-600">
            Our partner portal provides all the tools and insights you need to optimize your logistics operations and make data-driven decisions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
