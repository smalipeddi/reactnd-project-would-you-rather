import React from 'react';
import { connect } from 'react-redux';
import {setAuthedUser} from "./Actions/authedUser";
class Login extends React.Component{

  componentDidMount() {
    
   }
   loginUser = (e) => {
        e.preventDefault();
        const name= this.input.value;
        this.input.value = '';
      }
   
    render() {
      return(
        <div>
          <h1> Sign In </h1>
            <input type="text" placeholder="User Name" ref={(input) => this.input = input}/>
          
             <button onClick ={this.props.setAuthedUser}> Sign In </button>
          </div>
      )
    }
  }

function mapStateToProps(state) {
  return {
    authedUser: state.authedUser,
    users: state.users,
    isLoggedIn: state.isLoggedIn
  }
}

function mapDispatchToProps(dispatch) {
  return {
    authedUser: () => dispatch(setAuthedUser())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Login);

