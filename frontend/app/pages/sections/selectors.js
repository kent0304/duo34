import { createSelector } from 'reselect';

const sectionsSelector = (state) => state.sections;

export const getSectionsList = createSelector(
  [sectionsSelector],
  state => state,
)