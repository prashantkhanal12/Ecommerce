import React from 'react';

interface IProps {
  variant?: 'outline' | 'none';
  children: React.ReactNode;
}

const Card: React.FC<IProps> = ({ children, variant }) => {
  return (
    <div
      className={`card__container px-2 py-1 ${
        variant === 'outline' ? 'outline-color-blue' : ''
      }`}
    >
      {children}
    </div>
  );
};

export default React.memo(Card);
