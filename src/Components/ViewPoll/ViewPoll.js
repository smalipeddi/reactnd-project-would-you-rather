import React, { useState } from "react";
import Navigation from "../Navigation/Navigation";
import { connect, useDispatch } from "react-redux";
import { useSelector } from 'react-redux'
import { questions, question, users, authedUser, saveQuestionAnswer } from '../../redux'
import { useLocation, useNavigate } from 'react-router-dom'


function ViewPoll(props) {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const authedUser = useSelector((state) => state.authedUser)
  //get user objects - array of users
  const userObjects = useSelector((state) => state.users)

  const users = Object.values(userObjects)
  // get the user avatar based on the author 

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
      alert(`submitting ${options}`)
      dispatch(saveQuestionAnswer(authedUser, qid, options))
      navigate('/home')
    }

  }

  return (
    <div>
      <Navigation />
     
      <div className="card" >
                <div className="author"> {from.author} says: </div>
                <div className="question">
                <img src={userObjects[from.author].avatarURL} width="100" height="120" />
                    <div className="question-col">
                    <form className="question-options" onSubmit={onSubmitQuestion}>
            <input defaultChecked onChange={(e) => setName(e.currentTarget.value)} type="radio" name="options" value={from.optionOne.text} />{from.optionOne.text}
            <input onChange={(e) => setName(e.currentTarget.value)} type="radio" name="options" value={from.optionTwo.text} />{from.optionTwo.text}
            <button className="btn btn-primary"> Submit</button>
          </form>
                    </div>
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
