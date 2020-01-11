import { SET_TEXT_FILTER, SORT_BY_DATE, SORT_BY_NAME, ORDER_ASCENDING, ORDER_DESCENDING } from '../actions/types'

export const setTextFilter = (text = '') => ({
    type: SET_TEXT_FILTER,
    payload: text
})

export const sortByDate = () => ({
    type: SORT_BY_DATE
})

export const sortByName = () => ({
    type: SORT_BY_NAME
})

export const orderAscending = () => ({
    type: ORDER_ASCENDING
})

export const orderDescending = () => ({
    type: ORDER_DESCENDING
})