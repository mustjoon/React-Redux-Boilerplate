import React from 'react';
import H1 from '@common/h1/H1';

const RegisterStatus = ({isAuthenticating, isRegistering}) => {
  return (
    isRegistering ? <H1>Register in progress...</H1> :
    isAuthenticating && <H1>Account created, logging in...</H1>
  )
}

export default RegisterStatus;