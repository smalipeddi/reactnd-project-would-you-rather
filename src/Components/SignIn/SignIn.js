import React, { Component } from 'react';
import { connect } from 'react-redux'
import { useState, useEffect } from 'react';
import { login, logout, receiveUsers, setAuthedUser, users, userLoginStatus } from '../../redux';
import { useDispatch, useSelector } from 'react-redux'
import Navigation from "../Navigation/Navigation"
import getInitialData from "../../utils/api"
import { useNavigate } from 'react-router-dom'
export const SET_AUTHED_USER = 'SET_AUTHED_USER'


function SignIn(props) {

  const authedUser = useSelector((state) => state.authedUser)
  const isLoggedIn = useSelector((state) => state.isLoggedIn)
  const dispatch = useDispatch()
  const [list, setList] = useState([]);
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
      .then(users => {
        if (mounted) {
          setList(users.users)
          dispatch(receiveUsers(users))
        }
      })
    return () => mounted = false;
  }, []);

  return (<div className="container">
    
    <div className="jumbotron">
      <h1> Welcone to the Would you rather App.</h1>
      < h2> Please Sign In to continue</h2>
    </div>
    <select id="select" className="form-select" defaultValue={'none'}
        onChange={handleChange}>
      {Object.keys(list).map(key => <option key={key} value={key}>{list[key].name}</option>)}
    </select>
    <button onClick={handleSubmit} id="submit-button" type="button" className="btn btn-primary"> SUBMIT </button>
  </div>)
}

// AppContainer.js
function mapStateToProps({ users, authedUser, isLoggedIn }) {
  return {
    users: users,
    authedUser: authedUser,
    userLoginStatus: userLoginStatus
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    users,
    login,
    setAuthedUser
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);