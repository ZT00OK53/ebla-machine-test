import { receiveQuestions } from "./questions";
import { receiveUsers } from "./users";
import { getInitialData } from "../utils/api";
import { showLoading, hideLoading } from "react-redux-loading-bar";

export function handleInitialData() {
  return dispatch => {
    dispatch(showLoading());
    return getInitialData().then(({ users, questions }) => {
      dispatch(receiveUsers(users));
      dispatch(receiveQuestions(questions));
      dispatch(hideLoading());
    });
  };
}
