import { combineReducers, createStore } from 'redux';
//import { RECEIVE_USERS } from '../Actions/users';
export const SET_AUTHED_USER = 'SET_AUTHED_USER'
export const RECEIVE_USERS = 'RECEIVE_USERS'


// actions.js
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


export const reducers = combineReducers({
  user,
  users,
  authedUser,
});

// store.js
export function configureStore(initialState = {}) {
  const store = createStore(reducers, initialState);
  return store;
}

export const store = configureStore();
