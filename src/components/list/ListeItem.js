import React, {PureComponent} from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types'

import Button from '@common/button/Button';
import Link from '@common/link/Link';

const propTypes = {
  theme: PropTypes.object,
  item: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
  onButtonClick: PropTypes.func.isRequired,
  prefix: PropTypes.string.isRequired
}

const defaultProps = {
  theme: {},
  item: {},
  onClick: () => {},
  onButtonClick: () => {},
  prefix: 'item'
}

const StyledListItem = styled.li`
    color: ${props => props.theme.textColor ? props.theme.textColor : 'white'};
    background: ${props => props.theme.backgroundColor ? props.theme.backgroundColor : 'black'};
    list-style-type: none;
  `;
class ListItem extends PureComponent {

  onClick = () => {
    this.props.onClick(this.props.item.id)
  }

  onButtonClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    this.props.onButtonClick(this.props.item.id);
  }

  render() {
    const { item, prefix } = this.props;
    const to = `/${prefix}/${item.id}`;

    return (
      <StyledListItem> 
        <Link to={to}>{item.title}</Link>
        <Button >Laadilaa</Button>
      </StyledListItem>
    )
  }
}

ListItem.propTypes = propTypes;
ListItem.defaultProps = defaultProps;

export default ListItem;