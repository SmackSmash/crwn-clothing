import React from 'react';
import { withRouter } from 'react-router-dom';
import * as S from './MenuItem.styled';

const MenuItem = ({ title, imageUrl, linkUrl, history, size }) => {
  return (
    <S.MenuItem size={size} onClick={() => history.push(linkUrl)}>
      <S.BackgroundImage className="background-image" backgroundImage={imageUrl} />
      <S.Content>
        <S.Title>{title.toUpperCase()}</S.Title>
        <S.Subtitle>SHOP NOW</S.Subtitle>
      </S.Content>
    </S.MenuItem>
  );
};

export default withRouter(MenuItem);
