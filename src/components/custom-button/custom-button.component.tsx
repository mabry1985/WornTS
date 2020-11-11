import React, { ReactNode } from 'react';

import './custom-button.styles.scss';

export interface CustomButtonProps {
  children?: ReactNode;
  isGoogleSignIn?: boolean;
  onClick?: () => void;
  type?: any;
}

const CustomButton: React.FC<CustomButtonProps> = ({ children, isGoogleSignIn, ...otherProps }) => {
  return (
    <button className={`${isGoogleSignIn ?'google-sign-in': ''} custom-button`} {...otherProps}>
      {children}     
    </button>
  )
}

export default CustomButton;
