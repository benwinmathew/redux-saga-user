import { GET_USERS_REQUEST, GET_USERS_SUCCESS, GET_USERS_FAILED } from "../types";

const initialState = {
    users: [],
    loading: '',
    error: null
}

export default function users(state = initialState, action) {
    switch(action.type) {
        case GET_USERS_REQUEST:
            return{
                ...state,
                loading: true
            }
        case GET_USERS_SUCCESS:
            return{
                ...state,
                loading: false,
                users: action.users
            }
        case GET_USERS_FAILED:
            return{
                ...state,
                loading: false,
                error: action.messege
            }
        default:
            return state
    }

}