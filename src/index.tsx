import React, { Profiler } from 'react';
import ReactDOM from 'react-dom';
import 'styles/index.css';
import App from 'components/App';
import { persistor, store } from 'store/store';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import { PersistGate } from 'redux-persist/integration/react';

function onRenderCallback(
  _id: any,
  _phase: any,
  _actualDuration: any,
  _baseDuration: any,
  _startTime: any,
  _commitTime: any,
  _interactions: any
) {}

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Profiler id="IFRM" onRender={onRenderCallback}>
          <App />
        </Profiler>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
