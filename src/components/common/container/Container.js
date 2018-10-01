import React from 'react';
import styled from 'styled-components';


const StyledMain = styled.main`
  color: ${props => props.theme.textColor ? props.theme.textColor : 'black'};
  max-width: 1300px;
  margin-left: auto;
  margin-right: auto;
  background-color: white
`;

const Container = ({ children, color, theme }) => (
  <StyledMain color = {color}>
      { children }
  </StyledMain>
)

Container.defaultProps = {
  theme: {}
};

export default Container