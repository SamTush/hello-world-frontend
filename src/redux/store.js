import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk'; // Import the redux-thunk middleware
import greetingReducer from './reducers';

const rootReducer = combineReducers({
  greeting: greetingReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export default store;
