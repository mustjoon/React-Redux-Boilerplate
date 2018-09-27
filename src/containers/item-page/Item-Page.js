import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'

import { loadTodo, clearActiveTodo } from '../../actions/todo'
import { getActiveTodo, getTodoLoading } from '../../redux/modules/todo/selectors';

import Link from '@common/link/Link';
import Item from  '@components/item/Item';;

const propTypes = {
  match: PropTypes.object.isRequired,
  activeTodo: PropTypes.object.isRequired,
  loadTodo: PropTypes.func.isRequired,
  clearActiveTodo: PropTypes.func.isRequired
}

const defaultProps = {
  match: {},
  activeTodo: {},
  loadTodo: () => {}
}

class ItemPage extends Component {

  componentDidMount() {
    const { loadTodo, match: {params: { id }} } = this.props;
    loadTodo(id);
  }

  componentWillUnmount() {
    this.props.clearActiveTodo();
  }

  clear = () => {
    this.props.clearActiveTodo();
  }

  render() {
    const { activeTodo, isLoading } = this.props;
    console.log(isLoading);

    return (
      <div>
        {isLoading && <h1>Loading</h1>}
        <Item onClick={this.clear} item={activeTodo}/>
        <Link to='/items'>Back</Link>
      </div>
    )
  }
}

ItemPage.propTypes = propTypes;
ItemPage.defaultProps = defaultProps;

const mapStateToProps = (state) => {
  return {
    activeTodo: getActiveTodo(state),
    isLoading: getTodoLoading(state)
  }
}

export default connect(mapStateToProps, {
  loadTodo,
  clearActiveTodo
})(ItemPage);