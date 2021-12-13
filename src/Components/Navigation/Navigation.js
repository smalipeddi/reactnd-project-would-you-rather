import React from 'react';
import '../../App.css';import { connect } from 'react-redux'
import { logout,login,  setAuthedUser, userLoginStatus} from '../../redux';
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import {
  Routes,
  Route,
  Link
} from "react-router-dom";

const AUTHED_USER= null

function Navigation(props) {
  const dispatch = useDispatch()
  const navigate = useNavigate();

    const handleLogout = () => {
      // reset authed user
      dispatch(setAuthedUser(AUTHED_USER));
      dispatch(logout(true))
      navigate('/SignIn')
    }

    return (
    
      <div id="nav">
          <div>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/add">New Question</Link>
              </li>
              <li>
                <Link to="/leaderboard">Leader Board</Link>
              </li>
            </ul>
            <hr />
          </div>
          {props.userLoginStatus? (
        <div>
        <div className="userName" > {props.authedUser} </div>
          <button className="logout" onClick={handleLogout}> LOGOUT </button> 
        </div>): ''}
      </div>
    )
  
}
// AppContainer.js
function mapStateToProps(state) {
  return {
    authedUser : state.authedUser,
    userLoginStatus: state.userLoginStatus
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setAuthedUser: () => dispatch(setAuthedUser),
    logout: () => dispatch(logout)
  }
};


export default connect(mapStateToProps,mapDispatchToProps)(Navigation)