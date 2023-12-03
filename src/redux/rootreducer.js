// src/redux/rootReducer.js
import { combineReducers } from 'redux';
import resumeReducer from './reducers';

const rootReducer = combineReducers({
  resume: resumeReducer,
  // Add other reducers here if you have any
});

export default rootReducer;
