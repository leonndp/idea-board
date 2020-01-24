import axios from 'axios'
import uuid from 'uuid'
import { GET_IDEAS, ADD_IDEA, REMOVE_IDEA, UPDATE_IDEA, IDEAS_LOADING } from './types'
import { tokenConfig } from './authActions'

export const getIdeas = () => (dispatch, getState) => {
    axios.get('/api/ideas', tokenConfig(getState))
        .then(res => dispatch({
            type: GET_IDEAS,
            payload: res.data
        }))
}

export const addIdea = (idea) => (dispatch, getState) => {
    axios.post('/api/ideas', idea, tokenConfig(getState))
        .then(res => dispatch({
            type: ADD_IDEA,
            payload: res.data
        }))
}

export const removeIdea = (id) => (dispatch, getState) => {
    axios.delete(`/api/ideas/${id}`, tokenConfig(getState))
        .then(res => dispatch({
            type: REMOVE_IDEA,
            payload: id
        }))
}

export const updateIdea = (id, updates) => (dispatch, getState) => {
    axios.put(`/api/ideas/${id}`, updates, tokenConfig(getState))
        .then(res => dispatch({
            type: UPDATE_IDEA,
            payload: {
                id,
                updates: res.data
            }
        }))
}

/* export const getIdeas = () => dispatch => {
    dispatch(setIdeasLoading());
    axios.get('/api/ideas/')
        .then(res => dispatch({
            type: GET_IDEAS,
            payload: res.data
        }))
}

export const removeIdea = (id) => dispatch => {
    axios.delete(`/api/ideas/${id}`, id)
        .then(res => dispatch({
            type: REMOVE_IDEA,
            payload: id
        }))
}

export const addIdea = (idea) => dispatch => {
    axios.post('/api/ideas', idea)
        .then(res => dispatch({
            type: ADD_IDEA,
            payload: res.data
        }))
}

export const setIdeasLoading = () => {
    return {
        type: IDEAS_LOADING
    }
} */