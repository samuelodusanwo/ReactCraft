import React from 'react';

const Card = ({ 
  children, 
  className = '', 
  padding = 'p-6',
  shadow = 'shadow-md',
  hover = false,
  ...props 
}) => {
  const baseClasses = 'rounded-lg border border-gray-200 bg-white dark:bg-gray-800 dark:border-gray-700 transition-all duration-200';
  const hoverClass = hover ? 'hover:shadow-lg hover:-translate-y-1' : '';
  
  const classes = `${baseClasses} ${padding} ${shadow} ${hoverClass} ${className}`;

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};

export default Card;