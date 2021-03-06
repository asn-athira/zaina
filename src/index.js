/*import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';



ReactDOM.render(<App />, document.getElementById('root')); */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {Provider} from 'react-redux'
import rootReducer from './reducers/index'
//import { createBrowserHistory } from 'history';
//
//export const browserHistory = createBrowserHistory();





//const sagaMiddleware = createSagaMiddleware();



const store = createStore(rootReducer, applyMiddleware(thunk))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  ,
  document.getElementById('root')
);