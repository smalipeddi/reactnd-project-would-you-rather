import loginAction from '../Actions/loginActions'
const initialState = {
    isLoggedIn : false,
    users: {} , 
    authedUser: '' 
}

const loginReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'USER_LOGIN':
        return {
          ...state,
          isLoggedIn: !state.isLoggedIn
        };
      case 'USER_LOGOUT':
        return {
          ...state,
          isLoggedIn: !state.isLoggedIn
        };
      default:
        return state
    }
  }

  export default loginReducer

