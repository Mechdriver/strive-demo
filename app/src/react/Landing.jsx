import React, { Component } from 'react';
import ReactDOM from 'react-dom';

//Custom imports
import LoginForm from './LoginForm.jsx'

class Landing extends Component {

  render() {
    return (
      <div class="container">
        <figure class="image is-128x128">
          <img src="https://s3.amazonaws.com/criteria-corp-object-store/ondemandassessment/logos/strive_talent74284.png" />
        </figure>
        <div class="notification">
          <strong>Welcome to the Strive Talent assessment. This assessment will allow you to prove your potential to multiple employers at once. Good luck, and we'll be in touch!</strong>
        </div>
        <LoginForm />
      </div>
    );
  }
}

ReactDOM.render(
  <Landing />,
  document.getElementById('root')
)
