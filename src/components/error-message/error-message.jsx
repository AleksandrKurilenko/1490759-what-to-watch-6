import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

const ErrorMessage = ({errorMessage}) => {
  return (
    <div className="sign-in__message">
      <p>{errorMessage}</p>
    </div>
  );
};


ErrorMessage.propTypes = {
  errorMessage: PropTypes.string.isRequired,
};


const mapStateToProps = ({errorMessage}) => ({
  errorMessage,
});

export {ErrorMessage};
export default connect(mapStateToProps)(ErrorMessage);
