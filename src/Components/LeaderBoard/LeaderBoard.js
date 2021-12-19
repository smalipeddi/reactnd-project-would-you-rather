import React  from 'react';
import { Link } from 'react-router-dom'
import {useSelector} from 'react-redux'
import Navigation from '../Navigation/Navigation'
 
// will take the question and populate a ui with the two radio buttons which will vote 
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
            <div className="card" key={user.id}>
                
                <div className="question">
                    <img src={user.avatarURL} width="100" height="120" />
                    <div className="questions">
                    <div className="question-col padding">
                      Answered Questions <p className="center">5 </p>
                    </div>
                    <div className="question-col padding">
                      Created Questions <p className="center">5</p>
                    </div>
                    </div>
                    
                    <div className="question-col padding">
                      <button className="Basic outlined padding">Score</button>
                      <div className="padding"> 10</div>
                    </div>

                       
                    </div>
                </div>
            
        ))}
    </div>)
}

export default LeaderBoard