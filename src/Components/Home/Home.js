import React, { Component } from 'react';
import Navigation from "../Navigation/Navigation";

class Home extends Component {
    render() {
        return (
            <div>
                <Navigation />
                <div>
                    <div onClick="showUnansweredQUestions">UNANSWERED QUESTIONS</div>
                    <div onClick="showAnsweredQuestions">ANSWERED QUESTIONS</div>
                </div>
                <div>
                    // if conition is met to show first colum so first otherqwise seconds
                    <div>
                        // add list of users 
                    </div>
                </div>

            </div>
        )
    }
}

export default Home