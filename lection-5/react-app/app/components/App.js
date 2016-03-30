import React from 'react';

import UserList from './UserList';

const users = [{
  name: 'Test1',
  job: 'Test1 job'
},
{
  name: 'Test1',
  job: 'Test1 job'
}];

const App = React.createClass({

  render() {
    return (
      <div>
        <h1>React app</h1>
        <UserList users={users}/>
      </div>
    )
  }
});

export default App;
