import { USER_LOGIN, USER_LOGOUT } from '../Actions/login';
const initialState = {
    isLoggedIn : false,
    users: {} , 
    authedUser: '' 
}

const login = (state = initialState, action) => {
    switch (action.type) {
      case USER_LOGIN:
        return {
          ...state,
          isLoggedIn: !state.isLoggedIn
        };
      case USER_LOGOUT:
        return {
          ...state,
          isLoggedIn: !state.isLoggedIn
        };
      default:
        return state
    }
  }

  export default login

