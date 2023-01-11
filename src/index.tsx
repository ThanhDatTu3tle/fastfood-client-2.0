import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit'
// import { getDefaultMiddleware } from 'redux-starter-kit';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';

import reducers from './redux/reducers';
import mySaga from './redux/sagas';

const sagaMiddleware = createSagaMiddleware()
// sagaMiddleware.run(mySaga)

const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
