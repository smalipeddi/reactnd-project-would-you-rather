import React from 'react';
import '../../App.css'; 
import { connect } from 'react-redux'
import { logout, setAuthedUser } from '../../redux';
import UserInfo from  "../UserInfo/UserInfo"
import { Link } from "react-router-dom";

/** 
 * Navigation Component that displays the three navigation items - Home , New Question and  LeaderBoard 
 *  
 * */

function Navigation(props) {
  
  return (
    <div className="container-fluid">
      <div >
        <div>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <ul className="nav">
              <li className="nav-item"> 
                <Link className="nav-link active" to="/home">Home</Link>
              </li>
              <li className="nav-item"> 
                <Link className="nav-link " to="/add">New Question</Link>
              </li>
              <li className="nav-item"> 
              <Link className="nav-link" to="/leaderboard">Leader Board</Link>
              </li>
            </ul>
            <hr />
          <UserInfo />
          </nav>
        </div>
      </div>
    </div>
  )

}
function mapStateToProps(state) {
  return {
    authedUser: state.authedUser,
    userLoginStatus: state.userLoginStatus
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setAuthedUser: () => dispatch(setAuthedUser),
    logout: () => dispatch(logout)
  }
};


export default connect(mapStateToProps, mapDispatchToProps)(Navigation)
