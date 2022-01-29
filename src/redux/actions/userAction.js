import { GET_USERS_REQUEST } from "../types";
export const getUsers = (users) => {
    return {
        type: GET_USERS_REQUEST,
        payload: users,
    }
}