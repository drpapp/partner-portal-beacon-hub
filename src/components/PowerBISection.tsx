
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const PowerBISection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Interactive <span className="text-waberer-primary">Data Reports</span>
          </h2>
          <p className="text-xl text-gray-600">
            Explore our interactive Power BI reports for real-time insights into your logistics operations and sustainability metrics.
          </p>
        </div>
        
        <Tabs defaultValue="performance" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="bg-gray-100">
              <TabsTrigger value="performance" className="text-sm md:text-base">
                Performance Metrics
              </TabsTrigger>
              <TabsTrigger value="sustainability" className="text-sm md:text-base">
                Sustainability Data
              </TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="performance" className="w-full">
            <Card>
              <CardHeader>
                <CardTitle>Logistics Performance Dashboard</CardTitle>
                <CardDescription>
                  Track on-time delivery rates, efficiency metrics, and cost analytics.
                </CardDescription>
              </CardHeader>
              <CardContent className="p-0 overflow-hidden rounded-b-lg">
                <div className="aspect-video bg-gray-100 w-full flex items-center justify-center border-t">
                  <div className="text-center p-8">
                    <div className="mx-auto w-16 h-16 mb-4 rounded-full bg-waberer-light flex items-center justify-center">
                      <div className="text-waberer-primary text-2xl font-bold">BI</div>
                    </div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">PowerBI Report Placeholder</h3>
                    <p className="text-gray-500 max-w-md mx-auto">
                      Interactive Power BI report will be embedded here after connection to your data sources.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="sustainability" className="w-full">
            <Card>
              <CardHeader>
                <CardTitle>Environmental Impact Dashboard</CardTitle>
                <CardDescription>
                  Monitor CO2 emissions savings, fuel efficiency, and environmental metrics.
                </CardDescription>
              </CardHeader>
              <CardContent className="p-0 overflow-hidden rounded-b-lg">
                <div className="aspect-video bg-gray-100 w-full flex items-center justify-center border-t">
                  <div className="text-center p-8">
                    <div className="mx-auto w-16 h-16 mb-4 rounded-full bg-waberer-light flex items-center justify-center">
                      <div className="text-waberer-primary text-2xl font-bold">BI</div>
                    </div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">PowerBI Report Placeholder</h3>
                    <p className="text-gray-500 max-w-md mx-auto">
                      Interactive Power BI report will be embedded here after connection to your data sources.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default PowerBISection;
