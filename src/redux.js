import { combineReducers, createStore, applyMiddleware } from 'redux';
import middleware from "./Middleware"
import getInitialData from './utils/api'
import saveQuestions from './utils/api'

export const SET_AUTHED_USER = 'SET_AUTHED_USER'
export const RECEIVE_USERS = 'RECEIVE_USERS'
export const USER_LOGIN = 'USER_LOGIN'
export const USER_LOGOUT = 'USER_LOGOUT'
export const ADD_OPTION1 = 'ADD_OPTION1'
export const ADD_OPTION2 = 'ADD_OPTION2'
export const ADD_QUESTION = 'ADD_QUESTION'
export const SAVE_QUESTION = 'SAVE_QUESTION'


const AUTHED_ID = 'tylermcginnis';

// actions.js

export function login(isLoggedIn) {
  return {
    type: USER_LOGIN,
    isLoggedIn,
  }
}

export function logout(isLoggedIn) {
  return {
    type: USER_LOGOUT,
    isLoggedIn,
  }
}

export function setAuthedUser(id) {
  return {
    type: SET_AUTHED_USER,
    id
  }
}

export function receiveUsers(users) {
  return {
    type: RECEIVE_USERS,
    users
  }
}

export function getFirstOption(q1) {
  return {
    type: ADD_OPTION1,
    q1
  }
}

export function getSecondOption(q2) {
  return {
    type: ADD_OPTION2,
    q2
  }
}

export function addQuestion( q1,q2 ) {
  return {
    type: ADD_QUESTION,
    payload: [q1,q2]
  }
}

export function saveQuestion(question) {
  return {
    type: SAVE_QUESTION,
    question
  }
}


// reducers
const initialNewQuestionState = {
  firstOption: "",
  secondOption: "",
  question: [],
  authedUser: ''
};

export const Question = (state = initialNewQuestionState, action) => {
  switch (action.type) {
    case 'ADD_OPTION1':
      return {
        ...state,
        ...state.firstOption = action.q1
      }
    case 'ADD_OPTION2':
      return {
        ...state,
        ...state.secondOption = action.q2
      }
    case 'ADD_QUESTION':
      const question = {...state.question, question}
      return {
       
        ...state.question
        
      }
    default:
      return state
  }
}

export const userLoginStatus = (state = null, action) => {
  switch (action.type) {
    case USER_LOGIN:
      return action.isLoggedIn
    case USER_LOGOUT:
      return !(action.isLoggedIn)
    default:
      return state
  }
}

// export const user = (state = {}, action) => {
//   switch (action.type) {
//     case 'USER_SIGNIN':
//       return action.user;
//     case 'USER_SIGNOUT':
//       return {};
//     default:
//       return state;
//   }
// };

export const authedUser = (state = null, action) => {
  switch (action.type) {
    case SET_AUTHED_USER:
      return action.id
    default:
      return state
  }
}

export const users = (state = {}, action) => {
  switch (action.type) {
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
export function handleInitialData() {
  return (dispatch) => {
    return getInitialData().then(users => {
      dispatch(receiveUsers(users));
      dispatch(setAuthedUser(AUTHED_ID));
      dispatch(userLoginStatus(false))
    })
  }
}

//thunk to save question 

export function handleSaveQuestion() {
  return (dispatch) => {
    return saveQuestions().then(formattedQuestion => {
      dispatch(saveQuestion(formattedQuestion));
    })
  }
}

export default handleInitialData;

export const reducers = combineReducers({

  users,
  authedUser,
  userLoginStatus,
  Question
});

// store.js
export function configureStore(initialState = {}) {
  const store = createStore(reducers, middleware);
  return store;
}

export const store = configureStore();
