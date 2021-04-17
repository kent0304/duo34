import { initialState } from '../store/initialState';
import { POST_ANSWER, OPEN_DISPLAY_ANSWER, CLOSE_DISPLAY_ANSWER } from '../answers/actions';

import _ from 'lodash';

export const answersReducer = (state = initialState, action) => {
  switch(action.type) {
    case POST_ANSWER:
      return { 
        answer: action.response.data.answer,
        score: action.response.data.conduction.score,
        is_display: false
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