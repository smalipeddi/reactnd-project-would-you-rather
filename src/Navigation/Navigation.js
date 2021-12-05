import React from 'react';
import '../App.css';

class Navigation extends React.Component {
    render() {
        return (
            <div id="nav">
                <ul>
                    <li>
                        Home
                    </li>
                    <li>
                        New Questions
                    </li>
                    <li>
                        Leader Board
                    </li>
                </ul>
                <div >
                    <div className="userName" >  user loggedIn </div>
                    <button className="logout"> LOGOUT </button>
                </div>
                
            </div>
        )
    }
}

export default Navigation