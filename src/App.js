import React from 'react';

import { connect } from 'react-redux';

import { signInUser, signOutUser, setAuthedUser, receiveUsers } from './redux';

// App.js
export class App extends React.Component {
  render() {
    console.log("anu", this.props.user);
    return (
      <div>
        <h1>{this.props.user.title || 'Hello World!'}</h1>

        {
        this.props.user.title ? 
        (
          <button onClick={this.props.signOutUser}>Exit user</button>
        ) : 
        (
          <button
            onClick={() =>
              this.props.signInUser({ title: 'I am a geo dude!' })
            }
          >
            Click Me!
          </button>
        )}


{
        this.props.users ? 
        (
          <h1>{this.props.users[0]}</h1>
        ) : 
        (
          <h1>{this.props.users[0]}</h1>
         
        )}
        
        

      </div>
    );
  }
}

// AppContainer.js
const mapStateToProps = state => ({
  user: state.user,
  users: state.users
});

const mapDispatchToProps = {
  signInUser,
  signOutUser,
  setAuthedUser,
  receiveUsers

};

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default AppContainer;
