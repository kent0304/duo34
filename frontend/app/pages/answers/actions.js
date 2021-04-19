import axios from '../settings/axios';
export const POST_ANSWER = 'POST_ANSWER';
export const OPEN_DISPLAY_ANSWER = 'OPEN_DISPLAY_ANSWER';
export const CLOSE_DISPLAY_ANSWER = 'CLOSE_DISPLAY_ANSWER';
export const FETCH_ANSWERS_BY_CONDUCTION_ID = 'FETCH_ANSWERS_BY_CONDUCTION_ID';

const ROOT_URL = 'http://localhost:5000';

export const fetchAnswersByConductionId = (conduction_id) => async dispatch => {
  const response = await axios.get(`${ROOT_URL}/answers/conduction/${conduction_id}`);
  dispatch({ type: FETCH_ANSWERS_BY_CONDUCTION_ID, response })
}

export const postAnswerText = (request, id) => async dispatch => {
  const payload = {'answer_text': request.text, 'question_id': request.question_id, 'is_solve': request.is_solve}
  const response = await axios.post(`${ROOT_URL}/conduction/answer/${id}`, payload);
  dispatch({ type: POST_ANSWER, response });
  return response;
}

export const openDisplay = () => dispatch => {
  dispatch({ type: OPEN_DISPLAY_ANSWER })
}

export const closeDisplay = () => dispatch => {
  dispatch({ type: CLOSE_DISPLAY_ANSWER })
}