import React from 'react';
import Directory from '../../components/directory/Directory';
import './Homepage.scss';

const Homepage = props => {
  document.title = 'CRWN :: Clothing | Home';
  return (
    <div className="homepage">
      <div className="directory-menu">
        <Directory />
      </div>
    </div>
  );
};

export default Homepage;
