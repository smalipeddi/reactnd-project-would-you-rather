import React, { useState } from "react";
import Navigation from "../Navigation/Navigation";
import { connect, useDispatch } from "react-redux";
import { useSelector } from 'react-redux'
import { questions, question, users, authedUser, saveQuestionAnswer } from '../../redux'
import { useLocation, useNavigate } from 'react-router-dom'


function ViewResults(props) {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const authedUser = useSelector((state) => state.authedUser)
    //get user objects - array of users
    const userObjects = useSelector((state) => state.users)

    const users = Object.values(userObjects)
    // get the user avatar based on the author 

    const location = useLocation()
    const { from } = location.state
    console.log("FROM",from)
    console.log("USERS", users)

    return (

        <div>
            <Navigation />

            <div className="card" >
                <div className="author">Asked by  {from.author}  </div>
                <div className="question">
                    <img src={userObjects[from.author].avatarURL} width="100" height="120" />
                    <div className="question-col">
                        <div className="card-title">Results</div>
                        <div>
                            <div>
                                <div>
                                    {from.optionOne.text}
                                </div>
                                <div> % </div>
                                <div className="progress">
                                    <div className="progress-bar" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">25%</div>
                                </div>
                                <div> 2 out of 3 votes</div>
                            </div>
                            <div>
                                <div>
                                    {from.optionTwo.text}
                                </div>
                                <div className="progress">
                                    <div className="progress-bar" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">25%</div>
                                </div>
                                <div> 2 out of 3 votes</div>
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
