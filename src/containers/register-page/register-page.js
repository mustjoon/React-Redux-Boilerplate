import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import RegisterForm from '@components/form/register/register';
import RegisterStatus from '@components/register-status/Register-Status';
import Container from '@common/container/Container';
import { register } from '@redux/modules/auth/actions';

import {
  getIsLogged, 
  getIsAuthenticating, 
  getIsRegistering }
from '@redux/modules/auth/selectors';

const propTypes = {
  from: PropTypes.string,
  register: PropTypes.func.isRequired
}

const defaultProps = {
  from: '/',
  register: () => {}
}

class RegisterPage extends React.Component {

  onSubmit = (values) => {
    this.props.register(values);
  }

  render() {
    const { isAuthenticating, isLogged, isRegistering } = this.props;
    return (
      <Container>
        <RegisterStatus
          isRegistering={isRegistering}
          isAuthenticating={isAuthenticating}
        />
        {isLogged ? 
          <Redirect to='/'/> :
          <RegisterForm isSubmitting={isRegistering} onSubmit={this.onSubmit}/>}
      </Container>
    )
  }
}

RegisterPage.propTypes = propTypes;
RegisterPage.defaultProps = defaultProps;

const mapStateToProps = (state) => {
  return {
    isLogged: getIsLogged(state),
    isAuthenticating: getIsAuthenticating(state),
    isRegistering: getIsRegistering(state)
  };
}

export default connect(mapStateToProps, {
  register
})(RegisterPage);