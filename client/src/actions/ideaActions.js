import axios from 'axios'
import { GET_IDEAS, ADD_IDEA, REMOVE_IDEA, UPDATE_IDEA, IDEAS_LOADING } from './types'

export const addIdea = (idea) => ({
    type: ADD_IDEA,
    payload: idea
})

export const removeIdea = (id) => ({
    type: REMOVE_IDEA,
    payload: id
})

export const updateIdea = (id, updates) => ({
    type: UPDATE_IDEA,
    payload: {
        id,
        updates
    }
})

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