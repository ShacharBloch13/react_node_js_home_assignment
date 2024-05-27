/**
 * `src/index.js`
 * 
 * This file is the entry point of the React application. It sets up the Redux store using the 
 * Provider component from react-redux, and renders the main App component into the root DOM node.
 * The file also imports the global CSS styles from App.css.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import App from './App';
import './App.css';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
