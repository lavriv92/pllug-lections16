import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

const Todo = React.createClass({

  propTypes: {
    todo: PropTypes.object.isRequired
  },

  render() {

    let todo = this.props.todo;

    return (
      <div>
        {todo.text}
      </div>
    );
  }
});

export default Todo;
