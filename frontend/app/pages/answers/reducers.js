import { initialState } from '../store/initialState';
import { FETCH_ANSWERS_BY_CONDUCTION_ID, POST_ANSWER, OPEN_DISPLAY_ANSWER, CLOSE_DISPLAY_ANSWER } from '../answers/actions';

import _ from 'lodash';

export const answersReducer = (state = initialState, action) => {
  switch(action.type) {
    case POST_ANSWER:
      return { 
        ...state,
        answer: action.response.data.answer,
        score: action.response.data.conduction.score,
        is_display: false
      }
    case FETCH_ANSWERS_BY_CONDUCTION_ID:
      return {
        ...state,
        list: action.response.data.answers,
      }
    case OPEN_DISPLAY_ANSWER:
      return {
        ...state,
        is_display: true
      }
    case CLOSE_DISPLAY_ANSWER:
      return {
        ...state,
        is_display: false
      }
    default:
      return state
  }
}