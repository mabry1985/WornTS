import React, { ReactNode } from 'react';

import './custom-button.styles.scss';

export interface CustomButtonProps {
  children?: ReactNode;
  isGoogleSignIn?: boolean;
  inverted?: boolean;
  onClick?: () => void;
  type?: any;
}

const CustomButton: React.FC<CustomButtonProps> = ({ children, isGoogleSignIn, inverted, ...otherProps }) => {
  return (
    <button className={`${inverted ? 'inverted' : ''} ${isGoogleSignIn ?'google-sign-in': ''} custom-button`} {...otherProps}>
      {children}     
    </button>
  )
}

export default CustomButton;
