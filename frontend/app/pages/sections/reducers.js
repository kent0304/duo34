import { FETCH_SECTIONS } from '../sections/actions';
import { initialState } from '../store/initialState';

import _ from 'lodash';

export const sectionsReducer = (state = initialState.sections, action) => {
  switch(action.type) {
    case FETCH_SECTIONS:
      return _.mapKeys(action.response.data.sections, 'id')
    default:
      return state
  }
}