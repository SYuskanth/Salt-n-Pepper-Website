import React from 'react';
import Footer from '../../Components/Footer';

const NewsRoom = () => {
  // Sample blog data - you can replace this with real data from an API
  const featuredPost = {
    id: 1,
    title: "The Future of Food Business: Trends to Watch in 2025",
    excerpt: "Discover the latest trends shaping the food industry and how your business can stay ahead of the curve. From sustainable practices to technology integration, we explore what's coming next.",
    content: `
      <p>The food industry is constantly evolving, and 2025 promises to bring exciting changes that will reshape how we think about food businesses. As we navigate through changing consumer preferences and technological advancements, it's crucial for food entrepreneurs to stay informed about emerging trends.</p>
      
      <h3>Sustainability Takes Center Stage</h3>
      <p>More than ever, consumers are demanding sustainable practices from their favorite food brands. This includes everything from eco-friendly packaging to locally sourced ingredients. Businesses that prioritize sustainability are not only helping the environment but also attracting a growing segment of conscious consumers.</p>
      
      <h3>Technology Integration</h3>
      <p>From AI-powered inventory management to blockchain for supply chain transparency, technology is revolutionizing the food industry. Smart restaurants are using data analytics to optimize menus and reduce waste, while delivery apps continue to evolve with better user experiences.</p>
      
      <h3>Plant-Based Innovation</h3>
      <p>The plant-based food market continues to expand beyond traditional alternatives. New innovations in plant-based proteins and dairy alternatives are creating opportunities for businesses to cater to health-conscious and environmentally aware consumers.</p>
      
      <h3>Ghost Kitchens and Virtual Brands</h3>
      <p>The rise of delivery-only restaurants and virtual food brands is changing the restaurant landscape. These models offer lower overhead costs and the flexibility to test new concepts without significant investment in physical locations.</p>
    `,
    author: "Salt n Pepper Team",
    date: "January 15, 2025",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=400&fit=crop",
    tags: ["Trends", "Business Strategy", "Innovation"]
  };

  const sidebarContent = {
    recentPosts: [
      {
        id: 2,
        title: "5 Marketing Strategies That Work for Food Businesses",
        date: "January 10, 2025",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=300&h=200&fit=crop"
      },
      {
        id: 3,
        title: "Understanding Food Safety Regulations",
        date: "January 5, 2025",
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=300&h=200&fit=crop"
      },
      {
        id: 4,
        title: "How to Scale Your Restaurant Business",
        date: "December 28, 2024",
        image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=300&h=200&fit=crop"
      }
    ],
    categories: ["Business Tips", "Marketing", "Regulations", "Technology", "Trends", "Success Stories"],
    newsletter: true
  };

  const otherPosts = [
    {
      id: 5,
      title: "Building a Strong Brand Identity for Your Food Business",
      excerpt: "Learn how to create a memorable brand that resonates with your target audience and stands out in the competitive food market.",
      author: "Marketing Team",
      date: "December 20, 2024",
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&h=250&fit=crop",
      tags: ["Branding", "Marketing"]
    },
    {
      id: 6,
      title: "Financial Planning for Food Entrepreneurs",
      excerpt: "Essential financial strategies and tips for managing cash flow, budgeting, and securing funding for your food business.",
      author: "Finance Team",
      date: "December 15, 2024",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=250&fit=crop",
      tags: ["Finance", "Business Planning"]
    },
    {
      id: 7,
      title: "Customer Service Excellence in the Food Industry",
      excerpt: "Discover proven strategies to deliver exceptional customer service that keeps customers coming back and drives positive reviews.",
      author: "Operations Team",
      date: "December 10, 2024",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop",
      tags: ["Customer Service", "Operations"]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-16">

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content - 2/3 left side */}
          <div className="lg:col-span-2">
            <article className="bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src={featuredPost.image} 
                alt={featuredPost.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-8">
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <span>By {featuredPost.author}</span>
                  <span className="mx-2">•</span>
                  <span>{featuredPost.date}</span>
                </div>
                
                <h1 className="text-3xl font-bold text-gray-900 mb-4">
                  {featuredPost.title}
                </h1>
                
                <p className="text-lg text-gray-600 mb-6">
                  {featuredPost.excerpt}
                </p>
                
                <div className="prose max-w-none text-gray-700 leading-relaxed" 
                     dangerouslySetInnerHTML={{ __html: featuredPost.content }}>
                </div>
                
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <div className="flex flex-wrap gap-2">
                    {featuredPost.tags.map((tag, index) => (
                      <span 
                        key={index}
                        className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          </div>

          {/* Sidebar - 1/3 right side */}
          <div className="lg:col-span-1">
            <div className="space-y-6">
              {/* Recent Posts */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Recent Posts</h3>
                <div className="space-y-4">
                  {sidebarContent.recentPosts.map((post) => (
                    <div key={post.id} className="flex gap-3">
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-16 h-16 object-cover rounded-md flex-shrink-0"
                      />
                      <div className="flex-1">
                        <h4 className="text-sm font-medium text-gray-900 mb-1 line-clamp-2">
                          {post.title}
                        </h4>
                        <p className="text-xs text-gray-500">{post.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Categories */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Categories</h3>
                <div className="space-y-2">
                  {sidebarContent.categories.map((category, index) => (
                    <a 
                      key={index}
                      href={`#${category.toLowerCase().replace(' ', '-')}`}
                      className="block text-gray-600 hover:text-blue-600 py-1 transition-colors"
                    >
                      {category}
                    </a>
                  ))}
                </div>
              </div>

              {/* Newsletter Signup */}
              <div className="bg-blue-600 text-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold mb-4">Stay Updated</h3>
                <p className="text-blue-100 mb-4 text-sm">
                  Subscribe to our newsletter for the latest food business insights and tips.
                </p>
                <div className="space-y-3">
                  <input 
                    type="email" 
                    placeholder="Enter your email"
                    className="w-full px-3 py-2 rounded-md text-gray-900 text-sm"
                  />
                  <button className="w-full bg-white text-blue-600 px-4 py-2 rounded-md font-medium hover:bg-gray-100 transition-colors">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Other Blog Posts - Cards at bottom */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">More Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherPosts.map((post) => (
              <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center text-xs text-gray-500 mb-3">
                    <span>By {post.author}</span>
                    <span className="mx-2">•</span>
                    <span>{post.date}</span>
                  </div>
                  
                  <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex flex-wrap gap-1 mb-4">
                    {post.tags.map((tag, index) => (
                      <span 
                        key={index}
                        className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <button className="text-blue-600 font-medium text-sm hover:text-blue-700 transition-colors">
                    Read More →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default NewsRoom;