
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import {
  LayoutDashboard,
  Newspaper,
  BarChart2,
  Leaf,
  Truck,
  Calendar,
  Settings,
  HelpCircle,
  LogOut,
  X,
} from 'lucide-react';

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
}

const Sidebar = ({ sidebarOpen, setSidebarOpen }: SidebarProps) => {
  const location = useLocation();
  
  const navigation = [
    { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
    { name: 'News & Updates', href: '/dashboard/news', icon: Newspaper },
    { name: 'Green Reports', href: '/dashboard/reports', icon: Leaf },
    { name: 'Shipments', href: '/dashboard/shipments', icon: Truck },
    { name: 'Analytics', href: '/dashboard/analytics', icon: BarChart2 },
    { name: 'Events', href: '/dashboard/events', icon: Calendar },
  ];

  return (
    <>
      {/* Mobile sidebar backdrop */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-gray-600 bg-opacity-75 transition-opacity md:hidden",
          sidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={() => setSidebarOpen(false)}
      />
      
      {/* Sidebar */}
      <div
        className={cn(
          "fixed inset-y-0 left-0 z-50 w-64 bg-white border-r border-gray-200 transform transition-transform md:translate-x-0 md:static md:inset-auto md:h-screen",
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex flex-col h-full">
          {/* Sidebar header */}
          <div className="flex items-center justify-between px-4 h-16 border-b border-gray-200">
            <Link to="/dashboard" className="flex items-center">
              <img 
                src="https://waberers.com/images/site/waberers_logo.svg" 
                alt="Waberer's Logo" 
                className="h-6 mr-1" 
              />
              <div className="text-sm font-light text-gray-700">Partner Portal</div>
            </Link>
            <button
              className="md:hidden text-gray-500 hover:text-gray-700"
              onClick={() => setSidebarOpen(false)}
            >
              <X size={20} />
            </button>
          </div>
          
          {/* Navigation links */}
          <nav className="flex-1 px-2 py-4 space-y-1 overflow-y-auto">
            {navigation.map((item) => {
              const isActive = location.pathname === item.href;
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={cn(
                    "flex items-center px-3 py-2 text-sm font-medium rounded-md group transition-colors",
                    isActive
                      ? "bg-waberer-accent text-waberer-primary"
                      : "text-gray-700 hover:bg-gray-50 hover:text-waberer-primary"
                  )}
                >
                  <item.icon
                    className={cn(
                      "mr-3 h-5 w-5 flex-shrink-0 transition-colors",
                      isActive ? "text-waberer-primary" : "text-gray-500 group-hover:text-waberer-primary"
                    )}
                  />
                  {item.name}
                </Link>
              );
            })}
          </nav>
          
          {/* Bottom links */}
          <div className="p-4 border-t border-gray-200">
            <div className="space-y-1">
              <Link
                to="/dashboard/settings"
                className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 rounded-md hover:bg-gray-50 hover:text-waberer-primary"
              >
                <Settings className="mr-3 h-5 w-5 text-gray-500" />
                Settings
              </Link>
              <Link
                to="/dashboard/help"
                className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 rounded-md hover:bg-gray-50 hover:text-waberer-primary"
              >
                <HelpCircle className="mr-3 h-5 w-5 text-gray-500" />
                Help & Support
              </Link>
              <Link
                to="/"
                className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 rounded-md hover:bg-gray-50 hover:text-waberer-primary"
              >
                <LogOut className="mr-3 h-5 w-5 text-gray-500" />
                Logout
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
