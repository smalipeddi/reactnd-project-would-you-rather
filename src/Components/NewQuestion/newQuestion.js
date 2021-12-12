import React, { Component } from 'react';
import Navigation from "../Navigation/Navigation";
import { connect } from 'react-redux'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { getFirstOption, getSecondOption, addQuestion, setAuthedUser, saveQuestion } from '../../redux'

class NewQuestion extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            question: {
                optionOne: '',
                optionTwo: '',
                author: ''
            }
        }

        this.handleFirstOption = this.handleFirstOption.bind(this)
        this.handleSecondOption = this.handleSecondOption.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        console.log("sunitha all state", this.state);
        console.log("sunitha all props", this.props);
    }

    handleFirstOption = (e) => {

        const question1 = {
            // copy state
            ...this.state,
            // overwrite question
            question: {
                // copy question
                ...this.state.question,
                // overwrite optionOne
                optionOne: e.target.value
            }
        }

        this.setState(question1);
       
    }

    handleSecondOption = (e) => {
       const question2 = {
           
            ...this.state,
          
            question: {
                
                ...this.state.question,
               
                optionTwo: e.target.value
            }
        }
        this.setState(question2);
        

    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log("sunitha", this.props.authedUser);
        // add author to the question 
        const author = {
           
            ...this.state,
          
            question: {
                
                ...this.state.question,
               
                author: this.props.authedUser
            }
        }
        this.setState(author);
        console.log("madhu",this.state);
        this.props.saveQuestion(this.state.question);
        
        console.log("anitha", this.state);
    }


    render() {
        return (<div>
            <Navigation />
            <form onSubmit={this.handleSubmit}>
                <label></label>
                <br />
                <input
                    name='firstOption'
                    type='text'
                    onChange={this.handleFirstOption}

                />
                <br />
                <label>First Option</label>
                <br />
                <input
                    name='secondOption'
                    type='text'
                    onChange={this.handleSecondOption}

                />
                <br />
                <label>Second Option</label>
                <br />

                <button>Submit</button>
            </form>
        </div>)
    }

}
 // AppContainer.js
function mapStateToProps(state) {
    console.log("hello",state);
    return {
      authedUser: state.authedUser,
    }
  }

  const mapDispatchToProps = (dispatch) => {
    return {
        saveQuestion,
    }
  };

export default connect(mapStateToProps,mapDispatchToProps)(NewQuestion)