import React from 'react';
import Navigation from "../Navigation/Navigation";
import { connect } from 'react-redux'
import { addNewQuestion, authedUser, questions, saveNewQuestion } from '../../redux'
import { Navigate } from 'react-router-dom';

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

                authedUser: this.props.authedUser
            }
        }
        this.setState(authedUser);



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
        const { optionOne, optionTwo, authedUser } = this.state.question;
        this.props.saveNewQuestion({ optionOne, optionTwo, authedUser });
        // <Navigate to='/home' />
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
                    <form onSubmit={() => this.handleSubmit}>
                        <label></label>
                        <br />
                        <input
                            name='firstOption'
                            type='text'
                            onChange={() => this.handleFirstOption}
                        />
                        <br />
                        <span>OR</span>
                        <br />
                        <input
                            name='secondOption'
                            type='text'
                            onChange={() => this.handleSecondOption}
                        />
                        <br />
                        <br />
                        <button>Submit</button>
                    </form></div>) : (<div> Please Sign In to add New Question</div>)}
        </div>)
    }
}

function mapStateToProps(state) {

    return {
        authedUser,
        questions
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        saveNewQuestion
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(NewQuestion)