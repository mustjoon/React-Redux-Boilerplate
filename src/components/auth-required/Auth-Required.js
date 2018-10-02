import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { connect } from 'react-redux';
import PropTypes from 'prop-types'

import { getIsLogged } from '@redux/modules/auth/selectors';

const propTypes = {
  isAuthenticated: PropTypes.bool,
  redirect: PropTypes.bool,
  path: PropTypes.string.isRequired,
  component: PropTypes.func.isRequired,
  partial: PropTypes.bool, // True when used inside another component!
  children: PropTypes.object
}

const defaultProps = {
  isAuthenticated: false,
  path: '/',
  component: () => {},
  redirect: false,
  partial: false,
  children: undefined
}

class AuthRequired extends React.Component {
  
  render() {
    const { isAuthenticated, path ,component, redirect, children, partial } = this.props;

    return (
      isAuthenticated ?
        !partial ?
          <Route path={path} component={component}/> : 
          <div>{children}</div>
        :
        redirect ?
          <Redirect from={path} to={'/login'}/> :
          null
    )
  }
}

AuthRequired.propTypes = propTypes;
AuthRequired.defaultProps = defaultProps;

const mapStateToProps = (state) => {
  return {
    isAuthenticated: getIsLogged(state)
  }
}

export default connect(mapStateToProps)(AuthRequired);