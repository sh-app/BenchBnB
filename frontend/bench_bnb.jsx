import React from 'react';
import ReactDOM from 'react-dom';
import ConfigureStore from './store/store.js';
import { Provider } from 'react-redux';
import Root from './components/root';
import {login} from './actions/session_actions';

document.addEventListener("DOMContentLoaded", ()=> {
  let store;
  if (window.currentUser) {
    const preloadedState = {
      session: {
        currentUser: window.currentUser,
        errors: []
      }
    };
    store = ConfigureStore(preloadedState);
  } else {
    store = ConfigureStore();
  }
  window.store = store;
  window.login = login;
  ReactDOM.render(<Root store={store}/>, document.getElementById("root"));
});
