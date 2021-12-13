import React, { Component } from 'react';
import Navigation from "../Navigation/Navigation";

import { connect } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function ViewPoll(props) {

    return (
        <div>
            <Navigation />
            <h1>Create New Question</h1>
            <p>Comptet the Question</p>
            <div>Would You rather -</div>
            <form >
                <input type="input" placeholder="First Question" />
                <input type="input" placeholder="Second Question" />
                <button type="submit" >SUBMIT</button>
            </form>

        </div>
    )

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

export default connect(mapStateToProps, mapDispatchToProps)(ViewPoll)