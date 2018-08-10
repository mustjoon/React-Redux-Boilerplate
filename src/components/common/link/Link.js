import { Link } from 'react-router-dom';
import React from 'react';
import styled from 'styled-components';

const StyledLink = styled(
  styled(Link)`
    color: palevioletred;
    display: block;
    margin: 0.5em 0;
    font-family: Helvetica, Arial, sans-serif;

    &:hover {
      text-decoration: underline;
    }
  `,
  'active'
)`
  color: red;
`;


const CustomLink = ({to, children, color}) => (
  <StyledLink to={to} color={color}>
  { children }</StyledLink>
) 

export default CustomLink;
