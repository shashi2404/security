import { Link } from 'react-router-dom';
import { Shield, Phone, Mail, MapPin, Clock, Facebook, Twitter, Linkedin, Instagram, MessageCircle } from 'lucide-react';
import { contactData } from '../data/contactData';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialIcons = {
    facebook: Facebook,
    twitter: Twitter,
    linkedin: Linkedin,
    instagram: Instagram
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Shield className="h-8 w-8 text-blue-400" />
              <span className="font-bold text-xl">D7S Security</span>
            </div>
            <p className="text-gray-300 text-sm">
              Professional security services you can trust. Protecting what matters most to you 24/7.
            </p>
            <div className="flex space-x-4">
              {Object.entries(contactData.socialLinks).map(([platform, url]) => {
                const IconComponent = socialIcons[platform];
                return (
                  <a
                    key={platform}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
                  >
                    <IconComponent className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/" className="block text-gray-300 hover:text-white transition-colors duration-200">Home</Link>
              <Link to="/about" className="block text-gray-300 hover:text-white transition-colors duration-200">About Us</Link>
              <Link to="/services" className="block text-gray-300 hover:text-white transition-colors duration-200">Services</Link>
              <Link to="/gallery" className="block text-gray-300 hover:text-white transition-colors duration-200">Gallery</Link>
              <Link to="/contact" className="block text-gray-300 hover:text-white transition-colors duration-200">Contact</Link>
            </div>
          </div>

     {/* Contact Info */}
<div>
  <h3 className="font-semibold text-lg mb-4">Contact Info</h3>
  <div className="space-y-3">
    
    {/* Phone */}
    <div className="flex items-start space-x-3">
      <Phone className="h-5 w-5 text-blue-400 mt-0.5" />
      <div>
        <a 
          href="tel:+919801704440" 
          className="text-gray-300 text-sm hover:text-white transition-colors"
        >
          9801704440
        </a>
      </div>
    </div>

    {/* WhatsApp */}
    <div className="flex items-start space-x-3">
      <MessageCircle className="h-5 w-5 text-green-400 mt-0.5" />
      <div>
        <a
          href={`https://wa.me/919801704440?text=${encodeURIComponent("Hi! I want to contact you.")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 text-sm hover:text-white transition-colors"
        >
          WhatsApp: 9801704440
        </a>
      </div>
    </div>

    {/* Email */}
    <div className="flex items-start space-x-3">
      <Mail className="h-5 w-5 text-blue-400 mt-0.5" />
      <div>
        <a 
          href="mailto:your-email@example.com" 
          className="text-gray-300 text-sm hover:text-white transition-colors"
        >
          your-email@example.com
        </a>
      </div>
    </div>

    {/* Address */}
    <div className="flex items-start space-x-3">
      <MapPin className="h-5 w-5 text-blue-400 mt-0.5" />
      <div>
        <a
          href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(contactData.address)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 text-sm hover:text-white transition-colors"
        >
          {contactData.address}
        </a>
      </div>
    </div>

  </div>
</div>


          {/* Business Hours */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Business Hours</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4 text-blue-400" />
                <p className="text-gray-300 text-sm">{contactData.businessHours.weekdays}</p>
              </div>
              <p className="text-gray-300 text-sm ml-6">{contactData.businessHours.weekend}</p>
              <p className="text-blue-400 text-sm font-medium ml-6">{contactData.businessHours.emergency}</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} D7S Security Agency. All rights reserved. | Licensed & Insured Security Services
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;