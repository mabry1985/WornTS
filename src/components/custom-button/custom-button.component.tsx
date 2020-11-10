import React, { ReactNode } from 'react';

import './custom-button.styles.scss';

export interface CustomButtonProps {
  children?: ReactNode;
  onClick?: () => void;
  type?: any;
}

const CustomButton: React.FC<CustomButtonProps> = ({ children, ...otherProps }) => {
  return (
    <button className='custom-button' {...otherProps}>
      {children}     
    </button>
  )
}

export default CustomButton;
