import axios from '../settings/axios';
export const FETCH_QUESTIONS = 'FETCH_QUESTIONS';
export const FETCH_QUESTION = 'FETCH_QUESTION';
export const CREATE_QUESTION = 'CREATE_QUESTION';
export const PUT_QUESTION = 'PUT_QUESTION';
export const FETCH_QUESTIONS_FROM_SECTION = 'FETCH_QUESTIONS_FROM_SECTION';

const ROOT_URL = 'http://localhost:5000';

export const fetchQuestions = () => async dispatch => {
  const response = await axios.get(`${ROOT_URL}/questions`)
  dispatch({ type: FETCH_QUESTIONS, response })
}

export const fetchQuestionById = (id) => async dispatch => {
  const response = await axios.get(`${ROOT_URL}/questions/${id}`)
  dispatch({ type: FETCH_QUESTION, response })
}

export const fetchQuestionsById = (id) => async dispatch => {
  const response = await axios.get(`${ROOT_URL}/questions/sections/${id}`) // 修正
  dispatch({ type: FETCH_QUESTIONS_FROM_SECTION, response })
}

export const postQuestion = (question) => async dispatch => {
  const response = await axios.post(`${ROOT_URL}/question`, question) 
  dispatch({ type: CREATE_QUESTION, response })
}

export const putQuestion = (id, question) => async dispatch => {
  const response = await axios.put(`${ROOT_URL}/questions/${id}`, question)
  dispatch({type: PUT_QUESTION, response})
}
