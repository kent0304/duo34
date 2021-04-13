import { initialState } from '../store/initialState';
import { CONDUCT_TEST } from '../conductions/actions';

import _ from 'lodash';

export const conductionsReducer = (state = initialState, action) => {
  switch(action.type) {
    case CONDUCT_TEST:
      return { 
        questions: _.mapKeys(action.response.data.questions, 'id'),
        conduction: action.response.data.conduction
      }
    default:
      return state
  }
}