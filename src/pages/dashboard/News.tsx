
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Bell, Calendar, CalendarClock, Newspaper, Search } from "lucide-react";

const News = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const news = [
    {
      id: 1,
      title: "Service Expansion to Southeast Europe",
      date: "May 24, 2023",
      category: "Company",
      content: "We're excited to announce our expanded service coverage to Southeast European markets including Romania, Bulgaria, and Serbia. This strategic expansion allows us to offer more comprehensive logistics solutions to our partners operating in these regions. The new routes will be operational starting June 1, 2023.",
      image: "/placeholder.svg"
    },
    {
      id: 2,
      title: "New Green Fleet Initiative",
      date: "May 18, 2023",
      category: "Sustainability",
      content: "Introducing our new eco-friendly fleet with Euro 6 engines, reducing emissions by up to 30%. As part of our commitment to sustainable logistics, we've invested in 500 new vehicles that meet the highest environmental standards. This initiative will help our partners reduce their carbon footprint and achieve their sustainability goals.",
      image: "/placeholder.svg"
    },
    {
      id: 3,
      title: "Partner Awards 2023",
      date: "May 12, 2023",
      category: "Events",
      content: "Nominations are now open for our annual Partner Excellence Awards. Submit your entry by June 15. This year's categories include Sustainability Champion, Innovation Leader, and Logistics Excellence. Winners will be announced at our annual Partner Summit in September.",
      image: "/placeholder.svg"
    },
    {
      id: 4,
      title: "Digital Documentation System Upgrade",
      date: "May 8, 2023",
      category: "System",
      content: "We're upgrading our digital documentation system to improve efficiency and reduce paper waste. The new system will go live on June 1, 2023. Training sessions will be available in the weeks leading up to the launch. Please contact your account manager to schedule your team's training.",
      image: "/placeholder.svg"
    },
    {
      id: 5,
      title: "Quarterly Business Review: Q1 Results",
      date: "April 15, 2023",
      category: "Business",
      content: "We're pleased to report strong Q1 results, with a 15% increase in on-time deliveries and a 12% reduction in carbon emissions across our network. These improvements have been driven by our ongoing digital transformation and fleet modernization initiatives.",
      image: "/placeholder.svg"
    }
  ];
  
  const events = [
    {
      id: 1,
      title: "Quarterly Business Review",
      date: "June 10, 2023",
      time: "10:00 AM - 12:00 PM",
      location: "Online (Teams Meeting)",
      description: "Join us for a review of Q2 performance and upcoming initiatives. The session will include presentations from our executive team and an open Q&A session."
    },
    {
      id: 2,
      title: "Logistics Innovation Summit",
      date: "June 15-16, 2023",
      time: "9:00 AM - 5:00 PM",
      location: "Budapest Congress Center",
      description: "A two-day event focusing on the latest innovations in logistics technology and sustainability. Featured speakers include industry leaders and innovation experts."
    },
    {
      id: 3,
      title: "Green Logistics Webinar",
      date: "June 22, 2023",
      time: "2:00 PM - 3:30 PM",
      location: "Online (Zoom Webinar)",
      description: "Learn about the latest trends in sustainable logistics and how your business can benefit from green transportation solutions."
    },
    {
      id: 4,
      title: "Partner Workshop: Digital Documentation",
      date: "June 28, 2023",
      time: "10:00 AM - 12:30 PM",
      location: "Online (Teams Workshop)",
      description: "A hands-on workshop to help partners transition to our new digital documentation system. Technical experts will provide step-by-step guidance."
    }
  ];
  
  const systemMessages = [
    {
      id: 1,
      title: "Scheduled Maintenance",
      date: "June 3, 2023",
      time: "22:00 - 02:00 CEST",
      severity: "Info",
      message: "The Partner Portal will be unavailable during this time due to scheduled system maintenance. Please plan accordingly."
    },
    {
      id: 2,
      title: "System Update: New Features",
      date: "May 20, 2023",
      severity: "Info",
      message: "We've added new features to the dashboard including enhanced reporting capabilities and a redesigned analytics section."
    },
    {
      id: 3,
      title: "Password Policy Update",
      date: "May 15, 2023",
      severity: "Important",
      message: "Our password policy has been updated to enhance security. All users will be prompted to update their passwords upon next login."
    },
    {
      id: 4,
      title: "API Update Notice",
      date: "May 10, 2023",
      severity: "Warning",
      message: "We're deprecating API v1.0 on July 1. Please migrate to API v2.0 before this date to avoid service disruption."
    }
  ];
  
  const filteredNews = news.filter(item => 
    item.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    item.content.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  const filteredEvents = events.filter(item => 
    item.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    item.description.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  const filteredSystemMessages = systemMessages.filter(item => 
    item.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    item.message.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">News & Updates</h1>
        <p className="text-muted-foreground">Stay informed with the latest news, events, and system messages.</p>
      </div>
      
      {/* Search */}
      <div className="relative max-w-md">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
        <Input
          type="search"
          placeholder="Search news and events..."
          className="pl-10"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      
      <Tabs defaultValue="news">
        <TabsList className="mb-4">
          <TabsTrigger value="news" className="flex items-center">
            <Newspaper className="mr-2 h-4 w-4" />
            News
          </TabsTrigger>
          <TabsTrigger value="events" className="flex items-center">
            <Calendar className="mr-2 h-4 w-4" />
            Events
          </TabsTrigger>
          <TabsTrigger value="system" className="flex items-center">
            <Bell className="mr-2 h-4 w-4" />
            System Messages
          </TabsTrigger>
        </TabsList>
        
        {/* News Tab */}
        <TabsContent value="news">
          <div className="space-y-6">
            {filteredNews.length === 0 ? (
              <div className="text-center py-8">
                <p className="text-muted-foreground">No news articles found matching your search.</p>
              </div>
            ) : (
              filteredNews.map((item) => (
                <Card key={item.id}>
                  <CardContent className="p-0">
                    <div className="flex flex-col lg:flex-row">
                      <div className="lg:w-1/4 bg-gray-100 p-4 lg:p-6 flex items-center justify-center">
                        <img src={item.image} alt={item.title} className="h-40 w-auto object-contain" />
                      </div>
                      <div className="lg:w-3/4 p-6">
                        <div className="flex items-center justify-between mb-2">
                          <Badge className="bg-waberer-primary hover:bg-waberer-secondary">{item.category}</Badge>
                          <span className="text-sm text-muted-foreground">{item.date}</span>
                        </div>
                        <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                        <p className="text-gray-600 mb-4">{item.content}</p>
                        <Button variant="outline" className="text-waberer-primary hover:text-waberer-primary hover:bg-waberer-light border-waberer-primary">
                          Read More
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))
            )}
          </div>
        </TabsContent>
        
        {/* Events Tab */}
        <TabsContent value="events">
          <div className="space-y-6">
            {filteredEvents.length === 0 ? (
              <div className="text-center py-8">
                <p className="text-muted-foreground">No events found matching your search.</p>
              </div>
            ) : (
              filteredEvents.map((event) => (
                <Card key={event.id}>
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="md:w-1/4">
                        <div className="bg-waberer-light text-waberer-primary rounded-lg p-4 text-center">
                          <CalendarClock className="h-8 w-8 mx-auto mb-2" />
                          <div className="text-2xl font-bold">{event.date.split(' ')[1].replace(',', '')}</div>
                          <div className="text-sm">{event.date.split(' ')[0]}</div>
                          <div className="mt-2 text-xs font-medium">{event.time}</div>
                        </div>
                      </div>
                      <div className="md:w-3/4">
                        <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                        <div className="text-sm text-muted-foreground mb-2">
                          <strong>Location:</strong> {event.location}
                        </div>
                        <p className="text-gray-600 mb-4">{event.description}</p>
                        <div className="flex space-x-3">
                          <Button variant="default" className="bg-waberer-primary hover:bg-waberer-secondary">
                            Add to Calendar
                          </Button>
                          <Button variant="outline">View Details</Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))
            )}
          </div>
        </TabsContent>
        
        {/* System Messages Tab */}
        <TabsContent value="system">
          <div className="space-y-6">
            {filteredSystemMessages.length === 0 ? (
              <div className="text-center py-8">
                <p className="text-muted-foreground">No system messages found matching your search.</p>
              </div>
            ) : (
              filteredSystemMessages.map((message) => (
                <Card key={message.id}>
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center mr-4 flex-shrink-0 ${
                        message.severity === 'Warning' 
                          ? 'bg-yellow-100 text-yellow-600' 
                          : message.severity === 'Important' 
                            ? 'bg-blue-100 text-blue-600' 
                            : 'bg-gray-100 text-gray-600'
                      }`}>
                        <Bell className="h-5 w-5" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center">
                            <h3 className="text-lg font-semibold">{message.title}</h3>
                            {message.severity && (
                              <Badge className={`ml-3 ${
                                message.severity === 'Warning' 
                                  ? 'bg-yellow-500 hover:bg-yellow-600' 
                                  : message.severity === 'Important' 
                                    ? 'bg-blue-500 hover:bg-blue-600' 
                                    : 'bg-gray-500 hover:bg-gray-600'
                              }`}>
                                {message.severity}
                              </Badge>
                            )}
                          </div>
                          <span className="text-sm text-muted-foreground">{message.date}</span>
                        </div>
                        {message.time && (
                          <div className="text-sm text-muted-foreground mb-2">
                            <strong>Time:</strong> {message.time}
                          </div>
                        )}
                        <p className="text-gray-600">{message.message}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))
            )}
          </div>
        </TabsContent>
      </Tabs>
      
      {/* Newsletter Subscription Box */}
      <Card className="bg-waberer-light border-waberer-primary border">
        <CardHeader className="pb-2">
          <CardTitle className="text-waberer-primary">Subscribe to our Newsletter</CardTitle>
          <CardDescription>Get the latest news and updates delivered to your inbox</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col sm:flex-row gap-3">
            <Input placeholder="Email address" type="email" className="flex-1" />
            <Button className="bg-waberer-primary hover:bg-waberer-secondary">
              Subscribe
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default News;
