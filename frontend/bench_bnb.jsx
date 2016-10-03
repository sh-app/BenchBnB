import React from 'react';
import ReactDOM from 'react-dom';
import ConfigureStore from './store/store.js';
import Root from './components/root';
import {login} from './actions/session_actions';


//for testing only
// const user = {user:{username: 'user1', password: 'password1'}};
// const success= (user) => ( store.dispatch(receiveCurrentUser(user)));
// const error= (data) => ( console.log(data) );
//-----

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
