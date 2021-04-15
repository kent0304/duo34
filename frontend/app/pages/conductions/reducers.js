import { initialState } from '../store/initialState';
import { CREATE_CONDUCTION } from '../conductions/actions';

import _ from 'lodash';

export const conductionsReducer = (state = initialState, action) => {
  switch(action.type) {
    case CREATE_CONDUCTION:
      return { 
        conduction: action.response.data.conduction
      }
    default:
      return state
  }
}