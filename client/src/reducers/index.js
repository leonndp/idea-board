import { combineReducers } from 'redux';
import ideasReducer from './ideasReducer'
import filtersReducer from './filtersReducer'
import authReducer from './authReducer'

export default combineReducers({
    ideas: ideasReducer,
    filters: filtersReducer,
    auth: authReducer
});