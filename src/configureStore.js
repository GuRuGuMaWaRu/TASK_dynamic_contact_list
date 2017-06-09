import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import throttle from 'lodash/throttle';

import { loadState, saveState } from './localStorage';
import reducers from './reducers';

export const configureStore = () => {
  const persistedState = loadState();
  const middlewares = [thunk];
  const store = createStore(
    reducers,
    persistedState,
    applyMiddleware(...middlewares),
  );

  store.subscribe(throttle(() => {
    saveState({
      contactList: store.getState().contactList
    });
  }, 1000));

  return store;
};
