import { createStore, combineReducers, applyMiddleware } from 'redux';
import homeStore from './home/store'
import thunk from 'redux-thunk';

const reducer = combineReducers({
  homeStore
})

const store = createStore(reducer, applyMiddleware(thunk));
export default store;