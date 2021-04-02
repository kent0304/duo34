import {
  createStore as reduxCreateStore,
  combineReducers,
} from "redux";

import { sectionsReducer } from '../sections/reducers';

export default function createStore(enhancer) {
  // reducerが増えたらここに追加
  return reduxCreateStore(
    combineReducers({
      sections: sectionsReducer,
    }),
    enhancer
  )
}
