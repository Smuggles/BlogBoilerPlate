import React from 'react';
import { FormattedMessage } from 'react-intl';
import NavBar from './NavBar'

class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <NavBar />
      </div>
    );
  }
}

export default Header;
