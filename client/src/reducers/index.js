import { combineReducers } from 'redux';
import ideasReducer from './ideasReducer'
import filtersReducer from './filtersReducer'

export default combineReducers({
    ideas: ideasReducer,
    filters: filtersReducer
});