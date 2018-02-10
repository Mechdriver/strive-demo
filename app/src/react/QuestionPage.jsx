import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class QuestionPage extends Component {

  render() {
    return (
      <div className="container">
        <section className="section">
          <div className="container">
            <h1 className="title">Question {this.props.page} of 5</h1>
            <h2 className="subtitle">
              {this.props.question}
            </h2>
          </div>
        </section>
        <textarea className="textarea" placeholder="e.g. Hello world"></textarea>
        <br></br>
        <button onClick={this.props.handleNext} className="button is-primary">Next</button>
      </div>
    );
  }
}

export default QuestionPage;
