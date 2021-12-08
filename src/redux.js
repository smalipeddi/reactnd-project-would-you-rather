import { combineReducers, createStore , applyMiddleware } from 'redux';

import middleware  from "./Middleware"
import getInitialData  from './utils/api'

export const SET_AUTHED_USER = 'SET_AUTHED_USER'
export const RECEIVE_USERS = 'RECEIVE_USERS'
const AUTHED_ID = 'tylermcginnis';


// actions.js

export const USER_LOGIN = 'USER_LOGIN'
export const USER_LOGOUT = 'USER_LOGOUT'


const initialState = {
    isLoggedIn : false,
    users: {} , 
    authedUser: '' 
}




export function login (isLoggedIn) {
    return {
      type: USER_LOGIN,
      isLoggedIn,
    }
}

export function logout (isLoggedIn) {
    return {
      type: USER_LOGOUT,
      isLoggedIn,
    }
}



export const signInUser = user => ({
  type: 'USER_SIGNIN',
  user,
});

export const signOutUser = () => ({
  type: 'USER_SIGNOUT',
});


export function setAuthedUser (id) {
    return {
        type: SET_AUTHED_USER,
        id
    }
}

export function receiveUsers(users) {
    return {
        type : RECEIVE_USERS,
        users
    }
}

// reducers.js


const userLogginStatus = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN:
      return {
        ...state,
        isLoggedIn: true
      };
    case USER_LOGOUT:
      return {
        ...state,
        isLoggedIn: false
      };
    default:
      return state
  }
}





export const user = (state = {}, action) => {
  switch (action.type) {
    case 'USER_SIGNIN':
      return action.user;
    case 'USER_SIGNOUT':
      return {};
    default:
      return state;
  }
};

export const authedUser  = (state = null , action) => {
  switch(action.type) {
      case SET_AUTHED_USER: 
          return action.id
      default: 
          return state
  }
}

export const users = (state = {} , action) => {
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

//thunk for asynchonous data access
export function handleInitialData () {
    return (dispatch) => {
        return getInitialData().then(users => {
     
         dispatch(receiveUsers(users));
         dispatch(setAuthedUser(AUTHED_ID));
        })
    }
}

export default handleInitialData;

export const reducers = combineReducers({
  user,
  users,
  authedUser,
  userLogginStatus
});

// store.js
export function configureStore(initialState = {}) {
  const store = createStore(reducers, middleware);
  return store;
}

export const store = configureStore();
