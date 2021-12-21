import React, { useState } from "react";
import Navigation from "../Navigation/Navigation";
import { connect, useDispatch } from "react-redux";
import { useSelector } from 'react-redux'
import { saveQuestionAnswerAfterPoll } from '../../redux'
import { useLocation, useNavigate } from 'react-router-dom'

/** 
 * View Poll Component displays user with option to select the option and save the question 
 * */

function ViewPoll(props) {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const authedUser = useSelector((state) => state.authedUser)
  //get user objects - array of users
  const userObjects = useSelector((state) => state.users)

  const location = useLocation()
  const { from } = location.state
  const [options, setName] = useState("")

  let onSubmitQuestion = (e) => {

    e.preventDefault();
    console.log(e);
    const qid = from.id

    // select the checked radio button 
    const options = document.querySelector('input[name="options"]:checked').value;

    if (options) {
      dispatch(saveQuestionAnswerAfterPoll(authedUser, qid, options))
      navigate('/home')
    }

  }

  return (
    <div>
      <Navigation />

      <div className="card center-card" >
        <div className="author"> {from.author} says: </div>
        <div className="question">
          <img src={userObjects[from.author].avatarURL}  alt="avatar" width="100" height="120" />
          <div className="question-col">
            <form className="question-options" onSubmit={onSubmitQuestion}>
              <input defaultChecked onChange={(e) => setName(e.currentTarget.value)} type="radio" name="options" value="optionOne" />{from.optionOne.text}
              <input onChange={(e) => setName(e.currentTarget.value)} type="radio" name="options" value="optionTwo" />{from.optionTwo.text}
              <button className="btn btn-primary"> Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    saveQuestionAnswerAfterPoll

  }
}

export default connect(null, mapDispatchToProps)(ViewPoll);
