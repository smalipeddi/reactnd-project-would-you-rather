import React, { Component } from 'react';
import { connect } from 'react-redux'
import { useState, useEffect } from 'react';
import { login, receiveUsers, setAuthedUser } from '../../redux';
import Navigation from '../Navigation/Navigation'
import { useDispatch, useSelector } from 'react-redux'

import getInitialData from "../../utils/api";
import { timers } from 'jquery';
export const SET_AUTHED_USER = 'SET_AUTHED_USER'
export const RECEIVE_USERS = 'RECEIVE_USERS'

function LeaderBoard(props) {

  const dispatch = useDispatch()
  const [list, setList] = useState([]);

  return (<div id="users">
    <Navigation />
    {props.authedUser ? ( <h1> leader baord is here</h1>) : (<div> Please login to view he leader board</div>)}
   
  </div>)
}

// AppContainer.js
function mapStateToProps(state) {
  return {
    users: state.users,
    authedUser: state.authedUser,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setAuthedUser: () => dispatch(setAuthedUser)
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(LeaderBoard)