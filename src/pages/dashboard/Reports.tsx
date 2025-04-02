
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  BarChart3,
  Calendar,
  Download,
  FileText,
  Leaf,
  Trees,
  Truck,
} from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";

const Reports = () => {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Green Reports</h1>
        <p className="text-muted-foreground">
          Track your environmental impact and sustainability metrics
        </p>
      </div>

      {/* CO2 Savings Overview */}
      <Card>
        <CardHeader className="pb-2">
          <CardTitle>CO2 Savings Overview</CardTitle>
          <CardDescription>
            Track the CO2 emissions you've saved through our partnership
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="flex flex-col items-center justify-center text-center space-y-4">
              <div className="relative w-40 h-40 rounded-full bg-waberer-light flex items-center justify-center">
                <div className="text-waberer-primary text-4xl font-bold">24.6</div>
                <div className="text-waberer-primary text-sm font-medium absolute bottom-6">
                  tons
                </div>
                <svg
                  className="absolute inset-0"
                  width="160"
                  height="160"
                  viewBox="0 0 160 160"
                >
                  <circle
                    cx="80"
                    cy="80"
                    r="70"
                    fill="none"
                    stroke="#e4e4e7"
                    strokeWidth="12"
                  />
                  <circle
                    cx="80"
                    cy="80"
                    r="70"
                    fill="none"
                    stroke="#008b1e"
                    strokeWidth="12"
                    strokeDasharray="439.8"
                    strokeDashoffset="132"
                    transform="rotate(-90 80 80)"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-lg">CO2 Saved This Year</h3>
                <p className="text-sm text-muted-foreground">
                  +18.2% from last year
                </p>
              </div>
            </div>

            <div className="lg:col-span-2 space-y-6">
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <div className="font-medium">Quarterly Progress</div>
                  <div className="text-sm text-muted-foreground">
                    18.5 / 30 tons goal
                  </div>
                </div>
                <Progress value={62} className="h-2 bg-gray-200" />
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <div className="text-sm font-medium">Q1</div>
                    <Leaf className="h-4 w-4 text-waberer-primary" />
                  </div>
                  <div className="text-2xl font-bold">5.2t</div>
                  <div className="text-xs text-muted-foreground">
                    +8% vs last year
                  </div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <div className="text-sm font-medium">Q2</div>
                    <Leaf className="h-4 w-4 text-waberer-primary" />
                  </div>
                  <div className="text-2xl font-bold">6.8t</div>
                  <div className="text-xs text-muted-foreground">
                    +12% vs last year
                  </div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <div className="text-sm font-medium">Q3</div>
                    <Leaf className="h-4 w-4 text-waberer-primary" />
                  </div>
                  <div className="text-2xl font-bold">6.5t</div>
                  <div className="text-xs text-muted-foreground">
                    +15% vs last year
                  </div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <div className="text-sm font-medium">Q4</div>
                    <Leaf className="h-4 w-4 text-waberer-primary" />
                  </div>
                  <div className="text-2xl font-bold">6.1t</div>
                  <div className="text-xs text-muted-foreground">
                    Projected
                  </div>
                </div>
              </div>

              <div className="text-sm text-muted-foreground">
                <div className="flex items-center">
                  <Trees className="h-4 w-4 text-waberer-primary mr-2" />
                  Your CO2 savings are equivalent to planting approximately 
                  <span className="font-bold text-black mx-1">1,230 trees</span> this year.
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Detailed Reports */}
      <Tabs defaultValue="emissions">
        <TabsList className="mb-4">
          <TabsTrigger value="emissions" className="flex items-center">
            <Truck className="mr-2 h-4 w-4" />
            Emissions
          </TabsTrigger>
          <TabsTrigger value="efficiency" className="flex items-center">
            <BarChart3 className="mr-2 h-4 w-4" />
            Efficiency
          </TabsTrigger>
          <TabsTrigger value="reports" className="flex items-center">
            <FileText className="mr-2 h-4 w-4" />
            Reports
          </TabsTrigger>
        </TabsList>

        {/* Emissions Tab */}
        <TabsContent value="emissions">
          <Card>
            <CardHeader>
              <CardTitle>Carbon Emissions Analysis</CardTitle>
              <CardDescription>
                Detailed breakdown of your carbon footprint reduction
              </CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <div className="h-[300px] bg-gray-100 w-full flex items-center justify-center border-t">
                <div className="text-center p-8">
                  <div className="mx-auto w-12 h-12 mb-4 rounded-full bg-waberer-light flex items-center justify-center">
                    <Leaf className="text-waberer-primary h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">
                    Emissions Chart Placeholder
                  </h3>
                  <p className="text-gray-500 max-w-md mx-auto">
                    Interactive emissions chart will be rendered here with your
                    data.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">
                  Emissions by Transport Type
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <div className="text-sm font-medium">Road Transport</div>
                      <div className="text-sm">68%</div>
                    </div>
                    <Progress value={68} className="h-2 bg-gray-200" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <div className="text-sm font-medium">Rail Transport</div>
                      <div className="text-sm">22%</div>
                    </div>
                    <Progress value={22} className="h-2 bg-gray-200" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <div className="text-sm font-medium">Warehousing</div>
                      <div className="text-sm">10%</div>
                    </div>
                    <Progress value={10} className="h-2 bg-gray-200" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Monthly Comparison</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-3 gap-4">
                    <div className="bg-gray-50 p-3 rounded-lg text-center">
                      <div className="text-xs text-muted-foreground mb-1">
                        Jan-Apr
                      </div>
                      <div className="text-lg font-bold">8.3t</div>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg text-center">
                      <div className="text-xs text-muted-foreground mb-1">
                        May-Aug
                      </div>
                      <div className="text-lg font-bold">9.1t</div>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg text-center">
                      <div className="text-xs text-muted-foreground mb-1">
                        Sep-Dec
                      </div>
                      <div className="text-lg font-bold">7.2t</div>
                    </div>
                  </div>

                  <div className="text-sm text-muted-foreground">
                    <p>
                      Your highest savings were in the summer months due to
                      optimized routes and increased use of eco-friendly
                      vehicles.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Efficiency Tab */}
        <TabsContent value="efficiency">
          <Card>
            <CardHeader>
              <CardTitle>Logistics Efficiency Metrics</CardTitle>
              <CardDescription>
                Track how efficiency improvements are reducing your
                environmental impact
              </CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <div className="h-[300px] bg-gray-100 w-full flex items-center justify-center border-t">
                <div className="text-center p-8">
                  <div className="mx-auto w-12 h-12 mb-4 rounded-full bg-waberer-light flex items-center justify-center">
                    <BarChart3 className="text-waberer-primary h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">
                    Efficiency Chart Placeholder
                  </h3>
                  <p className="text-gray-500 max-w-md mx-auto">
                    Interactive efficiency chart will be rendered here with your
                    data.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Load Optimization</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col items-center text-center space-y-2">
                  <div className="text-waberer-primary text-4xl font-bold">
                    94.2%
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Average vehicle capacity utilization
                  </div>
                  <div className="text-sm text-green-600 font-medium">
                    +8.3% vs. industry average
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Route Optimization</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col items-center text-center space-y-2">
                  <div className="text-waberer-primary text-4xl font-bold">
                    -12.4%
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Reduction in total distance driven
                  </div>
                  <div className="text-sm text-green-600 font-medium">
                    3,240 km saved this month
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Fuel Efficiency</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col items-center text-center space-y-2">
                  <div className="text-waberer-primary text-4xl font-bold">
                    26.5L
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Average consumption per 100km
                  </div>
                  <div className="text-sm text-green-600 font-medium">
                    -3.8% compared to last year
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Reports Tab */}
        <TabsContent value="reports">
          <div className="grid grid-cols-1 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Available Reports</CardTitle>
                <CardDescription>
                  Download detailed sustainability reports for your records
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {[
                    {
                      title: "Annual Sustainability Report 2023",
                      date: "December 10, 2023",
                      icon: FileText,
                      type: "PDF",
                    },
                    {
                      title: "Carbon Footprint Reduction Analysis Q3 2023",
                      date: "October 5, 2023",
                      icon: Leaf,
                      type: "PDF",
                    },
                    {
                      title: "Green Logistics Performance Review H1 2023",
                      date: "July 15, 2023",
                      icon: BarChart3,
                      type: "XLSX",
                    },
                    {
                      title: "Quarterly Environmental Impact Report Q2 2023",
                      date: "April 10, 2023",
                      icon: FileText,
                      type: "PDF",
                    },
                  ].map((report, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between bg-gray-50 p-4 rounded-lg"
                    >
                      <div className="flex items-center">
                        <div className="w-10 h-10 rounded-full bg-waberer-light flex items-center justify-center mr-4">
                          <report.icon className="h-5 w-5 text-waberer-primary" />
                        </div>
                        <div>
                          <h3 className="font-medium">{report.title}</h3>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <Calendar className="h-3 w-3 mr-1" />
                            {report.date}
                            <span className="mx-2">•</span>
                            <span>{report.type}</span>
                          </div>
                        </div>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex items-center text-waberer-primary border-waberer-primary hover:bg-waberer-light"
                      >
                        <Download className="h-4 w-4 mr-1" />
                        Download
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-waberer-light border-waberer-primary border">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row items-center gap-6">
                  <div className="md:w-1/4 flex justify-center">
                    <Trees className="h-24 w-24 text-waberer-primary" />
                  </div>
                  <div className="md:w-3/4 text-center md:text-left">
                    <h3 className="text-xl font-bold text-waberer-primary mb-2">
                      Environmental Achievement Certificate
                    </h3>
                    <p className="text-gray-700 mb-4">
                      Your partnership with Waberer's has contributed to
                      significant CO2 reductions. Download your personalized
                      environmental achievement certificate to showcase your
                      commitment to sustainable logistics.
                    </p>
                    <Button className="bg-waberer-primary hover:bg-waberer-secondary">
                      <Download className="h-4 w-4 mr-2" />
                      Generate Certificate
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Reports;
