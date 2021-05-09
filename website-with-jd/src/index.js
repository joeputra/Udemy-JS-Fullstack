import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import rootReducer from './store/reducers';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import { PersistGate } from 'redux-persist/integration/react';

const { store, persistor } = configureStore()

ReactDOM.render(
  <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
  </Provider>
  , document.getElementById('root')
);


