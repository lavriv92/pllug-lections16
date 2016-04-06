import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import { toggleTodo } from '../actions/todosActions';

import Todo from './Todo';

const TodosList = React.createClass({

  propTypes: {
    dispatch: PropTypes.func.isRequired,
    todos: PropTypes.array.isRequired
  },

  toggleTodo(todoId) {
    let { dispatch } = this.props;
    console.log(todoId);
    dispatch(toggleTodo(todoId));
  },

  render() {

    let todos = this.props.todos;

    let todosNodes = Object.keys(todos).map(key => (
      <li key={key}><Todo onClick={this.toggleTodo(todos[key].id)} todo={todos[key]} /></li>
    ));

    return (
      <ul>{todosNodes}</ul>
    );
  }
});

const mapStateToProps = state => {
  return {
    todos: state.todos
  };
}

export default connect(mapStateToProps)(TodosList);
