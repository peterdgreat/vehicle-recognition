import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import vehicleReducer from './Vehicles/vehicle';

const reducer = combineReducers({
  vehicleReducer,
});
const store = createStore(
  reducer,
  applyMiddleware(logger, thunk),
);
export default store;
