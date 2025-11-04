import React, { useState } from 'react';
import { Menu, X, ChevronDown, Shield, Users, TrendingUp, Globe, Phone, Mail, MapPin, ChevronRight, Award, Lock, BarChart3 } from 'lucide-react';

export default function AsiaTrustWebsite() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      icon: <Shield className="w-12 h-12" />,
      title: "Wealth Management",
      description: "Comprehensive wealth management solutions tailored to preserve and grow your assets across generations."
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: "Estate Planning",
      description: "Strategic estate planning services to ensure seamless wealth transfer and legacy protection for your family."
    },
    {
      icon: <TrendingUp className="w-12 h-12" />,
      title: "Investment Advisory",
      description: "Expert investment guidance with diversified portfolio management across Asian and global markets."
    },
    {
      icon: <Globe className="w-12 h-12" />,
      title: "Corporate Trustees",
      description: "Professional trustee services for businesses and institutions requiring reliable fiduciary management."
    },
    {
      icon: <Lock className="w-12 h-12" />,
      title: "Asset Protection",
      description: "Advanced strategies to safeguard your wealth from risks while maintaining flexibility and control."
    },
    {
      icon: <BarChart3 className="w-12 h-12" />,
      title: "Tax Planning",
      description: "Efficient tax optimization strategies compliant with international regulations and local laws."
    }
  ];

  const stats = [
    { value: "$50B+", label: "Assets Under Management" },
    { value: "25+", label: "Years of Excellence" },
    { value: "15", label: "Countries Served" },
    { value: "5,000+", label: "Trusted Clients" }
  ];

  const testimonials = [
    {
      name: "Michael Chen",
      role: "CEO, Chen Enterprises",
      content: "Asia Trust has been instrumental in structuring our family wealth for the next generation. Their expertise is unmatched."
    },
    {
      name: "Sarah Wong",
      role: "Private Investor",
      content: "The personalized service and attention to detail have given me complete confidence in my financial future."
    },
    {
      name: "David Tan",
      role: "Business Owner",
      content: "Their corporate trustee services have streamlined our operations while ensuring complete compliance and security."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-2">
              <Shield className="w-8 h-8 text-blue-600" />
              <span className="text-2xl font-bold text-gray-900">Asia Trust</span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-700 hover:text-blue-600 transition">Home</a>
              <a href="#services" className="text-gray-700 hover:text-blue-600 transition">Services</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition">About</a>
              <a href="#testimonials" className="text-gray-700 hover:text-blue-600 transition">Testimonials</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition">Contact</a>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
                Get Started
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-4 py-4 space-y-3">
              <a href="#home" className="block text-gray-700 hover:text-blue-600">Home</a>
              <a href="#services" className="block text-gray-700 hover:text-blue-600">Services</a>
              <a href="#about" className="block text-gray-700 hover:text-blue-600">About</a>
              <a href="#testimonials" className="block text-gray-700 hover:text-blue-600">Testimonials</a>
              <a href="#contact" className="block text-gray-700 hover:text-blue-600">Contact</a>
              <button className="w-full bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
                Get Started
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-4 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                Trust in Excellence,<br />
                <span className="text-blue-600">Invest in Tomorrow</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Asia's premier trust and wealth management firm, delivering bespoke financial solutions for over 25 years.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition text-lg font-semibold">
                  Schedule Consultation
                </button>
                <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg hover:bg-blue-50 transition text-lg font-semibold">
                  Learn More
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-8 shadow-2xl">
                <div className="bg-white rounded-lg p-6 mb-4">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-gray-600">Portfolio Performance</span>
                    <TrendingUp className="w-5 h-5 text-green-500" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900">+24.7%</div>
                  <div className="text-sm text-green-600">Annual Growth</div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-white">
                    <Award className="w-6 h-6 mb-2" />
                    <div className="text-sm">Award Winning</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-white">
                    <Lock className="w-6 h-6 mb-2" />
                    <div className="text-sm">Bank-Level Security</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-blue-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive financial solutions designed to meet your unique needs and aspirations
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <div 
                key={idx}
                className="bg-white border-2 border-gray-100 rounded-xl p-8 hover:border-blue-600 hover:shadow-xl transition duration-300 cursor-pointer"
                onMouseEnter={() => setActiveService(idx)}
              >
                <div className="text-blue-600 mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
                <button className="mt-4 text-blue-600 font-semibold flex items-center hover:gap-2 transition-all">
                  Learn More <ChevronRight className="w-4 h-4 ml-1" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Choose Asia Trust?</h2>
              <p className="text-lg text-gray-600 mb-6">
                Founded in 1999, Asia Trust has grown to become one of the most respected names in wealth management and trust services across Asia. Our commitment to excellence, integrity, and personalized service sets us apart.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="bg-blue-100 rounded-full p-2 mt-1">
                    <Shield className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Proven Track Record</h4>
                    <p className="text-gray-600">25+ years of consistent performance and client satisfaction</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-blue-100 rounded-full p-2 mt-1">
                    <Award className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Industry Recognition</h4>
                    <p className="text-gray-600">Multiple awards for excellence in trust and wealth management</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-blue-100 rounded-full p-2 mt-1">
                    <Globe className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Global Reach</h4>
                    <p className="text-gray-600">Serving clients across 15 countries with local expertise</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Our Commitment</h3>
              <div className="space-y-6">
                <div>
                  <div className="text-4xl font-bold mb-2">100%</div>
                  <p className="text-blue-100">Client Confidentiality</p>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">24/7</div>
                  <p className="text-blue-100">Support & Monitoring</p>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">A+</div>
                  <p className="text-blue-100">Credit Rating</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-600">Trusted by thousands of individuals and families across Asia</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="bg-white border-2 border-gray-100 rounded-xl p-8 hover:shadow-xl transition">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Get in Touch</h2>
              <p className="text-lg text-gray-600 mb-8">
                Ready to secure your financial future? Contact our team of experts today for a personalized consultation.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 rounded-full p-3">
                    <Phone className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 mb-1">Phone</div>
                    <div className="text-gray-600">+65 6123 4567</div>
                    <div className="text-gray-600">+852 2123 4567</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 rounded-full p-3">
                    <Mail className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 mb-1">Email</div>
                    <div className="text-gray-600">info@asiatrust.com</div>
                    <div className="text-gray-600">support@asiatrust.com</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 rounded-full p-3">
                    <MapPin className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 mb-1">Offices</div>
                    <div className="text-gray-600">Singapore | Hong Kong | Tokyo</div>
                    <div className="text-gray-600">Shanghai | Mumbai | Dubai</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                  <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input type="email" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent" placeholder="john@example.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Service Interest</label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent">
                    <option>Wealth Management</option>
                    <option>Estate Planning</option>
                    <option>Investment Advisory</option>
                    <option>Corporate Trustees</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea  ="4" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent" placeholder="Tell us about your needs..."></textarea>
                </div>
                <button onClick={(e) => { e.preventDefault(); alert('Thank you for your inquiry! We will contact you soon.'); }} className="w-full bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition font-semibold">
                  Submit Inquiry
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Shield className="w-8 h-8 text-blue-400" />
                <span className="text-xl font-bold">Asia Trust</span>
              </div>
              <p className="text-gray-400">Excellence in wealth management and trust services since 1999.</p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition">Wealth Management</a></li>
                <li><a href="#" className="hover:text-white transition">Estate Planning</a></li>
                <li><a href="#" className="hover:text-white transition">Investment Advisory</a></li>
                <li><a href="#" className="hover:text-white transition">Corporate Trustees</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition">About Us</a></li>
                <li><a href="#" className="hover:text-white transition">Careers</a></li>
                <li><a href="#" className="hover:text-white transition">News & Insights</a></li>
                <li><a href="#" className="hover:text-white transition">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition">Compliance</a></li>
                <li><a href="#" className="hover:text-white transition">Disclosures</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Asia Trust. All rights reserved. Licensed and regulated by financial authorities.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}