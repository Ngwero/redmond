import { Calculator, Scale, Shield, Globe, FileText, TrendingUp, Building2, Users, Award, CheckCircle, ArrowRight } from 'lucide-react';

export default function Expertise() {
  const expertiseAreas = [
    {
      title: "Tax Law",
      description: "Comprehensive tax advisory and compliance services covering all aspects of Ugandan tax legislation.",
      icon: <Calculator className="h-12 w-12" />,
      services: [
        "Income Tax Planning & Compliance",
        "Value Added Tax (VAT) Management",
        "Withholding Tax Compliance",
        "Transfer Pricing",
        "International Tax Planning",
        "Tax Dispute Resolution"
      ],
      color: "from-redmond-blue to-redmond-dark-blue"
    },
    {
      title: "Commercial Law",
      description: "Expert legal services for business transactions, corporate governance, and commercial disputes.",
      icon: <Building2 className="h-12 w-12" />,
      services: [
        "Corporate Formation & Governance",
        "Contract Drafting & Review",
        "Mergers & Acquisitions",
        "Commercial Litigation",
        "Intellectual Property",
        "Employment Law"
      ],
      color: "from-redmond-blue to-redmond-dark-blue"
    },
    {
      title: "Constitutional Law",
      description: "Specialized expertise in constitutional matters and public interest litigation.",
      icon: <Scale className="h-12 w-12" />,
      services: [
        "Constitutional Petitions",
        "Human Rights Litigation",
               "Administrative Law",
        "Public Interest Cases",
        "Constitutional Compliance",
        "Government Relations"
      ],
      color: "from-redmond-blue to-redmond-dark-blue"
    },
    {
      title: "Civil Law",
      description: "Comprehensive civil litigation services for individuals and businesses.",
      icon: <FileText className="h-12 w-12" />,
      services: [
        "Land Disputes",
        "Contract Disputes",
        "Tort Claims",
        "Family Law",
        "Property Law",
        "Civil Litigation"
      ],
      color: "from-redmond-blue to-redmond-dark-blue"
    }
  ];

  const recentCases = [
    {
      category: "TAX LAW",
      title: "Yogi Steels Ltd vs. URA, Misc. Application No. 16 of 2025",
      description: "Successfully represented client in tax dispute resolution",
      outcome: "Favorable ruling for client"
    },
    {
      category: "CONSTITUTIONAL",
      title: "KIZITO FAHAD vs ATTORNEY GENERAL (Constitutional Petition No. 17 of 2021)",
      description: "Constitutional petition regarding fundamental rights",
      outcome: "Landmark constitutional decision"
    },
    {
      category: "COMMERCIAL",
      title: "NALUBEGA SHADIA vs STABEX INTERNATIONAL LTD (Civil Suit No. 665 of 2021)",
      description: "Commercial dispute resolution",
      outcome: "Successful settlement achieved"
    },
    {
      category: "CIVIL",
      title: "NAMUTEBI MARIAM BITALO vs NABISERE JALIA (Land originating summon No. 004 of 2023)",
      description: "Land dispute resolution",
      outcome: "Client's land rights protected"
    }
  ];

  return (
    <div className="min-h-screen bg-redmond-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-redmond-blue to-redmond-dark-blue text-redmond-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 left-10 w-32 h-32 bg-redmond-white/10 rounded-full animate-float"></div>
          <div className="absolute top-32 right-20 w-24 h-24 bg-redmond-white/5 rounded-full animate-float delay-200"></div>
          <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-redmond-white/8 rounded-full animate-float delay-400"></div>
          <div className="absolute top-1/2 right-10 w-40 h-40 bg-redmond-gold/10 rounded-full animate-float delay-300"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-slide-down bg-gradient-to-r from-white to-redmond-gold/90 bg-clip-text text-transparent">
              Our Expertise
            </h1>
            <p className="text-xl md:text-2xl text-redmond-white/90 mb-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              Comprehensive Legal and Tax Solutions
            </p>
            <p className="text-lg text-redmond-white/80 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              With over 10 years of combined experience, our team provides expert legal and tax services 
              across multiple practice areas, ensuring our clients receive the highest quality representation.
            </p>
          </div>
        </div>
      </section>

      {/* Expertise Areas */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-redmond-dark-blue mb-4 animate-fade-in-up">
              Practice Areas
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto animate-fade-in-up delay-200">
              Our expertise spans across multiple legal and tax disciplines, providing comprehensive 
              solutions for all your business and personal needs.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {expertiseAreas.map((area, index) => (
              <div key={index} className="bg-redmond-white rounded-lg shadow-lg p-8 hover-lift animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="text-center mb-6">
                  <div className={`w-20 h-20 bg-gradient-to-br ${area.color} rounded-full mx-auto mb-4 flex items-center justify-center text-white animate-pulse-slow`}>
                    {area.icon}
                  </div>
                  <h3 className="text-xl font-bold text-redmond-dark-blue mb-3">{area.title}</h3>
                  <p className="text-gray-600 text-sm">{area.description}</p>
                </div>
                
                <div className="space-y-3">
                  {area.services.map((service, serviceIndex) => (
                    <div key={serviceIndex} className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 text-redmond-blue mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{service}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Cases & Rulings */}
      <section className="py-20 bg-redmond-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-redmond-dark-blue mb-4 animate-fade-in-up">
              Recent Cases & Rulings
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto animate-fade-in-up delay-200">
              Our track record of successful cases demonstrates our commitment to achieving 
              favorable outcomes for our clients across various legal disciplines.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {recentCases.map((case_, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 hover-lift animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="flex items-start justify-between mb-4">
                  <span className="bg-redmond-blue text-white px-3 py-1 rounded-full text-xs font-semibold">
                    {case_.category}
                  </span>
                  <CheckCircle className="h-5 w-5 text-redmond-gold" />
                </div>
                <h3 className="text-lg font-bold text-redmond-dark-blue mb-3">
                  {case_.title}
                </h3>
                <p className="text-gray-600 mb-4">{case_.description}</p>
                <div className="flex items-center text-sm text-redmond-gold font-medium">
                  <Award className="h-4 w-4 mr-2" />
                  {case_.outcome}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="bg-redmond-gold text-redmond-dark-blue px-8 py-3 rounded-lg font-semibold hover:bg-redmond-gold-dark hover:text-white transition-colors duration-200 hover-scale">
              View All Cases
              <ArrowRight className="inline-block ml-2 h-4 w-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-r from-gray-50 to-redmond-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-redmond-dark-blue mb-4 animate-fade-in-up">
              Why Choose REDMOND?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto animate-fade-in-up delay-200">
              Our commitment to excellence and client success sets us apart in the legal and tax industry.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center animate-fade-in-up delay-100">
              <div className="w-16 h-16 bg-gradient-to-br from-redmond-blue to-redmond-dark-blue rounded-full mx-auto mb-4 flex items-center justify-center text-white">
                <Award className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-redmond-dark-blue mb-3">Proven Track Record</h3>
              <p className="text-gray-600">Over 10 years of successful case outcomes and client satisfaction.</p>
            </div>
            
            <div className="text-center animate-fade-in-up delay-200">
              <div className="w-16 h-16 bg-gradient-to-br from-redmond-blue to-redmond-dark-blue rounded-full mx-auto mb-4 flex items-center justify-center text-white">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-redmond-dark-blue mb-3">Expert Team</h3>
              <p className="text-gray-600">Highly qualified professionals with specialized expertise in tax and legal matters.</p>
            </div>
            
            <div className="text-center animate-fade-in-up delay-300">
              <div className="w-16 h-16 bg-gradient-to-br from-redmond-blue to-redmond-dark-blue rounded-full mx-auto mb-4 flex items-center justify-center text-white">
                <Shield className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-redmond-dark-blue mb-3">Client-Focused</h3>
              <p className="text-gray-600">Dedicated to providing personalized solutions that meet your specific needs.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
