import React from 'react';
import styled from 'styled-components';
import Link from '@common/link/Link';


const StyledHeader = styled.header`
  color: white;
  background: black
`;

const Header = (props) => (
  <StyledHeader>
    <Link to='/create'>Create</Link>
  </StyledHeader>
)

export default Header