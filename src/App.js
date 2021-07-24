import React, { Component } from 'react';
import User from './Components/User';

// src/App.js

class App extends Component {
  state = {
    userA: {
      firstName: 'Harper',
      lastName: 'Perez',
      avatarUrl:
        'https://www.refreshmiami.com/wp-content/uploads/2018/07/55085_logo-ironhack.png'
    },
    clickCount: 0, // 👈
    backColor: 'yellow'
  };

  colorMapper = () => {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
  };

  clickHandler = () => {
    const newCount = this.state.clickCount + 1;

    if (newCount !== 5) {
      this.setState({
        clickCount: newCount,
        backColor: this.colorMapper()
      });
    } else {
      this.setState({
        clickCount: newCount,
        backColor: 'yellow',
        userA: {
          firstName: 'Jon',
          lastName: 'Doe',
          avatarUrl:
            'https://www.refreshmiami.com/wp-content/uploads/2018/07/55085_logo-ironhack.png'
        }
      });
    }
  };

  render() {
    return (
      <div className="App">
        <h1> Hello Students! </h1>

        {/* 👇 */}
        <p>Count is: {this.state.clickCount}</p>
        <button onClick={this.clickHandler}>Click me</button>

        <User
          firstName={this.state.userA.firstName}
          lastName={this.state.userA.lastName}
          avatarUrl={this.state.userA.avatarUrl}
          backColor={this.state.backColor}
        />
      </div>
    );
  }
}

export default App;
