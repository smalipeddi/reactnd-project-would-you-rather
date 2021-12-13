import React, { Component } from 'react';
import { connect } from 'react-redux'

// will take the question and populate a ui with the two radio buttons which will vote 
class UnAnsweredPoll extends Component {
   constructor(props)  {
       super(props)

   }

   render() {
       console.log("un answered props",this.props);
       return (<div> HELLO SUNITHA 
           {this.props.questions.map(q => (<div key={q.id}>
             <div> {q.author} asks: </div>
             <div>
                 <div>avatar</div>
                 <div><span>Would you rather</span> 
                 <div>{q.optionOne.text}...</div></div>
                 <button>View Poll</button>
            </div>
            </div>
           ))}
       </div>)
   }
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