import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import { Redirect } from 'react-router-dom';

import ItemForm from '@components/form/item/Item';
import Button from '@common/button/Button';
import { loadTodo, createTodo, editTodo, removeTodo, clearTodoRedirect } from '@redux/modules/todo/actions';
import { getActiveTodo, getTodoLoading, getRedirect, getRedirectURL } from '@redux/modules/todo/selectors';

const propTypes = {
  match: PropTypes.object.isRequired,
  activeTodo: PropTypes.object.isRequired,
  loadTodo: PropTypes.func.isRequired,
  createTodo: PropTypes.func.isRequired,
  editTodo: PropTypes.func.isRequired,
  clearTodoRedirect: PropTypes.func.isRequired,
  redirect: PropTypes.bool.isRequired,
  removeTodo: PropTypes.func.isRequired
}

const defaultProps = {
  match: {},
  activeTodo: {},
  loadTodo: () => {},
  createTodo: () => {},
  editTodo: () => {},
  clearTodoRedirect: () => {},
  removeTodo: () => {},
  redirect: false
}

class EditItemPage extends React.Component {

  onSubmit = (values) => {
    const { createTodo, activeTodo, editTodo } = this.props;
    if(activeTodo.id) {
      editTodo(values)
    } else {
      createTodo(values);
    }
  }

  onRemoveClick = () => {
    const { removeTodo, activeTodo: { id } } = this.props;
    removeTodo(id);
  }

  componentDidMount() {
    const { activeTodo } = this.props;
    if(!activeTodo.id) {
      const { loadTodo, match: {params: { id }} } = this.props;
      loadTodo(id);
    }
  }

  componentWillUnmount() {
    this.props.clearTodoRedirect();
  }

  render() {
    const { activeTodo, redirect, redirectURL } = this.props;

    return (
      <div>
        {redirect && <Redirect to={redirectURL}/>}
        {activeTodo.id && <Button onClick={this.onRemoveClick}>X</Button>}
        <ItemForm item={activeTodo} onSubmit={this.onSubmit} />
      </div>
    );
  }
}

EditItemPage.propTypes = propTypes;
EditItemPage.defaultProps = defaultProps;

const mapStateToProps = (state) => {
  return {
    activeTodo: getActiveTodo(state),
    isLoading: getTodoLoading(state),
    redirect: getRedirect(state),
    redirectURL: getRedirectURL(state)
  }
}


export default connect(mapStateToProps, {
  loadTodo,
  createTodo,
  editTodo,
  clearTodoRedirect,
  removeTodo
})(EditItemPage)