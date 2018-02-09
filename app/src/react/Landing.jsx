import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Landing extends Component {

  render() {
    return (
      <div>
        <span>Hello, world!</span>
      </div>
    );
  }
}

ReactDOM.render(
  <Landing />,
  document.getElementById('root')
)
