import React from 'react';
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Navigation from '../Navigation/Navigation'
import { Navigate } from 'react-router-dom'

/** 
 * Leaderboard Component that displays leader board indicating the users, with the asked andn answered question swith score
 *  
 * */

function LeaderBoard(props) {
  // get the author of the question , which is user 
  const questions = useSelector((state) => state.questions)
  //get user objects - array of users
  const userObjects = useSelector((state) => state.users)

  const users = Object.values(userObjects)
  // get the user avatar based on the author 

  return (<div>
    <Navigation />

    {users.map(user => (
      <div className="card card-info" key={user.id}>

        <div className="question">
          <img src={user.avatarURL} width="100" height="120" />
          <div className="questions">
            <div className="question-col padding">
              Answered Questions <p className="center">{Object.keys(user.answers).length} </p>
            </div>
            <div className="question-col padding">
              Created Questions <p className="center">{user.questions.length}</p>
            </div>
          </div>

          <div className="question-col padding">
            <button className="btn btn-primary">Score</button>
            <div className="padding"> {Object.keys(user.answers).length + user.questions.length }</div>
          </div>


        </div>
      </div>

    ))}
  </div>)
}

export default LeaderBoard