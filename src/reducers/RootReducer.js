import { combineReducers } from 'redux';
import count from './CounterReducer';

const rootReducer = combineReducers({ count });

export default rootReducer;
