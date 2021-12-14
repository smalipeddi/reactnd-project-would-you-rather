import { combineReducers, createStore } from 'redux';
import * as API from "./_DATA"
import middleware from "./Middleware"

export const SET_AUTHED_USER = 'SET_AUTHED_USER'
export const RECEIVE_USERS = 'RECEIVE_USERS'
export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const USER_LOGIN = 'USER_LOGIN'
export const USER_LOGOUT = 'USER_LOGOUT'
export const ADD_OPTION1 = 'ADD_OPTION1'
export const ADD_OPTION2 = 'ADD_OPTION2'
export const ADD_QUESTION = 'ADD_QUESTION'
export const SAVE_QUESTION = 'SAVE_QUESTION'
export const SAVE_POLL = 'SAVE_POLL'
export const SHOW_QUESTION = 'SHOW_QUESTION'
export const SAVE_QUESTION_ANSWER = 'SAVE_QUESTION_ANSWER'


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

export function receiveQuestions(questions) {
  return{
    type: RECEIVE_QUESTIONS,
    questions

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

export function addQuestion( q1,q2 ,authedUser) {
  return {
    type: ADD_QUESTION,
    payload: [q1,q2, authedUser]
  }
}

export function saveQuestion1(question) {
  return {
    type: SAVE_QUESTION,
    question
  }
}

export function saveQuestionAnswer1(authedUser,qid,question) {
  return {
    type: SAVE_QUESTION_ANSWER,
    payload: [authedUser,qid,question]
  }
}

/**********************  REDUCERS  *************************/
// reducers

export const saveQuestionFromPoll = (state = {}, action) => {
  switch (action.type) {
    case ADD_QUESTION:
      return {
        ...state,
        ...state.questions,action
      }
    default:
      return state
  }
}

export const addQuestionbyUser = (state = {}, action) => {
  switch (action.type) {
    case ADD_QUESTION:
      return {
        action
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

export const questions = (state = {} , action) => {
  switch(action.type) {
    case RECEIVE_QUESTIONS:
      return {
        ...state, 
        ...action.questions
      }
    default:
      return state
  }
}

export const question = (state = {}, action) => {
  switch(action.type) {
    case SAVE_QUESTION:
      return {
        ...state,
        ...action.question
      }
    default:
      return state
  }
}

export const savePollQuestionAnswer = (state={}, action) => {
  switch(action.type) {
    case SAVE_QUESTION_ANSWER:
      return {
        question
      }
    default:
      return {
        state
      } 
  }
}

export function getUsers() {
  return(dispatch) => {
    return API._getUsers.then(users => {
      dispatch(receiveUsers(users))
    })
  }
}

export function getQuestions() {
  return(dispatch) => {
    return API._getQuestions.then(questions => {
      dispatch(receiveQuestions(questions))
    })
  }
}

export function saveQuestion(question) {
  return(dispatch) => {
    return API._saveQuestion(question).then(savedQuestion => {
      dispatch(saveQuestion1(savedQuestion))
    })
  }
}

export function saveQuestionAnswer(authedUser, qid, answer) {
  return(dispatch) => {
    return API._saveQuestionAnswer(authedUser,qid,answer).then(savedQuestionAnswer => {
      console.log("RESULT", savedQuestionAnswer)
      dispatch(saveQuestionAnswer1(savedQuestionAnswer))
    })
  }
} 



//thunk to save question
export function handleSaveQuestion(q) {
  return (dispatch) => {
    return saveQuestion(q).then(formattedQuestion => {
      dispatch(saveQuestion1(formattedQuestion));
    })
  }
}


//export default handleInitialData;

export const reducers = combineReducers({

  users,
  questions,
  question,
  authedUser,
  userLoginStatus,
  savePollQuestionAnswer,
});

// store.js
export function configureStore(initialState = {}) {
  const store = createStore(reducers, middleware);
  return store;
}

export const store = configureStore();
