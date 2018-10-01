import React, { Component } from 'react';
import Container from '@common/container/Container';
import AuthRequired from '@components/auth-required/Auth-Required';
import H1 from '@common/h1/H1';

class FrontPage extends Component {
  
  render() {
    return (
      <Container>
        <AuthRequired partial={true}>
          <H1>Logged In</H1>
        </AuthRequired>
      </Container>
    );
  }
}

export default FrontPage;
