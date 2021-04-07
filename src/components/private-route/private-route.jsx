import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {AuthorizationStatus, Url} from '../../consts';
import {getAuthorizationStatus} from '../../store/auth/selectors';
import {checkLogin} from "../../store/api-actions";


const PrivateRoute = ({render, path, exact, authorizationStatus, checkLoginHandler}) => {
  useEffect(() => {
    if (authorizationStatus === AuthorizationStatus.INITIAL) {
      checkLoginHandler();
    }
  }, [authorizationStatus]);
  return (
    <Route
      path={path}
      exact={exact}
      render={(routeProps) => {
        if (authorizationStatus === AuthorizationStatus.INITIAL) {
          return null;
        }
        return (
          authorizationStatus === AuthorizationStatus.NO_AUTH
            ? <Redirect to={Url.SIGN_IN} /> : render(routeProps)
        );
      }}
    />
  );
};

PrivateRoute.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
  exact: PropTypes.bool.isRequired,
  path: PropTypes.string.isRequired,
  render: PropTypes.func.isRequired,
  checkLoginHandler: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  authorizationStatus: getAuthorizationStatus(state),
});
const mapDispatchToProps = (dispatch) => ({
  checkLoginHandler() {
    dispatch(checkLogin());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(PrivateRoute);
