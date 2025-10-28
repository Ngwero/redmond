'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Crown, Gem, Trophy, TrendingUp, Shield, Scale, Globe, Diamond, Medal, PieChart, Receipt, Building2 } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import ParticlesBackground from '@/components/ParticlesBackground';

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Load particles.js if not already loaded
    if (typeof window !== 'undefined' && !window.particlesJS) {
      const script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js';
      script.async = true;
      document.head.appendChild(script);
    }
  }, []);

  const heroSlides = [
    {
      id: 1,
      title: "Protecting your rights with unwavering dedication",
      subtitle: "Primary Legal Guardians",
      description: "We provide a full range of legal services from transaction advisory services to litigation. Over the years, we have accumulated expertise, experience and an essential understanding of both the local and international markets that enables us to provide tailored services to our clients.",
      image: "https://source.unsplash.com/random/1920x1080/?business,legal"
    },
    {
      id: 2,
      title: "Connecting you to fair and equitable legal solutions",
      subtitle: "Bridge to Justice",
      description: "Redmond Associated Advocates supports clients to establish and maintain themselves as compliant entities in Uganda that are fit for purpose. This includes incorporation; licensing; tax and other statutory registration; management of regulatory investigations and compliance audits.",
      image: "https://source.unsplash.com/random/1920x1080/?regulation,compliance"
    },
    {
      id: 3,
      title: "Upholding integrity in every legal matter",
      subtitle: "Defenders of Truth",
      description: "Skilled Advocacy. Practical Solutions.",
      image: "https://source.unsplash.com/random/1920x1080/?advocacy,law"
    }
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, heroSlides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  const currentSlideData = heroSlides[currentSlide];

  return (
    <div className="min-h-screen bg-redmond-white">
      {/* Hero Carousel */}
      <section ref={heroRef} className="relative overflow-hidden h-screen" style={{ backgroundColor: '#4b6e7d' }}>
        {/* Background Images */}
        <div className="absolute inset-0 z-0 w-full h-full">
          <img 
            src={currentSlideData.image}
            alt="Hero Background"
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', opacity: 0.3 }}
          />
        </div>

        {/* Particles Background */}
        <ParticlesBackground />

        {/* Gradient Overlay */}
        <div className="absolute top-0 inset-x-0 h-64 flex items-start pointer-events-none z-1">
          <div className="h-24 w-2/3 bg-gradient-to-br from-redmond-gold opacity-20 blur-2xl"></div>
          <div className="h-20 w-3/5 bg-gradient-to-r from-redmond-blue opacity-40 blur-2xl"></div>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-2/5 aspect-[2/0.5] bg-gradient-to-br from-redmond-gold to-yellow-400 rounded-full opacity-20 blur-3xl z-1"></div>

        <div className="relative z-10 mx-auto pt-32 pb-24 lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5 text-center space-y-8">
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-redmond-gold"></div>
            <p className="text-yellow-400 font-bold text-xl tracking-wider uppercase whitespace-nowrap px-4 drop-shadow-lg">
              {currentSlideData.subtitle}
            </p>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-redmond-gold"></div>
          </div>
          <h1 className="text-white mx-auto max-w-5xl font-bold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-tight mb-6 drop-shadow-lg">
            {currentSlideData.title}
          </h1>
          <p className="text-white mx-auto max-w-2xl text-xl leading-relaxed drop-shadow-lg">
            {currentSlideData.description}
          </p>
          <div className="flex justify-center items-center flex-wrap mx-auto gap-4">
            <Link href="/contact" className="flex items-center h-12 px-6 rounded-full bg-redmond-gold text-redmond-dark-blue border border-redmond-gold font-semibold hover:bg-redmond-gold-dark transition-colors">
              Learn More
            </Link>
            <Link href="/about" className="flex items-center h-12 px-6 rounded-full bg-white/10 text-white border border-white/20 hover:bg-white/20 transition-colors">
              About Us
            </Link>
          </div>

          {/* Carousel Controls */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <div className="flex space-x-2">
              {heroSlides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentSlide ? 'bg-redmond-gold' : 'bg-redmond-gold/50'
                  }`}
                />
              ))}
            </div>
            <div className="flex space-x-2 ml-4">
              <button
                onClick={prevSlide}
                className="w-10 h-10 border border-white/30 hover:bg-white/10 transition-all flex items-center justify-center rounded-full"
              >
                <ChevronLeft className="h-5 w-5 text-white" />
              </button>
              <button
                onClick={nextSlide}
                className="w-10 h-10 bg-redmond-gold hover:bg-redmond-gold/80 transition-all flex items-center justify-center rounded-full"
              >
                <ChevronRight className="h-5 w-5 text-redmond-dark-blue" />
              </button>
            </div>
          </div>

          {/* Feature Cards */}
          <div className="text-left grid lg:grid-cols-3 p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 max-w-2xl lg:max-w-5xl mx-auto lg:divide-x divide-y lg:divide-y-0 divide-white/30">
            <div className="flex items-start gap-6 lg:pr-6 pb-6 lg:pb-0">
              <div className="w-10">
                <span className="p-3 rounded-xl bg-redmond-gold/20 flex w-max">
                  <Crown className="w-6 h-6 text-redmond-gold" />
                </span>
              </div>
              <div className="flex-1 space-y-1">
                <h2 className="font-semibold text-xl" style={{ color: '#2d5a73' }}>
                  Legal Guardians
                </h2>
                <p className="text-gray-800 text-sm font-medium">
                  Protecting your rights with unwavering dedication
                </p>
              </div>
            </div>
            <div className="flex items-start gap-6 lg:px-6 py-6 lg:py-0">
              <div className="w-10">
                <span className="p-3 rounded-xl bg-redmond-gold/20 flex w-max">
                  <Gem className="w-6 h-6 text-redmond-gold" />
                </span>
              </div>
              <div className="flex-1 space-y-1">
                <h2 className="font-semibold text-xl" style={{ color: '#2d5a73' }}>
                  Bridge to Justice
                </h2>
                <p className="text-gray-800 text-sm font-medium">
                  Connecting you to fair and equitable legal solutions
                </p>
              </div>
            </div>
            <div className="flex items-start gap-6 pt-6 lg:pt-0 lg:pl-6">
              <div className="w-10">
                <span className="p-3 rounded-xl bg-redmond-gold/20 flex w-max">
                  <Trophy className="w-6 h-6 text-redmond-gold" />
                </span>
              </div>
              <div className="flex-1 space-y-1">
                <h2 className="font-semibold text-xl" style={{ color: '#2d5a73' }}>
                  Defenders of Truth
                </h2>
                <p className="text-gray-800 text-sm font-medium">
                  Upholding integrity in every legal matter
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Expertise Section */}
      <section className="py-20 bg-gradient-to-b from-white via-blue-50/30 to-white relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-redmond-blue/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-redmond-gold/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-redmond-dark-blue mb-4">Our Expertise</h2>
            <p className="text-xl text-gray-600">Comprehensive legal services tailored to your needs</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-redmond-gold to-redmond-gold-dark rounded-full mx-auto mb-6 flex items-center justify-center shadow-lg">
                <Crown className="h-10 w-10 text-redmond-dark-blue" />
              </div>
              <h3 className="text-2xl font-bold text-redmond-dark-blue mb-4">Legal Guardians</h3>
              <p className="text-gray-600">Protecting your rights and interests with unwavering dedication</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-redmond-gold to-redmond-gold-dark rounded-full mx-auto mb-6 flex items-center justify-center shadow-lg">
                <Gem className="h-10 w-10 text-redmond-dark-blue" />
              </div>
              <h3 className="text-2xl font-bold text-redmond-dark-blue mb-4">Bridge to Justice</h3>
              <p className="text-gray-600">Connecting you to fair and equitable legal solutions</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-redmond-gold to-redmond-gold-dark rounded-full mx-auto mb-6 flex items-center justify-center shadow-lg">
                <Trophy className="h-10 w-10 text-redmond-dark-blue" />
              </div>
              <h3 className="text-2xl font-bold text-redmond-dark-blue mb-4">Defenders of Truth</h3>
              <p className="text-gray-600">Upholding integrity and truth in every legal matter</p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-20 bg-gradient-to-b from-white via-blue-50/30 to-white relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-redmond-blue/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-redmond-gold/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-redmond-dark-blue mb-4">What We Do</h2>
            <p className="text-xl text-gray-600">Let Our Experience be Your Guide</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/90 backdrop-blur-sm rounded-lg overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-200/50 shadow-xl">
              <div className="h-48 relative">
                <Image 
                  src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                  alt="Public Law and Regulation"
                  width={600}
                  height={200}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <Crown className="h-16 w-16 text-white" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-redmond-dark-blue mb-4">Public Law and Regulation</h3>
                <p className="text-gray-600 mb-4">
                  Redmond Associated Advocates is the firm of choice for public procurement advisory services 
                  and dispute resolution.
                </p>
                <Link href="/services" className="text-redmond-gold font-semibold hover:text-redmond-gold-dark transition-colors">
                  Learn More →
                </Link>
              </div>
            </div>

            <div className="bg-white/90 backdrop-blur-sm rounded-lg overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-200/50 shadow-xl">
              <div className="h-48 relative">
                <Image 
                  src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                  alt="Oil and Gas Law"
                  width={600}
                  height={200}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <Diamond className="h-16 w-16 text-white" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-redmond-dark-blue mb-4">Oil and Gas Law</h3>
                <p className="text-gray-600 mb-4">
                  The firm provided transaction advisory services in the farm down of Block 1 and 3A in the 
                  Albertine Graben.
                </p>
                <Link href="/services" className="text-redmond-gold font-semibold hover:text-redmond-gold-dark transition-colors">
                  Learn More →
                </Link>
              </div>
            </div>

            <div className="bg-white/90 backdrop-blur-sm rounded-lg overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-200/50 shadow-xl">
              <div className="h-48 relative">
                <Image 
                  src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                  alt="Dispute Resolution"
                  width={600}
                  height={200}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <Medal className="h-16 w-16 text-white" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-redmond-dark-blue mb-4">Dispute Resolution</h3>
                <p className="text-gray-600 mb-4">
                  Redmond Associated Advocates takes a practical and business centered approach to dispute 
                  resolution.
                </p>
                <Link href="/services" className="text-redmond-gold font-semibold hover:text-redmond-gold-dark transition-colors">
                  Learn More →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tax Expertise Section */}
      <section className="py-20 bg-gradient-to-r from-gray-50 to-redmond-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-redmond-dark-blue mb-4">Tax Expertise at a Glance</h2>
            <p className="text-xl text-gray-600">Visualizing our comprehensive tax services and expertise</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="bg-redmond-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-redmond-gold to-redmond-gold-dark rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg">
                  <TrendingUp className="h-8 w-8 text-redmond-dark-blue" />
                </div>
                <h3 className="text-lg font-bold text-redmond-dark-blue mb-2">Tax Planning</h3>
                <p className="text-sm text-gray-600">Strategic optimization for maximum savings</p>
              </div>
            </div>

            <div className="bg-redmond-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-redmond-gold to-redmond-gold-dark rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg">
                  <Shield className="h-8 w-8 text-redmond-dark-blue" />
                </div>
                <h3 className="text-lg font-bold text-redmond-dark-blue mb-2">Compliance</h3>
                <p className="text-sm text-gray-600">100% regulatory adherence</p>
              </div>
            </div>

            <div className="bg-redmond-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-redmond-gold to-redmond-gold-dark rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg">
                  <Scale className="h-8 w-8 text-redmond-dark-blue" />
                </div>
                <h3 className="text-lg font-bold text-redmond-dark-blue mb-2">Dispute Resolution</h3>
                <p className="text-sm text-gray-600">Expert representation & mediation</p>
              </div>
            </div>

            <div className="bg-redmond-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-redmond-gold to-redmond-gold-dark rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg">
                  <Globe className="h-8 w-8 text-redmond-dark-blue" />
                </div>
                <h3 className="text-lg font-bold text-redmond-dark-blue mb-2">International Tax</h3>
                <p className="text-sm text-gray-600">Cross-border expertise</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-redmond-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-redmond-gold to-redmond-gold-dark rounded-lg flex items-center justify-center mr-4 shadow-lg">
                  <Receipt className="h-6 w-6 text-redmond-dark-blue" />
                </div>
                <h3 className="text-lg font-bold text-redmond-dark-blue">VAT Services</h3>
              </div>
              <p className="text-gray-600 text-sm mb-4">Comprehensive VAT compliance, planning, and dispute resolution</p>
            </div>

            <div className="bg-redmond-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-redmond-gold to-redmond-gold-dark rounded-lg flex items-center justify-center mr-4 shadow-lg">
                  <Building2 className="h-6 w-6 text-redmond-dark-blue" />
                </div>
                <h3 className="text-lg font-bold text-redmond-dark-blue">Corporate Tax</h3>
              </div>
              <p className="text-gray-600 text-sm mb-4">Strategic corporate tax planning and compliance services</p>
            </div>

            <div className="bg-redmond-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-redmond-gold to-redmond-gold-dark rounded-lg flex items-center justify-center mr-4 shadow-lg">
                  <PieChart className="h-6 w-6 text-redmond-dark-blue" />
                </div>
                <h3 className="text-lg font-bold text-redmond-dark-blue">Transfer Pricing</h3>
              </div>
              <p className="text-gray-600 text-sm mb-4">Expert guidance on transfer pricing policies and documentation</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Legal Team Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <div className="h-1 w-16 bg-redmond-gold mx-auto"></div>
            </div>
            <h2 className="text-4xl font-bold text-redmond-dark-blue mb-4">Our Legal Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Our distinguished partners bring decades of combined experience in corporate law, taxation, and dispute resolution</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6">
            {/* Partner 1 */}
            <div className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-100">
              <div className="h-96 relative overflow-hidden">
                <Image 
                  src="/Gilbert.jpg"
                  alt="Gilbert"
                  width={400}
                  height={384}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-redmond-dark-blue mb-2 leading-tight">Nuwamanya Gilbert Katwire</h3>
                <p className="text-redmond-gold font-semibold mb-2 text-sm">Partner</p>
                <p className="text-gray-600 text-xs mb-4 line-clamp-2">Banking, Capital Markets & Commercial Law</p>
                <Link href="/team" className="text-redmond-gold font-semibold hover:text-redmond-gold-dark transition-colors text-xs flex items-center group">
                  View Bio 
                  <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              </div>
            </div>

            {/* Partner 2 */}
            <div className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-100">
              <div className="h-96 relative overflow-hidden">
                <Image 
                  src="/kenedy.jpg"
                  alt="Kenedy Kushaba"
                  width={400}
                  height={384}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-redmond-dark-blue mb-2 leading-tight">Kenedy Kushaba</h3>
                <p className="text-redmond-gold font-semibold mb-2 text-sm">Partner</p>
                <p className="text-gray-600 text-xs mb-4 line-clamp-2">Tax, Oil & Gas, Real Estate & Corporate Law</p>
                <Link href="/team" className="text-redmond-gold font-semibold hover:text-redmond-gold-dark transition-colors text-xs flex items-center group">
                  View Bio 
                  <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              </div>
            </div>

            {/* Partner 3 */}
            <div className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-100">
              <div className="h-96 relative overflow-hidden">
                <Image 
                  src="/Alfred.jpg"
                  alt="Alfred Habaasa"
                  width={400}
                  height={384}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-redmond-dark-blue mb-2 leading-tight">Alfred Habaasa</h3>
                <p className="text-redmond-gold font-semibold mb-2 text-sm">Partner</p>
                <p className="text-gray-600 text-xs mb-4 line-clamp-2">Taxation & International Tax</p>
                <Link href="/team" className="text-redmond-gold font-semibold hover:text-redmond-gold-dark transition-colors text-xs flex items-center group">
                  View Bio 
                  <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              </div>
            </div>

            {/* Partner 4 */}
            <div className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-100">
              <div className="h-96 relative overflow-hidden">
                <Image 
                  src="/Taremwa.jpg"
                  alt="Taremwa"
                  width={400}
                  height={384}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-redmond-dark-blue mb-2 leading-tight">Taremwa</h3>
                <p className="text-redmond-gold font-semibold mb-2 text-sm">Partner</p>
                <p className="text-gray-600 text-xs mb-4 line-clamp-2">Legal Consultant</p>
                <Link href="/team" className="text-redmond-gold font-semibold hover:text-redmond-gold-dark transition-colors text-xs flex items-center group">
                  View Bio 
                  <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              </div>
            </div>

            {/* Partner 5 */}
            <div className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-100">
              <div className="h-96 relative overflow-hidden">
                <Image 
                  src="/Nicholas.jpg"
                  alt="Nicholas"
                  width={400}
                  height={384}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-redmond-dark-blue mb-2 leading-tight">Nicholas</h3>
                <p className="text-redmond-gold font-semibold mb-2 text-sm">Partner</p>
                <p className="text-gray-600 text-xs mb-4 line-clamp-2">Corporate Practice & Litigation</p>
                <Link href="/team" className="text-redmond-gold font-semibold hover:text-redmond-gold-dark transition-colors text-xs flex items-center group">
                  View Bio 
                  <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
