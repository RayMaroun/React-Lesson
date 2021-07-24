import React from 'react';

function User(props) {
  return (
    <div>
      <h2 style={{ backgroundColor: props.backColor }}>
        Hello, {props.firstName} {props.lastName}!
      </h2>
      <img src={props.avatarUrl} width="370" height="300" />
    </div>
  );
}

export default User;
