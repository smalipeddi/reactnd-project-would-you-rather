import React  from 'react';
import { Link } from 'react-router-dom'
import {useSelector} from 'react-redux'
 
/** 
 * UnAnswered Component will take the question and populate a ui with the two radio buttons which will vote 
 * */ 


function UnAnsweredPoll(props) {
    //get user objects - array of users
    const userObjects = useSelector((state) => state.users)

    return (<div>
        {props.questions.map(q => (
            <div className="card center-card" key={q.id}>
                <div className="author"> {q.author} asks: </div>
                <div className="question">
                    <img src={userObjects[q.author].avatarURL} alt="avatar" width="100" height="120" />
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