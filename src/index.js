import React, { useReducer } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter } from 'react-router-dom';

import {Provider} from 'react-redux';
import { combineReducers, createStore } from 'redux';

let alertDefault = true;

let defaultState =  [
  { id:0, name:'modern shoes', quantity:2 }, 
  { id:1, name:'modern shoes2', quantity:6 }
];

function reducer(state = defaultState, action){ //default parameter..

  if(action.type === 'addCart'){
    let copyState = [...state];
    copyState.push(action.payload);
    return copyState
  } else if( action.type === 'addQuantity'){

    let copyState = [...state];
    copyState[0].quantity++;
    return copyState
  }else if( action.type === 'takeawayQuantity'){

    let copyState = [...state];
    copyState[0].quantity === 0 ? (copyState[0].quantity=0):copyState[0].quantity--;
    return copyState
  }else{
    return state
  }
  
}

function reducerAlertCgh(state = alertDefault, action){
  if( action.type === 'closeAlert'){
    state='false';
    return state;
  }else
    return state
}

let store = createStore(combineReducers({reducer, reducerAlertCgh}));


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter> {/* HashRouter -- routing safe, preventing from asking request to server.. */}
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
