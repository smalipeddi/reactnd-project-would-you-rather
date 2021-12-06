import React from 'react';
import { connect } from 'react-redux';
<<<<<<< HEAD
import { setAuthedUser } from "../../Actions/authedUser";
import { receiveUsers } from '../../Actions/users';
import Navigation from "../Navigation/Navigation";
class SignIn extends React.Component {
    constructor(props) {
        super(props);




        this.state = {
            users: props.users, //provided by connect@mapStateToProps
            isLoggedIn: props.isLoggedIn
        };
        console.log("malli", this.state.users);
    }




    getIdsOfUsers = () => {
        let res = this.props.users;
        return res;
    }
    handleUserChange = (e) => {
        //  setName(e.target.value)
    }

    loginUser = (e) => {
        e.preventDefault();
        const name = this.input.value;
        console.log("hello there", name);
        this.input.value = '';
    }

    render() {
        return ( <
            div >
            <
            h1 > Sign In < /h1> <
            input type = "text"
            placeholder = "User Name"
            value = { this.props.user }
            ref = {
                (input) => this.input = input }
            />

            <
            button onClick = { this.props.authedUser } > Sign In < /button> <
            /div>
        )
    }
}
=======
import {setAuthedUser} from "../../Actions/authedUser";
import { receiveUsers } from '../../Actions/users';
import Navigation from "../Navigation/Navigation";
class SignIn extends React.Component{
  constructor(props) {
    super(props);

    
    

    this.state = {
        users: props.users, //provided by connect@mapStateToProps
        isLoggedIn: props.isLoggedIn
    };
    console.log("malli",this.state.users);
  }
  
 


   getIdsOfUsers = () => {
     let res = this.props.users;
     console.log("fuck me",res);
     return res;
   }
   handleUserChange = (e) => {
  //  setName(e.target.value)
  }
  
   loginUser = (e) => {
        e.preventDefault();
        const name= this.input.value;
        console.log("hello there", name);
        this.input.value = '';
    }
   
    render() {
      return(
        <div>
         <h1> Sign In </h1>
            <input type="text" placeholder="User Name" value={this.props.user} ref={(input) => this.input = input}/>
           
             <button onClick ={this.props.authedUser}> Sign In </button>
          </div>
      )
    }
  }
>>>>>>> 57debdb554da4c27d4348915ce4428d6e99dc58f

// function mapStateToProps(state) {
//   console.log("sunitha in signin", state);
//   return {
//     authedUser: state.authedUser,
//     users: state.users,
//     isLoggedIn: state.isLoggedIn
//   }
// }

// function mapDispatchToProps(dispatch) {
//   return {
//     authedUser: () => dispatch(setAuthedUser()),
//     users: () => dispatch(receiveUsers())

//   }
// }
// export default connect(mapStateToProps, mapDispatchToProps)(SignIn);


// AppContainer.js
const mapStateToProps = state => ({
<<<<<<< HEAD
    // authedUser: state.authedUser,
    // users: state.users,
    // isLoggedIn: state.isLoggedIn
});

const mapDispatchToProps = {
    // setAuthedUser,
    // receiveUsers
};

const SignInContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(SignIn);

export default SignInContainer;
=======
  // authedUser: state.authedUser,
  // users: state.users,
  // isLoggedIn: state.isLoggedIn
});

const mapDispatchToProps = {
  // setAuthedUser,
  // receiveUsers
};

const SignInContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SignIn);

export default SignInContainer;
>>>>>>> 57debdb554da4c27d4348915ce4428d6e99dc58f
