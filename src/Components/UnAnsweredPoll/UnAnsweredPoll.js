import React from 'react';
import { useNavigate } from 'react-router-dom'
import { saveQuestion1 } from "../../redux";
import { useDispatch } from 'react-redux'

// will take the question and populate a ui with the two radio buttons which will vote 
function UnAnsweredPoll(props) {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    let handleViewPoll = (q) => {
        dispatch(saveQuestion1(q))
        navigate('/viewpoll')
    }

    return (<div>
        {props.questions.map(q => (<div key={q.id}> 
            <div> {q.author} asks: </div>
            <div>
                <div>avatar</div>
                <div><span>Would you rather</span>
                    <div>{q.optionOne.text}...</div></div>
                <button onClick={() => {handleViewPoll(q)}}>View Poll</button>
            </div>
        </div>
        ))}
    </div>)
}

export default UnAnsweredPoll