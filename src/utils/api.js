import {
    _getUsers,
    _getQuestions,
    _saveQuestion,
    _saveQuestionAnswer
  } from '../_DATA';
  
  export default function getInitialData () {
    return Promise.all([
      _getUsers()
    ]).then(([users]) => ({
      users
      
    }))
  }

  export function saveQuestions (question) {
    return Promise.all([
      _saveQuestion(question)
    ]).then(([formattedQuestion]) => ({
      formattedQuestion
      
    }))
  }
  
  
  