import React from 'react';
import '../../App.css';
import NewQueston from "../NewQuestion/newQuestion";
import SignIn from "../SignIn/SignIn";
import LeaderBoard from "../LeaderBoard/LeaderBoard"
import { connect } from 'react-redux'
import { login, logout, setAuthedUser} from '../../redux';
import { useDispatch, useSelector } from 'react-redux'


import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


function Navigation(props) {
  const dispatch = useDispatch()
  console.log("nav props",props);

    const handleLogout = () => {
      dispatch(logout)

    }

  
    return (
      <div id="nav">
        <Router>
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
        </Router>
        <div >
          <div className="userName" >  {props.authedUser} </div>
          <button className="logout" onClick={handleLogout}> LOGOUT </button>
        </div>
      </div>
    )
  
}
// AppContainer.js
function mapStateToProps({ users , authedUser, isLoggedIn}) {
  return {
    authedUser : authedUser,
    isLoggedIn: isLoggedIn
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  
    setAuthedUser: () => dispatch(setAuthedUser),
    login: () => dispatch(login),
    logout: () => dispatch(logout)
  }
};


export default connect(mapStateToProps,mapDispatchToProps)(Navigation)