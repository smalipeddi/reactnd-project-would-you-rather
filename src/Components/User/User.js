import React, { Component } from 'react';

class User extends Component {
    render() {
        return (
            <div>
                <img src="avatarURL" />
                <h1>id</h1>id: 'tylermcginnis',
                <div>Answered Questions  answers.length</div>
                <div> Created Questions questions.length</div>
                <div>
                    <p>Score : answers.length + questions.length</p>
                </div>
            </div>
        )
    }
}

export default User