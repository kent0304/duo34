import axios from '../settings/axios';
export const FETCH_SECTIONS = 'FETCH_SECTIONS';
export const POST_SECTION = 'POST_SECTION';

const ROOT_URL = 'http://localhost:5000'

export const fetchSections = () => async dispatch => {
  const response = await axios.get(`${ROOT_URL}/sections`)
  dispatch({ type: FETCH_SECTIONS, response })
}

export const postSection = (section) => async dispatch => {
  const response = await axios.post(`${ROOT_URL}/section`, section)
  dispatch({ type: POST_SECTION, response })
}
