import React, { Component } from "react";
import Navigation from "../Navigation/Navigation";
import { connect } from "react-redux";
import { setAuthedUser } from "../../redux";
import { Navigate } from 'react-router-dom'
import AnsweredPoll from "../AnsweredPoll/AnsweredPoll";
import UnAnsweredPoll from "../UnAnsweredPoll/UnAnsweredPoll";

/** 
 * Component that displays the Answered and UnAnsered questions by users
 * 
 * */
class Home extends Component {

  constructor(props) {
    super(props)

    // since this page is used to display content from the questions fetched, local state can be used to get
    // un answered questions and answered questions 
    this.state = {
      showUnAnsweredQuestions: true,
      unAnsweredQuestions: [],
      answeredQuestions: []
    }
  }

  render() {
    const { users, questions, authedUser } = this.props;

    const user = users[authedUser];
    const list = Object.values(this.props.questions);

    // find the answered question ids from answers for the logged in user
    const answeredQuestionsByUser = Object.keys(user.answers).sort((a, b) => questions[b].timestamp - questions[a].timestamp);

    // get te list of questions that were answered by authedUser
    const answeredQuestions = Object.values(questions).filter(q => answeredQuestionsByUser.includes(q.id))

    // get te list of questions that were un answered by authedUser
    const unAnsweredQuestions = Object.values(questions).filter(q => !answeredQuestionsByUser.includes(q.id));

    return (
      <div className="container-fluid">
        {this.props.authedUser ?
          (<div> <Navigation />
            <div className="row align-items-start">
              <div className="col"></div>
              <div className="col">
                <div className="btn-group" role="group" aria-label="Basic">
                  <button type="button" className="btn btn-outline-primary active"
                    onClick={() =>
                      this.setState({
                        showUnAnsweredQuestions: !this.state.showUnAnsweredQuestions,
                      })
                    }
                  >
                    UNANSWERED QUESTIONS
            </button>
                  <button ype="button" className="btn btn-primary"
                    onClick={() =>
                      this.setState({
                        showUnAnsweredQuestions: !this.state.showUnAnsweredQuestions,
                      })
                    }
                  >
                    ANSWERED QUESTIONS
            </button>
                </div>
                <div>
                  <div>{this.state.showUnAnsweredQuestions}</div>
                  {this.state.showUnAnsweredQuestions ? (
                    <div>
                      {" "}
                      <UnAnsweredPoll questions={unAnsweredQuestions} />{" "}
                    </div>
                  ) : (
                    <div>
                      <AnsweredPoll questions={answeredQuestions} />
                    </div>
                  )}
                </div>
              </div>
              <div className="col"></div>
            </div>
          </div>) : (<Navigate to="/pagenotfound" />
          )}
      </div>
    );
  }
}

// AppContainer.js
function mapStateToProps(state) {
  return {
    users: state.users,
    questions: state.questions,
    authedUser: state.authedUser,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    setAuthedUser: () => dispatch(setAuthedUser),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
