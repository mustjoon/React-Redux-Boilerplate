import React, {PureComponent} from 'react';
import styled from 'styled-components';
import Button from '@common/button/Button';
import ListItem from './ListeItem';

const StyledList = styled.ul`
  background: ${props => props.theme.backgroundColor ? props.theme.backgroundColor : 'white'};
  color: ${props => props.theme.textColor ? props.theme.textColor : 'black'};
`;




const List = ({ onClick, theme, items = [], _onRemove }) => {

  
  return (
    <StyledList onClick = {onClick}>
      {items.map((item, index) => {
        return (
          <ListItem key={index} item={item} onClick={_onRemove}/>
        )
      })}
    </StyledList>
  )
}

export default List