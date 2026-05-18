import React, { ReactNode } from 'react';
import { useReveal } from '../../hooks/useReveal';

interface RevealProps {
  children: ReactNode;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
  delay?: number;
}

const Reveal: React.FC<RevealProps> = ({ children, className = '', as = 'div', delay = 0 }) => {
  const ref = useReveal<HTMLElement>();
  const Tag = as as any;
  const style = delay ? { transitionDelay: `${delay}ms` } : undefined;
  return (
    <Tag ref={ref as any} className={`reveal ${className}`} style={style}>
      {children}
    </Tag>
  );
};

export default Reveal;
