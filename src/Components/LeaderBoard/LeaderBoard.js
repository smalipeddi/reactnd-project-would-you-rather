import React, { Component } from 'react';
import { connect } from 'react-redux'
import { useState, useEffect } from 'react';
import { login, receiveUsers, setAuthedUser } from '../../redux';
import Navigation from '../Navigation/Navigation'
import { useDispatch, useSelector } from 'react-redux'

import getInitialData from "../../utils/api";
export const SET_AUTHED_USER = 'SET_AUTHED_USER'
export const RECEIVE_USERS = 'RECEIVE_USERS'

function LeaderBoard(props) {

  const dispatch = useDispatch()
  const [list, setList] = useState([]);

  return (<div id="users">
    <Navigation />
    <h1> leader baord is here</h1>
  </div>)
}

// AppContainer.js
function mapStateToProps({ user, users, authedUser, isLoggedIn }) {
  return {
    users: users,
    authedUser: authedUser,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setAuthedUser: () => dispatch(setAuthedUser)
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(LeaderBoard)