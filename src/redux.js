import { combineReducers, createStore } from 'redux';
import {_getUsers, _getQuestions, _saveQuestion, _saveQuestionAnswer } from  "./_DATA"
import middleware from "./Middleware"
import { createReducer } from '@reduxjs/toolkit'
import update from 'react-addons-update'

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
export const ADD_USER_QUESTION = 'ADD_USER_QUESTION'


/** ACTIONS  */

export function login(isLoggedIn) {
  return {
    type: USER_LOGIN,
    isLoggedIn,
  }
}

// new question 
export function addNewQuestion( opt1, opt2, authedUser) {
  return {
    type: ADD_QUESTION,
    opt1, opt2, authedUser
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

//QUESTIONS REDUCERS 

export function receiveQuestions(questions) {
  return{
    type: RECEIVE_QUESTIONS,
    questions

  }
}

// // just to save to the new poll page on unanswered section
export function saveQuestion(question) {
  return {
    type: SAVE_QUESTION,
    question
  }
}

 export function saveQuestionAnswer1(authedUser,qid,answer) {
  return {
    type: SAVE_QUESTION_ANSWER,
    authedUser,qid,answer
  }
}

/**********************  REDUCERS  *************************/
// reducers


export function getUsers() {
  return(dispatch) => {
    return _getUsers.then(users => {
      dispatch(receiveUsers(users))
    })
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
      case ADD_USER_QUESTION :
        return {
          ...state,
          [action.authedUser]: {
            ...state[action.authedUser],
            questions: state[action.authedUser].questions.concat([action.qid])
          }
        };  
    default:
      return state
  }
}

/********************************************************** */


export function getQuestions() {
  return(dispatch) => {
    return _getQuestions.then(questions => {
      dispatch(receiveQuestions(questions))
    })
  }
}

export function addUserNewQuestion (authedUser, qid) {
  return {
    type: ADD_USER_QUESTION,
    authedUser,
    qid
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

export const addNewQuestionReducer = ( state = {} , action )  => {
  switch(action.type) {
    case ADD_QUESTION:
        const { question } = action;
        return {
          ...state,
          [question.id]: question,
        };
    default:
      return state    
  }
}


export function saveNewQuestion(optionOneText, optionTwoText, authedUser){
  return (dispatch) => {
      
      return _saveQuestion({
          optionOneText,
          optionTwoText,
          authedUser
      })
      .then((question) => {
          dispatch(addNewQuestion(question));
          dispatch(addUserNewQuestion(authedUser, question.id))
      })
  }
}




// export function saveQuestionAnswer({authedUser, qid, answer}){
//   return(dispatch) => {
//     return API._saveQuestionAnswer(authedUser,qid,answer).then(savedQuestionAnswer => {
//       console.log("RESULT", savedQuestionAnswer)
//       dispatch(saveQuestionAnswer1({authedUser, qid, answer}))
//     })
//   }
// } 



// //thunk to save question
// export function handleSaveQuestion(q) {
//   return (dispatch) => {
//     return saveQuestion(q).then(formattedQuestion => {
//       dispatch(saveQuestion1(formattedQuestion));
//     })
//   }
// }


// initialState = {
//   "6ni6ok3ym7mf1p33lnez" :{
//     "id": "6ni6ok3ym7mf1p33lnez",
//     "author": "johndoe",
//     "timestamp": 1468479767190,
//     "optionOne": {
//         "votes": [],
//         "text": "become a superhero"
//     },
//     "optionTwo": {
//         "votes": [
//             "johndoe",
//             "sarahedo"
//         ],
//         "text": "become a supervillian"
//     }
//   }
// }

// // save question answer reducer using redux toolkit 
// const sqareducer = createReducer(initialState, {
//   UPDATE_ITEM: (state, action) => {
//     state.first.second[action.someId].fourth = action.someValue
//   }
// })



//export default handleInitialData;

export const reducers = combineReducers({

  users,
  questions,
  
  authedUser,
  userLoginStatus,
  addNewQuestionReducer
});

// store.js
export function configureStore(initialState = {}) {
  const store = createStore(reducers, middleware);
  return store;
}

export const store = configureStore();
