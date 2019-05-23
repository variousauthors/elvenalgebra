import './material-ui-bootstrap'
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { configureStore } from './__entry/configureStore'
import { PersistGate } from 'redux-persist/integration/react';
import {HooksProvider} from "@epeli/redux-hooks";
import { Provider } from 'react-redux';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core';
import { BrowserRouter } from 'react-router-dom';

const { store, persistor } = configureStore()

const theme = createMuiTheme()

ReactDOM.render(
  <Provider store={store}>
    <HooksProvider store={store}>
      <ThemeProvider theme={theme}>
        <PersistGate loading={null} persistor={persistor}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </PersistGate>
      </ThemeProvider>
    </HooksProvider>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
