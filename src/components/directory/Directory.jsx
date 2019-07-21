import React from 'react';
import MenuItem from '../menu-item/MenuItem';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectSections } from '../../selectors/directorySelectors';
import * as S from './Directory.styled';

const Directory = ({ sections }) => {
  return (
    <S.DirectoryMenu>
      {sections.map(({ id, ...section }) => (
        <MenuItem key={id} {...section} />
      ))}
    </S.DirectoryMenu>
  );
};

const mapStateToProps = createStructuredSelector({
  sections: selectSections
});

export default connect(mapStateToProps)(Directory);
