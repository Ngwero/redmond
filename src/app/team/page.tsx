import Link from 'next/link';
import { ArrowRight, GraduationCap, BookOpen, Users, Award, Globe, Briefcase, TrendingUp, Shield, Calculator, Scale, Star, Zap, Target, Clock } from 'lucide-react';

export default function Team() {
  const partners = [
    {
      name: "Nuwamanya Gilbert Katwire",
      role: "Banking, Capital Markets & Commercial Law",
      focusArea: "Banking, Capital Markets & Commercial Law",
      image: "/Gilbert.jpg",
      keyHighlights: [
        "Partner at Redmond Associated Advocates",
        "Member of the Chartered institute of Arbitration",
        "Member of the Chartered institute of marketing",
        "Member of the Corporate and Finance Department",
        "Banking, Capital Markets, and Private Equity Practices",
        "Strategic Client Committee member"
      ],
      qualifications: "Post Graduate Diploma in Legal Practice, LDC – Kampala, LLB (Makerere University School of Law), MBA (Makerere Business School), CIM UK (Charted Institute of Marketing), CIArb UK (Chartered Institute of Arbitration), B.A (Makerere University)",
      memberships: ["Chartered Institute of Arbitration", "Chartered Institute of Marketing", "Corporate and Finance Department", "Banking, Capital Markets, and Private Equity Practices"],
      publications: "Represented hundreds of major financing transactions in the country and the Region. Specializes in Public-Private Partnerships, Corporate and Commercial law, land conveyancing and investment advisory and electoral law.",
      bio: "Nuwamanya Gilbert Katwire is a partner at Redmond Associated Advocates and is a member of the Chartered institute of Arbitration, member of the Chartered institute of marketing. Mr. Gilbert is a member of the Corporate and Finance Department; the Banking, Capital Markets, and Private Equity Practices; and the firm's Strategic Client Committee. Mr. Gilbert represents financial institutions, corporate borrowers, and other alternative financing providers in leveraged finance transactions with a particular focus on acquisition financings. Mr. Gilbert has also represented buyers and sellers in both public and private mergers and acquisitions transactions. Having advised on hundreds of large-cap syndicated loans, middle market loans, and direct lending transactions, Mr. Gilbert has broad exposure to the global banking market and its key participants. He regularly handles major financing transactions in the country and the Region."
    },
    {
      name: "Kenedy Kushaba",
      role: "Tax, Oil & Gas, Real Estate & Corporate Law",
      focusArea: "Tax, Oil & Gas, Real Estate & Corporate Law",
      image: "/kenedy.jpg",
      keyHighlights: [
        "Distinguished Partner at Redmond Associated Advocates",
        "Member of Uganda Law Society, East African Law Society, and IBA",
        "Esteemed lecturer of Law at Kampala International University",
        "Extensive experience in complex dispute litigation",
        "Specialized in Tax, Oil and Gas, Real Estate, and Corporate Practice"
      ],
      qualifications: "LLM Oil & Gas (UCU)-Uganda Christian University, Post Graduate Diploma in Legal Practice-Law Development Centre, Bachelor of Laws-Kampala International University, Bachelor International Business-Makerere University, Post Graduate Diploma in Tax & Revenue - East African School of Taxation, Diploma in Law-Law Development Centre, PGD. Public International Law-Leiden University (Hague-Netherlands)",
      memberships: ["Uganda Law Society", "East African Law Society", "International Bar Association"],
      publications: "Attended Start up investors meeting in Dar es Salam on EAC Venture Capital",
      bio: "Kenedy Kushaba is a distinguished Partner at Redmond Associated Advocates, bringing a wealth of expertise to our dynamic legal team. A proud member of the Uganda Law Society, East African Law Society, and the International Bar Association, Kenedy's dedication to the legal profession is evident in his extensive experience in complex dispute litigation. His specialized areas encompass Tax, Oil and Gas, Real Estate, and Corporate Practice, reflecting a deep understanding of intricate legal matters. With a commitment to excellence, Kenedy consistently delivers strategic solutions for our clients, making him an invaluable asset to our firm. Kenedy's proficiency extends beyond traditional legal practice. He is an esteemed lecturer of Law at the Kampala International University School of Law, imparting his extensive knowledge to the next generation of legal minds."
    },
    {
      name: "Alfred Habaasa",
      role: "Taxation & International Tax",
      focusArea: "Taxation & International Tax",
      image: "/Alfred.jpg",
      keyHighlights: [
        "Dual-qualified Ugandan CPA and Tax Lawyer",
        "Former URA Oil and Gas Division Supervisor",
        "Former EY Senior Tax Advisor (2015-2019)",
        "International Tax and Transfer Pricing Lecturer",
        "Approved Oxford Brookes University Mentor",
        "Active in Professional Tax Bodies"
      ],
      qualifications: "LLM Energy Economics and Law (University of Aberdeen), BSc Applied Accounting (Oxford Brookes University), Uganda CPA, Lawyer, ACCA Member, CIOT Affiliate",
      memberships: ["ACCA", "CIOT (International Tax Affiliate)", "Uganda Law Society"],
      publications: [
        "Contributions to IBFD International VAT Monitor on international aspects of VAT",
        "Multiple publications on international taxation and transfer pricing",
        "Articles on cross-cutting tax issues",
        "Organized eminent tax professionals to create 'The Tax Association'"
      ],
      bio: "Alfred Habaasa is a dual-qualified Ugandan CPA and tax Lawyer who previously supervised Transfer Pricing and International Tax reviews within the Oil and Gas/Mining Division at the Uganda Revenue Authority (URA). He is a recognized expert in taxation and tax policy, with a particular focus on international tax and extractives taxation. Before joining the URA in 2019, he served as a senior tax advisor at Ernst & Young (EY) Uganda from early 2015, undertaking a variety of tax assignments up to a senior tax advisor level. Beyond his professional role, Alfred is a highly regarded tax educator, with a current focus on tutoring International Tax and Transfer Pricing with Lettaz Tax Training. In this capacity, he attracts students from numerous countries, including Uganda, Kenya, Tanzania, Zambia, Zimbabwe, and the UK. Alfred is also a dedicated mentor evident from his approved mentor status for Oxford Brookes University, where he guides both Ugandan and international students through the BSc accounting degree ACCA pathway."
    },
    {
      name: "Taremwa",
      role: "Legal Consultant",
      focusArea: "Legal Consultant",
      image: "/Taremwa.jpg",
      keyHighlights: [
        "Legal consultant specialist",
        "Compliance expertise",
        "Regulatory guidance"
      ],
      qualifications: "LLB, Advocate",
      memberships: ["Uganda Law Society", "East African Law Society"],
      publications: "Articles on legal compliance and advisory services",
      bio: "Taremwa provides expert legal advisory services with a focus on compliance and regulatory matters. His attention to detail and comprehensive approach ensures clients receive thorough legal guidance."
    },
    {
      name: "Nicholas",
      role: "Corporate Practice & Litigation",
      focusArea: "Corporate Practice & Litigation",
      image: "/Nicholas.jpg",
      keyHighlights: [
        "Young result-oriented Advocate of the High court",
        "Keen interest in corporate practice",
        "Zealous to find practical solutions to modern day challenges",
        "Touch of litigation",
        "Vanguard force in manoeuvring various court processes"
      ],
      qualifications: "LLB, Advocate",
      memberships: ["Uganda Law Society", "East African Law Society"],
      publications: "Active in corporate law practice and litigation",
      bio: "Nicholas is a young result-oriented Advocate of the High court with a keen interest in corporate practice. He is zealous to find practical solutions to modern day challenges in areas of corporate practice. Nicholas has a touch of litigation and he has proven to be a vanguard force in manoeuvring various court processes. You can count on Nicholas to resolve your Legal challenges."
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-slide-down">Our Team</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              Meet the experts behind REDMOND's success
            </p>
          </div>
        </div>
      </section>

      {/* Team Overview */}
      <section className="py-20 bg-gradient-to-b from-white via-blue-50/30 to-white relative overflow-hidden">
        {/* Decorative background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-96 h-96 bg-redmond-blue/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-redmond-gold/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-redmond-dark-blue mb-4">Our Partners</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our team combines deep legal expertise with specialized tax knowledge to provide 
              comprehensive solutions for all your legal and tax needs.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {partners.map((partner, index) => (
              <div key={index} className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden border border-gray-200/50 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 animate-stagger-1" style={{ animationDelay: `${index * 100}ms` }}>
                {/* Image at the top */}
                <div className="relative h-80 w-full">
                  <img 
                    src={partner.image} 
                    alt={partner.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-2xl font-bold text-white mb-1">{partner.name}</h3>
                    <p className="text-redmond-white/90 font-medium">{partner.role}</p>
                  </div>
                </div>
                
                <div className="p-8">
                  
                  <p className="text-gray-700 mb-6">{partner.bio}</p>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-redmond-dark-blue mb-3 flex items-center">
                        <GraduationCap className="h-5 w-5 mr-2" />
                        Qualifications
                      </h4>
                      <p className="text-sm text-gray-600">{partner.qualifications}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-redmond-dark-blue mb-3 flex items-center">
                        <Award className="h-5 w-5 mr-2" />
                        Key Highlights
                      </h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {partner.keyHighlights.map((highlight, i) => (
                          <li key={i} className="flex items-start">
                            <div className="w-1.5 h-1.5 bg-redmond-gold rounded-full mt-2 mr-2 flex-shrink-0"></div>
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="mt-6 grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-redmond-dark-blue mb-3 flex items-center">
                        <BookOpen className="h-5 w-5 mr-2" />
                        Memberships
                      </h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {partner.memberships.map((membership, i) => (
                          <li key={i} className="flex items-start">
                            <div className="w-1.5 h-1.5 bg-redmond-gold rounded-full mt-2 mr-2 flex-shrink-0"></div>
                            {membership}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-redmond-dark-blue mb-3 flex items-center">
                        <Globe className="h-5 w-5 mr-2" />
                        Publications
                      </h4>
                      {Array.isArray(partner.publications) ? (
                        <ul className="text-sm text-gray-600 space-y-1">
                          {partner.publications.map((pub, i) => (
                            <li key={i} className="flex items-start">
                              <div className="w-1.5 h-1.5 bg-redmond-gold rounded-full mt-2 mr-2 flex-shrink-0"></div>
                              {pub}
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <p className="text-sm text-gray-600">{partner.publications}</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Expertise Visualization */}
      <section className="py-20 bg-gradient-to-b from-gray-50 via-white to-gray-50 relative overflow-hidden">
        {/* Decorative background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-redmond-blue/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-redmond-gold/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-redmond-dark-blue mb-4 animate-fade-in-up">Team Expertise Matrix</h2>
            <p className="text-xl text-gray-600 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>Visual representation of our team's diverse expertise areas</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {/* Legal Expertise */}
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-6 border border-gray-200/50 hover:shadow-2xl hover:scale-105 transition-all duration-300 animate-stagger-1">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-redmond-blue to-redmond-dark-blue rounded-xl mx-auto mb-4 flex items-center justify-center shadow-lg animate-pulse-slow">
                  <Scale className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-redmond-dark-blue mb-2">Legal Expertise</h3>
                <p className="text-sm text-gray-600 mb-4">Comprehensive legal services</p>
                <div className="space-y-2 text-left">
                  <div className="flex items-center text-sm">
                    <div className="w-2 h-2 bg-redmond-blue rounded-full mr-2"></div>
                    <span>Litigation</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <div className="w-2 h-2 bg-redmond-blue rounded-full mr-2"></div>
                    <span>Commercial Law</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <div className="w-2 h-2 bg-redmond-blue rounded-full mr-2"></div>
                    <span>Legal Advisory</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Tax Expertise */}
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-6 border border-gray-200/50 hover:shadow-2xl hover:scale-105 transition-all duration-300 animate-stagger-2">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-redmond-gold to-redmond-gold-dark rounded-xl mx-auto mb-4 flex items-center justify-center shadow-lg animate-pulse-slow">
                  <Calculator className="h-8 w-8 text-redmond-dark-blue" />
                </div>
                <h3 className="text-lg font-bold text-redmond-dark-blue mb-2">Tax Expertise</h3>
                <p className="text-sm text-gray-600 mb-4">Specialized tax advisory</p>
                <div className="space-y-2 text-left">
                  <div className="flex items-center text-sm">
                    <div className="w-2 h-2 bg-redmond-gold rounded-full mr-2"></div>
                    <span>International Tax</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <div className="w-2 h-2 bg-redmond-gold rounded-full mr-2"></div>
                    <span>Transfer Pricing</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <div className="w-2 h-2 bg-redmond-gold rounded-full mr-2"></div>
                    <span>Compliance</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Industry Experience */}
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-6 border border-gray-200/50 hover:shadow-2xl hover:scale-105 transition-all duration-300 animate-stagger-3">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-redmond-blue to-redmond-gold rounded-xl mx-auto mb-4 flex items-center justify-center shadow-lg animate-pulse-slow">
                  <Briefcase className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-redmond-dark-blue mb-2">Industry Experience</h3>
                <p className="text-sm text-gray-600 mb-4">Big Four & URA background</p>
                <div className="space-y-2 text-left">
                  <div className="flex items-center text-sm">
                    <div className="w-2 h-2 bg-redmond-blue rounded-full mr-2"></div>
                    <span>EY Experience</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <div className="w-2 h-2 bg-redmond-blue rounded-full mr-2"></div>
                    <span>URA Background</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <div className="w-2 h-2 bg-redmond-blue rounded-full mr-2"></div>
                    <span>Oil & Gas</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Academic Excellence */}
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-6 border border-gray-200/50 hover:shadow-2xl hover:scale-105 transition-all duration-300 animate-stagger-4">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-redmond-dark-blue to-redmond-blue rounded-xl mx-auto mb-4 flex items-center justify-center shadow-lg animate-pulse-slow">
                  <GraduationCap className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-redmond-dark-blue mb-2">Academic Excellence</h3>
                <p className="text-sm text-gray-600 mb-4">Teaching & mentoring</p>
                <div className="space-y-2 text-left">
                  <div className="flex items-center text-sm">
                    <div className="w-2 h-2 bg-redmond-dark-blue rounded-full mr-2"></div>
                    <span>University Lecturer</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <div className="w-2 h-2 bg-redmond-dark-blue rounded-full mr-2"></div>
                    <span>Student Mentor</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <div className="w-2 h-2 bg-redmond-dark-blue rounded-full mr-2"></div>
                    <span>Publications</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Team Statistics */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-gray-200/50 hover:shadow-2xl hover:scale-105 transition-all duration-300 animate-stagger-1">
              <div className="w-20 h-20 bg-gradient-to-br from-redmond-blue to-redmond-dark-blue rounded-2xl mx-auto mb-4 flex items-center justify-center shadow-lg animate-pulse-slow">
                <Users className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-5xl font-bold bg-gradient-to-r from-redmond-blue to-redmond-dark-blue bg-clip-text text-transparent mb-2">5</h3>
              <p className="text-gray-700 font-bold text-lg">Expert Partners</p>
              <p className="text-sm text-gray-600 mt-2">Diverse expertise across legal and tax domains</p>
            </div>
            
            <div className="text-center bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-gray-200/50 hover:shadow-2xl hover:scale-105 transition-all duration-300 animate-stagger-2">
              <div className="w-20 h-20 bg-gradient-to-br from-redmond-gold to-redmond-gold-dark rounded-2xl mx-auto mb-4 flex items-center justify-center shadow-lg animate-pulse-slow">
                <Award className="h-10 w-10 text-redmond-dark-blue" />
              </div>
              <h3 className="text-5xl font-bold bg-gradient-to-r from-redmond-gold to-redmond-gold-dark bg-clip-text text-transparent mb-2">15+</h3>
              <p className="text-gray-700 font-bold text-lg">Years Combined</p>
              <p className="text-sm text-gray-600 mt-2">Total experience in legal and tax services</p>
            </div>
            
            <div className="text-center bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-gray-200/50 hover:shadow-2xl hover:scale-105 transition-all duration-300 animate-stagger-3">
              <div className="w-20 h-20 bg-gradient-to-br from-redmond-blue to-redmond-gold rounded-2xl mx-auto mb-4 flex items-center justify-center shadow-lg animate-pulse-slow">
                <Globe className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-5xl font-bold bg-gradient-to-r from-redmond-blue to-redmond-gold bg-clip-text text-transparent mb-2">100%</h3>
              <p className="text-gray-700 font-bold text-lg">Client Focus</p>
              <p className="text-sm text-gray-600 mt-2">Dedicated to client success and satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Strengths */}
      <section className="py-20 bg-gradient-to-b from-white via-blue-50/30 to-white relative overflow-hidden">
        {/* Decorative background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-10 w-72 h-72 bg-redmond-gold/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-redmond-blue/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-redmond-dark-blue mb-4 animate-fade-in-up">Team Strengths</h2>
            <p className="text-xl text-gray-600 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>What makes our team exceptional</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-2xl bg-white/90 backdrop-blur-sm border border-gray-200/50 hover:shadow-2xl hover:scale-105 transition-all duration-300 animate-stagger-1">
              <div className="w-24 h-24 bg-gradient-to-br from-redmond-blue to-redmond-dark-blue rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-xl animate-pulse-slow">
                <GraduationCap className="h-12 w-12 text-white" />
              </div>
              <h3 className="text-xl font-bold text-redmond-dark-blue mb-4">Dual Qualifications</h3>
              <p className="text-gray-600 leading-relaxed">
                Our team includes professionals with both legal and accounting qualifications, 
                providing unique insights and comprehensive solutions.
              </p>
            </div>
            
            <div className="text-center p-8 rounded-2xl bg-white/90 backdrop-blur-sm border border-gray-200/50 hover:shadow-2xl hover:scale-105 transition-all duration-300 animate-stagger-2">
              <div className="w-24 h-24 bg-gradient-to-br from-redmond-gold to-redmond-gold-dark rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-xl animate-pulse-slow">
                <Briefcase className="h-12 w-12 text-redmond-dark-blue" />
              </div>
              <h3 className="text-xl font-bold text-redmond-dark-blue mb-4">Industry Experience</h3>
              <p className="text-gray-600 leading-relaxed">
                Former URA and Big Four experience brings deep institutional knowledge 
                and industry best practices to every engagement.
              </p>
            </div>
            
            <div className="text-center p-8 rounded-2xl bg-white/90 backdrop-blur-sm border border-gray-200/50 hover:shadow-2xl hover:scale-105 transition-all duration-300 animate-stagger-3">
              <div className="w-24 h-24 bg-gradient-to-br from-redmond-dark-blue to-redmond-blue rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-xl animate-pulse-slow">
                <Award className="h-12 w-12 text-white" />
              </div>
              <h3 className="text-xl font-bold text-redmond-dark-blue mb-4">Academic Excellence</h3>
              <p className="text-gray-600 leading-relaxed">
                Our team members are active in academia, lecturing and mentoring the 
                next generation of legal and tax professionals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-redmond-blue to-redmond-dark-blue text-redmond-white relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-20 w-32 h-32 bg-redmond-white/5 rounded-full animate-float"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 bg-redmond-white/8 rounded-full animate-float delay-300"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-redmond-white/3 rounded-full animate-float delay-500"></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h2 className="text-3xl font-bold mb-4 animate-fade-in-up">Ready to Work with Our Team?</h2>
          <p className="text-xl mb-8 animate-fade-in-up delay-200">Schedule a consultation with our experts today</p>
          <Link 
            href="/contact"
            className="inline-flex items-center bg-redmond-white text-redmond-blue px-8 py-3 rounded-lg hover:bg-gray-100 transition-all duration-200 font-medium text-lg hover-scale animate-fade-in-scale delay-400"
          >
            Schedule a Consultation <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
