import React, { Component } from 'react';
import Navigation from "../Navigation/Navigation";
import { connect } from 'react-redux'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { getFirstOption, getSecondOption, addQuestion, setAuthedUser, saveQuestion } from '../../redux'

class NewQuestion extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            question: {
                optionOne: '',
                optionTwo: '',
                author: ''
            }
        }

        this.handleFirstOption = this.handleFirstOption.bind(this)
        this.handleSecondOption = this.handleSecondOption.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount() {
        const author = {

            ...this.state,

            question: {

                ...this.state.question,

                author: this.props.authedUser
            }
        }
        this.setState(author);

        console.log("sunitha in new qustion", this.state);
        console.log("sunitha in new qustion", this.props);

    }

    handleFirstOption = (e) => {

        const optionOneText = {
            // copy state
            ...this.state,
            // overwrite question
            question: {
                // copy question
                ...this.state.question,
                // overwrite optionOne
                optionOne: e.target.value
            }
        }
        this.setState(optionOneText);
    }

    handleSecondOption = (e) => {
        const optionTwoText = {

            ...this.state,

            question: {

                ...this.state.question,

                optionTwo: e.target.value
            }
        }
        this.setState(optionTwoText);
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.saveQuestion(this.state.question);
    }

    render() {
        return (<div>
            <Navigation />
            <div> {this.props.authedUser}</div>
            {this.props.authedUser ? (
                <div>
                    <h1>Create New Question</h1>
                    <p>Comptet the Question:</p>
                    <div>Would you rather - </div>
                    <form onSubmit={this.handleSubmit}>
                        <label></label>
                        <br />
                        <input
                            name='firstOption'
                            type='text'
                            onChange={this.handleFirstOption}
                        />
                        <br />
                        <span>OR</span>
                        <br />
                        <input
                            name='secondOption'
                            type='text'
                            onChange={this.handleSecondOption}
                        />
                        <br />
                        <br />
                        <button>Submit</button>
                    </form></div>) : (<div> Please Sign In to add New Question</div>)}
            </div>)
    }
}
// AppContainer.js
function mapStateToProps(state) {

    return {
        authedUser: state.authedUser,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        saveQuestion,
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(NewQuestion)