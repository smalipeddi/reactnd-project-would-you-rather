import React, { Component } from 'react';
import { connect } from 'react-redux'
import { useState, useEffect } from 'react';
import { login, logout, receiveUsers, setAuthedUser,  users, userLoginStatus } from '../../redux';
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
    dispatch(setAuthedUser(e.target.value))
  }

  let handleSubmit = (e) => {
    dispatch(login(true))
    navigate('/home')
  }

  useEffect(() => {
    let mounted = true;
    getInitialData()
      .then(users => {
        if (mounted) {
          setList(users)
          dispatch(receiveUsers(users))
        }
      })
    return () => mounted = false;
  }, []);

  const names = Object.values(list);

  var select = document.getElementById("select");

  names.forEach(n => {
    Object.values(n).forEach(details => {
      // Use the Option constructor: args text, value, defaultSelected, selected
      var option = new Option('text', 'value', false, false);

      // Use createElement to add an option:
      option = document.createElement('option');
      option.value = details.id
      option.text = details.name
      select.appendChild(option);
    })
  })

  return (<div className="container">
    <Navigation />
    <div className="jumbotron">
      <h1> Welcone to the Would you rather App.</h1>
      < h2> Please Sign In to continue</h2>
    </div>
    <select id="select" className="form-select" aria-label="Default select example" onChange={handleChange}>
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
    users: () => dispatch(users),
    login: () => dispatch(login),
    setAuthedUser: () => dispatch(setAuthedUser)
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);