import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Download, TrendingUp, FileText, Calendar, Users, DollarSign } from "lucide-react";
import SEO from "@/components/SEO";

const InvestorRelations = () => {
  const financialReports = [
    { title: "Annual Report 2024", date: "March 2024", size: "2.4 MB", type: "PDF" },
    { title: "Q4 2024 Earnings Report", date: "February 2024", size: "1.8 MB", type: "PDF" },
    { title: "Q3 2024 Earnings Report", date: "November 2023", size: "1.7 MB", type: "PDF" },
    { title: "Half Year Report 2024", date: "August 2024", size: "2.1 MB", type: "PDF" }
  ];

  const presentations = [
    { title: "Investor Presentation 2024", date: "March 2024", size: "5.2 MB", type: "PDF" },
    { title: "Q4 Results Presentation", date: "February 2024", size: "4.8 MB", type: "PDF" },
    { title: "Annual Strategy Update", date: "January 2024", size: "6.1 MB", type: "PDF" }
  ];

  const keyMetrics = [
    { label: "Total Assets Under Management", value: "₦45.2B", icon: DollarSign },
    { label: "Shareholders", value: "12,500+", icon: Users },
    { label: "Year-on-Year Growth", value: "24.5%", icon: TrendingUp },
    { label: "Market Capitalization", value: "₦128.7B", icon: TrendingUp }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO title="Investor Relations" description="Investor information, financial reports and shareholder resources from Digital Space Capital Group." />

      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-primary/5">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Investor Relations</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Access financial information, reports, and resources for our shareholders and the investment community
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg">
                <Download className="mr-2 h-5 w-5" />
                Latest Annual Report
              </Button>
              <Button size="lg" variant="outline">
                <Calendar className="mr-2 h-5 w-5" />
                Events Calendar
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Key Financial Metrics</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {keyMetrics.map((metric, index) => {
              const Icon = metric.icon;
              return (
                <Card key={index}>
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <p className="text-2xl font-bold">{metric.value}</p>
                        <p className="text-sm text-muted-foreground">{metric.label}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Financial Information */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Financial Information</h2>
          
          <Tabs defaultValue="reports" className="max-w-5xl mx-auto">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="reports">Financial Reports</TabsTrigger>
              <TabsTrigger value="presentations">Presentations</TabsTrigger>
              <TabsTrigger value="calendar">Events Calendar</TabsTrigger>
            </TabsList>
            
            <TabsContent value="reports" className="mt-6">
              <div className="grid gap-4">
                {financialReports.map((report, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="p-3 bg-primary/10 rounded-lg">
                            <FileText className="h-6 w-6 text-primary" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-lg">{report.title}</h3>
                            <p className="text-sm text-muted-foreground">
                              {report.date} • {report.type} • {report.size}
                            </p>
                          </div>
                        </div>
                        <Button variant="outline" size="sm">
                          <Download className="h-4 w-4 mr-2" />
                          Download
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="presentations" className="mt-6">
              <div className="grid gap-4">
                {presentations.map((presentation, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="p-3 bg-primary/10 rounded-lg">
                            <FileText className="h-6 w-6 text-primary" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-lg">{presentation.title}</h3>
                            <p className="text-sm text-muted-foreground">
                              {presentation.date} • {presentation.type} • {presentation.size}
                            </p>
                          </div>
                        </div>
                        <Button variant="outline" size="sm">
                          <Download className="h-4 w-4 mr-2" />
                          Download
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="calendar" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Upcoming Events</CardTitle>
                  <CardDescription>Important dates for investors and shareholders</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4 pb-4 border-b">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <Calendar className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold">Annual General Meeting</h4>
                        <p className="text-sm text-muted-foreground">June 15, 2024 • 10:00 AM WAT</p>
                        <p className="text-sm mt-2">Virtual and in-person attendance available</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4 pb-4 border-b">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <Calendar className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold">Q1 2025 Earnings Release</h4>
                        <p className="text-sm text-muted-foreground">May 10, 2024 • After Market Close</p>
                        <p className="text-sm mt-2">Conference call scheduled at 2:00 PM WAT</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <Calendar className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold">Dividend Payment Date</h4>
                        <p className="text-sm text-muted-foreground">April 30, 2024</p>
                        <p className="text-sm mt-2">Payment to shareholders of record as of April 15, 2024</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Contact IR */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <Card className="max-w-3xl mx-auto">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl">Investor Relations Contact</CardTitle>
              <CardDescription>Have questions? Our IR team is here to help</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">Email</h4>
                  <p className="text-muted-foreground">investors@digitalspacecapital.com</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Phone</h4>
                  <p className="text-muted-foreground">+234 (0) 123 456 7890</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Address</h4>
                  <p className="text-muted-foreground">123 Finance Street, Lagos, Nigeria</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Business Hours</h4>
                  <p className="text-muted-foreground">Monday - Friday, 9:00 AM - 5:00 PM WAT</p>
                </div>
              </div>
              <div className="pt-4">
                <Button className="w-full" size="lg">
                  Email Investor Relations
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default InvestorRelations;
