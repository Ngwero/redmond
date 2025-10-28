import { Building2, Factory, ShoppingCart, Car, Home, Plane, Banknote, Wrench, Truck, Briefcase, CheckCircle, ArrowRight } from 'lucide-react';

export default function Industries() {
  const industries = [
    {
      name: "Manufacturing",
      description: "Comprehensive tax and legal services for manufacturing companies, including compliance, planning, and dispute resolution.",
      icon: <Factory className="h-12 w-12" />,
      services: [
        "Tax Planning & Compliance",
        "Transfer Pricing",
        "Environmental Compliance",
        "Labor Law",
        "Contract Negotiations",
        "Dispute Resolution"
      ],
      color: "from-redmond-blue to-redmond-dark-blue",
      clients: "50+ Manufacturing Companies"
    },
    {
      name: "Banking & Finance",
      description: "Specialized expertise in financial services regulation, tax compliance, and complex financial transactions.",
      icon: <Banknote className="h-12 w-12" />,
      services: [
        "Regulatory Compliance",
        "Tax Advisory",
        "Mergers & Acquisitions",
        "Risk Management",
        "Financial Reporting",
        "Audit Support"
      ],
      color: "from-redmond-blue to-redmond-dark-blue",
      clients: "15+ Financial Institutions"
    },
    {
      name: "Real Estate",
      description: "Expert legal and tax services for real estate development, transactions, and property management.",
      icon: <Home className="h-12 w-12" />,
      services: [
        "Property Transactions",
        "Land Disputes",
        "Tax Planning",
        "Development Agreements",
        "Zoning Compliance",
        "Title Issues"
      ],
      color: "from-redmond-blue to-redmond-dark-blue",
      clients: "100+ Real Estate Projects"
    },
    {
      name: "Transportation & Logistics",
      description: "Comprehensive services for transport companies, including regulatory compliance and tax optimization.",
      icon: <Truck className="h-12 w-12" />,
      services: [
        "Transport Regulations",
        "Tax Compliance",
        "Contract Management",
        "Insurance Claims",
        "Labor Relations",
        "Safety Compliance"
      ],
      color: "from-redmond-blue to-redmond-dark-blue",
      clients: "30+ Transport Companies"
    },
    {
      name: "Retail & Commerce",
      description: "Legal and tax services tailored for retail businesses, e-commerce, and commercial operations.",
      icon: <ShoppingCart className="h-12 w-12" />,
      services: [
        "Business Formation",
        "Tax Planning",
        "Contract Law",
        "Employment Issues",
        "Consumer Protection",
        "Intellectual Property"
      ],
      color: "from-redmond-blue to-redmond-dark-blue",
      clients: "200+ Retail Businesses"
    },
    {
      name: "Automotive",
      description: "Specialized services for automotive dealers, repair shops, and related businesses.",
      icon: <Car className="h-12 w-12" />,
      services: [
        "Dealer Agreements",
        "Tax Compliance",
        "Consumer Protection",
        "Warranty Issues",
        "Regulatory Compliance",
        "Dispute Resolution"
      ],
      color: "from-redmond-blue to-redmond-dark-blue",
      clients: "25+ Automotive Businesses"
    },
    {
      name: "Aviation",
      description: "Expert legal and tax services for aviation companies, including airlines and aviation services.",
      icon: <Plane className="h-12 w-12" />,
      services: [
        "Aviation Regulations",
        "Tax Planning",
        "Contract Negotiations",
        "Safety Compliance",
        "International Law",
        "Insurance Claims"
      ],
      color: "from-redmond-blue to-redmond-dark-blue",
      clients: "10+ Aviation Companies"
    },
    {
      name: "Professional Services",
      description: "Comprehensive services for law firms, accounting firms, and other professional service providers.",
      icon: <Briefcase className="h-12 w-12" />,
      services: [
        "Partnership Agreements",
        "Tax Compliance",
        "Professional Liability",
        "Regulatory Compliance",
        "Business Development",
        "Risk Management"
      ],
      color: "from-redmond-blue to-redmond-dark-blue",
      clients: "40+ Professional Firms"
    }
  ];

  const industryStats = [
    { number: "500+", label: "Clients Served", description: "Across various industries" },
    { number: "15+", label: "Years Experience", description: "Combined team experience" },
    { number: "95%", label: "Success Rate", description: "In case outcomes" },
    { number: "24/7", label: "Client Support", description: "Always available" }
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
              Industries We Serve
            </h1>
            <p className="text-xl md:text-2xl text-redmond-white/90 mb-8 animate-fade-in-up delay-200">
              Specialized Legal and Tax Solutions
            </p>
            <p className="text-lg text-redmond-white/80 max-w-3xl mx-auto animate-fade-in-up delay-300">
              Our deep industry knowledge and specialized expertise enable us to provide 
              tailored solutions that address the unique challenges faced by businesses 
              across diverse sectors.
            </p>
          </div>
        </div>
      </section>

      {/* Industry Statistics */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {industryStats.map((stat, index) => (
              <div key={index} className="text-center animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="text-4xl font-bold text-redmond-dark-blue mb-2">{stat.number}</div>
                <div className="text-lg font-semibold text-gray-800 mb-1">{stat.label}</div>
                <div className="text-sm text-gray-600">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-20 bg-redmond-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-redmond-dark-blue mb-4 animate-fade-in-up">
              Industry Expertise
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto animate-fade-in-up delay-200">
              We understand the unique challenges and opportunities in each industry, 
              allowing us to provide targeted solutions that drive business success.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {industries.map((industry, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 hover-lift animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="text-center mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${industry.color} rounded-full mx-auto mb-4 flex items-center justify-center text-white animate-pulse-slow`}>
                    {industry.icon}
                  </div>
                  <h3 className="text-xl font-bold text-redmond-dark-blue mb-2">{industry.name}</h3>
                  <p className="text-sm text-gray-600 mb-3">{industry.description}</p>
                  <div className="text-xs text-redmond-blue font-semibold">{industry.clients}</div>
                </div>
                
                <div className="space-y-2">
                  {industry.services.slice(0, 4).map((service, serviceIndex) => (
                    <div key={serviceIndex} className="flex items-center text-sm">
                      <CheckCircle className="h-3 w-3 text-redmond-blue mr-2 flex-shrink-0" />
                      <span className="text-gray-700">{service}</span>
                    </div>
                  ))}
                  {industry.services.length > 4 && (
                    <div className="text-xs text-gray-500 mt-2">
                      +{industry.services.length - 4} more services
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Industry Expertise Matters */}
      <section className="py-20 bg-gradient-to-r from-gray-50 to-redmond-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-left">
              <h2 className="text-3xl md:text-4xl font-bold text-redmond-dark-blue mb-6">
                Why Industry Expertise Matters
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Each industry has its own unique regulatory environment, business practices, 
                and challenges. Our specialized knowledge allows us to:
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-redmond-blue mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-redmond-dark-blue mb-1">Navigate Complex Regulations</h3>
                    <p className="text-gray-600 text-sm">Understand industry-specific compliance requirements and regulatory changes.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-redmond-blue mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-redmond-dark-blue mb-1">Optimize Tax Strategies</h3>
                    <p className="text-gray-600 text-sm">Develop tax-efficient structures tailored to your industry's specific needs.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-redmond-blue mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-redmond-dark-blue mb-1">Mitigate Risks</h3>
                    <p className="text-gray-600 text-sm">Identify and address industry-specific legal and tax risks proactively.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-redmond-blue mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-redmond-dark-blue mb-1">Drive Growth</h3>
                    <p className="text-gray-600 text-sm">Provide strategic advice that supports your business expansion and development.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="animate-fade-in-right">
              <div className="bg-redmond-blue rounded-lg p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">Ready to Get Started?</h3>
                <p className="text-redmond-white/90 mb-6">
                  Let us help you navigate the complexities of your industry with 
                  expert legal and tax guidance.
                </p>
                <button className="bg-redmond-gold text-redmond-dark-blue px-6 py-3 rounded-lg font-semibold hover:bg-redmond-gold-dark hover:text-white transition-colors duration-200 hover-scale">
                  Schedule Consultation
                  <ArrowRight className="inline-block ml-2 h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
