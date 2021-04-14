import axios from '../settings/axios';
export const CREATE_CONDUCTION = 'CREATE_CONDUCTION';

const ROOT_URL = 'http://localhost:5000';

export const createConduction = (section_id) => async dispatch => {
  const paylaod = {'section_id': section_id}
  const response = await axios.post(`${ROOT_URL}/conduction`, paylaod);
  dispatch({ type: CREATE_CONDUCTION, response })
}