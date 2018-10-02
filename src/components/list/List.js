import React from 'react';
import styled from 'styled-components';
import ListItem from './ListeItem';
import PropTypes from 'prop-types'

const StyledList = styled.ul`
  padding-left: 0;
  background: ${props => props.theme.backgroundColor ? props.theme.backgroundColor : 'white'};
  color: ${props => props.theme.textColor ? props.theme.textColor : 'black'};
`;

const propTypes = {
  theme: PropTypes.object,
  items: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
  onRemoveClick: PropTypes.func.isRequired,
  prefix: PropTypes.string.isRequired
}

const defaultProps = {
  theme: {},
  items: [],
  onClick: () => {},
  onRemoveClick: () => {},
  prefix: 'item'
}

const List = ({ prefix, theme, items = [], onClick, onRemoveClick }) => {
  return (
    <StyledList >
      {items.map((item) => {
        return (
          <ListItem key={item.id} prefix={prefix} item={item} onButtonClick={onRemoveClick} onClick={onClick}/>
        )
      })}
    </StyledList>
  )
}

List.propTypes = propTypes;
List.defaultProps = defaultProps;

export default List
