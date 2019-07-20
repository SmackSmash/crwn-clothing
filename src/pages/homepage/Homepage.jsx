import React from 'react';
import * as S from './Homepage.styled';
import Directory from '../../components/directory/Directory';

const Homepage = props => {
  document.title = 'CRWN :: Clothing | Home';

  return (
    <S.Homepage>
      <Directory />
    </S.Homepage>
  );
};

export default Homepage;
