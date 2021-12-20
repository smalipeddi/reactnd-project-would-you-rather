import React  from 'react';
import { Link } from 'react-router-dom'
import {useSelector} from 'react-redux'
 
/** 
 * UnAnswered Component will take the question and populate a ui with the two radio buttons which will vote 
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
            <div className="card wrapper" key={q.id}>
                <div className="author"> {q.author} asks: </div>
                <div className="question">
                    <img src={userObjects[q.author].avatarURL} width="100" height="120" />
                    <div className="question-col">
                        <div className="card-body ">Would you rather</div>
                        <div className="padding">{q.optionOne.text.toString()}...</div>
                        <button className="btn btn-warning">
                        <Link className="nav-link" to={{
                            pathname: `/question/${q.id}` 
                        }}  state={{ from: q  }} > View Poll </Link>
                        </button>
                    </div>
                </div>
            </div>
        ))}
    </div>)
}

export default UnAnsweredPoll