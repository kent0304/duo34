import { initialState } from '../store/initialState';
import { FETCH_CONDUCTION, CREATE_CONDUCTION } from '../conductions/actions';

import _ from 'lodash';

export const conductionsReducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_CONDUCTION:
      return {
        conduction: action.response.data.conduction
      }
    case CREATE_CONDUCTION:
      return { 
        conduction: action.response.data.conduction
      }
    default:
      return state
  }
}