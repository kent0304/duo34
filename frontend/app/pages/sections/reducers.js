import { FETCH_SECTIONS, FETCH_SECTION, CREATE_SECTION, PUT_SECTION } from '../sections/actions';
import { initialState } from '../store/initialState';

import _ from 'lodash';

export const sectionsReducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_SECTIONS:
      return { list: _.mapKeys(action.response.data.sections, 'id') }
    case FETCH_SECTION:
      const selected_section = action.response.data
      return { ...state, selected_section: section }
    case CREATE_SECTION:
      const section = action.response.data
      return { ...state, [section.id]: section }
    case PUT_SECTION:
      return { ...state }
    default:
      return state
  }
}