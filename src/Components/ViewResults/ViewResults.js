import React from "react";
import Navigation from "../Navigation/Navigation";
import { connect } from "react-redux";
import { useSelector } from 'react-redux'
import { useLocation, } from 'react-router-dom'

function ViewResults(props) {

    //get user objects - array of users
    const userObjects = useSelector((state) => state.users)

    const location = useLocation()
    const { from } = location.state

    return (

        <div>
            <Navigation />

            <div className="card center-card" >
                <div className="author">Asked by  {from.author}  </div>
                <div className="question">
                    <img src={userObjects[from.author].avatarURL} alt="avatar" width="100" height="120" />
                    <div className="question-col result-wrapper">
                        <div className="card-title">Results</div>
                        <div>
                            <div className="result">
                                <div>
                                    {from.optionOne.text}
                                </div>
                                <div> {from.optionOne.votes.length / (from.optionOne.votes.length + from.optionTwo.votes.length) * 100}  % </div>
                            </div>
                            <div className="result">
                                <div>
                                    {from.optionTwo.text}
                                </div>
                                <div> {from.optionTwo.votes.length / (from.optionOne.votes.length + from.optionTwo.votes.length) * 100}  % </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function mapStateToProps(state) {
    return {

    }
}

function mapDispatchToProps(dispatch) {
    return {


    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewResults);
