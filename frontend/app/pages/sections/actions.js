import axios from 'axios';
export const FETCH_SECTIONS = 'FETCH_SECTIONS';

const ROOT_URL = 'http://localhost:5000/'

export const fetchSections = () => async dispatch => {
  const response = await axios.get(`${ROOT_URL}/sections`)
  dispatch({ type: FETCH_SECTIONS, response })
}
