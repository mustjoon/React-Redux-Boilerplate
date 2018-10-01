import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import LoginForm from '@components/form/login/Login';
import Container from '@common/container/Container';
import { login } from '@redux/modules/auth/actions';
import { getIsLogged, getIsAuthenticating } from '@redux/modules/auth/selectors';

const propTypes = {
  from: PropTypes.string,
  login: PropTypes.func.isRequired
}

const defaultProps = {
  from: '/',
  login: () => {}
}

class LoginPage extends React.Component {

  onSubmit = (values) => {
    this.props.login(values);
  }
  render() {
    const { isAuthenticating, isLogged } = this.props;
    return (
      <Container>
        {isLogged ? 
          <Redirect to='/'/> :
          <LoginForm isSubmitting={isAuthenticating} onSubmit={this.onSubmit}/>}
      </Container>
    )
  }
}

LoginPage.propTypes = propTypes;
LoginPage.defaultProps = defaultProps;

const mapStateToProps = (state) => {
  return {
    isLogged: getIsLogged(state),
    isAuthenticating: getIsAuthenticating(state)
  };
}

export default connect(mapStateToProps, {
  login
})(LoginPage);