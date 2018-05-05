import { combineReducers } from 'redux';
import { SEND_ALERT, REMOVE_ALERT } from '../actions/actions';

const alerts = (state = [], action) => {
  switch(action.type) {
    case SEND_ALERT: {
      return Object.assign({}, state, { [action.payload.id]: action.payload });
    }
    case REMOVE_ALERT: {
      const keys = Object.keys(state);
      const newState = {};
      keys.forEach( key => {
        if( state[key].id !== action.payload) {
          newState[key] = (Object.assign(state[key]));
        }
      });
      return newState;
    }
    default:
      return state;
  }
};

const rootReducer = combineReducers({ alerts });

export default rootReducer;
