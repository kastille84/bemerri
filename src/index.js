import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {applyMiddleware, createStore} from 'redux';
import {Provider} from 'react-redux'
import reducers from './reducers/index';
import thunk from 'redux-thunk';
import {createLogger} from 'redux-logger';
import {Router} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

const middleware = [thunk, createLogger()];

const store = createStore(reducers, applyMiddleware(...middleware));

ReactDOM.render(
  <Provider store={store}>
    <Router history={createHistory()}>
      <App />
    </Router>
  </Provider>
  , document.getElementById('root'));

