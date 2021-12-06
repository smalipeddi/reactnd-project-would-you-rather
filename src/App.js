import React from 'react';
import './App.css';
import * as API from './_DATA';
import Login from './Login';
import Navigation from "./Components/Navigation/Navigation";
import { connect  } from 'react-redux';
import { handleInitialData } from "./Actions/shared";
import {setAuthedUser} from "./Actions/authedUser";
import { receiveUsers } from './Actions/users';

const Context = React.createContext();

class ConnectedLoginApp extends React.Component {
  render() {
    return (
      <Context.Consumer>
        {(store) => {
          
          return <Login/>
      
          
      }}</Context.Consumer>)
  }
}


class App extends React.Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
        </header>
        <main>
        <Navigation />
         
            <ConnectedLoginApp />
         
        </main>
      </div>
    );
  }
}

const  mapStateToProps = (state) => {
  console.log("sunitha is app", state);
  return {
    authedUser: state.authedUser,
    users: state.users.users,
    isLoggedIn: state.isLoggedIn
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
   // users: () => dispatchEvent(receiveUsers()),
    authedUser: () => dispatch(setAuthedUser())
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(App);

