import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
 
import './index.css';
import App from './App.js';

 
import setupSocket from './sockets/socket_index.js'
import reducers from './reducers/reducer_index.js'
import handleNewMessage from './sagas/saga_index.js'
import username from './utils/name.js'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
	reducers,
	applyMiddleware(sagaMiddleware)
)

const socket = setupSocket(store.dispatch, username)

sagaMiddleware.run(handleNewMessage, {socket, username})
 
ReactDOM.render(
		<Provider store = {store} >  <App />  </ Provider>, 
	document.getElementById('root')
  );
  