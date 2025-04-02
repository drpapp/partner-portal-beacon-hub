
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowDownIcon, ArrowUpIcon, BarChart3, Leaf, TrendingUp, Truck } from "lucide-react";

const Dashboard = () => {
  const stats = [
    {
      name: "Total Shipments",
      value: "1,294",
      change: "+12.5%",
      trend: "up",
      icon: <Truck className="h-5 w-5 text-waberer-primary" />,
    },
    {
      name: "On-time Delivery",
      value: "98.3%",
      change: "+2.1%",
      trend: "up",
      icon: <TrendingUp className="h-5 w-5 text-waberer-primary" />,
    },
    {
      name: "CO2 Saved (tons)",
      value: "245.8",
      change: "+18.2%",
      trend: "up",
      icon: <Leaf className="h-5 w-5 text-waberer-primary" />,
    },
    {
      name: "Cost Efficiency",
      value: "86.7%",
      change: "-1.3%",
      trend: "down",
      icon: <BarChart3 className="h-5 w-5 text-waberer-primary" />,
    },
  ];

  const news = [
    {
      title: "Service Expansion to Southeast Europe",
      date: "May 24, 2023",
      description: "We're excited to announce our expanded service coverage to Southeast European markets.",
    },
    {
      title: "New Green Fleet Initiative",
      date: "May 18, 2023",
      description: "Introducing our new eco-friendly fleet with Euro 6 engines, reducing emissions by up to 30%.",
    },
    {
      title: "Partner Awards 2023",
      date: "May 12, 2023",
      description: "Nominations are now open for our annual Partner Excellence Awards. Submit your entry by June 15.",
    },
  ];

  const upcomingEvents = [
    {
      title: "Quarterly Business Review",
      date: "June 10, 2023",
      time: "10:00 AM - 12:00 PM",
      location: "Online (Teams Meeting)",
    },
    {
      title: "Logistics Innovation Summit",
      date: "June 15-16, 2023",
      time: "9:00 AM - 5:00 PM",
      location: "Budapest Congress Center",
    },
    {
      title: "Green Logistics Webinar",
      date: "June 22, 2023",
      time: "2:00 PM - 3:30 PM",
      location: "Online (Zoom Webinar)",
    },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Partner Dashboard</h1>
        <p className="text-muted-foreground">Welcome back! Here's an overview of your partnership metrics.</p>
      </div>

      {/* Stats overview */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <Card key={index}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between space-x-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-waberer-light">
                  {stat.icon}
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <span className="font-medium">{stat.change}</span>
                  {stat.trend === "up" ? (
                    <ArrowUpIcon className="h-4 w-4 text-green-500 ml-1" />
                  ) : (
                    <ArrowDownIcon className="h-4 w-4 text-red-500 ml-1" />
                  )}
                </div>
              </div>
              <div className="mt-4">
                <p className="text-sm font-medium text-muted-foreground">{stat.name}</p>
                <p className="text-3xl font-bold">{stat.value}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Charts and reporting */}
      <div>
        <Tabs defaultValue="overview">
          <TabsList className="mb-4 w-full md:w-auto">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="sustainability">Sustainability</TabsTrigger>
            <TabsTrigger value="performance">Performance</TabsTrigger>
          </TabsList>
          <TabsContent value="overview">
            <Card>
              <CardHeader>
                <CardTitle>Performance Overview</CardTitle>
                <CardDescription>Your logistics performance metrics for the past 30 days</CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <div className="h-[300px] bg-gray-100 w-full flex items-center justify-center border-t">
                  <div className="text-center p-8">
                    <div className="mx-auto w-12 h-12 mb-4 rounded-full bg-waberer-light flex items-center justify-center">
                      <BarChart3 className="text-waberer-primary h-6 w-6" />
                    </div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">Chart Placeholder</h3>
                    <p className="text-gray-500 max-w-md mx-auto">
                      Interactive chart will be rendered here with your performance data.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="sustainability">
            <Card>
              <CardHeader>
                <CardTitle>Sustainability Metrics</CardTitle>
                <CardDescription>Environmental impact of your logistics operations</CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <div className="h-[300px] bg-gray-100 w-full flex items-center justify-center border-t">
                  <div className="text-center p-8">
                    <div className="mx-auto w-12 h-12 mb-4 rounded-full bg-waberer-light flex items-center justify-center">
                      <Leaf className="text-waberer-primary h-6 w-6" />
                    </div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">Chart Placeholder</h3>
                    <p className="text-gray-500 max-w-md mx-auto">
                      Interactive chart will be rendered here with your sustainability data.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="performance">
            <Card>
              <CardHeader>
                <CardTitle>Delivery Performance</CardTitle>
                <CardDescription>On-time delivery and service level metrics</CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <div className="h-[300px] bg-gray-100 w-full flex items-center justify-center border-t">
                  <div className="text-center p-8">
                    <div className="mx-auto w-12 h-12 mb-4 rounded-full bg-waberer-light flex items-center justify-center">
                      <TrendingUp className="text-waberer-primary h-6 w-6" />
                    </div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">Chart Placeholder</h3>
                    <p className="text-gray-500 max-w-md mx-auto">
                      Interactive chart will be rendered here with your performance data.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      {/* Latest news and upcoming events */}
      <div className="grid gap-4 md:grid-cols-2">
        <Card className="md:col-span-1">
          <CardHeader>
            <CardTitle>Latest News</CardTitle>
            <CardDescription>Stay updated with company and industry news</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {news.map((item, index) => (
                <div key={index} className="border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                  <h3 className="font-medium text-base">{item.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{item.date}</p>
                  <p className="text-sm mt-2">{item.description}</p>
                  <a href="#" className="text-sm text-waberer-primary font-medium mt-2 inline-block hover:underline">
                    Read more
                  </a>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="md:col-span-1">
          <CardHeader>
            <CardTitle>Upcoming Events</CardTitle>
            <CardDescription>Important dates and meetings</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {upcomingEvents.map((event, index) => (
                <div key={index} className="border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                  <h3 className="font-medium text-base">{event.title}</h3>
                  <div className="flex items-center text-sm text-muted-foreground mt-1">
                    <span>{event.date}</span>
                    <span className="mx-2">•</span>
                    <span>{event.time}</span>
                  </div>
                  <p className="text-sm mt-1">{event.location}</p>
                  <a href="#" className="text-sm text-waberer-primary font-medium mt-2 inline-block hover:underline">
                    View details
                  </a>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
