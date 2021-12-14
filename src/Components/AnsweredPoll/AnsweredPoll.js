import React, { Component } from 'react';

// will take the question and populate a ui with the two radio buttons which will vote 
class UnAnsweredPoll extends Component {
   constructor(props)  {
       super(props)

   }

   render() {
       console.log("un answered props",this.props);
       return (<div>  
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

export default UnAnsweredPoll