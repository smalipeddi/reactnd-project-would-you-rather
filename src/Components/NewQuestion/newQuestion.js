import React, { Component } from 'react';
import Navigation from "../Navigation/Navigation";

class NewQuestion extends Component {
    render() {
        return (
            <div>
                <Navigation />
                <h1>Create New Question</h1>
                <p>Comptet the Question</p>
                <div>Would You rather -</div>
                <form >
                    <input type="input" placeholder="First Question" />
                    <input type="input" placeholder="Second Question" />
                    <button type="submit" >SUBMIT</button>
                </form>

            </div>
        )
    }
}

export default NewQuestion