import { combineReducers, createStore } from 'redux';
import { _getUsers, _getQuestions, _saveQuestion, _saveQuestionAnswer } from "./_DATA"
import middleware from "./Middleware"

export const SET_AUTHED_USER = 'SET_AUTHED_USER'
export const RECEIVE_USERS = 'RECEIVE_USERS'
export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const USER_LOGIN = 'USER_LOGIN'
export const USER_LOGOUT = 'USER_LOGOUT'
export const ADD_QUESTION = 'ADD_QUESTION'
export const SAVE_QUESTION = 'SAVE_QUESTION'
export const SAVE_USER_ANSWER = 'SAVE_USER_ANSWER'
export const SAVE_QUESTION_ANSWER = 'SAVE_QUESTION_ANSWER'
export const SAVE_USER_NEW_QUESTION = 'SAVE_USER_NEW_QUESTION'


/**************************************************************************************** */
/**                    USER ACTIONS  AND REDUCERS                                          */
/**************************************************************************************** */

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

export function receiveUsers(users) {
  return {
    type: RECEIVE_USERS,
    users
  }
}

export function getUsers() {
  return (dispatch) => {
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


/**************************************************************************************** */
/**                    SET AUTHED USER ACTION AND REDUCERS                                       */
/**************************************************************************************** */

export function setAuthedUser(id) {
  return {
    type: SET_AUTHED_USER,
    id
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

/**************************************************************************************** */
/**                    QUESTION ACTIONS AND REDUCERS                                         */
/**************************************************************************************** */
export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions

  }
}

export function saveQuestion(question) {
  return {
    type: SAVE_QUESTION,
    question
  }
}

export function saveQuestionAnswer(authedUser, qid, answer) {
  return {
    type: SAVE_QUESTION_ANSWER,
    authedUser, qid, answer
  }
}

export const questions = (state = {}, action) => {
  switch (action.type) {

    case RECEIVE_QUESTIONS:
      return {
        ...state,
        ...action.questions
      }
    case SAVE_QUESTION:
      return {
        ...state,
        [action.question.id]: action.question
      }
      case SAVE_QUESTION_ANSWER: 
            return {
                ...state,
                [action.qid]: {
                    ...state[action.qid],
                    [action.answer]: {
                        ...state[action.qid][action.answer],
                        votes: state[action.qid][action.answer].votes.concat([action.authedUser])
                    }
                }
            }
    default:
      return state
  }
}

export function getQuestions() {
  return (dispatch) => {
    return _getQuestions.then(questions => {
      dispatch(receiveQuestions(questions))
    })
  }
}

/**************************************************************************************** */
/**                   USER - QUESTION ACTIONS AND REDUCERS                                         */
/**************************************************************************************** */

export function saveUserNewQuestion(authedUser, qid) {
  return {
    type: SAVE_USER_NEW_QUESTION,
    authedUser,
    qid
  }
}

export function saveUserAnswer (user, qid, answer) {
  return {
    type: SAVE_USER_ANSWER,
    user,
    qid,
    answer
  }
}

// add user question, the new question he asked, update th equestions array
export const users = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_USERS:
      return {
        ...state,
        ...action.users
      }
      case SAVE_USER_ANSWER :
            return {
              ...state,
              [action.user] : {
                ...state[action.user],
                answers : {
                  ...state[action.user].answers,
                  [action.qid] : action.answer
                }
              }
            }
    case SAVE_USER_NEW_QUESTION:
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

export function saveNewQuestion(optionOneText, optionTwoText, authedUser) {
  return (dispatch) => {

    // construct a question object to match to question object on _saveQuestion in API
    let question = {
      "optionOneText": optionOneText,
      "optionTwoText": optionTwoText,
      "author": authedUser
    }
    // pass the data to the API
    return _saveQuestion(question)
      .then((question) => {
        // update the questions array , which takes question id as key and question as value
        dispatch(saveQuestion(question));
        // add question to users questions array
        dispatch(saveUserNewQuestion(authedUser, question.id))
      })
  }
}

export function saveQuestionAnswerAfterPoll(authedUser, qid, options) {
   return(dispatch) => {
     const saveQA = {
       "authedUser": authedUser,
       "qid": qid,
       "answer": options
     }
      return _saveQuestionAnswer(saveQA)
      .then(() => {
        dispatch(saveQuestionAnswer(authedUser, qid, options))
        dispatch(saveUserAnswer(authedUser, qid, options))

      })
   }

}

/**************************************************************************************** */
/**                  COMBINE REDUCERS                                        */
/**************************************************************************************** */

export const reducers = combineReducers({

  users,
  questions,
  
  authedUser,
  userLoginStatus,
  saveQuestion,
  saveNewQuestion,
  saveUserNewQuestion,
  saveQuestionAnswerAfterPoll

});

/**************************************************************************************** */
/**                 CREATE STORE                                       */
/**************************************************************************************** */

export function configureStore(initialState = {}) {
  const store = createStore(reducers, middleware);
  return store;
}

export const store = configureStore();
