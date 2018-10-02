import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import Title from './Title';
import Body from './Body';

const propTypes = {
  item: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired
}

const defaultProps = {
  item: {}
}

class Item extends PureComponent {
  render() {
    const {item: { title, body }} = this.props;
  return (
    <div onClick={this.props.onClick}>
      <Title title={title}/>
      <Body body={body}/>
    </div>
  )
  }
}

Item.propTypes = propTypes;
Item.defaultProps = defaultProps;

export default Item;