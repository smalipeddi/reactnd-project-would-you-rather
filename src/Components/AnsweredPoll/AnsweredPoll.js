import React  from 'react';
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

/** 
 * Component that displays the un answered poll page
 * Will take the question and populate a ui with the two radio buttons which user can vote 
 *  
 * 
 * */ 

function UnAnsweredPoll(props) {
    // get the author of the question , which is user 
    const questions = useSelector((state) => state.questions)
    //get user objects - array of users
    const userObjects = useSelector((state) => state.users)

    const users = Object.values(userObjects)
    // get the user avatar based on the author 

    return (<div>
        {props.questions.map(q => (
            <div className="card" key={q.id}>
                <div className="author"> {q.author} asks: </div>
                <div className="question">
                    <img src={userObjects[q.author].avatarURL} width="100" height="120" />
                    <div className="question-col">
                        <div className="card-body">Would you rather</div>
                        <div>{q.optionOne.text.toString()}...</div>
                        <Link className="nav-link" to={{
                            pathname: `/viewresults/${q.id}` 
                        }}  state={{ from: q }} > View Poll </Link>
                    </div>
                </div>
            </div>
        ))}
    </div>)
}

export default UnAnsweredPoll