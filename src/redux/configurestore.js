import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import vehicleReducer from './Vehicles/vehicle';

const reducer = combineReducers({
  vehicleReducer,
});
const store = createStore(
  reducer,
  applyMiddleware(thunk),
);
export default store;
