// combineReducers不再用rudux里的，而是redux-immutable里的，这样combineReducers里的对象就是一个immutable对象
// import {combineReducers} from 'redux';
import { combineReducers } from 'redux-immutable';
import { reducer as headerReducer } from '../layouts/header/store';
import { reducer as HomeReducer } from '../pages/home/store';
import { reducer as detailReducer } from '../pages/detail/store';
import { reducer as loginReducer } from '../pages/login/store';

const reducer = combineReducers({
    header: headerReducer,
    home: HomeReducer,
    detail: detailReducer,
    login: loginReducer
})

export default reducer
