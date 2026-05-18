import React, { ReactNode } from 'react';

type Variant = 'default' | 'blue' | 'purple' | 'red' | 'dark';

interface TagProps {
  children: ReactNode;
  variant?: Variant;
  icon?: ReactNode;
  className?: string;
}

const variants: Record<Variant, string> = {
  default: 'tag',
  blue: 'tag-blue',
  purple: 'tag-purple',
  red: 'tag-red',
  dark: 'tag-dark',
};

const Tag: React.FC<TagProps> = ({ children, variant = 'default', icon, className = '' }) => (
  <span className={`${variants[variant]} ${className}`}>
    {icon && <span aria-hidden="true">{icon}</span>}
    {children}
  </span>
);

export default Tag;
