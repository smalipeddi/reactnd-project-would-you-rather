import React, { Component } from 'react';
import { Link } from 'react-router-dom'

// will take the question and populate a ui with the two radio buttons which will vote 
class UnAnsweredPoll extends Component {
   render() {
       return (<div>  
           {this.props.questions.map(q => (
            <div  className="card" key={q.id}> 
            <div className="author"> {q.author} asks: </div>
            <div className="question">
                <img src="../../images/first.jpg" width="100" height="120" />
                <div className="question-col">
                    <div className="card-body">Would you rather</div>
                    <div>{q.optionOne.text.toString()}</div>
                    <Link className="nav-link" to={{
                            pathname: `/question/${q.id}`
                        }}> View PResults </Link>
                </div>
            </div>
        </div>
           ))}
       </div>)
   }
}

export default UnAnsweredPoll