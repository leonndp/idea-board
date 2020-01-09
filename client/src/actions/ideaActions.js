import axios from 'axios'
import { GET_IDEAS, ADD_IDEA, REMOVE_IDEA, UPDATE_IDEA, IDEAS_LOADING } from './types'

export const getIdeas = () => {
    return {
        type: GET_IDEAS
    }
}

export const addIdea = idea => {
    return {
        type: ADD_IDEA,
        payload: idea
    }
}

export const REMOVE_IDEA = id => {
    return {
        type: REMOVE_IDEA,
        payload: id
    }
}

export const UPDATE_IDEA = (id, updates) => {
    return {
        type: UPDATE_IDEA,
        payload: {
            id,
            updates
        }
    }
}