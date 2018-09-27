import React from 'react';
import styled from 'styled-components';
import ListItem from './ListeItem';
import PropTypes from 'prop-types'

const StyledList = styled.ul`
  background: ${props => props.theme.backgroundColor ? props.theme.backgroundColor : 'white'};
  color: ${props => props.theme.textColor ? props.theme.textColor : 'black'};
`;

const propTypes = {
  theme: PropTypes.object,
  items: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
  onRemoveClick: PropTypes.func.isRequired
}

const defaultProps = {
  theme: {},
  items: [],
  onClick: () => {},
  onRemoveClick: () => {}
}

const List = ({ theme, items = [], onClick, onRemoveClick }) => {
  return (
    <StyledList >
      {items.map((item) => {
        return (
          <ListItem key={item.id} item={item} onButtonClick={onRemoveClick} onClick={onClick}/>
        )
      })}
    </StyledList>
  )
}

List.propTypes = propTypes;
List.defaultProps = defaultProps;

export default List
