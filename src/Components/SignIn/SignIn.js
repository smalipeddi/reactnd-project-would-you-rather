import React from 'react';
import { connect } from 'react-redux'
import { useState, useEffect } from 'react';
import { login, receiveUsers, setAuthedUser, users, questions, receiveQuestions } from '../../redux';
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import * as API from "../../_DATA"

export const SET_AUTHED_USER = 'SET_AUTHED_USER'

/** 
 * Sign In page is the entry point of this application . It allows user to login based on the user selecte din drop down option.
 * */


function SignIn(props) {

  const dispatch = useDispatch()
  const navigate = useNavigate();

  const authedUser = useSelector((state) => state.authedUser)
  const [userList, setList] = useState([]);
  const [questionList, setQuestions] = useState([])


  let handleChange = (e) => {
    dispatch(setAuthedUser(e.target.value));
  }

  let handleSubmit = (e) => {

    if (authedUser) {
      dispatch(login(true))
      navigate('/home')
    } else {
      alert("select user");
    }
  }

  useEffect(() => {
    let mounted = true;
    API._getUsers()
      .then(data => {
        if (mounted) {
          setList(data)
          dispatch(receiveUsers(data))
        }
      })
    return () => mounted = false;
  }, []);

  // home is a class component , so useEffect is used here to fetch all questions
  useEffect(() => {
    let mounted = true;
    API._getQuestions()
      .then(data => {
        if (mounted) {
          setQuestions(data)
          dispatch(receiveQuestions(data))
        }
      })
    return () => mounted = false;
  }, []);

  return (<div className="signin-wrapper">
   
    <div className="card question">
      <div className="card-body question-col">
        <h3> Welcome to the Would you Rather App.</h3>
        <h4> Please Sign In to continue</h4>
        <select id="select" className="form-select" defaultValue={'none'}
        onChange={handleChange}>
        <option key="none" vaue="none"> Select User </option>
        {Object.keys(userList).map(key => (<option key={key} value={key}>{userList[key].name}</option>))}
      </select>
      <button onClick={handleSubmit} id="submit-button" type="button" className="btn btn-primary button-margin"> SUBMIT </button>
      </div>
      </div>
</div>

  )
}

function mapStateToProps(state) {
  return {
    authedUser: state.authedUser,
    userLoginStatus: state.userLoginStatus
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    users,
    questions,
    login,
    setAuthedUser
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);