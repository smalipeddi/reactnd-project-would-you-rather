import React from 'react';
import '../../App.css';
import NewQueston from "../NewQuestion/newQuestion";
import SignIn from "../SignIn/SignIn";
import LeaderBoard from "../LeaderBoard/LeaderBoard"

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";

class Navigation extends React.Component {
    render() {
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
                    <div className="userName" >  user loggedIn </div>
                    <button className="logout"> LOGOUT </button>
                </div>
                
            </div>
        )
    }
}

export default Navigation