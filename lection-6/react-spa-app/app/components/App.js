import React from 'react';

import { Link } from 'react-router';

export default React.createClass({

  getInitialState() {
    return { userId: 1 };
  },

  updateUser(e) {
    this.setState({
      userId: e.target.value
    });
  },

  render() {
    return (
      <div>
        <h1>App</h1>
        <input onKeyUp={this.updateUser} />
        <ul>
          <li><Link to="/">About</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contacts">Contacts</Link></li>
          <li><Link to={`/user/${this.state.userId}`}>User</Link></li>
        </ul>
        <div>{this.props.children}</div>
      </div>
    )
  }
});
