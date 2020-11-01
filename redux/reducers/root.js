import {combineReducers} from 'redux';
import entities from './entities';
import session from './session';

const rootReducer = combineReducers({
  entities,
  session,
  // errors
});

export default rootReducer;