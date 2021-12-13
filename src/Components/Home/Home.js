import React, { Component } from 'react';
import Navigation from "../Navigation/Navigation";
import { connect } from 'react-redux'
import { login, receiveUsers, setAuthedUser } from '../../redux';
import AnsweredPoll from "../AnsweredPoll/AnsweredPoll"
import UnAnsweredPoll from "../UnAnsweredPoll/UnAnsweredPoll"
class Home extends Component {
    constructor(props){
      super(props)

      this.state = {
        showUnAnsweredQuestions: true,
        unAnsweredQuestions: [],
        answeredQuestions: []
      }
    }
   
   render() {
    const questions = Object.keys(this.props.questions);
    console.log(questions);
    const list = Object.values(this.props.questions)
    const unAnsweredQuestions = []
    const answeredQuestions = []
    console.log("ninini", list);
    // caterorize unanswered and answered questions by author
    const users = list.map(l => {
        if(l.optionOne.votes.includes(l.author) || l.optionTwo.votes.includes(l.author)){
          answeredQuestions.push(l)
        } else {
         unAnsweredQuestions.push(l)
        }
     });
        return (
            <div>
                <Navigation />
                <div>
                    <button onClick={() => this.setState({showUnAnsweredQuestions: !this.state.showUnAnsweredQuestions})}>UNANSWERED QUESTIONS</button>
                    <button onClick={() => this.setState({showUnAnsweredQuestions: !this.state.showUnAnsweredQuestions})}>ANSWERED QUESTIONS</button>
                </div>
                <div>
                    <div>{this.state.showUnAnsweredQuestions}</div>
                    {this.state.showUnAnsweredQuestions ? ( <div> <UnAnsweredPoll questions={unAnsweredQuestions}/> </div>) : (<div><AnsweredPoll questions={answeredQuestions} /></div>)}
                </div>
            </div>
        )
    }
  
}

// AppContainer.js
function mapStateToProps(state) {
    return {
      users: state.users,
      questions: state.questions,
      authedUser: state.authedUser,
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
      setAuthedUser: () => dispatch(setAuthedUser)
    }
  };

export default connect(mapStateToProps, mapDispatchToProps)(Home)