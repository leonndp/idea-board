import { GET_IDEAS, ADD_IDEA, REMOVE_IDEA, UPDATE_IDEA, IDEAS_LOADING } from '../actions/types'

const ideasReducerDefaultState = []

export default (state = ideasReducerDefaultState, action) => {
    switch (action.type) {
        case GET_IDEAS:
            return state.concat(action.payload)
        case ADD_IDEA:
            return [
                ...state,
                action.payload
            ]

        case REMOVE_IDEA:
            return state.filter(idea => idea._id !== action.payload)

        case UPDATE_IDEA:
            return state.map(idea => {
                if (idea.id === action.payload.id) {
                    return {
                        ...idea,
                        ...action.payload.updates
                    }
                } else {
                    return idea
                }
            })

        // case IDEAS_LOADING:
        //     return {
        //         ...state,
        //         loading: true
        //     }

        default:
            return state

    }
}