import { motion } from 'framer-motion';

const SectionHeading = ({ 
  title, 
  subtitle, 
  centered = true, 
  className = '' 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className={`${centered ? 'text-center' : ''} ${className}`}
    >
      {subtitle && (
        <p className="text-blue-600 font-semibold text-sm uppercase tracking-wide mb-2">
          {subtitle}
        </p>
      )}
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        {title}
      </h2>
    </motion.div>
  );
};

export default SectionHeading;