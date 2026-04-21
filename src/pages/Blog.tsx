import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Newsletter from "@/components/Newsletter";
import StockWidget from "@/components/StockWidget";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, Calendar, User } from "lucide-react";
import SEO from "@/components/SEO";

const blogPosts = [
  {
    id: 1,
    title: "The Future of Digital Finance in Africa",
    excerpt: "Exploring how technology is transforming financial services across the continent and creating new opportunities for growth.",
    category: "Industry Insights",
    author: "John Doe",
    date: "2024-03-15",
    image: "/placeholder.svg",
    slug: "future-digital-finance-africa"
  },
  {
    id: 2,
    title: "Q4 2024 Financial Performance Highlights",
    excerpt: "A comprehensive review of our financial performance and key achievements in the fourth quarter of 2024.",
    category: "Company Updates",
    author: "Jane Smith",
    date: "2024-03-10",
    image: "/placeholder.svg",
    slug: "q4-2024-performance"
  },
  {
    id: 3,
    title: "Investment Banking Trends to Watch in 2025",
    excerpt: "Our expert analysis of emerging trends that will shape the investment banking landscape in the coming year.",
    category: "Thought Leadership",
    author: "Michael Brown",
    date: "2024-03-05",
    image: "/placeholder.svg",
    slug: "investment-banking-trends-2025"
  },
  {
    id: 4,
    title: "Expanding Our Asset Management Services",
    excerpt: "Announcing the launch of new asset management products designed to meet diverse investor needs.",
    category: "Company Updates",
    author: "Sarah Johnson",
    date: "2024-02-28",
    image: "/placeholder.svg",
    slug: "expanding-asset-management"
  },
  {
    id: 5,
    title: "Risk Management Best Practices",
    excerpt: "Essential strategies for managing financial risk in today's volatile market environment.",
    category: "Thought Leadership",
    author: "David Lee",
    date: "2024-02-20",
    image: "/placeholder.svg",
    slug: "risk-management-practices"
  },
  {
    id: 6,
    title: "Digital Transformation in Banking",
    excerpt: "How digital technologies are revolutionizing traditional banking operations and customer experiences.",
    category: "Industry Insights",
    author: "Emily Chen",
    date: "2024-02-15",
    image: "/placeholder.svg",
    slug: "digital-transformation-banking"
  }
];

const categories = ["All", "Company Updates", "Industry Insights", "Thought Leadership"];

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-background">
      <SEO title="News & Insights" description="Latest news, market insights, and financial analysis from Digital Space Capital Group experts across investment, banking and fintech." />

      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-primary/5">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">News & Insights</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Stay updated with the latest company news, industry insights, and thought leadership from Digital Space Capital
            </p>
            
            {/* Search Bar */}
            <div className="relative max-w-xl mx-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
              <Input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 h-12"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 border-b">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <Card key={post.id} className="hover:shadow-lg transition-shadow cursor-pointer">
                  <CardHeader className="p-0">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                  </CardHeader>
                  <CardContent className="p-6">
                    <Badge className="mb-3">{post.category}</Badge>
                    <Link to={`/blog/${post.slug}`}>
                      <CardTitle className="text-xl mb-3 hover:text-primary transition-colors">
                        {post.title}
                      </CardTitle>
                    </Link>
                    <CardDescription className="mb-4 line-clamp-3">
                      {post.excerpt}
                    </CardDescription>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <User className="h-4 w-4" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">No articles found matching your search.</p>
            </div>
          )}
        </div>
      </section>

      {/* Stock Widget */}
      <StockWidget />

      {/* Newsletter Subscription */}
      <Newsletter />

      <Footer />
    </div>
  );
};

export default Blog;
