import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Shield, Users, Award, Clock, CheckCircle, Target, Eye, Heart } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';

const About = () => {
  const stats = [
    { icon: Shield, number: '500+', label: 'Projects Completed' },
    { icon: Users, number: '50+', label: 'Security Personnel' },
    { icon: Award, number: '10+', label: 'Years Experience' },
    { icon: Clock, number: '24/7', label: 'Emergency Support' }
  ];

  const values = [
    {
      icon: Shield,
      title: 'Security First',
      description: 'We prioritize the safety and security of our clients above everything else.'
    },
    {
      icon: Users,
      title: 'Professional Team',
      description: 'Our highly trained and certified professionals deliver exceptional service.'
    },
    {
      icon: Target,
      title: 'Tailored Solutions',
      description: 'Customized security solutions designed to meet specific client requirements.'
    },
    {
      icon: Heart,
      title: 'Trust & Reliability',
      description: 'Building lasting relationships through trust, reliability, and consistent service.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>About D7S Security Agency - Professional Security Company</title>
        <meta name="description" content="Learn about D7S Security Agency, a trusted security company with over 10 years of experience providing professional security services. Licensed, insured, and government contracted." />
        <meta name="keywords" content="about D7S Security, security company, professional security, licensed security, government contractor" />
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
              About D7S Security Agency
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Your trusted partner in comprehensive security solutions since 2013
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <SectionHeading
                subtitle="Our Story"
                title="Leading Security Solutions Provider"
                centered={false}
                className="mb-6"
              />
              <div className="space-y-6 text-gray-600">
                <p>
                  D7S Security Agency was founded with a simple mission: to provide unparalleled security 
                  services that give our clients complete peace of mind. Since our establishment, we have 
                  grown from a small local security firm to a trusted partner for businesses, government 
                  agencies, and individuals across the region.
                </p>
                <p>
                  Our team consists of highly trained, licensed, and experienced security professionals 
                  who understand that every client's needs are unique. We pride ourselves on delivering 
                  customized security solutions that not only meet but exceed expectations.
                </p>
                <p>
                  As a government-contracted security agency, we maintain the highest standards of 
                  professionalism, reliability, and integrity in all our operations. Our commitment 
                  to excellence has earned us the trust of hundreds of satisfied clients.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="https://images.pexels.com/photos/7034396/pexels-photo-7034396.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="D7S Security team"
                className="rounded-2xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <motion.div
                  key={index}
                  className="text-center bg-white p-8 rounded-xl shadow-lg"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-8 w-8 text-blue-600" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-blue-50 p-8 rounded-2xl"
            >
              <div className="flex items-center mb-6">
                <div className="bg-blue-600 p-3 rounded-lg mr-4">
                  <Target className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Our Mission</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                To provide exceptional security services that protect people, property, and assets 
                while maintaining the highest standards of professionalism, integrity, and reliability. 
                We are committed to building lasting relationships with our clients through consistent 
                delivery of superior security solutions.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-8 rounded-2xl"
            >
              <div className="flex items-center mb-6">
                <div className="bg-gray-600 p-3 rounded-lg mr-4">
                  <Eye className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Our Vision</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                To be the leading security services provider in the region, recognized for our 
                innovation, expertise, and unwavering commitment to client safety. We envision 
                a future where our comprehensive security solutions set the industry standard 
                for excellence and reliability.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subtitle="Our Values"
            title="What Drives Us"
            className="mb-16"
          />
          
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <motion.div
                  key={index}
                  className="flex items-start space-x-4 bg-white p-6 rounded-xl shadow-lg"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <div className="bg-blue-100 p-3 rounded-lg flex-shrink-0">
                    <IconComponent className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Government Contractor */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Award className="h-8 w-8 text-blue-600" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Trusted Government Contractor
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              D7S Security Agency is a licensed and certified government contractor, 
              providing security services to various government agencies and institutions. 
              Our compliance with federal standards ensures the highest level of security 
              and professionalism in all our operations.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {[
                'Federal Security Clearance',
                'Licensed & Insured',
                'Compliance Certified'
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-center justify-center space-x-2 text-blue-100"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <CheckCircle className="h-5 w-5" />
                  <span>{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default About;