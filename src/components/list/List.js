import React from 'react';
import styled from 'styled-components';


const StyledList = styled.ul`
  background: ${props => props.theme.backgroundColor ? props.theme.backgroundColor : 'white'};
  color: ${props => props.theme.textColor ? props.theme.textColor : 'black'};
`;

const StyledListItem = styled.li`
  color: ${props => props.theme.textColor ? props.theme.textColor : 'white'};
  background: ${props => props.theme.backgroundColor ? props.theme.backgroundColor : 'black'};
  list-style-type: none;
`

const renderListItem = (item, index) => {
  return (
    <StyledListItem key={index}>
      {item.title}
    </StyledListItem>
  );
}

const List = ({ onClick, theme, items = [] }) => (
  <StyledList onClick = {onClick}>
      {items.map(renderListItem)}
  </StyledList>
)

export default List