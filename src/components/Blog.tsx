import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, User, ArrowRight } from "lucide-react";
import { useScrollAnimation, useStaggeredAnimation } from "@/hooks/use-scroll-animation";

const Blog = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: gridRef, visibleItems } = useStaggeredAnimation(6, 100);
  
  const blogPosts = [
    {
      title: "10 Digital Marketing Trends to Watch in 2024",
      excerpt: "Stay ahead of the curve with these emerging digital marketing trends that will shape the industry.",
      author: "Sarah Johnson",
      date: "Dec 15, 2023",
      category: "Trends",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop",
      readTime: "5 min read"
    },
    {
      title: "The Ultimate Guide to Social Media ROI",
      excerpt: "Learn how to measure and maximize your social media return on investment with proven strategies.",
      author: "Mike Chen",
      date: "Dec 12, 2023",
      category: "Social Media",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=250&fit=crop",
      readTime: "8 min read"
    },
    {
      title: "SEO Best Practices for E-commerce Websites",
      excerpt: "Boost your online store's visibility with these essential SEO strategies designed for e-commerce.",
      author: "Emma Davis",
      date: "Dec 10, 2023",
      category: "SEO",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop",
      readTime: "6 min read"
    },
    {
      title: "Email Marketing Automation That Converts",
      excerpt: "Discover how to set up email automation sequences that nurture leads and drive conversions.",
      author: "David Wilson",
      date: "Dec 8, 2023",
      category: "Email Marketing",
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=250&fit=crop",
      readTime: "7 min read"
    },
    {
      title: "Content Marketing Strategy for B2B Companies",
      excerpt: "Build a content marketing strategy that attracts and engages your B2B target audience.",
      author: "Lisa Anderson",
      date: "Dec 5, 2023",
      category: "Content Marketing",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=250&fit=crop",
      readTime: "9 min read"
    },
    {
      title: "The Future of Influencer Marketing",
      excerpt: "Explore how influencer marketing is evolving and what brands need to know for success.",
      author: "Tom Rodriguez",
      date: "Dec 3, 2023",
      category: "Influencer Marketing",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=250&fit=crop",
      readTime: "4 min read"
    }
  ];

  return (
    <section id="blog" className="py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={titleRef} className={`text-center mb-16 transition-all duration-700 ${titleVisible ? 'animate-fade-in' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Latest Insights</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Stay updated with the latest digital marketing trends, tips, and strategies from our expert team.
          </p>
        </div>

        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <Card 
              key={index} 
              className={`group overflow-hidden border-0 shadow-card hover:shadow-elegant transition-all duration-500 hover:-translate-y-3 cursor-pointer ${
                visibleItems.has(index) ? 'animate-scale-in' : 'opacity-0 translate-y-8'
              }`}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                    {post.category}
                  </span>
                </div>
              </div>
              <CardHeader>
                <div className="flex items-center text-sm text-muted-foreground mb-2">
                  <User className="h-4 w-4 mr-1" />
                  <span className="mr-4">{post.author}</span>
                  <Calendar className="h-4 w-4 mr-1" />
                  <span className="mr-4">{post.date}</span>
                  <span>{post.readTime}</span>
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {post.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  {post.excerpt}
                </CardDescription>
                <Button 
                  variant="ghost" 
                  className="p-0 h-auto text-primary hover:text-primary-dark font-medium group"
                >
                  Read More 
                  <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            size="lg"
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-white"
          >
            View All Articles
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Blog;