import { GET_IDEAS, ADD_IDEA, REMOVE_IDEA, UPDATE_IDEA, IDEAS_LOADING } from '../actions/types'

const ideasReducerDefaultState = [
    {
        id: 1,
        title: 'wwwww',
        content: '111'
    },
    {
        id: 2,
        title: 'vvvv',
        content: '222'
    },
    {
        id: 3,
        title: 'sdfsdf',
        content: '33333'
    }
];

export default (state = ideasReducerDefaultState, action) => {
    switch (action.type) {
        case ADD_IDEA:
            return [
                ...state,
                action.payload
            ]

        case REMOVE_IDEA:
            return state.filter(({ id }) => id !== action.payload)

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