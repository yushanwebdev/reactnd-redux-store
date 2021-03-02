import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reducer from './reducers';
import middleware from './middleware';
import { createStore } from 'redux';
import ConnectedApp from './components/App';
import { Provider } from 'react-redux';

const store = createStore(reducer, middleware);

ReactDOM.render(
  <Provider store={store}>
      <ConnectedApp />
  </Provider>,
  document.getElementById('root')
)
