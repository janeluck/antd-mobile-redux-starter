import React, {Component} from 'react';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import * as reducers from '../reducers';
import WalltranApp from './walltranApp';

import {
  createForm
}
from 'rc-form'

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const reducer = combineReducers(reducers);
const store = createStoreWithMiddleware(reducer);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <WalltranApp />
      </Provider>
    );
  }
}

export default createForm()(App)