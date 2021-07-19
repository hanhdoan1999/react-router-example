
import { ADD_QUESTION, GET_QUESTION_BY_ID, DELETE_QUESTION, UPDATE_QUESTION } from '../const/ActionTypes';

export const actAddQuestion = (content) => {
  return {
    type: ADD_QUESTION,
    payload: content,
  };
};

export const actGetQuestionById = (id) => {
    return {
      type: GET_QUESTION_BY_ID,
      id,
    };
  };

  export const actDeleteQuestion = (id) => {
    return {
      type: DELETE_QUESTION,
      payload: id,
    };
  };

  export const actUpdateQuestion = (content) => {
    return {
      type: UPDATE_QUESTION,
      content,
    };
  };

