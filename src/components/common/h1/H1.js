import React from 'react';
import styled from 'styled-components';


const StyledH1 = styled.h1`
  color: ${props => props.theme.textColor ? props.theme.textColor : 'black'};
`;

const h1 = ({ children, color, theme }) => (
  <StyledH1 color = {color}>
      { children }
  </StyledH1>
)

h1.defaultProps = {
  theme: {}
};

export default h1