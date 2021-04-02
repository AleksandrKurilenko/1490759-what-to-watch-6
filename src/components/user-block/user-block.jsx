import React from 'react';
import PropTypes from 'prop-types';
import NoLogin from '../no-login/no-login';
import UserAvatar from '../user-avatar/user-avatar';
import {connect} from 'react-redux';
import {AuthorizationStatuses} from '../../consts';

const UserBlock = ({authorizationStatus}) => {
  return (
    <div className="user-block">
      {authorizationStatus === AuthorizationStatuses.AUTH ? <UserAvatar /> : <NoLogin />}
    </div>
  );
};

UserBlock.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
};

const mapStateToProps = ({authorizationStatus}) => ({
  authorizationStatus,
});

export {UserBlock};
export default connect(mapStateToProps)(UserBlock);
