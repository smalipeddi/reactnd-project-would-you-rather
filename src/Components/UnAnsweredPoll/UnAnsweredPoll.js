import React, { Component } from 'react';
import { connect } from 'react-redux'
import { useNavigate } from 'react-router-dom'
// will take the question and populate a ui with the two radio buttons which will vote 
function UnAnsweredPoll(props) {
    const navigate = useNavigate();

    const handleViewPoll = () => {
        navigate('/viewpoll')
    }

    return (<div> HELLO SUNITHA
        {props.questions.map(q => (<div key={q.id}> 
            <div> {q.author} asks: </div>
            <div>
                <div>avatar</div>
                <div><span>Would you rather</span>
                    <div>{q.optionOne.text}...</div></div>
                <button onClick={handleViewPoll}>View Poll</button>
            </div>
        </div>
        ))}
    </div>)
}

function mapStateToProps(state) {
    return {
        question: state.question,
        user: state.user,
        questions: state.questions,
        users: state.users,
        authedUser: state.authedUser
    }
}

function mapDispatchToProps(dispatch) {
    return {
        //    savePoll: () => dispatch(savePoll)
    }
}

//export default connect(mapStateToProps, mapDispatchToProps)(UnAnsweredPoll)
export default UnAnsweredPoll