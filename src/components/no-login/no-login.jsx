import React from 'react';
import {Link} from 'react-router-dom';
import {Url} from '../../consts';

const NoLogin = () => {
  return (
    <Link to={Url.SIGN_IN} className="user-block__link">Sign in</Link>
  );
};

export default NoLogin;
