import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todoApp from './reducers'
import AuthService  from './services/AuthService'
//import registerServiceWorker from './registerServiceWorker';

if( AuthService.isLogged() ) {
  AuthService.getInitialState().then((response) => {
    let initialState = response;
    __INIT(initialState);
  })
}else{
  let initialState = {}
  __INIT(initialState);
}


function __INIT(initialState) {
  let store = createStore(todoApp, initialState)

  ReactDOM.render((
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  ), document.getElementById('root'));
  //registerServiceWorker();
}
