import React from 'react';

export default React.createClass({
  render() {
    return (
      <div>
        Content of user:{this.props.params.userId}
      </div>
    )
  }
});
