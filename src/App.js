import React from 'react';
import './App.css';
import * as API from './_DATA';
import Login from './Login';
import Navigation from "./Navigation/Navigation"

const Context = React.createContext();

class ConnectedLoginApp extends React.Component {
  render() {
    return (
      <Context.Consumer>
        {(store) => {
          // const { isLoggedIn } = store.getState();
          // console.log(isLoggedIn);
          // return <Login isLoggedIn={isLoggedIn} dispatch={store.dispatch} />
          return <Login />
        }}</Context.Consumer>)
  }
}


class App extends React.Component {
  componentDidMount() {
    const { store } = this.props
  }

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

export default App;
