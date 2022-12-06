import React from "react";

const Scorecard = props => {
  const { user } = props;
  return (
    <div>
      <div className='card mt-3'>
        <div className='card-header'>
          <span>{user.name}</span>
        </div>
        <div className='card-body p-3'>
          <div className='d-flex align-items-center'>
            <div className='px-3 py-2'>
              <img
                className='user-card-img'
                src={user.avatarURL} alt={`Avatar of ${user}`}
              />
            </div>
            <div className='px-3 py-2'>
              <p>Asked Questions: {user.questions.length}</p>
              <p>Answered Questions: {Object.keys(user.answers).length}</p>
            </div>
          </div>
        </div>
        <div>
        </div>
      </div>
    </div>
  );
};

export default Scorecard;
