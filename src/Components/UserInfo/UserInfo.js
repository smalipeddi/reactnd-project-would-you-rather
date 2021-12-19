import React from 'react';
import '../../App.css'; 
import { connect } from 'react-redux'
import { logout, login, setAuthedUser } from '../../redux';
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'




  
function UserInfo(props) {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const authedUser = useSelector((state) => state.authedUser)
    const userLoginStatus = useSelector((state) => state.userLoginStatus)
    const AUTHED_USER = null
    let handleLogout = () => {

        // reset authed user
        dispatch(setAuthedUser(AUTHED_USER));
        dispatch(logout(true))
        navigate('/SignIn')
      }

  return (<div>
      {userLoginStatus ? (<div>
          <div>
              <span className="padding">{authedUser}</span>
              <button onClick={handleLogout} className="btn btn-primary">LOGOUT</button>
          </div>
      </div>) : (<div>nothing</div>)}
  </div>)

    
}

export default UserInfo
