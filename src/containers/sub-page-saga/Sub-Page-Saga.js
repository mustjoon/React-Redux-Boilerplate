import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'


//import { clear, getTasks } from '@redux/modules/task';
import { loadTodos, createTodo, removeTodo, editTodo } from '../../actions/todo'
import { getTodos } from '../../reducers/selectors';
import Button from '@common/button/Button';
import List from     '@components/list/List';
import ListItem from '@components/list/ListeItem';

import Error from '@components/common/error/Error';


class SubPageSaga extends React.Component {

  componentDidMount() {
    this.props.loadTodos();
  }

  componentWillUnmount() {
    console.log("Leaving SubPage");
  }

  _onRemove = (id) => {
    this.props.removeTodo(id)
  }

  _onClick = () => {
    this.props.editTodo({id: 1});
  }

  renderTest = (item, index) => {
    return (
      <ListItem onClick={this._onRemove} key={index} item={item}/>
    )
  }
  
  render() {
    const { todos, error } = this.props;
    console.log("SUB render");

    return (
      <div>
        {this.props.todos.map(this.renderTest)}
        <Error error={error}/>
        <Button onClick={this._onClick}>Clear items</Button>
      </div>
    )
  }
}



SubPageSaga.propTypes = {
  loadTodos: PropTypes.func.isRequired,
  createTodo: PropTypes.func.isRequired,
  removeTodo: PropTypes.func.isRequired,
  editTodo: PropTypes.func.isRequired,
  todos: PropTypes.array
}

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
