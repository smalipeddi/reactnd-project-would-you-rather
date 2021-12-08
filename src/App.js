import React from 'react';
import { connect } from 'react-redux';
import SignIn from './Components/SignIn/SignIn'
import Navigation from './Components/Navigation/Navigation'
import { setAuthedUser, receiveUsers, login,logout } from './redux';

// App.js
export class App extends React.Component {
  render() {
    const {users ,authedUser , user } = this.props
    return (
      <div>
        <Navigation />
        <SignIn />
      </div>
    );
  }
}

// AppContainer.js
const mapStateToProps = state => ({
  user: state.user,
  users: state.users,
  authedUser: state.authedUser
});

const mapDispatchToProps = {
  receiveUsers,
  setAuthedUser,
  login,
  logout
};

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default AppContainer;
