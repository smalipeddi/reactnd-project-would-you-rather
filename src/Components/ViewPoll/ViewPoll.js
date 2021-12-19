import React , { useState } from "react";
import Navigation from "../Navigation/Navigation";
import { connect, useDispatch } from "react-redux";
import { useSelector } from 'react-redux'
import { questions, question, users, authedUser, saveQuestionAnswer } from '../../redux'
import { useLocation , useNavigate} from 'react-router-dom'
import {  setState } from 'react'

function ViewPoll(props) {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const authedUser = useSelector((state) => state.authedUser)
  const location = useLocation()
  const { from } = location.state
  const [optionOne, setOptionOne] = useState("")
  const [optionTwo, setOptionTwo] = useState("")
  
  let onSubmitQuestion = (e) => {
    e.preventDefault();
    const qid = from.id
    if(optionOne) {
      alert(`submitting ${optionOne}`)
      dispatch(saveQuestionAnswer(authedUser, qid , optionOne ))
      navigate('/home')
    } else {
      alert(`submitting ${optionTwo}`)
      dispatch(saveQuestionAnswer(authedUser, qid , optionTwo ))
      navigate('/home')
    }
   
  
  }

  return (

    <div>
      <Navigation />
      <div >{from.author} says: </div>
      <div className="question">
        <img src="../../images/first.jpg" width="100" height="120" />
        <div className="question-col">
          <span className="card-body">  Would you rather</span>
          <form className="question-options" onSubmit={onSubmitQuestion}>
            <input onChange={(e) => setOptionOne(e.target.value)} type="radio" name={optionOne} value={from.optionOne.text} />{from.optionOne.text}
            <input onChange={(e) => setOptionTwo(e.target.value)} type="radio" name={optionTwo} value={from.optionTwo.text} />{from.optionTwo.text}
            <button className="btn btn-primary"> Submit</button>
            
          </form>
        </div>
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return {
  
  }
}

function mapDispatchToProps(dispatch) {
  return {
   

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewPoll);
