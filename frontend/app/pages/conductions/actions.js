import axios from '../settings/axios';
export const CONDUCT_TEST = 'CONDUCT_TEST';

const ROOT_URL = 'http://localhost:5000';

export const conductTest = (section_id) => async dispatch => {
  const paylaod = {'section_id': section_id}
  const response = await axios.post(`${ROOT_URL}/conduction`, paylaod);
  dispatch({ type: CONDUCT_TEST, response })
}