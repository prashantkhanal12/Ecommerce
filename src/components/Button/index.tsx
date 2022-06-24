import React from 'react';

interface IProps {
  children: React.ReactNode;
  variant: 'primary' | 'secondary' | 'outline';
  type: 'reset' | 'button' | 'submit';
}

const Button: React.FC<IProps> = ({ children, variant, type }) => {
  return (
    <button
      className={`${
        variant === 'primary'
          ? 'bg-primary-color color-white'
          : variant === 'secondary'
          ? 'bg-secondary-color color-secondary'
          : variant === 'outline'
          ? 'outline-color-blue '
          : 'bg-primary-color'
      } border-0 p-3 rounded-8 w-100 my-5`}
      type={type}
    >
      {children}
    </button>
  );
};

export default React.memo(Button);
