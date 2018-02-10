import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class LoginForm extends Component {

  render() {
    return (
      <div className="container">
        <div className="field">
          <label className="label">First Name</label>
          <div className="control">
            <input className="input" type="text" placeholder="First Name" />
          </div>
        </div>

        <div className="field">
          <label className="label">Last Name</label>
          <div className="control">
            <input className="input" type="text" placeholder="Last Name" />
          </div>
        </div>

        <div className="field">
          <label className="label">Email Address</label>
          <div className="control has-icons-left has-icons-right">
            <input className="input is-danger" type="email" placeholder="Email input" value="" />
            <span className="icon is-small is-left">
              <i className="fas fa-envelope"></i>
            </span>
            <span className="icon is-small is-right">
              <i className="fas fa-exclamation-triangle"></i>
            </span>
          </div>
          <p className="help is-danger">This email is invalid</p>
        </div>

        <div className="field">
          <div className="control">
            <label className="checkbox">
              <input type="checkbox" />
               I accept and agree to the <a href="#">Terms of Use</a> and <a href="#">Privacy Statement</a>
            </label>
          </div>
        </div>

        <div className="field is-grouped">
          <div className="control">
            <button className="button is-link" onClick={this.props.submitHandler}>Submit</button>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginForm;
