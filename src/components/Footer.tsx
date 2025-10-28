import Link from 'next/link';
import { Building2, PhoneCall, Mail, Gavel, Calculator, Globe, TrendingUp, Shield, FileCheck, Users, Award, Briefcase } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-redmond-dark-blue text-redmond-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
              <div className="bg-redmond-blue px-4 py-2 rounded">
                <div className="text-redmond-white font-bold text-lg">
                  REDMOND TAX
                </div>
                <div className="text-redmond-white text-xs">
                  Tax Advisory | Tax Compliance | Tax Reporting
                </div>
              </div>
            </div>
            <p className="text-redmond-white/80 mb-4 max-w-md">
              Your Strategic Partner in Tax Management and Legal Services. 
              Combining legal expertise with specialized tax knowledge to provide 
              comprehensive solutions for all your business needs.
            </p>
            <p className="text-redmond-white/80 font-medium">
              WE KNOW TAX
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-redmond-white/80 hover:text-redmond-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-redmond-white/80 hover:text-redmond-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/team" className="text-redmond-white/80 hover:text-redmond-white transition-colors">
                  Our Team
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-redmond-white/80 hover:text-redmond-white transition-colors">
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-redmond-white/80 hover:text-redmond-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <Building2 className="h-5 w-5 mr-3 mt-0.5 text-redmond-gold flex-shrink-0" />
                <div>
                  <p className="text-redmond-white/80">Plot 1-3 Acacia House, Spring Close</p>
                  <p className="text-redmond-white/80">P.O. Box 200921, Nakawa - Kampala</p>
                </div>
              </div>
              <div className="flex items-center">
                <PhoneCall className="h-5 w-5 mr-3 text-redmond-gold flex-shrink-0" />
                <a href="tel:+256414670103" className="text-redmond-white/80 hover:text-redmond-white transition-colors">
                  +256 414 670 103
                </a>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-redmond-gold flex-shrink-0" />
                <a href="mailto:info@redmond.co.ug" className="text-redmond-white/80 hover:text-redmond-white transition-colors">
                  info@redmond.co.ug
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Services Overview */}
        <div className="mt-12 pt-8 border-t border-redmond-blue">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex items-center">
              <Gavel className="h-7 w-7 text-redmond-gold mr-3 animate-pulse-slow" />
              <div>
                <h4 className="font-semibold text-redmond-white">REDMOND Associated Advocates</h4>
                <p className="text-redmond-white/80 text-sm">Litigation | Commercial Law | Consultancy</p>
              </div>
            </div>
            <div className="flex items-center">
              <TrendingUp className="h-7 w-7 text-redmond-gold mr-3 animate-pulse-slow" />
              <div>
                <h4 className="font-semibold text-redmond-white">REDMOND Tax</h4>
                <p className="text-redmond-white/80 text-sm">Tax Advisory | Compliance | Dispute Resolution</p>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-redmond-blue text-center">
          <p className="text-redmond-white/60">
            © {new Date().getFullYear()} REDMOND Tax & Associated Advocates. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
