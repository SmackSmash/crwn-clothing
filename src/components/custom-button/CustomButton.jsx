import React from 'react';
import * as S from './CustomButton.styled';

const CustomButton = ({ children, ...props }) => {
  return <S.CustomButton {...props}>{children}</S.CustomButton>;
};

export default CustomButton;
