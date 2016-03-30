import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

const TodosList = React.createClass({

  propTypes: {
    dispatch: PropTypes.func.isRequired,
    todos: PropTypes.array.isRequired
  },

  render() {

    let todos = this.props.todos;

    let todosNodes = Object.keys(todos).map(key => (
      <li key={key}>{todos[key].text}</li>
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
