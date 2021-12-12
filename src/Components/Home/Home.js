import React, { Component } from 'react';
import Navigation from "../Navigation/Navigation";
import { connect } from 'react-redux'
import AnsweredPoll from "../AnsweredPoll/AnsweredPoll"
import UnAnsweredPoll from "../UnAnsweredPoll/UnAnsweredPoll"
class Home extends Component {
    constructor(props){
      super(props)

      this.state = {
        showUnAnsweredQuestions: true
      }
    }
   
   render() {
        return (
            <div>
                <Navigation />
                <div>
                    <button onClick={() => this.setState({showUnAnsweredQuestions: !this.state.showUnAnsweredQuestions})}>UNANSWERED QUESTIONS</button>
                    <button onClick={() => this.setState({showUnAnsweredQuestions: !this.state.showUnAnsweredQuestions})}>ANSWERED QUESTIONS</button>
                </div>
                <div>
                    <div>{this.state.showUnAnsweredQuestions}</div>
                    {this.state.showUnAnsweredQuestions ? ( <div> <UnAnsweredPoll /> </div>) : (<div><AnsweredPoll /></div>)}
                </div>

            </div>
        )
    }
  
}

export default Home