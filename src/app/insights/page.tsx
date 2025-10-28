import { Calendar, User, ArrowRight, FileText, TrendingUp, Award, Globe, Calculator, Scale, Shield } from 'lucide-react';

export default function Insights() {
  const featuredInsights = [
    {
      id: 1,
      title: "ITR WORLD TAX 2026 Rankings",
      excerpt: "We have been distinguished in the prestigious ITR World Tax Rankings 2026 for our performance in tax advisory and compliance services.",
      date: "October 13, 2025",
      author: "REDMOND Team",
      category: "Awards & Recognition",
      readTime: "3 min read",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      icon: <Award className="h-6 w-6" />
    },
    {
      id: 2,
      title: "A BRIEF HISTORY OF EFRIS by REDMOND Team",
      excerpt: "In the ideal world of a tax policy designer, everyone and almost everything should be taxed. Understanding EFRIS implementation and its impact on businesses.",
      date: "October 13, 2025",
      author: "REDMOND Team",
      category: "Tax Insights",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      icon: <Calculator className="h-6 w-6" />
    },
    {
      id: 3,
      title: "Uganda Duty Remission Tax Alert 2025",
      excerpt: "Understanding the latest duty remission policies and how they impact manufacturing companies in Uganda. Key updates and compliance requirements.",
      date: "October 01, 2025",
      author: "REDMOND Team",
      category: "Tax Alerts",
      readTime: "4 min read",
      image: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      icon: <TrendingUp className="h-6 w-6" />
    }
  ];

  const recentInsights = [
    {
      title: "Tax Amendment Bill Memorandum 2025",
      excerpt: "Comprehensive analysis of the proposed tax amendments and their implications for businesses.",
      date: "September 28, 2025",
      category: "Legislation",
      readTime: "6 min read"
    },
    {
      title: "Transfer Pricing Guidelines Update",
      excerpt: "Latest updates on transfer pricing regulations and compliance requirements for multinational companies.",
      date: "September 20, 2025",
      category: "International Tax",
      readTime: "4 min read"
    },
    {
      title: "URA Audit Process: What to Expect",
      excerpt: "A detailed guide on URA audit procedures and how to prepare your business for tax audits.",
      date: "September 15, 2025",
      category: "Compliance",
      readTime: "5 min read"
    },
    {
      title: "Digital Tax Services: The Future is Here",
      excerpt: "Exploring the benefits of digital tax services and how technology is transforming tax compliance.",
      date: "September 10, 2025",
      category: "Technology",
      readTime: "3 min read"
    },
    {
      title: "Constitutional Law Updates 2025",
      excerpt: "Recent developments in constitutional law and their impact on business operations.",
      date: "September 5, 2025",
      category: "Constitutional Law",
      readTime: "7 min read"
    },
    {
      title: "Employment Law: Recent Changes",
      excerpt: "Key updates in employment legislation and their implications for employers.",
      date: "August 30, 2025",
      category: "Employment Law",
      readTime: "4 min read"
    }
  ];

  const categories = [
    { name: "Tax Insights", count: 15, icon: <Calculator className="h-5 w-5" /> },
    { name: "Legal Updates", count: 12, icon: <Scale className="h-5 w-5" /> },
    { name: "Compliance", count: 8, icon: <Shield className="h-5 w-5" /> },
    { name: "Awards & Recognition", count: 5, icon: <Award className="h-5 w-5" /> },
    { name: "International Tax", count: 10, icon: <Globe className="h-5 w-5" /> },
    { name: "Technology", count: 6, icon: <TrendingUp className="h-5 w-5" /> }
  ];

  return (
    <div className="min-h-screen bg-redmond-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-redmond-blue to-redmond-dark-blue text-redmond-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 left-10 w-32 h-32 bg-redmond-white/10 rounded-full animate-float"></div>
          <div className="absolute top-32 right-20 w-24 h-24 bg-redmond-white/5 rounded-full animate-float delay-200"></div>
          <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-redmond-white/8 rounded-full animate-float delay-400"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in-up">
              Insights & Publications
            </h1>
            <p className="text-xl md:text-2xl text-redmond-white/90 mb-8 animate-fade-in-up delay-200">
              Stay Informed with Expert Analysis
            </p>
            <p className="text-lg text-redmond-white/80 max-w-3xl mx-auto animate-fade-in-up delay-300">
              Our team regularly shares insights, analysis, and updates on the latest 
              developments in tax law, legal matters, and industry trends.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Insights */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-redmond-dark-blue mb-4 animate-fade-in-up">
              Featured Insights
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto animate-fade-in-up delay-200">
              Our most important and impactful publications on current legal and tax matters.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {featuredInsights.map((insight, index) => (
              <div key={insight.id} className="bg-redmond-white rounded-lg shadow-lg overflow-hidden hover-lift animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="relative h-48">
                  <img 
                    src={insight.image} 
                    alt={insight.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-redmond-blue text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center">
                      {insight.icon}
                      <span className="ml-2">{insight.category}</span>
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-redmond-dark-blue mb-3 line-clamp-2">
                    {insight.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {insight.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2" />
                      {insight.date}
                    </div>
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-2" />
                      {insight.author}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{insight.readTime}</span>
                    <button className="text-redmond-blue hover:text-redmond-dark-blue font-medium flex items-center">
                      Read More
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-redmond-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-3">
              <h2 className="text-2xl font-bold text-redmond-dark-blue mb-8 animate-fade-in-up">
                Recent Publications
              </h2>
              
              <div className="space-y-6">
                {recentInsights.map((insight, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-6 hover-lift animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                    <div className="flex items-start justify-between mb-3">
                      <span className="bg-redmond-blue text-white px-3 py-1 rounded-full text-xs font-semibold">
                        {insight.category}
                      </span>
                      <span className="text-sm text-gray-500">{insight.readTime}</span>
                    </div>
                    
                    <h3 className="text-lg font-bold text-redmond-dark-blue mb-2">
                      {insight.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4">
                      {insight.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm text-gray-500">
                        <Calendar className="h-4 w-4 mr-2" />
                        {insight.date}
                      </div>
                      <button className="text-redmond-blue hover:text-redmond-dark-blue font-medium flex items-center">
                        Read More
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="text-center mt-12">
                <button className="bg-redmond-gold text-redmond-dark-blue px-8 py-3 rounded-lg font-semibold hover:bg-redmond-gold-dark hover:text-white transition-colors duration-200 hover-scale">
                  View All Publications
                  <ArrowRight className="inline-block ml-2 h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-8">
                {/* Categories */}
                <div className="bg-gray-50 rounded-lg p-6 mb-8 animate-fade-in-up delay-300">
                  <h3 className="text-lg font-bold text-redmond-dark-blue mb-4">Categories</h3>
                  <div className="space-y-3">
                    {categories.map((category, index) => (
                      <div key={index} className="flex items-center justify-between hover:text-redmond-blue cursor-pointer transition-colors">
                        <div className="flex items-center">
                          <div className="text-redmond-blue mr-3">{category.icon}</div>
                          <span className="text-sm">{category.name}</span>
                        </div>
                        <span className="text-xs text-gray-500 bg-gray-200 px-2 py-1 rounded-full">
                          {category.count}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Newsletter Signup */}
                <div className="bg-redmond-blue rounded-lg p-6 text-white animate-fade-in-up delay-400">
                  <h3 className="text-lg font-bold mb-3">Stay Updated</h3>
                  <p className="text-redmond-white/90 text-sm mb-4">
                    Subscribe to our newsletter for the latest insights and updates.
                  </p>
                  <div className="space-y-3">
                    <input 
                      type="email" 
                      placeholder="Enter your email"
                      className="w-full px-3 py-2 rounded text-gray-900 text-sm"
                    />
                    <button className="w-full bg-redmond-gold text-redmond-dark-blue px-4 py-2 rounded font-semibold text-sm hover:bg-redmond-gold-dark hover:text-white transition-colors">
                      Subscribe
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
