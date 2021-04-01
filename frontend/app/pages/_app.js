import { Container } from 'next/app'
import React from 'react'
import { applyMiddleware } from "redux"
import createStore from './store/store';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension'
import logger from 'redux-logger'
import thunk from 'redux-thunk';
import '../styles/globals.scss'

const enhancer = process.env.NODE_ENV === 'development' ? 
composeWithDevTools(applyMiddleware(thunk, logger)) : applyMiddleware(thunk);
export const store = createStore(enhancer);


function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
        <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
