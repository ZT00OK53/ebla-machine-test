import React from 'react';
import { connect } from 'react-redux';

const PollWaiting = props => {
  const { question } = props;
  return (
    <div>
      <form>
        <button className="btn border options-btn" onClick={props.handleAnswerChange} value="optionOne">
          {question['optionOne']['text']}
        </button>&nbsp;
        <button className="btn border options-btn" onClick={props.handleAnswerChange} value="optionTwo">
          {question['optionTwo']['text']}
        </button>
      </form>
    </div>
  );
};

function mapStateToProps({ users, questions, authedUser }) {
  return {
    users,
    questions,
    authedUser
  };
}

export default connect(mapStateToProps)(PollWaiting);
