import React, { PropTypes } from 'react';
import TodosList from '../components/TodosList';
import TodosForm from '../components/TodosForm';


const App = React.createClass({
  render() {
    return (
      <div id="app">
        <h1>React app</h1>
        <TodosList />
        <TodosForm />
      </div>
    );
  }
});

export default App;
