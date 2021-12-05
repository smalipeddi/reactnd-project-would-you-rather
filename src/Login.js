import React from 'react';

class Login extends React.Component{

    componentDidMount() {

    }
    loginUser = (e) => {
        e.preventDefault();
        const name= this.input.value;
        console.log(name);
        this.input.value = '';
      }
   
    render() {
      return(
        <div>
          <h1> Sign In </h1>
            <input type="text" placeholder="User Name" ref={(input) => this.input = input}/>
       
             <button onClick ={this.loginUser}> Sign In </button>
          </div>
      )
    }
  }

  export default Login;