'use client';

import React from 'react';
import { ds } from '../../lib/design-system';
import { motion, HTMLMotionProps } from 'motion/react';
import { BiTrendingUp } from 'react-icons/bi';

export interface ButtonProps extends HTMLMotionProps<'a'> {
  variant?: keyof typeof ds.button;
}

export const Button = React.forwardRef<HTMLAnchorElement, ButtonProps>(
  (
    { className = '', variant = 'primaryWithAccent', children, ...props },
    ref,
  ) => {
    const baseVariantClass = ds.button[variant] || ds.button.primary;

    return (
      <motion.a
        ref={ref}
        className={`${baseVariantClass} ${className} cursor-pointer inline-flex items-center justify-center`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: 'spring', stiffness: 400, damping: 25 }}
        {...props}
      >
        <>{children}</>
        <BiTrendingUp
          className="ml-1 text-accent-foreground bg-accent rounded-full p-0.5"
          size={24}
        />
      </motion.a>
    );
  },
);

Button.displayName = 'Button';
