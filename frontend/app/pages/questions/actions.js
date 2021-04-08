import axios from '../settings/axios';
export const FETCH_QUESTIONS = 'FETCH_QUESTIONS';
export const FETCH_QUESTION = 'FETCH_QUESTION';
export const CREATE_QUESTION = 'CREATE_QUESTION';
export const PUT_QUESTION = 'PUT_QUESTION';

const ROOT_URL = 'http://localhost:5000';

export const fetchQuestions = () => async dispatch => {
  const response = await axios.get(`${ROOT_URL}/questions`)
  dispatch({ type: FETCH_QUESTIONS, response })
}

export const fetchQuestionById = (id) => async dispatch => {
  const response = await axios.get(`${ROOT_URL}/questions/${id}`)
  dispatch({ type: FETCH_QUESTION, response })
}

export const postQuestion = (question) => async dispatch => {
  const response = await axios.post(`${ROOT_URL}/question`, question) 
  dispatch({ type: CREATE_QUESTION, response })
}

export const putQuestion = (id, name) => async dispatch => {
  const response = await axios.put(`${ROOT_URL}/questions/${id}`, name)
  dispatch({type: PUT_QUESTION, response})
}
