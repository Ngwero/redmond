'use client';

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Calculator, Scale, Shield, Globe, FileText, TrendingUp, Users, Award } from 'lucide-react';

const slides = [
  {
    id: 1,
    title: "Tax Advisory & Planning",
    subtitle: "Strategic Tax Solutions",
    description: "Expert tax planning and advisory services to optimize your tax position and ensure compliance with Ugandan tax laws.",
    icon: <Calculator className="h-16 w-16" />,
    features: ["Tax Planning", "Compliance", "International Tax", "Transfer Pricing"],
    backgroundImage: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    iconBg: "from-blue-500 to-blue-700"
  },
  {
    id: 2,
    title: "Legal Services",
    subtitle: "Comprehensive Legal Solutions",
    description: "Professional legal services including litigation, commercial law, and consultancy to protect your business interests.",
    icon: <Scale className="h-16 w-16" />,
    features: ["Litigation", "Commercial Law", "Legal Advisory", "Dispute Resolution"],
    backgroundImage: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    iconBg: "from-purple-500 to-purple-700"
  },
  {
    id: 3,
    title: "Tax Compliance & Reporting",
    subtitle: "100% Compliance Guaranteed",
    description: "Comprehensive compliance and financial reporting services to ensure full regulatory adherence and peace of mind.",
    icon: <Shield className="h-16 w-16" />,
    features: ["Financial Reporting", "URA Compliance", "Audit Support", "Documentation"],
    backgroundImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    iconBg: "from-green-500 to-green-700"
  },
  {
    id: 4,
    title: "International Taxation",
    subtitle: "Global Tax Expertise",
    description: "Specialized expertise in cross-border tax matters, transfer pricing, and international business law compliance.",
    icon: <Globe className="h-16 w-16" />,
    features: ["Cross-border Tax", "Transfer Pricing", "AEOI/CRS", "Mining & Petroleum"],
    backgroundImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    iconBg: "from-orange-500 to-orange-700"
  },
  {
    id: 5,
    title: "Tax Dispute Resolution",
    subtitle: "Expert Representation",
    description: "Professional representation during URA audits and tax disputes with a proven track record of successful outcomes.",
    icon: <FileText className="h-16 w-16" />,
    features: ["URA Audits", "Mediation", "Litigation", "Appeals"],
    backgroundImage: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    iconBg: "from-red-500 to-red-700"
  }
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [progress, setProgress] = useState(0);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  // Progress bar for auto-play
  useEffect(() => {
    if (!isAutoPlaying) return;

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          return 0;
        }
        return prev + 2; // 2% every 100ms = 5 seconds total
      });
    }, 100);

    return () => clearInterval(progressInterval);
  }, [isAutoPlaying, currentSlide]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlaying(false);
    setProgress(0);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false);
    setProgress(0);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setProgress(0);
  };

  const currentSlideData = slides[currentSlide];

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background with image */}
      <div className="absolute inset-0 transition-all duration-1000">
        <div 
          className="absolute inset-0 hero-bg-image animate-image-zoom"
          style={{ backgroundImage: `url(${currentSlideData.backgroundImage})` }}
        ></div>
        <div className="absolute inset-0 hero-bg-overlay"></div>
        <div className="absolute inset-0 bg-black/20"></div>
        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/2 to-transparent animate-shimmer"></div>
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white/2 rounded-full animate-float"></div>
        <div className="absolute top-32 right-20 w-24 h-24 bg-white/1 rounded-full animate-float delay-200"></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-white/2 rounded-full animate-float delay-400"></div>
        <div className="absolute bottom-32 right-1/3 w-20 h-20 bg-white/1 rounded-full animate-float delay-300"></div>
        <div className="absolute top-1/2 left-10 w-12 h-12 bg-white/1 rounded-full animate-float delay-500"></div>
        <div className="absolute top-1/3 right-1/4 w-14 h-14 bg-white/2 rounded-full animate-float delay-100"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Content */}
            <div className="text-white">
              <div className="mb-6">
                <div className="flex items-center mb-4">
                  <div className={`w-20 h-20 bg-gradient-to-br ${currentSlideData.iconBg} rounded-xl flex items-center justify-center text-white mr-6 animate-bounce-in`}>
                    {currentSlideData.icon}
                  </div>
                  <div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-2 animate-fade-in-up">
                      {currentSlideData.title}
                    </h1>
                    <p className="text-xl md:text-2xl text-white/90 animate-fade-in-up delay-200">
                      {currentSlideData.subtitle}
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-lg md:text-xl text-white/80 mb-8 leading-relaxed animate-fade-in-up delay-300">
                {currentSlideData.description}
              </p>

              {/* Features */}
              <div className="grid grid-cols-2 gap-3 mb-8">
                {currentSlideData.features.map((feature, index) => (
                  <div key={index} className="flex items-center text-white/90 animate-fade-in-up-stagger">
                    <div className="w-2 h-2 bg-white rounded-full mr-3 animate-pulse-slow"></div>
                    <span className="text-sm md:text-base">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-500">
                <button className="bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 hover-scale">
                  Learn More
                </button>
                <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors duration-200 hover-scale">
                  Get Started
                </button>
              </div>
            </div>

            {/* Right side - Visual elements */}
            <div className="hidden lg:block">
              <div className="relative">
                {/* Main icon display */}
                <div className="text-center">
                  <div className={`w-48 h-48 bg-gradient-to-br ${currentSlideData.iconBg} rounded-full mx-auto flex items-center justify-center text-white shadow-2xl animate-pulse-slow`}>
                    {currentSlideData.icon}
                  </div>
                  
                  {/* Floating service icons */}
                  <div className="absolute top-0 left-0 w-16 h-16 bg-white/10 rounded-full flex items-center justify-center animate-float">
                    <TrendingUp className="h-8 w-8 text-white" />
                  </div>
                  <div className="absolute top-10 right-0 w-12 h-12 bg-white/8 rounded-full flex items-center justify-center animate-float delay-200">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <div className="absolute bottom-10 left-0 w-14 h-14 bg-white/6 rounded-full flex items-center justify-center animate-float delay-400">
                    <Award className="h-7 w-7 text-white" />
                  </div>
                  <div className="absolute bottom-0 right-10 w-10 h-10 bg-white/10 rounded-full flex items-center justify-center animate-float delay-300">
                    <Shield className="h-5 w-5 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-200 hover-scale z-20"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-200 hover-scale z-20"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {slides.map((_, index) => (
          <div key={index} className="relative">
            <button
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-white scale-125' 
                  : 'bg-white/50 hover:bg-white/70'
              }`}
            />
            {index === currentSlide && isAutoPlaying && (
              <div className="absolute -top-1 -left-1 w-5 h-5 border-2 border-white/30 rounded-full">
                <div 
                  className="w-full h-full border-2 border-white border-t-transparent rounded-full animate-spin"
                  style={{ animationDuration: '5s' }}
                ></div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Play/Pause button */}
      <button
        onClick={() => setIsAutoPlaying(!isAutoPlaying)}
        className="absolute bottom-8 right-8 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-all duration-200 hover-scale z-20"
      >
        {isAutoPlaying ? (
          <div className="w-4 h-4 flex space-x-1">
            <div className="w-1 bg-white"></div>
            <div className="w-1 bg-white"></div>
          </div>
        ) : (
          <div className="w-0 h-0 border-l-[6px] border-l-white border-t-[4px] border-t-transparent border-b-[4px] border-b-transparent ml-1"></div>
        )}
      </button>
    </section>
  );
}
