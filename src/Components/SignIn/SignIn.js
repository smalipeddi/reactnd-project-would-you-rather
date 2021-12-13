import React, { Component } from 'react';
import { connect } from 'react-redux'
import { useState, useEffect } from 'react';
import { login, logout, receiveUsers, setAuthedUser, users, questions,serLoginStatus, receiveQuestions } from '../../redux';
import { useDispatch, useSelector } from 'react-redux'
import Navigation from "../Navigation/Navigation"
import getInitialData  from "../../utils/api"
import getQuestions  from "../../utils/api"
import { useNavigate } from 'react-router-dom'
export const SET_AUTHED_USER = 'SET_AUTHED_USER'


function SignIn(props) {

  const authedUser = useSelector((state) => state.authedUser)
  const isLoggedIn = useSelector((state) => state.isLoggedIn)
  const dispatch = useDispatch()
  const [userList, setList] = useState([]);
  const [questionList, setQuestions] = useState([])
  const navigate = useNavigate();

  let handleChange = (e) => {
    dispatch(setAuthedUser(e.target.value));
  }


  let handleSubmit = (e) => {
  
    if(authedUser) {
      dispatch(login(true))
      navigate('/home')
    } else {
       alert("select user");
    }
  }

  useEffect(() => {
    let mounted = true;
    getInitialData()
      .then(data => {
        console.log("sunny",data);
        if (mounted) {
          setList(data.users)
          setQuestions(data.questions)
          dispatch(receiveUsers(data.users))
          dispatch(receiveQuestions(data.questions))
        }
      })
    return () => mounted = false;
  }, []);

  // useEffect(() => {
  //   let mounted = true;
  //   getQuestions()
  //     .then(questions => {
  //       if (mounted) {
  //         setQuestions(questions)
  //         dispatch(receiveQuestions(questions))
  //         console.log(questions);
  //       }
  //     })
  //   return () => mounted = false;
  // }, []);

  return (<div className="container">
    
    <div className="jumbotron">
      <h1> Welcome to the Would you rather App.</h1>
      < h2> Please Sign In to continue</h2>
    </div>
    <select id="select" className="form-select" defaultValue={'none'}
        onChange={handleChange}>
          <option key="none" vaue="none"> Select User </option>
      {Object.keys(userList).map(key => <option key={key} value={key}>{userList[key].name}</option>)}
    </select>
    <button onClick={handleSubmit} id="submit-button" type="button" className="btn btn-primary"> SUBMIT </button>
  </div>)
}

// AppContainer.js
function mapStateToProps(state) {
  return {
    users: state.users,
    questions: state.questions,
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