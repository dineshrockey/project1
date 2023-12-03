// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
// import resumeReducer from './reducers';
import rootReducer from './rootreducer';

const store = configureStore({

    reducer: rootReducer,
});

export default store;
