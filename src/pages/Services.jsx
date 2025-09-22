import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import Button from '../components/Button';
import { servicesData } from '../data/servicesData';

const Services = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <>
      <Helmet>
        <title>Security Services - D7S Security Agency | Professional Protection Solutions</title>
        <meta name="description" content="Comprehensive security services including security guards, bodyguards, event security, housekeeping, and manpower supply. Licensed professionals available 24/7." />
        <meta name="keywords" content="security services, security guards, bodyguards, event security, armed security, housekeeping, manpower supply" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Security Services
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Comprehensive security solutions tailored to your specific needs
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {servicesData.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <motion.div
                  key={service.id}
                  variants={itemVariants}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="p-8">
                    <div className="flex items-center mb-6">
                      <div className="bg-blue-100 p-4 rounded-xl mr-4">
                        <IconComponent className="h-8 w-8 text-blue-600" />
                      </div>
                      <h2 className="text-2xl font-bold text-gray-900">{service.title}</h2>
                    </div>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    
                    <div className="space-y-3 mb-8">
                      <h3 className="font-semibold text-gray-900">Key Features:</h3>
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-3">
                          <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <Button href="/contact" className="w-full md:w-auto">
                      Request Quote
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subtitle="Why Choose D7S"
            title="Excellence in Every Service"
            className="mb-16"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Licensed & Certified",
                description: "All our personnel are properly licensed, certified, and background-checked for your peace of mind."
              },
              {
                title: "24/7 Availability",
                description: "Round-the-clock service availability with emergency response teams ready at all times."
              },
              {
                title: "Advanced Training",
                description: "Continuous training programs ensure our team stays updated with latest security protocols."
              },
              {
                title: "Custom Solutions",
                description: "Tailored security plans designed specifically for your unique requirements and environment."
              },
              {
                title: "Modern Equipment",
                description: "State-of-the-art security equipment and technology for maximum protection and efficiency."
              },
              {
                title: "Proven Track Record",
                description: "Over 10 years of successful operations with hundreds of satisfied clients across various sectors."
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="text-center p-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Secure Your Business?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Contact us today for a free consultation and let us create a custom security solution 
              that meets your specific needs and budget.
            </p>
            <div className="space-y-4 md:space-y-0 md:space-x-4 md:flex md:justify-center">
              <Button variant="secondary" size="lg" href="/contact">
                Get Free Consultation
              </Button>
              <Button variant="ghost" size="lg" href="tel:+1-555-123-4567" className="text-white border-white hover:bg-white hover:text-blue-600">
                Call: (555) 123-4567
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Services;