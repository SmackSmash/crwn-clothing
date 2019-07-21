import React from 'react';
import * as S from './FormInput.styled';

const FormInput = ({ label, ...props }) => {
  return (
    <S.Group>
      {label && (
        <S.FormInputLabel className={props.value.length ? 'shrink' : ''}>{label}</S.FormInputLabel>
      )}
      <S.FormInput {...props} />
    </S.Group>
  );
};

export default FormInput;
