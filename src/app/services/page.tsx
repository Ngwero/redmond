import Link from 'next/link';
import { ArrowRight, Scale, Calculator, FileText, Shield, Globe, DollarSign, Building, Users, CheckCircle, TrendingUp, PieChart, BarChart3, Receipt, Building2, Target, Award, Clock, Zap, Star, ArrowUpRight } from 'lucide-react';

export default function Services() {
  const legalServices = [
    {
      icon: <Scale className="h-6 w-6" />,
      title: "Litigation",
      description: "Comprehensive litigation support for complex legal disputes, including civil, commercial, and administrative matters.",
      image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      icon: <Building className="h-6 w-6" />,
      title: "Commercial Law",
      description: "Expert guidance on commercial transactions, contract law, corporate governance, and business formation.",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Consultancy",
      description: "Strategic legal consultancy services for business decisions, compliance, and risk management.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    }
  ];

  const taxCoreServices = [
    {
      icon: <Calculator className="h-6 w-6" />,
      title: "Tax Planning and Advisory in Uganda and Overseas",
      description: "Strategic tax planning for local and cross-border operations to optimize your tax position.",
      details: "As Uganda's leading tax law practice, we offer a comprehensive range of Ugandan tax advisory services for all types of clients, from multinational public corporations operating in Uganda, to regional entrepreneurial enterprises in an innovative manner. Several of our tax lawyers are also Chartered Accountants and Certified Public Accountants in Uganda, many have worked in government tax departments and tax departments of international accounting firms and are active in professional bodies. We help clients plan and implement Uganda tax strategies and structures to meet their objectives. Our advice is timely, creative, reliable and practical taking in consideration all Uganda Tax Laws. We service all sectors of the Ugandan economy including telecommunications, mining, oil and gas, real estate development and manufacturing through a diversified and highly experienced team of dedicated Ugandan tax advisors."
    },
    {
      icon: <FileText className="h-6 w-6" />,
      title: "Tax Compliance and Tax Reporting in Uganda",
      description: "Comprehensive compliance and financial reporting services to ensure full regulatory adherence.",
      details: "At Redmond Tax, we manage your Ugandan tax obligations to ensure accuracy, timeliness, and financial integrity. We cover the entire scope of your Ugandan tax requirements, from submitting essential Uganda tax filings with Uganda Revenue Authority to reporting complex Ugandan tax positions on your financial statements. Our Compliance with Ugandan Tax Offerings Include: Corporate & Business Income Tax Filings with the Uganda Revenue Authority, Indirect Tax Management (VAT and Excise Duty), Information Reporting, and Audit-Ready Documentation. We bridge the gap between Ugandan tax law and financial accounting standards (GAAP/IFRS), providing transparent and accurate reporting for stakeholders, investors, and auditors."
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Taxpayer Representation during Audits with Uganda Revenue Authority",
      description: "Expert representation during URA audits and tax investigations with proven track record.",
      details: "Our Taxpayer Representation group is the best in Uganda boasting of a mix of Certified Public Accountants (tax accountants) and tax lawyers who have worked in Ugandan government and Ugandan tax departments of international accounting firms with offices in Uganda and are active in professional bodies. We work with individuals and businesses to manage the flow of information from the earliest days of a URA audit through to the conclusion of the appeal process. All communications with our clients is protected by Attorney-client privilege. We can ensure that your responses to the Uganda Revenue Authority are effective in protecting your interests. By acting as your intermediary, we can also minimize disruption to your business."
    },
    {
      icon: <Scale className="h-6 w-6" />,
      title: "Tax Dispute, Objections and Litigation in Uganda",
      description: "Professional dispute resolution services, with preference for mediation over courtroom litigation.",
      details: "As Uganda's leading tax law practice in Ugandan tax, we help clients defend their tax positions in the face of an audit. Our litigation advice is client-centric, allowing them to benefit from our comprehensive, creative, reliable and practical approach to tax litigation. Our Tax Litigation group has unparalleled experience in Ugandan tax matters. We represent clients at every level and in every manner of tax dispute both with URA, at the Tax Appeals Tribunal and other courts. Because of our extensive and wide experience, our team can offer practical and innovative solutions that help protect your business interests and efficiently resolve your tax disputes."
    }
  ];

  const specializedTaxServices = [
    {
      title: "International Taxation",
      description: "Cross-border tax planning and compliance for multinational operations.",
      details: "Our Uganda tax lawyers and Certified Public Accountants are active in providing key strategic tax planning advice to taxpayers for both inbound and outbound foreign direct investment. We have extensive experience advising in connection with issues cross-border mergers and acquisitions, cross-border public and private debt and equity offerings, the selection of tax efficient holding company locations, transfer pricing policies, controlled foreign company tax planning, income tax treaties, profit repatriation, and managing intellectual property and intangible assets."
    },
    {
      title: "Transfer Pricing",
      description: "Expert guidance on transfer pricing policies and documentation requirements.",
      details: "The firm is recognized as Uganda's leading practice in transfer pricing, both at the advisory, documentation and dispute resolution level. Our team regularly assist clients in managing transfer pricing risks with URA associated with ongoing operations, business restructurings, and special transactions. This includes implementing best practices in the preparation of transfer pricing documentation to optimize compliance and minimize the risk of adjustments and penalties."
    },
    {
      title: "Exchange of Financial Account Information (AEOI/CRS)",
      description: "Compliance with international tax reporting obligations.",
      details: "Uganda has implemented the Automatic Exchange of Financial Account Information for tax purposes through the adoption of the Common Reporting Standard (CRS). Our experts on Ugandan Tax law work to ensure you are fully compliant with your tax obligations on both local and foreign-sourced income with respect to the Automatic Exchange of Financial Account Information."
    },
    {
      title: "Uganda Mining and Petroleum Taxation",
      description: "Specialized expertise in extractive industries tax matters.",
      details: "Corporations and individuals engaged in resource extraction in Uganda are subject to special rules and statutes under the Uganda Income Tax Part X. Our tax lawyers and tax accountants in our Mining and Oil and Gas group are widely recognized as leading Ugandan Mining Tax and Petroleum Tax experts. We act for mining and petroleum companies at all levels – from some of the world's largest public corporations to smaller exploration companies, contractors, and national oil and mining companies."
    },
    {
      title: "Value Added Tax",
      description: "VAT compliance, planning, and dispute resolution services.",
      details: "Value Added Tax in Uganda is a consumption tax charged on the supply of most goods and services in the course of business, as well as on the importation of goods and services, governed by the Value Added Tax Act, Cap. 349. With respect to VAT in Uganda, we provide a full array of services in respect of all aspects of VAT including tax planning advice, advising on business transfers and corporate reorganizations, preparing legal opinions, compliance review, assisting with tax audits, and licensing and registration requirements."
    },
    {
      title: "Income Taxes (PAYE, Corporation Taxes, Withholding Taxes, Rental Taxes, Uganda Digital Service Taxes)",
      description: "PAYE, Withholding Tax, Rental Income, Digital Services Tax, and other income tax matters.",
      details: "Income tax compliance in Uganda is managed by the Uganda Revenue Authority under the Income Tax Act (ITA), Cap 338. Our Uganda tax accountants and Uganda tax lawyers assist you with key Compliance Requirements including registration for individual or corporate filing, meeting Payment Deadlines, filing Provisional Tax Returns, and handling withholding tax requirements. All tax returns must be filed electronically through the URA's online portal."
    },
    {
      title: "Digital Tax Stamps and Electronic Fiscal Reporting and In (EFRIS)",
      description: "Electronic Fiscal Receipting and Digital Tax Stamps compliance.",
      details: "The Uganda Revenue Authority has spearheaded a major digital transformation through the implementation of EFRIS and Digital Tax Stamps (DTS). EFRIS is an electronic invoicing and receipting system that centralizes the tracking of all sales transactions in real-time, while DTS is a physical mark affixed to manufactured or imported goods that contains digital security features to verify product authenticity and ensure excise duty compliance. We help ensure you set the EFRIS and DTS system seamlessly."
    },
    {
      title: "Capital Gains Taxes",
      description: "Capital gains tax planning and compliance for various asset transactions.",
      details: "Capital Gains Tax in Uganda is not a standalone tax; rather, capital gains are generally included in and taxed as part of a taxpayer's ordinary income under the Income Tax Act. The traditional system operates on an additional withholding tax on the gross disposal proceeds for most asset sales. Our team has extensive experience on Uganda capital gains taxes and is ready to assist."
    }
  ];

  const additionalServices = [
    {
      icon: <Building2 className="h-6 w-6" />,
      title: "Corporate & Commercial",
      description: "Comprehensive corporate law services including incorporation, governance, and commercial transactions.",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      icon: <Building className="h-6 w-6" />,
      title: "Real Estate",
      description: "Full-service real estate law including property transactions, development, and land disputes.",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Oil & Gas Law",
      description: "Specialized expertise in oil and gas transactions, regulatory compliance, and dispute resolution.",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Immigration",
      description: "Comprehensive immigration services including work permits, visas, and citizenship applications.",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      icon: <DollarSign className="h-6 w-6" />,
      title: "Debt Recovery",
      description: "Effective debt recovery strategies and legal enforcement of financial obligations.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      icon: <Receipt className="h-6 w-6" />,
      title: "Tax & Revenue",
      description: "Comprehensive tax advisory, compliance, and revenue optimization services.",
      image: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    }
  ];

  const publicLawServices = [
    {
      icon: <Scale className="h-6 w-6" />,
      title: "Public Law and Regulation",
      description: "Public procurement advisory services and dispute resolution for projects of national significance.",
      image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Dispute Resolution",
      description: "Practical and business-centered approach to resolving complex legal disputes effectively.",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    }
  ];

  const howWeHelp = [
    {
      title: "Tax Advisory and Tax Compliance Including Audits - We Offer a 1-hour Free Consultation",
      description: "We offer a 1-hour free consultation to help us better understand the details of the tax matter, and how we can help. When you partner with us, we will begin by conducting a thorough review of all relevant documentation and correspondence to develop a strategy. We will work with you to ensure that any communication with the URA is effective in protecting your interests. By acting as your intermediary, we can also minimize disruption to your business. If the URA proposes adjustments to your tax returns, we will explain the reasons for those adjustments and respond on your behalf. If the URA makes a final decision that you disagree with, our work on the audit can be carried forward with a notice of objection. We ensure you are well-informed at every step of the audit process and provide regular updates along the way. At every stage we communicate by phone, email and schedule regular meetings to keep you appraised of our progress on any tax matter."
    },
    {
      title: "Tax Dispute Resolution and Tax Litigation - 1-Minute Free Consultation",
      description: "We start with a 1-minute free consultation to help us better understand the tax issues you're dealing with. It's important to know that many of our cases are settled through MEDIATION and do not end up in a courtroom. When you partner with us, we will begin by conducting a thorough review of all relevant documentation in order to identify discrepancies, errors and any incorrect applications of the law. We will continuously support you and deal directly with the URA or TAT in an effort to achieve the best possible outcome for you. If necessary, we will represent you at trial defending your interests before the TAT. We will ensure you understand each step of the process and are frequently updated on the progress of the matter."
    }
  ];

  return (
    <div className="min-h-screen bg-redmond-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-redmond-blue to-redmond-dark-blue text-redmond-white py-20 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 left-10 w-20 h-20 bg-redmond-white/10 rounded-full animate-float"></div>
          <div className="absolute top-32 right-20 w-16 h-16 bg-redmond-white/5 rounded-full animate-float delay-200"></div>
          <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-redmond-white/8 rounded-full animate-float delay-400"></div>
          <div className="absolute bottom-32 right-1/3 w-14 h-14 bg-redmond-white/6 rounded-full animate-float delay-300"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-slide-down">Our Services</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              Comprehensive legal and tax solutions for all your business needs
            </p>
          </div>
        </div>
      </section>

      {/* Legal Services Section */}
      <section id="legal" className="py-20 bg-gradient-to-b from-white via-blue-50/30 to-white relative overflow-hidden">
        {/* Decorative background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-redmond-blue/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-redmond-gold/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <div className="p-3 bg-gradient-to-br from-redmond-blue to-redmond-dark-blue rounded-xl shadow-lg">
                <Scale className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-redmond-dark-blue ml-4">REDMOND Associated Advocates</h2>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive legal services to protect your interests and achieve your business objectives
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {legalServices.map((service, index) => (
              <div key={index} className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-gray-200/50 hover:shadow-2xl hover:scale-105 transition-all duration-300 animate-stagger-1" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-redmond-gold to-redmond-gold-dark rounded-xl flex items-center justify-center text-redmond-dark-blue mr-4 shadow-lg animate-pulse-slow">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-redmond-dark-blue">{service.title}</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-redmond-dark-blue mb-4 animate-fade-in-up">Additional Services</h2>
            <p className="text-xl text-gray-600 animate-fade-in-up delay-200">Comprehensive legal solutions for all your business needs</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => (
              <div key={index} className="bg-redmond-white rounded-lg shadow-lg overflow-hidden hover-lift hover-wiggle animate-rotate-in" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="relative h-48">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover hover-scale transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute top-4 left-4 animate-fade-in-scale">
                    <div className="w-12 h-12 bg-redmond-gold rounded-lg flex items-center justify-center text-redmond-dark-blue hover-glow">
                      {service.icon}
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-redmond-dark-blue mb-3 animate-slide-up-fade">{service.title}</h3>
                  <p className="text-gray-600 animate-fade-in-scale delay-100">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Public Law Services Section */}
      <section className="py-20 bg-redmond-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-redmond-dark-blue mb-4 animate-fade-in-up">Public Law & Regulation</h2>
            <p className="text-xl text-gray-600 animate-fade-in-up delay-200">Specialized expertise in public procurement and regulatory matters</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {publicLawServices.map((service, index) => (
              <div key={index} className="bg-gray-50 rounded-lg shadow-lg overflow-hidden hover-lift animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="relative h-48">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <div className="w-12 h-12 bg-redmond-gold rounded-lg flex items-center justify-center text-redmond-dark-blue">
                      {service.icon}
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-redmond-dark-blue mb-3">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tax Visualization Section */}
      <section className="py-20 bg-gradient-to-r from-gray-50 to-redmond-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-redmond-dark-blue mb-4 animate-fade-in-up">Tax Services at a Glance</h2>
            <p className="text-xl text-gray-600 animate-fade-in-up delay-200">Visual overview of our comprehensive tax expertise</p>
          </div>

          {/* Tax Service Categories */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {/* Core Tax Services */}
            <div className="bg-redmond-white rounded-lg shadow-lg p-6 hover-lift animate-fade-in-up delay-100">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-redmond-blue to-redmond-dark-blue rounded-full mx-auto mb-4 flex items-center justify-center animate-pulse-slow">
                  <Calculator className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-redmond-dark-blue mb-2">Core Services</h3>
                <p className="text-sm text-gray-600 mb-4">Essential tax advisory and compliance</p>
                <div className="space-y-2 text-left">
                  <div className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-redmond-blue mr-2" />
                    <span>Tax Planning</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-redmond-blue mr-2" />
                    <span>Compliance</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-redmond-blue mr-2" />
                    <span>Reporting</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Specialized Services */}
            <div className="bg-redmond-white rounded-lg shadow-lg p-6 hover-lift animate-fade-in-up delay-200">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-redmond-blue to-redmond-dark-blue rounded-full mx-auto mb-4 flex items-center justify-center animate-pulse-slow">
                  <Globe className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-redmond-dark-blue mb-2">Specialized</h3>
                <p className="text-sm text-gray-600 mb-4">Advanced tax expertise areas</p>
                <div className="space-y-2 text-left">
                  <div className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-redmond-blue mr-2" />
                    <span>International Tax</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-redmond-blue mr-2" />
                    <span>Transfer Pricing</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-redmond-blue mr-2" />
                    <span>Mining & Petroleum</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Dispute Resolution */}
            <div className="bg-redmond-white rounded-lg shadow-lg p-6 hover-lift animate-fade-in-up delay-300">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-redmond-blue to-redmond-dark-blue rounded-full mx-auto mb-4 flex items-center justify-center animate-pulse-slow">
                  <Scale className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-redmond-dark-blue mb-2">Disputes</h3>
                <p className="text-sm text-gray-600 mb-4">Expert representation & resolution</p>
                <div className="space-y-2 text-left">
                  <div className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-redmond-blue mr-2" />
                    <span>URA Audits</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-redmond-blue mr-2" />
                    <span>Mediation</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-redmond-blue mr-2" />
                    <span>Litigation</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Digital Services */}
            <div className="bg-redmond-white rounded-lg shadow-lg p-6 hover-lift animate-fade-in-up delay-400">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-redmond-blue to-redmond-dark-blue rounded-full mx-auto mb-4 flex items-center justify-center animate-pulse-slow">
                  <Zap className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-redmond-dark-blue mb-2">Digital</h3>
                <p className="text-sm text-gray-600 mb-4">Modern tax technology solutions</p>
                <div className="space-y-2 text-left">
                  <div className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-redmond-blue mr-2" />
                    <span>EFRIS</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-redmond-blue mr-2" />
                    <span>Digital Stamps</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-redmond-blue mr-2" />
                    <span>E-filing</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Tax Statistics */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center bg-redmond-white rounded-lg shadow-lg p-8 hover-lift animate-fade-in-left">
              <div className="w-20 h-20 bg-gradient-to-br from-redmond-blue to-redmond-dark-blue rounded-full mx-auto mb-4 flex items-center justify-center animate-pulse-slow">
                <TrendingUp className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-redmond-dark-blue mb-2">95%</h3>
              <p className="text-gray-600">Client Satisfaction Rate</p>
            </div>
            
            <div className="text-center bg-redmond-white rounded-lg shadow-lg p-8 hover-lift animate-fade-in-up">
              <div className="w-20 h-20 bg-gradient-to-br from-redmond-blue to-redmond-dark-blue rounded-full mx-auto mb-4 flex items-center justify-center animate-pulse-slow">
                <Shield className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-redmond-dark-blue mb-2">100%</h3>
              <p className="text-gray-600">Compliance Success Rate</p>
            </div>
            
            <div className="text-center bg-redmond-white rounded-lg shadow-lg p-8 hover-lift animate-fade-in-right">
              <div className="w-20 h-20 bg-gradient-to-br from-redmond-blue to-redmond-dark-blue rounded-full mx-auto mb-4 flex items-center justify-center animate-pulse-slow">
                <Award className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-redmond-dark-blue mb-2">10+</h3>
              <p className="text-gray-600">Years of Experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tax Services Section */}
      <section id="tax" className="py-20 bg-gradient-to-b from-gray-50 via-white to-gray-50 relative overflow-hidden">
        {/* Decorative background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-10 w-96 h-96 bg-redmond-gold/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-10 w-96 h-96 bg-redmond-blue/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <div className="p-3 bg-gradient-to-br from-redmond-gold to-redmond-gold-dark rounded-xl shadow-lg">
                <Calculator className="h-8 w-8 text-redmond-dark-blue" />
              </div>
              <h2 className="text-3xl font-bold text-redmond-dark-blue ml-4">REDMOND Tax</h2>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Specialized tax advisory, compliance, and dispute resolution services
            </p>
          </div>

          {/* Core Services */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-redmond-dark-blue mb-8 text-center">Core Services</h3>
            <div className="grid md:grid-cols-1 gap-6">
              {taxCoreServices.map((service, index) => (
                <div key={index} className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-gray-200/50 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 animate-stagger-1" style={{ animationDelay: `${index * 50}ms` }}>
                  <div className="flex items-start mb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-redmond-gold to-redmond-gold-dark rounded-xl flex items-center justify-center text-redmond-dark-blue mr-4 flex-shrink-0 shadow-lg">
                      {service.icon}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-redmond-dark-blue mb-2">{service.title}</h4>
                      <p className="text-gray-700 mb-3 leading-relaxed">{service.description}</p>
                      {service.details && (
                        <p className="text-gray-600 text-sm leading-relaxed mt-4">{service.details}</p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Specialized Tax Areas */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-redmond-dark-blue mb-8 text-center">Specialized Tax Areas</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
              {specializedTaxServices.map((service, index) => (
                <div key={index} className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-6 border border-gray-200/50 hover:shadow-2xl hover:scale-105 transition-all duration-300 animate-stagger-1" style={{ animationDelay: `${index * 50}ms` }}>
                  <h4 className="text-lg font-bold text-redmond-dark-blue mb-3 flex items-center">
                    <div className="w-1 h-6 bg-gradient-to-b from-redmond-gold to-redmond-blue mr-3 rounded-full"></div>
                    {service.title}
                  </h4>
                  <p className="text-gray-700 text-sm mb-2">{service.description}</p>
                  {service.details && (
                    <p className="text-gray-600 text-sm leading-relaxed mt-3">{service.details}</p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* How We Help */}
          <div className="bg-gradient-to-br from-redmond-blue via-redmond-dark-blue to-redmond-blue text-redmond-white rounded-2xl p-10 mb-8 border border-white/20 shadow-2xl relative overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute top-10 left-10 w-32 h-32 bg-white/5 rounded-full blur-2xl animate-pulse-slow"></div>
              <div className="absolute bottom-10 right-10 w-40 h-40 bg-redmond-gold/10 rounded-full blur-2xl animate-pulse-slow"></div>
            </div>
            <div className="relative">
              <h3 className="text-2xl font-bold mb-8 text-center bg-gradient-to-r from-white to-redmond-white/90 bg-clip-text text-transparent">
                How We Help
              </h3>
              <div className="space-y-6">
                {howWeHelp.map((item, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:shadow-xl">
                    <div className="flex items-start mb-3">
                      <CheckCircle className="h-6 w-6 text-green-300 mr-3 flex-shrink-0" />
                      <h4 className="text-lg font-semibold text-redmond-white">{item.title}</h4>
                    </div>
                    <p className="text-redmond-white/90 leading-relaxed ml-9">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Comparison */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-redmond-dark-blue mb-4">Why Choose REDMOND?</h2>
            <p className="text-xl text-gray-600">Our unique advantages in the legal and tax advisory space</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-redmond-gold rounded-full mx-auto mb-6 flex items-center justify-center">
                <Globe className="h-10 w-10 text-redmond-dark-blue" />
              </div>
              <h3 className="text-xl font-bold text-redmond-dark-blue mb-4">Integrated Approach</h3>
              <p className="text-gray-600">
                Our dual qualification in law and accounting provides integrated solutions 
                that other firms cannot match.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-redmond-gold rounded-full mx-auto mb-6 flex items-center justify-center">
                <DollarSign className="h-10 w-10 text-redmond-dark-blue" />
              </div>
              <h3 className="text-xl font-bold text-redmond-dark-blue mb-4">Cost-Effective</h3>
              <p className="text-gray-600">
                Free initial consultations and preference for mediation over litigation 
                help reduce costs for our clients.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-redmond-gold rounded-full mx-auto mb-6 flex items-center justify-center">
                <Shield className="h-10 w-10 text-redmond-dark-blue" />
              </div>
              <h3 className="text-xl font-bold text-redmond-dark-blue mb-4">Proven Track Record</h3>
              <p className="text-gray-600">
                Former URA and Big Four experience ensures deep understanding of 
                regulatory requirements and industry best practices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-redmond-blue text-redmond-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8">Schedule a free consultation to discuss your legal and tax needs</p>
          <Link 
            href="/contact"
            className="inline-flex items-center bg-redmond-white text-redmond-blue px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors duration-200 font-medium text-lg"
          >
            Schedule a Consultation <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
