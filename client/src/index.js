import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todoApp from './reducers'
//import registerServiceWorker from './registerServiceWorker';

let initialState = {
  todos: [
    {id: 1, text: 'una todo', completed: false},
    {id: 2, text: 'otra todo', completed: false}
  ],
  users: {
    list: [
      {name: 'emanuel'}
    ],
    isFetching: false
  }
}

let store = createStore(todoApp, initialState)

ReactDOM.render((
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
), document.getElementById('root'));
//registerServiceWorker();
