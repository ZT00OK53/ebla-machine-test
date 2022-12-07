import { combineReducers } from 'redux';
import authedUser from '../reducers/authUser';
import questions from '../reducers/questions';
import users from '../reducers/users';
import { loadingBarReducer } from 'react-redux-loading-bar';

export default combineReducers({
  authedUser,
  loadingBar: loadingBarReducer,
  questions,
  users
});
