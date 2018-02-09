import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class LoginForm extends Component {

  render() {
    return (
      <div class="container">
        <div class="field">
          <label class="label">First Name</label>
          <div class="control">
            <input class="input" type="text" placeholder="First Name" />
          </div>
        </div>

        <div class="field">
          <label class="label">Last Name</label>
          <div class="control">
            <input class="input" type="text" placeholder="Last Name" />
          </div>
        </div>

        <div class="field">
          <label class="label">Email Address</label>
          <div class="control has-icons-left has-icons-right">
            <input class="input is-danger" type="email" placeholder="Email input" value="" />
            <span class="icon is-small is-left">
              <i class="fas fa-envelope"></i>
            </span>
            <span class="icon is-small is-right">
              <i class="fas fa-exclamation-triangle"></i>
            </span>
          </div>
          <p class="help is-danger">This email is invalid</p>
        </div>

        <div class="field">
          <div class="control">
            <label class="checkbox">
              <input type="checkbox" />
               I accept and agree to the <a href="#">Terms of Use</a> and <a href="#">Privacy Statement</a>
            </label>
          </div>
        </div>

        <div class="field is-grouped">
          <div class="control">
            <button class="button is-link">Submit</button>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginForm;
