import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'


//import { clear, getTasks } from '@redux/modules/task';
import { loadTodos, createTodo, removeTodo, editTodo } from '@redux/modules/todo/actions'
import { getTodos } from '@redux/modules/todo/selectors';
import Button from '@common/button/Button';
import List from     '@components/list/List';
import ListItem from '@components/list/ListeItem';
import H1 from '@common/h1/H1';

import Error from '@components/common/error/Error';

const propTypes = {
  loadTodos: PropTypes.func.isRequired,
  createTodo: PropTypes.func.isRequired,
  removeTodo: PropTypes.func.isRequired,
  editTodo: PropTypes.func.isRequired,
  todos: PropTypes.array
}

const defaultProps = {
  loadTodos: () => {},
  createTodo: () => {},
  removeTodo: () => {},
  editTodo: () => {},
  todos: []
}

class SubPageSaga extends React.Component {

  componentDidMount() {
    this.props.loadTodos();
  }

  componentWillUnmount() {
    console.log("Leaving SubPage");
  }

  onRemoveClick = (id) => {
    this.props.removeTodo(id)
  }

  onClick = () => {
    this.props.editTodo({id: 1});
  }

  renderTest = (item) => {
    return (
      <ListItem onClick={this._onRemove} key={item.id} item={item}/>
    )
  }
  
  render() {
    const { todos, error } = this.props;

    return (
      <div>
        <H1>Todos</H1>
        <List
          onRemoveClick={this.onRemoveClick}
          onClick={this.onClick}
          items={todos}
          prefix={'item'}
        />
        <Error error={error}/>
        <Button onClick={this._onClick}>Clear items</Button>
      </div>
    )
  }
}

SubPageSaga.propTypes = propTypes;
SubPageSaga.defaultProps = defaultProps;


function mapStateToProps(state) {
  const todos = getTodos(state);
  return {
    todos
  }
}

export default connect(
  mapStateToProps,
  {
    loadTodos,
    createTodo,
    removeTodo,
    editTodo
  },
)(SubPageSaga)
