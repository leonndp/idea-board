import { GET_IDEAS, ADD_IDEA, REMOVE_IDEA, UPDATE_IDEA, IDEAS_LOADING } from '../actions/types'

const ideasReducerDefaultState = {
    ideas: [],
    loading: false
}

export default (state = ideasReducerDefaultState, action) => {
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
                ideas: state.ideas.filter(idea => idea._id !== action.payload)
            }

        case UPDATE_IDEA:
            return {
                ...state,
                ideas: state.ideas.map(idea => {
                    if (idea._id === action.payload.id) {
                        return {
                            ...idea,
                            ...action.payload.updates
                        }
                    } else {
                        return idea
                    }
                })
            }

        // case IDEAS_LOADING:
        //     return {
        //         ...state,
        //         loading: true
        //     }

        default:
            return state

    }
}