import React from 'react';

import User from './User';

const UserList = React.createClass({

  propTypes: {
    users: React.PropTypes.array.isRequired,
  },

  render() {

    let userNodes = Object.keys(this.props.users).map(key => {
      let user = this.props.users[key];
      return (
        <li key={key}>
          <User name={user.name} job={user.job} />
        </li> )
      });


    return (
      <ul>{userNodes}</ul>
    );
  }
});

export default UserList;
