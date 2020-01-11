import { SET_TEXT_FILTER, SORT_BY_DATE_ASCENDING, SORT_BY_DATE_DESCENDING, SORT_BY_NAME_ASCENDING, SORT_BY_NAME_DESCENDING } from '../actions/types'

const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date',
    order: 'descending',
}

export default (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        case SET_TEXT_FILTER:
            return {
                ...state,
                text: action.payload
            }

        case SORT_BY_DATE:
            return {
                ...state,
                sortBy: 'date',
                order: 'descending'
            }

        case SORT_BY_NAME:
            return {
                ...state,
                sortBy: 'name',
                order: 'ascending'
            }

        case ORDER_ASCENDING:
            return {
                ...state,
                order: 'ascending'
            }

        case ORDER_DESCENDING:
            return {
                ...state,
                order: 'descending'
            }

        default:
            return state

    }
}