import { FETCH_QUESTIONS, FETCH_QUESTION, FETCH_QUESTIONS_FROM_SECTION, CREATE_QUESTION, PUT_QUESTION } from '../questions/actions';
import { initialState } from '../store/initialState';

import _ from 'lodash';

export const questionsReducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_QUESTIONS:
      return { list: _.mapKeys(action.response.data.questions, 'id') }
    case FETCH_QUESTION:
      const selected_question = action.response.data
      return { ...state, selected_question: selected_question }
    case FETCH_QUESTIONS_FROM_SECTION:
      return { ...state, tests: _.mapKeys(action.response.data.questions, 'id') }
    case CREATE_QUESTION:
      const question = action.response.data
      return { ...state, [question.id]: question }
    case PUT_QUESTION:
      return { ...state }
    default:
      return state
  }
}