import { Scale, Calculator, Award, Users, Target, Shield, TrendingUp, Globe, FileText, Zap, Star } from 'lucide-react';

export default function About() {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-slide-down">About REDMOND</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              Your Strategic Partner in Tax Management and Legal Services
            </p>
          </div>
        </div>
      </section>

      {/* REDMOND Associated Advocates Section */}
      <section id="advocates" className="py-20 bg-gradient-to-b from-white via-blue-50/30 to-white relative overflow-hidden">
        {/* Decorative background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-redmond-blue/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-redmond-gold/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl p-10 border border-gray-200/50 shadow-xl">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-gradient-to-br from-redmond-blue to-redmond-dark-blue rounded-xl shadow-lg">
                    <Scale className="h-8 w-8 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-redmond-dark-blue ml-4">REDMOND Associated Advocates</h2>
                </div>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Welcome to Redmond Associated Advocates, a beacon of legal excellence and client-centered commitment. With a rich heritage in delivering top-notch legal services, our seasoned professionals stand ready to guide you through every facet of your legal journey.
                </p>
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                  Since our establishment, we have upheld the principles of integrity, diligence, and personalized legal solutions. Our journey has been marked by dedicated advocacy and a deep-rooted passion for justice.
                </p>
                
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="text-center p-4 rounded-xl bg-gradient-to-br from-redmond-gold/20 to-redmond-gold/5 animate-stagger-1 hover:scale-105 hover:shadow-lg transition-all duration-300 border border-redmond-gold/20">
                    <div className="w-14 h-14 bg-gradient-to-br from-redmond-gold to-redmond-gold-dark rounded-xl mx-auto mb-3 flex items-center justify-center shadow-md animate-pulse-slow">
                      <Award className="h-7 w-7 text-redmond-dark-blue" />
                    </div>
                    <h3 className="font-bold text-redmond-dark-blue mb-2 text-sm">Excellence</h3>
                    <p className="text-xs text-gray-600 leading-relaxed">Legal excellence and client satisfaction</p>
                  </div>
                  <div className="text-center p-4 rounded-xl bg-gradient-to-br from-redmond-blue/20 to-redmond-blue/5 animate-stagger-2 hover:scale-105 hover:shadow-lg transition-all duration-300 border border-redmond-blue/20">
                    <div className="w-14 h-14 bg-gradient-to-br from-redmond-blue to-redmond-dark-blue rounded-xl mx-auto mb-3 flex items-center justify-center shadow-md animate-pulse-slow">
                      <Users className="h-7 w-7 text-white" />
                    </div>
                    <h3 className="font-bold text-redmond-dark-blue mb-2 text-sm">Experience</h3>
                    <p className="text-xs text-gray-600 leading-relaxed">Combined legal experience and expertise</p>
                  </div>
                  <div className="text-center p-4 rounded-xl bg-gradient-to-br from-redmond-dark-blue/20 to-redmond-dark-blue/5 animate-stagger-3 hover:scale-105 hover:shadow-lg transition-all duration-300 border border-redmond-dark-blue/20">
                    <div className="w-14 h-14 bg-gradient-to-br from-redmond-dark-blue to-redmond-blue rounded-xl mx-auto mb-3 flex items-center justify-center shadow-md animate-pulse-slow">
                      <Target className="h-7 w-7 text-white" />
                    </div>
                    <h3 className="font-bold text-redmond-dark-blue mb-2 text-sm">Results</h3>
                    <p className="text-xs text-gray-600 leading-relaxed">Proven track record of success</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-10 border border-gray-200/50 shadow-xl hover:shadow-2xl transition-shadow duration-300">
                <h3 className="text-2xl font-bold text-redmond-dark-blue mb-6 flex items-center">
                  <div className="w-1 h-8 bg-gradient-to-b from-redmond-blue to-redmond-gold mr-3 rounded-full"></div>
                  Our Legal Services
                </h3>
                <div className="space-y-5">
                  <div className="group flex items-start p-4 rounded-lg hover:bg-gradient-to-r hover:from-blue-50 hover:to-transparent transition-all duration-300 hover:shadow-md border-l-4 border-transparent hover:border-redmond-blue">
                    <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-redmond-blue to-redmond-dark-blue rounded-lg flex items-center justify-center mr-4 shadow-md group-hover:scale-110 transition-transform">
                      <Scale className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-redmond-dark-blue mb-1">Litigation</h4>
                      <p className="text-gray-600 text-sm">Comprehensive litigation support for complex legal disputes</p>
                    </div>
                  </div>
                  <div className="group flex items-start p-4 rounded-lg hover:bg-gradient-to-r hover:from-blue-50 hover:to-transparent transition-all duration-300 hover:shadow-md border-l-4 border-transparent hover:border-redmond-blue">
                    <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-redmond-blue to-redmond-dark-blue rounded-lg flex items-center justify-center mr-4 shadow-md group-hover:scale-110 transition-transform">
                      <FileText className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-redmond-dark-blue mb-1">Commercial Law</h4>
                      <p className="text-gray-600 text-sm">Expert guidance on commercial transactions and business law</p>
                    </div>
                  </div>
                  <div className="group flex items-start p-4 rounded-lg hover:bg-gradient-to-r hover:from-blue-50 hover:to-transparent transition-all duration-300 hover:shadow-md border-l-4 border-transparent hover:border-redmond-blue">
                    <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-redmond-blue to-redmond-dark-blue rounded-lg flex items-center justify-center mr-4 shadow-md group-hover:scale-110 transition-transform">
                      <Shield className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-redmond-dark-blue mb-1">Consultancy</h4>
                      <p className="text-gray-600 text-sm">Strategic legal consultancy for business decisions</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy, Vision, and Mission */}
      <section className="py-20 bg-gradient-to-b from-gray-50 via-white to-gray-50 relative overflow-hidden">
        {/* Decorative background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-10 w-96 h-96 bg-redmond-gold/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-10 w-96 h-96 bg-redmond-blue/5 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid md:grid-cols-2 gap-8">
            {/* The Idea */}
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-10 shadow-xl border border-gray-200/50 hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-redmond-blue to-redmond-dark-blue rounded-xl flex items-center justify-center mr-4 shadow-lg">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-redmond-dark-blue">The Idea</h2>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                Empowering Your Legal Vision: Unveiling the Idea Behind Redmond Associated Advocates
              </p>
              <p className="text-gray-600 mt-4 leading-relaxed">
                The heart of Redmond Associated Advocates lies in our commitment to bring your legal ideas to life. 
                With a dynamic team of professionals, we infuse our expertise into every aspect of your legal journey, 
                propelling your vision towards reality.
              </p>
            </div>

            {/* Our Philosophy */}
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-10 shadow-xl border border-gray-200/50 hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-redmond-gold to-redmond-gold-dark rounded-xl flex items-center justify-center mr-4 shadow-lg">
                  <Shield className="h-8 w-8 text-redmond-dark-blue" />
                </div>
                <h2 className="text-2xl font-bold text-redmond-dark-blue">Our Philosophy</h2>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                At Redmond Associated Advocates, our philosophy centers on client-centricity, innovation, and unwavering commitment.
              </p>
              <p className="text-gray-600 mt-4 leading-relaxed">
                We believe in delivering personalized legal solutions that empower individuals and businesses to thrive. 
                Our approach combines deep legal expertise with practical business understanding to deliver exceptional results.
              </p>
            </div>

            {/* Our Vision */}
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-10 shadow-xl border border-gray-200/50 hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-redmond-dark-blue to-redmond-blue rounded-xl flex items-center justify-center mr-4 shadow-lg">
                  <Globe className="h-8 w-8 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-redmond-dark-blue">Our Vision</h2>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                To be Uganda&apos;s most trusted legal partner, recognized for our commitment to justice, 
                innovation, and client success.
              </p>
              <p className="text-gray-600 mt-4 leading-relaxed">
                We envision a future where legal challenges are transformed into opportunities for growth and success. 
                Through dedicated advocacy and personalized solutions, we help our clients achieve their aspirations.
              </p>
            </div>

            {/* Our Mission */}
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-10 shadow-xl border border-gray-200/50 hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-redmond-blue to-redmond-gold rounded-xl flex items-center justify-center mr-4 shadow-lg">
                  <Star className="h-8 w-8 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-redmond-dark-blue">Our Mission</h2>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                Empowering clients through expert legal representation.
              </p>
              <p className="text-gray-600 mt-4 leading-relaxed">
                Our mission is driven by integrity, innovation, and client success. We&apos;re your dedicated 
                partner in navigating complex legal challenges with confidence. We serve as an extension of 
                your team, turning legal complexity into opportunities for efficiency and growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* REDMOND Tax Section */}
      <section id="tax" className="py-20 bg-gradient-to-b from-gray-50 via-white to-gray-50 relative overflow-hidden">
        {/* Decorative background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-redmond-blue/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-redmond-gold/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-6">
              <div className="p-3 bg-gradient-to-br from-redmond-gold to-redmond-gold-dark rounded-xl shadow-lg">
                <Calculator className="h-8 w-8 text-redmond-dark-blue" />
              </div>
              <h2 className="text-3xl font-bold text-redmond-dark-blue ml-4">REDMOND Tax</h2>
            </div>
          </div>

          <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-10 mb-8 border border-gray-200/50 hover:shadow-2xl transition-shadow duration-300">
            <h3 className="text-2xl font-bold text-redmond-dark-blue mb-6">About Us</h3>
            <p className="text-lg text-gray-700 mb-4">
              At Redmond Tax we understand that Tax is a critical intersection of law, accounting, and financial reporting. 
              Understanding this complexity is why we created Redmond Tax.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              We offer a dedicated, high-level service focused on transforming tax complexity into clear strategic advantage. 
              Our Uganda tax practice is spearheaded by Alfred Habaasa, FCCA, a principal possessing the rare and crucial 
              dual qualification of a Lawyer and a Certified Public Accountant (CPA) in Uganda. This expertise of our tax 
              head allows us to provide clients with seamless solutions that cover everything from rigorous tax compliance 
              and transparent financial reporting to sophisticated tax advisory and legal defence.
            </p>
            <p className="text-xl font-semibold text-redmond-dark-blue mb-6">
              Your Strategic Partner in Tax Management and Tax Dispute Resolution
            </p>
            <p className="text-lg text-gray-700 mb-4">
              At Redmond Tax we are founded on the principle that effective tax management in Uganda is the core of 
              sustainable business growth, not merely a year-end obligation. Redmond Tax offers a more proactive, strategic, 
              and technically rigorous approach to tax services in Uganda than the traditional model seen in Uganda tax practice.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              <strong className="text-redmond-dark-blue">Our goal is to demolish siloed expertism in Uganda Tax and reduce your Uganda tax consultancy bill.</strong>
            </p>
            <p className="text-lg text-gray-700 mb-4">
              The traditional approach in Uganda Tax Practice is reactive and siloed: accountants handle tax compliance, 
              and lawyers are brought in only when a dispute arises. At Redmond Tax, we are flipping that model.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              <strong className="text-redmond-dark-blue">Our competitive edge is a proactive, integrated Uganda tax planning and defence strategy.</strong> Our core 
              compliance and advisory teams seamlessly blend Ugandan tax lawyers, Ugandan Certified Public Accountants (CPAs), 
              and Ugandan financial reporting specialists. This structure ensures that legal interpretation is embedded into 
              every compliance step and advisory opinion.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              The result? We develop fully defensible Ugandan tax positions from the start. In the event of a Uganda Revenue 
              Authority challenge, the same experts who built your position swiftly defend it, eliminating the costly delays 
              and learning curve associated with introducing a new, external legal team.
            </p>
            <p className="text-lg text-gray-700">
              We serve as an extension of your finance team, turning the inherent complexity of Ugandan tax regulations into 
              opportunities for efficiency, competitive advantage, and risk mitigation.
            </p>
          </div>

          <div className="bg-redmond-white rounded-lg shadow-lg p-8 mb-8">
            <h3 className="text-2xl font-bold text-redmond-dark-blue mb-6">Our Core Services: The Three Pillars of our Ugandan Tax Strategy</h3>
            <p className="text-lg text-gray-700 mb-6">
              We provide a comprehensive Ugandan tax service model covering every critical aspect of your Uganda tax lifecycle:
            </p>
            
            <div className="space-y-6">
              <div className="border-l-4 border-redmond-blue pl-6">
                <h4 className="text-xl font-bold text-redmond-dark-blue mb-3">1. Strategic Uganda Tax Advisory (Planning for the Future)</h4>
                <p className="text-gray-700 mb-2"><strong>What We Do:</strong> We don&apos;t just file your taxes; we help you plan your business operations around them. 
                This includes high-level structuring for SMEs and start ups, local, regional and international mergers, acquisitions, and restructuring, 
                developing defensible transfer pricing policies, optimizing transactions for tax and maximizing tax incentives.</p>
                <p className="text-gray-700"><strong>The Benefit:</strong> We provide clear, forward-looking advice to ensure every major financial 
                decision is tax-optimized, reducing your effective tax rate and increasing value from your fees.</p>
              </div>

              <div className="border-l-4 border-redmond-blue pl-6">
                <h4 className="text-xl font-bold text-redmond-dark-blue mb-3">2. Rigorous Tax Compliance (Managing the Present)</h4>
                <p className="text-gray-700 mb-2"><strong>What We Do:</strong> We ensure absolute accuracy and timeliness for all required filings—from 
                Uganda corporate income tax returns and Uganda indirect tax (VAT) filings to payroll obligations. Our robust process is designed to stand 
                up to the highest scrutiny.</p>
                <p className="text-gray-700"><strong>The Benefit:</strong> You gain peace of mind knowing you are fully compliant across all relevant 
                jurisdictions, minimizing the risk of penalties, audits, and unforeseen liabilities.</p>
              </div>

              <div className="border-l-4 border-redmond-blue pl-6">
                <h4 className="text-xl font-bold text-redmond-dark-blue mb-3">3. Financial Tax Reporting</h4>
                <p className="text-gray-700 mb-2"><strong>What We Do:</strong> We specialize in the complex accounting for your Uganda income taxes, 
                including preparing and reviewing the tax provision (IAS 12), managing deferred tax assets and liabilities, and meticulously documenting 
                uncertain tax positions. We help SMEs who need financial reports strictly for tax purposes. We prepare your books merging sound accounting 
                principles to satisfy your tax filing needs of audited financial reports.</p>
                <p className="text-gray-700"><strong>The Benefit:</strong> We provide tax targeted financial reporting ensuring your tax numbers integrate 
                seamlessly with your overall financial statements and adhere to reporting standards but uniquely prepared for tax.</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-redmond-blue/5 to-redmond-gold/5 backdrop-blur-sm rounded-2xl shadow-xl p-10 border border-gray-200/50">
            <h3 className="text-2xl font-bold text-redmond-dark-blue mb-8 flex items-center justify-center">
              <div className="w-1 h-8 bg-gradient-to-b from-redmond-gold to-redmond-blue mr-3 rounded-full"></div>
              Why Partner with Redmond Tax?
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 rounded-2xl bg-white/80 backdrop-blur-sm border border-gray-200/50 hover:shadow-xl hover:scale-105 transition-all duration-300">
                <div className="w-20 h-20 bg-gradient-to-br from-redmond-gold to-redmond-gold-dark rounded-2xl mx-auto mb-4 flex items-center justify-center shadow-lg animate-pulse-slow">
                  <Users className="h-10 w-10 text-redmond-dark-blue" />
                </div>
                <h4 className="font-bold text-redmond-dark-blue mb-3 text-lg">Principal-Led Expertise</h4>
                <p className="text-sm text-gray-600 leading-relaxed">You work directly with a seasoned professional who brings deep technical knowledge in specialized areas like international tax and complex corporate structures.</p>
              </div>
              <div className="text-center p-6 rounded-2xl bg-white/80 backdrop-blur-sm border border-gray-200/50 hover:shadow-xl hover:scale-105 transition-all duration-300">
                <div className="w-20 h-20 bg-gradient-to-br from-redmond-blue to-redmond-dark-blue rounded-2xl mx-auto mb-4 flex items-center justify-center shadow-lg animate-pulse-slow">
                  <Target className="h-10 w-10 text-white" />
                </div>
                <h4 className="font-bold text-redmond-dark-blue mb-3 text-lg">A Focus on Value</h4>
                <p className="text-sm text-gray-600 leading-relaxed">Our advice is always tied to your business objectives. We focus on delivering value that significantly outweighs the cost of our services.</p>
              </div>
              <div className="text-center p-6 rounded-2xl bg-white/80 backdrop-blur-sm border border-gray-200/50 hover:shadow-xl hover:scale-105 transition-all duration-300">
                <div className="w-20 h-20 bg-gradient-to-br from-redmond-dark-blue to-redmond-blue rounded-2xl mx-auto mb-4 flex items-center justify-center shadow-lg animate-pulse-slow">
                  <Shield className="h-10 w-10 text-white" />
                </div>
                <h4 className="font-bold text-redmond-dark-blue mb-3 text-lg">Bespoke Solutions</h4>
                <p className="text-sm text-gray-600 leading-relaxed">We avoid one-size-fits-all templates. Your tax strategy is custom-built to reflect the unique structure, ambition, and industry challenges of your company.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Statistics Section */}
      <section className="py-20 bg-gradient-to-r from-gray-50 to-redmond-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-redmond-dark-blue mb-4 animate-fade-in-up">REDMOND by the Numbers</h2>
            <p className="text-xl text-gray-600 animate-fade-in-up delay-200">Our impact and achievements in numbers</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {/* Years of Experience */}
            <div className="text-center bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-gray-200/50 hover:shadow-2xl hover:scale-105 transition-all duration-300 animate-stagger-1">
              <div className="w-24 h-24 bg-gradient-to-br from-redmond-blue to-redmond-dark-blue rounded-2xl mx-auto mb-4 flex items-center justify-center shadow-lg animate-pulse-slow">
                <Award className="h-12 w-12 text-white" />
              </div>
              <h3 className="text-5xl font-bold bg-gradient-to-r from-redmond-blue to-redmond-dark-blue bg-clip-text text-transparent mb-2">10+</h3>
              <p className="text-gray-700 font-bold text-lg mb-2">Years of Experience</p>
              <p className="text-sm text-gray-600">Combined expertise in tax and legal services</p>
            </div>

            {/* Clients Served */}
            <div className="text-center bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-gray-200/50 hover:shadow-2xl hover:scale-105 transition-all duration-300 animate-stagger-2">
              <div className="w-24 h-24 bg-gradient-to-br from-redmond-gold to-redmond-gold-dark rounded-2xl mx-auto mb-4 flex items-center justify-center shadow-lg animate-pulse-slow">
                <Users className="h-12 w-12 text-redmond-dark-blue" />
              </div>
              <h3 className="text-5xl font-bold bg-gradient-to-r from-redmond-gold to-redmond-gold-dark bg-clip-text text-transparent mb-2">500+</h3>
              <p className="text-gray-700 font-bold text-lg mb-2">Clients Served</p>
              <p className="text-sm text-gray-600">Businesses across Uganda and beyond</p>
            </div>

            {/* Success Rate */}
            <div className="text-center bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-gray-200/50 hover:shadow-2xl hover:scale-105 transition-all duration-300 animate-stagger-3">
              <div className="w-24 h-24 bg-gradient-to-br from-redmond-blue to-redmond-gold rounded-2xl mx-auto mb-4 flex items-center justify-center shadow-lg animate-pulse-slow">
                <TrendingUp className="h-12 w-12 text-white" />
              </div>
              <h3 className="text-5xl font-bold bg-gradient-to-r from-redmond-blue to-redmond-gold bg-clip-text text-transparent mb-2">95%</h3>
              <p className="text-gray-700 font-bold text-lg mb-2">Success Rate</p>
              <p className="text-sm text-gray-600">Client satisfaction and case resolution</p>
            </div>

            {/* Tax Savings */}
            <div className="text-center bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-gray-200/50 hover:shadow-2xl hover:scale-105 transition-all duration-300 animate-stagger-4">
              <div className="w-24 h-24 bg-gradient-to-br from-redmond-dark-blue to-redmond-blue rounded-2xl mx-auto mb-4 flex items-center justify-center shadow-lg animate-pulse-slow">
                <Calculator className="h-12 w-12 text-white" />
              </div>
              <h3 className="text-5xl font-bold bg-gradient-to-r from-redmond-dark-blue to-redmond-gold bg-clip-text text-transparent mb-2">$2M+</h3>
              <p className="text-gray-700 font-bold text-lg mb-2">Tax Savings</p>
              <p className="text-sm text-gray-600">Generated for our clients through strategic planning</p>
            </div>
          </div>

          {/* Service Areas */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-redmond-white rounded-lg shadow-lg p-6 hover-lift animate-stagger-1">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-redmond-blue to-redmond-dark-blue rounded-lg flex items-center justify-center mr-4 animate-pulse-slow">
                  <Scale className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-redmond-dark-blue">Legal Services</h3>
              </div>
              <p className="text-gray-600 text-sm mb-4">Comprehensive legal solutions including litigation, commercial law, and consultancy</p>
              <div className="flex items-center text-redmond-blue text-sm">
                <Star className="h-4 w-4 mr-1" />
                <span>Expert Legal Team</span>
              </div>
            </div>

            <div className="bg-redmond-white rounded-lg shadow-lg p-6 hover-lift animate-stagger-2">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-redmond-blue to-redmond-dark-blue rounded-lg flex items-center justify-center mr-4 animate-pulse-slow">
                  <Calculator className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-redmond-dark-blue">Tax Advisory</h3>
              </div>
              <p className="text-gray-600 text-sm mb-4">Specialized tax planning, compliance, and dispute resolution services</p>
              <div className="flex items-center text-redmond-blue text-sm">
                <Shield className="h-4 w-4 mr-1" />
                <span>100% Compliance</span>
              </div>
            </div>

            <div className="bg-redmond-white rounded-lg shadow-lg p-6 hover-lift animate-stagger-3">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-redmond-blue to-redmond-dark-blue rounded-lg flex items-center justify-center mr-4 animate-pulse-slow">
                  <Globe className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-redmond-dark-blue">International</h3>
              </div>
              <p className="text-gray-600 text-sm mb-4">Cross-border tax expertise and international business law</p>
              <div className="flex items-center text-redmond-blue text-sm">
                <Zap className="h-4 w-4 mr-1" />
                <span>Global Reach</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose REDMOND Section */}
      <section className="py-20 bg-gradient-to-b from-white via-redmond-blue/5 to-white relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-redmond-gold/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-redmond-blue/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-redmond-dark-blue mb-4">Why Choose REDMOND?</h2>
            <p className="text-xl text-gray-600">What sets us apart in the legal and tax advisory landscape</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group text-center p-8 rounded-2xl bg-white/90 backdrop-blur-sm border border-gray-200/50 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
              <div className="w-24 h-24 bg-gradient-to-br from-redmond-gold to-redmond-gold-dark rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300 animate-pulse-slow">
                <Users className="h-12 w-12 text-redmond-dark-blue" />
              </div>
              <h3 className="text-xl font-bold text-redmond-dark-blue mb-4">Dual Qualification</h3>
              <p className="text-gray-600 leading-relaxed">
                Our team includes professionals with both legal and accounting qualifications, 
                providing unique insights that other firms cannot match.
              </p>
            </div>
            
            <div className="group text-center p-8 rounded-2xl bg-white/90 backdrop-blur-sm border border-gray-200/50 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
              <div className="w-24 h-24 bg-gradient-to-br from-redmond-blue to-redmond-dark-blue rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300 animate-pulse-slow">
                <Award className="h-12 w-12 text-white" />
              </div>
              <h3 className="text-xl font-bold text-redmond-dark-blue mb-4">Proven Expertise</h3>
              <p className="text-gray-600 leading-relaxed">
                With former URA and Big Four experience, our team brings deep institutional 
                knowledge and industry best practices to every engagement.
              </p>
            </div>
            
            <div className="group text-center p-8 rounded-2xl bg-white/90 backdrop-blur-sm border border-gray-200/50 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
              <div className="w-24 h-24 bg-gradient-to-br from-redmond-dark-blue to-redmond-blue rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300 animate-pulse-slow">
                <Target className="h-12 w-12 text-white" />
              </div>
              <h3 className="text-xl font-bold text-redmond-dark-blue mb-4">Client-Focused</h3>
              <p className="text-gray-600 leading-relaxed">
                We prioritize client success with free consultations, continuous updates, 
                and a preference for mediation over litigation when possible.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-b from-white via-blue-50/30 to-white relative overflow-hidden">
        {/* Decorative background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-96 h-96 bg-redmond-blue/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-redmond-gold/5 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-redmond-dark-blue mb-4">Tailored Solutions to Address Your Diverse Legal Needs</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From personal matters to complex corporate issues, our services are designed to empower you with the 
              knowledge and representation you need to navigate the legal landscape with confidence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Criminal Law */}
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-200/50 hover:shadow-2xl hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-redmond-blue to-redmond-dark-blue rounded-xl flex items-center justify-center mb-6 shadow-lg">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-redmond-dark-blue mb-4">Criminal Law</h3>
              <p className="text-gray-600 leading-relaxed">
                Expert representation in criminal matters with a focus on protecting your rights and achieving the best possible outcome.
              </p>
            </div>

            {/* Property Law & Conveyancing */}
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-200/50 hover:shadow-2xl hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-redmond-gold to-redmond-gold-dark rounded-xl flex items-center justify-center mb-6 shadow-lg">
                <FileText className="h-8 w-8 text-redmond-dark-blue" />
              </div>
              <h3 className="text-xl font-bold text-redmond-dark-blue mb-4">Property Law & Conveyancing</h3>
              <p className="text-gray-600 leading-relaxed">
                Comprehensive property law services including conveyancing, property transactions, and real estate development.
              </p>
            </div>

            {/* Energy Law */}
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-200/50 hover:shadow-2xl hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-redmond-dark-blue to-redmond-blue rounded-xl flex items-center justify-center mb-6 shadow-lg">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-redmond-dark-blue mb-4">Energy Law</h3>
              <p className="text-gray-600 leading-relaxed">
                Specialized expertise in oil, gas, and renewable energy law for the evolving energy sector in Uganda.
              </p>
            </div>

            {/* Dispute Resolution */}
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-200/50 hover:shadow-2xl hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-redmond-blue to-redmond-gold rounded-xl flex items-center justify-center mb-6 shadow-lg">
                <Scale className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-redmond-dark-blue mb-4">Dispute Resolution</h3>
              <p className="text-gray-600 leading-relaxed">
                Effective mediation, arbitration, and litigation strategies to resolve disputes efficiently and favorably.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 bg-gradient-to-br from-redmond-blue via-redmond-dark-blue to-redmond-blue text-redmond-white relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 left-10 w-32 h-32 bg-redmond-white/10 rounded-full animate-float blur-xl"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-redmond-gold/10 rounded-full animate-float delay-200 blur-xl"></div>
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-redmond-white/5 rounded-full animate-pulse-slow blur-3xl"></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-10 border border-white/20 shadow-2xl">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-white/20 rounded-2xl shadow-lg">
                <Target className="h-12 w-12 text-white" />
              </div>
            </div>
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-white to-redmond-white/90 bg-clip-text text-transparent">Our Mission</h2>
            <p className="text-xl leading-relaxed text-redmond-white/95">
              To provide exceptional legal and tax advisory services that help our clients navigate 
              complex regulatory environments, optimize their tax position, and achieve their business 
              objectives with confidence and clarity.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}
