import React from 'react';

class User extends React.Component {
  render() {
    return (
      <div>
        <h2 style={{ backgroundColor: this.props.backColor }}>
          Hello, {this.props.firstName} {this.props.lastName}!
        </h2>
        <img src={this.props.avatarUrl} width="370" height="300" />
      </div>
    );
  }
}

export default User;
