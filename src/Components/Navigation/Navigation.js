import React from 'react';
import '../../App.css';
import NewQueston from "../NewQuestion/newQuestion";
import SignIn from "../SignIn/SignIn";
import LeaderBoard from "../LeaderBoard/LeaderBoard"
import { connect } from 'react-redux'
import { logout,login,  setAuthedUser, userLoginStatus} from '../../redux';
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import {
  Routes,
  Route,
  Link
} from "react-router-dom";


function Navigation(props) {
  const dispatch = useDispatch()
  const navigate = useNavigate();

    const handleLogout = () => {
      dispatch(logout(true))
      navigate('/')
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
function mapStateToProps({ users , authedUser, isLoggedIn}) {
  return {
    authedUser : authedUser,
    userLoginStatus: userLoginStatus
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setAuthedUser: () => dispatch(setAuthedUser),
    logout: () => dispatch(logout)
  }
};


export default connect(mapStateToProps,mapDispatchToProps)(Navigation)