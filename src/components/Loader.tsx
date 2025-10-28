'use client';

import { useEffect, useState } from 'react';
import { Calculator, Scale, TrendingUp, Shield, Globe, FileText } from 'lucide-react';

export default function Loader() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [currentText, setCurrentText] = useState(0);

  const loadingTexts = [
    "Preparing your tax solutions...",
    "Loading legal expertise...",
    "Setting up compliance tools...",
    "Initializing tax planning...",
    "Almost ready..."
  ];

  useEffect(() => {
    // Simulate loading progress
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setTimeout(() => setIsLoading(false), 800);
          return 100;
        }
        return prev + Math.random() * 12 + 3;
      });
    }, 120);

    // Change loading text
    const textInterval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % loadingTexts.length);
    }, 1000);

    return () => {
      clearInterval(progressInterval);
      clearInterval(textInterval);
    };
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-redmond-blue to-redmond-dark-blue z-50 flex items-center justify-center">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-20 h-20 bg-redmond-white/10 rounded-full animate-float"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-redmond-white/5 rounded-full animate-float delay-200"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-redmond-white/8 rounded-full animate-float delay-400"></div>
        <div className="absolute bottom-32 right-1/3 w-14 h-14 bg-redmond-white/6 rounded-full animate-float delay-300"></div>
        <div className="absolute top-1/2 left-10 w-8 h-8 bg-redmond-white/4 rounded-full animate-float delay-500"></div>
        <div className="absolute top-1/3 right-1/4 w-10 h-10 bg-redmond-white/7 rounded-full animate-float delay-100"></div>
      </div>

      <div className="relative z-10 text-center max-w-md mx-auto px-4">
        {/* Logo Animation */}
        <div className="mb-8">
          <div className="flex items-center justify-center mb-6">
            <div className="relative">
              <div className="w-24 h-24 bg-redmond-white rounded-xl flex items-center justify-center animate-pulse-slow shadow-2xl">
                <Calculator className="h-12 w-12 text-redmond-blue animate-bounce-in" />
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-redmond-white/30 rounded-full animate-ping"></div>
              <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-redmond-white/20 rounded-full animate-ping delay-300"></div>
            </div>
            <div className="ml-6">
              <div className="text-redmond-white font-bold text-3xl animate-fade-in-up">
                REDMOND TAX
              </div>
              <div className="text-redmond-white/90 text-sm animate-fade-in-up delay-200">
                Tax Advisory | Tax Compliance | Tax Reporting
              </div>
            </div>
          </div>
        </div>

        {/* Loading Text */}
        <div className="mb-8">
          <h2 className="text-redmond-white text-2xl font-semibold mb-3 animate-fade-in-up delay-300 animate-text-glow">
            WE KNOW TAX
          </h2>
          <div className="h-6 flex items-center justify-center">
            <p className="text-redmond-white/80 animate-fade-in-up delay-400 transition-all duration-500">
              {loadingTexts[currentText]}
            </p>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-full mx-auto mb-8">
          <div className="w-full bg-redmond-white/20 rounded-full h-3 overflow-hidden shadow-inner">
            <div 
              className="bg-gradient-to-r from-redmond-white to-redmond-white/90 h-3 rounded-full transition-all duration-500 ease-out relative"
              style={{ width: `${progress}%` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-redmond-white/30 to-transparent animate-shimmer"></div>
            </div>
          </div>
          <div className="text-redmond-white/70 text-sm mt-3 animate-fade-in-up delay-500">
            {Math.round(progress)}% Complete
          </div>
        </div>

        {/* Service Icons Animation */}
        <div className="grid grid-cols-3 gap-4 mb-8 animate-fade-in-up delay-600">
          <div className="flex flex-col items-center text-redmond-white/70 text-xs">
            <div className="w-8 h-8 bg-redmond-white/10 rounded-lg flex items-center justify-center mb-1 animate-pulse-slow">
              <Scale className="h-4 w-4 animate-icon-rotate" />
            </div>
            <span>Legal</span>
          </div>
          <div className="flex flex-col items-center text-redmond-white/70 text-xs">
            <div className="w-8 h-8 bg-redmond-white/10 rounded-lg flex items-center justify-center mb-1 animate-pulse-slow delay-200">
              <Calculator className="h-4 w-4 animate-icon-rotate" />
            </div>
            <span>Tax</span>
          </div>
          <div className="flex flex-col items-center text-redmond-white/70 text-xs">
            <div className="w-8 h-8 bg-redmond-white/10 rounded-lg flex items-center justify-center mb-1 animate-pulse-slow delay-400">
              <Shield className="h-4 w-4 animate-icon-rotate" />
            </div>
            <span>Compliance</span>
          </div>
        </div>

        {/* Loading Dots */}
        <div className="flex justify-center space-x-2 animate-fade-in-up delay-700">
          <div className="w-2 h-2 bg-redmond-white rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
          <div className="w-2 h-2 bg-redmond-white rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
          <div className="w-2 h-2 bg-redmond-white rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
        </div>

        {/* Bottom Text */}
        <div className="mt-6 animate-fade-in-up delay-800">
          <p className="text-redmond-white/60 text-xs">
            Your strategic partner in tax management and legal services
          </p>
        </div>
      </div>
    </div>
  );
}
