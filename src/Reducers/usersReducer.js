import { RECEIVE_USERS } from '../Actions/users';
const users = (state = {} , action) => {
    switch(action.type) {
        case RECEIVE_USERS: 
        return {
            ...state,
            ...action.users
        }
        default: 
        return state
    }
}
export default users