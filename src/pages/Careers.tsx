import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Briefcase, Users, TrendingUp, Heart, Target, Award, MapPin, Clock, CheckCircle2, Upload } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { z } from "zod";

const Careers = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const applicationSchema = z.object({
    fullName: z.string().trim().min(2, "Name must be at least 2 characters").max(100, "Name is too long"),
    email: z.string().trim().email("Invalid email address").max(255, "Email is too long"),
    phone: z.string().trim().min(10, "Phone number must be at least 10 digits").max(20, "Phone number is too long"),
    position: z.string().min(1, "Please select a position"),
    experience: z.string().min(1, "Please select your experience level"),
    coverLetter: z.string().trim().min(50, "Cover letter must be at least 50 characters").max(2000, "Cover letter is too long"),
    resume: z.instanceof(File).optional()
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      fullName: formData.get("fullName") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      position: formData.get("position") as string,
      experience: formData.get("experience") as string,
      coverLetter: formData.get("coverLetter") as string,
      resume: formData.get("resume") as File
    };

    try {
      const validatedData = applicationSchema.parse(data);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast({
        title: "Application Submitted!",
        description: "Thank you for your interest. We'll review your application and get back to you soon.",
      });
      
      (e.target as HTMLFormElement).reset();
    } catch (error) {
      if (error instanceof z.ZodError) {
        const firstError = error.errors[0];
        toast({
          title: "Validation Error",
          description: firstError.message,
          variant: "destructive",
        });
      } else {
        toast({
          title: "Error",
          description: "Something went wrong. Please try again.",
          variant: "destructive",
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const values = [
    {
      icon: Target,
      title: "Excellence",
      description: "We strive for excellence in everything we do, delivering exceptional value to our clients and stakeholders."
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "We believe in the power of teamwork and foster a collaborative environment where ideas flourish."
    },
    {
      icon: TrendingUp,
      title: "Innovation",
      description: "We embrace innovation and continuously seek new ways to improve and evolve our services."
    },
    {
      icon: Heart,
      title: "Integrity",
      description: "We operate with the highest standards of integrity, transparency, and ethical conduct in all our dealings."
    }
  ];

  const openPositions = [
    {
      title: "Senior Financial Analyst",
      department: "Finance",
      location: "Lagos, Nigeria",
      type: "Full-time",
      description: "We're seeking an experienced financial analyst to join our team and provide strategic insights for our investment decisions."
    },
    {
      title: "Investment Portfolio Manager",
      department: "Asset Management",
      location: "Lagos, Nigeria",
      type: "Full-time",
      description: "Manage diverse investment portfolios for high-net-worth clients and institutional investors."
    },
    {
      title: "Risk Management Specialist",
      department: "Risk & Compliance",
      location: "Lagos, Nigeria",
      type: "Full-time",
      description: "Identify, assess, and mitigate risks across our financial services operations."
    },
    {
      title: "Digital Marketing Manager",
      department: "Marketing",
      location: "Lagos, Nigeria",
      type: "Full-time",
      description: "Lead our digital marketing initiatives and drive brand awareness across multiple channels."
    },
    {
      title: "Customer Service Representative",
      department: "Client Services",
      location: "Lagos, Nigeria",
      type: "Full-time",
      description: "Provide exceptional service to our clients and ensure their satisfaction with our services."
    },
    {
      title: "Software Developer",
      department: "Technology",
      location: "Lagos, Nigeria / Remote",
      type: "Full-time",
      description: "Build and maintain innovative fintech solutions for our digital platforms."
    }
  ];

  const benefits = [
    "Competitive salary and performance bonuses",
    "Comprehensive health insurance",
    "Professional development opportunities",
    "Flexible work arrangements",
    "Pension and retirement plans",
    "Annual leave and paid time off"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 via-background to-primary/10 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-block">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                <Briefcase className="w-4 h-4" />
                Join Our Team
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              Build Your <span className="text-primary">Career</span> With Us
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Join a team of passionate professionals dedicated to excellence in financial services. We're looking for talented individuals to help shape the future of finance.
            </p>
          </div>
        </div>
      </section>

      <main className="container mx-auto px-4 py-16">
        {/* Company Culture */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Values</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our company culture is built on a foundation of core values that guide everything we do.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {values.map((value, index) => (
              <Card key={index} className="border-2 hover:border-primary/50 transition-all duration-300">
                <CardContent className="p-6 text-center space-y-4">
                  <div className="mx-auto w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-2xl flex items-center justify-center">
                    <value.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Benefits Section */}
        <section className="mb-20">
          <Card className="max-w-4xl mx-auto bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <Award className="w-12 h-12 text-primary mx-auto mb-4" />
                <h2 className="text-3xl font-bold text-foreground mb-2">Benefits & Perks</h2>
                <p className="text-muted-foreground">We invest in our people</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Open Positions */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Open Positions</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore our current opportunities and find your perfect role.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-7xl mx-auto">
            {openPositions.map((position, index) => (
              <Card key={index} className="border-2 hover:border-primary/50 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-2xl">{position.title}</CardTitle>
                  <CardDescription className="text-base">{position.department}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{position.description}</p>
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-primary" />
                      {position.location}
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-primary" />
                      {position.type}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Application Form */}
        <section className="max-w-4xl mx-auto">
          <Card className="border-2">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl">Apply Now</CardTitle>
              <CardDescription className="text-base">
                Fill out the form below and we'll get back to you soon.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="fullName">Full Name *</Label>
                    <Input
                      id="fullName"
                      name="fullName"
                      placeholder="John Doe"
                      required
                      maxLength={100}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="john@example.com"
                      required
                      maxLength={255}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+234 XXX XXX XXXX"
                      required
                      maxLength={20}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="position">Position *</Label>
                    <Select name="position" required>
                      <SelectTrigger>
                        <SelectValue placeholder="Select position" />
                      </SelectTrigger>
                      <SelectContent>
                        {openPositions.map((position, index) => (
                          <SelectItem key={index} value={position.title}>
                            {position.title}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="experience">Years of Experience *</Label>
                  <Select name="experience" required>
                    <SelectTrigger>
                      <SelectValue placeholder="Select experience level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="0-2">0-2 years</SelectItem>
                      <SelectItem value="3-5">3-5 years</SelectItem>
                      <SelectItem value="6-10">6-10 years</SelectItem>
                      <SelectItem value="10+">10+ years</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="resume">Resume/CV</Label>
                  <div className="flex items-center gap-4">
                    <Input
                      id="resume"
                      name="resume"
                      type="file"
                      accept=".pdf,.doc,.docx"
                      className="cursor-pointer"
                    />
                    <Upload className="w-5 h-5 text-muted-foreground" />
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Accepted formats: PDF, DOC, DOCX (Max 5MB)
                  </p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="coverLetter">Cover Letter *</Label>
                  <Textarea
                    id="coverLetter"
                    name="coverLetter"
                    placeholder="Tell us why you're interested in this position and what makes you a great fit..."
                    required
                    rows={6}
                    maxLength={2000}
                    className="resize-none"
                  />
                  <p className="text-xs text-muted-foreground text-right">
                    Minimum 50 characters
                  </p>
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Submit Application"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Careers;
