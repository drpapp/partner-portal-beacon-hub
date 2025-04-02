
import { useState, useEffect } from 'react';
import { Leaf, TrendingUp, Truck, Users } from 'lucide-react';

interface StatProps {
  icon: React.ReactNode;
  value: number;
  label: string;
  suffix?: string;
  color: string;
}

const StatCard = ({ icon, value, label, suffix = "", color }: StatProps) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    let start = 0;
    const end = value;
    const duration = 2000;
    const increment = end / (duration / 16);
    
    const timer = setInterval(() => {
      start += increment;
      if (start > end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    
    return () => clearInterval(timer);
  }, [value]);
  
  return (
    <div className="stats-card">
      <div className={`w-16 h-16 flex items-center justify-center rounded-full mb-4 ${color}`}>
        {icon}
      </div>
      <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
        {count.toLocaleString()}{suffix}
      </div>
      <div className="text-gray-600">{label}</div>
    </div>
  );
};

const StatsSection = () => {
  const stats = [
    {
      icon: <Truck className="text-waberer-primary h-8 w-8" />,
      value: 5000,
      label: "Vehicles in fleet",
      suffix: "+",
      color: "bg-waberer-light"
    },
    {
      icon: <Leaf className="text-waberer-primary h-8 w-8" />,
      value: 24650,
      label: "Tons of CO2 saved",
      color: "bg-waberer-light"
    },
    {
      icon: <Users className="text-waberer-primary h-8 w-8" />,
      value: 1200,
      label: "Partners worldwide",
      suffix: "+",
      color: "bg-waberer-light"
    },
    {
      icon: <TrendingUp className="text-waberer-primary h-8 w-8" />,
      value: 98,
      label: "On-time delivery rate",
      suffix: "%",
      color: "bg-waberer-light"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              icon={stat.icon}
              value={stat.value}
              label={stat.label}
              suffix={stat.suffix}
              color={stat.color}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
