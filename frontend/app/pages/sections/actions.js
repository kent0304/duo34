import axios from '../settings/axios';
export const FETCH_SECTIONS = 'FETCH_SECTIONS';
export const FETCH_SECTION = 'FETCH_SECTION';
export const CREATE_SECTION = 'CREATE_SECTION';
export const PUT_SECTION = 'PUT_SECTION';

const ROOT_URL = 'http://localhost:5000';

export const fetchSections = () => async dispatch => {
  const response = await axios.get(`${ROOT_URL}/sections`)
  dispatch({ type: FETCH_SECTIONS, response })
}

export const fetchSectionById = (id) => async dispatch => {
  const response = await axios.get(`${ROOT_URL}/sections/${id}`)
  dispatch({ type: FETCH_SECTION, response })
}

export const postSection = (section) => async dispatch => {
  const response = await axios.post(`${ROOT_URL}/section`, section) 
  dispatch({ type: CREATE_SECTION, response })
}

export const putSection = (id, name) => async dispatch => {
  const response = await axios.put(`${ROOT_URL}/sections/${id}`, name)
  dispatch({type: PUT_SECTION, response})
}
