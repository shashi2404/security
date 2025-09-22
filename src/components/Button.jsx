import { motion } from 'framer-motion';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  onClick, 
  href, 
  className = '',
  icon: Icon,
  disabled = false,
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const variants = {
    primary: "bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg hover:shadow-xl focus:ring-blue-500",
    secondary: "bg-white text-blue-600 border-2 border-blue-600 hover:bg-blue-50 focus:ring-blue-500",
    outline: "border-2 border-gray-300 text-gray-700 hover:border-gray-400 hover:bg-gray-50 focus:ring-gray-500",
    ghost: "text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:ring-gray-500"
  };
  
  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  };
  
  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`;
  
  const ButtonComponent = motion.button;
  const LinkComponent = motion.a;
  
  const motionProps = {
    whileHover: disabled ? {} : { scale: 1.02 },
    whileTap: disabled ? {} : { scale: 0.98 },
  };
  
  if (href) {
    return (
      <LinkComponent
        href={href}
        className={classes}
        {...motionProps}
        {...props}
      >
        {Icon && <Icon className="mr-2 h-5 w-5" />}
        {children}
      </LinkComponent>
    );
  }
  
  return (
    <ButtonComponent
      onClick={onClick}
      className={classes}
      disabled={disabled}
      {...motionProps}
      {...props}
    >
      {Icon && <Icon className="mr-2 h-5 w-5" />}
      {children}
    </ButtonComponent>
  );
};

export default Button;