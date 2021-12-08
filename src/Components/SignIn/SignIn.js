import React, { Component } from 'react';
import { connect } from 'react-redux'
import { useState, useEffect } from 'react';
import { login, setAuthedUser} from '../../redux';
import { useDispatch, useSelector } from 'react-redux'

import getInitialData from "../../utils/api";
export const SET_AUTHED_USER = 'SET_AUTHED_USER'
export const RECEIVE_USERS = 'RECEIVE_USERS'

function SignIn(props) {

const authedUser = useSelector((state) => state.authedUser)

  const dispatch = useDispatch()
  const [list, setList] = useState([]);
    console.log("nav props",props);
    console.log(props.authedUser);
    
    let handleChange = (e) => {
      console.log(e.target.value);
      console.log(props.authedUser);
      dispatch(setAuthedUser(e.target.value))
    }

    let handleSubmit = () => {
       dispatch(login)
    }

    useEffect(() => {
      let mounted = true;
      const users = getInitialData()
        .then(users => {
          if (mounted) {
            setList(users)
          }
        })
      return () => mounted = false;
    }, []);

  const names = Object.values(list);
  
  names.forEach(n => {
      Object.values(n).forEach(details => {
      console.log(details);
      var option = document.createElement("option");
      option.text = details.name
      option.value = details.id
      var select = document.getElementById("select");
      select.appendChild(option);
    })
  })

  return (<div id="users">
    <select id="select" onChange={handleChange}>
    </select>
    <button onClick={handleSubmit}> SUBMIT </button>
  </div>)
}

// AppContainer.js
function mapStateToProps({ user, users , authedUser, isLoggedIn}) {
  return {
    user: user,
    users: users,
    authedUser : authedUser,
    isLoggedIn: isLoggedIn
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setAuthedUser: () => dispatch(setAuthedUser),
    login: () => dispatch(login)
  }
};

export default connect(mapStateToProps,mapDispatchToProps)(SignIn);