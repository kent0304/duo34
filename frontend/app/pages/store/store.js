import {
  createStore as reduxCreateStore,
  combineReducers,
} from "redux";

import { sectionsReducer } from '../sections/reducers';
import { questionsReducer } from '../questions/reducers';

export default function createStore(enhancer) {
  // reducerが増えたらここに追加
  return reduxCreateStore(
    combineReducers({
      sections: sectionsReducer,
      questions: questionsReducer,
    }),
    enhancer
  )
}
