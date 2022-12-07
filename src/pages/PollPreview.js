import React, { Component } from 'react';
import { connect } from 'react-redux';

import { handleReturnAnswer, handleReturnQuestion } from '../actions/questions';
import NewPoll from './NewPoll';
import PollResult from './PollResult';
import PollWaiting from './PollWaiting';
import "../css/PollPreview.css";

class PollPreview extends Component {
  state = {
    selectedAnswer: '',
    optionOne: '',
    optionTwo: ''
  };

  _questionsIndex() {
    const { id, questions } = this.props;
    const question = questions[id];
    return (
      <div>
        <span>....or.....</span>
        <span className='fw-bold'>{question['optionTwo']['text']}</span>
      </div>
    );
  }

  handleAnswerChange = event => {
    event.preventDefault();
    const selectedAnswer = event.target.value;
    const { dispatch, id } = this.props;
    dispatch(handleReturnAnswer(id, selectedAnswer));
    this.setState({
      selectedAnswer
    });
  };

  handleNewPoll = event => {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmitPoll = event => {
    event.preventDefault();
    const { optionOne, optionTwo } = this.state;
    this.props.dispatch(handleReturnQuestion(optionOne, optionTwo));
    this.setState({
      optionOne: '',
      optionTwo: ''
    });
    this.props.history.push('/questions');
  };

  render() {
    const { id, users, questions, answered, authedUser } = this.props;
    const { optionOne, optionTwo } = this.state;
    const question = questions[id];
    const location = window.location.pathname;
    const type = location.split('/').slice(-1)[0];
    return (
      <div className='card mt-3'>
        <div className='card-header'>
          <span>
            {question ? users[question.author].name : users[authedUser].name}{' '} asks:
          </span>
        </div>
        <div className='card-body p-3'>
          <div className='d-flex align-items-center'>
            <div className='px-3 py-2'>
              <img
                className='user-card-img'
                src={
                  question
                    ? users[question.author].avatarURL
                    : users[authedUser].avatarURL
                }
                alt="avtar-url"
              />
            </div>
            <div className='px-3 py-2 w-100'>
              <h3>Would You Rather...</h3>
              {type === 'questions' ?
                (
                  <>
                    {this._questionsIndex()}
                    <div className='mt-3'>
                      <button className='btn btn-none w-100 view-poll-btn'>View Poll</button>
                    </div>
                  </>
                ) : null}
              <div>
                {type === id ? (
                  answered === false ? (
                    <PollWaiting
                      handleAnswerChange={this.handleAnswerChange}
                      question={question}
                    />
                  ) : (
                    <PollResult answered={answered} id={id} />
                  )
                ) : type === 'add' ? (
                  <NewPoll
                    handleNewPoll={this.handleNewPoll}
                    optionOne={optionOne}
                    optionTwo={optionTwo}
                  />
                ) : null}
                {
                  !question ? (
                    <div>
                      <button
                        type="submit"
                        className='btn btn-none w-100 view-poll-btn'
                        disabled={!optionOne || !optionTwo}
                        onClick={this.handleSubmitPoll}>
                        Ask Now!
                      </button>
                    </div>
                  ) : null
                }
              </div>
            </div>
          </div>
        </div>
      </div >
    );
  }
}

function mapStateToProps({ users, questions, authedUser }) {
  return {
    users,
    questions,
    authedUser
  };
}

export default connect(mapStateToProps)(PollPreview);
