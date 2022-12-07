import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { legacy_createStore as createStore  } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers/index';
import middleware from './middleware';
import 'semantic-ui-css/semantic.min.css'

const store = createStore(rootReducer, middleware);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

reportWebVitals();
