import React from 'react';

import FlyMixin from '../mixins/FlyMixin';

const User = React.createClass({

  mixins: [ FlyMixin ],

  propTypes: {
    name: React.PropTypes.string.isRequired,
    job: React.PropTypes.string.isRequired
  },

  render() {

    let { name, job } = this.props;

    return (
      <div>
        <h3>{name}</h3>
        <div>{job}</div>
        <button onClick={this.fly} >Fly</button>
      </div>
    );
  }
});

export default User;
