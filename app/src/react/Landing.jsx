import React, { Component } from 'react';
import ReactDOM from 'react-dom';

//Custom imports
import LoginForm from './LoginForm.jsx';
import QuestionPage from './QuestionPage.jsx'

class Landing extends Component {
  constructor(props) {
    super(props);

    this.state = {
      'page': 0,
      'firstName': '',
      'lastName': '',
      'email': '',
      'accepts': false
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleNextQuestion = this.handleNextQuestion.bind(this);
  }

  handleFirstName(event) {
    this.setState({firstName: event.target.value});
  }

  handleLastName(event) {
    this.setState({lastName: event.target.value});
  }

  handleEmail(event) {
    this.setState({email: event.target.value});
  }

  handleAccepts(event) {
    this.setState({accepts: event.target.value});
  }

  handleSubmit(event) {
    /*if (this.state.firstName &&
        this.state.lastName &&
        this.state.email &&
        this.state.accepts){
          this.setState({page: 1});
    }*/
    this.setState({page: 1});
  }

  handleNextQuestion(event) {
    this.setState({page: this.state.page + 1});
  }

  render() {
    if (this.state.page == 0) {
      return (
        <div className="container">
          <figure className="image is-128x128">
            <img src="https://s3.amazonaws.com/criteria-corp-object-store/ondemandassessment/logos/strive_talent74284.png" />
          </figure>
          <div className="notification">
            <strong>Welcome to the Strive Talent assessment. This assessment will allow you to prove your potential to multiple employers at once. Good luck, and we'll be in touch!</strong>
          </div>
          <LoginForm first = {this.state.firstName} submitHandler = {this.handleSubmit} firstNameChange = {this.handleFirstName} lastNameChange = {this.handleLastName} emailChange = {this.handleEmail} acceptChange = {this.handleAccepts}/>
        </div>
      );
    } else if (this.state.page == 1) {
      return (
        <QuestionPage time = {180.0000001} page = {this.state.page} handleNext = {this.handleNextQuestion} question = {"In your career thus far, what has been your favorite job and least favorite job and why?"}/>
      )
    } else if (this.state.page == 2) {
      return (
        <QuestionPage time = {180.0000002} page = {this.state.page} handleNext = {this.handleNextQuestion} question = {"What do you hope to be doing professionally five years from now?"}/>
      )
    } else if (this.state.page == 3) {
      return (
        <QuestionPage time = {180.0000003} page = {this.state.page} handleNext = {this.handleNextQuestion} question = {"Imagine that you are hired to work at a home repair company. Please describe how you would go about generating customers for your new company."}/>
      )
    } else if (this.state.page == 4) {
      return (
        <QuestionPage time = {180.0000004} page = {this.state.page} handleNext = {this.handleNextQuestion} question = {"Imagine that you work at a home repair company. You recently visited a homeowner and gave them a proposal for $5,000 in repairs to fix a broken outdoor staircase ($1,000), fix a storm drain ($500) and install storm windows for the living room ($3,500). \nYou receive the below email from the client later. Please write your reply below: \nHey! Thanks for coming by earlier. I'm interested in having your home repair company give my house some touch-ups, but I just can't afford the $5,000 right now. I'll be back in touch in six months when I'm done with car payments and can discuss it then. Have a great day! - Doris"}/>
      )
    } else if (this.state.page == 5) {
      return (
        <QuestionPage time = {180.0000005} page = {this.state.page} handleNext = {this.handleNextQuestion} question = {"What is a CRM?\nWhat are the greatest benefits of using a CRM?"}/>
      )
    }
  }
}

ReactDOM.render(
  <Landing />,
  document.getElementById('root')
)
