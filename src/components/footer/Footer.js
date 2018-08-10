import React from 'react';
import styled from 'styled-components';


const StyledFooter = styled.footer`
  color: white;
  background: black;
  position: absolute;
  right: 0;
  left: 0;
  bottom: 0;
  padding: 1rem;
`;

const Footer = (props) => (
  <StyledFooter>
      Footer
  </StyledFooter>
)

export default Footer