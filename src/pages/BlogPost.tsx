import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Calendar, User, ArrowLeft, Share2, Facebook, Twitter, Linkedin } from "lucide-react";
import Newsletter from "@/components/Newsletter";

// This would typically come from an API or CMS
const blogPostsData: Record<string, any> = {
  "future-digital-finance-africa": {
    id: 1,
    title: "The Future of Digital Finance in Africa",
    category: "Industry Insights",
    author: "John Doe",
    date: "2024-03-15",
    image: "/placeholder.svg",
    content: `
      <p>The African continent is experiencing a remarkable digital transformation in its financial services sector. This evolution is not just changing how people bank and transact; it's fundamentally reshaping the economic landscape across the region.</p>
      
      <h2>The Digital Revolution</h2>
      <p>Mobile money services have already demonstrated the potential of digital finance in Africa, with platforms like M-Pesa leading the way. Today, we're seeing an acceleration of this trend with new technologies and innovative business models emerging across the continent.</p>
      
      <h2>Key Trends Shaping the Future</h2>
      <p>Several factors are driving the digital finance revolution in Africa:</p>
      <ul>
        <li>Increased smartphone penetration and internet connectivity</li>
        <li>Growing young, tech-savvy population</li>
        <li>Supportive regulatory frameworks in many countries</li>
        <li>Investment in fintech infrastructure</li>
      </ul>
      
      <h2>Opportunities and Challenges</h2>
      <p>While the opportunities are immense, challenges remain. Infrastructure gaps, regulatory uncertainties, and the need for financial literacy are all areas that require attention. However, with the right approach and continued innovation, the future of digital finance in Africa looks incredibly promising.</p>
      
      <h2>The Role of Investment</h2>
      <p>At Digital Space Capital, we recognize the transformative potential of digital finance. We're committed to supporting innovative solutions that can help unlock financial inclusion and economic growth across the continent.</p>
    `,
    readTime: "5 min read"
  },
  "q4-2024-performance": {
    id: 2,
    title: "Q4 2024 Financial Performance Highlights",
    category: "Company Updates",
    author: "Jane Smith",
    date: "2024-03-10",
    image: "/placeholder.svg",
    content: `
      <p>We're pleased to share our financial performance highlights for the fourth quarter of 2024. This period marked significant achievements across all our business units.</p>
      
      <h2>Financial Highlights</h2>
      <p>Our Q4 performance exceeded expectations with strong growth across key metrics:</p>
      <ul>
        <li>Revenue growth of 32% year-over-year</li>
        <li>Assets under management increased by 28%</li>
        <li>Client base expanded by 15%</li>
      </ul>
      
      <h2>Strategic Initiatives</h2>
      <p>Several strategic initiatives contributed to our strong performance, including the expansion of our asset management services and the launch of new digital banking products through our microfinance subsidiary.</p>
      
      <h2>Looking Ahead</h2>
      <p>As we enter 2025, we remain focused on sustainable growth and delivering value to our stakeholders. We're excited about the opportunities ahead and remain committed to our mission of financial inclusion and economic development.</p>
    `,
    readTime: "4 min read"
  },
  "investment-banking-trends-2025": {
    id: 3,
    title: "Investment Banking Trends to Watch in 2025",
    category: "Thought Leadership",
    author: "Michael Brown",
    date: "2024-03-05",
    image: "/placeholder.svg",
    content: `
      <p>The investment banking landscape is evolving rapidly. As we look ahead to 2025, several key trends are emerging that will shape the industry.</p>
      
      <h2>Digital Transformation</h2>
      <p>Digital technologies are revolutionizing how investment banks operate, from AI-powered analytics to blockchain-based settlement systems.</p>
      
      <h2>Sustainable Finance</h2>
      <p>ESG considerations are becoming central to investment decisions, with green bonds and sustainable investment products gaining significant traction.</p>
      
      <h2>Regulatory Evolution</h2>
      <p>Regulatory frameworks continue to evolve, requiring banks to adapt their operations and compliance strategies accordingly.</p>
    `,
    readTime: "6 min read"
  },
  "expanding-asset-management": {
    id: 4,
    title: "Expanding Our Asset Management Services",
    category: "Company Updates",
    author: "Sarah Johnson",
    date: "2024-02-28",
    image: "/placeholder.svg",
    content: `
      <p>We're excited to announce the expansion of our asset management services with the launch of new products designed to meet diverse investor needs.</p>
      
      <h2>New Product Offerings</h2>
      <p>Our expanded portfolio includes innovative investment solutions tailored for different risk profiles and investment horizons.</p>
      
      <h2>Client-Centric Approach</h2>
      <p>These new offerings reflect our commitment to understanding and meeting the evolving needs of our clients.</p>
    `,
    readTime: "3 min read"
  },
  "risk-management-practices": {
    id: 5,
    title: "Risk Management Best Practices",
    category: "Thought Leadership",
    author: "David Lee",
    date: "2024-02-20",
    image: "/placeholder.svg",
    content: `
      <p>Effective risk management is crucial in today's volatile market environment. Here are essential strategies every financial institution should implement.</p>
      
      <h2>Comprehensive Risk Assessment</h2>
      <p>Understanding and quantifying all types of risks - market, credit, operational, and liquidity - is the foundation of effective risk management.</p>
      
      <h2>Technology and Analytics</h2>
      <p>Advanced analytics and real-time monitoring systems are essential tools for identifying and mitigating risks proactively.</p>
    `,
    readTime: "7 min read"
  },
  "digital-transformation-banking": {
    id: 6,
    title: "Digital Transformation in Banking",
    category: "Industry Insights",
    author: "Emily Chen",
    date: "2024-02-15",
    image: "/placeholder.svg",
    content: `
      <p>Digital transformation is revolutionizing traditional banking operations and customer experiences, creating new opportunities and challenges.</p>
      
      <h2>Customer Experience</h2>
      <p>Digital channels are enabling banks to provide seamless, personalized experiences that meet the expectations of today's customers.</p>
      
      <h2>Operational Efficiency</h2>
      <p>Automation and digital processes are improving operational efficiency while reducing costs and errors.</p>
    `,
    readTime: "5 min read"
  }
};

