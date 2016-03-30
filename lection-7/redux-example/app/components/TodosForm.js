import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import { addTodo } from '../actions/todosActions';

const ENTER_KEY = 13;

const TodosForm = React.createClass({

  propTypes: {
    dispatch: PropTypes.func.isRequired
  },

  addTodo(e) {
    let {dispatch} = this.props;
    return (e.keyCode === ENTER_KEY) && dispatch(addTodo(e.target.value));
  },

  render() {
    return <input onKeyUp={this.addTodo} />
  }
});

export default connect()(TodosForm);
