import { createStore, compose } from 'redux';
import reducer from './reducers';

const defaultState = {
  alerts: {}
};

const store = createStore(
  reducer,
  defaultState,
  compose(
    typeof window === 'object' && typeof window.devToolsExtension !== 'undefined' ? window.devToolsExtension() : f => f
  )
);

export default store;