// Related posts logic
const getRelatedPosts = (currentSlug: string, currentCategory: string) => {
  return Object.entries(blogPostsData)
    .filter(([slug, post]) => slug !== currentSlug && post.category === currentCategory)
    .slice(0, 3)
    .map(([slug, post]) => ({ ...post, slug }));
};

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? blogPostsData[slug] : null;

  if (!post) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-6 py-20 text-center">
          <h1 className="text-3xl font-bold mb-4">Blog Post Not Found</h1>
          <Link to="/blog">
            <Button>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const relatedPosts = getRelatedPosts(slug!, post.category);
  const shareUrl = window.location.href;
  const shareText = encodeURIComponent(post.title);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Back Button */}
      <div className="container mx-auto px-6 pt-8">
        <Link to="/blog">
          <Button variant="ghost" className="mb-4">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Button>
        </Link>
      </div>

      {/* Article Header */}
      <article className="container mx-auto px-6 pb-16">
        <div className="max-w-4xl mx-auto">
          <Badge className="mb-4">{post.category}</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{post.title}</h1>
          
          <div className="flex flex-wrap items-center gap-6 text-muted-foreground mb-8">
            <div className="flex items-center gap-2">
              <User className="h-4 w-4" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>{new Date(post.date).toLocaleDateString()}</span>
            </div>
            <span>{post.readTime}</span>
          </div>

          {/* Featured Image */}
          <img 
            src={post.image} 
            alt={post.title}
            className="w-full h-[400px] object-cover rounded-lg mb-8"
          />

          {/* Social Sharing */}
          <div className="flex items-center gap-4 mb-8 pb-8 border-b">
            <span className="text-sm font-medium">Share:</span>
            <Button
              variant="outline"
              size="sm"
              onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`, '_blank')}
            >
              <Facebook className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => window.open(`https://twitter.com/intent/tweet?text=${shareText}&url=${shareUrl}`, '_blank')}
            >
              <Twitter className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`, '_blank')}
            >
              <Linkedin className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                navigator.clipboard.writeText(shareUrl);
                // You could add a toast notification here
              }}
            >
              <Share2 className="h-4 w-4" />
            </Button>
          </div>

          {/* Article Content */}
          <div 
            className="prose prose-lg max-w-none mb-12"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </article>

      <Separator />

      {/* Related Articles */}
      {relatedPosts.length > 0 && (
        <section className="container mx-auto px-6 py-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((relatedPost) => (
                <Link key={relatedPost.slug} to={`/blog/${relatedPost.slug}`}>
                  <Card className="hover:shadow-lg transition-shadow h-full">
                    <CardHeader className="p-0">
                      <img 
                        src={relatedPost.image} 
                        alt={relatedPost.title}
                        className="w-full h-48 object-cover rounded-t-lg"
                      />
                    </CardHeader>
                    <CardContent className="p-6">
                      <Badge className="mb-3">{relatedPost.category}</Badge>
                      <CardTitle className="text-lg mb-2 hover:text-primary transition-colors">
                        {relatedPost.title}
                      </CardTitle>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="h-3 w-3" />
                        <span>{new Date(relatedPost.date).toLocaleDateString()}</span>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Newsletter Subscription */}
      <Newsletter />

      <Footer />
    </div>
  );
};

export default BlogPost;
