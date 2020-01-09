import { GET_IDEAS, ADD_IDEA, REMOVE_IDEA, UPDATE_IDEA, IDEAS_LOADING } from '../actions/type'

const initialState = {
    ideas: [],
    loading: false
}

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_IDEAS:
            return {
                ...state,
                ideas: action.payload,
                loading: false
            }

        case ADD_IDEA:
            return {
                ...state,
                ideas: [
                    ...state.ideas,
                    action.payload
                ]
            }

        case REMOVE_IDEA:
            return {
                ...state,
                ideas: state.ideas.filter(idea => idea.id !== action.payload)
            }

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

        case ITEMS_LOADING:
            return {
                ...state,
                loading: true
            }

        default:
            return state

    }
}