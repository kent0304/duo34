import { FETCH_SECTIONS, CREATE_SECTION, PUT_SECTION } from '../sections/actions';
import { initialState } from '../store/initialState';

import _ from 'lodash';

export const sectionsReducer = (state = initialState.sections, action) => {
  switch(action.type) {
    case FETCH_SECTIONS:
      return _.mapKeys(action.response.data.sections, 'id')
    case CREATE_SECTION:
      const section = action.response.data
      return { ...state, [section.id]: section }
    case PUT_SECTION:
      return { ...state }
    default:
      return state
  }
}