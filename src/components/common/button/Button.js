import React from 'react';
import styled from 'styled-components';


const StyledButton = styled.button`
  background: ${props => props.theme.backgroundColor ? props.theme.backgroundColor : 'white'};
  color: ${props => props.theme.textColor ? props.theme.textColor : 'black'};
`;

const Button = ({ onClick, children, color, theme, disabled }) => (
  <StyledButton disabled={disabled} color = {color} onClick = {onClick}>
      { children }
  </StyledButton>
)

Button.defaultProps = {
  theme: {}
};

export default Button