import React from 'react';
import * as S from './WithSpinner.styled';

const WithSpinner = WrappedComponent => {
  const Spinner = ({ isLoading, ...props }) => {
    return isLoading ? (
      <S.SpinnerOverlay>
        <S.SpinnerContainer />
      </S.SpinnerOverlay>
    ) : (
      <WrappedComponent {...props} />
    );
  };
  return Spinner;
};

export default WithSpinner;
