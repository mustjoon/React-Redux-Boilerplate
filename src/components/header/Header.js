import React from 'react';
import styled from 'styled-components';
import Link from '@common/link/Link';


const StyledHeader = styled.header`
  color: white;
  background: black;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

const Header = (props) => (
  <StyledHeader>
    <Link to='/'>Frontpage</Link>
    <Link to='/items'>Items</Link>
    <Link to='/albums'>Albums</Link>
    
    <Link to='/auth-required'>Auth only</Link>

    <Link to='/login'>Login</Link>
    <Link to='/register'>Register</Link>
  </StyledHeader>
)

export default Header