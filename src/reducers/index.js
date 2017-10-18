import FoodsReducer from './foods-reducer';
import UsersReducer from './users-reducer';
import {combineReducers} from 'redux';

const allReducers = combineReducers({
    foods: FoodsReducer,
    users: UsersReducer
});

export default allReducers;