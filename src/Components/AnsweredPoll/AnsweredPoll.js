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
    
    //get user objects - array of users
    const userObjects = useSelector((state) => state.users)

    // get the user avatar based on the author 
    return (<div>
        {props.questions.map(q => (
            <div className="card center-card" key={q.id}>
                <div className="author"> {q.author} asks: </div>
                <div className="question">
                    <img src={userObjects[q.author].avatarURL} alt="avatar" width="100" height="120" />
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