import React, { Component } from 'react';


// will take the question and populate a ui with the two radio buttons which will vote 
function UserPoll(props) {
    return (
        <div>
            <img src="avatarURL" />
            <h1>id</h1>id: 'tylermcginnis',
            <div>Answered Questions  answers.length</div>
            <div> Created Questions questions.length</div>
            <div>
                <p>Score : answers.length + questions.length</p>
            </div>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        question: state.question,
        user: state.user
    }
}

function mapDispatchToProps(dispatch) {
    return {
        savePoll: () => dispatch(savePoll)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserPoll)